;(window.webpackJsonp = window.webpackJsonp || []).push([
    [14],
    {
        135: function(t, n) {
            var e = /-+([a-z])/gi
            function r(t, n, e) {
                return 0 !== e ? n.toUpperCase() : n
            }
            t.exports = function(t) {
                var n = t.replace(e, r)
                return (e.lastIndex = 0), n
            }
        },
        136: function(t, n) {
            t.exports = function(t, n) {
                var e = {}
                for (var r in t) t.hasOwnProperty(r) && (e[r] = n(t[r]))
                return e
            }
        },
        138: function(t, n, e) {
            'use strict'
            e.r(n)
            n.default = {
                nodes: [
                    { id: 'Lorem', group: '1', connections: 0 },
                    { id: 'Ipsum', group: '2', connections: 0 },
                    { id: 'dolor', group: '2', connections: 0 },
                    { id: 'sit', group: '1', connections: 0 },
                    { id: 'amet', group: '1', connections: 3 },
                    { id: 'consectetur', group: '2', connections: 3 },
                    { id: 'adipiscing', group: '1', connections: 3 },
                    { id: 'eiusmod', group: '1', connections: 3 },
                    { id: 'incididunt', group: '3', connections: 14 },
                    { id: 'reprehenderit', group: '3', connections: 16 },
                    { id: 'voluptate', group: '3', connections: 9 },
                    { id: 'pariatur', group: '3', connections: 3 },
                    { id: 'reprehenderit', group: '3', connections: 3 },
                    { id: 'occaecat', group: '4', connections: 3 },
                    { id: 'cupidatat', group: '4', connections: 3 },
                    { id: 'non', group: '1', connections: 1 },
                    { id: 'proident', group: '1', connections: 1 },
                    { id: 'quis', group: '1', connections: 1 },
                    { id: 'nostrud', group: '1', connections: 1 },
                    { id: 'exercitation', group: '1', connections: 1 },
                    { id: 'ullamco', group: '1', connections: 1 },
                    { id: 'laboris', group: '1', connections: 1 },
                    { id: 'aliquip', group: '1', connections: 1 },
                    { id: 'ex', group: '1', connections: 1 },
                    { id: 'sdagdfsg', group: '1', connections: 1 },
                    { id: 'fghdhgfdf', group: '4', connections: 1 },
                    { id: 'treyrtey', group: '4', connections: 1 },
                    { id: 'Ddfghfgd', group: '1', connections: 1 },
                    { id: 'retyyutry', group: '1', connections: 1 },
                    { id: 'vcbdfsg', group: '1', connections: 1 },
                ],
                links: [
                    { source: '4', target: '8', value: 1 },
                    { source: '4', target: '9', value: 1 },
                    { source: '4', target: '10', value: 1 },
                    { source: '5', target: '8', value: 1 },
                    { source: '5', target: '9', value: 1 },
                    { source: '5', target: '10', value: 1 },
                    { source: '6', target: '8', value: 1 },
                    { source: '6', target: '9', value: 1 },
                    { source: '6', target: '10', value: 1 },
                    { source: '7', target: '8', value: 1 },
                    { source: '7', target: '9', value: 1 },
                    { source: '7', target: '10', value: 1 },
                    { source: '11', target: '8', value: 1 },
                    { source: '11', target: '9', value: 1 },
                    { source: '11', target: '10', value: 1 },
                    { source: '12', target: '8', value: 1 },
                    { source: '12', target: '9', value: 1 },
                    { source: '12', target: '10', value: 1 },
                    { source: '13', target: '8', value: 1 },
                    { source: '13', target: '9', value: 1 },
                    { source: '13', target: '10', value: 1 },
                    { source: '14', target: '8', value: 1 },
                    { source: '14', target: '9', value: 1 },
                    { source: '14', target: '10', value: 1 },
                    { source: '15', target: '8', value: 1 },
                    { source: '16', target: '8', value: 1 },
                    { source: '17', target: '8', value: 1 },
                    { source: '18', target: '8', value: 1 },
                    { source: '19', target: '8', value: 1 },
                    { source: '20', target: '8', value: 1 },
                    { source: '21', target: '9', value: 1 },
                    { source: '22', target: '9', value: 1 },
                    { source: '23', target: '9', value: 1 },
                    { source: '24', target: '9', value: 1 },
                    { source: '25', target: '9', value: 1 },
                    { source: '26', target: '9', value: 1 },
                    { source: '27', target: '9', value: 1 },
                    { source: '28', target: '9', value: 1 },
                    { source: '29', target: '10', value: 1 },
                ],
            }
        },
        18: function(t, n, e) {
            t.exports = e(25)
        },
        198: function(t, n, e) {
            var r = e(199),
                i = e(209),
                o = e(210)
            t.exports = function() {
                var t = r(),
                    n = i(),
                    e = {
                        Element: t,
                        defaultView: n,
                        withFauxDOM: o(t),
                        createElement: function(n) {
                            return new t(n)
                        },
                        createElementNS: function(t, n) {
                            return this.createElement(n)
                        },
                        compareDocumentPosition: function() {
                            return 8
                        },
                    }
                return (t.prototype.ownerDocument = e), e
            }
        },
        199: function(t, n, e) {
            var r = e(0),
                i = e(200),
                o = e(201),
                u = e(135),
                a = e(205),
                c = e(206),
                f = e(207),
                s = e(136),
                l = e(208)
            t.exports = function() {
                function t(t, n) {
                    ;(this.nodeName = t),
                        (this.parentNode = n),
                        (this.childNodes = []),
                        (this.eventListeners = {}),
                        (this.text = '')
                    var e = this,
                        r = (this.props = {
                            ref: function(t) {
                                e.component = t
                            },
                            style: {
                                setProperty: function(t, n) {
                                    r.style[l(t)] = n
                                },
                                getProperty: function(t) {
                                    return r.style[l(t)] || ''
                                },
                                getPropertyValue: function(t) {
                                    return r.style.getProperty(t)
                                },
                                removeProperty: function(t) {
                                    delete r.style[l(t)]
                                },
                            },
                        })
                    this.style = r.style
                }
                return (
                    (t.prototype.nodeType = 1),
                    (t.prototype.eventNameMappings = {
                        blur: 'onBlur',
                        change: 'onChange',
                        click: 'onClick',
                        contextmenu: 'onContextMenu',
                        copy: 'onCopy',
                        cut: 'onCut',
                        doubleclick: 'onDoubleClick',
                        drag: 'onDrag',
                        dragend: 'onDragEnd',
                        dragenter: 'onDragEnter',
                        dragexit: 'onDragExit',
                        dragleave: 'onDragLeave',
                        dragover: 'onDragOver',
                        dragstart: 'onDragStart',
                        drop: 'onDrop',
                        error: 'onError',
                        focus: 'onFocus',
                        input: 'onInput',
                        keydown: 'onKeyDown',
                        keypress: 'onKeyPress',
                        keyup: 'onKeyUp',
                        load: 'onLoad',
                        mousedown: 'onMouseDown',
                        mouseenter: 'onMouseEnter',
                        mouseleave: 'onMouseLeave',
                        mousemove: 'onMouseMove',
                        mouseout: 'onMouseOut',
                        mouseover: 'onMouseOver',
                        mouseup: 'onMouseUp',
                        paste: 'onPaste',
                        scroll: 'onScroll',
                        submit: 'onSubmit',
                        touchcancel: 'onTouchCancel',
                        touchend: 'onTouchEnd',
                        touchmove: 'onTouchMove',
                        touchstart: 'onTouchStart',
                        wheel: 'onWheel',
                    }),
                    (t.prototype.skipNameTransformationExpressions = [
                        /^data-/,
                        /^aria-/,
                    ]),
                    (t.prototype.attributeNameMappings = {
                        class: 'className',
                    }),
                    (t.prototype.attributeToPropName = function(t) {
                        return this.skipNameTransformationExpressions
                            .map(function(n) {
                                return n.test(t)
                            })
                            .some(Boolean)
                            ? t
                            : this.attributeNameMappings[t] || u(t)
                    }),
                    (t.prototype.setAttribute = function(t, n) {
                        if ('style' === t && a(n)) {
                            var e = i.parse(n)
                            for (var r in e) this.style.setProperty(r, e[r])
                        } else this.props[this.attributeToPropName(t)] = n
                    }),
                    (t.prototype.getAttribute = function(t) {
                        return this.props[this.attributeToPropName(t)]
                    }),
                    (t.prototype.getAttributeNode = function(t) {
                        var n = this.getAttribute(t)
                        if (!c(n)) return { value: n, specified: !0 }
                    }),
                    (t.prototype.removeAttribute = function(t) {
                        delete this.props[this.attributeToPropName(t)]
                    }),
                    (t.prototype.eventToPropName = function(t) {
                        return this.eventNameMappings[t] || t
                    }),
                    (t.prototype.addEventListener = function(t, n) {
                        var e = this.eventToPropName(t)
                        ;(this.eventListeners[e] =
                            this.eventListeners[e] || []),
                            this.eventListeners[e].push(n)
                    }),
                    (t.prototype.removeEventListener = function(t, n) {
                        var e = this.eventListeners[this.eventToPropName(t)]
                        if (e) {
                            var r = e.indexOf(n)
                            ;-1 !== r && e.splice(r, 1)
                        }
                    }),
                    (t.prototype.appendChild = function(n) {
                        return (
                            n instanceof t && (n.parentNode = this),
                            this.childNodes.push(n),
                            n
                        )
                    }),
                    (t.prototype.insertBefore = function(t, n) {
                        var e = this.childNodes.indexOf(n)
                        return (
                            (t.parentNode = this),
                            -1 !== e
                                ? this.childNodes.splice(e, 0, t)
                                : this.childNodes.push(t),
                            t
                        )
                    }),
                    (t.prototype.removeChild = function(t) {
                        var n = this.childNodes.indexOf(t)
                        this.childNodes.splice(n, 1)
                    }),
                    (t.prototype.querySelector = function() {
                        return (
                            this.querySelectorAll.apply(this, arguments)[0] ||
                            null
                        )
                    }),
                    (t.prototype.querySelectorAll = function(t) {
                        if (!t) throw new Error('Not enough arguments')
                        return o(t, this)
                    }),
                    (t.prototype.getElementsByTagName = function(t) {
                        var n,
                            e = this.children
                        if (0 === e.length) return []
                        n =
                            '*' !== t
                                ? e.filter(function(n) {
                                      return n.nodeName === t
                                  })
                                : e
                        var r = e.map(function(n) {
                            return n.getElementsByTagName(t)
                        })
                        return n.concat.apply(n, r)
                    }),
                    (t.prototype.getElementById = function(t) {
                        var n = this.children
                        if (0 === n.length) return null
                        var e = n.filter(function(n) {
                            return n.getAttribute('id') === t
                        })[0]
                        return (
                            e ||
                            n
                                .map(function(n) {
                                    return n.getElementById(t)
                                })
                                .filter(function(t) {
                                    return null !== t
                                })[0] ||
                            null
                        )
                    }),
                    (t.prototype.getBoundingClientRect = function() {
                        if (this.component)
                            return this.component.getBoundingClientRect()
                    }),
                    (t.prototype.toReact = function(n) {
                        n = n || 0
                        var e = f({}, this.props)
                        e.style = f({}, e.style)
                        var i = this
                        return (
                            c(e.key) && (e.key = 'faux-dom-' + n),
                            delete e.style.setProperty,
                            delete e.style.getProperty,
                            delete e.style.getPropertyValue,
                            delete e.style.removeProperty,
                            f(
                                e,
                                s(this.eventListeners, function(t) {
                                    return function(n) {
                                        var e
                                        n &&
                                            ((e =
                                                n.nativeEvent).syntheticEvent = n),
                                            s(t, function(t) {
                                                t.call(i, e)
                                            })
                                    }
                                }),
                            ),
                            r.createElement(
                                this.nodeName,
                                e,
                                this.text ||
                                    this.children.map(function(n, e) {
                                        return n instanceof t ? n.toReact(e) : n
                                    }),
                            )
                        )
                    }),
                    Object.defineProperties(t.prototype, {
                        nextSibling: {
                            get: function() {
                                var t = this.parentNode.children,
                                    n = t.indexOf(this)
                                return t[n + 1]
                            },
                        },
                        previousSibling: {
                            get: function() {
                                var t = this.parentNode.children,
                                    n = t.indexOf(this)
                                return t[n - 1]
                            },
                        },
                        innerHTML: {
                            get: function() {
                                return this.text
                            },
                            set: function(t) {
                                this.text = t
                            },
                        },
                        textContent: {
                            get: function() {
                                return this.text
                            },
                            set: function(t) {
                                this.text = t
                            },
                        },
                        children: {
                            get: function() {
                                return this.childNodes.filter(function(t) {
                                    return !t.nodeType || 1 === t.nodeType
                                })
                            },
                        },
                    }),
                    [
                        'setAttribute',
                        'getAttribute',
                        'getAttributeNode',
                        'removeAttribute',
                        'getElementsByTagName',
                        'getElementById',
                    ].forEach(function(n) {
                        var e = t.prototype[n]
                        t.prototype[n + 'NS'] = function() {
                            return e.apply(
                                this,
                                Array.prototype.slice.call(arguments, 1),
                            )
                        }
                    }),
                    t
                )
            }
        },
        200: function(t, n) {
            function e(t, n) {
                var e = (n = n || {}).preserveNumbers,
                    r = {}
                return (
                    (function(t) {
                        var n,
                            e = [],
                            r = 0,
                            i = /url\([^\)]+$/,
                            o = ''
                        for (; r < t.length; )
                            -1 === (n = t.indexOf(';', r)) && (n = t.length),
                                (o += t.substring(r, n)),
                                i.test(o)
                                    ? ((o += ';'), (r = n + 1))
                                    : (e.push(o), (o = ''), (r = n + 1))
                        return e
                    })(t)
                        .map(function(t) {
                            return t.trim()
                        })
                        .filter(Boolean)
                        .forEach(function(t) {
                            var n,
                                i = t.indexOf(':'),
                                o = t.substr(0, i).trim(),
                                u = t.substr(i + 1).trim()
                            e &&
                                ((n = u),
                                !isNaN(parseFloat(n)) && isFinite(n)) &&
                                (u = Number(u)),
                                (r[o] = u)
                        }),
                    r
                )
            }
            function r(t) {
                return Object.keys(t)
                    .map(function(n) {
                        return n + ':' + t[n]
                    })
                    .join(';')
            }
            ;(t.exports.parse = e),
                (t.exports.stringify = r),
                (t.exports.normalize = function(t, n) {
                    return r(e(t, n))
                })
        },
        201: function(t, n, e) {
            t.exports = e(202)
        },
        202: function(t, n, e) {
            var r,
                i,
                o = e(203),
                u = e(204),
                a = '_ks_data_selector_id_',
                c = {},
                f = 0,
                s = {},
                l = function(t, n) {
                    return r ? o.getSimpleAttr(t, n) : o.attr(t, n)
                },
                h = o.hasSingleClass,
                d = o.isTag,
                p = /^(([+-]?(?:\d+)?)?n)?([+-]?\d+)?$/,
                v = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
                g = function(t, n) {
                    var e = '0x' + n - 65536
                    return isNaN(e)
                        ? n
                        : e < 0
                        ? String.fromCharCode(e + 65536)
                        : String.fromCharCode(
                              (e >> 10) | 55296,
                              (1023 & e) | 56320,
                          )
                },
                y = {
                    'nth-child': function(t, n) {
                        var e = M(n),
                            r = e.a,
                            i = e.b
                        if (0 === r && 0 === i) return 0
                        var o = 0,
                            u = t.parentNode
                        if (u)
                            for (
                                var a, c, f = u.childNodes, s = 0, l = f.length;
                                s < l;
                                s++
                            )
                                if (
                                    1 === (a = f[s]).nodeType &&
                                    void 0 !== (c = E(++o, r, i, a === t))
                                )
                                    return c
                        return 0
                    },
                    'nth-last-child': function(t, n) {
                        var e = M(n),
                            r = e.a,
                            i = e.b
                        if (0 === r && 0 === i) return 0
                        var o = 0,
                            u = t.parentNode
                        if (u)
                            for (
                                var a, c, f = u.childNodes, s = f.length - 1;
                                s >= 0;
                                s--
                            )
                                if (
                                    1 === (a = f[s]).nodeType &&
                                    void 0 !== (c = E(++o, r, i, a === t))
                                )
                                    return c
                        return 0
                    },
                    'nth-of-type': function(t, n) {
                        var e = M(n),
                            r = e.a,
                            i = e.b
                        if (0 === r && 0 === i) return 0
                        var o = 0,
                            u = t.parentNode
                        if (u)
                            for (
                                var a,
                                    c,
                                    f = u.childNodes,
                                    s = t.tagName,
                                    l = 0,
                                    h = f.length;
                                l < h;
                                l++
                            )
                                if (
                                    (a = f[l]).tagName === s &&
                                    void 0 !== (c = E(++o, r, i, a === t))
                                )
                                    return c
                        return 0
                    },
                    'nth-last-of-type': function(t, n) {
                        var e = M(n),
                            r = e.a,
                            i = e.b
                        if (0 === r && 0 === i) return 0
                        var o = 0,
                            u = t.parentNode
                        if (u)
                            for (
                                var a,
                                    c,
                                    f = u.childNodes,
                                    s = f.length,
                                    l = t.tagName,
                                    h = s - 1;
                                h >= 0;
                                h--
                            )
                                if (
                                    (a = f[h]).tagName === l &&
                                    void 0 !== (c = E(++o, r, i, a === t))
                                )
                                    return c
                        return 0
                    },
                    lang: function(t, n) {
                        var e
                        n = x(n.toLowerCase())
                        do {
                            if (
                                (e = r
                                    ? t.getAttribute('xml:lang') ||
                                      t.getAttribute('lang')
                                    : t.lang)
                            )
                                return (
                                    (e = e.toLowerCase()) === n ||
                                    0 === e.indexOf(n + '-')
                                )
                        } while ((t = t.parentNode) && 1 === t.nodeType)
                        return !1
                    },
                    not: function(t, n) {
                        return !i[n.t](t, n.value)
                    },
                },
                b = {
                    empty: function(t) {
                        for (
                            var n, e = t.childNodes, r = 0, i = e.length - 1;
                            r < i;
                            r++
                        )
                            if (
                                1 === (n = e[r].nodeType) ||
                                3 === n ||
                                4 === n ||
                                5 === n
                            )
                                return 0
                        return 1
                    },
                    root: function(t) {
                        return (
                            9 === t.nodeType ||
                            (t.ownerDocument &&
                                t === t.ownerDocument.documentElement)
                        )
                    },
                    'first-child': function(t) {
                        return y['nth-child'](t, 1)
                    },
                    'last-child': function(t) {
                        return y['nth-last-child'](t, 1)
                    },
                    'first-of-type': function(t) {
                        return y['nth-of-type'](t, 1)
                    },
                    'last-of-type': function(t) {
                        return y['nth-last-of-type'](t, 1)
                    },
                    'only-child': function(t) {
                        return b['first-child'](t) && b['last-child'](t)
                    },
                    'only-of-type': function(t) {
                        return b['first-of-type'](t) && b['last-of-type'](t)
                    },
                    focus: function(t) {
                        var n = t.ownerDocument
                        return (
                            n &&
                            t === n.activeElement &&
                            (!n.hasFocus || n.hasFocus()) &&
                            !!(t.type || t.href || t.tabIndex >= 0)
                        )
                    },
                    target: function(t) {
                        var n = location.hash
                        return n && n.slice(1) === l(t, 'id')
                    },
                    enabled: function(t) {
                        return !t.disabled
                    },
                    disabled: function(t) {
                        return t.disabled
                    },
                    checked: function(t) {
                        var n = t.nodeName.toLowerCase()
                        return (
                            ('input' === n && t.checked) ||
                            ('option' === n && t.selected)
                        )
                    },
                },
                m = {
                    '~=': function(t, n) {
                        return !n || n.indexOf(' ') > -1
                            ? 0
                            : -1 !== (' ' + t + ' ').indexOf(' ' + n + ' ')
                    },
                    '|=': function(t, n) {
                        return -1 !== (' ' + t).indexOf(' ' + n + '-')
                    },
                    '^=': function(t, n) {
                        return n && o.startsWith(t, n)
                    },
                    '$=': function(t, n) {
                        return n && o.endsWith(t, n)
                    },
                    '*=': function(t, n) {
                        return n && -1 !== t.indexOf(n)
                    },
                    '=': function(t, n) {
                        return t === n
                    },
                },
                _ = {
                    '>': { dir: 'parentNode', immediate: 1 },
                    ' ': { dir: 'parentNode' },
                    '+': { dir: 'previousSibling', immediate: 1 },
                    '~': { dir: 'previousSibling' },
                }
            function x(t) {
                return t.replace(v, g)
            }
            function w(t, n) {
                do {
                    t = t[n]
                } while (t && 1 !== t.nodeType)
                return t
            }
            function M(t) {
                var n,
                    e = 0,
                    r = 0
                return (
                    'number' == typeof t
                        ? (r = t)
                        : 'odd' === t
                        ? ((e = 2), (r = 1))
                        : 'even' === t
                        ? ((e = 2), (r = 0))
                        : (n = t.replace(/\s/g, '').match(p)) &&
                          (n[1]
                              ? ((e = parseInt(n[2], 10)),
                                isNaN(e) && (e = '-' === n[2] ? -1 : 1))
                              : (e = 0),
                          (r = parseInt(n[3], 10) || 0)),
                    { a: e, b: r }
                )
            }
            function E(t, n, e, r) {
                if (0 === n) {
                    if (t === e) return r
                } else if ((t - e) / n >= 0 && (t - e) % n == 0 && r) return 1
            }
            function N(t, n) {
                if (!n) return !0
                if (!t) return !1
                if (9 === t.nodeType) return !1
                var e,
                    r,
                    o = 1,
                    u = n.suffix
                if (('tag' === n.t && (o &= i.tag(t, n.value)), o && u))
                    for (e = u.length, r = 0; o && r < e; r++) {
                        var a = u[r],
                            c = a.t
                        i[c] && (o &= i[c](t, a.value))
                    }
                return o
            }
            function A(t, n) {
                var e,
                    r = n
                do {
                    if (!N(t, r)) return null
                    if (!(r = r.prev)) return !0
                    t = w(t, (e = _[r.nextCombinator]).dir)
                } while (t && e.immediate)
                return t ? { el: t, match: r } : null
            }
            function T(t, n) {
                var e
                return (e =
                    (function(t) {
                        var n
                        return (
                            r
                                ? (n = t.getAttribute(a)) ||
                                  t.setAttribute(
                                      a,
                                      (n = +new Date() + '_' + ++f),
                                  )
                                : (n = t[a]) ||
                                  (n = t[a] = +new Date() + '_' + ++f),
                            n
                        )
                    })(t) +
                    '_' +
                    (n.order || 0)) in s
                    ? s[e]
                    : ((s[e] = (function(t, n) {
                          var e = (function(t, n) {
                              var e,
                                  r = 1,
                                  i = t,
                                  o = n
                              do {
                                  if (!(r &= N(t, n)))
                                      return (e = _[n.nextCombinator]).immediate
                                          ? {
                                                el: w(
                                                    i,
                                                    _[o.nextCombinator].dir,
                                                ),
                                                match: o,
                                            }
                                          : { el: t && w(t, e.dir), match: n }
                                  if (!(n = n && n.prev)) return !0
                                  if (
                                      ((t = w(
                                          t,
                                          (e = _[n.nextCombinator]).dir,
                                      )),
                                      !e.immediate)
                                  )
                                      return { el: t, match: n }
                              } while (t)
                              return {
                                  el: w(i, _[o.nextCombinator].dir),
                                  match: o,
                              }
                          })(t, n)
                          if (!0 === e) return !0
                          for (t = e.el, n = e.match; t; ) {
                              if (T(t, n)) return !0
                              t = w(t, _[n.nextCombinator].dir)
                          }
                          return !1
                      })(t, n)),
                      s[e])
            }
            function S(t, n, e) {
                c[t] || (c[t] = u.parse(t))
                var i,
                    a,
                    f,
                    h,
                    d = c[t],
                    p = 0,
                    v = d.length,
                    g = []
                for (
                    e && (n = n || e[0].ownerDocument),
                        i =
                            (n && n.ownerDocument) ||
                            ('undefined' != typeof document && document),
                        n && 9 === n.nodeType && !i && (i = n),
                        h =
                            (f = n = n || i) &&
                            (f.ownerDocument || f).documentElement,
                        r = !!h && 'html' !== h.nodeName.toLowerCase();
                    p < v;
                    p++
                ) {
                    s = {}
                    var y,
                        b,
                        m,
                        _,
                        x = (a = d[p]).suffix,
                        w = e,
                        M = null
                    if (!w) {
                        if (x && !r)
                            for (y = 0, b = x.length; y < b; y++) {
                                var E = x[y]
                                if ('id' === E.t) {
                                    M = E.value
                                    break
                                }
                            }
                        if (M) {
                            var N = !n.getElementById,
                                S = o.contains(i, n),
                                k = N
                                    ? S
                                        ? i.getElementById(M)
                                        : null
                                    : n.getElementById(M)
                            if ((!k && N) || (k && l(k, 'id') !== M)) {
                                for (
                                    var C = o.getElementsByTagName('*', n),
                                        D = C.length,
                                        P = 0;
                                    P < D;
                                    P++
                                )
                                    if (((k = C[P]), l(k, 'id') === M)) {
                                        w = [k]
                                        break
                                    }
                                P === D && (w = [])
                            } else
                                S &&
                                    k &&
                                    n !== i &&
                                    (k = o.contains(n, k) ? k : null),
                                    (w = k ? [k] : [])
                        } else w = o.getElementsByTagName(a.value || '*', n)
                    }
                    if (((m = 0), (_ = w.length)))
                        for (; m < _; m++) {
                            var O = w[m],
                                I = A(O, a)
                            !0 === I
                                ? g.push(O)
                                : I && T(I.el, I.match) && g.push(O)
                        }
                }
                return v > 1 && (g = o.unique(g)), g
            }
            ;(i = {
                tag: d,
                cls: h,
                id: function(t, n) {
                    return l(t, 'id') === n
                },
                attrib: function(t, n) {
                    var e = n.ident
                    r || (e = e.toLowerCase())
                    var i = l(t, e),
                        o = n.match
                    if (!o && void 0 !== i) return 1
                    if (o) {
                        if (void 0 === i) return 0
                        var u = m[o]
                        if (u) return u(i + '', n.value + '')
                    }
                    return 0
                },
                pseudo: function(t, n) {
                    var e, r, i
                    if ((r = n.fn)) {
                        if (!(e = y[r]))
                            throw new SyntaxError(
                                'Syntax error: not support pseudo: ' + r,
                            )
                        return e(t, n.param)
                    }
                    if ((i = n.ident)) {
                        if (!b[i])
                            throw new SyntaxError(
                                'Syntax error: not support pseudo: ' + i,
                            )
                        return b[i](t)
                    }
                    return 0
                },
            }),
                (u.lexer.yy = {
                    trim: o.trim,
                    unEscape: x,
                    unEscapeStr: function(t) {
                        return this.unEscape(t.slice(1, -1))
                    },
                }),
                (t.exports = S),
                (S.parse = function(t) {
                    return u.parse(t)
                }),
                (S.matches = function(t, n) {
                    return S(t, null, n)
                }),
                (S.util = o),
                (S.version = '@VERSION@')
        },
        203: function(t, n) {
            var e,
                r = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
                i = /^(?:button|input|object|select|textarea)$/i,
                o = /^a(?:rea)?$/i,
                u = /:|^on/,
                a = {},
                c = {
                    tabindex: {
                        get: function(t) {
                            var n = t.getAttributeNode('tabindex')
                            return n && n.specified
                                ? parseInt(n.value, 10)
                                : i.test(t.nodeName) ||
                                  (o.test(t.nodeName) && t.href)
                                ? 0
                                : void 0
                        },
                    },
                },
                f = {
                    get: function(t, n) {
                        return t[e[n] || n] ? n.toLowerCase() : void 0
                    },
                },
                s = {}
            ;(c.style = {
                get: function(t) {
                    return t.style.cssText
                },
            }),
                (e = {
                    hidefocus: 'hideFocus',
                    tabindex: 'tabIndex',
                    readonly: 'readOnly',
                    for: 'htmlFor',
                    class: 'className',
                    maxlength: 'maxLength',
                    cellspacing: 'cellSpacing',
                    cellpadding: 'cellPadding',
                    rowspan: 'rowSpan',
                    colspan: 'colSpan',
                    usemap: 'useMap',
                    frameborder: 'frameBorder',
                    contenteditable: 'contentEditable',
                })
            var l = 'undefined' != typeof navigator ? navigator.userAgent : '',
                h = 'undefined' != typeof document ? document : {}
            function d(t, n) {
                for (var e in n) t[e] = n[e]
            }
            var p = (function() {
                var t, n, e
                if (
                    (t = l.match(
                        /MSIE ([^;]*)|Trident.*; rv(?:\s|:)?([0-9.]+)/,
                    )) &&
                    (n = t[1] || t[2])
                )
                    return (
                        h.documentMode ||
                        ((e = 0),
                        parseFloat(
                            n.replace(/\./g, function() {
                                return 0 == e++ ? '.' : ''
                            }),
                        ))
                    )
            })()
            ;(p &&
                p < 8 &&
                ((c.style.set = function(t, n) {
                    t.style.cssText = n
                }),
                d(s, {
                    get: function(t, n) {
                        var e = t.getAttributeNode(n)
                        return e && (e.specified || e.nodeValue)
                            ? e.nodeValue
                            : void 0
                    },
                }),
                d(a, e),
                (c.tabIndex = c.tabindex),
                (function(t, n) {
                    for (
                        var e = 0, r = t.length;
                        e < r && !1 !== n(t[e], e);
                        e++
                    );
                })(
                    ['href', 'src', 'width', 'height', 'colSpan', 'rowSpan'],
                    function(t) {
                        c[t] = {
                            get: function(n) {
                                var e = n.getAttribute(t, 2)
                                return null === e ? void 0 : e
                            },
                        }
                    },
                ),
                (c.placeholder = {
                    get: function(t, n) {
                        return t[n] || s.get(t, n)
                    },
                })),
            p) &&
                ((c.href = c.href || {}).set = function(t, n, e) {
                    var r,
                        i = t.childNodes,
                        o = i.length,
                        u = o > 0
                    for (o -= 1; o >= 0; o--) 3 !== i[o].nodeType && (u = 0)
                    u &&
                        (((r = t.ownerDocument.createElement(
                            'b',
                        )).style.display = 'none'),
                        t.appendChild(r)),
                        t.setAttribute(e, '' + n),
                        r && t.removeChild(r)
                })
            var v,
                g = /^[\s\xa0]+|[\s\xa0]+$/g,
                y = String.prototype.trim
            if (
                ((v = function(t, n) {
                    return n.getElementsByTagName(t)
                }),
                h.createElement)
            ) {
                var b = h.createElement('div')
                b.appendChild(document.createComment('')),
                    b.getElementsByTagName('*').length &&
                        (v = function(t, n) {
                            var e = n.getElementsByTagName(t),
                                r = '*' === t
                            if (r || 'number' != typeof e.length) {
                                for (var i, o = [], u = 0; (i = e[u++]); )
                                    (r && 1 !== i.nodeType) || o.push(i)
                                return o
                            }
                            return e
                        })
            }
            var m =
                    'sourceIndex' in ((h && h.documentElement) || {})
                        ? function(t, n) {
                              return t.sourceIndex - n.sourceIndex
                          }
                        : function(t, n) {
                              return t.compareDocumentPosition &&
                                  n.compareDocumentPosition
                                  ? 4 & t.compareDocumentPosition(n)
                                      ? -1
                                      : 1
                                  : t.compareDocumentPosition
                                  ? -1
                                  : 1
                          },
                _ = (t.exports = {
                    ie: p,
                    unique: (function() {
                        var t,
                            n = !0
                        function e(n, e) {
                            return n === e ? ((t = !0), 0) : m(n, e)
                        }
                        return (
                            [0, 0].sort(function() {
                                return (n = !1), 0
                            }),
                            function(r) {
                                if (((t = n), r.sort(e), t))
                                    for (var i = 1, o = r.length; i < o; )
                                        r[i] === r[i - 1]
                                            ? (r.splice(i, 1), --o)
                                            : i++
                                return r
                            }
                        )
                    })(),
                    getElementsByTagName: v,
                    getSimpleAttr: function(t, n) {
                        var e = t && t.getAttributeNode(n)
                        if (e && e.specified)
                            return 'value' in e ? e.value : e.nodeValue
                    },
                    contains: p
                        ? function(t, n) {
                              return (
                                  9 === t.nodeType && (t = t.documentElement),
                                  t === (n = n.parentNode) ||
                                      (!(!n || 1 !== n.nodeType) &&
                                          (t.contains && t.contains(n)))
                              )
                          }
                        : function(t, n) {
                              return !!(16 & t.compareDocumentPosition(n))
                          },
                    isTag: function(t, n) {
                        return (
                            '*' === n ||
                            t.nodeName.toLowerCase() === n.toLowerCase()
                        )
                    },
                    hasSingleClass: function(t, n) {
                        var e = t && _.getSimpleAttr(t, 'class')
                        return (
                            e &&
                            (e = e.replace(/[\r\t\n]/g, ' ')) &&
                            (' ' + e + ' ').indexOf(' ' + n + ' ') > -1
                        )
                    },
                    startsWith: function(t, n) {
                        return 0 === t.lastIndexOf(n, 0)
                    },
                    endsWith: function(t, n) {
                        var e = t.length - n.length
                        return e >= 0 && t.indexOf(n, e) === e
                    },
                    trim: y
                        ? function(t) {
                              return null == t ? '' : y.call(t)
                          }
                        : function(t) {
                              return null == t ? '' : (t + '').replace(g, '')
                          },
                    attr: function(t, n) {
                        var e, i
                        if (
                            ((n = n.toLowerCase()),
                            (n = a[n] || n),
                            (e = r.test(n) ? f : u.test(n) ? s : c[n]),
                            t && 1 === t.nodeType)
                        ) {
                            if (
                                ('form' === t.nodeName.toLowerCase() && (e = s),
                                e && e.get)
                            )
                                return e.get(t, n)
                            if ('' === (i = t.getAttribute(n))) {
                                var o = t.getAttributeNode(n)
                                if (!o || !o.specified) return
                            }
                            return null === i ? void 0 : i
                        }
                    },
                })
        },
        204: function(t, n, e) {
            var r = (function(t) {
                var n = {},
                    e = 1,
                    r = 2,
                    i = 0,
                    o = 0,
                    u = 1,
                    a = 2
                function c(t, n) {
                    for (var e in n) t[e] = n[e]
                }
                function f(t, n, e) {
                    if (t) {
                        var r,
                            i,
                            o,
                            u = 0
                        if (
                            ((e = e || null),
                            (a = t),
                            '[object Array]' !==
                                Object.prototype.toString.call(a))
                        ) {
                            for (r in t) if (!1 === n.call(e, t[r], r, t)) break
                        } else
                            for (
                                o = t.length, i = t[0];
                                u < o && !1 !== n.call(e, i, u, t);
                                i = t[++u]
                            );
                    }
                    var a
                }
                var s = function(t) {
                    ;(this.rules = []), c(this, t), this.resetInput(this.input)
                }
                ;(s.prototype = {
                    resetInput: function(t) {
                        c(this, {
                            input: t,
                            matched: '',
                            stateStack: [s.STATIC.INITIAL],
                            match: '',
                            text: '',
                            firstLine: 1,
                            lineNumber: 1,
                            lastLine: 1,
                            firstColumn: 1,
                            lastColumn: 1,
                        })
                    },
                    getCurrentRules: function() {
                        var t = this.stateStack[this.stateStack.length - 1],
                            n = []
                        return (
                            this.mapState && (t = this.mapState(t)),
                            f(this.rules, function(e) {
                                var r = e.state || e[3]
                                r
                                    ? (function(t, n) {
                                          for (
                                              var e = 0, r = n.length;
                                              e < r;
                                              e++
                                          )
                                              if (n[e] === t) return !0
                                          return !1
                                      })(t, r) && n.push(e)
                                    : t === s.STATIC.INITIAL && n.push(e)
                            }),
                            n
                        )
                    },
                    pushState: function(t) {
                        this.stateStack.push(t)
                    },
                    popState: function(t) {
                        var n
                        for (t = t || 1; t--; ) n = this.stateStack.pop()
                        return n
                    },
                    showDebugInfo: function() {
                        var t = s.STATIC.DEBUG_CONTEXT_LIMIT,
                            n = this.matched,
                            e = this.match,
                            r = this.input,
                            i =
                                ((n = n.slice(0, n.length - e.length)).length >
                                t
                                    ? '...'
                                    : '') + n.slice(0 - t).replace(/\n/, ' '),
                            o = e + r
                        return (
                            i +
                            (o = o.slice(0, t) + (o.length > t ? '...' : '')) +
                            '\n' +
                            new Array(i.length + 1).join('-') +
                            '^'
                        )
                    },
                    mapSymbol: function(t) {
                        return this.symbolMap[t]
                    },
                    mapReverseSymbol: function(t) {
                        var n,
                            e = this.symbolMap,
                            r = this.reverseSymbolMap
                        if (!r && e)
                            for (n in ((r = this.reverseSymbolMap = {}), e))
                                r[e[n]] = n
                        return r ? r[t] : t
                    },
                    lex: function() {
                        var t,
                            n,
                            e,
                            r,
                            i,
                            o = this.input,
                            u = this.getCurrentRules()
                        if (((this.match = this.text = ''), !o))
                            return this.mapSymbol(s.STATIC.END_TAG)
                        for (t = 0; t < u.length; t++) {
                            var a,
                                f = (n = u[t]).regexp || n[1],
                                l = n.token || n[0],
                                h = n.action || n[2] || void 0
                            if ((e = o.match(f)))
                                return (
                                    (i = e[0].match(/\n.*/g)) &&
                                        (this.lineNumber += i.length),
                                    c(this, {
                                        firstLine: this.lastLine,
                                        lastLine: this.lineNumber + 1,
                                        firstColumn: this.lastColumn,
                                        lastColumn: i
                                            ? i[i.length - 1].length - 1
                                            : this.lastColumn + e[0].length,
                                    }),
                                    (a = this.match = e[0]),
                                    (this.matches = e),
                                    (this.text = a),
                                    (this.matched += a),
                                    (r =
                                        void 0 === (r = h && h.call(this))
                                            ? l
                                            : this.mapSymbol(r)),
                                    (o = o.slice(a.length)),
                                    (this.input = o),
                                    r || this.lex()
                                )
                        }
                    },
                }),
                    (s.STATIC = {
                        INITIAL: 'I',
                        DEBUG_CONTEXT_LIMIT: 20,
                        END_TAG: '$EOF',
                    })
                var l = new s({
                    rules: [
                        [
                            'b',
                            /^\[(?:[\t\r\n\f\x20]*)/,
                            function() {
                                this.text = this.yy.trim(this.text)
                            },
                        ],
                        [
                            'c',
                            /^(?:[\t\r\n\f\x20]*)\]/,
                            function() {
                                this.text = this.yy.trim(this.text)
                            },
                        ],
                        [
                            'd',
                            /^(?:[\t\r\n\f\x20]*)~=(?:[\t\r\n\f\x20]*)/,
                            function() {
                                this.text = this.yy.trim(this.text)
                            },
                        ],
                        [
                            'e',
                            /^(?:[\t\r\n\f\x20]*)\|=(?:[\t\r\n\f\x20]*)/,
                            function() {
                                this.text = this.yy.trim(this.text)
                            },
                        ],
                        [
                            'f',
                            /^(?:[\t\r\n\f\x20]*)\^=(?:[\t\r\n\f\x20]*)/,
                            function() {
                                this.text = this.yy.trim(this.text)
                            },
                        ],
                        [
                            'g',
                            /^(?:[\t\r\n\f\x20]*)\$=(?:[\t\r\n\f\x20]*)/,
                            function() {
                                this.text = this.yy.trim(this.text)
                            },
                        ],
                        [
                            'h',
                            /^(?:[\t\r\n\f\x20]*)\*=(?:[\t\r\n\f\x20]*)/,
                            function() {
                                this.text = this.yy.trim(this.text)
                            },
                        ],
                        [
                            'i',
                            /^(?:[\t\r\n\f\x20]*)\=(?:[\t\r\n\f\x20]*)/,
                            function() {
                                this.text = this.yy.trim(this.text)
                            },
                        ],
                        [
                            'j',
                            /^(?:(?:[\w]|[^\x00-\xa0]|(?:\\[^\n\r\f0-9a-f]))(?:[\w\d-]|[^\x00-\xa0]|(?:\\[^\n\r\f0-9a-f]))*)\(/,
                            function() {
                                ;(this.text = this.yy
                                    .trim(this.text)
                                    .slice(0, -1)),
                                    this.pushState('fn')
                            },
                        ],
                        [
                            'k',
                            /^[^\)]*/,
                            function() {
                                this.popState()
                            },
                            ['fn'],
                        ],
                        [
                            'l',
                            /^(?:[\t\r\n\f\x20]*)\)/,
                            function() {
                                this.text = this.yy.trim(this.text)
                            },
                        ],
                        [
                            'm',
                            /^:not\((?:[\t\r\n\f\x20]*)/i,
                            function() {
                                this.text = this.yy.trim(this.text)
                            },
                        ],
                        [
                            'n',
                            /^(?:(?:[\w]|[^\x00-\xa0]|(?:\\[^\n\r\f0-9a-f]))(?:[\w\d-]|[^\x00-\xa0]|(?:\\[^\n\r\f0-9a-f]))*)/,
                            function() {
                                this.text = this.yy.unEscape(this.text)
                            },
                        ],
                        [
                            'o',
                            /^"(\\"|[^"])*"/,
                            function() {
                                this.text = this.yy.unEscapeStr(this.text)
                            },
                        ],
                        [
                            'o',
                            /^'(\\'|[^'])*'/,
                            function() {
                                this.text = this.yy.unEscapeStr(this.text)
                            },
                        ],
                        [
                            'p',
                            /^#(?:(?:[\w\d-]|[^\x00-\xa0]|(?:\\[^\n\r\f0-9a-f]))+)/,
                            function() {
                                this.text = this.yy.unEscape(this.text.slice(1))
                            },
                        ],
                        [
                            'q',
                            /^\.(?:(?:[\w]|[^\x00-\xa0]|(?:\\[^\n\r\f0-9a-f]))(?:[\w\d-]|[^\x00-\xa0]|(?:\\[^\n\r\f0-9a-f]))*)/,
                            function() {
                                this.text = this.yy.unEscape(this.text.slice(1))
                            },
                        ],
                        [
                            'r',
                            /^(?:[\t\r\n\f\x20]*),(?:[\t\r\n\f\x20]*)/,
                            function() {
                                this.text = this.yy.trim(this.text)
                            },
                        ],
                        ['s', /^::?/, 0],
                        [
                            't',
                            /^(?:[\t\r\n\f\x20]*)\+(?:[\t\r\n\f\x20]*)/,
                            function() {
                                this.text = this.yy.trim(this.text)
                            },
                        ],
                        [
                            'u',
                            /^(?:[\t\r\n\f\x20]*)>(?:[\t\r\n\f\x20]*)/,
                            function() {
                                this.text = this.yy.trim(this.text)
                            },
                        ],
                        [
                            'v',
                            /^(?:[\t\r\n\f\x20]*)~(?:[\t\r\n\f\x20]*)/,
                            function() {
                                this.text = this.yy.trim(this.text)
                            },
                        ],
                        ['w', /^\*/, 0],
                        ['x', /^(?:[\t\r\n\f\x20]+)/, 0],
                        ['y', /^./, 0],
                    ],
                })
                return (
                    (n.lexer = l),
                    (l.symbolMap = {
                        $EOF: 'a',
                        LEFT_BRACKET: 'b',
                        RIGHT_BRACKET: 'c',
                        INCLUDES: 'd',
                        DASH_MATCH: 'e',
                        PREFIX_MATCH: 'f',
                        SUFFIX_MATCH: 'g',
                        SUBSTRING_MATCH: 'h',
                        ALL_MATCH: 'i',
                        FUNCTION: 'j',
                        PARAMETER: 'k',
                        RIGHT_PARENTHESES: 'l',
                        NOT: 'm',
                        IDENT: 'n',
                        STRING: 'o',
                        HASH: 'p',
                        CLASS: 'q',
                        COMMA: 'r',
                        COLON: 's',
                        PLUS: 't',
                        GREATER: 'u',
                        TILDE: 'v',
                        UNIVERSAL: 'w',
                        S: 'x',
                        INVALID: 'y',
                        $START: 'z',
                        selectors_group: 'aa',
                        selector: 'ab',
                        simple_selector_sequence: 'ac',
                        combinator: 'ad',
                        type_selector: 'ae',
                        id_selector: 'af',
                        class_selector: 'ag',
                        attrib_match: 'ah',
                        attrib: 'ai',
                        attrib_val: 'aj',
                        pseudo: 'ak',
                        negation: 'al',
                        negation_arg: 'am',
                        suffix_selector: 'an',
                        suffix_selectors: 'ao',
                    }),
                    (n.productions = [
                        ['z', ['aa']],
                        [
                            'aa',
                            ['ab'],
                            function() {
                                return [this.$1]
                            },
                        ],
                        [
                            'aa',
                            ['aa', 'r', 'ab'],
                            function() {
                                this.$1.push(this.$3)
                            },
                        ],
                        ['ab', ['ac']],
                        [
                            'ab',
                            ['ab', 'ad', 'ac'],
                            function() {
                                var t
                                return (
                                    (this.$1.nextCombinator = this.$3.prevCombinator = this.$2),
                                    (t = this.$1.order = this.$1.order || 0),
                                    (this.$3.order = t + 1),
                                    (this.$3.prev = this.$1),
                                    (this.$1.next = this.$3),
                                    this.$3
                                )
                            },
                        ],
                        ['ad', ['t']],
                        ['ad', ['u']],
                        ['ad', ['v']],
                        [
                            'ad',
                            ['x'],
                            function() {
                                return ' '
                            },
                        ],
                        [
                            'ae',
                            ['n'],
                            function() {
                                return { t: 'tag', value: this.$1 }
                            },
                        ],
                        [
                            'ae',
                            ['w'],
                            function() {
                                return { t: 'tag', value: this.$1 }
                            },
                        ],
                        [
                            'af',
                            ['p'],
                            function() {
                                return { t: 'id', value: this.$1 }
                            },
                        ],
                        [
                            'ag',
                            ['q'],
                            function() {
                                return { t: 'cls', value: this.$1 }
                            },
                        ],
                        ['ah', ['f']],
                        ['ah', ['g']],
                        ['ah', ['h']],
                        ['ah', ['i']],
                        ['ah', ['d']],
                        ['ah', ['e']],
                        [
                            'ai',
                            ['b', 'n', 'c'],
                            function() {
                                return {
                                    t: 'attrib',
                                    value: { ident: this.$2 },
                                }
                            },
                        ],
                        ['aj', ['n']],
                        ['aj', ['o']],
                        [
                            'ai',
                            ['b', 'n', 'ah', 'aj', 'c'],
                            function() {
                                return {
                                    t: 'attrib',
                                    value: {
                                        ident: this.$2,
                                        match: this.$3,
                                        value: this.$4,
                                    },
                                }
                            },
                        ],
                        [
                            'ak',
                            ['s', 'j', 'k', 'l'],
                            function() {
                                return {
                                    t: 'pseudo',
                                    value: {
                                        fn: this.$2.toLowerCase(),
                                        param: this.$3,
                                    },
                                }
                            },
                        ],
                        [
                            'ak',
                            ['s', 'n'],
                            function() {
                                return {
                                    t: 'pseudo',
                                    value: { ident: this.$2.toLowerCase() },
                                }
                            },
                        ],
                        [
                            'al',
                            ['m', 'am', 'l'],
                            function() {
                                return {
                                    t: 'pseudo',
                                    value: { fn: 'not', param: this.$2 },
                                }
                            },
                        ],
                        ['am', ['ae']],
                        ['am', ['af']],
                        ['am', ['ag']],
                        ['am', ['ai']],
                        ['am', ['ak']],
                        ['an', ['af']],
                        ['an', ['ag']],
                        ['an', ['ai']],
                        ['an', ['ak']],
                        ['an', ['al']],
                        [
                            'ao',
                            ['an'],
                            function() {
                                return [this.$1]
                            },
                        ],
                        [
                            'ao',
                            ['ao', 'an'],
                            function() {
                                this.$1.push(this.$2)
                            },
                        ],
                        ['ac', ['ae']],
                        [
                            'ac',
                            ['ao'],
                            function() {
                                return { suffix: this.$1 }
                            },
                        ],
                        [
                            'ac',
                            ['ae', 'ao'],
                            function() {
                                return {
                                    t: 'tag',
                                    value: this.$1.value,
                                    suffix: this.$2,
                                }
                            },
                        ],
                    ]),
                    (n.table = {
                        gotos: {
                            0: {
                                aa: 8,
                                ab: 9,
                                ae: 10,
                                af: 11,
                                ag: 12,
                                ai: 13,
                                ak: 14,
                                al: 15,
                                an: 16,
                                ao: 17,
                                ac: 18,
                            },
                            2: {
                                ae: 20,
                                af: 21,
                                ag: 22,
                                ai: 23,
                                ak: 24,
                                am: 25,
                            },
                            9: { ad: 33 },
                            10: {
                                af: 11,
                                ag: 12,
                                ai: 13,
                                ak: 14,
                                al: 15,
                                an: 16,
                                ao: 34,
                            },
                            17: {
                                af: 11,
                                ag: 12,
                                ai: 13,
                                ak: 14,
                                al: 15,
                                an: 35,
                            },
                            19: { ah: 43 },
                            28: {
                                ab: 46,
                                ae: 10,
                                af: 11,
                                ag: 12,
                                ai: 13,
                                ak: 14,
                                al: 15,
                                an: 16,
                                ao: 17,
                                ac: 18,
                            },
                            33: {
                                ae: 10,
                                af: 11,
                                ag: 12,
                                ai: 13,
                                ak: 14,
                                al: 15,
                                an: 16,
                                ao: 17,
                                ac: 47,
                            },
                            34: {
                                af: 11,
                                ag: 12,
                                ai: 13,
                                ak: 14,
                                al: 15,
                                an: 35,
                            },
                            43: { aj: 50 },
                            46: { ad: 33 },
                        },
                        action: {
                            0: {
                                b: [1, void 0, 1],
                                m: [1, void 0, 2],
                                n: [1, void 0, 3],
                                p: [1, void 0, 4],
                                q: [1, void 0, 5],
                                s: [1, void 0, 6],
                                w: [1, void 0, 7],
                            },
                            1: { n: [1, void 0, 19] },
                            2: {
                                b: [1, void 0, 1],
                                n: [1, void 0, 3],
                                p: [1, void 0, 4],
                                q: [1, void 0, 5],
                                s: [1, void 0, 6],
                                w: [1, void 0, 7],
                            },
                            3: {
                                a: [2, 9],
                                r: [2, 9],
                                t: [2, 9],
                                u: [2, 9],
                                v: [2, 9],
                                x: [2, 9],
                                p: [2, 9],
                                q: [2, 9],
                                b: [2, 9],
                                s: [2, 9],
                                m: [2, 9],
                                l: [2, 9],
                            },
                            4: {
                                a: [2, 11],
                                r: [2, 11],
                                t: [2, 11],
                                u: [2, 11],
                                v: [2, 11],
                                x: [2, 11],
                                p: [2, 11],
                                q: [2, 11],
                                b: [2, 11],
                                s: [2, 11],
                                m: [2, 11],
                                l: [2, 11],
                            },
                            5: {
                                a: [2, 12],
                                r: [2, 12],
                                t: [2, 12],
                                u: [2, 12],
                                v: [2, 12],
                                x: [2, 12],
                                p: [2, 12],
                                q: [2, 12],
                                b: [2, 12],
                                s: [2, 12],
                                m: [2, 12],
                                l: [2, 12],
                            },
                            6: { j: [1, void 0, 26], n: [1, void 0, 27] },
                            7: {
                                a: [2, 10],
                                r: [2, 10],
                                t: [2, 10],
                                u: [2, 10],
                                v: [2, 10],
                                x: [2, 10],
                                p: [2, 10],
                                q: [2, 10],
                                b: [2, 10],
                                s: [2, 10],
                                m: [2, 10],
                                l: [2, 10],
                            },
                            8: { a: [0], r: [1, void 0, 28] },
                            9: {
                                a: [2, 1],
                                r: [2, 1],
                                t: [1, void 0, 29],
                                u: [1, void 0, 30],
                                v: [1, void 0, 31],
                                x: [1, void 0, 32],
                            },
                            10: {
                                a: [2, 38],
                                r: [2, 38],
                                t: [2, 38],
                                u: [2, 38],
                                v: [2, 38],
                                x: [2, 38],
                                b: [1, void 0, 1],
                                m: [1, void 0, 2],
                                p: [1, void 0, 4],
                                q: [1, void 0, 5],
                                s: [1, void 0, 6],
                            },
                            11: {
                                a: [2, 31],
                                r: [2, 31],
                                t: [2, 31],
                                u: [2, 31],
                                v: [2, 31],
                                x: [2, 31],
                                p: [2, 31],
                                q: [2, 31],
                                b: [2, 31],
                                s: [2, 31],
                                m: [2, 31],
                            },
                            12: {
                                a: [2, 32],
                                r: [2, 32],
                                t: [2, 32],
                                u: [2, 32],
                                v: [2, 32],
                                x: [2, 32],
                                p: [2, 32],
                                q: [2, 32],
                                b: [2, 32],
                                s: [2, 32],
                                m: [2, 32],
                            },
                            13: {
                                a: [2, 33],
                                r: [2, 33],
                                t: [2, 33],
                                u: [2, 33],
                                v: [2, 33],
                                x: [2, 33],
                                p: [2, 33],
                                q: [2, 33],
                                b: [2, 33],
                                s: [2, 33],
                                m: [2, 33],
                            },
                            14: {
                                a: [2, 34],
                                r: [2, 34],
                                t: [2, 34],
                                u: [2, 34],
                                v: [2, 34],
                                x: [2, 34],
                                p: [2, 34],
                                q: [2, 34],
                                b: [2, 34],
                                s: [2, 34],
                                m: [2, 34],
                            },
                            15: {
                                a: [2, 35],
                                r: [2, 35],
                                t: [2, 35],
                                u: [2, 35],
                                v: [2, 35],
                                x: [2, 35],
                                p: [2, 35],
                                q: [2, 35],
                                b: [2, 35],
                                s: [2, 35],
                                m: [2, 35],
                            },
                            16: {
                                a: [2, 36],
                                r: [2, 36],
                                t: [2, 36],
                                u: [2, 36],
                                v: [2, 36],
                                x: [2, 36],
                                p: [2, 36],
                                q: [2, 36],
                                b: [2, 36],
                                s: [2, 36],
                                m: [2, 36],
                            },
                            17: {
                                a: [2, 39],
                                r: [2, 39],
                                t: [2, 39],
                                u: [2, 39],
                                v: [2, 39],
                                x: [2, 39],
                                b: [1, void 0, 1],
                                m: [1, void 0, 2],
                                p: [1, void 0, 4],
                                q: [1, void 0, 5],
                                s: [1, void 0, 6],
                            },
                            18: {
                                a: [2, 3],
                                r: [2, 3],
                                t: [2, 3],
                                u: [2, 3],
                                v: [2, 3],
                                x: [2, 3],
                            },
                            19: {
                                c: [1, void 0, 36],
                                d: [1, void 0, 37],
                                e: [1, void 0, 38],
                                f: [1, void 0, 39],
                                g: [1, void 0, 40],
                                h: [1, void 0, 41],
                                i: [1, void 0, 42],
                            },
                            20: { l: [2, 26] },
                            21: { l: [2, 27] },
                            22: { l: [2, 28] },
                            23: { l: [2, 29] },
                            24: { l: [2, 30] },
                            25: { l: [1, void 0, 44] },
                            26: { k: [1, void 0, 45] },
                            27: {
                                a: [2, 24],
                                r: [2, 24],
                                t: [2, 24],
                                u: [2, 24],
                                v: [2, 24],
                                x: [2, 24],
                                p: [2, 24],
                                q: [2, 24],
                                b: [2, 24],
                                s: [2, 24],
                                m: [2, 24],
                                l: [2, 24],
                            },
                            28: {
                                b: [1, void 0, 1],
                                m: [1, void 0, 2],
                                n: [1, void 0, 3],
                                p: [1, void 0, 4],
                                q: [1, void 0, 5],
                                s: [1, void 0, 6],
                                w: [1, void 0, 7],
                            },
                            29: {
                                n: [2, 5],
                                w: [2, 5],
                                p: [2, 5],
                                q: [2, 5],
                                b: [2, 5],
                                s: [2, 5],
                                m: [2, 5],
                            },
                            30: {
                                n: [2, 6],
                                w: [2, 6],
                                p: [2, 6],
                                q: [2, 6],
                                b: [2, 6],
                                s: [2, 6],
                                m: [2, 6],
                            },
                            31: {
                                n: [2, 7],
                                w: [2, 7],
                                p: [2, 7],
                                q: [2, 7],
                                b: [2, 7],
                                s: [2, 7],
                                m: [2, 7],
                            },
                            32: {
                                n: [2, 8],
                                w: [2, 8],
                                p: [2, 8],
                                q: [2, 8],
                                b: [2, 8],
                                s: [2, 8],
                                m: [2, 8],
                            },
                            33: {
                                b: [1, void 0, 1],
                                m: [1, void 0, 2],
                                n: [1, void 0, 3],
                                p: [1, void 0, 4],
                                q: [1, void 0, 5],
                                s: [1, void 0, 6],
                                w: [1, void 0, 7],
                            },
                            34: {
                                a: [2, 40],
                                r: [2, 40],
                                t: [2, 40],
                                u: [2, 40],
                                v: [2, 40],
                                x: [2, 40],
                                b: [1, void 0, 1],
                                m: [1, void 0, 2],
                                p: [1, void 0, 4],
                                q: [1, void 0, 5],
                                s: [1, void 0, 6],
                            },
                            35: {
                                a: [2, 37],
                                r: [2, 37],
                                t: [2, 37],
                                u: [2, 37],
                                v: [2, 37],
                                x: [2, 37],
                                p: [2, 37],
                                q: [2, 37],
                                b: [2, 37],
                                s: [2, 37],
                                m: [2, 37],
                            },
                            36: {
                                a: [2, 19],
                                r: [2, 19],
                                t: [2, 19],
                                u: [2, 19],
                                v: [2, 19],
                                x: [2, 19],
                                p: [2, 19],
                                q: [2, 19],
                                b: [2, 19],
                                s: [2, 19],
                                m: [2, 19],
                                l: [2, 19],
                            },
                            37: { n: [2, 17], o: [2, 17] },
                            38: { n: [2, 18], o: [2, 18] },
                            39: { n: [2, 13], o: [2, 13] },
                            40: { n: [2, 14], o: [2, 14] },
                            41: { n: [2, 15], o: [2, 15] },
                            42: { n: [2, 16], o: [2, 16] },
                            43: { n: [1, void 0, 48], o: [1, void 0, 49] },
                            44: {
                                a: [2, 25],
                                r: [2, 25],
                                t: [2, 25],
                                u: [2, 25],
                                v: [2, 25],
                                x: [2, 25],
                                p: [2, 25],
                                q: [2, 25],
                                b: [2, 25],
                                s: [2, 25],
                                m: [2, 25],
                            },
                            45: { l: [1, void 0, 51] },
                            46: {
                                a: [2, 2],
                                r: [2, 2],
                                t: [1, void 0, 29],
                                u: [1, void 0, 30],
                                v: [1, void 0, 31],
                                x: [1, void 0, 32],
                            },
                            47: {
                                a: [2, 4],
                                r: [2, 4],
                                t: [2, 4],
                                u: [2, 4],
                                v: [2, 4],
                                x: [2, 4],
                            },
                            48: { c: [2, 20] },
                            49: { c: [2, 21] },
                            50: { c: [1, void 0, 52] },
                            51: {
                                a: [2, 23],
                                r: [2, 23],
                                t: [2, 23],
                                u: [2, 23],
                                v: [2, 23],
                                x: [2, 23],
                                p: [2, 23],
                                q: [2, 23],
                                b: [2, 23],
                                s: [2, 23],
                                m: [2, 23],
                                l: [2, 23],
                            },
                            52: {
                                a: [2, 22],
                                r: [2, 22],
                                t: [2, 22],
                                u: [2, 22],
                                v: [2, 22],
                                x: [2, 22],
                                p: [2, 22],
                                q: [2, 22],
                                b: [2, 22],
                                s: [2, 22],
                                m: [2, 22],
                                l: [2, 22],
                            },
                        },
                    }),
                    (n.parse = function(t, n) {
                        var c,
                            f,
                            s,
                            l = this.lexer,
                            h = this.table,
                            d = h.gotos,
                            p = h.action,
                            v = this.productions,
                            g = [null],
                            y = n ? 'in file: ' + n + ' ' : '',
                            b = [0]
                        for (l.resetInput(t); ; ) {
                            if (
                                ((c = b[b.length - 1]),
                                f || (f = l.lex()),
                                !(s = f ? p[c] && p[c][f] : null))
                            ) {
                                var m,
                                    _ = []
                                if (p[c])
                                    for (var x in p[c])
                                        _.push(this.lexer.mapReverseSymbol(x))
                                throw ((m =
                                    y +
                                    'syntax error at line ' +
                                    l.lineNumber +
                                    ':\n' +
                                    l.showDebugInfo() +
                                    '\nexpect ' +
                                    _.join(', ')),
                                new Error(m))
                            }
                            switch (s[o]) {
                                case e:
                                    b.push(f),
                                        g.push(l.text),
                                        b.push(s[a]),
                                        (f = null)
                                    break
                                case r:
                                    var w,
                                        M = v[s[u]],
                                        E = M.symbol || M[0],
                                        N = M.action || M[2],
                                        A = (M.rhs || M[1]).length,
                                        T = 0,
                                        S = g[g.length - A]
                                    for (w = void 0, this.$$ = S; T < A; T++)
                                        this['$' + (A - T)] =
                                            g[g.length - 1 - T]
                                    N && (w = N.call(this)),
                                        (S = void 0 !== w ? w : this.$$),
                                        (b = b.slice(0, -1 * A * 2)),
                                        (g = g.slice(0, -1 * A)),
                                        b.push(E),
                                        g.push(S)
                                    var k = d[b[b.length - 2]][b[b.length - 1]]
                                    b.push(k)
                                    break
                                case i:
                                    return S
                            }
                        }
                    }),
                    n
                )
            })()
            t.exports = r
        },
        205: function(t, n) {
            t.exports = function(t) {
                return 'string' == typeof t
            }
        },
        206: function(t, n) {
            t.exports = function(t) {
                return void 0 === t
            }
        },
        207: function(t, n) {
            t.exports = function(t) {
                for (var n, e = arguments, r = 1; r < e.length; r++)
                    for (var i in (n = e[r])) t[i] = n[i]
                return t
            }
        },
        208: function(t, n, e) {
            var r = e(135)
            t.exports = function(t) {
                var n = r(t)
                return n.charAt(0).toUpperCase() === t.charAt(0)
                    ? t.charAt(0) + n.slice(1)
                    : '-' === t.charAt(0)
                    ? 0 === n.indexOf('ms')
                        ? n
                        : n.charAt(0).toUpperCase() + n.slice(1)
                    : n
            }
        },
        209: function(t, n) {
            t.exports = function() {
                return {
                    getComputedStyle: function(t) {
                        return { getPropertyValue: t.style.getProperty }
                    },
                }
            }
        },
        210: function(t, n, e) {
            var r = e(0),
                i = e(211),
                o = e(136)
            t.exports = function(t) {
                return function(n) {
                    var e = i({
                        componentWillMount: function() {
                            ;(this.connectedFauxDOM = {}),
                                (this.animateFauxDOMUntil = 0)
                        },
                        componentWillUnmount: function() {
                            this.stopAnimatingFauxDOM(), this.stopDrawFauxDOM()
                        },
                        connectFauxDOM: function(n, e, r) {
                            return (
                                (this.connectedFauxDOM[e] && !r) ||
                                    ((this.connectedFauxDOM[e] =
                                        'string' != typeof n ? n : new t(n)),
                                    (this.drawFauxDOMTimeout = setTimeout(
                                        this.drawFauxDOM,
                                    ))),
                                this.connectedFauxDOM[e]
                            )
                        },
                        drawFauxDOM: function() {
                            var t = o(this.connectedFauxDOM, function(t) {
                                return t.toReact()
                            })
                            this.setState(t)
                        },
                        animateFauxDOM: function(t) {
                            ;(this.animateFauxDOMUntil = Math.max(
                                Date.now() + t,
                                this.animateFauxDOMUntil,
                            )),
                                this.fauxDOMAnimationInterval ||
                                    (this.fauxDOMAnimationInterval = setInterval(
                                        function() {
                                            Date.now() <
                                            this.animateFauxDOMUntil
                                                ? this.drawFauxDOM()
                                                : this.stopAnimatingFauxDOM()
                                        }.bind(this),
                                        16,
                                    ))
                        },
                        stopAnimatingFauxDOM: function() {
                            ;(this.fauxDOMAnimationInterval = clearInterval(
                                this.fauxDOMAnimationInterval,
                            )),
                                (this.animateFauxDOMUntil = 0)
                        },
                        stopDrawFauxDOM: function() {
                            this.drawFauxDOMTimeout = clearTimeout(
                                this.drawFauxDOMTimeout,
                            )
                        },
                        isAnimatingFauxDOM: function() {
                            return !!this.fauxDOMAnimationInterval
                        },
                        render: function() {
                            var t = Object.assign({}, this.props, this.state, {
                                connectFauxDOM: this.connectFauxDOM,
                                drawFauxDOM: this.drawFauxDOM,
                                animateFauxDOM: this.animateFauxDOM,
                                stopAnimatingFauxDOM: this.stopAnimatingFauxDOM,
                                isAnimatingFauxDOM: this.isAnimatingFauxDOM,
                            })
                            return r.createElement(n, t)
                        },
                    })
                    return (
                        (e.displayName =
                            'WithFauxDOM(' +
                            (function(t) {
                                return t.displayName || t.name || 'Component'
                            })(n) +
                            ')'),
                        e
                    )
                }
            }
        },
        211: function(t, n, e) {
            'use strict'
            var r = e(0),
                i = e(212)
            if (void 0 === r)
                throw Error(
                    'create-react-class could not find the React object. If you are using script tags, make sure that React is being loaded before create-react-class.',
                )
            var o = new r.Component().updater
            t.exports = i(r.Component, r.isValidElement, o)
        },
        212: function(t, n, e) {
            'use strict'
            var r = e(146),
                i = e(213),
                o = e(214),
                u = 'mixins'
            t.exports = function(t, n, e) {
                var a = [],
                    c = {
                        mixins: 'DEFINE_MANY',
                        statics: 'DEFINE_MANY',
                        propTypes: 'DEFINE_MANY',
                        contextTypes: 'DEFINE_MANY',
                        childContextTypes: 'DEFINE_MANY',
                        getDefaultProps: 'DEFINE_MANY_MERGED',
                        getInitialState: 'DEFINE_MANY_MERGED',
                        getChildContext: 'DEFINE_MANY_MERGED',
                        render: 'DEFINE_ONCE',
                        componentWillMount: 'DEFINE_MANY',
                        componentDidMount: 'DEFINE_MANY',
                        componentWillReceiveProps: 'DEFINE_MANY',
                        shouldComponentUpdate: 'DEFINE_ONCE',
                        componentWillUpdate: 'DEFINE_MANY',
                        componentDidUpdate: 'DEFINE_MANY',
                        componentWillUnmount: 'DEFINE_MANY',
                        UNSAFE_componentWillMount: 'DEFINE_MANY',
                        UNSAFE_componentWillReceiveProps: 'DEFINE_MANY',
                        UNSAFE_componentWillUpdate: 'DEFINE_MANY',
                        updateComponent: 'OVERRIDE_BASE',
                    },
                    f = { getDerivedStateFromProps: 'DEFINE_MANY_MERGED' },
                    s = {
                        displayName: function(t, n) {
                            t.displayName = n
                        },
                        mixins: function(t, n) {
                            if (n) for (var e = 0; e < n.length; e++) h(t, n[e])
                        },
                        childContextTypes: function(t, n) {
                            t.childContextTypes = r({}, t.childContextTypes, n)
                        },
                        contextTypes: function(t, n) {
                            t.contextTypes = r({}, t.contextTypes, n)
                        },
                        getDefaultProps: function(t, n) {
                            t.getDefaultProps
                                ? (t.getDefaultProps = p(t.getDefaultProps, n))
                                : (t.getDefaultProps = n)
                        },
                        propTypes: function(t, n) {
                            t.propTypes = r({}, t.propTypes, n)
                        },
                        statics: function(t, n) {
                            !(function(t, n) {
                                if (n)
                                    for (var e in n) {
                                        var r = n[e]
                                        if (n.hasOwnProperty(e)) {
                                            var i = e in s
                                            o(
                                                !i,
                                                'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',
                                                e,
                                            )
                                            var u = e in t
                                            if (u) {
                                                var a = f.hasOwnProperty(e)
                                                    ? f[e]
                                                    : null
                                                return (
                                                    o(
                                                        'DEFINE_MANY_MERGED' ===
                                                            a,
                                                        'ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.',
                                                        e,
                                                    ),
                                                    void (t[e] = p(t[e], r))
                                                )
                                            }
                                            t[e] = r
                                        }
                                    }
                            })(t, n)
                        },
                        autobind: function() {},
                    }
                function l(t, n) {
                    var e = c.hasOwnProperty(n) ? c[n] : null
                    m.hasOwnProperty(n) &&
                        o(
                            'OVERRIDE_BASE' === e,
                            'ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.',
                            n,
                        ),
                        t &&
                            o(
                                'DEFINE_MANY' === e ||
                                    'DEFINE_MANY_MERGED' === e,
                                'ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.',
                                n,
                            )
                }
                function h(t, e) {
                    if (e) {
                        o(
                            'function' != typeof e,
                            "ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object.",
                        ),
                            o(
                                !n(e),
                                "ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.",
                            )
                        var r = t.prototype,
                            i = r.__reactAutoBindPairs
                        for (var a in (e.hasOwnProperty(u) &&
                            s.mixins(t, e.mixins),
                        e))
                            if (e.hasOwnProperty(a) && a !== u) {
                                var f = e[a],
                                    h = r.hasOwnProperty(a)
                                if ((l(h, a), s.hasOwnProperty(a))) s[a](t, f)
                                else {
                                    var d = c.hasOwnProperty(a)
                                    if (
                                        'function' != typeof f ||
                                        d ||
                                        h ||
                                        !1 === e.autobind
                                    )
                                        if (h) {
                                            var g = c[a]
                                            o(
                                                d &&
                                                    ('DEFINE_MANY_MERGED' ===
                                                        g ||
                                                        'DEFINE_MANY' === g),
                                                'ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.',
                                                g,
                                                a,
                                            ),
                                                'DEFINE_MANY_MERGED' === g
                                                    ? (r[a] = p(r[a], f))
                                                    : 'DEFINE_MANY' === g &&
                                                      (r[a] = v(r[a], f))
                                        } else r[a] = f
                                    else i.push(a, f), (r[a] = f)
                                }
                            }
                    }
                }
                function d(t, n) {
                    for (var e in (o(
                        t && n && 'object' == typeof t && 'object' == typeof n,
                        'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.',
                    ),
                    n))
                        n.hasOwnProperty(e) &&
                            (o(
                                void 0 === t[e],
                                'mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.',
                                e,
                            ),
                            (t[e] = n[e]))
                    return t
                }
                function p(t, n) {
                    return function() {
                        var e = t.apply(this, arguments),
                            r = n.apply(this, arguments)
                        if (null == e) return r
                        if (null == r) return e
                        var i = {}
                        return d(i, e), d(i, r), i
                    }
                }
                function v(t, n) {
                    return function() {
                        t.apply(this, arguments), n.apply(this, arguments)
                    }
                }
                function g(t, n) {
                    return n.bind(t)
                }
                var y = {
                        componentDidMount: function() {
                            this.__isMounted = !0
                        },
                    },
                    b = {
                        componentWillUnmount: function() {
                            this.__isMounted = !1
                        },
                    },
                    m = {
                        replaceState: function(t, n) {
                            this.updater.enqueueReplaceState(this, t, n)
                        },
                        isMounted: function() {
                            return !!this.__isMounted
                        },
                    },
                    _ = function() {}
                return (
                    r(_.prototype, t.prototype, m),
                    function(t) {
                        var n = function(t, r, u) {
                            this.__reactAutoBindPairs.length &&
                                (function(t) {
                                    for (
                                        var n = t.__reactAutoBindPairs, e = 0;
                                        e < n.length;
                                        e += 2
                                    ) {
                                        var r = n[e],
                                            i = n[e + 1]
                                        t[r] = g(t, i)
                                    }
                                })(this),
                                (this.props = t),
                                (this.context = r),
                                (this.refs = i),
                                (this.updater = u || e),
                                (this.state = null)
                            var a = this.getInitialState
                                ? this.getInitialState()
                                : null
                            o(
                                'object' == typeof a && !Array.isArray(a),
                                '%s.getInitialState(): must return an object or null',
                                n.displayName || 'ReactCompositeComponent',
                            ),
                                (this.state = a)
                        }
                        for (var r in ((n.prototype = new _()),
                        (n.prototype.constructor = n),
                        (n.prototype.__reactAutoBindPairs = []),
                        a.forEach(h.bind(null, n)),
                        h(n, y),
                        h(n, t),
                        h(n, b),
                        n.getDefaultProps &&
                            (n.defaultProps = n.getDefaultProps()),
                        o(
                            n.prototype.render,
                            'createClass(...): Class specification must implement a `render` method.',
                        ),
                        c))
                            n.prototype[r] || (n.prototype[r] = null)
                        return n
                    }
                )
            }
        },
        213: function(t, n, e) {
            'use strict'
            t.exports = {}
        },
        214: function(t, n, e) {
            'use strict'
            var r = function(t) {}
            t.exports = function(t, n, e, i, o, u, a, c) {
                if ((r(n), !t)) {
                    var f
                    if (void 0 === n)
                        f = new Error(
                            'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.',
                        )
                    else {
                        var s = [e, i, o, u, a, c],
                            l = 0
                        ;(f = new Error(
                            n.replace(/%s/g, function() {
                                return s[l++]
                            }),
                        )).name = 'Invariant Violation'
                    }
                    throw ((f.framesToPop = 1), f)
                }
            }
        },
        25: function(t, n, e) {
            'use strict'
            var r = e(19),
                i = e(5)
            Object.defineProperty(n, '__esModule', { value: !0 }),
                (n.default = void 0)
            var o = i(e(26)),
                u = i(e(44)),
                a = i(e(6)),
                c = i(e(7)),
                f = i(e(14)),
                s = i(e(15)),
                l = i(e(16)),
                h = i(e(32)),
                d = i(e(11)),
                p = e(54),
                v = r(e(0)),
                g = (i(e(9)), r(e(31))),
                y = e(20)
            ;(0, y.execOnce)(y.warn)
            var b = (function(t) {
                function n() {
                    var t, e, r, i, o, c
                    ;(0, a.default)(this, n)
                    for (
                        var l = arguments.length, v = new Array(l), b = 0;
                        b < l;
                        b++
                    )
                        v[b] = arguments[b]
                    return (
                        (e = (0, f.default)(
                            this,
                            (t = (0, s.default)(n)).call.apply(
                                t,
                                [this].concat(v),
                            ),
                        )),
                        (0, d.default)(
                            (0, h.default)((0, h.default)(e)),
                            'formatUrls',
                            ((r = function(t, n) {
                                return {
                                    href:
                                        t && 'object' === (0, u.default)(t)
                                            ? (0, p.format)(t)
                                            : t,
                                    as:
                                        n && 'object' === (0, u.default)(n)
                                            ? (0, p.format)(n)
                                            : n,
                                }
                            }),
                            (i = null),
                            (o = null),
                            (c = null),
                            function(t, n) {
                                if (t === i && n === o) return c
                                var e = r(t, n)
                                return (i = t), (o = n), (c = e), e
                            }),
                        ),
                        (0, d.default)(
                            (0, h.default)((0, h.default)(e)),
                            'linkClicked',
                            function(t) {
                                var n = t.currentTarget,
                                    r = n.nodeName,
                                    i = n.target
                                if (
                                    'A' !== r ||
                                    !(
                                        (i && '_self' !== i) ||
                                        t.metaKey ||
                                        t.ctrlKey ||
                                        t.shiftKey ||
                                        (t.nativeEvent &&
                                            2 === t.nativeEvent.which)
                                    )
                                ) {
                                    var o = e.formatUrls(
                                            e.props.href,
                                            e.props.as,
                                        ),
                                        u = o.href,
                                        a = o.as
                                    if (
                                        (function(t) {
                                            var n = (0, p.parse)(t, !1, !0),
                                                e = (0, p.parse)(
                                                    (0, y.getLocationOrigin)(),
                                                    !1,
                                                    !0,
                                                )
                                            return (
                                                !n.host ||
                                                (n.protocol === e.protocol &&
                                                    n.host === e.host)
                                            )
                                        })(u)
                                    ) {
                                        var c = window.location.pathname
                                        ;(u = (0, p.resolve)(c, u)),
                                            (a = a ? (0, p.resolve)(c, a) : u),
                                            t.preventDefault()
                                        var f = e.props.scroll
                                        null == f && (f = a.indexOf('#') < 0)
                                        var s = e.props.replace
                                            ? 'replace'
                                            : 'push'
                                        g.default[s](u, a, {
                                            shallow: e.props.shallow,
                                        })
                                            .then(function(t) {
                                                t &&
                                                    f &&
                                                    (window.scrollTo(0, 0),
                                                    document.body.focus())
                                            })
                                            .catch(function(t) {
                                                e.props.onError &&
                                                    e.props.onError(t)
                                            })
                                    }
                                }
                            },
                        ),
                        e
                    )
                }
                return (
                    (0, l.default)(n, t),
                    (0, c.default)(n, [
                        {
                            key: 'componentDidMount',
                            value: function() {
                                this.prefetch()
                            },
                        },
                        {
                            key: 'componentDidUpdate',
                            value: function(t) {
                                ;(0, o.default)(this.props.href) !==
                                    (0, o.default)(t.href) && this.prefetch()
                            },
                        },
                        {
                            key: 'prefetch',
                            value: function() {
                                if (
                                    this.props.prefetch &&
                                    'undefined' != typeof window
                                ) {
                                    var t = window.location.pathname,
                                        n = this.formatUrls(
                                            this.props.href,
                                            this.props.as,
                                        ).href,
                                        e = (0, p.resolve)(t, n)
                                    g.default.prefetch(e)
                                }
                            },
                        },
                        {
                            key: 'render',
                            value: function() {
                                var t = this,
                                    n = this.props.children,
                                    e = this.formatUrls(
                                        this.props.href,
                                        this.props.as,
                                    ),
                                    r = e.href,
                                    i = e.as
                                'string' == typeof n &&
                                    (n = v.default.createElement('a', null, n))
                                var o = v.Children.only(n),
                                    u = {
                                        onClick: function(n) {
                                            o.props &&
                                                'function' ==
                                                    typeof o.props.onClick &&
                                                o.props.onClick(n),
                                                n.defaultPrevented ||
                                                    t.linkClicked(n)
                                        },
                                    }
                                return (
                                    (!this.props.passHref &&
                                        ('a' !== o.type ||
                                            'href' in o.props)) ||
                                        (u.href = i || r),
                                    u.href &&
                                        'undefined' != typeof __NEXT_DATA__ &&
                                        __NEXT_DATA__.nextExport &&
                                        (u.href = (0,
                                        g._rewriteUrlForNextExport)(u.href)),
                                    v.default.cloneElement(o, u)
                                )
                            },
                        },
                    ]),
                    n
                )
            })(v.Component)
            n.default = b
        },
        26: function(t, n, e) {
            t.exports = e(27)
        },
        27: function(t, n, e) {
            var r = e(2),
                i = r.JSON || (r.JSON = { stringify: JSON.stringify })
            t.exports = function(t) {
                return i.stringify.apply(i, arguments)
            }
        },
        28: function(t, n, e) {
            'use strict'
            function r(t, n) {
                return t.parent === n.parent ? 1 : 2
            }
            function i(t, n) {
                return t + n.x
            }
            function o(t, n) {
                return Math.max(t, n.y)
            }
            e.r(n)
            var u = function() {
                var t = r,
                    n = 1,
                    e = 1,
                    u = !1
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
                                  return 1 + t.reduce(o, 0)
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
                        u
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
                            ? ((u = !1), (n = +t[0]), (e = +t[1]), a)
                            : u
                            ? null
                            : [n, e]
                    }),
                    (a.nodeSize = function(t) {
                        return arguments.length
                            ? ((u = !0), (n = +t[0]), (e = +t[1]), a)
                            : u
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
                    o,
                    u,
                    a = new h(t),
                    c = +t.value && (a.value = t.value),
                    s = [a]
                for (null == n && (n = f); (e = s.pop()); )
                    if (
                        (c && (e.value = +e.data.value),
                        (i = n(e.data)) && (u = i.length))
                    )
                        for (e.children = new Array(u), o = u - 1; o >= 0; --o)
                            s.push((r = e.children[o] = new h(i[o]))),
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
                        o = this,
                        u = [o]
                    do {
                        for (n = u.reverse(), u = []; (o = n.pop()); )
                            if ((t(o), (e = o.children)))
                                for (r = 0, i = e.length; r < i; ++r)
                                    u.push(e[r])
                    } while (u.length)
                    return this
                },
                eachAfter: function(t) {
                    for (
                        var n, e, r, i = this, o = [i], u = [];
                        (i = o.pop());

                    )
                        if ((u.push(i), (n = i.children)))
                            for (e = 0, r = n.length; e < r; ++e) o.push(n[e])
                    for (; (i = u.pop()); ) t(i)
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
                        o = [];
                    r < i;

                )
                    (n = t[r]),
                        e && y(e, n) ? ++r : ((e = m((o = v(o, n)))), (r = 0))
                return e
            }
            function v(t, n) {
                var e, r
                if (b(n, t)) return [n]
                for (e = 0; e < t.length; ++e)
                    if (g(n, t[e]) && b(_(t[e], n), t)) return [t[e], n]
                for (e = 0; e < t.length - 1; ++e)
                    for (r = e + 1; r < t.length; ++r)
                        if (
                            g(_(t[e], t[r]), n) &&
                            g(_(t[e], n), t[r]) &&
                            g(_(t[r], n), t[e]) &&
                            b(x(t[e], t[r], n), t)
                        )
                            return [t[e], t[r], n]
                throw new Error()
            }
            function g(t, n) {
                var e = t.r - n.r,
                    r = n.x - t.x,
                    i = n.y - t.y
                return e < 0 || e * e < r * r + i * i
            }
            function y(t, n) {
                var e = t.r - n.r + 1e-6,
                    r = n.x - t.x,
                    i = n.y - t.y
                return e > 0 && e * e > r * r + i * i
            }
            function b(t, n) {
                for (var e = 0; e < n.length; ++e) if (!y(t, n[e])) return !1
                return !0
            }
            function m(t) {
                switch (t.length) {
                    case 1:
                        return { x: (n = t[0]).x, y: n.y, r: n.r }
                    case 2:
                        return _(t[0], t[1])
                    case 3:
                        return x(t[0], t[1], t[2])
                }
                var n
            }
            function _(t, n) {
                var e = t.x,
                    r = t.y,
                    i = t.r,
                    o = n.x,
                    u = n.y,
                    a = n.r,
                    c = o - e,
                    f = u - r,
                    s = a - i,
                    l = Math.sqrt(c * c + f * f)
                return {
                    x: (e + o + (c / l) * s) / 2,
                    y: (r + u + (f / l) * s) / 2,
                    r: (l + i + a) / 2,
                }
            }
            function x(t, n, e) {
                var r = t.x,
                    i = t.y,
                    o = t.r,
                    u = n.x,
                    a = n.y,
                    c = n.r,
                    f = e.x,
                    s = e.y,
                    l = e.r,
                    h = r - u,
                    d = r - f,
                    p = i - a,
                    v = i - s,
                    g = c - o,
                    y = l - o,
                    b = r * r + i * i - o * o,
                    m = b - u * u - a * a + c * c,
                    _ = b - f * f - s * s + l * l,
                    x = d * p - h * v,
                    w = (p * _ - v * m) / (2 * x) - r,
                    M = (v * g - p * y) / x,
                    E = (d * m - h * _) / (2 * x) - i,
                    N = (h * y - d * g) / x,
                    A = M * M + N * N - 1,
                    T = 2 * (o + w * M + E * N),
                    S = w * w + E * E - o * o,
                    k = -(A
                        ? (T + Math.sqrt(T * T - 4 * A * S)) / (2 * A)
                        : S / T)
                return { x: r + w + M * k, y: i + E + N * k, r: k }
            }
            function w(t, n, e) {
                var r,
                    i,
                    o,
                    u,
                    a = t.x - n.x,
                    c = t.y - n.y,
                    f = a * a + c * c
                f
                    ? ((i = n.r + e.r),
                      (i *= i),
                      (u = t.r + e.r),
                      i > (u *= u)
                          ? ((r = (f + u - i) / (2 * f)),
                            (o = Math.sqrt(Math.max(0, u / f - r * r))),
                            (e.x = t.x - r * a - o * c),
                            (e.y = t.y - r * c + o * a))
                          : ((r = (f + i - u) / (2 * f)),
                            (o = Math.sqrt(Math.max(0, i / f - r * r))),
                            (e.x = n.x + r * a - o * c),
                            (e.y = n.y + r * c + o * a)))
                    : ((e.x = n.x + e.r), (e.y = n.y))
            }
            function M(t, n) {
                var e = t.r + n.r - 1e-6,
                    r = n.x - t.x,
                    i = n.y - t.y
                return e > 0 && e * e > r * r + i * i
            }
            function E(t) {
                var n = t._,
                    e = t.next._,
                    r = n.r + e.r,
                    i = (n.x * e.r + e.x * n.r) / r,
                    o = (n.y * e.r + e.y * n.r) / r
                return i * i + o * o
            }
            function N(t) {
                ;(this._ = t), (this.next = null), (this.previous = null)
            }
            function A(t) {
                if (!(i = t.length)) return 0
                var n, e, r, i, o, u, a, c, f, s, l
                if ((((n = t[0]).x = 0), (n.y = 0), !(i > 1))) return n.r
                if (
                    ((e = t[1]), (n.x = -e.r), (e.x = n.r), (e.y = 0), !(i > 2))
                )
                    return n.r + e.r
                w(e, n, (r = t[2])),
                    (n = new N(n)),
                    (e = new N(e)),
                    (r = new N(r)),
                    (n.next = r.previous = e),
                    (e.next = n.previous = r),
                    (r.next = e.previous = n)
                t: for (a = 3; a < i; ++a) {
                    w(n._, e._, (r = t[a])),
                        (r = new N(r)),
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
                            o = E(n);
                        (r = r.next) !== e;

                    )
                        (u = E(r)) < o && ((n = r), (o = u))
                    e = n.next
                }
                for (n = [e._], r = e; (r = r.next) !== e; ) n.push(r._)
                for (r = p(n), a = 0; a < i; ++a)
                    ((n = t[a]).x -= r.x), (n.y -= r.y)
                return r.r
            }
            var T = function(t) {
                return A(t), t
            }
            function S(t) {
                if ('function' != typeof t) throw new Error()
                return t
            }
            function k() {
                return 0
            }
            var C = function(t) {
                return function() {
                    return t
                }
            }
            function D(t) {
                return Math.sqrt(t.value)
            }
            var P = function() {
                var t = null,
                    n = 1,
                    e = 1,
                    r = k
                function i(i) {
                    return (
                        (i.x = n / 2),
                        (i.y = e / 2),
                        t
                            ? i
                                  .eachBefore(O(t))
                                  .eachAfter(I(r, 0.5))
                                  .eachBefore(R(1))
                            : i
                                  .eachBefore(O(D))
                                  .eachAfter(I(k, 1))
                                  .eachAfter(I(r, i.r / Math.min(n, e)))
                                  .eachBefore(R(Math.min(n, e) / (2 * i.r))),
                        i
                    )
                }
                return (
                    (i.radius = function(n) {
                        return arguments.length
                            ? ((t = null == (e = n) ? null : S(e)), i)
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
            function O(t) {
                return function(n) {
                    n.children || (n.r = Math.max(0, +t(n) || 0))
                }
            }
            function I(t, n) {
                return function(e) {
                    if ((r = e.children)) {
                        var r,
                            i,
                            o,
                            u = r.length,
                            a = t(e) * n || 0
                        if (a) for (i = 0; i < u; ++i) r[i].r += a
                        if (((o = A(r)), a)) for (i = 0; i < u; ++i) r[i].r -= a
                        e.r = o + a
                    }
                }
            }
            function R(t) {
                return function(n) {
                    var e = n.parent
                    ;(n.r *= t),
                        e && ((n.x = e.x + t * n.x), (n.y = e.y + t * n.y))
                }
            }
            var F = function(t) {
                    ;(t.x0 = Math.round(t.x0)),
                        (t.y0 = Math.round(t.y0)),
                        (t.x1 = Math.round(t.x1)),
                        (t.y1 = Math.round(t.y1))
                },
                L = function(t, n, e, r, i) {
                    for (
                        var o,
                            u = t.children,
                            a = -1,
                            c = u.length,
                            f = t.value && (r - n) / t.value;
                        ++a < c;

                    )
                        ((o = u[a]).y0 = e),
                            (o.y1 = i),
                            (o.x0 = n),
                            (o.x1 = n += o.value * f)
                },
                z = function() {
                    var t = 1,
                        n = 1,
                        e = 0,
                        r = !1
                    function i(i) {
                        var o = i.height + 1
                        return (
                            (i.x0 = i.y0 = e),
                            (i.x1 = t),
                            (i.y1 = n / o),
                            i.eachBefore(
                                (function(t, n) {
                                    return function(r) {
                                        r.children &&
                                            L(
                                                r,
                                                r.x0,
                                                (t * (r.depth + 1)) / n,
                                                r.x1,
                                                (t * (r.depth + 2)) / n,
                                            )
                                        var i = r.x0,
                                            o = r.y0,
                                            u = r.x1 - e,
                                            a = r.y1 - e
                                        u < i && (i = u = (i + u) / 2),
                                            a < o && (o = a = (o + a) / 2),
                                            (r.x0 = i),
                                            (r.y0 = o),
                                            (r.x1 = u),
                                            (r.y1 = a)
                                    }
                                })(n, o),
                            ),
                            r && i.eachBefore(F),
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
                q = '$',
                U = { depth: -1 },
                B = {}
            function Y(t) {
                return t.id
            }
            function j(t) {
                return t.parentId
            }
            var $ = function() {
                var t = Y,
                    n = j
                function e(e) {
                    var r,
                        i,
                        o,
                        u,
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
                                (p[(f = q + (a.id = c))] = f in p ? B : a)
                    for (i = 0; i < s; ++i)
                        if (
                            ((a = d[i]),
                            null != (c = n(e[i], i, e)) && (c += ''))
                        ) {
                            if (!(u = p[q + c]))
                                throw new Error('missing: ' + c)
                            if (u === B) throw new Error('ambiguous: ' + c)
                            u.children
                                ? u.children.push(a)
                                : (u.children = [a]),
                                (a.parent = u)
                        } else {
                            if (o) throw new Error('multiple roots')
                            o = a
                        }
                    if (!o) throw new Error('no root')
                    if (
                        ((o.parent = U),
                        o
                            .eachBefore(function(t) {
                                ;(t.depth = t.parent.depth + 1), --s
                            })
                            .eachBefore(l),
                        (o.parent = null),
                        s > 0)
                    )
                        throw new Error('cycle')
                    return o
                }
                return (
                    (e.id = function(n) {
                        return arguments.length ? ((t = S(n)), e) : t
                    }),
                    (e.parentId = function(t) {
                        return arguments.length ? ((n = S(t)), e) : n
                    }),
                    e
                )
            }
            function H(t, n) {
                return t.parent === n.parent ? 1 : 2
            }
            function G(t) {
                var n = t.children
                return n ? n[0] : t.t
            }
            function X(t) {
                var n = t.children
                return n ? n[n.length - 1] : t.t
            }
            function V(t, n, e) {
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
            var K = function() {
                    var t = H,
                        n = 1,
                        e = 1,
                        r = null
                    function i(i) {
                        var c = (function(t) {
                            for (
                                var n, e, r, i, o, u = new Z(t, 0), a = [u];
                                (n = a.pop());

                            )
                                if ((r = n._.children))
                                    for (
                                        n.children = new Array((o = r.length)),
                                            i = o - 1;
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
                                ((u.parent = new Z(null, 0)).children = [u]), u
                            )
                        })(i)
                        if (
                            (c.eachAfter(o),
                            (c.parent.m = -c.z),
                            c.eachBefore(u),
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
                    function o(n) {
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
                                        o = i.length;
                                    --o >= 0;

                                )
                                    ((n = i[o]).z += e),
                                        (n.m += e),
                                        (e += n.s + (r += n.c))
                            })(n)
                            var o = (e[0].z + e[e.length - 1].z) / 2
                            i
                                ? ((n.z = i.z + t(n._, i._)), (n.m = n.z - o))
                                : (n.z = o)
                        } else i && (n.z = i.z + t(n._, i._))
                        n.parent.A = (function(n, e, r) {
                            if (e) {
                                for (
                                    var i,
                                        o = n,
                                        u = n,
                                        a = e,
                                        c = o.parent.children[0],
                                        f = o.m,
                                        s = u.m,
                                        l = a.m,
                                        h = c.m;
                                    (a = X(a)), (o = G(o)), a && o;

                                )
                                    (c = G(c)),
                                        ((u = X(u)).a = n),
                                        (i = a.z + l - o.z - f + t(a._, o._)) >
                                            0 &&
                                            (V(W(a, n, r), n, i),
                                            (f += i),
                                            (s += i)),
                                        (l += a.m),
                                        (f += o.m),
                                        (h += c.m),
                                        (s += u.m)
                                a && !X(u) && ((u.t = a), (u.m += l - s)),
                                    o &&
                                        !G(c) &&
                                        ((c.t = o), (c.m += f - h), (r = n))
                            }
                            return r
                        })(n, i, n.parent.A || r[0])
                    }
                    function u(t) {
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
                Q = function(t, n, e, r, i) {
                    for (
                        var o,
                            u = t.children,
                            a = -1,
                            c = u.length,
                            f = t.value && (i - e) / t.value;
                        ++a < c;

                    )
                        ((o = u[a]).x0 = n),
                            (o.x1 = r),
                            (o.y0 = e),
                            (o.y1 = e += o.value * f)
                },
                J = (1 + Math.sqrt(5)) / 2
            function tt(t, n, e, r, i, o) {
                for (
                    var u,
                        a,
                        c,
                        f,
                        s,
                        l,
                        h,
                        d,
                        p,
                        v,
                        g,
                        y = [],
                        b = n.children,
                        m = 0,
                        _ = 0,
                        x = b.length,
                        w = n.value;
                    m < x;

                ) {
                    ;(c = i - e), (f = o - r)
                    do {
                        s = b[_++].value
                    } while (!s && _ < x)
                    for (
                        l = h = s,
                            g = s * s * (v = Math.max(f / c, c / f) / (w * t)),
                            p = Math.max(h / g, g / l);
                        _ < x;
                        ++_
                    ) {
                        if (
                            ((s += a = b[_].value),
                            a < l && (l = a),
                            a > h && (h = a),
                            (g = s * s * v),
                            (d = Math.max(h / g, g / l)) > p)
                        ) {
                            s -= a
                            break
                        }
                        p = d
                    }
                    y.push(
                        (u = {
                            value: s,
                            dice: c < f,
                            children: b.slice(m, _),
                        }),
                    ),
                        u.dice
                            ? L(u, e, r, i, w ? (r += (f * s) / w) : o)
                            : Q(u, e, r, w ? (e += (c * s) / w) : i, o),
                        (w -= s),
                        (m = _)
                }
                return y
            }
            var nt = (function t(n) {
                    function e(t, e, r, i, o) {
                        tt(n, t, e, r, i, o)
                    }
                    return (
                        (e.ratio = function(n) {
                            return t((n = +n) > 1 ? n : 1)
                        }),
                        e
                    )
                })(J),
                et = function() {
                    var t = nt,
                        n = !1,
                        e = 1,
                        r = 1,
                        i = [0],
                        o = k,
                        u = k,
                        a = k,
                        c = k,
                        f = k
                    function s(t) {
                        return (
                            (t.x0 = t.y0 = 0),
                            (t.x1 = e),
                            (t.y1 = r),
                            t.eachBefore(l),
                            (i = [0]),
                            n && t.eachBefore(F),
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
                                ((e = i[n.depth + 1] = o(n) / 2),
                                (r += f(n) - e),
                                (s += u(n) - e),
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
                            return arguments.length ? ((t = S(n)), s) : t
                        }),
                        (s.padding = function(t) {
                            return arguments.length
                                ? s.paddingInner(t).paddingOuter(t)
                                : s.paddingInner()
                        }),
                        (s.paddingInner = function(t) {
                            return arguments.length
                                ? ((o = 'function' == typeof t ? t : C(+t)), s)
                                : o
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
                                ? ((u = 'function' == typeof t ? t : C(+t)), s)
                                : u
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
                    var o,
                        u,
                        a = t.children,
                        c = a.length,
                        f = new Array(c + 1)
                    for (f[0] = u = o = 0; o < c; ++o)
                        f[o + 1] = u += a[o].value
                    !(function t(n, e, r, i, o, u, c) {
                        if (n >= e - 1) {
                            var s = a[n]
                            return (
                                (s.x0 = i),
                                (s.y0 = o),
                                (s.x1 = u),
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
                        var g = f[d] - l,
                            y = r - g
                        if (u - i > c - o) {
                            var b = (i * y + u * g) / r
                            t(n, d, g, i, o, b, c), t(d, e, y, b, o, u, c)
                        } else {
                            var m = (o * y + c * g) / r
                            t(n, d, g, i, o, u, m), t(d, e, y, i, m, u, c)
                        }
                    })(0, c, t.value, n, e, r, i)
                },
                it = function(t, n, e, r, i) {
                    ;(1 & t.depth ? Q : L)(t, n, e, r, i)
                },
                ot = (function t(n) {
                    function e(t, e, r, i, o) {
                        if ((u = t._squarify) && u.ratio === n)
                            for (
                                var u,
                                    a,
                                    c,
                                    f,
                                    s,
                                    l = -1,
                                    h = u.length,
                                    d = t.value;
                                ++l < h;

                            ) {
                                for (
                                    c = (a = u[l]).children,
                                        f = a.value = 0,
                                        s = c.length;
                                    f < s;
                                    ++f
                                )
                                    a.value += c[f].value
                                a.dice
                                    ? L(
                                          a,
                                          e,
                                          r,
                                          i,
                                          (r += ((o - r) * a.value) / d),
                                      )
                                    : Q(
                                          a,
                                          e,
                                          r,
                                          (e += ((i - e) * a.value) / d),
                                          o,
                                      ),
                                    (d -= a.value)
                            }
                        else
                            (t._squarify = u = tt(n, t, e, r, i, o)),
                                (u.ratio = n)
                    }
                    return (
                        (e.ratio = function(n) {
                            return t((n = +n) > 1 ? n : 1)
                        }),
                        e
                    )
                })(J)
            e.d(n, 'cluster', function() {
                return u
            }),
                e.d(n, 'hierarchy', function() {
                    return c
                }),
                e.d(n, 'pack', function() {
                    return P
                }),
                e.d(n, 'packSiblings', function() {
                    return T
                }),
                e.d(n, 'packEnclose', function() {
                    return p
                }),
                e.d(n, 'partition', function() {
                    return z
                }),
                e.d(n, 'stratify', function() {
                    return $
                }),
                e.d(n, 'tree', function() {
                    return K
                }),
                e.d(n, 'treemap', function() {
                    return et
                }),
                e.d(n, 'treemapBinary', function() {
                    return rt
                }),
                e.d(n, 'treemapDice', function() {
                    return L
                }),
                e.d(n, 'treemapSlice', function() {
                    return Q
                }),
                e.d(n, 'treemapSliceDice', function() {
                    return it
                }),
                e.d(n, 'treemapSquarify', function() {
                    return nt
                }),
                e.d(n, 'treemapResquarify', function() {
                    return ot
                })
        },
        371: function(t, n, e) {
            __NEXT_REGISTER_PAGE('/test/force1', function() {
                return (t.exports = e(372)), { page: t.exports.default }
            })
        },
        372: function(t, n, e) {
            'use strict'
            e.r(n)
            e(18)
            var r = e(77),
                i = (e(83), e(138))
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
            function u(t, n) {
                for (var e = 0; e < n.length; e++) {
                    var r = n[e]
                    ;(r.enumerable = r.enumerable || !1),
                        (r.configurable = !0),
                        'value' in r && (r.writable = !0),
                        Object.defineProperty(t, r.key, r)
                }
            }
            function a(t) {
                return (a = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function(t) {
                          return t.__proto__ || Object.getPrototypeOf(t)
                      })(t)
            }
            function c(t, n) {
                return (c =
                    Object.setPrototypeOf ||
                    function(t, n) {
                        return (t.__proto__ = n), t
                    })(t, n)
            }
            function f(t) {
                if (void 0 === t)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                    )
                return t
            }
            function s(t, n, e) {
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
            var l = e(0),
                h = (e(77), e(74)),
                d = e(28),
                p = (d.hierarchy,
                d.tree,
                (function(t) {
                    function n() {
                        var t, e, r, u
                        !(function(t, n) {
                            if (!(t instanceof n))
                                throw new TypeError(
                                    'Cannot call a class as a function',
                                )
                        })(this, n)
                        for (
                            var c = arguments.length, l = new Array(c), d = 0;
                            d < c;
                            d++
                        )
                            l[d] = arguments[d]
                        return (
                            (r = this),
                            (u = (t = a(n)).call.apply(t, [this].concat(l))),
                            (e =
                                !u ||
                                ('object' !== o(u) && 'function' != typeof u)
                                    ? f(r)
                                    : u),
                            s(f(f(e)), 'state', { d: null }),
                            s(f(f(e)), 'updateState', function(t, n) {
                                console.log('update state'),
                                    h
                                        .selectAll('circle')
                                        .data(i.default.nodes)
                                        .attr('cx', function(n) {
                                            return console.log('HI'), t
                                        })
                                        .attr('cy', function(t) {
                                            return console.log('HI'), n
                                        }),
                                    e.setState({ x: t, y: n })
                            }),
                            s(f(f(e)), 'drawChart', function() {
                                var t = i.default,
                                    n = e.props.connectFauxDOM('svg', 'chart'),
                                    r = h.select(n),
                                    o = 0.03
                                var u = h
                                    .forceSimulation()
                                    .force('link', h.forceLink().distance(30))
                                    .force(
                                        'charge',
                                        h.forceManyBody().strength(function(t) {
                                            return (
                                                -Math.pow(t.connections, 4) * o
                                            )
                                        }),
                                    )
                                    .force(
                                        'collide',
                                        h
                                            .forceCollide(function(t) {
                                                return 60
                                            })
                                            .iterations(16),
                                    )
                                    .force('center', h.forceCenter(480, 480))
                                u.nodes(t.nodes), u.force('link').links(t.links)
                                var a = r
                                        .selectAll('.link')
                                        .data(t.links)
                                        .enter()
                                        .append('line')
                                        .attr('class', 'link'),
                                    c = r
                                        .selectAll('.node')
                                        .data(t.nodes)
                                        .enter()
                                        .append('g')
                                        .attr('class', 'node')
                                        .call(
                                            h
                                                .drag()
                                                .on('start', function(t) {
                                                    console.log('drag started'),
                                                        s.updateState(t.x, t.y),
                                                        h.event.active ||
                                                            u
                                                                .alphaTarget(
                                                                    0.3,
                                                                )
                                                                .restart()
                                                    ;(t.fx = t.x), (t.fy = t.y)
                                                })
                                                .on('drag', function(t) {
                                                    ;(t.fx = h.event.x),
                                                        (t.fy = h.event.y)
                                                })
                                                .on('end', function(t) {
                                                    h.event.active ||
                                                        u.alphaTarget(0)
                                                }),
                                        )
                                c.append('circle').attr('r', function(t) {
                                    return 5 + 1.5 * t.connections
                                }),
                                    c
                                        .append('text')
                                        .attr('dx', '2.5em')
                                        .attr('dy', '0.25em')
                                        .text(function(t) {
                                            return t.id
                                        }),
                                    u.on('tick', function() {
                                        a
                                            .attr('x1', function(t) {
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
                                            }),
                                            c.attr('transform', function(t) {
                                                return (
                                                    'translate(' +
                                                    t.x +
                                                    ',' +
                                                    t.y +
                                                    ')'
                                                )
                                            })
                                    })
                                var s = f(f(e))
                                return r
                            }),
                            e
                        )
                    }
                    var e, r, d
                    return (
                        (function(t, n) {
                            if ('function' != typeof n && null !== n)
                                throw new TypeError(
                                    'Super expression must either be null or a function',
                                )
                            ;(t.prototype = Object.create(n && n.prototype, {
                                constructor: {
                                    value: t,
                                    writable: !0,
                                    configurable: !0,
                                },
                            })),
                                n && c(t, n)
                        })(n, l.Component),
                        (e = n),
                        (r = [
                            {
                                key: 'componentDidMount',
                                value: function() {
                                    console.log('HELLOOO!'), this.drawChart()
                                },
                            },
                            {
                                key: 'render',
                                value: function() {
                                    return (
                                        console.log('render'),
                                        l.createElement(
                                            'svg',
                                            {
                                                width: '960',
                                                height: '960',
                                                className: 'app',
                                            },
                                            this.props.chart,
                                        )
                                    )
                                },
                            },
                            {
                                key: 'componentDidUpdate',
                                value: function() {
                                    console.log('UPDATE COMPONENT!')
                                    var t = h.selectAll('.link')
                                    console.log('CHART', t)
                                },
                            },
                        ]) && u(e.prototype, r),
                        d && u(e, d),
                        n
                    )
                })())
            n.default = Object(r.withFauxDOM)(p)
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
                                    var o = (r + i) >>> 1
                                    t(n[o], e) < 0 ? (r = o + 1) : (i = o)
                                }
                                return r
                            },
                            right: function(n, e, r, i) {
                                for (
                                    null == r && (r = 0),
                                        null == i && (i = n.length);
                                    r < i;

                                ) {
                                    var o = (r + i) >>> 1
                                    t(n[o], e) > 0 ? (i = o) : (r = o + 1)
                                }
                                return r
                            },
                        }
                    )
                }
            var o = i(r),
                u = o.right,
                a = o.left,
                c = u,
                f = function(t, n) {
                    null == n && (n = s)
                    for (
                        var e = 0,
                            r = t.length - 1,
                            i = t[0],
                            o = new Array(r < 0 ? 0 : r);
                        e < r;

                    )
                        o[e] = n(i, (i = t[++e]))
                    return o
                }
            function s(t, n) {
                return [t, n]
            }
            var l = function(t, n, e) {
                    var r,
                        i,
                        o,
                        u,
                        a = t.length,
                        c = n.length,
                        f = new Array(a * c)
                    for (null == e && (e = s), r = o = 0; r < a; ++r)
                        for (u = t[r], i = 0; i < c; ++i, ++o) f[o] = e(u, n[i])
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
                        o = 0,
                        u = -1,
                        a = 0,
                        c = 0
                    if (null == n)
                        for (; ++u < i; )
                            isNaN((e = d(t[u]))) ||
                                (c += (r = e - a) * (e - (a += r / ++o)))
                    else
                        for (; ++u < i; )
                            isNaN((e = d(n(t[u], u, t)))) ||
                                (c += (r = e - a) * (e - (a += r / ++o)))
                    if (o > 1) return c / (o - 1)
                },
                v = function(t, n) {
                    var e = p(t, n)
                    return e ? Math.sqrt(e) : e
                },
                g = function(t, n) {
                    var e,
                        r,
                        i,
                        o = t.length,
                        u = -1
                    if (null == n) {
                        for (; ++u < o; )
                            if (null != (e = t[u]) && e >= e)
                                for (r = i = e; ++u < o; )
                                    null != (e = t[u]) &&
                                        (r > e && (r = e), i < e && (i = e))
                    } else
                        for (; ++u < o; )
                            if (null != (e = n(t[u], u, t)) && e >= e)
                                for (r = i = e; ++u < o; )
                                    null != (e = n(t[u], u, t)) &&
                                        (r > e && (r = e), i < e && (i = e))
                    return [r, i]
                },
                y = Array.prototype,
                b = y.slice,
                m = y.map,
                _ = function(t) {
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
                            o = new Array(i);
                        ++r < i;

                    )
                        o[r] = t + r * e
                    return o
                },
                M = Math.sqrt(50),
                E = Math.sqrt(10),
                N = Math.sqrt(2),
                A = function(t, n, e) {
                    var r,
                        i,
                        o,
                        u,
                        a = -1
                    if (((e = +e), (t = +t) === (n = +n) && e > 0)) return [t]
                    if (
                        ((r = n < t) && ((i = t), (t = n), (n = i)),
                        0 === (u = T(t, n, e)) || !isFinite(u))
                    )
                        return []
                    if (u > 0)
                        for (
                            t = Math.ceil(t / u),
                                n = Math.floor(n / u),
                                o = new Array((i = Math.ceil(n - t + 1)));
                            ++a < i;

                        )
                            o[a] = (t + a) * u
                    else
                        for (
                            t = Math.floor(t * u),
                                n = Math.ceil(n * u),
                                o = new Array((i = Math.ceil(t - n + 1)));
                            ++a < i;

                        )
                            o[a] = (t - a) / u
                    return r && o.reverse(), o
                }
            function T(t, n, e) {
                var r = (n - t) / Math.max(0, e),
                    i = Math.floor(Math.log(r) / Math.LN10),
                    o = r / Math.pow(10, i)
                return i >= 0
                    ? (o >= M ? 10 : o >= E ? 5 : o >= N ? 2 : 1) *
                          Math.pow(10, i)
                    : -Math.pow(10, -i) /
                          (o >= M ? 10 : o >= E ? 5 : o >= N ? 2 : 1)
            }
            function S(t, n, e) {
                var r = Math.abs(n - t) / Math.max(0, e),
                    i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
                    o = r / i
                return (
                    o >= M ? (i *= 10) : o >= E ? (i *= 5) : o >= N && (i *= 2),
                    n < t ? -i : i
                )
            }
            var k = function(t) {
                    return Math.ceil(Math.log(t.length) / Math.LN2) + 1
                },
                C = function() {
                    var t = x,
                        n = g,
                        e = k
                    function r(r) {
                        var i,
                            o,
                            u = r.length,
                            a = new Array(u)
                        for (i = 0; i < u; ++i) a[i] = t(r[i], i, r)
                        var f = n(a),
                            s = f[0],
                            l = f[1],
                            h = e(a, s, l)
                        Array.isArray(h) ||
                            ((h = S(s, l, h)),
                            (h = w(Math.ceil(s / h) * h, l, h)))
                        for (var d = h.length; h[0] <= s; ) h.shift(), --d
                        for (; h[d - 1] > l; ) h.pop(), --d
                        var p,
                            v = new Array(d + 1)
                        for (i = 0; i <= d; ++i)
                            ((p = v[i] = []).x0 = i > 0 ? h[i - 1] : s),
                                (p.x1 = i < d ? h[i] : l)
                        for (i = 0; i < u; ++i)
                            s <= (o = a[i]) &&
                                o <= l &&
                                v[c(h, o, 0, d)].push(r[i])
                        return v
                    }
                    return (
                        (r.value = function(n) {
                            return arguments.length
                                ? ((t = 'function' == typeof n ? n : _(n)), r)
                                : t
                        }),
                        (r.domain = function(t) {
                            return arguments.length
                                ? ((n =
                                      'function' == typeof t
                                          ? t
                                          : _([t[0], t[1]])),
                                  r)
                                : n
                        }),
                        (r.thresholds = function(t) {
                            return arguments.length
                                ? ((e =
                                      'function' == typeof t
                                          ? t
                                          : Array.isArray(t)
                                          ? _(b.call(t))
                                          : _(t)),
                                  r)
                                : e
                        }),
                        r
                    )
                },
                D = function(t, n, e) {
                    if ((null == e && (e = d), (r = t.length))) {
                        if ((n = +n) <= 0 || r < 2) return +e(t[0], 0, t)
                        if (n >= 1) return +e(t[r - 1], r - 1, t)
                        var r,
                            i = (r - 1) * n,
                            o = Math.floor(i),
                            u = +e(t[o], o, t)
                        return u + (+e(t[o + 1], o + 1, t) - u) * (i - o)
                    }
                },
                P = function(t, n, e) {
                    return (
                        (t = m.call(t, d).sort(r)),
                        Math.ceil(
                            (e - n) /
                                (2 *
                                    (D(t, 0.75) - D(t, 0.25)) *
                                    Math.pow(t.length, -1 / 3)),
                        )
                    )
                },
                O = function(t, n, e) {
                    return Math.ceil(
                        (e - n) / (3.5 * v(t) * Math.pow(t.length, -1 / 3)),
                    )
                },
                I = function(t, n) {
                    var e,
                        r,
                        i = t.length,
                        o = -1
                    if (null == n) {
                        for (; ++o < i; )
                            if (null != (e = t[o]) && e >= e)
                                for (r = e; ++o < i; )
                                    null != (e = t[o]) && e > r && (r = e)
                    } else
                        for (; ++o < i; )
                            if (null != (e = n(t[o], o, t)) && e >= e)
                                for (r = e; ++o < i; )
                                    null != (e = n(t[o], o, t)) &&
                                        e > r &&
                                        (r = e)
                    return r
                },
                R = function(t, n) {
                    var e,
                        r = t.length,
                        i = r,
                        o = -1,
                        u = 0
                    if (null == n)
                        for (; ++o < r; ) isNaN((e = d(t[o]))) ? --i : (u += e)
                    else
                        for (; ++o < r; )
                            isNaN((e = d(n(t[o], o, t)))) ? --i : (u += e)
                    if (i) return u / i
                },
                F = function(t, n) {
                    var e,
                        i = t.length,
                        o = -1,
                        u = []
                    if (null == n)
                        for (; ++o < i; ) isNaN((e = d(t[o]))) || u.push(e)
                    else
                        for (; ++o < i; )
                            isNaN((e = d(n(t[o], o, t)))) || u.push(e)
                    return D(u.sort(r), 0.5)
                },
                L = function(t) {
                    for (var n, e, r, i = t.length, o = -1, u = 0; ++o < i; )
                        u += t[o].length
                    for (e = new Array(u); --i >= 0; )
                        for (n = (r = t[i]).length; --n >= 0; ) e[--u] = r[n]
                    return e
                },
                z = function(t, n) {
                    var e,
                        r,
                        i = t.length,
                        o = -1
                    if (null == n) {
                        for (; ++o < i; )
                            if (null != (e = t[o]) && e >= e)
                                for (r = e; ++o < i; )
                                    null != (e = t[o]) && r > e && (r = e)
                    } else
                        for (; ++o < i; )
                            if (null != (e = n(t[o], o, t)) && e >= e)
                                for (r = e; ++o < i; )
                                    null != (e = n(t[o], o, t)) &&
                                        r > e &&
                                        (r = e)
                    return r
                },
                q = function(t, n) {
                    for (var e = n.length, r = new Array(e); e--; )
                        r[e] = t[n[e]]
                    return r
                },
                U = function(t, n) {
                    if ((e = t.length)) {
                        var e,
                            i,
                            o = 0,
                            u = 0,
                            a = t[u]
                        for (null == n && (n = r); ++o < e; )
                            (n((i = t[o]), a) < 0 || 0 !== n(a, a)) &&
                                ((a = i), (u = o))
                        return 0 === n(a, a) ? u : void 0
                    }
                },
                B = function(t, n, e) {
                    for (
                        var r,
                            i,
                            o =
                                (null == e ? t.length : e) -
                                (n = null == n ? 0 : +n);
                        o;

                    )
                        (i = (Math.random() * o--) | 0),
                            (r = t[o + n]),
                            (t[o + n] = t[i + n]),
                            (t[i + n] = r)
                    return t
                },
                Y = function(t, n) {
                    var e,
                        r = t.length,
                        i = -1,
                        o = 0
                    if (null == n) for (; ++i < r; ) (e = +t[i]) && (o += e)
                    else for (; ++i < r; ) (e = +n(t[i], i, t)) && (o += e)
                    return o
                },
                j = function(t) {
                    if (!(i = t.length)) return []
                    for (var n = -1, e = z(t, $), r = new Array(e); ++n < e; )
                        for (
                            var i, o = -1, u = (r[n] = new Array(i));
                            ++o < i;

                        )
                            u[o] = t[o][n]
                    return r
                }
            function $(t) {
                return t.length
            }
            var H = function() {
                    return j(arguments)
                },
                G = Array.prototype.slice,
                X = function(t) {
                    return t
                },
                V = 1,
                W = 2,
                Z = 3,
                K = 4,
                Q = 1e-6
            function J(t) {
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
                    o = 6,
                    u = 6,
                    a = 3,
                    c = t === V || t === K ? -1 : 1,
                    f = t === K || t === W ? 'x' : 'y',
                    s = t === V || t === Z ? J : tt
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
                                    : X
                                : i,
                        p = Math.max(o, 0) + a,
                        v = n.range(),
                        g = +v[0] + 0.5,
                        y = +v[v.length - 1] + 0.5,
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
                        m = l.selection ? l.selection() : l,
                        _ = m.selectAll('.domain').data([null]),
                        x = m
                            .selectAll('.tick')
                            .data(h, n)
                            .order(),
                        w = x.exit(),
                        M = x
                            .enter()
                            .append('g')
                            .attr('class', 'tick'),
                        E = x.select('line'),
                        N = x.select('text')
                    ;(_ = _.merge(
                        _.enter()
                            .insert('path', '.tick')
                            .attr('class', 'domain')
                            .attr('stroke', 'currentColor'),
                    )),
                        (x = x.merge(M)),
                        (E = E.merge(
                            M.append('line')
                                .attr('stroke', 'currentColor')
                                .attr(f + '2', c * o),
                        )),
                        (N = N.merge(
                            M.append('text')
                                .attr('fill', 'currentColor')
                                .attr(f, c * p)
                                .attr(
                                    'dy',
                                    t === V
                                        ? '0em'
                                        : t === Z
                                        ? '0.71em'
                                        : '0.32em',
                                ),
                        )),
                        l !== m &&
                            ((_ = _.transition(l)),
                            (x = x.transition(l)),
                            (E = E.transition(l)),
                            (N = N.transition(l)),
                            (w = w
                                .transition(l)
                                .attr('opacity', Q)
                                .attr('transform', function(t) {
                                    return isFinite((t = b(t)))
                                        ? s(t)
                                        : this.getAttribute('transform')
                                })),
                            M.attr('opacity', Q).attr('transform', function(t) {
                                var n = this.parentNode.__axis
                                return s(n && isFinite((n = n(t))) ? n : b(t))
                            })),
                        w.remove(),
                        _.attr(
                            'd',
                            t === K || t == W
                                ? u
                                    ? 'M' +
                                      c * u +
                                      ',' +
                                      g +
                                      'H0.5V' +
                                      y +
                                      'H' +
                                      c * u
                                    : 'M0.5,' + g + 'V' + y
                                : u
                                ? 'M' +
                                  g +
                                  ',' +
                                  c * u +
                                  'V0.5H' +
                                  y +
                                  'V' +
                                  c * u
                                : 'M' + g + ',0.5H' + y,
                        ),
                        x.attr('opacity', 1).attr('transform', function(t) {
                            return s(b(t))
                        }),
                        E.attr(f + '2', c * o),
                        N.attr(f, c * p).text(d),
                        m
                            .filter(nt)
                            .attr('fill', 'none')
                            .attr('font-size', 10)
                            .attr('font-family', 'sans-serif')
                            .attr(
                                'text-anchor',
                                t === W ? 'start' : t === K ? 'end' : 'middle',
                            ),
                        m.each(function() {
                            this.__axis = b
                        })
                }
                return (
                    (l.scale = function(t) {
                        return arguments.length ? ((n = t), l) : n
                    }),
                    (l.ticks = function() {
                        return (e = G.call(arguments)), l
                    }),
                    (l.tickArguments = function(t) {
                        return arguments.length
                            ? ((e = null == t ? [] : G.call(t)), l)
                            : e.slice()
                    }),
                    (l.tickValues = function(t) {
                        return arguments.length
                            ? ((r = null == t ? null : G.call(t)), l)
                            : r && r.slice()
                    }),
                    (l.tickFormat = function(t) {
                        return arguments.length ? ((i = t), l) : i
                    }),
                    (l.tickSize = function(t) {
                        return arguments.length ? ((o = u = +t), l) : o
                    }),
                    (l.tickSizeInner = function(t) {
                        return arguments.length ? ((o = +t), l) : o
                    }),
                    (l.tickSizeOuter = function(t) {
                        return arguments.length ? ((u = +t), l) : u
                    }),
                    (l.tickPadding = function(t) {
                        return arguments.length ? ((a = +t), l) : a
                    }),
                    l
                )
            }
            function rt(t) {
                return et(V, t)
            }
            function it(t) {
                return et(W, t)
            }
            function ot(t) {
                return et(Z, t)
            }
            function ut(t) {
                return et(K, t)
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
                        o = ((r = i),
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
                        u = -1,
                        a = o.length
                    if (!(arguments.length < 2)) {
                        if (null != n && 'function' != typeof n)
                            throw new Error('invalid callback: ' + n)
                        for (; ++u < a; )
                            if ((e = (t = o[u]).type))
                                i[e] = lt(i[e], t.name, n)
                            else if (null == n)
                                for (e in i) i[e] = lt(i[e], t.name, null)
                        return this
                    }
                    for (; ++u < a; )
                        if ((e = (t = o[u]).type) && (e = st(i[e], t.name)))
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
                        for (var e, r, i = new Array(e), o = 0; o < e; ++o)
                            i[o] = arguments[o + 2]
                    if (!this._.hasOwnProperty(t))
                        throw new Error('unknown type: ' + t)
                    for (o = 0, e = (r = this._[t]).length; o < e; ++o)
                        r[o].value.apply(n, i)
                },
                apply: function(t, n, e) {
                    if (!this._.hasOwnProperty(t))
                        throw new Error('unknown type: ' + t)
                    for (var r = this._[t], i = 0, o = r.length; i < o; ++i)
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
            var gt = function(t) {
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
            function yt() {}
            var bt = function(t) {
                return null == t
                    ? yt
                    : function() {
                          return this.querySelector(t)
                      }
            }
            function mt() {
                return []
            }
            var _t = function(t) {
                    return null == t
                        ? mt
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
            var Et = xt,
                Nt = function(t) {
                    return new Array(t.length)
                }
            function At(t, n) {
                ;(this.ownerDocument = t.ownerDocument),
                    (this.namespaceURI = t.namespaceURI),
                    (this._next = null),
                    (this._parent = t),
                    (this.__data__ = n)
            }
            At.prototype = {
                constructor: At,
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
            var Tt = '$'
            function St(t, n, e, r, i, o) {
                for (var u, a = 0, c = n.length, f = o.length; a < f; ++a)
                    (u = n[a])
                        ? ((u.__data__ = o[a]), (r[a] = u))
                        : (e[a] = new At(t, o[a]))
                for (; a < c; ++a) (u = n[a]) && (i[a] = u)
            }
            function kt(t, n, e, r, i, o, u) {
                var a,
                    c,
                    f,
                    s = {},
                    l = n.length,
                    h = o.length,
                    d = new Array(l)
                for (a = 0; a < l; ++a)
                    (c = n[a]) &&
                        ((d[a] = f = Tt + u.call(c, c.__data__, a, n)),
                        f in s ? (i[a] = c) : (s[f] = c))
                for (a = 0; a < h; ++a)
                    (c = s[(f = Tt + u.call(t, o[a], a, o))])
                        ? ((r[a] = c), (c.__data__ = o[a]), (s[f] = null))
                        : (e[a] = new At(t, o[a]))
                for (a = 0; a < l; ++a)
                    (c = n[a]) && s[d[a]] === c && (i[a] = c)
            }
            function Ct(t, n) {
                return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
            }
            var Dt = function(t) {
                return (
                    (t.ownerDocument && t.ownerDocument.defaultView) ||
                    (t.document && t) ||
                    t.defaultView
                )
            }
            function Pt(t, n) {
                return (
                    t.style.getPropertyValue(n) ||
                    Dt(t)
                        .getComputedStyle(t, null)
                        .getPropertyValue(n)
                )
            }
            function Ot(t) {
                return t.trim().split(/^|\s+/)
            }
            function It(t) {
                return t.classList || new Rt(t)
            }
            function Rt(t) {
                ;(this._node = t),
                    (this._names = Ot(t.getAttribute('class') || ''))
            }
            function Ft(t, n) {
                for (var e = It(t), r = -1, i = n.length; ++r < i; ) e.add(n[r])
            }
            function Lt(t, n) {
                for (var e = It(t), r = -1, i = n.length; ++r < i; )
                    e.remove(n[r])
            }
            Rt.prototype = {
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
            function zt() {
                this.textContent = ''
            }
            function qt() {
                this.innerHTML = ''
            }
            function Ut() {
                this.nextSibling && this.parentNode.appendChild(this)
            }
            function Bt() {
                this.previousSibling &&
                    this.parentNode.insertBefore(
                        this,
                        this.parentNode.firstChild,
                    )
            }
            function Yt() {
                return null
            }
            function jt() {
                var t = this.parentNode
                t && t.removeChild(this)
            }
            function $t() {
                return this.parentNode.insertBefore(
                    this.cloneNode(!1),
                    this.nextSibling,
                )
            }
            function Ht() {
                return this.parentNode.insertBefore(
                    this.cloneNode(!0),
                    this.nextSibling,
                )
            }
            var Gt = {},
                Xt = null
            'undefined' != typeof document &&
                ('onmouseenter' in document.documentElement ||
                    (Gt = { mouseenter: 'mouseover', mouseleave: 'mouseout' }))
            function Vt(t, n, e) {
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
                    var i = Xt
                    Xt = r
                    try {
                        t.call(this, this.__data__, n, e)
                    } finally {
                        Xt = i
                    }
                }
            }
            function Zt(t) {
                return function() {
                    var n = this.__on
                    if (n) {
                        for (var e, r = 0, i = -1, o = n.length; r < o; ++r)
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
            function Kt(t, n, e) {
                var r = Gt.hasOwnProperty(t.type) ? Vt : Wt
                return function(i, o, u) {
                    var a,
                        c = this.__on,
                        f = r(n, o, u)
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
            function Qt(t, n, e, r) {
                var i = Xt
                ;(t.sourceEvent = Xt), (Xt = t)
                try {
                    return n.apply(e, r)
                } finally {
                    Xt = i
                }
            }
            function Jt(t, n, e) {
                var r = Dt(t),
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
                            var o,
                                u,
                                a = n[i],
                                c = a.length,
                                f = (r[i] = new Array(c)),
                                s = 0;
                            s < c;
                            ++s
                        )
                            (o = a[s]) &&
                                (u = t.call(o, o.__data__, s, a)) &&
                                ('__data__' in o && (u.__data__ = o.__data__),
                                (f[s] = u))
                    return new nn(r, this._parents)
                },
                selectAll: function(t) {
                    'function' != typeof t && (t = _t(t))
                    for (
                        var n = this._groups,
                            e = n.length,
                            r = [],
                            i = [],
                            o = 0;
                        o < e;
                        ++o
                    )
                        for (var u, a = n[o], c = a.length, f = 0; f < c; ++f)
                            (u = a[f]) &&
                                (r.push(t.call(u, u.__data__, f, a)), i.push(u))
                    return new nn(r, i)
                },
                filter: function(t) {
                    'function' != typeof t && (t = Et(t))
                    for (
                        var n = this._groups,
                            e = n.length,
                            r = new Array(e),
                            i = 0;
                        i < e;
                        ++i
                    )
                        for (
                            var o,
                                u = n[i],
                                a = u.length,
                                c = (r[i] = []),
                                f = 0;
                            f < a;
                            ++f
                        )
                            (o = u[f]) &&
                                t.call(o, o.__data__, f, u) &&
                                c.push(o)
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
                        r = n ? kt : St,
                        i = this._parents,
                        o = this._groups
                    'function' != typeof t &&
                        ((e = t),
                        (t = function() {
                            return e
                        }))
                    for (
                        var u = o.length,
                            a = new Array(u),
                            c = new Array(u),
                            f = new Array(u),
                            s = 0;
                        s < u;
                        ++s
                    ) {
                        var l = i[s],
                            h = o[s],
                            d = h.length,
                            p = t.call(l, l && l.__data__, s, i),
                            v = p.length,
                            g = (c[s] = new Array(v)),
                            y = (a[s] = new Array(v))
                        r(l, h, g, y, (f[s] = new Array(d)), p, n)
                        for (var b, m, _ = 0, x = 0; _ < v; ++_)
                            if ((b = g[_])) {
                                for (
                                    _ >= x && (x = _ + 1);
                                    !(m = y[x]) && ++x < v;

                                );
                                b._next = m || null
                            }
                    }
                    return ((a = new nn(a, i))._enter = c), (a._exit = f), a
                },
                enter: function() {
                    return new nn(
                        this._enter || this._groups.map(Nt),
                        this._parents,
                    )
                },
                exit: function() {
                    return new nn(
                        this._exit || this._groups.map(Nt),
                        this._parents,
                    )
                },
                merge: function(t) {
                    for (
                        var n = this._groups,
                            e = t._groups,
                            r = n.length,
                            i = e.length,
                            o = Math.min(r, i),
                            u = new Array(r),
                            a = 0;
                        a < o;
                        ++a
                    )
                        for (
                            var c,
                                f = n[a],
                                s = e[a],
                                l = f.length,
                                h = (u[a] = new Array(l)),
                                d = 0;
                            d < l;
                            ++d
                        )
                            (c = f[d] || s[d]) && (h[d] = c)
                    for (; a < r; ++a) u[a] = n[a]
                    return new nn(u, this._parents)
                },
                order: function() {
                    for (var t = this._groups, n = -1, e = t.length; ++n < e; )
                        for (
                            var r, i = t[n], o = i.length - 1, u = i[o];
                            --o >= 0;

                        )
                            (r = i[o]) &&
                                (u &&
                                    u !== r.nextSibling &&
                                    u.parentNode.insertBefore(r, u),
                                (u = r))
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
                            o = 0;
                        o < r;
                        ++o
                    ) {
                        for (
                            var u,
                                a = e[o],
                                c = a.length,
                                f = (i[o] = new Array(c)),
                                s = 0;
                            s < c;
                            ++s
                        )
                            (u = a[s]) && (f[s] = u)
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
                        for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
                            var u = r[i]
                            if (u) return u
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
                        for (var i, o = n[e], u = 0, a = o.length; u < a; ++u)
                            (i = o[u]) && t.call(i, i.__data__, u, o)
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
                        : Pt(this.node(), t)
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
                    var e = Ot(t + '')
                    if (arguments.length < 2) {
                        for (
                            var r = It(this.node()), i = -1, o = e.length;
                            ++i < o;

                        )
                            if (!r.contains(e[i])) return !1
                        return !0
                    }
                    return this.each(
                        ('function' == typeof n
                            ? function(t, n) {
                                  return function() {
                                      ;(n.apply(this, arguments) ? Ft : Lt)(
                                          this,
                                          t,
                                      )
                                  }
                              }
                            : n
                            ? function(t) {
                                  return function() {
                                      Ft(this, t)
                                  }
                              }
                            : function(t) {
                                  return function() {
                                      Lt(this, t)
                                  }
                              })(e, n),
                    )
                },
                text: function(t) {
                    return arguments.length
                        ? this.each(
                              null == t
                                  ? zt
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
                                  ? qt
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
                    return this.each(Ut)
                },
                lower: function() {
                    return this.each(Bt)
                },
                append: function(t) {
                    var n = 'function' == typeof t ? t : gt(t)
                    return this.select(function() {
                        return this.appendChild(n.apply(this, arguments))
                    })
                },
                insert: function(t, n) {
                    var e = 'function' == typeof t ? t : gt(t),
                        r = null == n ? Yt : 'function' == typeof n ? n : bt(n)
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
                    return this.select(t ? Ht : $t)
                },
                datum: function(t) {
                    return arguments.length
                        ? this.property('__data__', t)
                        : this.node().__data__
                },
                on: function(t, n, e) {
                    var r,
                        i,
                        o = (function(t) {
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
                        u = o.length
                    if (!(arguments.length < 2)) {
                        for (
                            a = n ? Kt : Zt, null == e && (e = !1), r = 0;
                            r < u;
                            ++r
                        )
                            this.each(a(o[r], n, e))
                        return this
                    }
                    var a = this.node().__on
                    if (a)
                        for (var c, f = 0, s = a.length; f < s; ++f)
                            for (r = 0, c = a[f]; r < u; ++r)
                                if (
                                    (i = o[r]).type === c.type &&
                                    i.name === c.name
                                )
                                    return c.value
                },
                dispatch: function(t, n) {
                    return this.each(
                        ('function' == typeof n
                            ? function(t, n) {
                                  return function() {
                                      return Jt(
                                          this,
                                          t,
                                          n.apply(this, arguments),
                                      )
                                  }
                              }
                            : function(t, n) {
                                  return function() {
                                      return Jt(this, t, n)
                                  }
                              })(t, n),
                    )
                },
            }
            var rn = en,
                on = function(t) {
                    return 'string' == typeof t
                        ? new nn(
                              [[document.querySelector(t)]],
                              [document.documentElement],
                          )
                        : new nn([[t]], tn)
                },
                un = function(t) {
                    return on(gt(t).call(document.documentElement))
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
                    for (var t, n = Xt; (t = n.sourceEvent); ) n = t
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
                    for (var r, i = 0, o = n ? n.length : 0; i < o; ++i)
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
            function gn() {
                Xt.stopImmediatePropagation()
            }
            var yn = function() {
                    Xt.preventDefault(), Xt.stopImmediatePropagation()
                },
                bn = function(t) {
                    var n = t.document.documentElement,
                        e = on(t).on('dragstart.drag', yn, !0)
                    'onselectstart' in n
                        ? e.on('selectstart.drag', yn, !0)
                        : ((n.__noselect = n.style.MozUserSelect),
                          (n.style.MozUserSelect = 'none'))
                }
            function mn(t, n) {
                var e = t.document.documentElement,
                    r = on(t).on('dragstart.drag', null)
                n &&
                    (r.on('click.drag', yn, !0),
                    setTimeout(function() {
                        r.on('click.drag', null)
                    }, 0)),
                    'onselectstart' in e
                        ? r.on('selectstart.drag', null)
                        : ((e.style.MozUserSelect = e.__noselect),
                          delete e.__noselect)
            }
            var _n = function(t) {
                return function() {
                    return t
                }
            }
            function xn(t, n, e, r, i, o, u, a, c, f) {
                ;(this.target = t),
                    (this.type = n),
                    (this.subject = e),
                    (this.identifier = r),
                    (this.active = i),
                    (this.x = o),
                    (this.y = u),
                    (this.dx = a),
                    (this.dy = c),
                    (this._ = f)
            }
            function wn() {
                return !Xt.button
            }
            function Mn() {
                return this.parentNode
            }
            function En(t) {
                return null == t ? { x: Xt.x, y: Xt.y } : t
            }
            function Nn() {
                return 'ontouchstart' in this
            }
            xn.prototype.on = function() {
                var t = this._.on.apply(this._, arguments)
                return t === this._ ? this : t
            }
            var An = function() {
                    var t,
                        n,
                        e,
                        r,
                        i = wn,
                        o = Mn,
                        u = En,
                        a = Nn,
                        c = {},
                        f = ht('start', 'drag', 'end'),
                        s = 0,
                        l = 0
                    function h(t) {
                        t.on('mousedown.drag', d)
                            .filter(a)
                            .on('touchstart.drag', g)
                            .on('touchmove.drag', y)
                            .on('touchend.drag touchcancel.drag', b)
                            .style('touch-action', 'none')
                            .style(
                                '-webkit-tap-highlight-color',
                                'rgba(0,0,0,0)',
                            )
                    }
                    function d() {
                        if (!r && i.apply(this, arguments)) {
                            var u = m(
                                'mouse',
                                o.apply(this, arguments),
                                hn,
                                this,
                                arguments,
                            )
                            u &&
                                (on(Xt.view)
                                    .on('mousemove.drag', p, !0)
                                    .on('mouseup.drag', v, !0),
                                bn(Xt.view),
                                gn(),
                                (e = !1),
                                (t = Xt.clientX),
                                (n = Xt.clientY),
                                u('start'))
                        }
                    }
                    function p() {
                        if ((yn(), !e)) {
                            var r = Xt.clientX - t,
                                i = Xt.clientY - n
                            e = r * r + i * i > l
                        }
                        c.mouse('drag')
                    }
                    function v() {
                        on(Xt.view).on('mousemove.drag mouseup.drag', null),
                            mn(Xt.view, e),
                            yn(),
                            c.mouse('end')
                    }
                    function g() {
                        if (i.apply(this, arguments)) {
                            var t,
                                n,
                                e = Xt.changedTouches,
                                r = o.apply(this, arguments),
                                u = e.length
                            for (t = 0; t < u; ++t)
                                (n = m(
                                    e[t].identifier,
                                    r,
                                    pn,
                                    this,
                                    arguments,
                                )) && (gn(), n('start'))
                        }
                    }
                    function y() {
                        var t,
                            n,
                            e = Xt.changedTouches,
                            r = e.length
                        for (t = 0; t < r; ++t)
                            (n = c[e[t].identifier]) && (yn(), n('drag'))
                    }
                    function b() {
                        var t,
                            n,
                            e = Xt.changedTouches,
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
                            (n = c[e[t].identifier]) && (gn(), n('end'))
                    }
                    function m(t, n, e, r, i) {
                        var o,
                            a,
                            l,
                            d = e(n, t),
                            p = f.copy()
                        if (
                            Qt(
                                new xn(
                                    h,
                                    'beforestart',
                                    o,
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
                                            (Xt.subject = o = u.apply(r, i)) &&
                                        ((a = o.x - d[0] || 0),
                                        (l = o.y - d[1] || 0),
                                        !0)
                                    )
                                },
                            )
                        )
                            return function u(f) {
                                var v,
                                    g = d
                                switch (f) {
                                    case 'start':
                                        ;(c[t] = u), (v = s++)
                                        break
                                    case 'end':
                                        delete c[t], --s
                                    case 'drag':
                                        ;(d = e(n, t)), (v = s)
                                }
                                Qt(
                                    new xn(
                                        h,
                                        f,
                                        o,
                                        t,
                                        v,
                                        d[0] + a,
                                        d[1] + l,
                                        d[0] - g[0],
                                        d[1] - g[1],
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
                                ? ((i = 'function' == typeof t ? t : _n(!!t)),
                                  h)
                                : i
                        }),
                        (h.container = function(t) {
                            return arguments.length
                                ? ((o = 'function' == typeof t ? t : _n(t)), h)
                                : o
                        }),
                        (h.subject = function(t) {
                            return arguments.length
                                ? ((u = 'function' == typeof t ? t : _n(t)), h)
                                : u
                        }),
                        (h.touchable = function(t) {
                            return arguments.length
                                ? ((a = 'function' == typeof t ? t : _n(!!t)),
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
                Tn = function(t, n, e) {
                    ;(t.prototype = n.prototype = e), (e.constructor = t)
                }
            function Sn(t, n) {
                var e = Object.create(t.prototype)
                for (var r in n) e[r] = n[r]
                return e
            }
            function kn() {}
            var Cn = '\\s*([+-]?\\d+)\\s*',
                Dn = '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*',
                Pn = '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
                On = /^#([0-9a-f]{3})$/,
                In = /^#([0-9a-f]{6})$/,
                Rn = new RegExp('^rgb\\(' + [Cn, Cn, Cn] + '\\)$'),
                Fn = new RegExp('^rgb\\(' + [Pn, Pn, Pn] + '\\)$'),
                Ln = new RegExp('^rgba\\(' + [Cn, Cn, Cn, Dn] + '\\)$'),
                zn = new RegExp('^rgba\\(' + [Pn, Pn, Pn, Dn] + '\\)$'),
                qn = new RegExp('^hsl\\(' + [Dn, Pn, Pn] + '\\)$'),
                Un = new RegExp('^hsla\\(' + [Dn, Pn, Pn, Dn] + '\\)$'),
                Bn = {
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
            function Yn(t) {
                var n
                return (
                    (t = (t + '').trim().toLowerCase()),
                    (n = On.exec(t))
                        ? new Xn(
                              (((n = parseInt(n[1], 16)) >> 8) & 15) |
                                  ((n >> 4) & 240),
                              ((n >> 4) & 15) | (240 & n),
                              ((15 & n) << 4) | (15 & n),
                              1,
                          )
                        : (n = In.exec(t))
                        ? jn(parseInt(n[1], 16))
                        : (n = Rn.exec(t))
                        ? new Xn(n[1], n[2], n[3], 1)
                        : (n = Fn.exec(t))
                        ? new Xn(
                              (255 * n[1]) / 100,
                              (255 * n[2]) / 100,
                              (255 * n[3]) / 100,
                              1,
                          )
                        : (n = Ln.exec(t))
                        ? $n(n[1], n[2], n[3], n[4])
                        : (n = zn.exec(t))
                        ? $n(
                              (255 * n[1]) / 100,
                              (255 * n[2]) / 100,
                              (255 * n[3]) / 100,
                              n[4],
                          )
                        : (n = qn.exec(t))
                        ? Wn(n[1], n[2] / 100, n[3] / 100, 1)
                        : (n = Un.exec(t))
                        ? Wn(n[1], n[2] / 100, n[3] / 100, n[4])
                        : Bn.hasOwnProperty(t)
                        ? jn(Bn[t])
                        : 'transparent' === t
                        ? new Xn(NaN, NaN, NaN, 0)
                        : null
                )
            }
            function jn(t) {
                return new Xn((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1)
            }
            function $n(t, n, e, r) {
                return r <= 0 && (t = n = e = NaN), new Xn(t, n, e, r)
            }
            function Hn(t) {
                return (
                    t instanceof kn || (t = Yn(t)),
                    t ? new Xn((t = t.rgb()).r, t.g, t.b, t.opacity) : new Xn()
                )
            }
            function Gn(t, n, e, r) {
                return 1 === arguments.length
                    ? Hn(t)
                    : new Xn(t, n, e, null == r ? 1 : r)
            }
            function Xn(t, n, e, r) {
                ;(this.r = +t),
                    (this.g = +n),
                    (this.b = +e),
                    (this.opacity = +r)
            }
            function Vn(t) {
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
                    new Kn(t, n, e, r)
                )
            }
            function Zn(t, n, e, r) {
                return 1 === arguments.length
                    ? (function(t) {
                          if (t instanceof Kn)
                              return new Kn(t.h, t.s, t.l, t.opacity)
                          if ((t instanceof kn || (t = Yn(t)), !t))
                              return new Kn()
                          if (t instanceof Kn) return t
                          var n = (t = t.rgb()).r / 255,
                              e = t.g / 255,
                              r = t.b / 255,
                              i = Math.min(n, e, r),
                              o = Math.max(n, e, r),
                              u = NaN,
                              a = o - i,
                              c = (o + i) / 2
                          return (
                              a
                                  ? ((u =
                                        n === o
                                            ? (e - r) / a + 6 * (e < r)
                                            : e === o
                                            ? (r - n) / a + 2
                                            : (n - e) / a + 4),
                                    (a /= c < 0.5 ? o + i : 2 - o - i),
                                    (u *= 60))
                                  : (a = c > 0 && c < 1 ? 0 : u),
                              new Kn(u, a, c, t.opacity)
                          )
                      })(t)
                    : new Kn(t, n, e, null == r ? 1 : r)
            }
            function Kn(t, n, e, r) {
                ;(this.h = +t),
                    (this.s = +n),
                    (this.l = +e),
                    (this.opacity = +r)
            }
            function Qn(t, n, e) {
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
            Tn(kn, Yn, {
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
                Tn(
                    Xn,
                    Gn,
                    Sn(kn, {
                        brighter: function(t) {
                            return (
                                (t =
                                    null == t ? 1 / 0.7 : Math.pow(1 / 0.7, t)),
                                new Xn(
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
                                new Xn(
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
                            return '#' + Vn(this.r) + Vn(this.g) + Vn(this.b)
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
                Tn(
                    Kn,
                    Zn,
                    Sn(kn, {
                        brighter: function(t) {
                            return (
                                (t =
                                    null == t ? 1 / 0.7 : Math.pow(1 / 0.7, t)),
                                new Kn(this.h, this.s, this.l * t, this.opacity)
                            )
                        },
                        darker: function(t) {
                            return (
                                (t = null == t ? 0.7 : Math.pow(0.7, t)),
                                new Kn(this.h, this.s, this.l * t, this.opacity)
                            )
                        },
                        rgb: function() {
                            var t = (this.h % 360) + 360 * (this.h < 0),
                                n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                                e = this.l,
                                r = e + (e < 0.5 ? e : 1 - e) * n,
                                i = 2 * e - r
                            return new Xn(
                                Qn(t >= 240 ? t - 240 : t + 120, i, r),
                                Qn(t, i, r),
                                Qn(t < 120 ? t + 240 : t - 120, i, r),
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
            var Jn = Math.PI / 180,
                te = 180 / Math.PI,
                ne = 0.96422,
                ee = 1,
                re = 0.82521,
                ie = 4 / 29,
                oe = 6 / 29,
                ue = 3 * oe * oe,
                ae = oe * oe * oe
            function ce(t) {
                if (t instanceof le) return new le(t.l, t.a, t.b, t.opacity)
                if (t instanceof me) {
                    if (isNaN(t.h)) return new le(t.l, 0, 0, t.opacity)
                    var n = t.h * Jn
                    return new le(
                        t.l,
                        Math.cos(n) * t.c,
                        Math.sin(n) * t.c,
                        t.opacity,
                    )
                }
                t instanceof Xn || (t = Hn(t))
                var e,
                    r,
                    i = ve(t.r),
                    o = ve(t.g),
                    u = ve(t.b),
                    a = he((0.2225045 * i + 0.7168786 * o + 0.0606169 * u) / ee)
                return (
                    i === o && o === u
                        ? (e = r = a)
                        : ((e = he(
                              (0.4360747 * i + 0.3850649 * o + 0.1430804 * u) /
                                  ne,
                          )),
                          (r = he(
                              (0.0139322 * i + 0.0971045 * o + 0.7141733 * u) /
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
                return t > ae ? Math.pow(t, 1 / 3) : t / ue + ie
            }
            function de(t) {
                return t > oe ? t * t * t : ue * (t - ie)
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
            function ge(t) {
                if (t instanceof me) return new me(t.h, t.c, t.l, t.opacity)
                if ((t instanceof le || (t = ce(t)), 0 === t.a && 0 === t.b))
                    return new me(NaN, 0, t.l, t.opacity)
                var n = Math.atan2(t.b, t.a) * te
                return new me(
                    n < 0 ? n + 360 : n,
                    Math.sqrt(t.a * t.a + t.b * t.b),
                    t.l,
                    t.opacity,
                )
            }
            function ye(t, n, e, r) {
                return 1 === arguments.length
                    ? ge(t)
                    : new me(e, n, t, null == r ? 1 : r)
            }
            function be(t, n, e, r) {
                return 1 === arguments.length
                    ? ge(t)
                    : new me(t, n, e, null == r ? 1 : r)
            }
            function me(t, n, e, r) {
                ;(this.h = +t),
                    (this.c = +n),
                    (this.l = +e),
                    (this.opacity = +r)
            }
            Tn(
                le,
                se,
                Sn(kn, {
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
                        return new Xn(
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
                Tn(
                    me,
                    be,
                    Sn(kn, {
                        brighter: function(t) {
                            return new me(
                                this.h,
                                this.c,
                                this.l + 18 * (null == t ? 1 : t),
                                this.opacity,
                            )
                        },
                        darker: function(t) {
                            return new me(
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
            var _e = -0.29227,
                xe = -0.90649,
                we = 1.97294,
                Me = we * xe,
                Ee = 1.78277 * we,
                Ne = 1.78277 * _e - -0.14861 * xe
            function Ae(t, n, e, r) {
                return 1 === arguments.length
                    ? (function(t) {
                          if (t instanceof Te)
                              return new Te(t.h, t.s, t.l, t.opacity)
                          t instanceof Xn || (t = Hn(t))
                          var n = t.r / 255,
                              e = t.g / 255,
                              r = t.b / 255,
                              i = (Ne * r + Me * n - Ee * e) / (Ne + Me - Ee),
                              o = r - i,
                              u = (we * (e - i) - _e * o) / xe,
                              a = Math.sqrt(u * u + o * o) / (we * i * (1 - i)),
                              c = a ? Math.atan2(u, o) * te - 120 : NaN
                          return new Te(c < 0 ? c + 360 : c, a, i, t.opacity)
                      })(t)
                    : new Te(t, n, e, null == r ? 1 : r)
            }
            function Te(t, n, e, r) {
                ;(this.h = +t),
                    (this.s = +n),
                    (this.l = +e),
                    (this.opacity = +r)
            }
            function Se(t, n, e, r, i) {
                var o = t * t,
                    u = o * t
                return (
                    ((1 - 3 * t + 3 * o - u) * n +
                        (4 - 6 * o + 3 * u) * e +
                        (1 + 3 * t + 3 * o - 3 * u) * r +
                        u * i) /
                    6
                )
            }
            Tn(
                Te,
                Ae,
                Sn(kn, {
                    brighter: function(t) {
                        return (
                            (t = null == t ? 1 / 0.7 : Math.pow(1 / 0.7, t)),
                            new Te(this.h, this.s, this.l * t, this.opacity)
                        )
                    },
                    darker: function(t) {
                        return (
                            (t = null == t ? 0.7 : Math.pow(0.7, t)),
                            new Te(this.h, this.s, this.l * t, this.opacity)
                        )
                    },
                    rgb: function() {
                        var t = isNaN(this.h) ? 0 : (this.h + 120) * Jn,
                            n = +this.l,
                            e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
                            r = Math.cos(t),
                            i = Math.sin(t)
                        return new Xn(
                            255 * (n + e * (-0.14861 * r + 1.78277 * i)),
                            255 * (n + e * (_e * r + xe * i)),
                            255 * (n + e * (we * r)),
                            this.opacity,
                        )
                    },
                }),
            )
            var ke = function(t) {
                    var n = t.length - 1
                    return function(e) {
                        var r =
                                e <= 0
                                    ? (e = 0)
                                    : e >= 1
                                    ? ((e = 1), n - 1)
                                    : Math.floor(e * n),
                            i = t[r],
                            o = t[r + 1],
                            u = r > 0 ? t[r - 1] : 2 * i - o,
                            a = r < n - 1 ? t[r + 2] : 2 * o - i
                        return Se((e - r / n) * n, u, i, o, a)
                    }
                },
                Ce = function(t) {
                    var n = t.length
                    return function(e) {
                        var r = Math.floor(((e %= 1) < 0 ? ++e : e) * n),
                            i = t[(r + n - 1) % n],
                            o = t[r % n],
                            u = t[(r + 1) % n],
                            a = t[(r + 2) % n]
                        return Se((e - r / n) * n, i, o, u, a)
                    }
                },
                De = function(t) {
                    return function() {
                        return t
                    }
                }
            function Pe(t, n) {
                return function(e) {
                    return t + e * n
                }
            }
            function Oe(t, n) {
                var e = n - t
                return e
                    ? Pe(
                          t,
                          e > 180 || e < -180
                              ? e - 360 * Math.round(e / 360)
                              : e,
                      )
                    : De(isNaN(t) ? n : t)
            }
            function Ie(t) {
                return 1 == (t = +t)
                    ? Re
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
                              : De(isNaN(n) ? e : n)
                      }
            }
            function Re(t, n) {
                var e = n - t
                return e ? Pe(t, e) : De(isNaN(t) ? n : t)
            }
            var Fe = (function t(n) {
                var e = Ie(n)
                function r(t, n) {
                    var r = e((t = Gn(t)).r, (n = Gn(n)).r),
                        i = e(t.g, n.g),
                        o = e(t.b, n.b),
                        u = Re(t.opacity, n.opacity)
                    return function(n) {
                        return (
                            (t.r = r(n)),
                            (t.g = i(n)),
                            (t.b = o(n)),
                            (t.opacity = u(n)),
                            t + ''
                        )
                    }
                }
                return (r.gamma = t), r
            })(1)
            function Le(t) {
                return function(n) {
                    var e,
                        r,
                        i = n.length,
                        o = new Array(i),
                        u = new Array(i),
                        a = new Array(i)
                    for (e = 0; e < i; ++e)
                        (r = Gn(n[e])),
                            (o[e] = r.r || 0),
                            (u[e] = r.g || 0),
                            (a[e] = r.b || 0)
                    return (
                        (o = t(o)),
                        (u = t(u)),
                        (a = t(a)),
                        (r.opacity = 1),
                        function(t) {
                            return (
                                (r.r = o(t)), (r.g = u(t)), (r.b = a(t)), r + ''
                            )
                        }
                    )
                }
            }
            var ze = Le(ke),
                qe = Le(Ce),
                Ue = function(t, n) {
                    var e,
                        r = n ? n.length : 0,
                        i = t ? Math.min(r, t.length) : 0,
                        o = new Array(i),
                        u = new Array(r)
                    for (e = 0; e < i; ++e) o[e] = Ke(t[e], n[e])
                    for (; e < r; ++e) u[e] = n[e]
                    return function(t) {
                        for (e = 0; e < i; ++e) u[e] = o[e](t)
                        return u
                    }
                },
                Be = function(t, n) {
                    var e = new Date()
                    return (
                        (n -= t = +t),
                        function(r) {
                            return e.setTime(t + n * r), e
                        }
                    )
                },
                Ye = function(t, n) {
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
                        e in t ? (r[e] = Ke(t[e], n[e])) : (i[e] = n[e])
                    return function(t) {
                        for (e in r) i[e] = r[e](t)
                        return i
                    }
                },
                $e = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
                He = new RegExp($e.source, 'g')
            var Ge,
                Xe,
                Ve,
                We,
                Ze = function(t, n) {
                    var e,
                        r,
                        i,
                        o = ($e.lastIndex = He.lastIndex = 0),
                        u = -1,
                        a = [],
                        c = []
                    for (
                        t += '', n += '';
                        (e = $e.exec(t)) && (r = He.exec(n));

                    )
                        (i = r.index) > o &&
                            ((i = n.slice(o, i)),
                            a[u] ? (a[u] += i) : (a[++u] = i)),
                            (e = e[0]) === (r = r[0])
                                ? a[u]
                                    ? (a[u] += r)
                                    : (a[++u] = r)
                                : ((a[++u] = null),
                                  c.push({ i: u, x: Ye(e, r) })),
                            (o = He.lastIndex)
                    return (
                        o < n.length &&
                            ((i = n.slice(o)),
                            a[u] ? (a[u] += i) : (a[++u] = i)),
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
                Ke = function(t, n) {
                    var e,
                        r = typeof n
                    return null == n || 'boolean' === r
                        ? De(n)
                        : ('number' === r
                              ? Ye
                              : 'string' === r
                              ? (e = Yn(n))
                                  ? ((n = e), Fe)
                                  : Ze
                              : n instanceof Yn
                              ? Fe
                              : n instanceof Date
                              ? Be
                              : Array.isArray(n)
                              ? Ue
                              : ('function' != typeof n.valueOf &&
                                    'function' != typeof n.toString) ||
                                isNaN(n)
                              ? je
                              : Ye)(t, n)
                },
                Qe = function(t) {
                    var n = t.length
                    return function(e) {
                        return t[
                            Math.max(0, Math.min(n - 1, Math.floor(e * n)))
                        ]
                    }
                },
                Je = function(t, n) {
                    var e = Oe(+t, +n)
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
                rr = function(t, n, e, r, i, o) {
                    var u, a, c
                    return (
                        (u = Math.sqrt(t * t + n * n)) && ((t /= u), (n /= u)),
                        (c = t * e + n * r) && ((e -= t * c), (r -= n * c)),
                        (a = Math.sqrt(e * e + r * r)) &&
                            ((e /= a), (r /= a), (c /= a)),
                        t * r < n * e &&
                            ((t = -t), (n = -n), (c = -c), (u = -u)),
                        {
                            translateX: i,
                            translateY: o,
                            rotate: Math.atan2(n, t) * nr,
                            skewX: Math.atan(c) * nr,
                            scaleX: u,
                            scaleY: a,
                        }
                    )
                }
            function ir(t, n, e, r) {
                function i(t) {
                    return t.length ? t.pop() + ' ' : ''
                }
                return function(o, u) {
                    var a = [],
                        c = []
                    return (
                        (o = t(o)),
                        (u = t(u)),
                        (function(t, r, i, o, u, a) {
                            if (t !== i || r !== o) {
                                var c = u.push('translate(', null, n, null, e)
                                a.push(
                                    { i: c - 4, x: Ye(t, i) },
                                    { i: c - 2, x: Ye(r, o) },
                                )
                            } else
                                (i || o) && u.push('translate(' + i + n + o + e)
                        })(
                            o.translateX,
                            o.translateY,
                            u.translateX,
                            u.translateY,
                            a,
                            c,
                        ),
                        (function(t, n, e, o) {
                            t !== n
                                ? (t - n > 180
                                      ? (n += 360)
                                      : n - t > 180 && (t += 360),
                                  o.push({
                                      i: e.push(i(e) + 'rotate(', null, r) - 2,
                                      x: Ye(t, n),
                                  }))
                                : n && e.push(i(e) + 'rotate(' + n + r)
                        })(o.rotate, u.rotate, a, c),
                        (function(t, n, e, o) {
                            t !== n
                                ? o.push({
                                      i: e.push(i(e) + 'skewX(', null, r) - 2,
                                      x: Ye(t, n),
                                  })
                                : n && e.push(i(e) + 'skewX(' + n + r)
                        })(o.skewX, u.skewX, a, c),
                        (function(t, n, e, r, o, u) {
                            if (t !== e || n !== r) {
                                var a = o.push(
                                    i(o) + 'scale(',
                                    null,
                                    ',',
                                    null,
                                    ')',
                                )
                                u.push(
                                    { i: a - 4, x: Ye(t, e) },
                                    { i: a - 2, x: Ye(n, r) },
                                )
                            } else
                                (1 === e && 1 === r) ||
                                    o.push(i(o) + 'scale(' + e + ',' + r + ')')
                        })(o.scaleX, o.scaleY, u.scaleX, u.scaleY, a, c),
                        (o = u = null),
                        function(t) {
                            for (var n, e = -1, r = c.length; ++e < r; )
                                a[(n = c[e]).i] = n.x(t)
                            return a.join('')
                        }
                    )
                }
            }
            var or = ir(
                    function(t) {
                        return 'none' === t
                            ? er
                            : (Ge ||
                                  ((Ge = document.createElement('DIV')),
                                  (Xe = document.documentElement),
                                  (Ve = document.defaultView)),
                              (Ge.style.transform = t),
                              (t = Ve.getComputedStyle(
                                  Xe.appendChild(Ge),
                                  null,
                              ).getPropertyValue('transform')),
                              Xe.removeChild(Ge),
                              (t = t.slice(7, -1).split(',')),
                              rr(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]))
                    },
                    'px, ',
                    'px)',
                    'deg)',
                ),
                ur = ir(
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
                    o = t[1],
                    u = t[2],
                    a = n[0],
                    c = n[1],
                    f = n[2],
                    s = a - i,
                    l = c - o,
                    h = s * s + l * l
                if (h < 1e-12)
                    (r = Math.log(f / u) / ar),
                        (e = function(t) {
                            return [
                                i + t * s,
                                o + t * l,
                                u * Math.exp(ar * t * r),
                            ]
                        })
                else {
                    var d = Math.sqrt(h),
                        p = (f * f - u * u + 4 * h) / (2 * u * 2 * d),
                        v = (f * f - u * u - 4 * h) / (2 * f * 2 * d),
                        g = Math.log(Math.sqrt(p * p + 1) - p),
                        y = Math.log(Math.sqrt(v * v + 1) - v)
                    ;(r = (y - g) / ar),
                        (e = function(t) {
                            var n,
                                e = t * r,
                                a = cr(g),
                                c =
                                    (u / (2 * d)) *
                                    (a *
                                        ((n = ar * e + g),
                                        ((n = Math.exp(2 * n)) - 1) / (n + 1)) -
                                        (function(t) {
                                            return (
                                                ((t = Math.exp(t)) - 1 / t) / 2
                                            )
                                        })(g))
                            return [
                                i + c * s,
                                o + c * l,
                                (u * a) / cr(ar * e + g),
                            ]
                        })
                }
                return (e.duration = 1e3 * r), e
            }
            function sr(t) {
                return function(n, e) {
                    var r = t((n = Zn(n)).h, (e = Zn(e)).h),
                        i = Re(n.s, e.s),
                        o = Re(n.l, e.l),
                        u = Re(n.opacity, e.opacity)
                    return function(t) {
                        return (
                            (n.h = r(t)),
                            (n.s = i(t)),
                            (n.l = o(t)),
                            (n.opacity = u(t)),
                            n + ''
                        )
                    }
                }
            }
            var lr = sr(Oe),
                hr = sr(Re)
            function dr(t, n) {
                var e = Re((t = se(t)).l, (n = se(n)).l),
                    r = Re(t.a, n.a),
                    i = Re(t.b, n.b),
                    o = Re(t.opacity, n.opacity)
                return function(n) {
                    return (
                        (t.l = e(n)),
                        (t.a = r(n)),
                        (t.b = i(n)),
                        (t.opacity = o(n)),
                        t + ''
                    )
                }
            }
            function pr(t) {
                return function(n, e) {
                    var r = t((n = be(n)).h, (e = be(e)).h),
                        i = Re(n.c, e.c),
                        o = Re(n.l, e.l),
                        u = Re(n.opacity, e.opacity)
                    return function(t) {
                        return (
                            (n.h = r(t)),
                            (n.c = i(t)),
                            (n.l = o(t)),
                            (n.opacity = u(t)),
                            n + ''
                        )
                    }
                }
            }
            var vr = pr(Oe),
                gr = pr(Re)
            function yr(t) {
                return (function n(e) {
                    function r(n, r) {
                        var i = t((n = Ae(n)).h, (r = Ae(r)).h),
                            o = Re(n.s, r.s),
                            u = Re(n.l, r.l),
                            a = Re(n.opacity, r.opacity)
                        return function(t) {
                            return (
                                (n.h = i(t)),
                                (n.s = o(t)),
                                (n.l = u(Math.pow(t, e))),
                                (n.opacity = a(t)),
                                n + ''
                            )
                        }
                    }
                    return (e = +e), (r.gamma = n), r
                })(1)
            }
            var br = yr(Oe),
                mr = yr(Re)
            function _r(t, n) {
                for (
                    var e = 0,
                        r = n.length - 1,
                        i = n[0],
                        o = new Array(r < 0 ? 0 : r);
                    e < r;

                )
                    o[e] = t(i, (i = n[++e]))
                return function(t) {
                    var n = Math.max(0, Math.min(r - 1, Math.floor((t *= r))))
                    return o[n](t - n)
                }
            }
            var xr,
                wr,
                Mr = function(t, n) {
                    for (var e = new Array(n), r = 0; r < n; ++r)
                        e[r] = t(r / (n - 1))
                    return e
                },
                Er = 0,
                Nr = 0,
                Ar = 0,
                Tr = 1e3,
                Sr = 0,
                kr = 0,
                Cr = 0,
                Dr =
                    'object' == typeof performance && performance.now
                        ? performance
                        : Date,
                Pr =
                    'object' == typeof window && window.requestAnimationFrame
                        ? window.requestAnimationFrame.bind(window)
                        : function(t) {
                              setTimeout(t, 17)
                          }
            function Or() {
                return kr || (Pr(Ir), (kr = Dr.now() + Cr))
            }
            function Ir() {
                kr = 0
            }
            function Rr() {
                this._call = this._time = this._next = null
            }
            function Fr(t, n, e) {
                var r = new Rr()
                return r.restart(t, n, e), r
            }
            function Lr() {
                Or(), ++Er
                for (var t, n = xr; n; )
                    (t = kr - n._time) >= 0 && n._call.call(null, t),
                        (n = n._next)
                --Er
            }
            function zr() {
                ;(kr = (Sr = Dr.now()) + Cr), (Er = Nr = 0)
                try {
                    Lr()
                } finally {
                    ;(Er = 0),
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
                            ;(wr = t), Ur(r)
                        })(),
                        (kr = 0)
                }
            }
            function qr() {
                var t = Dr.now(),
                    n = t - Sr
                n > Tr && ((Cr -= n), (Sr = t))
            }
            function Ur(t) {
                Er ||
                    (Nr && (Nr = clearTimeout(Nr)),
                    t - kr > 24
                        ? (t < 1 / 0 &&
                              (Nr = setTimeout(zr, t - Dr.now() - Cr)),
                          Ar && (Ar = clearInterval(Ar)))
                        : (Ar || ((Sr = Dr.now()), (Ar = setInterval(qr, Tr))),
                          (Er = 1),
                          Pr(zr)))
            }
            Rr.prototype = Fr.prototype = {
                constructor: Rr,
                restart: function(t, n, e) {
                    if ('function' != typeof t)
                        throw new TypeError('callback is not a function')
                    ;(e = (null == e ? Or() : +e) + (null == n ? 0 : +n)),
                        this._next ||
                            wr === this ||
                            (wr ? (wr._next = this) : (xr = this), (wr = this)),
                        (this._call = t),
                        (this._time = e),
                        Ur()
                },
                stop: function() {
                    this._call &&
                        ((this._call = null), (this._time = 1 / 0), Ur())
                },
            }
            var Br = function(t, n, e) {
                    var r = new Rr()
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
                Yr = function(t, n, e) {
                    var r = new Rr(),
                        i = n
                    return null == n
                        ? (r.restart(t, n, e), r)
                        : ((n = +n),
                          (e = null == e ? Or() : +e),
                          r.restart(
                              function o(u) {
                                  ;(u += i), r.restart(o, (i += n), e), t(u)
                              },
                              n,
                              e,
                          ),
                          r)
                },
                jr = ht('start', 'end', 'interrupt'),
                $r = [],
                Hr = 0,
                Gr = 1,
                Xr = 2,
                Vr = 3,
                Wr = 4,
                Zr = 5,
                Kr = 6,
                Qr = function(t, n, e, r, i, o) {
                    var u = t.__transition
                    if (u) {
                        if (e in u) return
                    } else t.__transition = {}
                    !(function(t, n, e) {
                        var r,
                            i = t.__transition
                        function o(c) {
                            var f, s, l, h
                            if (e.state !== Gr) return a()
                            for (f in i)
                                if ((h = i[f]).name === e.name) {
                                    if (h.state === Vr) return Br(o)
                                    h.state === Wr
                                        ? ((h.state = Kr),
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
                                          ((h.state = Kr),
                                          h.timer.stop(),
                                          delete i[f])
                                }
                            if (
                                (Br(function() {
                                    e.state === Vr &&
                                        ((e.state = Wr),
                                        e.timer.restart(u, e.delay, e.time),
                                        u(c))
                                }),
                                (e.state = Xr),
                                e.on.call(
                                    'start',
                                    t,
                                    t.__data__,
                                    e.index,
                                    e.group,
                                ),
                                e.state === Xr)
                            ) {
                                for (
                                    e.state = Vr,
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
                        function u(n) {
                            for (
                                var i =
                                        n < e.duration
                                            ? e.ease.call(null, n / e.duration)
                                            : (e.timer.restart(a),
                                              (e.state = Zr),
                                              1),
                                    o = -1,
                                    u = r.length;
                                ++o < u;

                            )
                                r[o].call(null, i)
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
                            for (var r in ((e.state = Kr),
                            e.timer.stop(),
                            delete i[n],
                            i))
                                return
                            delete t.__transition
                        }
                        ;(i[n] = e),
                            (e.timer = Fr(
                                function(t) {
                                    ;(e.state = Gr),
                                        e.timer.restart(o, e.delay, e.time),
                                        e.delay <= t && o(t - e.delay)
                                },
                                0,
                                e.time,
                            ))
                    })(t, e, {
                        name: n,
                        index: r,
                        group: i,
                        on: jr,
                        tween: $r,
                        time: o.time,
                        delay: o.delay,
                        duration: o.duration,
                        ease: o.ease,
                        timer: null,
                        state: Hr,
                    })
                }
            function Jr(t, n) {
                var e = ni(t, n)
                if (e.state > Hr) throw new Error('too late; already scheduled')
                return e
            }
            function ti(t, n) {
                var e = ni(t, n)
                if (e.state > Xr) throw new Error('too late; already started')
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
                    o = t.__transition,
                    u = !0
                if (o) {
                    for (i in ((n = null == n ? null : n + ''), o))
                        (e = o[i]).name === n
                            ? ((r = e.state > Xr && e.state < Zr),
                              (e.state = Kr),
                              e.timer.stop(),
                              r &&
                                  e.on.call(
                                      'interrupt',
                                      t,
                                      t.__data__,
                                      e.index,
                                      e.group,
                                  ),
                              delete o[i])
                            : (u = !1)
                    u && delete t.__transition
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
                    ? Ye
                    : n instanceof Yn
                    ? Fe
                    : (e = Yn(n))
                    ? ((n = e), Fe)
                    : Ze)(t, n)
            }
            var oi = rn.prototype.constructor
            var ui = 0
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
                return ++ui
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
            function gi(t) {
                return --t * t * t + 1
            }
            function yi(t) {
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
                            o = new Array(i),
                            u = 0;
                        u < i;
                        ++u
                    )
                        for (
                            var a,
                                c,
                                f = r[u],
                                s = f.length,
                                l = (o[u] = new Array(s)),
                                h = 0;
                            h < s;
                            ++h
                        )
                            (a = f[h]) &&
                                (c = t.call(a, a.__data__, h, f)) &&
                                ('__data__' in a && (c.__data__ = a.__data__),
                                (l[h] = c),
                                Qr(l[h], n, e, h, l, ni(a, e)))
                    return new ai(o, this._parents, n, e)
                },
                selectAll: function(t) {
                    var n = this._name,
                        e = this._id
                    'function' != typeof t && (t = _t(t))
                    for (
                        var r = this._groups,
                            i = r.length,
                            o = [],
                            u = [],
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
                                        g = d.length;
                                    v < g;
                                    ++v
                                )
                                    (h = d[v]) && Qr(h, n, e, v, d, p)
                                o.push(d), u.push(c)
                            }
                    return new ai(o, u, n, e)
                },
                filter: function(t) {
                    'function' != typeof t && (t = Et(t))
                    for (
                        var n = this._groups,
                            e = n.length,
                            r = new Array(e),
                            i = 0;
                        i < e;
                        ++i
                    )
                        for (
                            var o,
                                u = n[i],
                                a = u.length,
                                c = (r[i] = []),
                                f = 0;
                            f < a;
                            ++f
                        )
                            (o = u[f]) &&
                                t.call(o, o.__data__, f, u) &&
                                c.push(o)
                    return new ai(r, this._parents, this._name, this._id)
                },
                merge: function(t) {
                    if (t._id !== this._id) throw new Error()
                    for (
                        var n = this._groups,
                            e = t._groups,
                            r = n.length,
                            i = e.length,
                            o = Math.min(r, i),
                            u = new Array(r),
                            a = 0;
                        a < o;
                        ++a
                    )
                        for (
                            var c,
                                f = n[a],
                                s = e[a],
                                l = f.length,
                                h = (u[a] = new Array(l)),
                                d = 0;
                            d < l;
                            ++d
                        )
                            (c = f[d] || s[d]) && (h[d] = c)
                    for (; a < r; ++a) u[a] = n[a]
                    return new ai(u, this._parents, this._name, this._id)
                },
                selection: function() {
                    return new oi(this._groups, this._parents)
                },
                transition: function() {
                    for (
                        var t = this._name,
                            n = this._id,
                            e = fi(),
                            r = this._groups,
                            i = r.length,
                            o = 0;
                        o < i;
                        ++o
                    )
                        for (var u, a = r[o], c = a.length, f = 0; f < c; ++f)
                            if ((u = a[f])) {
                                var s = ni(u, n)
                                Qr(u, t, e, f, a, {
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
                                      o = (function(t) {
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
                                          ? Jr
                                          : ti
                                  return function() {
                                      var u = o(this, t),
                                          a = u.on
                                      a !== r && (i = (r = a).copy()).on(n, e),
                                          (u.on = i)
                                  }
                              })(e, t, n),
                          )
                },
                attr: function(t, n) {
                    var e = vt(t),
                        r = 'transform' === e ? ur : ii
                    return this.attrTween(
                        t,
                        'function' == typeof n
                            ? (e.local
                                  ? function(t, n, e) {
                                        var r, i, o
                                        return function() {
                                            var u,
                                                a = e(this)
                                            if (null != a)
                                                return (u = this.getAttributeNS(
                                                    t.space,
                                                    t.local,
                                                )) === a
                                                    ? null
                                                    : u === r && a === i
                                                    ? o
                                                    : (o = n((r = u), (i = a)))
                                            this.removeAttributeNS(
                                                t.space,
                                                t.local,
                                            )
                                        }
                                    }
                                  : function(t, n, e) {
                                        var r, i, o
                                        return function() {
                                            var u,
                                                a = e(this)
                                            if (null != a)
                                                return (u = this.getAttribute(
                                                    t,
                                                )) === a
                                                    ? null
                                                    : u === r && a === i
                                                    ? o
                                                    : (o = n((r = u), (i = a)))
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
                                            var o = this.getAttributeNS(
                                                t.space,
                                                t.local,
                                            )
                                            return o === e
                                                ? null
                                                : o === r
                                                ? i
                                                : (i = n((r = o), e))
                                        }
                                    }
                                  : function(t, n, e) {
                                        var r, i
                                        return function() {
                                            var o = this.getAttribute(t)
                                            return o === e
                                                ? null
                                                : o === r
                                                ? i
                                                : (i = n((r = o), e))
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
                    var r = 'transform' == (t += '') ? or : ii
                    return null == n
                        ? this.styleTween(
                              t,
                              (function(t, n) {
                                  var e, r, i
                                  return function() {
                                      var o = Pt(this, t),
                                          u = (this.style.removeProperty(t),
                                          Pt(this, t))
                                      return o === u
                                          ? null
                                          : o === e && u === r
                                          ? i
                                          : (i = n((e = o), (r = u)))
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
                                        var r, i, o
                                        return function() {
                                            var u = Pt(this, t),
                                                a = e(this)
                                            return (
                                                null == a &&
                                                    (this.style.removeProperty(
                                                        t,
                                                    ),
                                                    (a = Pt(this, t))),
                                                u === a
                                                    ? null
                                                    : u === r && a === i
                                                    ? o
                                                    : (o = n((r = u), (i = a)))
                                            )
                                        }
                                    })(t, r, ri(this, 'style.' + t, n))
                                  : (function(t, n, e) {
                                        var r, i
                                        return function() {
                                            var o = Pt(this, t)
                                            return o === e
                                                ? null
                                                : o === r
                                                ? i
                                                : (i = n((r = o), e))
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
                                o = 0,
                                u = i.length;
                            o < u;
                            ++o
                        )
                            if ((r = i[o]).name === t) return r.value
                        return null
                    }
                    return this.each(
                        (null == n
                            ? function(t, n) {
                                  var e, r
                                  return function() {
                                      var i = ti(this, t),
                                          o = i.tween
                                      if (o !== e)
                                          for (
                                              var u = 0, a = (r = e = o).length;
                                              u < a;
                                              ++u
                                          )
                                              if (r[u].name === n) {
                                                  ;(r = r.slice()).splice(u, 1)
                                                  break
                                              }
                                      i.tween = r
                                  }
                              }
                            : function(t, n, e) {
                                  var r, i
                                  if ('function' != typeof e) throw new Error()
                                  return function() {
                                      var o = ti(this, t),
                                          u = o.tween
                                      if (u !== r) {
                                          i = (r = u).slice()
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
                                      o.tween = i
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
                                            Jr(this, t).delay = +n.apply(
                                                this,
                                                arguments,
                                            )
                                        }
                                    }
                                  : function(t, n) {
                                        return (
                                            (n = +n),
                                            function() {
                                                Jr(this, t).delay = n
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
                mi = (function t(n) {
                    function e(t) {
                        return 1 - Math.pow(1 - t, n)
                    }
                    return (n = +n), (e.exponent = t), e
                })(3),
                _i = (function t(n) {
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
            function Ei(t) {
                return Math.sin(t * wi)
            }
            function Ni(t) {
                return (1 - Math.cos(xi * t)) / 2
            }
            function Ai(t) {
                return Math.pow(2, 10 * t - 10)
            }
            function Ti(t) {
                return 1 - Math.pow(2, -10 * t)
            }
            function Si(t) {
                return (
                    ((t *= 2) <= 1
                        ? Math.pow(2, 10 * t - 10)
                        : 2 - Math.pow(2, 10 - 10 * t)) / 2
                )
            }
            function ki(t) {
                return 1 - Math.sqrt(1 - t * t)
            }
            function Ci(t) {
                return Math.sqrt(1 - --t * t)
            }
            function Di(t) {
                return (
                    ((t *= 2) <= 1
                        ? 1 - Math.sqrt(1 - t * t)
                        : Math.sqrt(1 - (t -= 2) * t) + 1) / 2
                )
            }
            var Pi = 4 / 11,
                Oi = 6 / 11,
                Ii = 8 / 11,
                Ri = 0.75,
                Fi = 9 / 11,
                Li = 10 / 11,
                zi = 0.9375,
                qi = 21 / 22,
                Ui = 63 / 64,
                Bi = 1 / Pi / Pi
            function Yi(t) {
                return 1 - ji(1 - t)
            }
            function ji(t) {
                return (t = +t) < Pi
                    ? Bi * t * t
                    : t < Ii
                    ? Bi * (t -= Oi) * t + Ri
                    : t < Li
                    ? Bi * (t -= Fi) * t + zi
                    : Bi * (t -= qi) * t + Ui
            }
            function $i(t) {
                return ((t *= 2) <= 1 ? 1 - ji(1 - t) : ji(t - 1) + 1) / 2
            }
            var Hi = (function t(n) {
                    function e(t) {
                        return t * t * ((n + 1) * t - n)
                    }
                    return (n = +n), (e.overshoot = t), e
                })(1.70158),
                Gi = (function t(n) {
                    function e(t) {
                        return --t * t * ((n + 1) * t + n) + 1
                    }
                    return (n = +n), (e.overshoot = t), e
                })(1.70158),
                Xi = (function t(n) {
                    function e(t) {
                        return (
                            ((t *= 2) < 1
                                ? t * t * ((n + 1) * t - n)
                                : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2
                        )
                    }
                    return (n = +n), (e.overshoot = t), e
                })(1.70158),
                Vi = 2 * Math.PI,
                Wi = (function t(n, e) {
                    var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= Vi)
                    function i(t) {
                        return n * Math.pow(2, 10 * --t) * Math.sin((r - t) / e)
                    }
                    return (
                        (i.amplitude = function(n) {
                            return t(n, e * Vi)
                        }),
                        (i.period = function(e) {
                            return t(n, e)
                        }),
                        i
                    )
                })(1, 0.3),
                Zi = (function t(n, e) {
                    var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= Vi)
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
                            return t(n, e * Vi)
                        }),
                        (i.period = function(e) {
                            return t(n, e)
                        }),
                        i
                    )
                })(1, 0.3),
                Ki = (function t(n, e) {
                    var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= Vi)
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
                            return t(n, e * Vi)
                        }),
                        (i.period = function(e) {
                            return t(n, e)
                        }),
                        i
                    )
                })(1, 0.3),
                Qi = { time: null, delay: 0, duration: 250, ease: yi }
            function Ji(t, n) {
                for (var e; !(e = t.__transition) || !(e = e[n]); )
                    if (!(t = t.parentNode)) return (Qi.time = Or()), Qi
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
                          ((e = Qi).time = Or()),
                          (t = null == t ? null : t + ''))
                    for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
                        for (var u, a = r[o], c = a.length, f = 0; f < c; ++f)
                            (u = a[f]) && Qr(u, t, n, f, a, e || Ji(u, n))
                    return new ai(r, this._parents, t, n)
                })
            var to = [null],
                no = function(t, n) {
                    var e,
                        r,
                        i = t.__transition
                    if (i)
                        for (r in ((n = null == n ? null : n + ''), i))
                            if ((e = i[r]).state > Gr && e.name === n)
                                return new ai([[t]], to, n, +r)
                    return null
                },
                eo = function(t) {
                    return function() {
                        return t
                    }
                },
                ro = function(t, n, e) {
                    ;(this.target = t), (this.type = n), (this.selection = e)
                }
            function io() {
                Xt.stopImmediatePropagation()
            }
            var oo = function() {
                    Xt.preventDefault(), Xt.stopImmediatePropagation()
                },
                uo = { name: 'drag' },
                ao = { name: 'space' },
                co = { name: 'handle' },
                fo = { name: 'center' },
                so = {
                    name: 'x',
                    handles: ['e', 'w'].map(mo),
                    input: function(t, n) {
                        return t && [[t[0], n[0][1]], [t[1], n[1][1]]]
                    },
                    output: function(t) {
                        return t && [t[0][0], t[1][0]]
                    },
                },
                lo = {
                    name: 'y',
                    handles: ['n', 's'].map(mo),
                    input: function(t, n) {
                        return t && [[n[0][0], t[0]], [n[1][0], t[1]]]
                    },
                    output: function(t) {
                        return t && [t[0][1], t[1][1]]
                    },
                },
                ho = {
                    name: 'xy',
                    handles: ['n', 'e', 's', 'w', 'nw', 'ne', 'se', 'sw'].map(
                        mo,
                    ),
                    input: function(t) {
                        return t
                    },
                    output: function(t) {
                        return t
                    },
                },
                po = {
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
                vo = { e: 'w', w: 'e', nw: 'ne', ne: 'nw', se: 'sw', sw: 'se' },
                go = { n: 's', s: 'n', nw: 'sw', ne: 'se', se: 'ne', sw: 'nw' },
                yo = {
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
                bo = {
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
            function mo(t) {
                return { type: t }
            }
            function _o() {
                return !Xt.button
            }
            function xo() {
                var t = this.ownerSVGElement || this
                return [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]]
            }
            function wo(t) {
                for (; !t.__brush; ) if (!(t = t.parentNode)) return
                return t.__brush
            }
            function Mo(t) {
                return t[0][0] === t[1][0] || t[0][1] === t[1][1]
            }
            function Eo(t) {
                var n = t.__brush
                return n ? n.dim.output(n.selection) : null
            }
            function No() {
                return So(so)
            }
            function Ao() {
                return So(lo)
            }
            var To = function() {
                return So(ho)
            }
            function So(t) {
                var n,
                    e = xo,
                    r = _o,
                    i = ht(u, 'start', 'brush', 'end'),
                    o = 6
                function u(n) {
                    var e = n
                        .property('__brush', l)
                        .selectAll('.overlay')
                        .data([mo('overlay')])
                    e
                        .enter()
                        .append('rect')
                        .attr('class', 'overlay')
                        .attr('pointer-events', 'all')
                        .attr('cursor', po.overlay)
                        .merge(e)
                        .each(function() {
                            var t = wo(this).extent
                            on(this)
                                .attr('x', t[0][0])
                                .attr('y', t[0][1])
                                .attr('width', t[1][0] - t[0][0])
                                .attr('height', t[1][1] - t[0][1])
                        }),
                        n
                            .selectAll('.selection')
                            .data([mo('selection')])
                            .enter()
                            .append('rect')
                            .attr('class', 'selection')
                            .attr('cursor', po.selection)
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
                                return po[t.type]
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
                    var t = on(this),
                        n = wo(this).selection
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
                                      ? n[1][0] - o / 2
                                      : n[0][0] - o / 2
                              })
                              .attr('y', function(t) {
                                  return 's' === t.type[0]
                                      ? n[1][1] - o / 2
                                      : n[0][1] - o / 2
                              })
                              .attr('width', function(t) {
                                  return 'n' === t.type || 's' === t.type
                                      ? n[1][0] - n[0][0] + o
                                      : o
                              })
                              .attr('height', function(t) {
                                  return 'e' === t.type || 'w' === t.type
                                      ? n[1][1] - n[0][1] + o
                                      : o
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
                    if (Xt.touches) {
                        if (Xt.changedTouches.length < Xt.touches.length)
                            return oo()
                    } else if (n) return
                    if (r.apply(this, arguments)) {
                        var e,
                            i,
                            o,
                            u,
                            f,
                            s,
                            l,
                            h,
                            d,
                            p,
                            v,
                            g,
                            y,
                            b = this,
                            m = Xt.target.__data__.type,
                            _ =
                                'selection' ===
                                (Xt.metaKey ? (m = 'overlay') : m)
                                    ? uo
                                    : Xt.altKey
                                    ? fo
                                    : co,
                            x = t === lo ? null : yo[m],
                            w = t === so ? null : bo[m],
                            M = wo(b),
                            E = M.extent,
                            N = M.selection,
                            A = E[0][0],
                            T = E[0][1],
                            S = E[1][0],
                            k = E[1][1],
                            C = x && w && Xt.shiftKey,
                            D = hn(b),
                            P = D,
                            O = c(b, arguments).beforestart()
                        'overlay' === m
                            ? (M.selection = N = [
                                  [
                                      (e = t === lo ? A : D[0]),
                                      (o = t === so ? T : D[1]),
                                  ],
                                  [
                                      (f = t === lo ? S : e),
                                      (l = t === so ? k : o),
                                  ],
                              ])
                            : ((e = N[0][0]),
                              (o = N[0][1]),
                              (f = N[1][0]),
                              (l = N[1][1])),
                            (i = e),
                            (u = o),
                            (s = f),
                            (h = l)
                        var I = on(b).attr('pointer-events', 'none'),
                            R = I.selectAll('.overlay').attr('cursor', po[m])
                        if (Xt.touches)
                            I.on('touchmove.brush', L, !0).on(
                                'touchend.brush touchcancel.brush',
                                q,
                                !0,
                            )
                        else {
                            var F = on(Xt.view)
                                .on(
                                    'keydown.brush',
                                    function() {
                                        switch (Xt.keyCode) {
                                            case 16:
                                                C = x && w
                                                break
                                            case 18:
                                                _ === co &&
                                                    (x &&
                                                        ((f = s - d * x),
                                                        (e = i + d * x)),
                                                    w &&
                                                        ((l = h - p * w),
                                                        (o = u + p * w)),
                                                    (_ = fo),
                                                    z())
                                                break
                                            case 32:
                                                ;(_ !== co && _ !== fo) ||
                                                    (x < 0
                                                        ? (f = s - d)
                                                        : x > 0 && (e = i - d),
                                                    w < 0
                                                        ? (l = h - p)
                                                        : w > 0 && (o = u - p),
                                                    (_ = ao),
                                                    R.attr(
                                                        'cursor',
                                                        po.selection,
                                                    ),
                                                    z())
                                                break
                                            default:
                                                return
                                        }
                                        oo()
                                    },
                                    !0,
                                )
                                .on(
                                    'keyup.brush',
                                    function() {
                                        switch (Xt.keyCode) {
                                            case 16:
                                                C && ((g = y = C = !1), z())
                                                break
                                            case 18:
                                                _ === fo &&
                                                    (x < 0
                                                        ? (f = s)
                                                        : x > 0 && (e = i),
                                                    w < 0
                                                        ? (l = h)
                                                        : w > 0 && (o = u),
                                                    (_ = co),
                                                    z())
                                                break
                                            case 32:
                                                _ === ao &&
                                                    (Xt.altKey
                                                        ? (x &&
                                                              ((f = s - d * x),
                                                              (e = i + d * x)),
                                                          w &&
                                                              ((l = h - p * w),
                                                              (o = u + p * w)),
                                                          (_ = fo))
                                                        : (x < 0
                                                              ? (f = s)
                                                              : x > 0 &&
                                                                (e = i),
                                                          w < 0
                                                              ? (l = h)
                                                              : w > 0 &&
                                                                (o = u),
                                                          (_ = co)),
                                                    R.attr('cursor', po[m]),
                                                    z())
                                                break
                                            default:
                                                return
                                        }
                                        oo()
                                    },
                                    !0,
                                )
                                .on('mousemove.brush', L, !0)
                                .on('mouseup.brush', q, !0)
                            bn(Xt.view)
                        }
                        io(), ei(b), a.call(b), O.start()
                    }
                    function L() {
                        var t = hn(b)
                        !C ||
                            g ||
                            y ||
                            (Math.abs(t[0] - P[0]) > Math.abs(t[1] - P[1])
                                ? (y = !0)
                                : (g = !0)),
                            (P = t),
                            (v = !0),
                            oo(),
                            z()
                    }
                    function z() {
                        var t
                        switch (((d = P[0] - D[0]), (p = P[1] - D[1]), _)) {
                            case ao:
                            case uo:
                                x &&
                                    ((d = Math.max(A - e, Math.min(S - f, d))),
                                    (i = e + d),
                                    (s = f + d)),
                                    w &&
                                        ((p = Math.max(
                                            T - o,
                                            Math.min(k - l, p),
                                        )),
                                        (u = o + p),
                                        (h = l + p))
                                break
                            case co:
                                x < 0
                                    ? ((d = Math.max(
                                          A - e,
                                          Math.min(S - e, d),
                                      )),
                                      (i = e + d),
                                      (s = f))
                                    : x > 0 &&
                                      ((d = Math.max(
                                          A - f,
                                          Math.min(S - f, d),
                                      )),
                                      (i = e),
                                      (s = f + d)),
                                    w < 0
                                        ? ((p = Math.max(
                                              T - o,
                                              Math.min(k - o, p),
                                          )),
                                          (u = o + p),
                                          (h = l))
                                        : w > 0 &&
                                          ((p = Math.max(
                                              T - l,
                                              Math.min(k - l, p),
                                          )),
                                          (u = o),
                                          (h = l + p))
                                break
                            case fo:
                                x &&
                                    ((i = Math.max(A, Math.min(S, e - d * x))),
                                    (s = Math.max(A, Math.min(S, f + d * x)))),
                                    w &&
                                        ((u = Math.max(
                                            T,
                                            Math.min(k, o - p * w),
                                        )),
                                        (h = Math.max(
                                            T,
                                            Math.min(k, l + p * w),
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
                            m in vo && R.attr('cursor', po[(m = vo[m])])),
                            h < u &&
                                ((w *= -1),
                                (t = o),
                                (o = l),
                                (l = t),
                                (t = u),
                                (u = h),
                                (h = t),
                                m in go && R.attr('cursor', po[(m = go[m])])),
                            M.selection && (N = M.selection),
                            g && ((i = N[0][0]), (s = N[1][0])),
                            y && ((u = N[0][1]), (h = N[1][1])),
                            (N[0][0] === i &&
                                N[0][1] === u &&
                                N[1][0] === s &&
                                N[1][1] === h) ||
                                ((M.selection = [[i, u], [s, h]]),
                                a.call(b),
                                O.brush())
                    }
                    function q() {
                        if ((io(), Xt.touches)) {
                            if (Xt.touches.length) return
                            n && clearTimeout(n),
                                (n = setTimeout(function() {
                                    n = null
                                }, 500)),
                                I.on(
                                    'touchmove.brush touchend.brush touchcancel.brush',
                                    null,
                                )
                        } else
                            mn(Xt.view, v),
                                F.on(
                                    'keydown.brush keyup.brush mousemove.brush mouseup.brush',
                                    null,
                                )
                        I.attr('pointer-events', 'all'),
                            R.attr('cursor', po.overlay),
                            M.selection && (N = M.selection),
                            Mo(N) && ((M.selection = null), a.call(b)),
                            O.end()
                    }
                }
                function l() {
                    var n = this.__brush || { selection: null }
                    return (n.extent = e.apply(this, arguments)), (n.dim = t), n
                }
                return (
                    (u.move = function(n, e) {
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
                                          o = r.selection,
                                          u = t.input(
                                              'function' == typeof e
                                                  ? e.apply(this, arguments)
                                                  : e,
                                              r.extent,
                                          ),
                                          f = Ke(o, u)
                                      function s(t) {
                                          ;(r.selection =
                                              1 === t && Mo(u) ? null : f(t)),
                                              a.call(n),
                                              i.brush()
                                      }
                                      return o && u ? s : s(1)
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
                                      o = c(this, n).beforestart()
                                  ei(this),
                                      (r.selection =
                                          null == i || Mo(i) ? null : i),
                                      a.call(this),
                                      o
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
                            Qt(
                                new ro(u, n, t.output(this.state.selection)),
                                i.apply,
                                i,
                                [n, this.that, this.args],
                            )
                        },
                    }),
                    (u.extent = function(t) {
                        return arguments.length
                            ? ((e =
                                  'function' == typeof t
                                      ? t
                                      : eo([
                                            [+t[0][0], +t[0][1]],
                                            [+t[1][0], +t[1][1]],
                                        ])),
                              u)
                            : e
                    }),
                    (u.filter = function(t) {
                        return arguments.length
                            ? ((r = 'function' == typeof t ? t : eo(!!t)), u)
                            : r
                    }),
                    (u.handleSize = function(t) {
                        return arguments.length ? ((o = +t), u) : o
                    }),
                    (u.on = function() {
                        var t = i.on.apply(i, arguments)
                        return t === i ? u : t
                    }),
                    u
                )
            }
            var ko = Math.cos,
                Co = Math.sin,
                Do = Math.PI,
                Po = Do / 2,
                Oo = 2 * Do,
                Io = Math.max
            var Ro = function() {
                    var t = 0,
                        n = null,
                        e = null,
                        r = null
                    function i(i) {
                        var o,
                            u,
                            a,
                            c,
                            f,
                            s,
                            l = i.length,
                            h = [],
                            d = w(l),
                            p = [],
                            v = [],
                            g = (v.groups = new Array(l)),
                            y = new Array(l * l)
                        for (o = 0, f = -1; ++f < l; ) {
                            for (u = 0, s = -1; ++s < l; ) u += i[f][s]
                            h.push(u), p.push(w(l)), (o += u)
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
                                c = (o = Io(0, Oo - t * l) / o) ? t : Oo / l,
                                u = 0,
                                f = -1;
                            ++f < l;

                        ) {
                            for (a = u, s = -1; ++s < l; ) {
                                var b = d[f],
                                    m = p[b][s],
                                    _ = i[b][m],
                                    x = u,
                                    M = (u += _ * o)
                                y[m * l + b] = {
                                    index: b,
                                    subindex: m,
                                    startAngle: x,
                                    endAngle: M,
                                    value: _,
                                }
                            }
                            ;(g[b] = {
                                index: b,
                                startAngle: a,
                                endAngle: u,
                                value: h[b],
                            }),
                                (u += c)
                        }
                        for (f = -1; ++f < l; )
                            for (s = f - 1; ++s < l; ) {
                                var E = y[s * l + f],
                                    N = y[f * l + s]
                                ;(E.value || N.value) &&
                                    v.push(
                                        E.value < N.value
                                            ? { source: N, target: E }
                                            : { source: E, target: N },
                                    )
                            }
                        return r ? v.sort(r) : v
                    }
                    return (
                        (i.padAngle = function(n) {
                            return arguments.length ? ((t = Io(0, n)), i) : t
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
                Fo = Array.prototype.slice,
                Lo = function(t) {
                    return function() {
                        return t
                    }
                },
                zo = Math.PI,
                qo = 2 * zo,
                Uo = qo - 1e-6
            function Bo() {
                ;(this._x0 = this._y0 = this._x1 = this._y1 = null),
                    (this._ = '')
            }
            function Yo() {
                return new Bo()
            }
            Bo.prototype = Yo.prototype = {
                constructor: Bo,
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
                bezierCurveTo: function(t, n, e, r, i, o) {
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
                        (this._y1 = +o)
                },
                arcTo: function(t, n, e, r, i) {
                    ;(t = +t), (n = +n), (e = +e), (r = +r), (i = +i)
                    var o = this._x1,
                        u = this._y1,
                        a = e - t,
                        c = r - n,
                        f = o - t,
                        s = u - n,
                        l = f * f + s * s
                    if (i < 0) throw new Error('negative radius: ' + i)
                    if (null === this._x1)
                        this._ += 'M' + (this._x1 = t) + ',' + (this._y1 = n)
                    else if (l > 1e-6)
                        if (Math.abs(s * a - c * f) > 1e-6 && i) {
                            var h = e - o,
                                d = r - u,
                                p = a * a + c * c,
                                v = h * h + d * d,
                                g = Math.sqrt(p),
                                y = Math.sqrt(l),
                                b =
                                    i *
                                    Math.tan(
                                        (zo -
                                            Math.acos(
                                                (p + l - v) / (2 * g * y),
                                            )) /
                                            2,
                                    ),
                                m = b / y,
                                _ = b / g
                            Math.abs(m - 1) > 1e-6 &&
                                (this._ +=
                                    'L' + (t + m * f) + ',' + (n + m * s)),
                                (this._ +=
                                    'A' +
                                    i +
                                    ',' +
                                    i +
                                    ',0,0,' +
                                    +(s * h > f * d) +
                                    ',' +
                                    (this._x1 = t + _ * a) +
                                    ',' +
                                    (this._y1 = n + _ * c))
                        } else
                            this._ +=
                                'L' + (this._x1 = t) + ',' + (this._y1 = n)
                    else;
                },
                arc: function(t, n, e, r, i, o) {
                    ;(t = +t), (n = +n)
                    var u = (e = +e) * Math.cos(r),
                        a = e * Math.sin(r),
                        c = t + u,
                        f = n + a,
                        s = 1 ^ o,
                        l = o ? r - i : i - r
                    if (e < 0) throw new Error('negative radius: ' + e)
                    null === this._x1
                        ? (this._ += 'M' + c + ',' + f)
                        : (Math.abs(this._x1 - c) > 1e-6 ||
                              Math.abs(this._y1 - f) > 1e-6) &&
                          (this._ += 'L' + c + ',' + f),
                        e &&
                            (l < 0 && (l = (l % qo) + qo),
                            l > Uo
                                ? (this._ +=
                                      'A' +
                                      e +
                                      ',' +
                                      e +
                                      ',0,1,' +
                                      s +
                                      ',' +
                                      (t - u) +
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
                                      +(l >= zo) +
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
            var jo = Yo
            function $o(t) {
                return t.source
            }
            function Ho(t) {
                return t.target
            }
            function Go(t) {
                return t.radius
            }
            function Xo(t) {
                return t.startAngle
            }
            function Vo(t) {
                return t.endAngle
            }
            var Wo = function() {
                var t = $o,
                    n = Ho,
                    e = Go,
                    r = Xo,
                    i = Vo,
                    o = null
                function u() {
                    var u,
                        a = Fo.call(arguments),
                        c = t.apply(this, a),
                        f = n.apply(this, a),
                        s = +e.apply(this, ((a[0] = c), a)),
                        l = r.apply(this, a) - Po,
                        h = i.apply(this, a) - Po,
                        d = s * ko(l),
                        p = s * Co(l),
                        v = +e.apply(this, ((a[0] = f), a)),
                        g = r.apply(this, a) - Po,
                        y = i.apply(this, a) - Po
                    if (
                        (o || (o = u = jo()),
                        o.moveTo(d, p),
                        o.arc(0, 0, s, l, h),
                        (l === g && h === y) ||
                            (o.quadraticCurveTo(0, 0, v * ko(g), v * Co(g)),
                            o.arc(0, 0, v, g, y)),
                        o.quadraticCurveTo(0, 0, d, p),
                        o.closePath(),
                        u)
                    )
                        return (o = null), u + '' || null
                }
                return (
                    (u.radius = function(t) {
                        return arguments.length
                            ? ((e = 'function' == typeof t ? t : Lo(+t)), u)
                            : e
                    }),
                    (u.startAngle = function(t) {
                        return arguments.length
                            ? ((r = 'function' == typeof t ? t : Lo(+t)), u)
                            : r
                    }),
                    (u.endAngle = function(t) {
                        return arguments.length
                            ? ((i = 'function' == typeof t ? t : Lo(+t)), u)
                            : i
                    }),
                    (u.source = function(n) {
                        return arguments.length ? ((t = n), u) : t
                    }),
                    (u.target = function(t) {
                        return arguments.length ? ((n = t), u) : n
                    }),
                    (u.context = function(t) {
                        return arguments.length
                            ? ((o = null == t ? null : t), u)
                            : o
                    }),
                    u
                )
            }
            function Zo() {}
            function Ko(t, n) {
                var e = new Zo()
                if (t instanceof Zo)
                    t.each(function(t, n) {
                        e.set(n, t)
                    })
                else if (Array.isArray(t)) {
                    var r,
                        i = -1,
                        o = t.length
                    if (null == n) for (; ++i < o; ) e.set(i, t[i])
                    else for (; ++i < o; ) e.set(n((r = t[i]), i, t), r)
                } else if (t) for (var u in t) e.set(u, t[u])
                return e
            }
            Zo.prototype = Ko.prototype = {
                constructor: Zo,
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
            var Qo = Ko,
                Jo = function() {
                    var t,
                        n,
                        e,
                        r = [],
                        i = []
                    function o(e, i, u, a) {
                        if (i >= r.length)
                            return null != t && e.sort(t), null != n ? n(e) : e
                        for (
                            var c,
                                f,
                                s,
                                l = -1,
                                h = e.length,
                                d = r[i++],
                                p = Qo(),
                                v = u();
                            ++l < h;

                        )
                            (s = p.get((c = d((f = e[l])) + '')))
                                ? s.push(f)
                                : p.set(c, [f])
                        return (
                            p.each(function(t, n) {
                                a(v, n, o(t, i, u, a))
                            }),
                            v
                        )
                    }
                    return (e = {
                        object: function(t) {
                            return o(t, 0, tu, nu)
                        },
                        map: function(t) {
                            return o(t, 0, eu, ru)
                        },
                        entries: function(t) {
                            return (function t(e, o) {
                                if (++o > r.length) return e
                                var u,
                                    a = i[o - 1]
                                return (
                                    null != n && o >= r.length
                                        ? (u = e.entries())
                                        : ((u = []),
                                          e.each(function(n, e) {
                                              u.push({
                                                  key: e,
                                                  values: t(n, o),
                                              })
                                          })),
                                    null != a
                                        ? u.sort(function(t, n) {
                                              return a(t.key, n.key)
                                          })
                                        : u
                                )
                            })(o(t, 0, eu, ru), 0)
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
            function tu() {
                return {}
            }
            function nu(t, n, e) {
                t[n] = e
            }
            function eu() {
                return Qo()
            }
            function ru(t, n, e) {
                t.set(n, e)
            }
            function iu() {}
            var ou = Qo.prototype
            function uu(t, n) {
                var e = new iu()
                if (t instanceof iu)
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
            iu.prototype = uu.prototype = {
                constructor: iu,
                has: ou.has,
                add: function(t) {
                    return (this['$' + (t += '')] = t), this
                },
                remove: ou.remove,
                clear: ou.clear,
                values: ou.keys,
                size: ou.size,
                empty: ou.empty,
                each: ou.each,
            }
            var au = uu,
                cu = function(t) {
                    var n = []
                    for (var e in t) n.push(e)
                    return n
                },
                fu = function(t) {
                    var n = []
                    for (var e in t) n.push(t[e])
                    return n
                },
                su = function(t) {
                    var n = []
                    for (var e in t) n.push({ key: e, value: t[e] })
                    return n
                },
                lu = Array.prototype.slice,
                hu = function(t, n) {
                    return t - n
                },
                du = function(t) {
                    for (
                        var n = 0,
                            e = t.length,
                            r = t[e - 1][1] * t[0][0] - t[e - 1][0] * t[0][1];
                        ++n < e;

                    )
                        r += t[n - 1][1] * t[n][0] - t[n - 1][0] * t[n][1]
                    return r
                },
                pu = function(t) {
                    return function() {
                        return t
                    }
                },
                vu = function(t, n) {
                    for (var e, r = -1, i = n.length; ++r < i; )
                        if ((e = gu(t, n[r]))) return e
                    return 0
                }
            function gu(t, n) {
                for (
                    var e = n[0],
                        r = n[1],
                        i = -1,
                        o = 0,
                        u = t.length,
                        a = u - 1;
                    o < u;
                    a = o++
                ) {
                    var c = t[o],
                        f = c[0],
                        s = c[1],
                        l = t[a],
                        h = l[0],
                        d = l[1]
                    if (yu(c, l, n)) return 0
                    s > r != d > r &&
                        e < ((h - f) * (r - s)) / (d - s) + f &&
                        (i = -i)
                }
                return i
            }
            function yu(t, n, e) {
                var r, i, o, u
                return (
                    (function(t, n, e) {
                        return (
                            (n[0] - t[0]) * (e[1] - t[1]) ==
                            (e[0] - t[0]) * (n[1] - t[1])
                        )
                    })(t, n, e) &&
                    ((i = t[(r = +(t[0] === n[0]))]),
                    (o = e[r]),
                    (u = n[r]),
                    (i <= o && o <= u) || (u <= o && o <= i))
                )
            }
            var bu = function() {},
                mu = [
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
                _u = function() {
                    var t = 1,
                        n = 1,
                        e = k,
                        r = a
                    function i(t) {
                        var n = e(t)
                        if (Array.isArray(n)) n = n.slice().sort(hu)
                        else {
                            var r = g(t),
                                i = r[0],
                                u = r[1]
                            ;(n = S(i, u, n)),
                                (n = w(
                                    Math.floor(i / n) * n,
                                    Math.floor(u / n) * n,
                                    n,
                                ))
                        }
                        return n.map(function(n) {
                            return o(t, n)
                        })
                    }
                    function o(e, i) {
                        var o = [],
                            a = []
                        return (
                            (function(e, r, i) {
                                var o,
                                    a,
                                    c,
                                    f,
                                    s,
                                    l,
                                    h = new Array(),
                                    d = new Array()
                                ;(o = a = -1),
                                    (f = e[0] >= r),
                                    mu[f << 1].forEach(p)
                                for (; ++o < t - 1; )
                                    (c = f),
                                        (f = e[o + 1] >= r),
                                        mu[c | (f << 1)].forEach(p)
                                mu[f << 0].forEach(p)
                                for (; ++a < n - 1; ) {
                                    for (
                                        o = -1,
                                            f = e[a * t + t] >= r,
                                            s = e[a * t] >= r,
                                            mu[(f << 1) | (s << 2)].forEach(p);
                                        ++o < t - 1;

                                    )
                                        (c = f),
                                            (f = e[a * t + t + o + 1] >= r),
                                            (l = s),
                                            (s = e[a * t + o + 1] >= r),
                                            mu[
                                                c |
                                                    (f << 1) |
                                                    (s << 2) |
                                                    (l << 3)
                                            ].forEach(p)
                                    mu[f | (s << 3)].forEach(p)
                                }
                                ;(o = -1),
                                    (s = e[a * t] >= r),
                                    mu[s << 2].forEach(p)
                                for (; ++o < t - 1; )
                                    (l = s),
                                        (s = e[a * t + o + 1] >= r),
                                        mu[(s << 2) | (l << 3)].forEach(p)
                                function p(t) {
                                    var n,
                                        e,
                                        r = [t[0][0] + o, t[0][1] + a],
                                        c = [t[1][0] + o, t[1][1] + a],
                                        f = u(r),
                                        s = u(c)
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
                                mu[s << 3].forEach(p)
                            })(e, i, function(t) {
                                r(t, e, i), du(t) > 0 ? o.push([t]) : a.push(t)
                            }),
                            a.forEach(function(t) {
                                for (var n, e = 0, r = o.length; e < r; ++e)
                                    if (-1 !== vu((n = o[e])[0], t))
                                        return void n.push(t)
                            }),
                            { type: 'MultiPolygon', value: i, coordinates: o }
                        )
                    }
                    function u(n) {
                        return 2 * n[0] + n[1] * (t + 1) * 4
                    }
                    function a(e, r, i) {
                        e.forEach(function(e) {
                            var o,
                                u = e[0],
                                a = e[1],
                                c = 0 | u,
                                f = 0 | a,
                                s = r[f * t + c]
                            u > 0 &&
                                u < t &&
                                c === u &&
                                ((o = r[f * t + c - 1]),
                                (e[0] = u + (i - o) / (s - o) - 0.5)),
                                a > 0 &&
                                    a < n &&
                                    f === a &&
                                    ((o = r[(f - 1) * t + c]),
                                    (e[1] = a + (i - o) / (s - o) - 0.5))
                        })
                    }
                    return (
                        (i.contour = o),
                        (i.size = function(e) {
                            if (!arguments.length) return [t, n]
                            var r = Math.ceil(e[0]),
                                o = Math.ceil(e[1])
                            if (!(r > 0 && o > 0))
                                throw new Error('invalid size')
                            return (t = r), (n = o), i
                        }),
                        (i.thresholds = function(t) {
                            return arguments.length
                                ? ((e =
                                      'function' == typeof t
                                          ? t
                                          : Array.isArray(t)
                                          ? pu(lu.call(t))
                                          : pu(t)),
                                  i)
                                : e
                        }),
                        (i.smooth = function(t) {
                            return arguments.length
                                ? ((r = t ? a : bu), i)
                                : r === a
                        }),
                        i
                    )
                }
            function xu(t, n, e) {
                for (
                    var r = t.width, i = t.height, o = 1 + (e << 1), u = 0;
                    u < i;
                    ++u
                )
                    for (var a = 0, c = 0; a < r + e; ++a)
                        a < r && (c += t.data[a + u * r]),
                            a >= e &&
                                (a >= o && (c -= t.data[a - o + u * r]),
                                (n.data[a - e + u * r] =
                                    c / Math.min(a + 1, r - 1 + o - a, o)))
            }
            function wu(t, n, e) {
                for (
                    var r = t.width, i = t.height, o = 1 + (e << 1), u = 0;
                    u < r;
                    ++u
                )
                    for (var a = 0, c = 0; a < i + e; ++a)
                        a < i && (c += t.data[u + a * r]),
                            a >= e &&
                                (a >= o && (c -= t.data[u + (a - o) * r]),
                                (n.data[u + (a - e) * r] =
                                    c / Math.min(a + 1, i - 1 + o - a, o)))
            }
            function Mu(t) {
                return t[0]
            }
            function Eu(t) {
                return t[1]
            }
            function Nu() {
                return 1
            }
            var Au = function() {
                    var t = Mu,
                        n = Eu,
                        e = Nu,
                        r = 960,
                        i = 500,
                        o = 20,
                        u = 2,
                        a = 3 * o,
                        c = (r + 2 * a) >> u,
                        f = (i + 2 * a) >> u,
                        s = pu(20)
                    function l(r) {
                        var i = new Float32Array(c * f),
                            l = new Float32Array(c * f)
                        r.forEach(function(r, o, s) {
                            var l = (+t(r, o, s) + a) >> u,
                                h = (+n(r, o, s) + a) >> u,
                                d = +e(r, o, s)
                            l >= 0 &&
                                l < c &&
                                h >= 0 &&
                                h < f &&
                                (i[l + h * c] += d)
                        }),
                            xu(
                                { width: c, height: f, data: i },
                                { width: c, height: f, data: l },
                                o >> u,
                            ),
                            wu(
                                { width: c, height: f, data: l },
                                { width: c, height: f, data: i },
                                o >> u,
                            ),
                            xu(
                                { width: c, height: f, data: i },
                                { width: c, height: f, data: l },
                                o >> u,
                            ),
                            wu(
                                { width: c, height: f, data: l },
                                { width: c, height: f, data: i },
                                o >> u,
                            ),
                            xu(
                                { width: c, height: f, data: i },
                                { width: c, height: f, data: l },
                                o >> u,
                            ),
                            wu(
                                { width: c, height: f, data: l },
                                { width: c, height: f, data: i },
                                o >> u,
                            )
                        var d = s(i)
                        if (!Array.isArray(d)) {
                            var p = I(i)
                            ;(d = S(0, p, d)),
                                (d = w(0, Math.floor(p / d) * d, d)).shift()
                        }
                        return _u()
                            .thresholds(d)
                            .size([c, f])(i)
                            .map(h)
                    }
                    function h(t) {
                        return (
                            (t.value *= Math.pow(2, -2 * u)),
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
                        ;(t[0] = t[0] * Math.pow(2, u) - a),
                            (t[1] = t[1] * Math.pow(2, u) - a)
                    }
                    function g() {
                        return (
                            (c = (r + 2 * (a = 3 * o)) >> u),
                            (f = (i + 2 * a) >> u),
                            l
                        )
                    }
                    return (
                        (l.x = function(n) {
                            return arguments.length
                                ? ((t = 'function' == typeof n ? n : pu(+n)), l)
                                : t
                        }),
                        (l.y = function(t) {
                            return arguments.length
                                ? ((n = 'function' == typeof t ? t : pu(+t)), l)
                                : n
                        }),
                        (l.weight = function(t) {
                            return arguments.length
                                ? ((e = 'function' == typeof t ? t : pu(+t)), l)
                                : e
                        }),
                        (l.size = function(t) {
                            if (!arguments.length) return [r, i]
                            var n = Math.ceil(t[0]),
                                e = Math.ceil(t[1])
                            if (!(n >= 0 || n >= 0))
                                throw new Error('invalid size')
                            return (r = n), (i = e), g()
                        }),
                        (l.cellSize = function(t) {
                            if (!arguments.length) return 1 << u
                            if (!((t = +t) >= 1))
                                throw new Error('invalid cell size')
                            return (u = Math.floor(Math.log(t) / Math.LN2)), g()
                        }),
                        (l.thresholds = function(t) {
                            return arguments.length
                                ? ((s =
                                      'function' == typeof t
                                          ? t
                                          : Array.isArray(t)
                                          ? pu(lu.call(t))
                                          : pu(t)),
                                  l)
                                : s
                        }),
                        (l.bandwidth = function(t) {
                            if (!arguments.length) return Math.sqrt(o * (o + 1))
                            if (!((t = +t) >= 0))
                                throw new Error('invalid bandwidth')
                            return (
                                (o = Math.round(
                                    (Math.sqrt(4 * t * t + 1) - 1) / 2,
                                )),
                                g()
                            )
                        }),
                        l
                    )
                },
                Tu = {},
                Su = {},
                ku = 34,
                Cu = 10,
                Du = 13
            function Pu(t) {
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
            var Ou = function(t) {
                    var n = new RegExp('["' + t + '\n\r]'),
                        e = t.charCodeAt(0)
                    function r(t, n) {
                        var r,
                            i = [],
                            o = t.length,
                            u = 0,
                            a = 0,
                            c = o <= 0,
                            f = !1
                        function s() {
                            if (c) return Su
                            if (f) return (f = !1), Tu
                            var n,
                                r,
                                i = u
                            if (t.charCodeAt(i) === ku) {
                                for (
                                    ;
                                    (u++ < o && t.charCodeAt(u) !== ku) ||
                                    t.charCodeAt(++u) === ku;

                                );
                                return (
                                    (n = u) >= o
                                        ? (c = !0)
                                        : (r = t.charCodeAt(u++)) === Cu
                                        ? (f = !0)
                                        : r === Du &&
                                          ((f = !0),
                                          t.charCodeAt(u) === Cu && ++u),
                                    t.slice(i + 1, n - 1).replace(/""/g, '"')
                                )
                            }
                            for (; u < o; ) {
                                if ((r = t.charCodeAt((n = u++))) === Cu) f = !0
                                else if (r === Du)
                                    (f = !0), t.charCodeAt(u) === Cu && ++u
                                else if (r !== e) continue
                                return t.slice(i, n)
                            }
                            return (c = !0), t.slice(i, o)
                        }
                        for (
                            t.charCodeAt(o - 1) === Cu && --o,
                                t.charCodeAt(o - 1) === Du && --o;
                            (r = s()) !== Su;

                        ) {
                            for (var l = []; r !== Tu && r !== Su; )
                                l.push(r), (r = s())
                            ;(n && null == (l = n(l, a++))) || i.push(l)
                        }
                        return i
                    }
                    function i(n) {
                        return n.map(o).join(t)
                    }
                    function o(t) {
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
                                o = r(t, function(t, r) {
                                    if (e) return e(t, r - 1)
                                    ;(i = t),
                                        (e = n
                                            ? (function(t, n) {
                                                  var e = Pu(t)
                                                  return function(r, i) {
                                                      return n(e(r), i, t)
                                                  }
                                              })(t, n)
                                            : Pu(t))
                                })
                            return (o.columns = i || []), o
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
                                [e.map(o).join(t)]
                                    .concat(
                                        n.map(function(n) {
                                            return e
                                                .map(function(t) {
                                                    return o(n[t])
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
                Iu = Ou(','),
                Ru = Iu.parse,
                Fu = Iu.parseRows,
                Lu = Iu.format,
                zu = Iu.formatRows,
                qu = Ou('\t'),
                Uu = qu.parse,
                Bu = qu.parseRows,
                Yu = qu.format,
                ju = qu.formatRows
            function $u(t) {
                if (!t.ok) throw new Error(t.status + ' ' + t.statusText)
                return t.blob()
            }
            var Hu = function(t, n) {
                return fetch(t, n).then($u)
            }
            function Gu(t) {
                if (!t.ok) throw new Error(t.status + ' ' + t.statusText)
                return t.arrayBuffer()
            }
            var Xu = function(t, n) {
                return fetch(t, n).then(Gu)
            }
            function Vu(t) {
                if (!t.ok) throw new Error(t.status + ' ' + t.statusText)
                return t.text()
            }
            var Wu = function(t, n) {
                return fetch(t, n).then(Vu)
            }
            function Zu(t) {
                return function(n, e, r) {
                    return (
                        2 === arguments.length &&
                            'function' == typeof e &&
                            ((r = e), (e = void 0)),
                        Wu(n, e).then(function(n) {
                            return t(n, r)
                        })
                    )
                }
            }
            function Ku(t, n, e, r) {
                3 === arguments.length &&
                    'function' == typeof e &&
                    ((r = e), (e = void 0))
                var i = Ou(t)
                return Wu(n, e).then(function(t) {
                    return i.parse(t, r)
                })
            }
            var Qu = Zu(Ru),
                Ju = Zu(Uu),
                ta = function(t, n) {
                    return new Promise(function(e, r) {
                        var i = new Image()
                        for (var o in n) i[o] = n[o]
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
                    return Wu(n, e).then(function(n) {
                        return new DOMParser().parseFromString(n, t)
                    })
                }
            }
            var ia = ra('application/xml'),
                oa = ra('text/html'),
                ua = ra('image/svg+xml'),
                aa = function(t, n) {
                    var e
                    function r() {
                        var r,
                            i,
                            o = e.length,
                            u = 0,
                            a = 0
                        for (r = 0; r < o; ++r) (u += (i = e[r]).x), (a += i.y)
                        for (u = u / o - t, a = a / o - n, r = 0; r < o; ++r)
                            ((i = e[r]).x -= u), (i.y -= a)
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
                    o,
                    u,
                    a,
                    c,
                    f,
                    s,
                    l,
                    h,
                    d = t._root,
                    p = { data: r },
                    v = t._x0,
                    g = t._y0,
                    y = t._x1,
                    b = t._y1
                if (!d) return (t._root = p), t
                for (; d.length; )
                    if (
                        ((f = n >= (o = (v + y) / 2)) ? (v = o) : (y = o),
                        (s = e >= (u = (g + b) / 2)) ? (g = u) : (b = u),
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
                        (f = n >= (o = (v + y) / 2)) ? (v = o) : (y = o),
                        (s = e >= (u = (g + b) / 2)) ? (g = u) : (b = u)
                } while ((l = (s << 1) | f) == (h = ((c >= u) << 1) | (a >= o)))
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
            function va(t, n, e, r, i, o) {
                ;(this._x = t),
                    (this._y = n),
                    (this._x0 = e),
                    (this._y0 = r),
                    (this._x1 = i),
                    (this._y1 = o),
                    (this._root = void 0)
            }
            function ga(t) {
                for (var n = { data: t.data }, e = n; (t = t.next); )
                    e = e.next = { data: t.data }
                return n
            }
            var ya = (pa.prototype = va.prototype)
            function ba(t) {
                return t.x + t.vx
            }
            function ma(t) {
                return t.y + t.vy
            }
            ;(ya.copy = function() {
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
                if (!r.length) return (e._root = ga(r)), e
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
                                : (r.target[i] = ga(n)))
                return e
            }),
                (ya.add = function(t) {
                    var n = +this._x.call(null, t),
                        e = +this._y.call(null, t)
                    return sa(this.cover(n, e), n, e, t)
                }),
                (ya.addAll = function(t) {
                    var n,
                        e,
                        r,
                        i,
                        o = t.length,
                        u = new Array(o),
                        a = new Array(o),
                        c = 1 / 0,
                        f = 1 / 0,
                        s = -1 / 0,
                        l = -1 / 0
                    for (e = 0; e < o; ++e)
                        isNaN((r = +this._x.call(null, (n = t[e])))) ||
                            isNaN((i = +this._y.call(null, n))) ||
                            ((u[e] = r),
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
                        e < o;
                        ++e
                    )
                        sa(this, u[e], a[e], t[e])
                    return this
                }),
                (ya.cover = function(t, n) {
                    if (isNaN((t = +t)) || isNaN((n = +n))) return this
                    var e = this._x0,
                        r = this._y0,
                        i = this._x1,
                        o = this._y1
                    if (isNaN(e))
                        (i = (e = Math.floor(t)) + 1),
                            (o = (r = Math.floor(n)) + 1)
                    else {
                        if (!(e > t || t > i || r > n || n > o)) return this
                        var u,
                            a,
                            c = i - e,
                            f = this._root
                        switch (
                            (a = ((n < (r + o) / 2) << 1) | (t < (e + i) / 2))
                        ) {
                            case 0:
                                do {
                                    ;((u = new Array(4))[a] = f), (f = u)
                                } while (
                                    ((o = r + (c *= 2)),
                                    t > (i = e + c) || n > o)
                                )
                                break
                            case 1:
                                do {
                                    ;((u = new Array(4))[a] = f), (f = u)
                                } while (
                                    ((o = r + (c *= 2)),
                                    (e = i - c) > t || n > o)
                                )
                                break
                            case 2:
                                do {
                                    ;((u = new Array(4))[a] = f), (f = u)
                                } while (
                                    ((r = o - (c *= 2)),
                                    t > (i = e + c) || r > n)
                                )
                                break
                            case 3:
                                do {
                                    ;((u = new Array(4))[a] = f), (f = u)
                                } while (
                                    ((r = o - (c *= 2)),
                                    (e = i - c) > t || r > n)
                                )
                        }
                        this._root && this._root.length && (this._root = f)
                    }
                    return (
                        (this._x0 = e),
                        (this._y0 = r),
                        (this._x1 = i),
                        (this._y1 = o),
                        this
                    )
                }),
                (ya.data = function() {
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
                (ya.extent = function(t) {
                    return arguments.length
                        ? this.cover(+t[0][0], +t[0][1]).cover(
                              +t[1][0],
                              +t[1][1],
                          )
                        : isNaN(this._x0)
                        ? void 0
                        : [[this._x0, this._y0], [this._x1, this._y1]]
                }),
                (ya.find = function(t, n, e) {
                    var r,
                        i,
                        o,
                        u,
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
                                (o = c.y0) > d ||
                                (u = c.x1) < s ||
                                (a = c.y1) < l
                            )
                        )
                            if (v.length) {
                                var g = (i + u) / 2,
                                    y = (o + a) / 2
                                p.push(
                                    new la(v[3], g, y, u, a),
                                    new la(v[2], i, y, g, a),
                                    new la(v[1], g, o, u, y),
                                    new la(v[0], i, o, g, y),
                                ),
                                    (f = ((n >= y) << 1) | (t >= g)) &&
                                        ((c = p[p.length - 1]),
                                        (p[p.length - 1] = p[p.length - 1 - f]),
                                        (p[p.length - 1 - f] = c))
                            } else {
                                var b = t - +this._x.call(null, v.data),
                                    m = n - +this._y.call(null, v.data),
                                    _ = b * b + m * m
                                if (_ < e) {
                                    var x = Math.sqrt((e = _))
                                    ;(s = t - x),
                                        (l = n - x),
                                        (h = t + x),
                                        (d = n + x),
                                        (r = v.data)
                                }
                            }
                    return r
                }),
                (ya.remove = function(t) {
                    if (
                        isNaN((o = +this._x.call(null, t))) ||
                        isNaN((u = +this._y.call(null, t)))
                    )
                        return this
                    var n,
                        e,
                        r,
                        i,
                        o,
                        u,
                        a,
                        c,
                        f,
                        s,
                        l,
                        h,
                        d = this._root,
                        p = this._x0,
                        v = this._y0,
                        g = this._x1,
                        y = this._y1
                    if (!d) return this
                    if (d.length)
                        for (;;) {
                            if (
                                ((f = o >= (a = (p + g) / 2))
                                    ? (p = a)
                                    : (g = a),
                                (s = u >= (c = (v + y) / 2))
                                    ? (v = c)
                                    : (y = c),
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
                (ya.removeAll = function(t) {
                    for (var n = 0, e = t.length; n < e; ++n) this.remove(t[n])
                    return this
                }),
                (ya.root = function() {
                    return this._root
                }),
                (ya.size = function() {
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
                (ya.visit = function(t) {
                    var n,
                        e,
                        r,
                        i,
                        o,
                        u,
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
                                (o = n.x1),
                                (u = n.y1),
                            ) &&
                            c.length
                        ) {
                            var f = (r + o) / 2,
                                s = (i + u) / 2
                            ;(e = c[3]) && a.push(new la(e, f, s, o, u)),
                                (e = c[2]) && a.push(new la(e, r, s, f, u)),
                                (e = c[1]) && a.push(new la(e, f, i, o, s)),
                                (e = c[0]) && a.push(new la(e, r, i, f, s))
                        }
                    return this
                }),
                (ya.visitAfter = function(t) {
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
                            var o,
                                u = n.x0,
                                a = n.y0,
                                c = n.x1,
                                f = n.y1,
                                s = (u + c) / 2,
                                l = (a + f) / 2
                            ;(o = i[0]) && e.push(new la(o, u, a, s, l)),
                                (o = i[1]) && e.push(new la(o, s, a, c, l)),
                                (o = i[2]) && e.push(new la(o, u, l, s, f)),
                                (o = i[3]) && e.push(new la(o, s, l, c, f))
                        }
                        r.push(n)
                    }
                    for (; (n = r.pop()); ) t(n.node, n.x0, n.y0, n.x1, n.y1)
                    return this
                }),
                (ya.x = function(t) {
                    return arguments.length ? ((this._x = t), this) : this._x
                }),
                (ya.y = function(t) {
                    return arguments.length ? ((this._y = t), this) : this._y
                })
            var _a = function(t) {
                var n,
                    e,
                    r = 1,
                    i = 1
                function o() {
                    for (
                        var t, o, a, c, f, s, l, h = n.length, d = 0;
                        d < i;
                        ++d
                    )
                        for (o = pa(n, ba, ma).visitAfter(u), t = 0; t < h; ++t)
                            (a = n[t]),
                                (s = e[a.index]),
                                (l = s * s),
                                (c = a.x + a.vx),
                                (f = a.y + a.vy),
                                o.visit(p)
                    function p(t, n, e, i, o) {
                        var u = t.data,
                            h = t.r,
                            d = s + h
                        if (!u)
                            return (
                                n > c + d || i < c - d || e > f + d || o < f - d
                            )
                        if (u.index > a.index) {
                            var p = c - u.x - u.vx,
                                v = f - u.y - u.vy,
                                g = p * p + v * v
                            g < d * d &&
                                (0 === p && (g += (p = fa()) * p),
                                0 === v && (g += (v = fa()) * v),
                                (g = ((d - (g = Math.sqrt(g))) / g) * r),
                                (a.vx += (p *= g) * (d = (h *= h) / (l + h))),
                                (a.vy += (v *= g) * d),
                                (u.vx -= p * (d = 1 - d)),
                                (u.vy -= v * d))
                        }
                    }
                }
                function u(t) {
                    if (t.data) return (t.r = e[t.data.index])
                    for (var n = (t.r = 0); n < 4; ++n)
                        t[n] && t[n].r > t.r && (t.r = t[n].r)
                }
                function a() {
                    if (n) {
                        var r,
                            i,
                            o = n.length
                        for (e = new Array(o), r = 0; r < o; ++r)
                            (i = n[r]), (e[i.index] = +t(i, r, n))
                    }
                }
                return (
                    'function' != typeof t && (t = ca(null == t ? 1 : +t)),
                    (o.initialize = function(t) {
                        ;(n = t), a()
                    }),
                    (o.iterations = function(t) {
                        return arguments.length ? ((i = +t), o) : i
                    }),
                    (o.strength = function(t) {
                        return arguments.length ? ((r = +t), o) : r
                    }),
                    (o.radius = function(n) {
                        return arguments.length
                            ? ((t = 'function' == typeof n ? n : ca(+n)),
                              a(),
                              o)
                            : t
                    }),
                    o
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
                    o,
                    u = xa,
                    a = function(t) {
                        return (
                            1 / Math.min(i[t.source.index], i[t.target.index])
                        )
                    },
                    c = ca(30),
                    f = 1
                function s(r) {
                    for (var i = 0, u = t.length; i < f; ++i)
                        for (var a, c, s, l, h, d, p, v = 0; v < u; ++v)
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
                                (s.vx -= l * (p = o[v])),
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
                            l = Qo(r, u)
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
                        for (a = 0, o = new Array(s); a < s; ++a)
                            (c = t[a]),
                                (o[a] =
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
                        return arguments.length ? ((u = t), s) : u
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
            function Ea(t) {
                return t.x
            }
            function Na(t) {
                return t.y
            }
            var Aa = 10,
                Ta = Math.PI * (3 - Math.sqrt(5)),
                Sa = function(t) {
                    var n,
                        e = 1,
                        r = 0.001,
                        i = 1 - Math.pow(r, 1 / 300),
                        o = 0,
                        u = 0.6,
                        a = Qo(),
                        c = Fr(s),
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
                            e += (o - e) * i,
                                a.each(function(t) {
                                    t(e)
                                }),
                                n = 0;
                            n < c;
                            ++n
                        )
                            null == (r = t[n]).fx
                                ? (r.x += r.vx *= u)
                                : ((r.x = r.fx), (r.vx = 0)),
                                null == r.fy
                                    ? (r.y += r.vy *= u)
                                    : ((r.y = r.fy), (r.vy = 0))
                    }
                    function h() {
                        for (var n, e = 0, r = t.length; e < r; ++e) {
                            if (
                                (((n = t[e]).index = e),
                                isNaN(n.x) || isNaN(n.y))
                            ) {
                                var i = Aa * Math.sqrt(e),
                                    o = e * Ta
                                ;(n.x = i * Math.cos(o)),
                                    (n.y = i * Math.sin(o))
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
                                return arguments.length ? ((o = +t), n) : o
                            },
                            velocityDecay: function(t) {
                                return arguments.length
                                    ? ((u = 1 - t), n)
                                    : 1 - u
                            },
                            force: function(t, e) {
                                return arguments.length > 1
                                    ? (null == e ? a.remove(t) : a.set(t, d(e)),
                                      n)
                                    : a.get(t)
                            },
                            find: function(n, e, r) {
                                var i,
                                    o,
                                    u,
                                    a,
                                    c,
                                    f = 0,
                                    s = t.length
                                for (
                                    null == r ? (r = 1 / 0) : (r *= r), f = 0;
                                    f < s;
                                    ++f
                                )
                                    (u =
                                        (i = n - (a = t[f]).x) * i +
                                        (o = e - a.y) * o) < r &&
                                        ((c = a), (r = u))
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
                ka = function() {
                    var t,
                        n,
                        e,
                        r,
                        i = ca(-30),
                        o = 1,
                        u = 1 / 0,
                        a = 0.81
                    function c(r) {
                        var i,
                            o = t.length,
                            u = pa(t, Ea, Na).visitAfter(s)
                        for (e = r, i = 0; i < o; ++i) (n = t[i]), u.visit(l)
                    }
                    function f() {
                        if (t) {
                            var n,
                                e,
                                o = t.length
                            for (r = new Array(o), n = 0; n < o; ++n)
                                (e = t[n]), (r[e.index] = +i(e, n, t))
                        }
                    }
                    function s(t) {
                        var n,
                            e,
                            i,
                            o,
                            u,
                            a = 0,
                            c = 0
                        if (t.length) {
                            for (i = o = u = 0; u < 4; ++u)
                                (n = t[u]) &&
                                    (e = Math.abs(n.value)) &&
                                    ((a += n.value),
                                    (c += e),
                                    (i += e * n.x),
                                    (o += e * n.y))
                            ;(t.x = i / c), (t.y = o / c)
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
                                d < u &&
                                    (0 === s && (d += (s = fa()) * s),
                                    0 === l && (d += (l = fa()) * l),
                                    d < o && (d = Math.sqrt(o * d)),
                                    (n.vx += (s * t.value * e) / d),
                                    (n.vy += (l * t.value * e) / d)),
                                !0
                            )
                        if (!(t.length || d >= u)) {
                            ;(t.data !== n || t.next) &&
                                (0 === s && (d += (s = fa()) * s),
                                0 === l && (d += (l = fa()) * l),
                                d < o && (d = Math.sqrt(o * d)))
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
                                ? ((o = t * t), c)
                                : Math.sqrt(o)
                        }),
                        (c.distanceMax = function(t) {
                            return arguments.length
                                ? ((u = t * t), c)
                                : Math.sqrt(u)
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
                        o,
                        u = ca(0.1)
                    function a(t) {
                        for (var u = 0, a = r.length; u < a; ++u) {
                            var c = r[u],
                                f = c.x - n || 1e-6,
                                s = c.y - e || 1e-6,
                                l = Math.sqrt(f * f + s * s),
                                h = ((o[u] - l) * i[u] * t) / l
                            ;(c.vx += f * h), (c.vy += s * h)
                        }
                    }
                    function c() {
                        if (r) {
                            var n,
                                e = r.length
                            for (
                                i = new Array(e), o = new Array(e), n = 0;
                                n < e;
                                ++n
                            )
                                (o[n] = +t(r[n], n, r)),
                                    (i[n] = isNaN(o[n]) ? 0 : +u(r[n], n, r))
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
                                ? ((u = 'function' == typeof t ? t : ca(+t)),
                                  c(),
                                  a)
                                : u
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
                Da = function(t) {
                    var n,
                        e,
                        r,
                        i = ca(0.1)
                    function o(t) {
                        for (var i, o = 0, u = n.length; o < u; ++o)
                            (i = n[o]).vx += (r[o] - i.x) * e[o] * t
                    }
                    function u() {
                        if (n) {
                            var o,
                                u = n.length
                            for (
                                e = new Array(u), r = new Array(u), o = 0;
                                o < u;
                                ++o
                            )
                                e[o] = isNaN((r[o] = +t(n[o], o, n)))
                                    ? 0
                                    : +i(n[o], o, n)
                        }
                    }
                    return (
                        'function' != typeof t && (t = ca(null == t ? 0 : +t)),
                        (o.initialize = function(t) {
                            ;(n = t), u()
                        }),
                        (o.strength = function(t) {
                            return arguments.length
                                ? ((i = 'function' == typeof t ? t : ca(+t)),
                                  u(),
                                  o)
                                : i
                        }),
                        (o.x = function(n) {
                            return arguments.length
                                ? ((t = 'function' == typeof n ? n : ca(+n)),
                                  u(),
                                  o)
                                : t
                        }),
                        o
                    )
                },
                Pa = function(t) {
                    var n,
                        e,
                        r,
                        i = ca(0.1)
                    function o(t) {
                        for (var i, o = 0, u = n.length; o < u; ++o)
                            (i = n[o]).vy += (r[o] - i.y) * e[o] * t
                    }
                    function u() {
                        if (n) {
                            var o,
                                u = n.length
                            for (
                                e = new Array(u), r = new Array(u), o = 0;
                                o < u;
                                ++o
                            )
                                e[o] = isNaN((r[o] = +t(n[o], o, n)))
                                    ? 0
                                    : +i(n[o], o, n)
                        }
                    }
                    return (
                        'function' != typeof t && (t = ca(null == t ? 0 : +t)),
                        (o.initialize = function(t) {
                            ;(n = t), u()
                        }),
                        (o.strength = function(t) {
                            return arguments.length
                                ? ((i = 'function' == typeof t ? t : ca(+t)),
                                  u(),
                                  o)
                                : i
                        }),
                        (o.y = function(n) {
                            return arguments.length
                                ? ((t = 'function' == typeof n ? n : ca(+n)),
                                  u(),
                                  o)
                                : t
                        }),
                        o
                    )
                },
                Oa = function(t, n) {
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
                Ia = function(t) {
                    return (t = Oa(Math.abs(t))) ? t[1] : NaN
                },
                Ra = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i
            function Fa(t) {
                return new La(t)
            }
            function La(t) {
                if (!(n = Ra.exec(t))) throw new Error('invalid format: ' + t)
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
            ;(Fa.prototype = La.prototype),
                (La.prototype.toString = function() {
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
            var za,
                qa,
                Ua,
                Ba,
                Ya = function(t) {
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
                    var e = Oa(t, n)
                    if (!e) return t + ''
                    var r = e[0],
                        i = e[1]
                    return i < 0
                        ? '0.' + new Array(-i).join('0') + r
                        : r.length > i + 1
                        ? r.slice(0, i + 1) + '.' + r.slice(i + 1)
                        : r + new Array(i - r.length + 2).join('0')
                },
                $a = {
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
                        var e = Oa(t, n)
                        if (!e) return t + ''
                        var r = e[0],
                            i = e[1],
                            o =
                                i -
                                (za =
                                    3 *
                                    Math.max(
                                        -8,
                                        Math.min(8, Math.floor(i / 3)),
                                    )) +
                                1,
                            u = r.length
                        return o === u
                            ? r
                            : o > u
                            ? r + new Array(o - u + 1).join('0')
                            : o > 0
                            ? r.slice(0, o) + '.' + r.slice(o)
                            : '0.' +
                              new Array(1 - o).join('0') +
                              Oa(t, Math.max(0, n + o - 1))[0]
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
                Ha = function(t) {
                    return t
                },
                Ga = [
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
                Xa = function(t) {
                    var n,
                        e,
                        r =
                            t.grouping && t.thousands
                                ? ((n = t.grouping),
                                  (e = t.thousands),
                                  function(t, r) {
                                      for (
                                          var i = t.length,
                                              o = [],
                                              u = 0,
                                              a = n[0],
                                              c = 0;
                                          i > 0 &&
                                          a > 0 &&
                                          (c + a + 1 > r &&
                                              (a = Math.max(1, r - c)),
                                          o.push(t.substring((i -= a), i + a)),
                                          !((c += a + 1) > r));

                                      )
                                          a = n[(u = (u + 1) % n.length)]
                                      return o.reverse().join(e)
                                  })
                                : Ha,
                        i = t.currency,
                        o = t.decimal,
                        u = t.numerals
                            ? (function(t) {
                                  return function(n) {
                                      return n.replace(/[0-9]/g, function(n) {
                                          return t[+n]
                                      })
                                  }
                              })(t.numerals)
                            : Ha,
                        a = t.percent || '%'
                    function c(t) {
                        var n = (t = Fa(t)).fill,
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
                            : $a[v] ||
                              (null == d && (d = 12), (p = !0), (v = 'g')),
                            (s || ('0' === n && '=' === e)) &&
                                ((s = !0), (n = '0'), (e = '='))
                        var g =
                                '$' === f
                                    ? i[0]
                                    : '#' === f && /[boxX]/.test(v)
                                    ? '0' + v.toLowerCase()
                                    : '',
                            y = '$' === f ? i[1] : /[%p]/.test(v) ? a : '',
                            b = $a[v],
                            m = /[defgprs%]/.test(v)
                        function _(t) {
                            var i,
                                a,
                                f,
                                _ = g,
                                x = y
                            if ('c' === v) (x = b(t) + x), (t = '')
                            else {
                                var w = (t = +t) < 0
                                if (
                                    ((t = b(Math.abs(t), d)),
                                    p && (t = Ya(t)),
                                    w && 0 == +t && (w = !1),
                                    (_ =
                                        (w
                                            ? '(' === c
                                                ? c
                                                : '-'
                                            : '-' === c || '(' === c
                                            ? ''
                                            : c) + _),
                                    (x =
                                        ('s' === v ? Ga[8 + za / 3] : '') +
                                        x +
                                        (w && '(' === c ? ')' : '')),
                                    m)
                                )
                                    for (i = -1, a = t.length; ++i < a; )
                                        if (
                                            48 > (f = t.charCodeAt(i)) ||
                                            f > 57
                                        ) {
                                            ;(x =
                                                (46 === f
                                                    ? o + t.slice(i + 1)
                                                    : t.slice(i)) + x),
                                                (t = t.slice(0, i))
                                            break
                                        }
                            }
                            h && !s && (t = r(t, 1 / 0))
                            var M = _.length + t.length + x.length,
                                E = M < l ? new Array(l - M + 1).join(n) : ''
                            switch (
                                (h &&
                                    s &&
                                    ((t = r(
                                        E + t,
                                        E.length ? l - x.length : 1 / 0,
                                    )),
                                    (E = '')),
                                e)
                            ) {
                                case '<':
                                    t = _ + t + x + E
                                    break
                                case '=':
                                    t = _ + E + t + x
                                    break
                                case '^':
                                    t =
                                        E.slice(0, (M = E.length >> 1)) +
                                        _ +
                                        t +
                                        x +
                                        E.slice(M)
                                    break
                                default:
                                    t = E + _ + t + x
                            }
                            return u(t)
                        }
                        return (
                            (d =
                                null == d
                                    ? 6
                                    : /[gprs]/.test(v)
                                    ? Math.max(1, Math.min(21, d))
                                    : Math.max(0, Math.min(20, d))),
                            (_.toString = function() {
                                return t + ''
                            }),
                            _
                        )
                    }
                    return {
                        format: c,
                        formatPrefix: function(t, n) {
                            var e = c((((t = Fa(t)).type = 'f'), t)),
                                r =
                                    3 *
                                    Math.max(
                                        -8,
                                        Math.min(8, Math.floor(Ia(n) / 3)),
                                    ),
                                i = Math.pow(10, -r),
                                o = Ga[8 + r / 3]
                            return function(t) {
                                return e(i * t) + o
                            }
                        },
                    }
                }
            function Va(t) {
                return (
                    (qa = Xa(t)), (Ua = qa.format), (Ba = qa.formatPrefix), qa
                )
            }
            Va({
                decimal: '.',
                thousands: ',',
                grouping: [3],
                currency: ['$', ''],
            })
            var Wa = function(t) {
                    return Math.max(0, -Ia(Math.abs(t)))
                },
                Za = function(t, n) {
                    return Math.max(
                        0,
                        3 * Math.max(-8, Math.min(8, Math.floor(Ia(n) / 3))) -
                            Ia(Math.abs(t)),
                    )
                },
                Ka = function(t, n) {
                    return (
                        (t = Math.abs(t)),
                        (n = Math.abs(n) - t),
                        Math.max(0, Ia(n) - Ia(t)) + 1
                    )
                },
                Qa = function() {
                    return new Ja()
                }
            function Ja() {
                this.reset()
            }
            Ja.prototype = {
                constructor: Ja,
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
            var tc = new Ja()
            function nc(t, n, e) {
                var r = (t.s = n + e),
                    i = r - n,
                    o = r - i
                t.t = n - o + (e - i)
            }
            var ec = 1e-6,
                rc = Math.PI,
                ic = rc / 2,
                oc = rc / 4,
                uc = 2 * rc,
                ac = 180 / rc,
                cc = rc / 180,
                fc = Math.abs,
                sc = Math.atan,
                lc = Math.atan2,
                hc = Math.cos,
                dc = Math.ceil,
                pc = Math.exp,
                vc = (Math.floor, Math.log),
                gc = Math.pow,
                yc = Math.sin,
                bc =
                    Math.sign ||
                    function(t) {
                        return t > 0 ? 1 : t < 0 ? -1 : 0
                    },
                mc = Math.sqrt,
                _c = Math.tan
            function xc(t) {
                return t > 1 ? 0 : t < -1 ? rc : Math.acos(t)
            }
            function wc(t) {
                return t > 1 ? ic : t < -1 ? -ic : Math.asin(t)
            }
            function Mc(t) {
                return (t = yc(t / 2)) * t
            }
            function Ec() {}
            function Nc(t, n) {
                t && Tc.hasOwnProperty(t.type) && Tc[t.type](t, n)
            }
            var Ac = {
                    Feature: function(t, n) {
                        Nc(t.geometry, n)
                    },
                    FeatureCollection: function(t, n) {
                        for (
                            var e = t.features, r = -1, i = e.length;
                            ++r < i;

                        )
                            Nc(e[r].geometry, n)
                    },
                },
                Tc = {
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
                        Sc(t.coordinates, n, 0)
                    },
                    MultiLineString: function(t, n) {
                        for (
                            var e = t.coordinates, r = -1, i = e.length;
                            ++r < i;

                        )
                            Sc(e[r], n, 0)
                    },
                    Polygon: function(t, n) {
                        kc(t.coordinates, n)
                    },
                    MultiPolygon: function(t, n) {
                        for (
                            var e = t.coordinates, r = -1, i = e.length;
                            ++r < i;

                        )
                            kc(e[r], n)
                    },
                    GeometryCollection: function(t, n) {
                        for (
                            var e = t.geometries, r = -1, i = e.length;
                            ++r < i;

                        )
                            Nc(e[r], n)
                    },
                }
            function Sc(t, n, e) {
                var r,
                    i = -1,
                    o = t.length - e
                for (n.lineStart(); ++i < o; )
                    (r = t[i]), n.point(r[0], r[1], r[2])
                n.lineEnd()
            }
            function kc(t, n) {
                var e = -1,
                    r = t.length
                for (n.polygonStart(); ++e < r; ) Sc(t[e], n, 1)
                n.polygonEnd()
            }
            var Cc,
                Dc,
                Pc,
                Oc,
                Ic,
                Rc = function(t, n) {
                    t && Ac.hasOwnProperty(t.type) ? Ac[t.type](t, n) : Nc(t, n)
                },
                Fc = Qa(),
                Lc = Qa(),
                zc = {
                    point: Ec,
                    lineStart: Ec,
                    lineEnd: Ec,
                    polygonStart: function() {
                        Fc.reset(), (zc.lineStart = qc), (zc.lineEnd = Uc)
                    },
                    polygonEnd: function() {
                        var t = +Fc
                        Lc.add(t < 0 ? uc + t : t),
                            (this.lineStart = this.lineEnd = this.point = Ec)
                    },
                    sphere: function() {
                        Lc.add(uc)
                    },
                }
            function qc() {
                zc.point = Bc
            }
            function Uc() {
                Yc(Cc, Dc)
            }
            function Bc(t, n) {
                ;(zc.point = Yc),
                    (Cc = t),
                    (Dc = n),
                    (Pc = t *= cc),
                    (Oc = hc((n = (n *= cc) / 2 + oc))),
                    (Ic = yc(n))
            }
            function Yc(t, n) {
                var e = (t *= cc) - Pc,
                    r = e >= 0 ? 1 : -1,
                    i = r * e,
                    o = hc((n = (n *= cc) / 2 + oc)),
                    u = yc(n),
                    a = Ic * u,
                    c = Oc * o + a * hc(i),
                    f = a * r * yc(i)
                Fc.add(lc(f, c)), (Pc = t), (Oc = o), (Ic = u)
            }
            var jc = function(t) {
                return Lc.reset(), Rc(t, zc), 2 * Lc
            }
            function $c(t) {
                return [lc(t[1], t[0]), wc(t[2])]
            }
            function Hc(t) {
                var n = t[0],
                    e = t[1],
                    r = hc(e)
                return [r * hc(n), r * yc(n), yc(e)]
            }
            function Gc(t, n) {
                return t[0] * n[0] + t[1] * n[1] + t[2] * n[2]
            }
            function Xc(t, n) {
                return [
                    t[1] * n[2] - t[2] * n[1],
                    t[2] * n[0] - t[0] * n[2],
                    t[0] * n[1] - t[1] * n[0],
                ]
            }
            function Vc(t, n) {
                ;(t[0] += n[0]), (t[1] += n[1]), (t[2] += n[2])
            }
            function Wc(t, n) {
                return [t[0] * n, t[1] * n, t[2] * n]
            }
            function Zc(t) {
                var n = mc(t[0] * t[0] + t[1] * t[1] + t[2] * t[2])
                ;(t[0] /= n), (t[1] /= n), (t[2] /= n)
            }
            var Kc,
                Qc,
                Jc,
                tf,
                nf,
                ef,
                rf,
                of,
                uf,
                af,
                cf = Qa(),
                ff = {
                    point: sf,
                    lineStart: hf,
                    lineEnd: df,
                    polygonStart: function() {
                        ;(ff.point = pf),
                            (ff.lineStart = vf),
                            (ff.lineEnd = gf),
                            cf.reset(),
                            zc.polygonStart()
                    },
                    polygonEnd: function() {
                        zc.polygonEnd(),
                            (ff.point = sf),
                            (ff.lineStart = hf),
                            (ff.lineEnd = df),
                            Fc < 0
                                ? ((Kc = -(Jc = 180)), (Qc = -(tf = 90)))
                                : cf > ec
                                ? (tf = 90)
                                : cf < -ec && (Qc = -90),
                            (af[0] = Kc),
                            (af[1] = Jc)
                    },
                }
            function sf(t, n) {
                uf.push((af = [(Kc = t), (Jc = t)])),
                    n < Qc && (Qc = n),
                    n > tf && (tf = n)
            }
            function lf(t, n) {
                var e = Hc([t * cc, n * cc])
                if (of) {
                    var r = Xc(of, e),
                        i = Xc([r[1], -r[0], 0], r)
                    Zc(i), (i = $c(i))
                    var o,
                        u = t - nf,
                        a = u > 0 ? 1 : -1,
                        c = i[0] * ac * a,
                        f = fc(u) > 180
                    f ^ (a * nf < c && c < a * t)
                        ? (o = i[1] * ac) > tf && (tf = o)
                        : f ^
                          (a * nf < (c = ((c + 360) % 360) - 180) && c < a * t)
                        ? (o = -i[1] * ac) < Qc && (Qc = o)
                        : (n < Qc && (Qc = n), n > tf && (tf = n)),
                        f
                            ? t < nf
                                ? yf(Kc, t) > yf(Kc, Jc) && (Jc = t)
                                : yf(t, Jc) > yf(Kc, Jc) && (Kc = t)
                            : Jc >= Kc
                            ? (t < Kc && (Kc = t), t > Jc && (Jc = t))
                            : t > nf
                            ? yf(Kc, t) > yf(Kc, Jc) && (Jc = t)
                            : yf(t, Jc) > yf(Kc, Jc) && (Kc = t)
                } else uf.push((af = [(Kc = t), (Jc = t)]))
                n < Qc && (Qc = n), n > tf && (tf = n), (of = e), (nf = t)
            }
            function hf() {
                ff.point = lf
            }
            function df() {
                ;(af[0] = Kc), (af[1] = Jc), (ff.point = sf), (of = null)
            }
            function pf(t, n) {
                if (of) {
                    var e = t - nf
                    cf.add(fc(e) > 180 ? e + (e > 0 ? 360 : -360) : e)
                } else (ef = t), (rf = n)
                zc.point(t, n), lf(t, n)
            }
            function vf() {
                zc.lineStart()
            }
            function gf() {
                pf(ef, rf),
                    zc.lineEnd(),
                    fc(cf) > ec && (Kc = -(Jc = 180)),
                    (af[0] = Kc),
                    (af[1] = Jc),
                    (of = null)
            }
            function yf(t, n) {
                return (n -= t) < 0 ? n + 360 : n
            }
            function bf(t, n) {
                return t[0] - n[0]
            }
            function mf(t, n) {
                return t[0] <= t[1]
                    ? t[0] <= n && n <= t[1]
                    : n < t[0] || t[1] < n
            }
            var _f,
                xf,
                wf,
                Mf,
                Ef,
                Nf,
                Af,
                Tf,
                Sf,
                kf,
                Cf,
                Df,
                Pf,
                Of,
                If,
                Rf,
                Ff = function(t) {
                    var n, e, r, i, o, u, a
                    if (
                        ((tf = Jc = -(Kc = Qc = 1 / 0)),
                        (uf = []),
                        Rc(t, ff),
                        (e = uf.length))
                    ) {
                        for (uf.sort(bf), n = 1, o = [(r = uf[0])]; n < e; ++n)
                            mf(r, (i = uf[n])[0]) || mf(r, i[1])
                                ? (yf(r[0], i[1]) > yf(r[0], r[1]) &&
                                      (r[1] = i[1]),
                                  yf(i[0], r[1]) > yf(r[0], r[1]) &&
                                      (r[0] = i[0]))
                                : o.push((r = i))
                        for (
                            u = -1 / 0, n = 0, r = o[(e = o.length - 1)];
                            n <= e;
                            r = i, ++n
                        )
                            (i = o[n]),
                                (a = yf(r[1], i[0])) > u &&
                                    ((u = a), (Kc = i[0]), (Jc = r[1]))
                    }
                    return (
                        (uf = af = null),
                        Kc === 1 / 0 || Qc === 1 / 0
                            ? [[NaN, NaN], [NaN, NaN]]
                            : [[Kc, Qc], [Jc, tf]]
                    )
                },
                Lf = {
                    sphere: Ec,
                    point: zf,
                    lineStart: Uf,
                    lineEnd: jf,
                    polygonStart: function() {
                        ;(Lf.lineStart = $f), (Lf.lineEnd = Hf)
                    },
                    polygonEnd: function() {
                        ;(Lf.lineStart = Uf), (Lf.lineEnd = jf)
                    },
                }
            function zf(t, n) {
                t *= cc
                var e = hc((n *= cc))
                qf(e * hc(t), e * yc(t), yc(n))
            }
            function qf(t, n, e) {
                ;(wf += (t - wf) / ++_f),
                    (Mf += (n - Mf) / _f),
                    (Ef += (e - Ef) / _f)
            }
            function Uf() {
                Lf.point = Bf
            }
            function Bf(t, n) {
                t *= cc
                var e = hc((n *= cc))
                ;(Of = e * hc(t)),
                    (If = e * yc(t)),
                    (Rf = yc(n)),
                    (Lf.point = Yf),
                    qf(Of, If, Rf)
            }
            function Yf(t, n) {
                t *= cc
                var e = hc((n *= cc)),
                    r = e * hc(t),
                    i = e * yc(t),
                    o = yc(n),
                    u = lc(
                        mc(
                            (u = If * o - Rf * i) * u +
                                (u = Rf * r - Of * o) * u +
                                (u = Of * i - If * r) * u,
                        ),
                        Of * r + If * i + Rf * o,
                    )
                ;(xf += u),
                    (Nf += u * (Of + (Of = r))),
                    (Af += u * (If + (If = i))),
                    (Tf += u * (Rf + (Rf = o))),
                    qf(Of, If, Rf)
            }
            function jf() {
                Lf.point = zf
            }
            function $f() {
                Lf.point = Gf
            }
            function Hf() {
                Xf(Df, Pf), (Lf.point = zf)
            }
            function Gf(t, n) {
                ;(Df = t), (Pf = n), (t *= cc), (n *= cc), (Lf.point = Xf)
                var e = hc(n)
                ;(Of = e * hc(t)),
                    (If = e * yc(t)),
                    (Rf = yc(n)),
                    qf(Of, If, Rf)
            }
            function Xf(t, n) {
                t *= cc
                var e = hc((n *= cc)),
                    r = e * hc(t),
                    i = e * yc(t),
                    o = yc(n),
                    u = If * o - Rf * i,
                    a = Rf * r - Of * o,
                    c = Of * i - If * r,
                    f = mc(u * u + a * a + c * c),
                    s = wc(f),
                    l = f && -s / f
                ;(Sf += l * u),
                    (kf += l * a),
                    (Cf += l * c),
                    (xf += s),
                    (Nf += s * (Of + (Of = r))),
                    (Af += s * (If + (If = i))),
                    (Tf += s * (Rf + (Rf = o))),
                    qf(Of, If, Rf)
            }
            var Vf = function(t) {
                    ;(_f = xf = wf = Mf = Ef = Nf = Af = Tf = Sf = kf = Cf = 0),
                        Rc(t, Lf)
                    var n = Sf,
                        e = kf,
                        r = Cf,
                        i = n * n + e * e + r * r
                    return i < 1e-12 &&
                        ((n = Nf),
                        (e = Af),
                        (r = Tf),
                        xf < ec && ((n = wf), (e = Mf), (r = Ef)),
                        (i = n * n + e * e + r * r) < 1e-12)
                        ? [NaN, NaN]
                        : [lc(e, n) * ac, wc(r / mc(i)) * ac]
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
            function Kf(t, n) {
                return [t > rc ? t - uc : t < -rc ? t + uc : t, n]
            }
            function Qf(t, n, e) {
                return (t %= uc)
                    ? n || e
                        ? Zf(ts(t), ns(n, e))
                        : ts(t)
                    : n || e
                    ? ns(n, e)
                    : Kf
            }
            function Jf(t) {
                return function(n, e) {
                    return [(n += t) > rc ? n - uc : n < -rc ? n + uc : n, e]
                }
            }
            function ts(t) {
                var n = Jf(t)
                return (n.invert = Jf(-t)), n
            }
            function ns(t, n) {
                var e = hc(t),
                    r = yc(t),
                    i = hc(n),
                    o = yc(n)
                function u(t, n) {
                    var u = hc(n),
                        a = hc(t) * u,
                        c = yc(t) * u,
                        f = yc(n),
                        s = f * e + a * r
                    return [lc(c * i - s * o, a * e - f * r), wc(s * i + c * o)]
                }
                return (
                    (u.invert = function(t, n) {
                        var u = hc(n),
                            a = hc(t) * u,
                            c = yc(t) * u,
                            f = yc(n),
                            s = f * i - c * o
                        return [
                            lc(c * i + f * o, a * e + s * r),
                            wc(s * e - a * r),
                        ]
                    }),
                    u
                )
            }
            Kf.invert = Kf
            var es = function(t) {
                function n(n) {
                    return (
                        ((n = t(n[0] * cc, n[1] * cc))[0] *= ac),
                        (n[1] *= ac),
                        n
                    )
                }
                return (
                    (t = Qf(
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
            function rs(t, n, e, r, i, o) {
                if (e) {
                    var u = hc(n),
                        a = yc(n),
                        c = r * e
                    null == i
                        ? ((i = n + r * uc), (o = n - c / 2))
                        : ((i = is(u, i)),
                          (o = is(u, o)),
                          (r > 0 ? i < o : i > o) && (i += r * uc))
                    for (var f, s = i; r > 0 ? s > o : s < o; s -= c)
                        (f = $c([u, -a * hc(s), -a * yc(s)])),
                            t.point(f[0], f[1])
                }
            }
            function is(t, n) {
                ;((n = Hc(n))[0] -= t), Zc(n)
                var e = xc(-n[1])
                return ((-n[2] < 0 ? -e : e) + uc - ec) % uc
            }
            var os = function() {
                    var t,
                        n,
                        e = Wf([0, 0]),
                        r = Wf(90),
                        i = Wf(6),
                        o = {
                            point: function(e, r) {
                                t.push((e = n(e, r))),
                                    (e[0] *= ac),
                                    (e[1] *= ac)
                            },
                        }
                    function u() {
                        var u = e.apply(this, arguments),
                            a = r.apply(this, arguments) * cc,
                            c = i.apply(this, arguments) * cc
                        return (
                            (t = []),
                            (n = Qf(-u[0] * cc, -u[1] * cc, 0).invert),
                            rs(o, a, c, 1),
                            (u = { type: 'Polygon', coordinates: [t] }),
                            (t = n = null),
                            u
                        )
                    }
                    return (
                        (u.center = function(t) {
                            return arguments.length
                                ? ((e =
                                      'function' == typeof t
                                          ? t
                                          : Wf([+t[0], +t[1]])),
                                  u)
                                : e
                        }),
                        (u.radius = function(t) {
                            return arguments.length
                                ? ((r = 'function' == typeof t ? t : Wf(+t)), u)
                                : r
                        }),
                        (u.precision = function(t) {
                            return arguments.length
                                ? ((i = 'function' == typeof t ? t : Wf(+t)), u)
                                : i
                        }),
                        u
                    )
                },
                us = function() {
                    var t,
                        n = []
                    return {
                        point: function(n, e) {
                            t.push([n, e])
                        },
                        lineStart: function() {
                            n.push((t = []))
                        },
                        lineEnd: Ec,
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
                var o,
                    u,
                    a = [],
                    c = []
                if (
                    (t.forEach(function(t) {
                        if (!((n = t.length - 1) <= 0)) {
                            var n,
                                e,
                                r = t[0],
                                u = t[n]
                            if (as(r, u)) {
                                for (i.lineStart(), o = 0; o < n; ++o)
                                    i.point((r = t[o])[0], r[1])
                                i.lineEnd()
                            } else
                                a.push((e = new cs(r, t, null, !0))),
                                    c.push((e.o = new cs(r, null, e, !1))),
                                    a.push((e = new cs(u, t, null, !1))),
                                    c.push((e.o = new cs(u, null, e, !0)))
                        }
                    }),
                    a.length)
                ) {
                    for (
                        c.sort(n), ss(a), ss(c), o = 0, u = c.length;
                        o < u;
                        ++o
                    )
                        c[o].e = e = !e
                    for (var f, s, l = a[0]; ; ) {
                        for (var h = l, d = !0; h.v; )
                            if ((h = h.n) === l) return
                        ;(f = h.z), i.lineStart()
                        do {
                            if (((h.v = h.o.v = !0), h.e)) {
                                if (d)
                                    for (o = 0, u = f.length; o < u; ++o)
                                        i.point((s = f[o])[0], s[1])
                                else r(h.x, h.n.x, 1, i)
                                h = h.n
                            } else {
                                if (d)
                                    for (
                                        f = h.p.z, o = f.length - 1;
                                        o >= 0;
                                        --o
                                    )
                                        i.point((s = f[o])[0], s[1])
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
            var ls = Qa(),
                hs = function(t, n) {
                    var e = n[0],
                        r = n[1],
                        i = yc(r),
                        o = [yc(e), -hc(e), 0],
                        u = 0,
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
                                    p = h[1] / 2 + oc,
                                    v = yc(p),
                                    g = hc(p),
                                    y = 0;
                                y < l;
                                ++y, d = m, v = x, g = w, h = b
                            ) {
                                var b = s[y],
                                    m = b[0],
                                    _ = b[1] / 2 + oc,
                                    x = yc(_),
                                    w = hc(_),
                                    M = m - d,
                                    E = M >= 0 ? 1 : -1,
                                    N = E * M,
                                    A = N > rc,
                                    T = v * x
                                if (
                                    (ls.add(
                                        lc(T * E * yc(N), g * w + T * hc(N)),
                                    ),
                                    (u += A ? M + E * uc : M),
                                    A ^ (d >= e) ^ (m >= e))
                                ) {
                                    var S = Xc(Hc(h), Hc(b))
                                    Zc(S)
                                    var k = Xc(o, S)
                                    Zc(k)
                                    var C = (A ^ (M >= 0) ? -1 : 1) * wc(k[2])
                                    ;(r > C || (r === C && (S[0] || S[1]))) &&
                                        (a += A ^ (M >= 0) ? 1 : -1)
                                }
                            }
                    return (u < -ec || (u < ec && ls < -ec)) ^ (1 & a)
                },
                ds = function(t, n, e, r) {
                    return function(i) {
                        var o,
                            u,
                            a,
                            c = n(i),
                            f = us(),
                            s = n(f),
                            l = !1,
                            h = {
                                point: d,
                                lineStart: v,
                                lineEnd: g,
                                polygonStart: function() {
                                    ;(h.point = y),
                                        (h.lineStart = b),
                                        (h.lineEnd = m),
                                        (u = []),
                                        (o = [])
                                },
                                polygonEnd: function() {
                                    ;(h.point = d),
                                        (h.lineStart = v),
                                        (h.lineEnd = g),
                                        (u = L(u))
                                    var t = hs(o, r)
                                    u.length
                                        ? (l || (i.polygonStart(), (l = !0)),
                                          fs(u, vs, t, e, i))
                                        : t &&
                                          (l || (i.polygonStart(), (l = !0)),
                                          i.lineStart(),
                                          e(null, null, 1, i),
                                          i.lineEnd()),
                                        l && (i.polygonEnd(), (l = !1)),
                                        (u = o = null)
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
                        function g() {
                            ;(h.point = d), c.lineEnd()
                        }
                        function y(t, n) {
                            a.push([t, n]), s.point(t, n)
                        }
                        function b() {
                            s.lineStart(), (a = [])
                        }
                        function m() {
                            y(a[0][0], a[0][1]), s.lineEnd()
                            var t,
                                n,
                                e,
                                r,
                                c = s.clean(),
                                h = f.result(),
                                d = h.length
                            if ((a.pop(), o.push(a), (a = null), d))
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
                                        u.push(h.filter(ps))
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
            var gs = ds(
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
                        point: function(o, u) {
                            var a = o > 0 ? rc : -rc,
                                c = fc(o - e)
                            fc(c - rc) < ec
                                ? (t.point(e, (r = (r + u) / 2 > 0 ? ic : -ic)),
                                  t.point(i, r),
                                  t.lineEnd(),
                                  t.lineStart(),
                                  t.point(a, r),
                                  t.point(o, r),
                                  (n = 0))
                                : i !== a &&
                                  c >= rc &&
                                  (fc(e - i) < ec && (e -= i * ec),
                                  fc(o - a) < ec && (o -= a * ec),
                                  (r = (function(t, n, e, r) {
                                      var i,
                                          o,
                                          u = yc(t - e)
                                      return fc(u) > ec
                                          ? sc(
                                                (yc(n) * (o = hc(r)) * yc(e) -
                                                    yc(r) *
                                                        (i = hc(n)) *
                                                        yc(t)) /
                                                    (i * o * u),
                                            )
                                          : (n + r) / 2
                                  })(e, r, o, u)),
                                  t.point(i, r),
                                  t.lineEnd(),
                                  t.lineStart(),
                                  t.point(a, r),
                                  (n = 0)),
                                t.point((e = o), (r = u)),
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
                        var o = t[0] < n[0] ? rc : -rc
                        ;(i = (e * o) / 2),
                            r.point(-o, i),
                            r.point(0, i),
                            r.point(o, i)
                    } else r.point(n[0], n[1])
                },
                [-rc, -ic],
            )
            var ys = function(t) {
                    var n = hc(t),
                        e = 6 * cc,
                        r = n > 0,
                        i = fc(n) > ec
                    function o(t, e) {
                        return hc(t) * hc(e) > n
                    }
                    function u(t, e, r) {
                        var i = [1, 0, 0],
                            o = Xc(Hc(t), Hc(e)),
                            u = Gc(o, o),
                            a = o[0],
                            c = u - a * a
                        if (!c) return !r && t
                        var f = (n * u) / c,
                            s = (-n * a) / c,
                            l = Xc(i, o),
                            h = Wc(i, f)
                        Vc(h, Wc(o, s))
                        var d = l,
                            p = Gc(h, d),
                            v = Gc(d, d),
                            g = p * p - v * (Gc(h, h) - 1)
                        if (!(g < 0)) {
                            var y = mc(g),
                                b = Wc(d, (-p - y) / v)
                            if ((Vc(b, h), (b = $c(b)), !r)) return b
                            var m,
                                _ = t[0],
                                x = e[0],
                                w = t[1],
                                M = e[1]
                            x < _ && ((m = _), (_ = x), (x = m))
                            var E = x - _,
                                N = fc(E - rc) < ec
                            if (
                                (!N && M < w && ((m = w), (w = M), (M = m)),
                                N || E < ec
                                    ? N
                                        ? (w + M > 0) ^
                                          (b[1] < (fc(b[0] - _) < ec ? w : M))
                                        : w <= b[1] && b[1] <= M
                                    : (E > rc) ^ (_ <= b[0] && b[0] <= x))
                            ) {
                                var A = Wc(d, (-p + y) / v)
                                return Vc(A, h), [b, $c(A)]
                            }
                        }
                    }
                    function a(n, e) {
                        var i = r ? t : rc - t,
                            o = 0
                        return (
                            n < -i ? (o |= 1) : n > i && (o |= 2),
                            e < -i ? (o |= 4) : e > i && (o |= 8),
                            o
                        )
                    }
                    return ds(
                        o,
                        function(t) {
                            var n, e, c, f, s
                            return {
                                lineStart: function() {
                                    ;(f = c = !1), (s = 1)
                                },
                                point: function(l, h) {
                                    var d,
                                        p = [l, h],
                                        v = o(l, h),
                                        g = r
                                            ? v
                                                ? 0
                                                : a(l, h)
                                            : v
                                            ? a(l + (l < 0 ? rc : -rc), h)
                                            : 0
                                    if (
                                        (!n && (f = c = v) && t.lineStart(),
                                        v !== c &&
                                            (!(d = u(n, p)) ||
                                                as(n, d) ||
                                                as(p, d)) &&
                                            ((p[0] += ec),
                                            (p[1] += ec),
                                            (v = o(p[0], p[1]))),
                                        v !== c)
                                    )
                                        (s = 0),
                                            v
                                                ? (t.lineStart(),
                                                  (d = u(p, n)),
                                                  t.point(d[0], d[1]))
                                                : ((d = u(n, p)),
                                                  t.point(d[0], d[1]),
                                                  t.lineEnd()),
                                            (n = d)
                                    else if (i && n && r ^ v) {
                                        var y
                                        g & e ||
                                            !(y = u(p, n, !0)) ||
                                            ((s = 0),
                                            r
                                                ? (t.lineStart(),
                                                  t.point(y[0][0], y[0][1]),
                                                  t.point(y[1][0], y[1][1]),
                                                  t.lineEnd())
                                                : (t.point(y[1][0], y[1][1]),
                                                  t.lineEnd(),
                                                  t.lineStart(),
                                                  t.point(y[0][0], y[0][1])))
                                    }
                                    !v ||
                                        (n && as(n, p)) ||
                                        t.point(p[0], p[1]),
                                        (n = p),
                                        (c = v),
                                        (e = g)
                                },
                                lineEnd: function() {
                                    c && t.lineEnd(), (n = null)
                                },
                                clean: function() {
                                    return s | ((f && c) << 1)
                                },
                            }
                        },
                        function(n, r, i, o) {
                            rs(o, t, e, i, n, r)
                        },
                        r ? [0, -t] : [-rc, t - rc],
                    )
                },
                bs = function(t, n, e, r, i, o) {
                    var u,
                        a = t[0],
                        c = t[1],
                        f = 0,
                        s = 1,
                        l = n[0] - a,
                        h = n[1] - c
                    if (((u = e - a), l || !(u > 0))) {
                        if (((u /= l), l < 0)) {
                            if (u < f) return
                            u < s && (s = u)
                        } else if (l > 0) {
                            if (u > s) return
                            u > f && (f = u)
                        }
                        if (((u = i - a), l || !(u < 0))) {
                            if (((u /= l), l < 0)) {
                                if (u > s) return
                                u > f && (f = u)
                            } else if (l > 0) {
                                if (u < f) return
                                u < s && (s = u)
                            }
                            if (((u = r - c), h || !(u > 0))) {
                                if (((u /= h), h < 0)) {
                                    if (u < f) return
                                    u < s && (s = u)
                                } else if (h > 0) {
                                    if (u > s) return
                                    u > f && (f = u)
                                }
                                if (((u = o - c), h || !(u < 0))) {
                                    if (((u /= h), h < 0)) {
                                        if (u > s) return
                                        u > f && (f = u)
                                    } else if (h > 0) {
                                        if (u < f) return
                                        u < s && (s = u)
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
                ms = 1e9,
                _s = -ms
            function xs(t, n, e, r) {
                function i(i, o) {
                    return t <= i && i <= e && n <= o && o <= r
                }
                function o(i, o, a, f) {
                    var s = 0,
                        l = 0
                    if (
                        null == i ||
                        (s = u(i, a)) !== (l = u(o, a)) ||
                        (c(i, o) < 0) ^ (a > 0)
                    )
                        do {
                            f.point(0 === s || 3 === s ? t : e, s > 1 ? r : n)
                        } while ((s = (s + a + 4) % 4) !== l)
                    else f.point(o[0], o[1])
                }
                function u(r, i) {
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
                    var e = u(t, 1),
                        r = u(n, 1)
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
                return function(u) {
                    var c,
                        f,
                        s,
                        l,
                        h,
                        d,
                        p,
                        v,
                        g,
                        y,
                        b,
                        m = u,
                        _ = us(),
                        x = {
                            point: w,
                            lineStart: function() {
                                ;(x.point = M), f && f.push((s = []))
                                ;(y = !0), (g = !1), (p = v = NaN)
                            },
                            lineEnd: function() {
                                c &&
                                    (M(l, h),
                                    d && g && _.rejoin(),
                                    c.push(_.result()))
                                ;(x.point = w), g && m.lineEnd()
                            },
                            polygonStart: function() {
                                ;(m = _), (c = []), (f = []), (b = !0)
                            },
                            polygonEnd: function() {
                                var n = (function() {
                                        for (
                                            var n = 0, e = 0, i = f.length;
                                            e < i;
                                            ++e
                                        )
                                            for (
                                                var o,
                                                    u,
                                                    a = f[e],
                                                    c = 1,
                                                    s = a.length,
                                                    l = a[0],
                                                    h = l[0],
                                                    d = l[1];
                                                c < s;
                                                ++c
                                            )
                                                (o = h),
                                                    (u = d),
                                                    (l = a[c]),
                                                    (h = l[0]),
                                                    (d = l[1]),
                                                    u <= r
                                                        ? d > r &&
                                                          (h - o) * (r - u) >
                                                              (d - u) *
                                                                  (t - o) &&
                                                          ++n
                                                        : d <= r &&
                                                          (h - o) * (r - u) <
                                                              (d - u) *
                                                                  (t - o) &&
                                                          --n
                                        return n
                                    })(),
                                    e = b && n,
                                    i = (c = L(c)).length
                                ;(e || i) &&
                                    (u.polygonStart(),
                                    e &&
                                        (u.lineStart(),
                                        o(null, null, 1, u),
                                        u.lineEnd()),
                                    i && fs(c, a, n, o, u),
                                    u.polygonEnd())
                                ;(m = u), (c = f = s = null)
                            },
                        }
                    function w(t, n) {
                        i(t, n) && m.point(t, n)
                    }
                    function M(o, u) {
                        var a = i(o, u)
                        if ((f && s.push([o, u]), y))
                            (l = o),
                                (h = u),
                                (d = a),
                                (y = !1),
                                a && (m.lineStart(), m.point(o, u))
                        else if (a && g) m.point(o, u)
                        else {
                            var c = [
                                    (p = Math.max(_s, Math.min(ms, p))),
                                    (v = Math.max(_s, Math.min(ms, v))),
                                ],
                                _ = [
                                    (o = Math.max(_s, Math.min(ms, o))),
                                    (u = Math.max(_s, Math.min(ms, u))),
                                ]
                            bs(c, _, t, n, e, r)
                                ? (g || (m.lineStart(), m.point(c[0], c[1])),
                                  m.point(_[0], _[1]),
                                  a || m.lineEnd(),
                                  (b = !1))
                                : a && (m.lineStart(), m.point(o, u), (b = !1))
                        }
                        ;(p = o), (v = u), (g = a)
                    }
                    return x
                }
            }
            var ws,
                Ms,
                Es,
                Ns = function() {
                    var t,
                        n,
                        e,
                        r = 0,
                        i = 0,
                        o = 960,
                        u = 500
                    return (e = {
                        stream: function(e) {
                            return t && n === e
                                ? t
                                : (t = xs(r, i, o, u)((n = e)))
                        },
                        extent: function(a) {
                            return arguments.length
                                ? ((r = +a[0][0]),
                                  (i = +a[0][1]),
                                  (o = +a[1][0]),
                                  (u = +a[1][1]),
                                  (t = n = null),
                                  e)
                                : [[r, i], [o, u]]
                        },
                    })
                },
                As = Qa(),
                Ts = {
                    sphere: Ec,
                    point: Ec,
                    lineStart: function() {
                        ;(Ts.point = ks), (Ts.lineEnd = Ss)
                    },
                    lineEnd: Ec,
                    polygonStart: Ec,
                    polygonEnd: Ec,
                }
            function Ss() {
                Ts.point = Ts.lineEnd = Ec
            }
            function ks(t, n) {
                ;(ws = t *= cc),
                    (Ms = yc((n *= cc))),
                    (Es = hc(n)),
                    (Ts.point = Cs)
            }
            function Cs(t, n) {
                t *= cc
                var e = yc((n *= cc)),
                    r = hc(n),
                    i = fc(t - ws),
                    o = hc(i),
                    u = r * yc(i),
                    a = Es * e - Ms * r * o,
                    c = Ms * e + Es * r * o
                As.add(lc(mc(u * u + a * a), c)), (ws = t), (Ms = e), (Es = r)
            }
            var Ds = function(t) {
                    return As.reset(), Rc(t, Ts), +As
                },
                Ps = [null, null],
                Os = { type: 'LineString', coordinates: Ps },
                Is = function(t, n) {
                    return (Ps[0] = t), (Ps[1] = n), Ds(Os)
                },
                Rs = {
                    Feature: function(t, n) {
                        return Ls(t.geometry, n)
                    },
                    FeatureCollection: function(t, n) {
                        for (
                            var e = t.features, r = -1, i = e.length;
                            ++r < i;

                        )
                            if (Ls(e[r].geometry, n)) return !0
                        return !1
                    },
                },
                Fs = {
                    Sphere: function() {
                        return !0
                    },
                    Point: function(t, n) {
                        return zs(t.coordinates, n)
                    },
                    MultiPoint: function(t, n) {
                        for (
                            var e = t.coordinates, r = -1, i = e.length;
                            ++r < i;

                        )
                            if (zs(e[r], n)) return !0
                        return !1
                    },
                    LineString: function(t, n) {
                        return qs(t.coordinates, n)
                    },
                    MultiLineString: function(t, n) {
                        for (
                            var e = t.coordinates, r = -1, i = e.length;
                            ++r < i;

                        )
                            if (qs(e[r], n)) return !0
                        return !1
                    },
                    Polygon: function(t, n) {
                        return Us(t.coordinates, n)
                    },
                    MultiPolygon: function(t, n) {
                        for (
                            var e = t.coordinates, r = -1, i = e.length;
                            ++r < i;

                        )
                            if (Us(e[r], n)) return !0
                        return !1
                    },
                    GeometryCollection: function(t, n) {
                        for (
                            var e = t.geometries, r = -1, i = e.length;
                            ++r < i;

                        )
                            if (Ls(e[r], n)) return !0
                        return !1
                    },
                }
            function Ls(t, n) {
                return !(!t || !Fs.hasOwnProperty(t.type)) && Fs[t.type](t, n)
            }
            function zs(t, n) {
                return 0 === Is(t, n)
            }
            function qs(t, n) {
                var e = Is(t[0], t[1])
                return Is(t[0], n) + Is(n, t[1]) <= e + ec
            }
            function Us(t, n) {
                return !!hs(t.map(Bs), Ys(n))
            }
            function Bs(t) {
                return (t = t.map(Ys)).pop(), t
            }
            function Ys(t) {
                return [t[0] * cc, t[1] * cc]
            }
            var js = function(t, n) {
                return (t && Rs.hasOwnProperty(t.type) ? Rs[t.type] : Ls)(t, n)
            }
            function $s(t, n, e) {
                var r = w(t, n - ec, e).concat(n)
                return function(t) {
                    return r.map(function(n) {
                        return [t, n]
                    })
                }
            }
            function Hs(t, n, e) {
                var r = w(t, n - ec, e).concat(n)
                return function(t) {
                    return r.map(function(n) {
                        return [n, t]
                    })
                }
            }
            function Gs() {
                var t,
                    n,
                    e,
                    r,
                    i,
                    o,
                    u,
                    a,
                    c,
                    f,
                    s,
                    l,
                    h = 10,
                    d = h,
                    p = 90,
                    v = 360,
                    g = 2.5
                function y() {
                    return { type: 'MultiLineString', coordinates: b() }
                }
                function b() {
                    return w(dc(r / p) * p, e, p)
                        .map(s)
                        .concat(w(dc(a / v) * v, u, v).map(l))
                        .concat(
                            w(dc(n / h) * h, t, h)
                                .filter(function(t) {
                                    return fc(t % p) > ec
                                })
                                .map(c),
                        )
                        .concat(
                            w(dc(o / d) * d, i, d)
                                .filter(function(t) {
                                    return fc(t % v) > ec
                                })
                                .map(f),
                        )
                }
                return (
                    (y.lines = function() {
                        return b().map(function(t) {
                            return { type: 'LineString', coordinates: t }
                        })
                    }),
                    (y.outline = function() {
                        return {
                            type: 'Polygon',
                            coordinates: [
                                s(r).concat(
                                    l(u).slice(1),
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
                    (y.extent = function(t) {
                        return arguments.length
                            ? y.extentMajor(t).extentMinor(t)
                            : y.extentMinor()
                    }),
                    (y.extentMajor = function(t) {
                        return arguments.length
                            ? ((r = +t[0][0]),
                              (e = +t[1][0]),
                              (a = +t[0][1]),
                              (u = +t[1][1]),
                              r > e && ((t = r), (r = e), (e = t)),
                              a > u && ((t = a), (a = u), (u = t)),
                              y.precision(g))
                            : [[r, a], [e, u]]
                    }),
                    (y.extentMinor = function(e) {
                        return arguments.length
                            ? ((n = +e[0][0]),
                              (t = +e[1][0]),
                              (o = +e[0][1]),
                              (i = +e[1][1]),
                              n > t && ((e = n), (n = t), (t = e)),
                              o > i && ((e = o), (o = i), (i = e)),
                              y.precision(g))
                            : [[n, o], [t, i]]
                    }),
                    (y.step = function(t) {
                        return arguments.length
                            ? y.stepMajor(t).stepMinor(t)
                            : y.stepMinor()
                    }),
                    (y.stepMajor = function(t) {
                        return arguments.length
                            ? ((p = +t[0]), (v = +t[1]), y)
                            : [p, v]
                    }),
                    (y.stepMinor = function(t) {
                        return arguments.length
                            ? ((h = +t[0]), (d = +t[1]), y)
                            : [h, d]
                    }),
                    (y.precision = function(h) {
                        return arguments.length
                            ? ((g = +h),
                              (c = $s(o, i, 90)),
                              (f = Hs(n, t, g)),
                              (s = $s(a, u, 90)),
                              (l = Hs(r, e, g)),
                              y)
                            : g
                    }),
                    y
                        .extentMajor([[-180, -90 + ec], [180, 90 - ec]])
                        .extentMinor([[-180, -80 - ec], [180, 80 + ec]])
                )
            }
            function Xs() {
                return Gs()()
            }
            var Vs,
                Ws,
                Zs,
                Ks,
                Qs = function(t, n) {
                    var e = t[0] * cc,
                        r = t[1] * cc,
                        i = n[0] * cc,
                        o = n[1] * cc,
                        u = hc(r),
                        a = yc(r),
                        c = hc(o),
                        f = yc(o),
                        s = u * hc(e),
                        l = u * yc(e),
                        h = c * hc(i),
                        d = c * yc(i),
                        p = 2 * wc(mc(Mc(o - r) + u * c * Mc(i - e))),
                        v = yc(p),
                        g = p
                            ? function(t) {
                                  var n = yc((t *= p)) / v,
                                      e = yc(p - t) / v,
                                      r = e * s + n * h,
                                      i = e * l + n * d,
                                      o = e * a + n * f
                                  return [
                                      lc(i, r) * ac,
                                      lc(o, mc(r * r + i * i)) * ac,
                                  ]
                              }
                            : function() {
                                  return [e * ac, r * ac]
                              }
                    return (g.distance = p), g
                },
                Js = function(t) {
                    return t
                },
                tl = Qa(),
                nl = Qa(),
                el = {
                    point: Ec,
                    lineStart: Ec,
                    lineEnd: Ec,
                    polygonStart: function() {
                        ;(el.lineStart = rl), (el.lineEnd = ul)
                    },
                    polygonEnd: function() {
                        ;(el.lineStart = el.lineEnd = el.point = Ec),
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
                ;(el.point = ol), (Vs = Zs = t), (Ws = Ks = n)
            }
            function ol(t, n) {
                nl.add(Ks * t - Zs * n), (Zs = t), (Ks = n)
            }
            function ul() {
                ol(Vs, Ws)
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
                gl = {
                    point: function(t, n) {
                        t < cl && (cl = t)
                        t > sl && (sl = t)
                        n < fl && (fl = n)
                        n > ll && (ll = n)
                    },
                    lineStart: Ec,
                    lineEnd: Ec,
                    polygonStart: Ec,
                    polygonEnd: Ec,
                    result: function() {
                        var t = [[cl, fl], [sl, ll]]
                        return (sl = ll = -(fl = cl = 1 / 0)), t
                    },
                },
                yl = 0,
                bl = 0,
                ml = 0,
                _l = 0,
                xl = 0,
                wl = 0,
                Ml = 0,
                El = 0,
                Nl = 0,
                Al = {
                    point: Tl,
                    lineStart: Sl,
                    lineEnd: Dl,
                    polygonStart: function() {
                        ;(Al.lineStart = Pl), (Al.lineEnd = Ol)
                    },
                    polygonEnd: function() {
                        ;(Al.point = Tl), (Al.lineStart = Sl), (Al.lineEnd = Dl)
                    },
                    result: function() {
                        var t = Nl
                            ? [Ml / Nl, El / Nl]
                            : wl
                            ? [_l / wl, xl / wl]
                            : ml
                            ? [yl / ml, bl / ml]
                            : [NaN, NaN]
                        return (
                            (yl = bl = ml = _l = xl = wl = Ml = El = Nl = 0), t
                        )
                    },
                }
            function Tl(t, n) {
                ;(yl += t), (bl += n), ++ml
            }
            function Sl() {
                Al.point = kl
            }
            function kl(t, n) {
                ;(Al.point = Cl), Tl((pl = t), (vl = n))
            }
            function Cl(t, n) {
                var e = t - pl,
                    r = n - vl,
                    i = mc(e * e + r * r)
                ;(_l += (i * (pl + t)) / 2),
                    (xl += (i * (vl + n)) / 2),
                    (wl += i),
                    Tl((pl = t), (vl = n))
            }
            function Dl() {
                Al.point = Tl
            }
            function Pl() {
                Al.point = Il
            }
            function Ol() {
                Rl(hl, dl)
            }
            function Il(t, n) {
                ;(Al.point = Rl), Tl((hl = pl = t), (dl = vl = n))
            }
            function Rl(t, n) {
                var e = t - pl,
                    r = n - vl,
                    i = mc(e * e + r * r)
                ;(_l += (i * (pl + t)) / 2),
                    (xl += (i * (vl + n)) / 2),
                    (wl += i),
                    (Ml += (i = vl * t - pl * n) * (pl + t)),
                    (El += i * (vl + n)),
                    (Nl += 3 * i),
                    Tl((pl = t), (vl = n))
            }
            var Fl = Al
            function Ll(t) {
                this._context = t
            }
            Ll.prototype = {
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
                                this._context.arc(t, n, this._radius, 0, uc)
                    }
                },
                result: Ec,
            }
            var zl,
                ql,
                Ul,
                Bl,
                Yl,
                jl = Qa(),
                $l = {
                    point: Ec,
                    lineStart: function() {
                        $l.point = Hl
                    },
                    lineEnd: function() {
                        zl && Gl(ql, Ul), ($l.point = Ec)
                    },
                    polygonStart: function() {
                        zl = !0
                    },
                    polygonEnd: function() {
                        zl = null
                    },
                    result: function() {
                        var t = +jl
                        return jl.reset(), t
                    },
                }
            function Hl(t, n) {
                ;($l.point = Gl), (ql = Bl = t), (Ul = Yl = n)
            }
            function Gl(t, n) {
                ;(Bl -= t),
                    (Yl -= n),
                    jl.add(mc(Bl * Bl + Yl * Yl)),
                    (Bl = t),
                    (Yl = n)
            }
            var Xl = $l
            function Vl() {
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
            Vl.prototype = {
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
                    function o(t) {
                        return (
                            t &&
                                ('function' == typeof i &&
                                    r.pointRadius(+i.apply(this, arguments)),
                                Rc(t, e(r))),
                            r.result()
                        )
                    }
                    return (
                        (o.area = function(t) {
                            return Rc(t, e(al)), al.result()
                        }),
                        (o.measure = function(t) {
                            return Rc(t, e(Xl)), Xl.result()
                        }),
                        (o.bounds = function(t) {
                            return Rc(t, e(gl)), gl.result()
                        }),
                        (o.centroid = function(t) {
                            return Rc(t, e(Fl)), Fl.result()
                        }),
                        (o.projection = function(n) {
                            return arguments.length
                                ? ((e =
                                      null == n
                                          ? ((t = null), Js)
                                          : (t = n).stream),
                                  o)
                                : t
                        }),
                        (o.context = function(t) {
                            return arguments.length
                                ? ((r =
                                      null == t
                                          ? ((n = null), new Vl())
                                          : new Ll((n = t))),
                                  'function' != typeof i && r.pointRadius(i),
                                  o)
                                : n
                        }),
                        (o.pointRadius = function(t) {
                            return arguments.length
                                ? ((i =
                                      'function' == typeof t
                                          ? t
                                          : (r.pointRadius(+t), +t)),
                                  o)
                                : i
                        }),
                        o.projection(t).context(n)
                    )
                },
                Kl = function(t) {
                    return { stream: Ql(t) }
                }
            function Ql(t) {
                return function(n) {
                    var e = new Jl()
                    for (var r in t) e[r] = t[r]
                    return (e.stream = n), e
                }
            }
            function Jl() {}
            function th(t, n, e) {
                var r = t.clipExtent && t.clipExtent()
                return (
                    t.scale(150).translate([0, 0]),
                    null != r && t.clipExtent(null),
                    Rc(e, t.stream(gl)),
                    n(gl.result()),
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
                            o = Math.min(
                                r / (e[1][0] - e[0][0]),
                                i / (e[1][1] - e[0][1]),
                            ),
                            u = +n[0][0] + (r - o * (e[1][0] + e[0][0])) / 2,
                            a = +n[0][1] + (i - o * (e[1][1] + e[0][1])) / 2
                        t.scale(150 * o).translate([u, a])
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
                            o = (r - i * (e[1][0] + e[0][0])) / 2,
                            u = -i * e[0][1]
                        t.scale(150 * i).translate([o, u])
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
                            o = -i * e[0][0],
                            u = (r - i * (e[1][1] + e[0][1])) / 2
                        t.scale(150 * i).translate([o, u])
                    },
                    e,
                )
            }
            Jl.prototype = {
                constructor: Jl,
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
            var oh = 16,
                uh = hc(30 * cc),
                ah = function(t, n) {
                    return +n
                        ? (function(t, n) {
                              function e(
                                  r,
                                  i,
                                  o,
                                  u,
                                  a,
                                  c,
                                  f,
                                  s,
                                  l,
                                  h,
                                  d,
                                  p,
                                  v,
                                  g,
                              ) {
                                  var y = f - r,
                                      b = s - i,
                                      m = y * y + b * b
                                  if (m > 4 * n && v--) {
                                      var _ = u + h,
                                          x = a + d,
                                          w = c + p,
                                          M = mc(_ * _ + x * x + w * w),
                                          E = wc((w /= M)),
                                          N =
                                              fc(fc(w) - 1) < ec ||
                                              fc(o - l) < ec
                                                  ? (o + l) / 2
                                                  : lc(x, _),
                                          A = t(N, E),
                                          T = A[0],
                                          S = A[1],
                                          k = T - r,
                                          C = S - i,
                                          D = b * k - y * C
                                      ;((D * D) / m > n ||
                                          fc((y * k + b * C) / m - 0.5) > 0.3 ||
                                          u * h + a * d + c * p < uh) &&
                                          (e(
                                              r,
                                              i,
                                              o,
                                              u,
                                              a,
                                              c,
                                              T,
                                              S,
                                              N,
                                              (_ /= M),
                                              (x /= M),
                                              w,
                                              v,
                                              g,
                                          ),
                                          g.point(T, S),
                                          e(
                                              T,
                                              S,
                                              N,
                                              _,
                                              x,
                                              w,
                                              f,
                                              s,
                                              l,
                                              h,
                                              d,
                                              p,
                                              v,
                                              g,
                                          ))
                                  }
                              }
                              return function(n) {
                                  var r,
                                      i,
                                      o,
                                      u,
                                      a,
                                      c,
                                      f,
                                      s,
                                      l,
                                      h,
                                      d,
                                      p,
                                      v = {
                                          point: g,
                                          lineStart: y,
                                          lineEnd: m,
                                          polygonStart: function() {
                                              n.polygonStart(),
                                                  (v.lineStart = _)
                                          },
                                          polygonEnd: function() {
                                              n.polygonEnd(), (v.lineStart = y)
                                          },
                                      }
                                  function g(e, r) {
                                      ;(e = t(e, r)), n.point(e[0], e[1])
                                  }
                                  function y() {
                                      ;(s = NaN), (v.point = b), n.lineStart()
                                  }
                                  function b(r, i) {
                                      var o = Hc([r, i]),
                                          u = t(r, i)
                                      e(
                                          s,
                                          l,
                                          f,
                                          h,
                                          d,
                                          p,
                                          (s = u[0]),
                                          (l = u[1]),
                                          (f = r),
                                          (h = o[0]),
                                          (d = o[1]),
                                          (p = o[2]),
                                          oh,
                                          n,
                                      ),
                                          n.point(s, l)
                                  }
                                  function m() {
                                      ;(v.point = g), n.lineEnd()
                                  }
                                  function _() {
                                      y(), (v.point = x), (v.lineEnd = w)
                                  }
                                  function x(t, n) {
                                      b((r = t), n),
                                          (i = s),
                                          (o = l),
                                          (u = h),
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
                                          o,
                                          r,
                                          u,
                                          a,
                                          c,
                                          oh,
                                          n,
                                      ),
                                          (v.lineEnd = m),
                                          m()
                                  }
                                  return v
                              }
                          })(t, n)
                        : (function(t) {
                              return Ql({
                                  point: function(n, e) {
                                      ;(n = t(n, e)),
                                          this.stream.point(n[0], n[1])
                                  },
                              })
                          })(t)
                }
            var ch = Ql({
                point: function(t, n) {
                    this.stream.point(t * cc, n * cc)
                },
            })
            function fh(t, n, e, r) {
                var i = hc(r),
                    o = yc(r),
                    u = i * t,
                    a = o * t,
                    c = i / t,
                    f = o / t,
                    s = (o * e - i * n) / t,
                    l = (o * n + i * e) / t
                function h(t, r) {
                    return [u * t - a * r + n, e - a * t - u * r]
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
                    o,
                    u,
                    a,
                    c,
                    f,
                    s,
                    l = 150,
                    h = 480,
                    d = 250,
                    p = 0,
                    v = 0,
                    g = 0,
                    y = 0,
                    b = 0,
                    m = 0,
                    _ = null,
                    x = gs,
                    w = null,
                    M = Js,
                    E = 0.5
                function N(t) {
                    return c(t[0] * cc, t[1] * cc)
                }
                function A(t) {
                    return (t = c.invert(t[0], t[1])) && [t[0] * ac, t[1] * ac]
                }
                function T() {
                    var t = fh(l, 0, 0, m).apply(null, n(p, v)),
                        r = (m
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
                              })(l, h - t[0], d - t[1], m)
                    return (
                        (e = Qf(g, y, b)),
                        (a = Zf(n, r)),
                        (c = Zf(e, a)),
                        (u = ah(a, E)),
                        S()
                    )
                }
                function S() {
                    return (f = s = null), N
                }
                return (
                    (N.stream = function(t) {
                        return f && s === t
                            ? f
                            : (f = ch(
                                  (function(t) {
                                      return Ql({
                                          point: function(n, e) {
                                              var r = t(n, e)
                                              return this.stream.point(
                                                  r[0],
                                                  r[1],
                                              )
                                          },
                                      })
                                  })(e)(x(u(M((s = t))))),
                              ))
                    }),
                    (N.preclip = function(t) {
                        return arguments.length
                            ? ((x = t), (_ = void 0), S())
                            : x
                    }),
                    (N.postclip = function(t) {
                        return arguments.length
                            ? ((M = t), (w = r = i = o = null), S())
                            : M
                    }),
                    (N.clipAngle = function(t) {
                        return arguments.length
                            ? ((x = +t ? ys((_ = t * cc)) : ((_ = null), gs)),
                              S())
                            : _ * ac
                    }),
                    (N.clipExtent = function(t) {
                        return arguments.length
                            ? ((M =
                                  null == t
                                      ? ((w = r = i = o = null), Js)
                                      : xs(
                                            (w = +t[0][0]),
                                            (r = +t[0][1]),
                                            (i = +t[1][0]),
                                            (o = +t[1][1]),
                                        )),
                              S())
                            : null == w
                            ? null
                            : [[w, r], [i, o]]
                    }),
                    (N.scale = function(t) {
                        return arguments.length ? ((l = +t), T()) : l
                    }),
                    (N.translate = function(t) {
                        return arguments.length
                            ? ((h = +t[0]), (d = +t[1]), T())
                            : [h, d]
                    }),
                    (N.center = function(t) {
                        return arguments.length
                            ? ((p = (t[0] % 360) * cc),
                              (v = (t[1] % 360) * cc),
                              T())
                            : [p * ac, v * ac]
                    }),
                    (N.rotate = function(t) {
                        return arguments.length
                            ? ((g = (t[0] % 360) * cc),
                              (y = (t[1] % 360) * cc),
                              (b = t.length > 2 ? (t[2] % 360) * cc : 0),
                              T())
                            : [g * ac, y * ac, b * ac]
                    }),
                    (N.angle = function(t) {
                        return arguments.length
                            ? ((m = (t % 360) * cc), T())
                            : m * ac
                    }),
                    (N.precision = function(t) {
                        return arguments.length
                            ? ((u = ah(a, (E = t * t))), S())
                            : mc(E)
                    }),
                    (N.fitExtent = function(t, n) {
                        return nh(N, t, n)
                    }),
                    (N.fitSize = function(t, n) {
                        return eh(N, t, n)
                    }),
                    (N.fitWidth = function(t, n) {
                        return rh(N, t, n)
                    }),
                    (N.fitHeight = function(t, n) {
                        return ih(N, t, n)
                    }),
                    function() {
                        return (
                            (n = t.apply(this, arguments)),
                            (N.invert = n.invert && A),
                            T()
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
                var e = yc(t),
                    r = (e + yc(n)) / 2
                if (fc(r) < ec)
                    return (function(t) {
                        var n = hc(t)
                        function e(t, e) {
                            return [t * n, yc(e) / n]
                        }
                        return (
                            (e.invert = function(t, e) {
                                return [t / n, wc(e * n)]
                            }),
                            e
                        )
                    })(t)
                var i = 1 + e * (2 * r - e),
                    o = mc(i) / r
                function u(t, n) {
                    var e = mc(i - 2 * r * yc(n)) / r
                    return [e * yc((t *= r)), o - e * hc(t)]
                }
                return (
                    (u.invert = function(t, n) {
                        var e = o - n
                        return [
                            (lc(t, fc(e)) / r) * bc(e),
                            wc((i - (t * t + e * e) * r * r) / (2 * r)),
                        ]
                    }),
                    u
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
            var gh = function() {
                var t,
                    n,
                    e,
                    r,
                    i,
                    o,
                    u = vh(),
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
                            o = [t, n]
                        },
                    }
                function s(t) {
                    var n = t[0],
                        u = t[1]
                    return (
                        (o = null),
                        e.point(n, u),
                        o || (r.point(n, u), o) || (i.point(n, u), o)
                    )
                }
                function l() {
                    return (t = n = null), s
                }
                return (
                    (s.invert = function(t) {
                        var n = u.scale(),
                            e = u.translate(),
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
                            : u
                        ).invert(t)
                    }),
                    (s.stream = function(e) {
                        return t && n === e
                            ? t
                            : ((r = [
                                  u.stream((n = e)),
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
                            ? (u.precision(t),
                              a.precision(t),
                              c.precision(t),
                              l())
                            : u.precision()
                    }),
                    (s.scale = function(t) {
                        return arguments.length
                            ? (u.scale(t),
                              a.scale(0.35 * t),
                              c.scale(t),
                              s.translate(u.translate()))
                            : u.scale()
                    }),
                    (s.translate = function(t) {
                        if (!arguments.length) return u.translate()
                        var n = u.scale(),
                            o = +t[0],
                            s = +t[1]
                        return (
                            (e = u
                                .translate(t)
                                .clipExtent([
                                    [o - 0.455 * n, s - 0.238 * n],
                                    [o + 0.455 * n, s + 0.238 * n],
                                ])
                                .stream(f)),
                            (r = a
                                .translate([o - 0.307 * n, s + 0.201 * n])
                                .clipExtent([
                                    [o - 0.425 * n + ec, s + 0.12 * n + ec],
                                    [o - 0.214 * n - ec, s + 0.234 * n - ec],
                                ])
                                .stream(f)),
                            (i = c
                                .translate([o - 0.205 * n, s + 0.212 * n])
                                .clipExtent([
                                    [o - 0.214 * n + ec, s + 0.166 * n + ec],
                                    [o - 0.115 * n - ec, s + 0.234 * n - ec],
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
            function yh(t) {
                return function(n, e) {
                    var r = hc(n),
                        i = hc(e),
                        o = t(r * i)
                    return [o * i * yc(n), o * yc(e)]
                }
            }
            function bh(t) {
                return function(n, e) {
                    var r = mc(n * n + e * e),
                        i = t(r),
                        o = yc(i),
                        u = hc(i)
                    return [lc(n * o, r * u), wc(r && (e * o) / r)]
                }
            }
            var mh = yh(function(t) {
                return mc(2 / (1 + t))
            })
            mh.invert = bh(function(t) {
                return 2 * wc(t / 2)
            })
            var _h = function() {
                    return sh(mh)
                        .scale(124.75)
                        .clipAngle(179.999)
                },
                xh = yh(function(t) {
                    return (t = xc(t)) && t / yc(t)
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
                return [t, vc(_c((ic + n) / 2))]
            }
            Mh.invert = function(t, n) {
                return [t, 2 * sc(pc(n)) - ic]
            }
            var Eh = function() {
                return Nh(Mh).scale(961 / uc)
            }
            function Nh(t) {
                var n,
                    e,
                    r,
                    i = sh(t),
                    o = i.center,
                    u = i.scale,
                    a = i.translate,
                    c = i.clipExtent,
                    f = null
                function s() {
                    var o = rc * u(),
                        a = i(es(i.rotate()).invert([0, 0]))
                    return c(
                        null == f
                            ? [[a[0] - o, a[1] - o], [a[0] + o, a[1] + o]]
                            : t === Mh
                            ? [
                                  [Math.max(a[0] - o, f), n],
                                  [Math.min(a[0] + o, e), r],
                              ]
                            : [
                                  [f, Math.max(a[1] - o, n)],
                                  [e, Math.min(a[1] + o, r)],
                              ],
                    )
                }
                return (
                    (i.scale = function(t) {
                        return arguments.length ? (u(t), s()) : u()
                    }),
                    (i.translate = function(t) {
                        return arguments.length ? (a(t), s()) : a()
                    }),
                    (i.center = function(t) {
                        return arguments.length ? (o(t), s()) : o()
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
            function Ah(t) {
                return _c((ic + t) / 2)
            }
            function Th(t, n) {
                var e = hc(t),
                    r = t === n ? yc(t) : vc(e / hc(n)) / vc(Ah(n) / Ah(t)),
                    i = (e * gc(Ah(t), r)) / r
                if (!r) return Mh
                function o(t, n) {
                    i > 0
                        ? n < -ic + ec && (n = -ic + ec)
                        : n > ic - ec && (n = ic - ec)
                    var e = i / gc(Ah(n), r)
                    return [e * yc(r * t), i - e * hc(r * t)]
                }
                return (
                    (o.invert = function(t, n) {
                        var e = i - n,
                            o = bc(r) * mc(t * t + e * e)
                        return [
                            (lc(t, fc(e)) / r) * bc(e),
                            2 * sc(gc(i / o, 1 / r)) - ic,
                        ]
                    }),
                    o
                )
            }
            var Sh = function() {
                return hh(Th)
                    .scale(109.5)
                    .parallels([30, 30])
            }
            function kh(t, n) {
                return [t, n]
            }
            kh.invert = kh
            var Ch = function() {
                return sh(kh).scale(152.63)
            }
            function Dh(t, n) {
                var e = hc(t),
                    r = t === n ? yc(t) : (e - hc(n)) / (n - t),
                    i = e / r + t
                if (fc(r) < ec) return kh
                function o(t, n) {
                    var e = i - n,
                        o = r * t
                    return [e * yc(o), i - e * hc(o)]
                }
                return (
                    (o.invert = function(t, n) {
                        var e = i - n
                        return [
                            (lc(t, fc(e)) / r) * bc(e),
                            i - bc(r) * mc(t * t + e * e),
                        ]
                    }),
                    o
                )
            }
            var Ph = function() {
                    return hh(Dh)
                        .scale(131.154)
                        .center([0, 13.9389])
                },
                Oh = 1.340264,
                Ih = -0.081106,
                Rh = 893e-6,
                Fh = 0.003796,
                Lh = mc(3) / 2
            function zh(t, n) {
                var e = wc(Lh * yc(n)),
                    r = e * e,
                    i = r * r * r
                return [
                    (t * hc(e)) /
                        (Lh * (Oh + 3 * Ih * r + i * (7 * Rh + 9 * Fh * r))),
                    e * (Oh + Ih * r + i * (Rh + Fh * r)),
                ]
            }
            zh.invert = function(t, n) {
                for (
                    var e, r = n, i = r * r, o = i * i * i, u = 0;
                    u < 12 &&
                    ((o =
                        (i =
                            (r -= e =
                                (r * (Oh + Ih * i + o * (Rh + Fh * i)) - n) /
                                (Oh + 3 * Ih * i + o * (7 * Rh + 9 * Fh * i))) *
                            r) *
                        i *
                        i),
                    !(fc(e) < 1e-12));
                    ++u
                );
                return [
                    (Lh * t * (Oh + 3 * Ih * i + o * (7 * Rh + 9 * Fh * i))) /
                        hc(r),
                    wc(yc(r) / Lh),
                ]
            }
            var qh = function() {
                return sh(zh).scale(177.158)
            }
            function Uh(t, n) {
                var e = hc(n),
                    r = hc(t) * e
                return [(e * yc(t)) / r, yc(n) / r]
            }
            Uh.invert = bh(sc)
            var Bh = function() {
                return sh(Uh)
                    .scale(144.049)
                    .clipAngle(60)
            }
            function Yh(t, n, e, r) {
                return 1 === t && 1 === n && 0 === e && 0 === r
                    ? Js
                    : Ql({
                          point: function(i, o) {
                              this.stream.point(i * t + e, o * n + r)
                          },
                      })
            }
            var jh = function() {
                var t,
                    n,
                    e,
                    r,
                    i,
                    o,
                    u = 1,
                    a = 0,
                    c = 0,
                    f = 1,
                    s = 1,
                    l = Js,
                    h = null,
                    d = Js
                function p() {
                    return (r = i = null), o
                }
                return (o = {
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
                                      ? ((h = t = n = e = null), Js)
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
                            ? ((l = Yh((u = +t) * f, u * s, a, c)), p())
                            : u
                    },
                    translate: function(t) {
                        return arguments.length
                            ? ((l = Yh(u * f, u * s, (a = +t[0]), (c = +t[1]))),
                              p())
                            : [a, c]
                    },
                    reflectX: function(t) {
                        return arguments.length
                            ? ((l = Yh(u * (f = t ? -1 : 1), u * s, a, c)), p())
                            : f < 0
                    },
                    reflectY: function(t) {
                        return arguments.length
                            ? ((l = Yh(u * f, u * (s = t ? -1 : 1), a, c)), p())
                            : s < 0
                    },
                    fitExtent: function(t, n) {
                        return nh(o, t, n)
                    },
                    fitSize: function(t, n) {
                        return eh(o, t, n)
                    },
                    fitWidth: function(t, n) {
                        return rh(o, t, n)
                    },
                    fitHeight: function(t, n) {
                        return ih(o, t, n)
                    },
                })
            }
            function $h(t, n) {
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
            $h.invert = function(t, n) {
                var e,
                    r = n,
                    i = 25
                do {
                    var o = r * r,
                        u = o * o
                    r -= e =
                        (r *
                            (1.007226 +
                                o *
                                    (0.015085 +
                                        u *
                                            (0.028874 * o -
                                                0.044475 -
                                                0.005916 * u))) -
                            n) /
                        (1.007226 +
                            o *
                                (0.045255 +
                                    u *
                                        (0.259866 * o -
                                            0.311325 -
                                            0.005916 * 11 * u)))
                } while (fc(e) > ec && --i > 0)
                return [
                    t /
                        (0.8707 +
                            (o = r * r) *
                                (o *
                                    (o * o * o * (0.003971 - 0.001529 * o) -
                                        0.013791) -
                                    0.131979)),
                    r,
                ]
            }
            var Hh = function() {
                return sh($h).scale(175.295)
            }
            function Gh(t, n) {
                return [hc(n) * yc(t), yc(n)]
            }
            Gh.invert = bh(wc)
            var Xh = function() {
                return sh(Gh)
                    .scale(249.5)
                    .clipAngle(90 + ec)
            }
            function Vh(t, n) {
                var e = hc(n),
                    r = 1 + hc(t) * e
                return [(e * yc(t)) / r, yc(n) / r]
            }
            Vh.invert = bh(function(t) {
                return 2 * sc(t)
            })
            var Wh = function() {
                return sh(Vh)
                    .scale(250)
                    .clipAngle(142)
            }
            function Zh(t, n) {
                return [vc(_c((ic + n) / 2)), -t]
            }
            Zh.invert = function(t, n) {
                return [-n, 2 * sc(pc(t)) - ic]
            }
            var Kh = function() {
                    var t = Nh(Zh),
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
                Qh = e(28),
                Jh = function(t) {
                    for (
                        var n, e = -1, r = t.length, i = t[r - 1], o = 0;
                        ++e < r;

                    )
                        (n = i), (i = t[e]), (o += n[1] * i[0] - n[0] * i[1])
                    return o / 2
                },
                td = function(t) {
                    for (
                        var n,
                            e,
                            r = -1,
                            i = t.length,
                            o = 0,
                            u = 0,
                            a = t[i - 1],
                            c = 0;
                        ++r < i;

                    )
                        (n = a),
                            (a = t[r]),
                            (c += e = n[0] * a[1] - a[0] * n[1]),
                            (o += (n[0] + a[0]) * e),
                            (u += (n[1] + a[1]) * e)
                    return [o / (c *= 3), u / c]
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
                    var o = rd(r),
                        u = rd(i),
                        a = u[0] === o[0],
                        c = u[u.length - 1] === o[o.length - 1],
                        f = []
                    for (n = o.length - 1; n >= 0; --n) f.push(t[r[o[n]][2]])
                    for (n = +a; n < u.length - c; ++n) f.push(t[r[u[n]][2]])
                    return f
                },
                od = function(t, n) {
                    for (
                        var e,
                            r,
                            i = t.length,
                            o = t[i - 1],
                            u = n[0],
                            a = n[1],
                            c = o[0],
                            f = o[1],
                            s = !1,
                            l = 0;
                        l < i;
                        ++l
                    )
                        (e = (o = t[l])[0]),
                            (r = o[1]) > a != f > a &&
                                u < ((c - e) * (a - r)) / (f - r) + e &&
                                (s = !s),
                            (c = e),
                            (f = r)
                    return s
                },
                ud = function(t) {
                    for (
                        var n,
                            e,
                            r = -1,
                            i = t.length,
                            o = t[i - 1],
                            u = o[0],
                            a = o[1],
                            c = 0;
                        ++r < i;

                    )
                        (n = u),
                            (e = a),
                            (n -= u = (o = t[r])[0]),
                            (e -= a = o[1]),
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
                                var o
                                if (null != r) (o = r), (r = null)
                                else
                                    do {
                                        ;(r = 2 * n() - 1),
                                            (o = 2 * n() - 1),
                                            (i = r * r + o * o)
                                    } while (!i || i > 1)
                                return (
                                    t +
                                    e * o * Math.sqrt((-2 * Math.log(i)) / i)
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
                gd = pd.slice,
                yd = { name: 'implicit' }
            function bd(t) {
                var n = Qo(),
                    e = [],
                    r = yd
                function i(i) {
                    var o = i + '',
                        u = n.get(o)
                    if (!u) {
                        if (r !== yd) return r
                        n.set(o, (u = e.push(i)))
                    }
                    return t[(u - 1) % t.length]
                }
                return (
                    (t = null == t ? [] : gd.call(t)),
                    (i.domain = function(t) {
                        if (!arguments.length) return e.slice()
                        ;(e = []), (n = Qo())
                        for (var r, o, u = -1, a = t.length; ++u < a; )
                            n.has((o = (r = t[u]) + '')) || n.set(o, e.push(r))
                        return i
                    }),
                    (i.range = function(n) {
                        return arguments.length
                            ? ((t = gd.call(n)), i)
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
            function md() {
                var t,
                    n,
                    e = bd().unknown(void 0),
                    r = e.domain,
                    i = e.range,
                    o = [0, 1],
                    u = !1,
                    a = 0,
                    c = 0,
                    f = 0.5
                function s() {
                    var e = r().length,
                        s = o[1] < o[0],
                        l = o[s - 0],
                        h = o[1 - s]
                    ;(t = (h - l) / Math.max(1, e - a + 2 * c)),
                        u && (t = Math.floor(t)),
                        (l += (h - l - t * (e - a)) * f),
                        (n = t * (1 - a)),
                        u && ((l = Math.round(l)), (n = Math.round(n)))
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
                            ? ((o = [+t[0], +t[1]]), s())
                            : o.slice()
                    }),
                    (e.rangeRound = function(t) {
                        return (o = [+t[0], +t[1]]), (u = !0), s()
                    }),
                    (e.bandwidth = function() {
                        return n
                    }),
                    (e.step = function() {
                        return t
                    }),
                    (e.round = function(t) {
                        return arguments.length ? ((u = !!t), s()) : u
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
                        return md()
                            .domain(r())
                            .range(o)
                            .round(u)
                            .paddingInner(a)
                            .paddingOuter(c)
                            .align(f)
                    }),
                    s()
                )
            }
            function _d() {
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
                })(md().paddingInner(1))
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
            function Ed(t, n) {
                return (n -= t = +t)
                    ? function(e) {
                          return (e - t) / n
                      }
                    : xd(n)
            }
            function Nd(t, n, e, r) {
                var i = t[0],
                    o = t[1],
                    u = n[0],
                    a = n[1]
                return (
                    o < i
                        ? ((i = e(o, i)), (u = r(a, u)))
                        : ((i = e(i, o)), (u = r(u, a))),
                    function(t) {
                        return u(i(t))
                    }
                )
            }
            function Ad(t, n, e, r) {
                var i = Math.min(t.length, n.length) - 1,
                    o = new Array(i),
                    u = new Array(i),
                    a = -1
                for (
                    t[i] < t[0] &&
                    ((t = t.slice().reverse()), (n = n.slice().reverse()));
                    ++a < i;

                )
                    (o[a] = e(t[a], t[a + 1])), (u[a] = r(n[a], n[a + 1]))
                return function(n) {
                    var e = c(t, n, 1, i) - 1
                    return u[e](o[e](n))
                }
            }
            function Td(t, n) {
                return n
                    .domain(t.domain())
                    .range(t.range())
                    .interpolate(t.interpolate())
                    .clamp(t.clamp())
            }
            function Sd(t, n) {
                var e,
                    r,
                    i,
                    o = Md,
                    u = Md,
                    a = Ke,
                    c = !1
                function f() {
                    return (
                        (e = Math.min(o.length, u.length) > 2 ? Ad : Nd),
                        (r = i = null),
                        s
                    )
                }
                function s(n) {
                    return (r ||
                        (r = e(
                            o,
                            u,
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
                                u,
                                o,
                                Ed,
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
                            ? ((o = vd.call(t, wd)), f())
                            : o.slice()
                    }),
                    (s.range = function(t) {
                        return arguments.length
                            ? ((u = gd.call(t)), f())
                            : u.slice()
                    }),
                    (s.rangeRound = function(t) {
                        return (u = gd.call(t)), (a = tr), f()
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
            var kd = function(t, n, e) {
                var r,
                    i = t[0],
                    o = t[t.length - 1],
                    u = S(i, o, null == n ? 10 : n)
                switch ((e = Fa(null == e ? ',f' : e)).type) {
                    case 's':
                        var a = Math.max(Math.abs(i), Math.abs(o))
                        return (
                            null != e.precision ||
                                isNaN((r = Za(u, a))) ||
                                (e.precision = r),
                            Ba(e, a)
                        )
                    case '':
                    case 'e':
                    case 'g':
                    case 'p':
                    case 'r':
                        null != e.precision ||
                            isNaN(
                                (r = Ka(u, Math.max(Math.abs(i), Math.abs(o)))),
                            ) ||
                            (e.precision = r - ('e' === e.type))
                        break
                    case 'f':
                    case '%':
                        null != e.precision ||
                            isNaN((r = Wa(u))) ||
                            (e.precision = r - 2 * ('%' === e.type))
                }
                return Ua(e)
            }
            function Cd(t) {
                var n = t.domain
                return (
                    (t.ticks = function(t) {
                        var e = n()
                        return A(e[0], e[e.length - 1], null == t ? 10 : t)
                    }),
                    (t.tickFormat = function(t, e) {
                        return kd(n(), t, e)
                    }),
                    (t.nice = function(e) {
                        null == e && (e = 10)
                        var r,
                            i = n(),
                            o = 0,
                            u = i.length - 1,
                            a = i[o],
                            c = i[u]
                        return (
                            c < a &&
                                ((r = a),
                                (a = c),
                                (c = r),
                                (r = o),
                                (o = u),
                                (u = r)),
                            (r = T(a, c, e)) > 0
                                ? (r = T(
                                      (a = Math.floor(a / r) * r),
                                      (c = Math.ceil(c / r) * r),
                                      e,
                                  ))
                                : r < 0 &&
                                  (r = T(
                                      (a = Math.ceil(a * r) / r),
                                      (c = Math.floor(c * r) / r),
                                      e,
                                  )),
                            r > 0
                                ? ((i[o] = Math.floor(a / r) * r),
                                  (i[u] = Math.ceil(c / r) * r),
                                  n(i))
                                : r < 0 &&
                                  ((i[o] = Math.ceil(a * r) / r),
                                  (i[u] = Math.floor(c * r) / r),
                                  n(i)),
                            t
                        )
                    }),
                    t
                )
            }
            function Dd() {
                var t = Sd(Ed, Ye)
                return (
                    (t.copy = function() {
                        return Td(t, Dd())
                    }),
                    Cd(t)
                )
            }
            function Pd() {
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
                        return Pd().domain(t)
                    }),
                    Cd(n)
                )
            }
            var Od = function(t, n) {
                var e,
                    r = 0,
                    i = (t = t.slice()).length - 1,
                    o = t[r],
                    u = t[i]
                return (
                    u < o &&
                        ((e = r), (r = i), (i = e), (e = o), (o = u), (u = e)),
                    (t[r] = n.floor(o)),
                    (t[i] = n.ceil(u)),
                    t
                )
            }
            function Id(t, n) {
                return (n = Math.log(n / t))
                    ? function(e) {
                          return Math.log(e / t) / n
                      }
                    : xd(n)
            }
            function Rd(t, n) {
                return t < 0
                    ? function(e) {
                          return -Math.pow(-n, e) * Math.pow(-t, 1 - e)
                      }
                    : function(e) {
                          return Math.pow(n, e) * Math.pow(t, 1 - e)
                      }
            }
            function Fd(t) {
                return isFinite(t) ? +('1e' + t) : t < 0 ? 0 : t
            }
            function Ld(t) {
                return 10 === t
                    ? Fd
                    : t === Math.E
                    ? Math.exp
                    : function(n) {
                          return Math.pow(t, n)
                      }
            }
            function zd(t) {
                return t === Math.E
                    ? Math.log
                    : (10 === t && Math.log10) ||
                          (2 === t && Math.log2) ||
                          ((t = Math.log(t)),
                          function(n) {
                              return Math.log(n) / t
                          })
            }
            function qd(t) {
                return function(n) {
                    return -t(-n)
                }
            }
            function Ud() {
                var t = Sd(Id, Rd).domain([1, 10]),
                    n = t.domain,
                    e = 10,
                    r = zd(10),
                    i = Ld(10)
                function o() {
                    return (
                        (r = zd(e)),
                        (i = Ld(e)),
                        n()[0] < 0 && ((r = qd(r)), (i = qd(i))),
                        t
                    )
                }
                return (
                    (t.base = function(t) {
                        return arguments.length ? ((e = +t), o()) : e
                    }),
                    (t.domain = function(t) {
                        return arguments.length ? (n(t), o()) : n()
                    }),
                    (t.ticks = function(t) {
                        var o,
                            u = n(),
                            a = u[0],
                            c = u[u.length - 1]
                        ;(o = c < a) && ((h = a), (a = c), (c = h))
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
                        } else v = A(h, d, Math.min(d - h, p)).map(i)
                        return o ? v.reverse() : v
                    }),
                    (t.tickFormat = function(n, o) {
                        if (
                            (null == o && (o = 10 === e ? '.0e' : ','),
                            'function' != typeof o && (o = Ua(o)),
                            n === 1 / 0)
                        )
                            return o
                        null == n && (n = 10)
                        var u = Math.max(1, (e * n) / t.ticks().length)
                        return function(t) {
                            var n = t / i(Math.round(r(t)))
                            return (
                                n * e < e - 0.5 && (n *= e), n <= u ? o(t) : ''
                            )
                        }
                    }),
                    (t.nice = function() {
                        return n(
                            Od(n(), {
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
                        return Td(t, Ud().base(e))
                    }),
                    t
                )
            }
            function Bd(t, n) {
                return t < 0 ? -Math.pow(-t, n) : Math.pow(t, n)
            }
            function Yd() {
                var t = 1,
                    n = Sd(
                        function(n, e) {
                            return (e = Bd(e, t) - (n = Bd(n, t)))
                                ? function(r) {
                                      return (Bd(r, t) - n) / e
                                  }
                                : xd(e)
                        },
                        function(n, e) {
                            return (
                                (e = Bd(e, t) - (n = Bd(n, t))),
                                function(r) {
                                    return Bd(n + e * r, 1 / t)
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
                        return Td(n, Yd().exponent(t))
                    }),
                    Cd(n)
                )
            }
            function jd() {
                return Yd().exponent(0.5)
            }
            function $d() {
                var t = [],
                    n = [],
                    e = []
                function i() {
                    var r = 0,
                        i = Math.max(1, n.length)
                    for (e = new Array(i - 1); ++r < i; ) e[r - 1] = D(t, r / i)
                    return o
                }
                function o(t) {
                    if (!isNaN((t = +t))) return n[c(e, t)]
                }
                return (
                    (o.invertExtent = function(r) {
                        var i = n.indexOf(r)
                        return i < 0
                            ? [NaN, NaN]
                            : [
                                  i > 0 ? e[i - 1] : t[0],
                                  i < e.length ? e[i] : t[t.length - 1],
                              ]
                    }),
                    (o.domain = function(n) {
                        if (!arguments.length) return t.slice()
                        t = []
                        for (var e, o = 0, u = n.length; o < u; ++o)
                            null == (e = n[o]) || isNaN((e = +e)) || t.push(e)
                        return t.sort(r), i()
                    }),
                    (o.range = function(t) {
                        return arguments.length
                            ? ((n = gd.call(t)), i())
                            : n.slice()
                    }),
                    (o.quantiles = function() {
                        return e.slice()
                    }),
                    (o.copy = function() {
                        return $d()
                            .domain(t)
                            .range(n)
                    }),
                    o
                )
            }
            function Hd() {
                var t = 0,
                    n = 1,
                    e = 1,
                    r = [0.5],
                    i = [0, 1]
                function o(t) {
                    if (t <= t) return i[c(r, t, 0, e)]
                }
                function u() {
                    var i = -1
                    for (r = new Array(e); ++i < e; )
                        r[i] = ((i + 1) * n - (i - e) * t) / (e + 1)
                    return o
                }
                return (
                    (o.domain = function(e) {
                        return arguments.length
                            ? ((t = +e[0]), (n = +e[1]), u())
                            : [t, n]
                    }),
                    (o.range = function(t) {
                        return arguments.length
                            ? ((e = (i = gd.call(t)).length - 1), u())
                            : i.slice()
                    }),
                    (o.invertExtent = function(o) {
                        var u = i.indexOf(o)
                        return u < 0
                            ? [NaN, NaN]
                            : u < 1
                            ? [t, r[0]]
                            : u >= e
                            ? [r[e - 1], n]
                            : [r[u - 1], r[u]]
                    }),
                    (o.copy = function() {
                        return Hd()
                            .domain([t, n])
                            .range(i)
                    }),
                    Cd(o)
                )
            }
            function Gd() {
                var t = [0.5],
                    n = [0, 1],
                    e = 1
                function r(r) {
                    if (r <= r) return n[c(t, r, 0, e)]
                }
                return (
                    (r.domain = function(i) {
                        return arguments.length
                            ? ((t = gd.call(i)),
                              (e = Math.min(t.length, n.length - 1)),
                              r)
                            : t.slice()
                    }),
                    (r.range = function(i) {
                        return arguments.length
                            ? ((n = gd.call(i)),
                              (e = Math.min(t.length, n.length - 1)),
                              r)
                            : n.slice()
                    }),
                    (r.invertExtent = function(e) {
                        var r = n.indexOf(e)
                        return [t[r - 1], t[r]]
                    }),
                    (r.copy = function() {
                        return Gd()
                            .domain(t)
                            .range(n)
                    }),
                    r
                )
            }
            var Xd = new Date(),
                Vd = new Date()
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
                    (i.range = function(e, r, o) {
                        var u,
                            a = []
                        if (
                            ((e = i.ceil(e)),
                            (o = null == o ? 1 : Math.floor(o)),
                            !(e < r && o > 0))
                        )
                            return a
                        do {
                            a.push((u = new Date(+e))), n(e, o), t(e)
                        } while (u < e && e < r)
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
                                Xd.setTime(+n),
                                Vd.setTime(+r),
                                t(Xd),
                                t(Vd),
                                Math.floor(e(Xd, Vd))
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
            var Kd = Zd,
                Qd = Zd.range,
                Jd = 6e4,
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
                        t.setTime(Math.floor(t / Jd) * Jd)
                    },
                    function(t, n) {
                        t.setTime(+t + n * Jd)
                    },
                    function(t, n) {
                        return (n - t) / Jd
                    },
                    function(t) {
                        return t.getMinutes()
                    },
                ),
                op = ip,
                up = ip.range,
                ap = Wd(
                    function(t) {
                        var n = (t.getTimezoneOffset() * Jd) % 36e5
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
                                    Jd) /
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
                                    Jd) /
                            tp
                        )
                    },
                )
            }
            var pp = dp(0),
                vp = dp(1),
                gp = dp(2),
                yp = dp(3),
                bp = dp(4),
                mp = dp(5),
                _p = dp(6),
                xp = pp.range,
                wp = vp.range,
                Mp = gp.range,
                Ep = yp.range,
                Np = bp.range,
                Ap = mp.range,
                Tp = _p.range,
                Sp = Wd(
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
                kp = Sp,
                Cp = Sp.range,
                Dp = Wd(
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
            Dp.every = function(t) {
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
            var Pp = Dp,
                Op = Dp.range,
                Ip = Wd(
                    function(t) {
                        t.setUTCSeconds(0, 0)
                    },
                    function(t, n) {
                        t.setTime(+t + n * Jd)
                    },
                    function(t, n) {
                        return (n - t) / Jd
                    },
                    function(t) {
                        return t.getUTCMinutes()
                    },
                ),
                Rp = Ip,
                Fp = Ip.range,
                Lp = Wd(
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
                zp = Lp,
                qp = Lp.range,
                Up = Wd(
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
                Bp = Up,
                Yp = Up.range
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
            var $p = jp(0),
                Hp = jp(1),
                Gp = jp(2),
                Xp = jp(3),
                Vp = jp(4),
                Wp = jp(5),
                Zp = jp(6),
                Kp = $p.range,
                Qp = Hp.range,
                Jp = Gp.range,
                tv = Xp.range,
                nv = Vp.range,
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
                ov = iv,
                uv = iv.range,
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
                    o = t.days,
                    u = t.shortDays,
                    a = t.months,
                    c = t.shortMonths,
                    f = Nv(i),
                    s = Av(i),
                    l = Nv(o),
                    h = Av(o),
                    d = Nv(u),
                    p = Av(u),
                    v = Nv(a),
                    g = Av(a),
                    y = Nv(c),
                    b = Av(c),
                    m = {
                        a: function(t) {
                            return u[t.getDay()]
                        },
                        A: function(t) {
                            return o[t.getDay()]
                        },
                        b: function(t) {
                            return c[t.getMonth()]
                        },
                        B: function(t) {
                            return a[t.getMonth()]
                        },
                        c: null,
                        d: Gv,
                        e: Gv,
                        f: Kv,
                        H: Xv,
                        I: Vv,
                        j: Wv,
                        L: Zv,
                        m: Qv,
                        M: Jv,
                        p: function(t) {
                            return i[+(t.getHours() >= 12)]
                        },
                        Q: Tg,
                        s: Sg,
                        S: tg,
                        u: ng,
                        U: eg,
                        V: rg,
                        w: ig,
                        W: og,
                        x: null,
                        X: null,
                        y: ug,
                        Y: ag,
                        Z: cg,
                        '%': Ag,
                    },
                    _ = {
                        a: function(t) {
                            return u[t.getUTCDay()]
                        },
                        A: function(t) {
                            return o[t.getUTCDay()]
                        },
                        b: function(t) {
                            return c[t.getUTCMonth()]
                        },
                        B: function(t) {
                            return a[t.getUTCMonth()]
                        },
                        c: null,
                        d: fg,
                        e: fg,
                        f: pg,
                        H: sg,
                        I: lg,
                        j: hg,
                        L: dg,
                        m: vg,
                        M: gg,
                        p: function(t) {
                            return i[+(t.getUTCHours() >= 12)]
                        },
                        Q: Tg,
                        s: Sg,
                        S: yg,
                        u: bg,
                        U: mg,
                        V: _g,
                        w: xg,
                        W: wg,
                        x: null,
                        X: null,
                        y: Mg,
                        Y: Eg,
                        Z: Ng,
                        '%': Ag,
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
                            var r = y.exec(n.slice(e))
                            return r
                                ? ((t.m = b[r[0].toLowerCase()]),
                                  e + r[0].length)
                                : -1
                        },
                        B: function(t, n, e) {
                            var r = v.exec(n.slice(e))
                            return r
                                ? ((t.m = g[r[0].toLowerCase()]),
                                  e + r[0].length)
                                : -1
                        },
                        c: function(t, e, r) {
                            return E(t, n, e, r)
                        },
                        d: Fv,
                        e: Fv,
                        f: Yv,
                        H: zv,
                        I: zv,
                        j: Lv,
                        L: Bv,
                        m: Rv,
                        M: qv,
                        p: function(t, n, e) {
                            var r = f.exec(n.slice(e))
                            return r
                                ? ((t.p = s[r[0].toLowerCase()]),
                                  e + r[0].length)
                                : -1
                        },
                        Q: $v,
                        s: Hv,
                        S: Uv,
                        u: Sv,
                        U: kv,
                        V: Cv,
                        w: Tv,
                        W: Dv,
                        x: function(t, n, r) {
                            return E(t, e, n, r)
                        },
                        X: function(t, n, e) {
                            return E(t, r, n, e)
                        },
                        y: Ov,
                        Y: Pv,
                        Z: Iv,
                        '%': jv,
                    }
                function w(t, n) {
                    return function(e) {
                        var r,
                            i,
                            o,
                            u = [],
                            a = -1,
                            c = 0,
                            f = t.length
                        for (e instanceof Date || (e = new Date(+e)); ++a < f; )
                            37 === t.charCodeAt(a) &&
                                (u.push(t.slice(c, a)),
                                null != (i = mv[(r = t.charAt(++a))])
                                    ? (r = t.charAt(++a))
                                    : (i = 'e' === r ? ' ' : '0'),
                                (o = n[r]) && (r = o(e, i)),
                                u.push(r),
                                (c = a + 1))
                        return u.push(t.slice(c, a)), u.join('')
                    }
                }
                function M(t, n) {
                    return function(e) {
                        var r,
                            i,
                            o = hv(1900)
                        if (E(o, t, (e += ''), 0) != e.length) return null
                        if ('Q' in o) return new Date(o.Q)
                        if (
                            ('p' in o && (o.H = (o.H % 12) + 12 * o.p),
                            'V' in o)
                        ) {
                            if (o.V < 1 || o.V > 53) return null
                            'w' in o || (o.w = 1),
                                'Z' in o
                                    ? ((i = (r = lv(hv(o.y))).getUTCDay()),
                                      (r =
                                          i > 4 || 0 === i
                                              ? Hp.ceil(r)
                                              : Hp(r)),
                                      (r = Bp.offset(r, 7 * (o.V - 1))),
                                      (o.y = r.getUTCFullYear()),
                                      (o.m = r.getUTCMonth()),
                                      (o.d = r.getUTCDate() + ((o.w + 6) % 7)))
                                    : ((i = (r = n(hv(o.y))).getDay()),
                                      (r =
                                          i > 4 || 0 === i
                                              ? vp.ceil(r)
                                              : vp(r)),
                                      (r = lp.offset(r, 7 * (o.V - 1))),
                                      (o.y = r.getFullYear()),
                                      (o.m = r.getMonth()),
                                      (o.d = r.getDate() + ((o.w + 6) % 7)))
                        } else
                            ('W' in o || 'U' in o) &&
                                ('w' in o ||
                                    (o.w =
                                        'u' in o ? o.u % 7 : 'W' in o ? 1 : 0),
                                (i =
                                    'Z' in o
                                        ? lv(hv(o.y)).getUTCDay()
                                        : n(hv(o.y)).getDay()),
                                (o.m = 0),
                                (o.d =
                                    'W' in o
                                        ? ((o.w + 6) % 7) +
                                          7 * o.W -
                                          ((i + 5) % 7)
                                        : o.w + 7 * o.U - ((i + 6) % 7)))
                        return 'Z' in o
                            ? ((o.H += (o.Z / 100) | 0),
                              (o.M += o.Z % 100),
                              lv(o))
                            : n(o)
                    }
                }
                function E(t, n, e, r) {
                    for (var i, o, u = 0, a = n.length, c = e.length; u < a; ) {
                        if (r >= c) return -1
                        if (37 === (i = n.charCodeAt(u++))) {
                            if (
                                ((i = n.charAt(u++)),
                                !(o = x[i in mv ? n.charAt(u++) : i]) ||
                                    (r = o(t, e, r)) < 0)
                            )
                                return -1
                        } else if (i != e.charCodeAt(r++)) return -1
                    }
                    return r
                }
                return (
                    (m.x = w(e, m)),
                    (m.X = w(r, m)),
                    (m.c = w(n, m)),
                    (_.x = w(e, _)),
                    (_.X = w(r, _)),
                    (_.c = w(n, _)),
                    {
                        format: function(t) {
                            var n = w((t += ''), m)
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
                            var n = w((t += ''), _)
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
                gv,
                yv,
                bv,
                mv = { '-': '', _: ' ', 0: '0' },
                _v = /^\s*\d+/,
                xv = /^%/,
                wv = /[\\^$*+?|[\]().{}]/g
            function Mv(t, n, e) {
                var r = t < 0 ? '-' : '',
                    i = (r ? -t : t) + '',
                    o = i.length
                return r + (o < e ? new Array(e - o + 1).join(n) + i : i)
            }
            function Ev(t) {
                return t.replace(wv, '\\$&')
            }
            function Nv(t) {
                return new RegExp('^(?:' + t.map(Ev).join('|') + ')', 'i')
            }
            function Av(t) {
                for (var n = {}, e = -1, r = t.length; ++e < r; )
                    n[t[e].toLowerCase()] = e
                return n
            }
            function Tv(t, n, e) {
                var r = _v.exec(n.slice(e, e + 1))
                return r ? ((t.w = +r[0]), e + r[0].length) : -1
            }
            function Sv(t, n, e) {
                var r = _v.exec(n.slice(e, e + 1))
                return r ? ((t.u = +r[0]), e + r[0].length) : -1
            }
            function kv(t, n, e) {
                var r = _v.exec(n.slice(e, e + 2))
                return r ? ((t.U = +r[0]), e + r[0].length) : -1
            }
            function Cv(t, n, e) {
                var r = _v.exec(n.slice(e, e + 2))
                return r ? ((t.V = +r[0]), e + r[0].length) : -1
            }
            function Dv(t, n, e) {
                var r = _v.exec(n.slice(e, e + 2))
                return r ? ((t.W = +r[0]), e + r[0].length) : -1
            }
            function Pv(t, n, e) {
                var r = _v.exec(n.slice(e, e + 4))
                return r ? ((t.y = +r[0]), e + r[0].length) : -1
            }
            function Ov(t, n, e) {
                var r = _v.exec(n.slice(e, e + 2))
                return r
                    ? ((t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)),
                      e + r[0].length)
                    : -1
            }
            function Iv(t, n, e) {
                var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6))
                return r
                    ? ((t.Z = r[1] ? 0 : -(r[2] + (r[3] || '00'))),
                      e + r[0].length)
                    : -1
            }
            function Rv(t, n, e) {
                var r = _v.exec(n.slice(e, e + 2))
                return r ? ((t.m = r[0] - 1), e + r[0].length) : -1
            }
            function Fv(t, n, e) {
                var r = _v.exec(n.slice(e, e + 2))
                return r ? ((t.d = +r[0]), e + r[0].length) : -1
            }
            function Lv(t, n, e) {
                var r = _v.exec(n.slice(e, e + 3))
                return r ? ((t.m = 0), (t.d = +r[0]), e + r[0].length) : -1
            }
            function zv(t, n, e) {
                var r = _v.exec(n.slice(e, e + 2))
                return r ? ((t.H = +r[0]), e + r[0].length) : -1
            }
            function qv(t, n, e) {
                var r = _v.exec(n.slice(e, e + 2))
                return r ? ((t.M = +r[0]), e + r[0].length) : -1
            }
            function Uv(t, n, e) {
                var r = _v.exec(n.slice(e, e + 2))
                return r ? ((t.S = +r[0]), e + r[0].length) : -1
            }
            function Bv(t, n, e) {
                var r = _v.exec(n.slice(e, e + 3))
                return r ? ((t.L = +r[0]), e + r[0].length) : -1
            }
            function Yv(t, n, e) {
                var r = _v.exec(n.slice(e, e + 6))
                return r
                    ? ((t.L = Math.floor(r[0] / 1e3)), e + r[0].length)
                    : -1
            }
            function jv(t, n, e) {
                var r = xv.exec(n.slice(e, e + 1))
                return r ? e + r[0].length : -1
            }
            function $v(t, n, e) {
                var r = _v.exec(n.slice(e))
                return r ? ((t.Q = +r[0]), e + r[0].length) : -1
            }
            function Hv(t, n, e) {
                var r = _v.exec(n.slice(e))
                return r ? ((t.Q = 1e3 * +r[0]), e + r[0].length) : -1
            }
            function Gv(t, n) {
                return Mv(t.getDate(), n, 2)
            }
            function Xv(t, n) {
                return Mv(t.getHours(), n, 2)
            }
            function Vv(t, n) {
                return Mv(t.getHours() % 12 || 12, n, 2)
            }
            function Wv(t, n) {
                return Mv(1 + lp.count(Pp(t), t), n, 3)
            }
            function Zv(t, n) {
                return Mv(t.getMilliseconds(), n, 3)
            }
            function Kv(t, n) {
                return Zv(t, n) + '000'
            }
            function Qv(t, n) {
                return Mv(t.getMonth() + 1, n, 2)
            }
            function Jv(t, n) {
                return Mv(t.getMinutes(), n, 2)
            }
            function tg(t, n) {
                return Mv(t.getSeconds(), n, 2)
            }
            function ng(t) {
                var n = t.getDay()
                return 0 === n ? 7 : n
            }
            function eg(t, n) {
                return Mv(pp.count(Pp(t), t), n, 2)
            }
            function rg(t, n) {
                var e = t.getDay()
                return (
                    (t = e >= 4 || 0 === e ? bp(t) : bp.ceil(t)),
                    Mv(bp.count(Pp(t), t) + (4 === Pp(t).getDay()), n, 2)
                )
            }
            function ig(t) {
                return t.getDay()
            }
            function og(t, n) {
                return Mv(vp.count(Pp(t), t), n, 2)
            }
            function ug(t, n) {
                return Mv(t.getFullYear() % 100, n, 2)
            }
            function ag(t, n) {
                return Mv(t.getFullYear() % 1e4, n, 4)
            }
            function cg(t) {
                var n = t.getTimezoneOffset()
                return (
                    (n > 0 ? '-' : ((n *= -1), '+')) +
                    Mv((n / 60) | 0, '0', 2) +
                    Mv(n % 60, '0', 2)
                )
            }
            function fg(t, n) {
                return Mv(t.getUTCDate(), n, 2)
            }
            function sg(t, n) {
                return Mv(t.getUTCHours(), n, 2)
            }
            function lg(t, n) {
                return Mv(t.getUTCHours() % 12 || 12, n, 2)
            }
            function hg(t, n) {
                return Mv(1 + Bp.count(cv(t), t), n, 3)
            }
            function dg(t, n) {
                return Mv(t.getUTCMilliseconds(), n, 3)
            }
            function pg(t, n) {
                return dg(t, n) + '000'
            }
            function vg(t, n) {
                return Mv(t.getUTCMonth() + 1, n, 2)
            }
            function gg(t, n) {
                return Mv(t.getUTCMinutes(), n, 2)
            }
            function yg(t, n) {
                return Mv(t.getUTCSeconds(), n, 2)
            }
            function bg(t) {
                var n = t.getUTCDay()
                return 0 === n ? 7 : n
            }
            function mg(t, n) {
                return Mv($p.count(cv(t), t), n, 2)
            }
            function _g(t, n) {
                var e = t.getUTCDay()
                return (
                    (t = e >= 4 || 0 === e ? Vp(t) : Vp.ceil(t)),
                    Mv(Vp.count(cv(t), t) + (4 === cv(t).getUTCDay()), n, 2)
                )
            }
            function xg(t) {
                return t.getUTCDay()
            }
            function wg(t, n) {
                return Mv(Hp.count(cv(t), t), n, 2)
            }
            function Mg(t, n) {
                return Mv(t.getUTCFullYear() % 100, n, 2)
            }
            function Eg(t, n) {
                return Mv(t.getUTCFullYear() % 1e4, n, 4)
            }
            function Ng() {
                return '+0000'
            }
            function Ag() {
                return '%'
            }
            function Tg(t) {
                return +t
            }
            function Sg(t) {
                return Math.floor(+t / 1e3)
            }
            function kg(t) {
                return (
                    (pv = dv(t)),
                    (vv = pv.format),
                    (gv = pv.parse),
                    (yv = pv.utcFormat),
                    (bv = pv.utcParse),
                    pv
                )
            }
            kg({
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
            var Cg = Date.prototype.toISOString
                ? function(t) {
                      return t.toISOString()
                  }
                : yv('%Y-%m-%dT%H:%M:%S.%LZ')
            var Dg = +new Date('2000-01-01T00:00:00.000Z')
                    ? function(t) {
                          var n = new Date(t)
                          return isNaN(n) ? null : n
                      }
                    : bv('%Y-%m-%dT%H:%M:%S.%LZ'),
                Pg = 1e3,
                Og = 60 * Pg,
                Ig = 60 * Og,
                Rg = 24 * Ig,
                Fg = 7 * Rg,
                Lg = 30 * Rg,
                zg = 365 * Rg
            function qg(t) {
                return new Date(t)
            }
            function Ug(t) {
                return t instanceof Date ? +t : +new Date(+t)
            }
            function Bg(t, n, e, r, o, u, a, c, f) {
                var s = Sd(Ed, Ye),
                    l = s.invert,
                    h = s.domain,
                    d = f('.%L'),
                    p = f(':%S'),
                    v = f('%I:%M'),
                    g = f('%I %p'),
                    y = f('%a %d'),
                    b = f('%b %d'),
                    m = f('%B'),
                    _ = f('%Y'),
                    x = [
                        [a, 1, Pg],
                        [a, 5, 5 * Pg],
                        [a, 15, 15 * Pg],
                        [a, 30, 30 * Pg],
                        [u, 1, Og],
                        [u, 5, 5 * Og],
                        [u, 15, 15 * Og],
                        [u, 30, 30 * Og],
                        [o, 1, Ig],
                        [o, 3, 3 * Ig],
                        [o, 6, 6 * Ig],
                        [o, 12, 12 * Ig],
                        [r, 1, Rg],
                        [r, 2, 2 * Rg],
                        [e, 1, Fg],
                        [n, 1, Lg],
                        [n, 3, 3 * Lg],
                        [t, 1, zg],
                    ]
                function w(i) {
                    return (a(i) < i
                        ? d
                        : u(i) < i
                        ? p
                        : o(i) < i
                        ? v
                        : r(i) < i
                        ? g
                        : n(i) < i
                        ? e(i) < i
                            ? y
                            : b
                        : t(i) < i
                        ? m
                        : _)(i)
                }
                function M(n, e, r, o) {
                    if ((null == n && (n = 10), 'number' == typeof n)) {
                        var u = Math.abs(r - e) / n,
                            a = i(function(t) {
                                return t[2]
                            }).right(x, u)
                        a === x.length
                            ? ((o = S(e / zg, r / zg, n)), (n = t))
                            : a
                            ? ((o = (a =
                                  x[
                                      u / x[a - 1][2] < x[a][2] / u ? a - 1 : a
                                  ])[1]),
                              (n = a[0]))
                            : ((o = Math.max(S(e, r, n), 1)), (n = c))
                    }
                    return null == o ? n : n.every(o)
                }
                return (
                    (s.invert = function(t) {
                        return new Date(l(t))
                    }),
                    (s.domain = function(t) {
                        return arguments.length
                            ? h(vd.call(t, Ug))
                            : h().map(qg)
                    }),
                    (s.ticks = function(t, n) {
                        var e,
                            r = h(),
                            i = r[0],
                            o = r[r.length - 1],
                            u = o < i
                        return (
                            u && ((e = i), (i = o), (o = e)),
                            (e = (e = M(t, i, o, n)) ? e.range(i, o + 1) : []),
                            u ? e.reverse() : e
                        )
                    }),
                    (s.tickFormat = function(t, n) {
                        return null == n ? w : f(n)
                    }),
                    (s.nice = function(t, n) {
                        var e = h()
                        return (t = M(t, e[0], e[e.length - 1], n))
                            ? h(Od(e, t))
                            : s
                    }),
                    (s.copy = function() {
                        return Td(s, Bg(t, n, e, r, o, u, a, c, f))
                    }),
                    s
                )
            }
            var Yg = function() {
                    return Bg(Pp, kp, pp, lp, cp, op, ep, Kd, vv).domain([
                        new Date(2e3, 0, 1),
                        new Date(2e3, 0, 2),
                    ])
                },
                jg = function() {
                    return Bg(cv, ov, $p, Bp, zp, Rp, ep, Kd, yv).domain([
                        Date.UTC(2e3, 0, 1),
                        Date.UTC(2e3, 0, 2),
                    ])
                }
            function $g(t) {
                var n = 0,
                    e = 1,
                    r = 1,
                    i = !1
                function o(e) {
                    var o = (e - n) * r
                    return t(i ? Math.max(0, Math.min(1, o)) : o)
                }
                return (
                    (o.domain = function(t) {
                        return arguments.length
                            ? ((n = +t[0]),
                              (e = +t[1]),
                              (r = n === e ? 0 : 1 / (e - n)),
                              o)
                            : [n, e]
                    }),
                    (o.clamp = function(t) {
                        return arguments.length ? ((i = !!t), o) : i
                    }),
                    (o.interpolator = function(n) {
                        return arguments.length ? ((t = n), o) : t
                    }),
                    (o.copy = function() {
                        return $g(t)
                            .domain([n, e])
                            .clamp(i)
                    }),
                    Cd(o)
                )
            }
            function Hg(t) {
                var n = 0,
                    e = 0.5,
                    r = 1,
                    i = 1,
                    o = 1,
                    u = !1
                function a(n) {
                    var r = 0.5 + ((n = +n) - e) * (n < e ? i : o)
                    return t(u ? Math.max(0, Math.min(1, r)) : r)
                }
                return (
                    (a.domain = function(t) {
                        return arguments.length
                            ? ((n = +t[0]),
                              (e = +t[1]),
                              (r = +t[2]),
                              (i = n === e ? 0 : 0.5 / (e - n)),
                              (o = e === r ? 0 : 0.5 / (r - e)),
                              a)
                            : [n, e, r]
                    }),
                    (a.clamp = function(t) {
                        return arguments.length ? ((u = !!t), a) : u
                    }),
                    (a.interpolator = function(n) {
                        return arguments.length ? ((t = n), a) : t
                    }),
                    (a.copy = function() {
                        return Hg(t)
                            .domain([n, e, r])
                            .clamp(u)
                    }),
                    Cd(a)
                )
            }
            var Gg = function(t) {
                    for (
                        var n = (t.length / 6) | 0, e = new Array(n), r = 0;
                        r < n;

                    )
                        e[r] = '#' + t.slice(6 * r, 6 * ++r)
                    return e
                },
                Xg = Gg(
                    '1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf',
                ),
                Vg = Gg('7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666'),
                Wg = Gg('1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666'),
                Zg = Gg(
                    'a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928',
                ),
                Kg = Gg(
                    'fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2',
                ),
                Qg = Gg('b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc'),
                Jg = Gg(
                    'e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999',
                ),
                ty = Gg('66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3'),
                ny = Gg(
                    '8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f',
                ),
                ey = function(t) {
                    return ze(t[t.length - 1])
                },
                ry = new Array(3)
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
                    .map(Gg),
                iy = ey(ry),
                oy = new Array(3)
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
                    .map(Gg),
                uy = ey(oy),
                ay = new Array(3)
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
                    .map(Gg),
                cy = ey(ay),
                fy = new Array(3)
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
                    .map(Gg),
                sy = ey(fy),
                ly = new Array(3)
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
                    .map(Gg),
                hy = ey(ly),
                dy = new Array(3)
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
                    .map(Gg),
                py = ey(dy),
                vy = new Array(3)
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
                    .map(Gg),
                gy = ey(vy),
                yy = new Array(3)
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
                    .map(Gg),
                by = ey(yy),
                my = new Array(3)
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
                    .map(Gg),
                _y = ey(my),
                xy = new Array(3)
                    .concat(
                        'e5f5f999d8c92ca25f',
                        'edf8fbb2e2e266c2a4238b45',
                        'edf8fbb2e2e266c2a42ca25f006d2c',
                        'edf8fbccece699d8c966c2a42ca25f006d2c',
                        'edf8fbccece699d8c966c2a441ae76238b45005824',
                        'f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824',
                        'f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b',
                    )
                    .map(Gg),
                wy = ey(xy),
                My = new Array(3)
                    .concat(
                        'e0ecf49ebcda8856a7',
                        'edf8fbb3cde38c96c688419d',
                        'edf8fbb3cde38c96c68856a7810f7c',
                        'edf8fbbfd3e69ebcda8c96c68856a7810f7c',
                        'edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b',
                        'f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b',
                        'f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b',
                    )
                    .map(Gg),
                Ey = ey(My),
                Ny = new Array(3)
                    .concat(
                        'e0f3dba8ddb543a2ca',
                        'f0f9e8bae4bc7bccc42b8cbe',
                        'f0f9e8bae4bc7bccc443a2ca0868ac',
                        'f0f9e8ccebc5a8ddb57bccc443a2ca0868ac',
                        'f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e',
                        'f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e',
                        'f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081',
                    )
                    .map(Gg),
                Ay = ey(Ny),
                Ty = new Array(3)
                    .concat(
                        'fee8c8fdbb84e34a33',
                        'fef0d9fdcc8afc8d59d7301f',
                        'fef0d9fdcc8afc8d59e34a33b30000',
                        'fef0d9fdd49efdbb84fc8d59e34a33b30000',
                        'fef0d9fdd49efdbb84fc8d59ef6548d7301f990000',
                        'fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000',
                        'fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000',
                    )
                    .map(Gg),
                Sy = ey(Ty),
                ky = new Array(3)
                    .concat(
                        'ece2f0a6bddb1c9099',
                        'f6eff7bdc9e167a9cf02818a',
                        'f6eff7bdc9e167a9cf1c9099016c59',
                        'f6eff7d0d1e6a6bddb67a9cf1c9099016c59',
                        'f6eff7d0d1e6a6bddb67a9cf3690c002818a016450',
                        'fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450',
                        'fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636',
                    )
                    .map(Gg),
                Cy = ey(ky),
                Dy = new Array(3)
                    .concat(
                        'ece7f2a6bddb2b8cbe',
                        'f1eef6bdc9e174a9cf0570b0',
                        'f1eef6bdc9e174a9cf2b8cbe045a8d',
                        'f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d',
                        'f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b',
                        'fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b',
                        'fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858',
                    )
                    .map(Gg),
                Py = ey(Dy),
                Oy = new Array(3)
                    .concat(
                        'e7e1efc994c7dd1c77',
                        'f1eef6d7b5d8df65b0ce1256',
                        'f1eef6d7b5d8df65b0dd1c77980043',
                        'f1eef6d4b9dac994c7df65b0dd1c77980043',
                        'f1eef6d4b9dac994c7df65b0e7298ace125691003f',
                        'f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f',
                        'f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f',
                    )
                    .map(Gg),
                Iy = ey(Oy),
                Ry = new Array(3)
                    .concat(
                        'fde0ddfa9fb5c51b8a',
                        'feebe2fbb4b9f768a1ae017e',
                        'feebe2fbb4b9f768a1c51b8a7a0177',
                        'feebe2fcc5c0fa9fb5f768a1c51b8a7a0177',
                        'feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177',
                        'fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177',
                        'fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a',
                    )
                    .map(Gg),
                Fy = ey(Ry),
                Ly = new Array(3)
                    .concat(
                        'edf8b17fcdbb2c7fb8',
                        'ffffcca1dab441b6c4225ea8',
                        'ffffcca1dab441b6c42c7fb8253494',
                        'ffffccc7e9b47fcdbb41b6c42c7fb8253494',
                        'ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84',
                        'ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84',
                        'ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58',
                    )
                    .map(Gg),
                zy = ey(Ly),
                qy = new Array(3)
                    .concat(
                        'f7fcb9addd8e31a354',
                        'ffffccc2e69978c679238443',
                        'ffffccc2e69978c67931a354006837',
                        'ffffccd9f0a3addd8e78c67931a354006837',
                        'ffffccd9f0a3addd8e78c67941ab5d238443005a32',
                        'ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32',
                        'ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529',
                    )
                    .map(Gg),
                Uy = ey(qy),
                By = new Array(3)
                    .concat(
                        'fff7bcfec44fd95f0e',
                        'ffffd4fed98efe9929cc4c02',
                        'ffffd4fed98efe9929d95f0e993404',
                        'ffffd4fee391fec44ffe9929d95f0e993404',
                        'ffffd4fee391fec44ffe9929ec7014cc4c028c2d04',
                        'ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04',
                        'ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506',
                    )
                    .map(Gg),
                Yy = ey(By),
                jy = new Array(3)
                    .concat(
                        'ffeda0feb24cf03b20',
                        'ffffb2fecc5cfd8d3ce31a1c',
                        'ffffb2fecc5cfd8d3cf03b20bd0026',
                        'ffffb2fed976feb24cfd8d3cf03b20bd0026',
                        'ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026',
                        'ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026',
                        'ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026',
                    )
                    .map(Gg),
                $y = ey(jy),
                Hy = new Array(3)
                    .concat(
                        'deebf79ecae13182bd',
                        'eff3ffbdd7e76baed62171b5',
                        'eff3ffbdd7e76baed63182bd08519c',
                        'eff3ffc6dbef9ecae16baed63182bd08519c',
                        'eff3ffc6dbef9ecae16baed64292c62171b5084594',
                        'f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594',
                        'f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b',
                    )
                    .map(Gg),
                Gy = ey(Hy),
                Xy = new Array(3)
                    .concat(
                        'e5f5e0a1d99b31a354',
                        'edf8e9bae4b374c476238b45',
                        'edf8e9bae4b374c47631a354006d2c',
                        'edf8e9c7e9c0a1d99b74c47631a354006d2c',
                        'edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32',
                        'f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32',
                        'f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b',
                    )
                    .map(Gg),
                Vy = ey(Xy),
                Wy = new Array(3)
                    .concat(
                        'f0f0f0bdbdbd636363',
                        'f7f7f7cccccc969696525252',
                        'f7f7f7cccccc969696636363252525',
                        'f7f7f7d9d9d9bdbdbd969696636363252525',
                        'f7f7f7d9d9d9bdbdbd969696737373525252252525',
                        'fffffff0f0f0d9d9d9bdbdbd969696737373525252252525',
                        'fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000',
                    )
                    .map(Gg),
                Zy = ey(Wy),
                Ky = new Array(3)
                    .concat(
                        'efedf5bcbddc756bb1',
                        'f2f0f7cbc9e29e9ac86a51a3',
                        'f2f0f7cbc9e29e9ac8756bb154278f',
                        'f2f0f7dadaebbcbddc9e9ac8756bb154278f',
                        'f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486',
                        'fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486',
                        'fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d',
                    )
                    .map(Gg),
                Qy = ey(Ky),
                Jy = new Array(3)
                    .concat(
                        'fee0d2fc9272de2d26',
                        'fee5d9fcae91fb6a4acb181d',
                        'fee5d9fcae91fb6a4ade2d26a50f15',
                        'fee5d9fcbba1fc9272fb6a4ade2d26a50f15',
                        'fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d',
                        'fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d',
                        'fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d',
                    )
                    .map(Gg),
                tb = ey(Jy),
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
                    .map(Gg),
                eb = ey(nb),
                rb = mr(Ae(300, 0.5, 0), Ae(-240, 0.5, 1)),
                ib = mr(Ae(-100, 0.75, 0.35), Ae(80, 1.5, 0.8)),
                ob = mr(Ae(260, 0.75, 0.35), Ae(80, 1.5, 0.8)),
                ub = Ae(),
                ab = function(t) {
                    ;(t < 0 || t > 1) && (t -= Math.floor(t))
                    var n = Math.abs(t - 0.5)
                    return (
                        (ub.h = 360 * t - 100),
                        (ub.s = 1.5 - 1.5 * n),
                        (ub.l = 0.8 - 0.9 * n),
                        ub + ''
                    )
                },
                cb = Gn(),
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
                    Gg(
                        '44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725',
                    ),
                ),
                pb = hb(
                    Gg(
                        '00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf',
                    ),
                ),
                vb = hb(
                    Gg(
                        '00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4',
                    ),
                ),
                gb = hb(
                    Gg(
                        '0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921',
                    ),
                ),
                yb = function(t) {
                    return function() {
                        return t
                    }
                },
                bb = Math.abs,
                mb = Math.atan2,
                _b = Math.cos,
                xb = Math.max,
                wb = Math.min,
                Mb = Math.sin,
                Eb = Math.sqrt,
                Nb = 1e-12,
                Ab = Math.PI,
                Tb = Ab / 2,
                Sb = 2 * Ab
            function kb(t) {
                return t >= 1 ? Tb : t <= -1 ? -Tb : Math.asin(t)
            }
            function Cb(t) {
                return t.innerRadius
            }
            function Db(t) {
                return t.outerRadius
            }
            function Pb(t) {
                return t.startAngle
            }
            function Ob(t) {
                return t.endAngle
            }
            function Ib(t) {
                return t && t.padAngle
            }
            function Rb(t, n, e, r, i, o, u) {
                var a = t - e,
                    c = n - r,
                    f = (u ? o : -o) / Eb(a * a + c * c),
                    s = f * c,
                    l = -f * a,
                    h = t + s,
                    d = n + l,
                    p = e + s,
                    v = r + l,
                    g = (h + p) / 2,
                    y = (d + v) / 2,
                    b = p - h,
                    m = v - d,
                    _ = b * b + m * m,
                    x = i - o,
                    w = h * v - p * d,
                    M = (m < 0 ? -1 : 1) * Eb(xb(0, x * x * _ - w * w)),
                    E = (w * m - b * M) / _,
                    N = (-w * b - m * M) / _,
                    A = (w * m + b * M) / _,
                    T = (-w * b + m * M) / _,
                    S = E - g,
                    k = N - y,
                    C = A - g,
                    D = T - y
                return (
                    S * S + k * k > C * C + D * D && ((E = A), (N = T)),
                    {
                        cx: E,
                        cy: N,
                        x01: -s,
                        y01: -l,
                        x11: E * (i / x - 1),
                        y11: N * (i / x - 1),
                    }
                )
            }
            var Fb = function() {
                var t = Cb,
                    n = Db,
                    e = yb(0),
                    r = null,
                    i = Pb,
                    o = Ob,
                    u = Ib,
                    a = null
                function c() {
                    var c,
                        f,
                        s,
                        l = +t.apply(this, arguments),
                        h = +n.apply(this, arguments),
                        d = i.apply(this, arguments) - Tb,
                        p = o.apply(this, arguments) - Tb,
                        v = bb(p - d),
                        g = p > d
                    if (
                        (a || (a = c = jo()),
                        h < l && ((f = h), (h = l), (l = f)),
                        h > Nb)
                    )
                        if (v > Sb - Nb)
                            a.moveTo(h * _b(d), h * Mb(d)),
                                a.arc(0, 0, h, d, p, !g),
                                l > Nb &&
                                    (a.moveTo(l * _b(p), l * Mb(p)),
                                    a.arc(0, 0, l, p, d, g))
                        else {
                            var y,
                                b,
                                m = d,
                                _ = p,
                                x = d,
                                w = p,
                                M = v,
                                E = v,
                                N = u.apply(this, arguments) / 2,
                                A =
                                    N > Nb &&
                                    (r
                                        ? +r.apply(this, arguments)
                                        : Eb(l * l + h * h)),
                                T = wb(
                                    bb(h - l) / 2,
                                    +e.apply(this, arguments),
                                ),
                                S = T,
                                k = T
                            if (A > Nb) {
                                var C = kb((A / l) * Mb(N)),
                                    D = kb((A / h) * Mb(N))
                                ;(M -= 2 * C) > Nb
                                    ? ((x += C *= g ? 1 : -1), (w -= C))
                                    : ((M = 0), (x = w = (d + p) / 2)),
                                    (E -= 2 * D) > Nb
                                        ? ((m += D *= g ? 1 : -1), (_ -= D))
                                        : ((E = 0), (m = _ = (d + p) / 2))
                            }
                            var P = h * _b(m),
                                O = h * Mb(m),
                                I = l * _b(w),
                                R = l * Mb(w)
                            if (T > Nb) {
                                var F = h * _b(_),
                                    L = h * Mb(_),
                                    z = l * _b(x),
                                    q = l * Mb(x)
                                if (v < Ab) {
                                    var U =
                                            M > Nb
                                                ? (function(
                                                      t,
                                                      n,
                                                      e,
                                                      r,
                                                      i,
                                                      o,
                                                      u,
                                                      a,
                                                  ) {
                                                      var c = e - t,
                                                          f = r - n,
                                                          s = u - i,
                                                          l = a - o,
                                                          h =
                                                              (s * (n - o) -
                                                                  l * (t - i)) /
                                                              (l * c - s * f)
                                                      return [
                                                          t + h * c,
                                                          n + h * f,
                                                      ]
                                                  })(P, O, z, q, F, L, I, R)
                                                : [I, R],
                                        B = P - U[0],
                                        Y = O - U[1],
                                        j = F - U[0],
                                        $ = L - U[1],
                                        H =
                                            1 /
                                            Mb(
                                                ((s =
                                                    (B * j + Y * $) /
                                                    (Eb(B * B + Y * Y) *
                                                        Eb(j * j + $ * $))) > 1
                                                    ? 0
                                                    : s < -1
                                                    ? Ab
                                                    : Math.acos(s)) / 2,
                                            ),
                                        G = Eb(U[0] * U[0] + U[1] * U[1])
                                    ;(S = wb(T, (l - G) / (H - 1))),
                                        (k = wb(T, (h - G) / (H + 1)))
                                }
                            }
                            E > Nb
                                ? k > Nb
                                    ? ((y = Rb(z, q, P, O, h, k, g)),
                                      (b = Rb(F, L, I, R, h, k, g)),
                                      a.moveTo(y.cx + y.x01, y.cy + y.y01),
                                      k < T
                                          ? a.arc(
                                                y.cx,
                                                y.cy,
                                                k,
                                                mb(y.y01, y.x01),
                                                mb(b.y01, b.x01),
                                                !g,
                                            )
                                          : (a.arc(
                                                y.cx,
                                                y.cy,
                                                k,
                                                mb(y.y01, y.x01),
                                                mb(y.y11, y.x11),
                                                !g,
                                            ),
                                            a.arc(
                                                0,
                                                0,
                                                h,
                                                mb(y.cy + y.y11, y.cx + y.x11),
                                                mb(b.cy + b.y11, b.cx + b.x11),
                                                !g,
                                            ),
                                            a.arc(
                                                b.cx,
                                                b.cy,
                                                k,
                                                mb(b.y11, b.x11),
                                                mb(b.y01, b.x01),
                                                !g,
                                            )))
                                    : (a.moveTo(P, O), a.arc(0, 0, h, m, _, !g))
                                : a.moveTo(P, O),
                                l > Nb && M > Nb
                                    ? S > Nb
                                        ? ((y = Rb(I, R, F, L, l, -S, g)),
                                          (b = Rb(P, O, z, q, l, -S, g)),
                                          a.lineTo(y.cx + y.x01, y.cy + y.y01),
                                          S < T
                                              ? a.arc(
                                                    y.cx,
                                                    y.cy,
                                                    S,
                                                    mb(y.y01, y.x01),
                                                    mb(b.y01, b.x01),
                                                    !g,
                                                )
                                              : (a.arc(
                                                    y.cx,
                                                    y.cy,
                                                    S,
                                                    mb(y.y01, y.x01),
                                                    mb(y.y11, y.x11),
                                                    !g,
                                                ),
                                                a.arc(
                                                    0,
                                                    0,
                                                    l,
                                                    mb(
                                                        y.cy + y.y11,
                                                        y.cx + y.x11,
                                                    ),
                                                    mb(
                                                        b.cy + b.y11,
                                                        b.cx + b.x11,
                                                    ),
                                                    g,
                                                ),
                                                a.arc(
                                                    b.cx,
                                                    b.cy,
                                                    S,
                                                    mb(b.y11, b.x11),
                                                    mb(b.y01, b.x01),
                                                    !g,
                                                )))
                                        : a.arc(0, 0, l, w, x, g)
                                    : a.lineTo(I, R)
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
                                    +o.apply(this, arguments)) /
                                    2 -
                                Ab / 2
                        return [_b(r) * e, Mb(r) * e]
                    }),
                    (c.innerRadius = function(n) {
                        return arguments.length
                            ? ((t = 'function' == typeof n ? n : yb(+n)), c)
                            : t
                    }),
                    (c.outerRadius = function(t) {
                        return arguments.length
                            ? ((n = 'function' == typeof t ? t : yb(+t)), c)
                            : n
                    }),
                    (c.cornerRadius = function(t) {
                        return arguments.length
                            ? ((e = 'function' == typeof t ? t : yb(+t)), c)
                            : e
                    }),
                    (c.padRadius = function(t) {
                        return arguments.length
                            ? ((r =
                                  null == t
                                      ? null
                                      : 'function' == typeof t
                                      ? t
                                      : yb(+t)),
                              c)
                            : r
                    }),
                    (c.startAngle = function(t) {
                        return arguments.length
                            ? ((i = 'function' == typeof t ? t : yb(+t)), c)
                            : i
                    }),
                    (c.endAngle = function(t) {
                        return arguments.length
                            ? ((o = 'function' == typeof t ? t : yb(+t)), c)
                            : o
                    }),
                    (c.padAngle = function(t) {
                        return arguments.length
                            ? ((u = 'function' == typeof t ? t : yb(+t)), c)
                            : u
                    }),
                    (c.context = function(t) {
                        return arguments.length
                            ? ((a = null == t ? null : t), c)
                            : a
                    }),
                    c
                )
            }
            function Lb(t) {
                this._context = t
            }
            Lb.prototype = {
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
            var zb = function(t) {
                return new Lb(t)
            }
            function qb(t) {
                return t[0]
            }
            function Ub(t) {
                return t[1]
            }
            var Bb = function() {
                    var t = qb,
                        n = Ub,
                        e = yb(!0),
                        r = null,
                        i = zb,
                        o = null
                    function u(u) {
                        var a,
                            c,
                            f,
                            s = u.length,
                            l = !1
                        for (
                            null == r && (o = i((f = jo()))), a = 0;
                            a <= s;
                            ++a
                        )
                            !(a < s && e((c = u[a]), a, u)) === l &&
                                ((l = !l) ? o.lineStart() : o.lineEnd()),
                                l && o.point(+t(c, a, u), +n(c, a, u))
                        if (f) return (o = null), f + '' || null
                    }
                    return (
                        (u.x = function(n) {
                            return arguments.length
                                ? ((t = 'function' == typeof n ? n : yb(+n)), u)
                                : t
                        }),
                        (u.y = function(t) {
                            return arguments.length
                                ? ((n = 'function' == typeof t ? t : yb(+t)), u)
                                : n
                        }),
                        (u.defined = function(t) {
                            return arguments.length
                                ? ((e = 'function' == typeof t ? t : yb(!!t)),
                                  u)
                                : e
                        }),
                        (u.curve = function(t) {
                            return arguments.length
                                ? ((i = t), null != r && (o = i(r)), u)
                                : i
                        }),
                        (u.context = function(t) {
                            return arguments.length
                                ? (null == t
                                      ? (r = o = null)
                                      : (o = i((r = t))),
                                  u)
                                : r
                        }),
                        u
                    )
                },
                Yb = function() {
                    var t = qb,
                        n = null,
                        e = yb(0),
                        r = Ub,
                        i = yb(!0),
                        o = null,
                        u = zb,
                        a = null
                    function c(c) {
                        var f,
                            s,
                            l,
                            h,
                            d,
                            p = c.length,
                            v = !1,
                            g = new Array(p),
                            y = new Array(p)
                        for (
                            null == o && (a = u((d = jo()))), f = 0;
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
                                        a.point(g[l], y[l])
                                    a.lineEnd(), a.areaEnd()
                                }
                            v &&
                                ((g[f] = +t(h, f, c)),
                                (y[f] = +e(h, f, c)),
                                a.point(
                                    n ? +n(h, f, c) : g[f],
                                    r ? +r(h, f, c) : y[f],
                                ))
                        }
                        if (d) return (a = null), d + '' || null
                    }
                    function f() {
                        return Bb()
                            .defined(i)
                            .curve(u)
                            .context(o)
                    }
                    return (
                        (c.x = function(e) {
                            return arguments.length
                                ? ((t = 'function' == typeof e ? e : yb(+e)),
                                  (n = null),
                                  c)
                                : t
                        }),
                        (c.x0 = function(n) {
                            return arguments.length
                                ? ((t = 'function' == typeof n ? n : yb(+n)), c)
                                : t
                        }),
                        (c.x1 = function(t) {
                            return arguments.length
                                ? ((n =
                                      null == t
                                          ? null
                                          : 'function' == typeof t
                                          ? t
                                          : yb(+t)),
                                  c)
                                : n
                        }),
                        (c.y = function(t) {
                            return arguments.length
                                ? ((e = 'function' == typeof t ? t : yb(+t)),
                                  (r = null),
                                  c)
                                : e
                        }),
                        (c.y0 = function(t) {
                            return arguments.length
                                ? ((e = 'function' == typeof t ? t : yb(+t)), c)
                                : e
                        }),
                        (c.y1 = function(t) {
                            return arguments.length
                                ? ((r =
                                      null == t
                                          ? null
                                          : 'function' == typeof t
                                          ? t
                                          : yb(+t)),
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
                                ? ((i = 'function' == typeof t ? t : yb(!!t)),
                                  c)
                                : i
                        }),
                        (c.curve = function(t) {
                            return arguments.length
                                ? ((u = t), null != o && (a = u(o)), c)
                                : u
                        }),
                        (c.context = function(t) {
                            return arguments.length
                                ? (null == t
                                      ? (o = a = null)
                                      : (a = u((o = t))),
                                  c)
                                : o
                        }),
                        c
                    )
                },
                jb = function(t, n) {
                    return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
                },
                $b = function(t) {
                    return t
                },
                Hb = function() {
                    var t = $b,
                        n = jb,
                        e = null,
                        r = yb(0),
                        i = yb(Sb),
                        o = yb(0)
                    function u(u) {
                        var a,
                            c,
                            f,
                            s,
                            l,
                            h = u.length,
                            d = 0,
                            p = new Array(h),
                            v = new Array(h),
                            g = +r.apply(this, arguments),
                            y = Math.min(
                                Sb,
                                Math.max(-Sb, i.apply(this, arguments) - g),
                            ),
                            b = Math.min(
                                Math.abs(y) / h,
                                o.apply(this, arguments),
                            ),
                            m = b * (y < 0 ? -1 : 1)
                        for (a = 0; a < h; ++a)
                            (l = v[(p[a] = a)] = +t(u[a], a, u)) > 0 && (d += l)
                        for (
                            null != n
                                ? p.sort(function(t, e) {
                                      return n(v[t], v[e])
                                  })
                                : null != e &&
                                  p.sort(function(t, n) {
                                      return e(u[t], u[n])
                                  }),
                                a = 0,
                                f = d ? (y - h * m) / d : 0;
                            a < h;
                            ++a, g = s
                        )
                            (c = p[a]),
                                (s = g + ((l = v[c]) > 0 ? l * f : 0) + m),
                                (v[c] = {
                                    data: u[c],
                                    index: a,
                                    value: l,
                                    startAngle: g,
                                    endAngle: s,
                                    padAngle: b,
                                })
                        return v
                    }
                    return (
                        (u.value = function(n) {
                            return arguments.length
                                ? ((t = 'function' == typeof n ? n : yb(+n)), u)
                                : t
                        }),
                        (u.sortValues = function(t) {
                            return arguments.length
                                ? ((n = t), (e = null), u)
                                : n
                        }),
                        (u.sort = function(t) {
                            return arguments.length
                                ? ((e = t), (n = null), u)
                                : e
                        }),
                        (u.startAngle = function(t) {
                            return arguments.length
                                ? ((r = 'function' == typeof t ? t : yb(+t)), u)
                                : r
                        }),
                        (u.endAngle = function(t) {
                            return arguments.length
                                ? ((i = 'function' == typeof t ? t : yb(+t)), u)
                                : i
                        }),
                        (u.padAngle = function(t) {
                            return arguments.length
                                ? ((o = 'function' == typeof t ? t : yb(+t)), u)
                                : o
                        }),
                        u
                    )
                },
                Gb = Vb(zb)
            function Xb(t) {
                this._curve = t
            }
            function Vb(t) {
                function n(n) {
                    return new Xb(t(n))
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
                        return arguments.length ? n(Vb(t)) : n()._curve
                    }),
                    t
                )
            }
            Xb.prototype = {
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
                    return Wb(Bb().curve(Gb))
                },
                Kb = function() {
                    var t = Yb().curve(Gb),
                        n = t.curve,
                        e = t.lineX0,
                        r = t.lineX1,
                        i = t.lineY0,
                        o = t.lineY1
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
                            return Wb(o())
                        }),
                        delete t.lineY1,
                        (t.curve = function(t) {
                            return arguments.length ? n(Vb(t)) : n()._curve
                        }),
                        t
                    )
                },
                Qb = function(t, n) {
                    return [
                        (n = +n) * Math.cos((t -= Math.PI / 2)),
                        n * Math.sin(t),
                    ]
                },
                Jb = Array.prototype.slice
            function tm(t) {
                return t.source
            }
            function nm(t) {
                return t.target
            }
            function em(t) {
                var n = tm,
                    e = nm,
                    r = qb,
                    i = Ub,
                    o = null
                function u() {
                    var u,
                        a = Jb.call(arguments),
                        c = n.apply(this, a),
                        f = e.apply(this, a)
                    if (
                        (o || (o = u = jo()),
                        t(
                            o,
                            +r.apply(this, ((a[0] = c), a)),
                            +i.apply(this, a),
                            +r.apply(this, ((a[0] = f), a)),
                            +i.apply(this, a),
                        ),
                        u)
                    )
                        return (o = null), u + '' || null
                }
                return (
                    (u.source = function(t) {
                        return arguments.length ? ((n = t), u) : n
                    }),
                    (u.target = function(t) {
                        return arguments.length ? ((e = t), u) : e
                    }),
                    (u.x = function(t) {
                        return arguments.length
                            ? ((r = 'function' == typeof t ? t : yb(+t)), u)
                            : r
                    }),
                    (u.y = function(t) {
                        return arguments.length
                            ? ((i = 'function' == typeof t ? t : yb(+t)), u)
                            : i
                    }),
                    (u.context = function(t) {
                        return arguments.length
                            ? ((o = null == t ? null : t), u)
                            : o
                    }),
                    u
                )
            }
            function rm(t, n, e, r, i) {
                t.moveTo(n, e),
                    t.bezierCurveTo((n = (n + r) / 2), e, n, i, r, i)
            }
            function im(t, n, e, r, i) {
                t.moveTo(n, e),
                    t.bezierCurveTo(n, (e = (e + i) / 2), r, e, r, i)
            }
            function om(t, n, e, r, i) {
                var o = Qb(n, e),
                    u = Qb(n, (e = (e + i) / 2)),
                    a = Qb(r, e),
                    c = Qb(r, i)
                t.moveTo(o[0], o[1]),
                    t.bezierCurveTo(u[0], u[1], a[0], a[1], c[0], c[1])
            }
            function um() {
                return em(rm)
            }
            function am() {
                return em(im)
            }
            function cm() {
                var t = em(om)
                return (
                    (t.angle = t.x), delete t.x, (t.radius = t.y), delete t.y, t
                )
            }
            var fm = {
                    draw: function(t, n) {
                        var e = Math.sqrt(n / Ab)
                        t.moveTo(e, 0), t.arc(0, 0, e, 0, Sb)
                    },
                },
                sm = {
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
                lm = Math.sqrt(1 / 3),
                hm = 2 * lm,
                dm = {
                    draw: function(t, n) {
                        var e = Math.sqrt(n / hm),
                            r = e * lm
                        t.moveTo(0, -e),
                            t.lineTo(r, 0),
                            t.lineTo(0, e),
                            t.lineTo(-r, 0),
                            t.closePath()
                    },
                },
                pm = Math.sin(Ab / 10) / Math.sin((7 * Ab) / 10),
                vm = Math.sin(Sb / 10) * pm,
                gm = -Math.cos(Sb / 10) * pm,
                ym = {
                    draw: function(t, n) {
                        var e = Math.sqrt(0.8908130915292852 * n),
                            r = vm * e,
                            i = gm * e
                        t.moveTo(0, -e), t.lineTo(r, i)
                        for (var o = 1; o < 5; ++o) {
                            var u = (Sb * o) / 5,
                                a = Math.cos(u),
                                c = Math.sin(u)
                            t.lineTo(c * e, -a * e),
                                t.lineTo(a * r - c * i, c * r + a * i)
                        }
                        t.closePath()
                    },
                },
                bm = {
                    draw: function(t, n) {
                        var e = Math.sqrt(n),
                            r = -e / 2
                        t.rect(r, r, e, e)
                    },
                },
                mm = Math.sqrt(3),
                _m = {
                    draw: function(t, n) {
                        var e = -Math.sqrt(n / (3 * mm))
                        t.moveTo(0, 2 * e),
                            t.lineTo(-mm * e, -e),
                            t.lineTo(mm * e, -e),
                            t.closePath()
                    },
                },
                xm = Math.sqrt(3) / 2,
                wm = 1 / Math.sqrt(12),
                Mm = 3 * (wm / 2 + 1),
                Em = {
                    draw: function(t, n) {
                        var e = Math.sqrt(n / Mm),
                            r = e / 2,
                            i = e * wm,
                            o = r,
                            u = e * wm + e,
                            a = -o,
                            c = u
                        t.moveTo(r, i),
                            t.lineTo(o, u),
                            t.lineTo(a, c),
                            t.lineTo(-0.5 * r - xm * i, xm * r + -0.5 * i),
                            t.lineTo(-0.5 * o - xm * u, xm * o + -0.5 * u),
                            t.lineTo(-0.5 * a - xm * c, xm * a + -0.5 * c),
                            t.lineTo(-0.5 * r + xm * i, -0.5 * i - xm * r),
                            t.lineTo(-0.5 * o + xm * u, -0.5 * u - xm * o),
                            t.lineTo(-0.5 * a + xm * c, -0.5 * c - xm * a),
                            t.closePath()
                    },
                },
                Nm = [fm, sm, dm, bm, ym, _m, Em],
                Am = function() {
                    var t = yb(fm),
                        n = yb(64),
                        e = null
                    function r() {
                        var r
                        if (
                            (e || (e = r = jo()),
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
                                ? ((t = 'function' == typeof n ? n : yb(n)), r)
                                : t
                        }),
                        (r.size = function(t) {
                            return arguments.length
                                ? ((n = 'function' == typeof t ? t : yb(+t)), r)
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
                Tm = function() {}
            function Sm(t, n, e) {
                t._context.bezierCurveTo(
                    (2 * t._x0 + t._x1) / 3,
                    (2 * t._y0 + t._y1) / 3,
                    (t._x0 + 2 * t._x1) / 3,
                    (t._y0 + 2 * t._y1) / 3,
                    (t._x0 + 4 * t._x1 + n) / 6,
                    (t._y0 + 4 * t._y1 + e) / 6,
                )
            }
            function km(t) {
                this._context = t
            }
            km.prototype = {
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
                            Sm(this, this._x1, this._y1)
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
                            Sm(this, t, n)
                    }
                    ;(this._x0 = this._x1),
                        (this._x1 = t),
                        (this._y0 = this._y1),
                        (this._y1 = n)
                },
            }
            var Cm = function(t) {
                return new km(t)
            }
            function Dm(t) {
                this._context = t
            }
            Dm.prototype = {
                areaStart: Tm,
                areaEnd: Tm,
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
                            Sm(this, t, n)
                    }
                    ;(this._x0 = this._x1),
                        (this._x1 = t),
                        (this._y0 = this._y1),
                        (this._y1 = n)
                },
            }
            var Pm = function(t) {
                return new Dm(t)
            }
            function Om(t) {
                this._context = t
            }
            Om.prototype = {
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
                            Sm(this, t, n)
                    }
                    ;(this._x0 = this._x1),
                        (this._x1 = t),
                        (this._y0 = this._y1),
                        (this._y1 = n)
                },
            }
            var Im = function(t) {
                return new Om(t)
            }
            function Rm(t, n) {
                ;(this._basis = new km(t)), (this._beta = n)
            }
            Rm.prototype = {
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
                                o = n[0],
                                u = t[e] - i,
                                a = n[e] - o,
                                c = -1;
                            ++c <= e;

                        )
                            (r = c / e),
                                this._basis.point(
                                    this._beta * t[c] +
                                        (1 - this._beta) * (i + r * u),
                                    this._beta * n[c] +
                                        (1 - this._beta) * (o + r * a),
                                )
                    ;(this._x = this._y = null), this._basis.lineEnd()
                },
                point: function(t, n) {
                    this._x.push(+t), this._y.push(+n)
                },
            }
            var Fm = (function t(n) {
                function e(t) {
                    return 1 === n ? new km(t) : new Rm(t, n)
                }
                return (
                    (e.beta = function(n) {
                        return t(+n)
                    }),
                    e
                )
            })(0.85)
            function Lm(t, n, e) {
                t._context.bezierCurveTo(
                    t._x1 + t._k * (t._x2 - t._x0),
                    t._y1 + t._k * (t._y2 - t._y0),
                    t._x2 + t._k * (t._x1 - n),
                    t._y2 + t._k * (t._y1 - e),
                    t._x2,
                    t._y2,
                )
            }
            function zm(t, n) {
                ;(this._context = t), (this._k = (1 - n) / 6)
            }
            zm.prototype = {
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
                            Lm(this, this._x1, this._y1)
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
                            Lm(this, t, n)
                    }
                    ;(this._x0 = this._x1),
                        (this._x1 = this._x2),
                        (this._x2 = t),
                        (this._y0 = this._y1),
                        (this._y1 = this._y2),
                        (this._y2 = n)
                },
            }
            var qm = (function t(n) {
                function e(t) {
                    return new zm(t, n)
                }
                return (
                    (e.tension = function(n) {
                        return t(+n)
                    }),
                    e
                )
            })(0)
            function Um(t, n) {
                ;(this._context = t), (this._k = (1 - n) / 6)
            }
            Um.prototype = {
                areaStart: Tm,
                areaEnd: Tm,
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
                            Lm(this, t, n)
                    }
                    ;(this._x0 = this._x1),
                        (this._x1 = this._x2),
                        (this._x2 = t),
                        (this._y0 = this._y1),
                        (this._y1 = this._y2),
                        (this._y2 = n)
                },
            }
            var Bm = (function t(n) {
                function e(t) {
                    return new Um(t, n)
                }
                return (
                    (e.tension = function(n) {
                        return t(+n)
                    }),
                    e
                )
            })(0)
            function Ym(t, n) {
                ;(this._context = t), (this._k = (1 - n) / 6)
            }
            Ym.prototype = {
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
                            Lm(this, t, n)
                    }
                    ;(this._x0 = this._x1),
                        (this._x1 = this._x2),
                        (this._x2 = t),
                        (this._y0 = this._y1),
                        (this._y1 = this._y2),
                        (this._y2 = n)
                },
            }
            var jm = (function t(n) {
                function e(t) {
                    return new Ym(t, n)
                }
                return (
                    (e.tension = function(n) {
                        return t(+n)
                    }),
                    e
                )
            })(0)
            function $m(t, n, e) {
                var r = t._x1,
                    i = t._y1,
                    o = t._x2,
                    u = t._y2
                if (t._l01_a > Nb) {
                    var a = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
                        c = 3 * t._l01_a * (t._l01_a + t._l12_a)
                    ;(r = (r * a - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / c),
                        (i =
                            (i * a - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / c)
                }
                if (t._l23_a > Nb) {
                    var f = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
                        s = 3 * t._l23_a * (t._l23_a + t._l12_a)
                    ;(o = (o * f + t._x1 * t._l23_2a - n * t._l12_2a) / s),
                        (u = (u * f + t._y1 * t._l23_2a - e * t._l12_2a) / s)
                }
                t._context.bezierCurveTo(r, i, o, u, t._x2, t._y2)
            }
            function Hm(t, n) {
                ;(this._context = t), (this._alpha = n)
            }
            Hm.prototype = {
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
                            $m(this, t, n)
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
            var Gm = (function t(n) {
                function e(t) {
                    return n ? new Hm(t, n) : new zm(t, 0)
                }
                return (
                    (e.alpha = function(n) {
                        return t(+n)
                    }),
                    e
                )
            })(0.5)
            function Xm(t, n) {
                ;(this._context = t), (this._alpha = n)
            }
            Xm.prototype = {
                areaStart: Tm,
                areaEnd: Tm,
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
                            $m(this, t, n)
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
            var Vm = (function t(n) {
                function e(t) {
                    return n ? new Xm(t, n) : new Um(t, 0)
                }
                return (
                    (e.alpha = function(n) {
                        return t(+n)
                    }),
                    e
                )
            })(0.5)
            function Wm(t, n) {
                ;(this._context = t), (this._alpha = n)
            }
            Wm.prototype = {
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
                            $m(this, t, n)
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
            var Zm = (function t(n) {
                function e(t) {
                    return n ? new Wm(t, n) : new Ym(t, 0)
                }
                return (
                    (e.alpha = function(n) {
                        return t(+n)
                    }),
                    e
                )
            })(0.5)
            function Km(t) {
                this._context = t
            }
            Km.prototype = {
                areaStart: Tm,
                areaEnd: Tm,
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
            var Qm = function(t) {
                return new Km(t)
            }
            function Jm(t) {
                return t < 0 ? -1 : 1
            }
            function t_(t, n, e) {
                var r = t._x1 - t._x0,
                    i = n - t._x1,
                    o = (t._y1 - t._y0) / (r || (i < 0 && -0)),
                    u = (e - t._y1) / (i || (r < 0 && -0)),
                    a = (o * i + u * r) / (r + i)
                return (
                    (Jm(o) + Jm(u)) *
                        Math.min(Math.abs(o), Math.abs(u), 0.5 * Math.abs(a)) ||
                    0
                )
            }
            function n_(t, n) {
                var e = t._x1 - t._x0
                return e ? ((3 * (t._y1 - t._y0)) / e - n) / 2 : n
            }
            function e_(t, n, e) {
                var r = t._x0,
                    i = t._y0,
                    o = t._x1,
                    u = t._y1,
                    a = (o - r) / 3
                t._context.bezierCurveTo(
                    r + a,
                    i + a * n,
                    o - a,
                    u - a * e,
                    o,
                    u,
                )
            }
            function r_(t) {
                this._context = t
            }
            function i_(t) {
                this._context = new o_(t)
            }
            function o_(t) {
                this._context = t
            }
            function u_(t) {
                return new r_(t)
            }
            function a_(t) {
                return new i_(t)
            }
            function c_(t) {
                this._context = t
            }
            function f_(t) {
                var n,
                    e,
                    r = t.length - 1,
                    i = new Array(r),
                    o = new Array(r),
                    u = new Array(r)
                for (
                    i[0] = 0, o[0] = 2, u[0] = t[0] + 2 * t[1], n = 1;
                    n < r - 1;
                    ++n
                )
                    (i[n] = 1), (o[n] = 4), (u[n] = 4 * t[n] + 2 * t[n + 1])
                for (
                    i[r - 1] = 2,
                        o[r - 1] = 7,
                        u[r - 1] = 8 * t[r - 1] + t[r],
                        n = 1;
                    n < r;
                    ++n
                )
                    (e = i[n] / o[n - 1]), (o[n] -= e), (u[n] -= e * u[n - 1])
                for (i[r - 1] = u[r - 1] / o[r - 1], n = r - 2; n >= 0; --n)
                    i[n] = (u[n] - i[n + 1]) / o[n]
                for (o[r - 1] = (t[r] + i[r - 1]) / 2, n = 0; n < r - 1; ++n)
                    o[n] = 2 * t[n + 1] - i[n + 1]
                return [i, o]
            }
            ;(r_.prototype = {
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
                            e_(this, this._t0, n_(this, this._t0))
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
                                    e_(this, n_(this, (e = t_(this, t, n))), e)
                                break
                            default:
                                e_(this, this._t0, (e = t_(this, t, n)))
                        }
                        ;(this._x0 = this._x1),
                            (this._x1 = t),
                            (this._y0 = this._y1),
                            (this._y1 = n),
                            (this._t0 = e)
                    }
                },
            }),
                ((i_.prototype = Object.create(r_.prototype)).point = function(
                    t,
                    n,
                ) {
                    r_.prototype.point.call(this, n, t)
                }),
                (o_.prototype = {
                    moveTo: function(t, n) {
                        this._context.moveTo(n, t)
                    },
                    closePath: function() {
                        this._context.closePath()
                    },
                    lineTo: function(t, n) {
                        this._context.lineTo(n, t)
                    },
                    bezierCurveTo: function(t, n, e, r, i, o) {
                        this._context.bezierCurveTo(n, t, r, e, o, i)
                    },
                }),
                (c_.prototype = {
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
                                    var r = f_(t), i = f_(n), o = 0, u = 1;
                                    u < e;
                                    ++o, ++u
                                )
                                    this._context.bezierCurveTo(
                                        r[0][o],
                                        i[0][o],
                                        r[1][o],
                                        i[1][o],
                                        t[u],
                                        n[u],
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
            var s_ = function(t) {
                return new c_(t)
            }
            function l_(t, n) {
                ;(this._context = t), (this._t = n)
            }
            l_.prototype = {
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
            var h_ = function(t) {
                return new l_(t, 0.5)
            }
            function d_(t) {
                return new l_(t, 0)
            }
            function p_(t) {
                return new l_(t, 1)
            }
            var v_ = function(t, n) {
                    if ((i = t.length) > 1)
                        for (
                            var e, r, i, o = 1, u = t[n[0]], a = u.length;
                            o < i;
                            ++o
                        )
                            for (r = u, u = t[n[o]], e = 0; e < a; ++e)
                                u[e][1] += u[e][0] = isNaN(r[e][1])
                                    ? r[e][0]
                                    : r[e][1]
                },
                g_ = function(t) {
                    for (var n = t.length, e = new Array(n); --n >= 0; )
                        e[n] = n
                    return e
                }
            function y_(t, n) {
                return t[n]
            }
            var b_ = function() {
                    var t = yb([]),
                        n = g_,
                        e = v_,
                        r = y_
                    function i(i) {
                        var o,
                            u,
                            a = t.apply(this, arguments),
                            c = i.length,
                            f = a.length,
                            s = new Array(f)
                        for (o = 0; o < f; ++o) {
                            for (
                                var l,
                                    h = a[o],
                                    d = (s[o] = new Array(c)),
                                    p = 0;
                                p < c;
                                ++p
                            )
                                (d[p] = l = [0, +r(i[p], h, p, i)]),
                                    (l.data = i[p])
                            d.key = h
                        }
                        for (o = 0, u = n(s); o < f; ++o) s[u[o]].index = o
                        return e(s, u), s
                    }
                    return (
                        (i.keys = function(n) {
                            return arguments.length
                                ? ((t =
                                      'function' == typeof n
                                          ? n
                                          : yb(Jb.call(n))),
                                  i)
                                : t
                        }),
                        (i.value = function(t) {
                            return arguments.length
                                ? ((r = 'function' == typeof t ? t : yb(+t)), i)
                                : r
                        }),
                        (i.order = function(t) {
                            return arguments.length
                                ? ((n =
                                      null == t
                                          ? g_
                                          : 'function' == typeof t
                                          ? t
                                          : yb(Jb.call(t))),
                                  i)
                                : n
                        }),
                        (i.offset = function(t) {
                            return arguments.length
                                ? ((e = null == t ? v_ : t), i)
                                : e
                        }),
                        i
                    )
                },
                m_ = function(t, n) {
                    if ((r = t.length) > 0) {
                        for (var e, r, i, o = 0, u = t[0].length; o < u; ++o) {
                            for (i = e = 0; e < r; ++e) i += t[e][o][1] || 0
                            if (i) for (e = 0; e < r; ++e) t[e][o][1] /= i
                        }
                        v_(t, n)
                    }
                },
                __ = function(t, n) {
                    if ((a = t.length) > 1)
                        for (
                            var e, r, i, o, u, a, c = 0, f = t[n[0]].length;
                            c < f;
                            ++c
                        )
                            for (o = u = 0, e = 0; e < a; ++e)
                                (i = (r = t[n[e]][c])[1] - r[0]) >= 0
                                    ? ((r[0] = o), (r[1] = o += i))
                                    : i < 0
                                    ? ((r[1] = u), (r[0] = u += i))
                                    : (r[0] = o)
                },
                x_ = function(t, n) {
                    if ((e = t.length) > 0) {
                        for (
                            var e, r = 0, i = t[n[0]], o = i.length;
                            r < o;
                            ++r
                        ) {
                            for (var u = 0, a = 0; u < e; ++u)
                                a += t[u][r][1] || 0
                            i[r][1] += i[r][0] = -a / 2
                        }
                        v_(t, n)
                    }
                },
                w_ = function(t, n) {
                    if ((i = t.length) > 0 && (r = (e = t[n[0]]).length) > 0) {
                        for (var e, r, i, o = 0, u = 1; u < r; ++u) {
                            for (var a = 0, c = 0, f = 0; a < i; ++a) {
                                for (
                                    var s = t[n[a]],
                                        l = s[u][1] || 0,
                                        h = (l - (s[u - 1][1] || 0)) / 2,
                                        d = 0;
                                    d < a;
                                    ++d
                                ) {
                                    var p = t[n[d]]
                                    h += (p[u][1] || 0) - (p[u - 1][1] || 0)
                                }
                                ;(c += l), (f += h * l)
                            }
                            ;(e[u - 1][1] += e[u - 1][0] = o), c && (o -= f / c)
                        }
                        ;(e[u - 1][1] += e[u - 1][0] = o), v_(t, n)
                    }
                },
                M_ = function(t) {
                    var n = t.map(E_)
                    return g_(t).sort(function(t, e) {
                        return n[t] - n[e]
                    })
                }
            function E_(t) {
                for (var n, e = 0, r = -1, i = t.length; ++r < i; )
                    (n = +t[r][1]) && (e += n)
                return e
            }
            var N_ = function(t) {
                    return M_(t).reverse()
                },
                A_ = function(t) {
                    var n,
                        e,
                        r = t.length,
                        i = t.map(E_),
                        o = g_(t).sort(function(t, n) {
                            return i[n] - i[t]
                        }),
                        u = 0,
                        a = 0,
                        c = [],
                        f = []
                    for (n = 0; n < r; ++n)
                        (e = o[n]),
                            u < a
                                ? ((u += i[e]), c.push(e))
                                : ((a += i[e]), f.push(e))
                    return f.reverse().concat(c)
                },
                T_ = function(t) {
                    return g_(t).reverse()
                },
                S_ = function(t) {
                    return function() {
                        return t
                    }
                }
            function k_(t) {
                return t[0]
            }
            function C_(t) {
                return t[1]
            }
            function D_() {
                this._ = null
            }
            function P_(t) {
                t.U = t.C = t.L = t.R = t.P = t.N = null
            }
            function O_(t, n) {
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
            function I_(t, n) {
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
            function R_(t) {
                for (; t.L; ) t = t.L
                return t
            }
            D_.prototype = {
                constructor: D_,
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
                            ? ((t = R_(this._)),
                              (n.P = null),
                              (n.N = t),
                              (t.P = t.L = n),
                              (e = t))
                            : ((n.P = n.N = null), (this._ = n), (e = null))
                    for (n.L = n.R = null, n.U = e, n.C = !0, t = n; e && e.C; )
                        e === (r = e.U).L
                            ? (i = r.R) && i.C
                                ? ((e.C = i.C = !1), (r.C = !0), (t = r))
                                : (t === e.R && (O_(this, e), (e = (t = e).U)),
                                  (e.C = !1),
                                  (r.C = !0),
                                  I_(this, r))
                            : (i = r.L) && i.C
                            ? ((e.C = i.C = !1), (r.C = !0), (t = r))
                            : (t === e.L && (I_(this, e), (e = (t = e).U)),
                              (e.C = !1),
                              (r.C = !0),
                              O_(this, r)),
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
                        o = t.L,
                        u = t.R
                    if (
                        ((e = o ? (u ? R_(u) : o) : u),
                        i ? (i.L === t ? (i.L = e) : (i.R = e)) : (this._ = e),
                        o && u
                            ? ((r = e.C),
                              (e.C = t.C),
                              (e.L = o),
                              (o.U = e),
                              e !== u
                                  ? ((i = e.U),
                                    (e.U = t.U),
                                    (t = e.R),
                                    (i.L = t),
                                    (e.R = u),
                                    (u.U = e))
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
                                            O_(this, i),
                                            (n = i.R)),
                                        (n.L && n.L.C) || (n.R && n.R.C))
                                    ) {
                                        ;(n.R && n.R.C) ||
                                            ((n.L.C = !1),
                                            (n.C = !0),
                                            I_(this, n),
                                            (n = i.R)),
                                            (n.C = i.C),
                                            (i.C = n.R.C = !1),
                                            O_(this, i),
                                            (t = this._)
                                        break
                                    }
                                } else if (
                                    ((n = i.L).C &&
                                        ((n.C = !1),
                                        (i.C = !0),
                                        I_(this, i),
                                        (n = i.L)),
                                    (n.L && n.L.C) || (n.R && n.R.C))
                                ) {
                                    ;(n.L && n.L.C) ||
                                        ((n.R.C = !1),
                                        (n.C = !0),
                                        O_(this, n),
                                        (n = i.L)),
                                        (n.C = i.C),
                                        (i.C = n.L.C = !1),
                                        I_(this, i),
                                        (t = this._)
                                    break
                                }
                                ;(n.C = !0), (t = i), (i = i.U)
                            } while (!t.C)
                            t && (t.C = !1)
                        }
                },
            }
            var F_ = D_
            function L_(t, n, e, r) {
                var i = [null, null],
                    o = ax.push(i) - 1
                return (
                    (i.left = t),
                    (i.right = n),
                    e && q_(i, t, n, e),
                    r && q_(i, n, t, r),
                    ox[t.index].halfedges.push(o),
                    ox[n.index].halfedges.push(o),
                    i
                )
            }
            function z_(t, n, e) {
                var r = [n, e]
                return (r.left = t), r
            }
            function q_(t, n, e, r) {
                t[0] || t[1]
                    ? t.left === e
                        ? (t[1] = r)
                        : (t[0] = r)
                    : ((t[0] = r), (t.left = n), (t.right = e))
            }
            function U_(t, n, e, r, i) {
                var o,
                    u = t[0],
                    a = t[1],
                    c = u[0],
                    f = u[1],
                    s = 0,
                    l = 1,
                    h = a[0] - c,
                    d = a[1] - f
                if (((o = n - c), h || !(o > 0))) {
                    if (((o /= h), h < 0)) {
                        if (o < s) return
                        o < l && (l = o)
                    } else if (h > 0) {
                        if (o > l) return
                        o > s && (s = o)
                    }
                    if (((o = r - c), h || !(o < 0))) {
                        if (((o /= h), h < 0)) {
                            if (o > l) return
                            o > s && (s = o)
                        } else if (h > 0) {
                            if (o < s) return
                            o < l && (l = o)
                        }
                        if (((o = e - f), d || !(o > 0))) {
                            if (((o /= d), d < 0)) {
                                if (o < s) return
                                o < l && (l = o)
                            } else if (d > 0) {
                                if (o > l) return
                                o > s && (s = o)
                            }
                            if (((o = i - f), d || !(o < 0))) {
                                if (((o /= d), d < 0)) {
                                    if (o > l) return
                                    o > s && (s = o)
                                } else if (d > 0) {
                                    if (o < s) return
                                    o < l && (l = o)
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
            function B_(t, n, e, r, i) {
                var o = t[1]
                if (o) return !0
                var u,
                    a,
                    c = t[0],
                    f = t.left,
                    s = t.right,
                    l = f[0],
                    h = f[1],
                    d = s[0],
                    p = s[1],
                    v = (l + d) / 2,
                    g = (h + p) / 2
                if (p === h) {
                    if (v < n || v >= r) return
                    if (l > d) {
                        if (c) {
                            if (c[1] >= i) return
                        } else c = [v, e]
                        o = [v, i]
                    } else {
                        if (c) {
                            if (c[1] < e) return
                        } else c = [v, i]
                        o = [v, e]
                    }
                } else if (
                    ((a = g - (u = (l - d) / (p - h)) * v), u < -1 || u > 1)
                )
                    if (l > d) {
                        if (c) {
                            if (c[1] >= i) return
                        } else c = [(e - a) / u, e]
                        o = [(i - a) / u, i]
                    } else {
                        if (c) {
                            if (c[1] < e) return
                        } else c = [(i - a) / u, i]
                        o = [(e - a) / u, e]
                    }
                else if (h < p) {
                    if (c) {
                        if (c[0] >= r) return
                    } else c = [n, u * n + a]
                    o = [r, u * r + a]
                } else {
                    if (c) {
                        if (c[0] < n) return
                    } else c = [r, u * r + a]
                    o = [n, u * n + a]
                }
                return (t[0] = c), (t[1] = o), !0
            }
            function Y_(t, n) {
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
            function j_(t, n) {
                return n[+(n.left !== t.site)]
            }
            function $_(t, n) {
                return n[+(n.left === t.site)]
            }
            var H_,
                G_ = []
            function X_() {
                P_(this),
                    (this.x = this.y = this.arc = this.site = this.cy = null)
            }
            function V_(t) {
                var n = t.P,
                    e = t.N
                if (n && e) {
                    var r = n.site,
                        i = t.site,
                        o = e.site
                    if (r !== o) {
                        var u = i[0],
                            a = i[1],
                            c = r[0] - u,
                            f = r[1] - a,
                            s = o[0] - u,
                            l = o[1] - a,
                            h = 2 * (c * l - f * s)
                        if (!(h >= -fx)) {
                            var d = c * c + f * f,
                                p = s * s + l * l,
                                v = (l * d - f * p) / h,
                                g = (c * p - s * d) / h,
                                y = G_.pop() || new X_()
                            ;(y.arc = t),
                                (y.site = i),
                                (y.x = v + u),
                                (y.y =
                                    (y.cy = g + a) + Math.sqrt(v * v + g * g)),
                                (t.circle = y)
                            for (var b = null, m = ux._; m; )
                                if (y.y < m.y || (y.y === m.y && y.x <= m.x)) {
                                    if (!m.L) {
                                        b = m.P
                                        break
                                    }
                                    m = m.L
                                } else {
                                    if (!m.R) {
                                        b = m
                                        break
                                    }
                                    m = m.R
                                }
                            ux.insert(b, y), b || (H_ = y)
                        }
                    }
                }
            }
            function W_(t) {
                var n = t.circle
                n &&
                    (n.P || (H_ = n.N),
                    ux.remove(n),
                    G_.push(n),
                    P_(n),
                    (t.circle = null))
            }
            var Z_ = []
            function K_() {
                P_(this), (this.edge = this.site = this.circle = null)
            }
            function Q_(t) {
                var n = Z_.pop() || new K_()
                return (n.site = t), n
            }
            function J_(t) {
                W_(t), ix.remove(t), Z_.push(t), P_(t)
            }
            function tx(t) {
                var n = t.circle,
                    e = n.x,
                    r = n.cy,
                    i = [e, r],
                    o = t.P,
                    u = t.N,
                    a = [t]
                J_(t)
                for (
                    var c = o;
                    c.circle &&
                    Math.abs(e - c.circle.x) < cx &&
                    Math.abs(r - c.circle.cy) < cx;

                )
                    (o = c.P), a.unshift(c), J_(c), (c = o)
                a.unshift(c), W_(c)
                for (
                    var f = u;
                    f.circle &&
                    Math.abs(e - f.circle.x) < cx &&
                    Math.abs(r - f.circle.cy) < cx;

                )
                    (u = f.N), a.push(f), J_(f), (f = u)
                a.push(f), W_(f)
                var s,
                    l = a.length
                for (s = 1; s < l; ++s)
                    (f = a[s]), (c = a[s - 1]), q_(f.edge, c.site, f.site, i)
                ;(c = a[0]),
                    ((f = a[l - 1]).edge = L_(c.site, f.site, null, i)),
                    V_(c),
                    V_(f)
            }
            function nx(t) {
                for (var n, e, r, i, o = t[0], u = t[1], a = ix._; a; )
                    if ((r = ex(a, u) - o) > cx) a = a.L
                    else {
                        if (!((i = o - rx(a, u)) > cx)) {
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
                    ox[t.index] = { site: t, halfedges: [] }
                })(t)
                var c = Q_(t)
                if ((ix.insert(n, c), n || e)) {
                    if (n === e)
                        return (
                            W_(n),
                            (e = Q_(n.site)),
                            ix.insert(c, e),
                            (c.edge = e.edge = L_(n.site, c.site)),
                            V_(n),
                            void V_(e)
                        )
                    if (e) {
                        W_(n), W_(e)
                        var f = n.site,
                            s = f[0],
                            l = f[1],
                            h = t[0] - s,
                            d = t[1] - l,
                            p = e.site,
                            v = p[0] - s,
                            g = p[1] - l,
                            y = 2 * (h * g - d * v),
                            b = h * h + d * d,
                            m = v * v + g * g,
                            _ = [
                                (g * b - d * m) / y + s,
                                (h * m - v * b) / y + l,
                            ]
                        q_(e.edge, f, p, _),
                            (c.edge = L_(f, t, null, _)),
                            (e.edge = L_(t, p, null, _)),
                            V_(n),
                            V_(e)
                    } else c.edge = L_(n.site, c.site)
                }
            }
            function ex(t, n) {
                var e = t.site,
                    r = e[0],
                    i = e[1],
                    o = i - n
                if (!o) return r
                var u = t.P
                if (!u) return -1 / 0
                var a = (e = u.site)[0],
                    c = e[1],
                    f = c - n
                if (!f) return a
                var s = a - r,
                    l = 1 / o - 1 / f,
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
                                          o / 2),
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
                ox,
                ux,
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
                    o = t.sort(sx).pop()
                for (
                    ax = [],
                        ox = new Array(t.length),
                        ix = new F_(),
                        ux = new F_();
                    ;

                )
                    if (
                        ((i = H_),
                        o && (!i || o[1] < i.y || (o[1] === i.y && o[0] < i.x)))
                    )
                        (o[0] === e && o[1] === r) ||
                            (nx(o), (e = o[0]), (r = o[1])),
                            (o = t.pop())
                    else {
                        if (!i) break
                        tx(i.arc)
                    }
                if (
                    ((function() {
                        for (var t, n, e, r, i = 0, o = ox.length; i < o; ++i)
                            if ((t = ox[i]) && (r = (n = t.halfedges).length)) {
                                var u = new Array(r),
                                    a = new Array(r)
                                for (e = 0; e < r; ++e)
                                    (u[e] = e), (a[e] = Y_(t, ax[n[e]]))
                                for (
                                    u.sort(function(t, n) {
                                        return a[n] - a[t]
                                    }),
                                        e = 0;
                                    e < r;
                                    ++e
                                )
                                    a[e] = n[u[e]]
                                for (e = 0; e < r; ++e) n[e] = a[e]
                            }
                    })(),
                    n)
                ) {
                    var u = +n[0][0],
                        a = +n[0][1],
                        c = +n[1][0],
                        f = +n[1][1]
                    !(function(t, n, e, r) {
                        for (var i, o = ax.length; o--; )
                            (B_((i = ax[o]), t, n, e, r) &&
                                U_(i, t, n, e, r) &&
                                (Math.abs(i[0][0] - i[1][0]) > cx ||
                                    Math.abs(i[0][1] - i[1][1]) > cx)) ||
                                delete ax[o]
                    })(u, a, c, f),
                        (function(t, n, e, r) {
                            var i,
                                o,
                                u,
                                a,
                                c,
                                f,
                                s,
                                l,
                                h,
                                d,
                                p,
                                v,
                                g = ox.length,
                                y = !0
                            for (i = 0; i < g; ++i)
                                if ((o = ox[i])) {
                                    for (
                                        u = o.site,
                                            a = (c = o.halfedges).length;
                                        a--;

                                    )
                                        ax[c[a]] || c.splice(a, 1)
                                    for (a = 0, f = c.length; a < f; )
                                        (p = (d = $_(o, ax[c[a]]))[0]),
                                            (v = d[1]),
                                            (l = (s = j_(
                                                o,
                                                ax[c[++a % f]],
                                            ))[0]),
                                            (h = s[1]),
                                            (Math.abs(p - l) > cx ||
                                                Math.abs(v - h) > cx) &&
                                                (c.splice(
                                                    a,
                                                    0,
                                                    ax.push(
                                                        z_(
                                                            u,
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
                                    f && (y = !1)
                                }
                            if (y) {
                                var b,
                                    m,
                                    _,
                                    x = 1 / 0
                                for (i = 0, y = null; i < g; ++i)
                                    (o = ox[i]) &&
                                        (_ =
                                            (b = (u = o.site)[0] - t) * b +
                                            (m = u[1] - n) * m) < x &&
                                        ((x = _), (y = o))
                                if (y) {
                                    var w = [t, n],
                                        M = [t, r],
                                        E = [e, r],
                                        N = [e, n]
                                    y.halfedges.push(
                                        ax.push(z_((u = y.site), w, M)) - 1,
                                        ax.push(z_(u, M, E)) - 1,
                                        ax.push(z_(u, E, N)) - 1,
                                        ax.push(z_(u, N, w)) - 1,
                                    )
                                }
                            }
                            for (i = 0; i < g; ++i)
                                (o = ox[i]) &&
                                    (o.halfedges.length || delete ox[i])
                        })(u, a, c, f)
                }
                ;(this.edges = ax),
                    (this.cells = ox),
                    (ix = ux = ax = ox = null)
            }
            lx.prototype = {
                constructor: lx,
                polygons: function() {
                    var t = this.edges
                    return this.cells.map(function(n) {
                        var e = n.halfedges.map(function(e) {
                            return j_(n, t[e])
                        })
                        return (e.data = n.site.data), e
                    })
                },
                triangles: function() {
                    var t = [],
                        n = this.edges
                    return (
                        this.cells.forEach(function(e, r) {
                            if ((o = (i = e.halfedges).length))
                                for (
                                    var i,
                                        o,
                                        u,
                                        a,
                                        c,
                                        f,
                                        s = e.site,
                                        l = -1,
                                        h = n[i[o - 1]],
                                        d = h.left === s ? h.right : h.left;
                                    ++l < o;

                                )
                                    (u = d),
                                        (d =
                                            (h = n[i[l]]).left === s
                                                ? h.right
                                                : h.left),
                                        u &&
                                            d &&
                                            r < u.index &&
                                            r < d.index &&
                                            ((c = u),
                                            (f = d),
                                            ((a = s)[0] - f[0]) *
                                                (c[1] - a[1]) -
                                                (a[0] - c[0]) * (f[1] - a[1]) <
                                                0) &&
                                            t.push([s.data, u.data, d.data])
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
                            o = this,
                            u = o._found || 0,
                            a = o.cells.length;
                        !(i = o.cells[u]);

                    )
                        if (++u >= a) return null
                    var c = t - i.site[0],
                        f = n - i.site[1],
                        s = c * c + f * f
                    do {
                        ;(i = o.cells[(r = u)]),
                            (u = null),
                            i.halfedges.forEach(function(e) {
                                var r = o.edges[e],
                                    a = r.left
                                if ((a !== i.site && a) || (a = r.right)) {
                                    var c = t - a[0],
                                        f = n - a[1],
                                        l = c * c + f * f
                                    l < s && ((s = l), (u = a.index))
                                }
                            })
                    } while (null !== u)
                    return (
                        (o._found = r), null == e || s <= e * e ? i.site : null
                    )
                },
            }
            var hx = function() {
                    var t = k_,
                        n = C_,
                        e = null
                    function r(r) {
                        return new lx(
                            r.map(function(e, i) {
                                var o = [
                                    Math.round(t(e, i, r) / cx) * cx,
                                    Math.round(n(e, i, r) / cx) * cx,
                                ]
                                return (o.index = i), (o.data = e), o
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
                                ? ((t = 'function' == typeof n ? n : S_(+n)), r)
                                : t
                        }),
                        (r.y = function(t) {
                            return arguments.length
                                ? ((n = 'function' == typeof t ? t : S_(+t)), r)
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
            var gx = new vx(1, 0, 0)
            function yx(t) {
                return t.__zoom || gx
            }
            function bx() {
                Xt.stopImmediatePropagation()
            }
            yx.prototype = vx.prototype
            var mx = function() {
                Xt.preventDefault(), Xt.stopImmediatePropagation()
            }
            function _x() {
                return !Xt.button
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
                return this.__zoom || gx
            }
            function Mx() {
                return (-Xt.deltaY * (Xt.deltaMode ? 120 : 1)) / 500
            }
            function Ex() {
                return 'ontouchstart' in this
            }
            function Nx(t, n, e) {
                var r = t.invertX(n[0][0]) - e[0][0],
                    i = t.invertX(n[1][0]) - e[1][0],
                    o = t.invertY(n[0][1]) - e[0][1],
                    u = t.invertY(n[1][1]) - e[1][1]
                return t.translate(
                    i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i),
                    u > o ? (o + u) / 2 : Math.min(0, o) || Math.max(0, u),
                )
            }
            var Ax = function() {
                var t,
                    n,
                    e = _x,
                    r = xx,
                    i = Nx,
                    o = Mx,
                    u = Ex,
                    a = [0, 1 / 0],
                    c = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]],
                    f = 250,
                    s = fr,
                    l = [],
                    h = ht('start', 'zoom', 'end'),
                    d = 500,
                    p = 150,
                    v = 0
                function g(t) {
                    t.property('__zoom', wx)
                        .on('wheel.zoom', M)
                        .on('mousedown.zoom', E)
                        .on('dblclick.zoom', N)
                        .filter(u)
                        .on('touchstart.zoom', A)
                        .on('touchmove.zoom', T)
                        .on('touchend.zoom touchcancel.zoom', S)
                        .style('touch-action', 'none')
                        .style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)')
                }
                function y(t, n) {
                    return (n = Math.max(a[0], Math.min(a[1], n))) === t.k
                        ? t
                        : new vx(n, t.x, t.y)
                }
                function b(t, n, e) {
                    var r = n[0] - e[0] * t.k,
                        i = n[1] - e[1] * t.k
                    return r === t.x && i === t.y ? t : new vx(t.k, r, i)
                }
                function m(t) {
                    return [
                        (+t[0][0] + +t[1][0]) / 2,
                        (+t[0][1] + +t[1][1]) / 2,
                    ]
                }
                function _(t, n, e) {
                    t.on('start.zoom', function() {
                        x(this, arguments).start()
                    })
                        .on('interrupt.zoom end.zoom', function() {
                            x(this, arguments).end()
                        })
                        .tween('zoom', function() {
                            var t = arguments,
                                i = x(this, t),
                                o = r.apply(this, t),
                                u = e || m(o),
                                a = Math.max(
                                    o[1][0] - o[0][0],
                                    o[1][1] - o[0][1],
                                ),
                                c = this.__zoom,
                                f =
                                    'function' == typeof n
                                        ? n.apply(this, t)
                                        : n,
                                l = s(
                                    c.invert(u).concat(a / c.k),
                                    f.invert(u).concat(a / f.k),
                                )
                            return function(t) {
                                if (1 === t) t = f
                                else {
                                    var n = l(t),
                                        e = a / n[2]
                                    t = new vx(
                                        e,
                                        u[0] - n[0] * e,
                                        u[1] - n[1] * e,
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
                                    n.k * Math.pow(2, o.apply(this, arguments)),
                                ),
                            ),
                            u = hn(this)
                        if (t.wheel)
                            (t.mouse[0][0] === u[0] &&
                                t.mouse[0][1] === u[1]) ||
                                (t.mouse[1] = n.invert((t.mouse[0] = u))),
                                clearTimeout(t.wheel)
                        else {
                            if (n.k === r) return
                            ;(t.mouse = [u, n.invert(u)]), ei(this), t.start()
                        }
                        mx(),
                            (t.wheel = setTimeout(function() {
                                ;(t.wheel = null), t.end()
                            }, p)),
                            t.zoom(
                                'mouse',
                                i(
                                    b(y(n, r), t.mouse[0], t.mouse[1]),
                                    t.extent,
                                    c,
                                ),
                            )
                    }
                }
                function E() {
                    if (!n && e.apply(this, arguments)) {
                        var t = x(this, arguments),
                            r = on(Xt.view)
                                .on(
                                    'mousemove.zoom',
                                    function() {
                                        if ((mx(), !t.moved)) {
                                            var n = Xt.clientX - u,
                                                e = Xt.clientY - a
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
                                            mn(Xt.view, t.moved),
                                            mx(),
                                            t.end()
                                    },
                                    !0,
                                ),
                            o = hn(this),
                            u = Xt.clientX,
                            a = Xt.clientY
                        bn(Xt.view),
                            bx(),
                            (t.mouse = [o, this.__zoom.invert(o)]),
                            ei(this),
                            t.start()
                    }
                }
                function N() {
                    if (e.apply(this, arguments)) {
                        var t = this.__zoom,
                            n = hn(this),
                            o = t.invert(n),
                            u = t.k * (Xt.shiftKey ? 0.5 : 2),
                            a = i(b(y(t, u), n, o), r.apply(this, arguments), c)
                        mx(),
                            f > 0
                                ? on(this)
                                      .transition()
                                      .duration(f)
                                      .call(_, a, n)
                                : on(this).call(g.transform, a)
                    }
                }
                function A() {
                    if (e.apply(this, arguments)) {
                        var n,
                            r,
                            i,
                            o,
                            u = x(this, arguments),
                            a = Xt.changedTouches,
                            c = a.length
                        for (bx(), r = 0; r < c; ++r)
                            (i = a[r]),
                                (o = [
                                    (o = pn(this, a, i.identifier)),
                                    this.__zoom.invert(o),
                                    i.identifier,
                                ]),
                                u.touch0
                                    ? u.touch1 || (u.touch1 = o)
                                    : ((u.touch0 = o), (n = !0))
                        if (t && ((t = clearTimeout(t)), !u.touch1))
                            return (
                                u.end(),
                                void (
                                    (o = on(this).on('dblclick.zoom')) &&
                                    o.apply(this, arguments)
                                )
                            )
                        n &&
                            ((t = setTimeout(function() {
                                t = null
                            }, d)),
                            ei(this),
                            u.start())
                    }
                }
                function T() {
                    var n,
                        e,
                        r,
                        o,
                        u = x(this, arguments),
                        a = Xt.changedTouches,
                        f = a.length
                    for (mx(), t && (t = clearTimeout(t)), n = 0; n < f; ++n)
                        (e = a[n]),
                            (r = pn(this, a, e.identifier)),
                            u.touch0 && u.touch0[2] === e.identifier
                                ? (u.touch0[0] = r)
                                : u.touch1 &&
                                  u.touch1[2] === e.identifier &&
                                  (u.touch1[0] = r)
                    if (((e = u.that.__zoom), u.touch1)) {
                        var s = u.touch0[0],
                            l = u.touch0[1],
                            h = u.touch1[0],
                            d = u.touch1[1],
                            p = (p = h[0] - s[0]) * p + (p = h[1] - s[1]) * p,
                            v = (v = d[0] - l[0]) * v + (v = d[1] - l[1]) * v
                        ;(e = y(e, Math.sqrt(p / v))),
                            (r = [(s[0] + h[0]) / 2, (s[1] + h[1]) / 2]),
                            (o = [(l[0] + d[0]) / 2, (l[1] + d[1]) / 2])
                    } else {
                        if (!u.touch0) return
                        ;(r = u.touch0[0]), (o = u.touch0[1])
                    }
                    u.zoom('touch', i(b(e, r, o), u.extent, c))
                }
                function S() {
                    var t,
                        e,
                        r = x(this, arguments),
                        i = Xt.changedTouches,
                        o = i.length
                    for (
                        bx(),
                            n && clearTimeout(n),
                            n = setTimeout(function() {
                                n = null
                            }, d),
                            t = 0;
                        t < o;
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
                    (g.transform = function(t, n) {
                        var e = t.selection ? t.selection() : t
                        e.property('__zoom', wx),
                            t !== e
                                ? _(t, n)
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
                    (g.scaleBy = function(t, n) {
                        g.scaleTo(t, function() {
                            return (
                                this.__zoom.k *
                                ('function' == typeof n
                                    ? n.apply(this, arguments)
                                    : n)
                            )
                        })
                    }),
                    (g.scaleTo = function(t, n) {
                        g.transform(t, function() {
                            var t = r.apply(this, arguments),
                                e = this.__zoom,
                                o = m(t),
                                u = e.invert(o),
                                a =
                                    'function' == typeof n
                                        ? n.apply(this, arguments)
                                        : n
                            return i(b(y(e, a), o, u), t, c)
                        })
                    }),
                    (g.translateBy = function(t, n, e) {
                        g.transform(t, function() {
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
                    (g.translateTo = function(t, n, e) {
                        g.transform(t, function() {
                            var t = r.apply(this, arguments),
                                o = this.__zoom,
                                u = m(t)
                            return i(
                                gx
                                    .translate(u[0], u[1])
                                    .scale(o.k)
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
                            Qt(new px(g, t, this.that.__zoom), h.apply, h, [
                                t,
                                this.that,
                                this.args,
                            ])
                        },
                    }),
                    (g.wheelDelta = function(t) {
                        return arguments.length
                            ? ((o = 'function' == typeof t ? t : dx(+t)), g)
                            : o
                    }),
                    (g.filter = function(t) {
                        return arguments.length
                            ? ((e = 'function' == typeof t ? t : dx(!!t)), g)
                            : e
                    }),
                    (g.touchable = function(t) {
                        return arguments.length
                            ? ((u = 'function' == typeof t ? t : dx(!!t)), g)
                            : u
                    }),
                    (g.extent = function(t) {
                        return arguments.length
                            ? ((r =
                                  'function' == typeof t
                                      ? t
                                      : dx([
                                            [+t[0][0], +t[0][1]],
                                            [+t[1][0], +t[1][1]],
                                        ])),
                              g)
                            : r
                    }),
                    (g.scaleExtent = function(t) {
                        return arguments.length
                            ? ((a[0] = +t[0]), (a[1] = +t[1]), g)
                            : [a[0], a[1]]
                    }),
                    (g.translateExtent = function(t) {
                        return arguments.length
                            ? ((c[0][0] = +t[0][0]),
                              (c[1][0] = +t[1][0]),
                              (c[0][1] = +t[0][1]),
                              (c[1][1] = +t[1][1]),
                              g)
                            : [[c[0][0], c[0][1]], [c[1][0], c[1][1]]]
                    }),
                    (g.constrain = function(t) {
                        return arguments.length ? ((i = t), g) : i
                    }),
                    (g.duration = function(t) {
                        return arguments.length ? ((f = +t), g) : f
                    }),
                    (g.interpolate = function(t) {
                        return arguments.length ? ((s = t), g) : s
                    }),
                    (g.on = function() {
                        var t = h.on.apply(h, arguments)
                        return t === h ? g : t
                    }),
                    (g.clickDistance = function(t) {
                        return arguments.length
                            ? ((v = (t = +t) * t), g)
                            : Math.sqrt(v)
                    }),
                    g
                )
            }
            e.d(n, 'version', function() {
                return '5.7.0'
            }),
                e.d(n, 'bisect', function() {
                    return c
                }),
                e.d(n, 'bisectRight', function() {
                    return u
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
                    return g
                }),
                e.d(n, 'histogram', function() {
                    return C
                }),
                e.d(n, 'thresholdFreedmanDiaconis', function() {
                    return P
                }),
                e.d(n, 'thresholdScott', function() {
                    return O
                }),
                e.d(n, 'thresholdSturges', function() {
                    return k
                }),
                e.d(n, 'max', function() {
                    return I
                }),
                e.d(n, 'mean', function() {
                    return R
                }),
                e.d(n, 'median', function() {
                    return F
                }),
                e.d(n, 'merge', function() {
                    return L
                }),
                e.d(n, 'min', function() {
                    return z
                }),
                e.d(n, 'pairs', function() {
                    return f
                }),
                e.d(n, 'permute', function() {
                    return q
                }),
                e.d(n, 'quantile', function() {
                    return D
                }),
                e.d(n, 'range', function() {
                    return w
                }),
                e.d(n, 'scan', function() {
                    return U
                }),
                e.d(n, 'shuffle', function() {
                    return B
                }),
                e.d(n, 'sum', function() {
                    return Y
                }),
                e.d(n, 'ticks', function() {
                    return A
                }),
                e.d(n, 'tickIncrement', function() {
                    return T
                }),
                e.d(n, 'tickStep', function() {
                    return S
                }),
                e.d(n, 'transpose', function() {
                    return j
                }),
                e.d(n, 'variance', function() {
                    return p
                }),
                e.d(n, 'zip', function() {
                    return H
                }),
                e.d(n, 'axisTop', function() {
                    return rt
                }),
                e.d(n, 'axisRight', function() {
                    return it
                }),
                e.d(n, 'axisBottom', function() {
                    return ot
                }),
                e.d(n, 'axisLeft', function() {
                    return ut
                }),
                e.d(n, 'brush', function() {
                    return To
                }),
                e.d(n, 'brushX', function() {
                    return No
                }),
                e.d(n, 'brushY', function() {
                    return Ao
                }),
                e.d(n, 'brushSelection', function() {
                    return Eo
                }),
                e.d(n, 'chord', function() {
                    return Ro
                }),
                e.d(n, 'ribbon', function() {
                    return Wo
                }),
                e.d(n, 'nest', function() {
                    return Jo
                }),
                e.d(n, 'set', function() {
                    return au
                }),
                e.d(n, 'map', function() {
                    return Qo
                }),
                e.d(n, 'keys', function() {
                    return cu
                }),
                e.d(n, 'values', function() {
                    return fu
                }),
                e.d(n, 'entries', function() {
                    return su
                }),
                e.d(n, 'color', function() {
                    return Yn
                }),
                e.d(n, 'rgb', function() {
                    return Gn
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
                    return ye
                }),
                e.d(n, 'gray', function() {
                    return fe
                }),
                e.d(n, 'cubehelix', function() {
                    return Ae
                }),
                e.d(n, 'contours', function() {
                    return _u
                }),
                e.d(n, 'contourDensity', function() {
                    return Au
                }),
                e.d(n, 'dispatch', function() {
                    return ht
                }),
                e.d(n, 'drag', function() {
                    return An
                }),
                e.d(n, 'dragDisable', function() {
                    return bn
                }),
                e.d(n, 'dragEnable', function() {
                    return mn
                }),
                e.d(n, 'dsvFormat', function() {
                    return Ou
                }),
                e.d(n, 'csvParse', function() {
                    return Ru
                }),
                e.d(n, 'csvParseRows', function() {
                    return Fu
                }),
                e.d(n, 'csvFormat', function() {
                    return Lu
                }),
                e.d(n, 'csvFormatRows', function() {
                    return zu
                }),
                e.d(n, 'tsvParse', function() {
                    return Uu
                }),
                e.d(n, 'tsvParseRows', function() {
                    return Bu
                }),
                e.d(n, 'tsvFormat', function() {
                    return Yu
                }),
                e.d(n, 'tsvFormatRows', function() {
                    return ju
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
                    return yi
                }),
                e.d(n, 'easeCubicIn', function() {
                    return vi
                }),
                e.d(n, 'easeCubicOut', function() {
                    return gi
                }),
                e.d(n, 'easeCubicInOut', function() {
                    return yi
                }),
                e.d(n, 'easePoly', function() {
                    return _i
                }),
                e.d(n, 'easePolyIn', function() {
                    return bi
                }),
                e.d(n, 'easePolyOut', function() {
                    return mi
                }),
                e.d(n, 'easePolyInOut', function() {
                    return _i
                }),
                e.d(n, 'easeSin', function() {
                    return Ni
                }),
                e.d(n, 'easeSinIn', function() {
                    return Mi
                }),
                e.d(n, 'easeSinOut', function() {
                    return Ei
                }),
                e.d(n, 'easeSinInOut', function() {
                    return Ni
                }),
                e.d(n, 'easeExp', function() {
                    return Si
                }),
                e.d(n, 'easeExpIn', function() {
                    return Ai
                }),
                e.d(n, 'easeExpOut', function() {
                    return Ti
                }),
                e.d(n, 'easeExpInOut', function() {
                    return Si
                }),
                e.d(n, 'easeCircle', function() {
                    return Di
                }),
                e.d(n, 'easeCircleIn', function() {
                    return ki
                }),
                e.d(n, 'easeCircleOut', function() {
                    return Ci
                }),
                e.d(n, 'easeCircleInOut', function() {
                    return Di
                }),
                e.d(n, 'easeBounce', function() {
                    return ji
                }),
                e.d(n, 'easeBounceIn', function() {
                    return Yi
                }),
                e.d(n, 'easeBounceOut', function() {
                    return ji
                }),
                e.d(n, 'easeBounceInOut', function() {
                    return $i
                }),
                e.d(n, 'easeBack', function() {
                    return Xi
                }),
                e.d(n, 'easeBackIn', function() {
                    return Hi
                }),
                e.d(n, 'easeBackOut', function() {
                    return Gi
                }),
                e.d(n, 'easeBackInOut', function() {
                    return Xi
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
                    return Ki
                }),
                e.d(n, 'blob', function() {
                    return Hu
                }),
                e.d(n, 'buffer', function() {
                    return Xu
                }),
                e.d(n, 'dsv', function() {
                    return Ku
                }),
                e.d(n, 'csv', function() {
                    return Qu
                }),
                e.d(n, 'tsv', function() {
                    return Ju
                }),
                e.d(n, 'image', function() {
                    return ta
                }),
                e.d(n, 'json', function() {
                    return ea
                }),
                e.d(n, 'text', function() {
                    return Wu
                }),
                e.d(n, 'xml', function() {
                    return ia
                }),
                e.d(n, 'html', function() {
                    return oa
                }),
                e.d(n, 'svg', function() {
                    return ua
                }),
                e.d(n, 'forceCenter', function() {
                    return aa
                }),
                e.d(n, 'forceCollide', function() {
                    return _a
                }),
                e.d(n, 'forceLink', function() {
                    return Ma
                }),
                e.d(n, 'forceManyBody', function() {
                    return ka
                }),
                e.d(n, 'forceRadial', function() {
                    return Ca
                }),
                e.d(n, 'forceSimulation', function() {
                    return Sa
                }),
                e.d(n, 'forceX', function() {
                    return Da
                }),
                e.d(n, 'forceY', function() {
                    return Pa
                }),
                e.d(n, 'formatDefaultLocale', function() {
                    return Va
                }),
                e.d(n, 'format', function() {
                    return Ua
                }),
                e.d(n, 'formatPrefix', function() {
                    return Ba
                }),
                e.d(n, 'formatLocale', function() {
                    return Xa
                }),
                e.d(n, 'formatSpecifier', function() {
                    return Fa
                }),
                e.d(n, 'precisionFixed', function() {
                    return Wa
                }),
                e.d(n, 'precisionPrefix', function() {
                    return Za
                }),
                e.d(n, 'precisionRound', function() {
                    return Ka
                }),
                e.d(n, 'geoArea', function() {
                    return jc
                }),
                e.d(n, 'geoBounds', function() {
                    return Ff
                }),
                e.d(n, 'geoCentroid', function() {
                    return Vf
                }),
                e.d(n, 'geoCircle', function() {
                    return os
                }),
                e.d(n, 'geoClipAntimeridian', function() {
                    return gs
                }),
                e.d(n, 'geoClipCircle', function() {
                    return ys
                }),
                e.d(n, 'geoClipExtent', function() {
                    return Ns
                }),
                e.d(n, 'geoClipRectangle', function() {
                    return xs
                }),
                e.d(n, 'geoContains', function() {
                    return js
                }),
                e.d(n, 'geoDistance', function() {
                    return Is
                }),
                e.d(n, 'geoGraticule', function() {
                    return Gs
                }),
                e.d(n, 'geoGraticule10', function() {
                    return Xs
                }),
                e.d(n, 'geoInterpolate', function() {
                    return Qs
                }),
                e.d(n, 'geoLength', function() {
                    return Ds
                }),
                e.d(n, 'geoPath', function() {
                    return Zl
                }),
                e.d(n, 'geoAlbers', function() {
                    return vh
                }),
                e.d(n, 'geoAlbersUsa', function() {
                    return gh
                }),
                e.d(n, 'geoAzimuthalEqualArea', function() {
                    return _h
                }),
                e.d(n, 'geoAzimuthalEqualAreaRaw', function() {
                    return mh
                }),
                e.d(n, 'geoAzimuthalEquidistant', function() {
                    return wh
                }),
                e.d(n, 'geoAzimuthalEquidistantRaw', function() {
                    return xh
                }),
                e.d(n, 'geoConicConformal', function() {
                    return Sh
                }),
                e.d(n, 'geoConicConformalRaw', function() {
                    return Th
                }),
                e.d(n, 'geoConicEqualArea', function() {
                    return ph
                }),
                e.d(n, 'geoConicEqualAreaRaw', function() {
                    return dh
                }),
                e.d(n, 'geoConicEquidistant', function() {
                    return Ph
                }),
                e.d(n, 'geoConicEquidistantRaw', function() {
                    return Dh
                }),
                e.d(n, 'geoEqualEarth', function() {
                    return qh
                }),
                e.d(n, 'geoEqualEarthRaw', function() {
                    return zh
                }),
                e.d(n, 'geoEquirectangular', function() {
                    return Ch
                }),
                e.d(n, 'geoEquirectangularRaw', function() {
                    return kh
                }),
                e.d(n, 'geoGnomonic', function() {
                    return Bh
                }),
                e.d(n, 'geoGnomonicRaw', function() {
                    return Uh
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
                    return Eh
                }),
                e.d(n, 'geoMercatorRaw', function() {
                    return Mh
                }),
                e.d(n, 'geoNaturalEarth1', function() {
                    return Hh
                }),
                e.d(n, 'geoNaturalEarth1Raw', function() {
                    return $h
                }),
                e.d(n, 'geoOrthographic', function() {
                    return Xh
                }),
                e.d(n, 'geoOrthographicRaw', function() {
                    return Gh
                }),
                e.d(n, 'geoStereographic', function() {
                    return Wh
                }),
                e.d(n, 'geoStereographicRaw', function() {
                    return Vh
                }),
                e.d(n, 'geoTransverseMercator', function() {
                    return Kh
                }),
                e.d(n, 'geoTransverseMercatorRaw', function() {
                    return Zh
                }),
                e.d(n, 'geoRotation', function() {
                    return es
                }),
                e.d(n, 'geoStream', function() {
                    return Rc
                }),
                e.d(n, 'geoTransform', function() {
                    return Kl
                }),
                e.d(n, 'cluster', function() {
                    return Qh.cluster
                }),
                e.d(n, 'hierarchy', function() {
                    return Qh.hierarchy
                }),
                e.d(n, 'pack', function() {
                    return Qh.pack
                }),
                e.d(n, 'packSiblings', function() {
                    return Qh.packSiblings
                }),
                e.d(n, 'packEnclose', function() {
                    return Qh.packEnclose
                }),
                e.d(n, 'partition', function() {
                    return Qh.partition
                }),
                e.d(n, 'stratify', function() {
                    return Qh.stratify
                }),
                e.d(n, 'tree', function() {
                    return Qh.tree
                }),
                e.d(n, 'treemap', function() {
                    return Qh.treemap
                }),
                e.d(n, 'treemapBinary', function() {
                    return Qh.treemapBinary
                }),
                e.d(n, 'treemapDice', function() {
                    return Qh.treemapDice
                }),
                e.d(n, 'treemapSlice', function() {
                    return Qh.treemapSlice
                }),
                e.d(n, 'treemapSliceDice', function() {
                    return Qh.treemapSliceDice
                }),
                e.d(n, 'treemapSquarify', function() {
                    return Qh.treemapSquarify
                }),
                e.d(n, 'treemapResquarify', function() {
                    return Qh.treemapResquarify
                }),
                e.d(n, 'interpolate', function() {
                    return Ke
                }),
                e.d(n, 'interpolateArray', function() {
                    return Ue
                }),
                e.d(n, 'interpolateBasis', function() {
                    return ke
                }),
                e.d(n, 'interpolateBasisClosed', function() {
                    return Ce
                }),
                e.d(n, 'interpolateDate', function() {
                    return Be
                }),
                e.d(n, 'interpolateDiscrete', function() {
                    return Qe
                }),
                e.d(n, 'interpolateHue', function() {
                    return Je
                }),
                e.d(n, 'interpolateNumber', function() {
                    return Ye
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
                    return or
                }),
                e.d(n, 'interpolateTransformSvg', function() {
                    return ur
                }),
                e.d(n, 'interpolateZoom', function() {
                    return fr
                }),
                e.d(n, 'interpolateRgb', function() {
                    return Fe
                }),
                e.d(n, 'interpolateRgbBasis', function() {
                    return ze
                }),
                e.d(n, 'interpolateRgbBasisClosed', function() {
                    return qe
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
                    return gr
                }),
                e.d(n, 'interpolateCubehelix', function() {
                    return br
                }),
                e.d(n, 'interpolateCubehelixLong', function() {
                    return mr
                }),
                e.d(n, 'piecewise', function() {
                    return _r
                }),
                e.d(n, 'quantize', function() {
                    return Mr
                }),
                e.d(n, 'path', function() {
                    return jo
                }),
                e.d(n, 'polygonArea', function() {
                    return Jh
                }),
                e.d(n, 'polygonCentroid', function() {
                    return td
                }),
                e.d(n, 'polygonHull', function() {
                    return id
                }),
                e.d(n, 'polygonContains', function() {
                    return od
                }),
                e.d(n, 'polygonLength', function() {
                    return ud
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
                    return md
                }),
                e.d(n, 'scalePoint', function() {
                    return _d
                }),
                e.d(n, 'scaleIdentity', function() {
                    return Pd
                }),
                e.d(n, 'scaleLinear', function() {
                    return Dd
                }),
                e.d(n, 'scaleLog', function() {
                    return Ud
                }),
                e.d(n, 'scaleOrdinal', function() {
                    return bd
                }),
                e.d(n, 'scaleImplicit', function() {
                    return yd
                }),
                e.d(n, 'scalePow', function() {
                    return Yd
                }),
                e.d(n, 'scaleSqrt', function() {
                    return jd
                }),
                e.d(n, 'scaleQuantile', function() {
                    return $d
                }),
                e.d(n, 'scaleQuantize', function() {
                    return Hd
                }),
                e.d(n, 'scaleThreshold', function() {
                    return Gd
                }),
                e.d(n, 'scaleTime', function() {
                    return Yg
                }),
                e.d(n, 'scaleUtc', function() {
                    return jg
                }),
                e.d(n, 'scaleSequential', function() {
                    return $g
                }),
                e.d(n, 'scaleDiverging', function() {
                    return Hg
                }),
                e.d(n, 'schemeCategory10', function() {
                    return Xg
                }),
                e.d(n, 'schemeAccent', function() {
                    return Vg
                }),
                e.d(n, 'schemeDark2', function() {
                    return Wg
                }),
                e.d(n, 'schemePaired', function() {
                    return Zg
                }),
                e.d(n, 'schemePastel1', function() {
                    return Kg
                }),
                e.d(n, 'schemePastel2', function() {
                    return Qg
                }),
                e.d(n, 'schemeSet1', function() {
                    return Jg
                }),
                e.d(n, 'schemeSet2', function() {
                    return ty
                }),
                e.d(n, 'schemeSet3', function() {
                    return ny
                }),
                e.d(n, 'interpolateBrBG', function() {
                    return iy
                }),
                e.d(n, 'schemeBrBG', function() {
                    return ry
                }),
                e.d(n, 'interpolatePRGn', function() {
                    return uy
                }),
                e.d(n, 'schemePRGn', function() {
                    return oy
                }),
                e.d(n, 'interpolatePiYG', function() {
                    return cy
                }),
                e.d(n, 'schemePiYG', function() {
                    return ay
                }),
                e.d(n, 'interpolatePuOr', function() {
                    return sy
                }),
                e.d(n, 'schemePuOr', function() {
                    return fy
                }),
                e.d(n, 'interpolateRdBu', function() {
                    return hy
                }),
                e.d(n, 'schemeRdBu', function() {
                    return ly
                }),
                e.d(n, 'interpolateRdGy', function() {
                    return py
                }),
                e.d(n, 'schemeRdGy', function() {
                    return dy
                }),
                e.d(n, 'interpolateRdYlBu', function() {
                    return gy
                }),
                e.d(n, 'schemeRdYlBu', function() {
                    return vy
                }),
                e.d(n, 'interpolateRdYlGn', function() {
                    return by
                }),
                e.d(n, 'schemeRdYlGn', function() {
                    return yy
                }),
                e.d(n, 'interpolateSpectral', function() {
                    return _y
                }),
                e.d(n, 'schemeSpectral', function() {
                    return my
                }),
                e.d(n, 'interpolateBuGn', function() {
                    return wy
                }),
                e.d(n, 'schemeBuGn', function() {
                    return xy
                }),
                e.d(n, 'interpolateBuPu', function() {
                    return Ey
                }),
                e.d(n, 'schemeBuPu', function() {
                    return My
                }),
                e.d(n, 'interpolateGnBu', function() {
                    return Ay
                }),
                e.d(n, 'schemeGnBu', function() {
                    return Ny
                }),
                e.d(n, 'interpolateOrRd', function() {
                    return Sy
                }),
                e.d(n, 'schemeOrRd', function() {
                    return Ty
                }),
                e.d(n, 'interpolatePuBuGn', function() {
                    return Cy
                }),
                e.d(n, 'schemePuBuGn', function() {
                    return ky
                }),
                e.d(n, 'interpolatePuBu', function() {
                    return Py
                }),
                e.d(n, 'schemePuBu', function() {
                    return Dy
                }),
                e.d(n, 'interpolatePuRd', function() {
                    return Iy
                }),
                e.d(n, 'schemePuRd', function() {
                    return Oy
                }),
                e.d(n, 'interpolateRdPu', function() {
                    return Fy
                }),
                e.d(n, 'schemeRdPu', function() {
                    return Ry
                }),
                e.d(n, 'interpolateYlGnBu', function() {
                    return zy
                }),
                e.d(n, 'schemeYlGnBu', function() {
                    return Ly
                }),
                e.d(n, 'interpolateYlGn', function() {
                    return Uy
                }),
                e.d(n, 'schemeYlGn', function() {
                    return qy
                }),
                e.d(n, 'interpolateYlOrBr', function() {
                    return Yy
                }),
                e.d(n, 'schemeYlOrBr', function() {
                    return By
                }),
                e.d(n, 'interpolateYlOrRd', function() {
                    return $y
                }),
                e.d(n, 'schemeYlOrRd', function() {
                    return jy
                }),
                e.d(n, 'interpolateBlues', function() {
                    return Gy
                }),
                e.d(n, 'schemeBlues', function() {
                    return Hy
                }),
                e.d(n, 'interpolateGreens', function() {
                    return Vy
                }),
                e.d(n, 'schemeGreens', function() {
                    return Xy
                }),
                e.d(n, 'interpolateGreys', function() {
                    return Zy
                }),
                e.d(n, 'schemeGreys', function() {
                    return Wy
                }),
                e.d(n, 'interpolatePurples', function() {
                    return Qy
                }),
                e.d(n, 'schemePurples', function() {
                    return Ky
                }),
                e.d(n, 'interpolateReds', function() {
                    return tb
                }),
                e.d(n, 'schemeReds', function() {
                    return Jy
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
                    return ob
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
                    return gb
                }),
                e.d(n, 'create', function() {
                    return un
                }),
                e.d(n, 'creator', function() {
                    return gt
                }),
                e.d(n, 'local', function() {
                    return cn
                }),
                e.d(n, 'matcher', function() {
                    return Et
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
                    return on
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
                    return _t
                }),
                e.d(n, 'style', function() {
                    return Pt
                }),
                e.d(n, 'touch', function() {
                    return pn
                }),
                e.d(n, 'touches', function() {
                    return vn
                }),
                e.d(n, 'window', function() {
                    return Dt
                }),
                e.d(n, 'event', function() {
                    return Xt
                }),
                e.d(n, 'customEvent', function() {
                    return Qt
                }),
                e.d(n, 'arc', function() {
                    return Fb
                }),
                e.d(n, 'area', function() {
                    return Yb
                }),
                e.d(n, 'line', function() {
                    return Bb
                }),
                e.d(n, 'pie', function() {
                    return Hb
                }),
                e.d(n, 'areaRadial', function() {
                    return Kb
                }),
                e.d(n, 'radialArea', function() {
                    return Kb
                }),
                e.d(n, 'lineRadial', function() {
                    return Zb
                }),
                e.d(n, 'radialLine', function() {
                    return Zb
                }),
                e.d(n, 'pointRadial', function() {
                    return Qb
                }),
                e.d(n, 'linkHorizontal', function() {
                    return um
                }),
                e.d(n, 'linkVertical', function() {
                    return am
                }),
                e.d(n, 'linkRadial', function() {
                    return cm
                }),
                e.d(n, 'symbol', function() {
                    return Am
                }),
                e.d(n, 'symbols', function() {
                    return Nm
                }),
                e.d(n, 'symbolCircle', function() {
                    return fm
                }),
                e.d(n, 'symbolCross', function() {
                    return sm
                }),
                e.d(n, 'symbolDiamond', function() {
                    return dm
                }),
                e.d(n, 'symbolSquare', function() {
                    return bm
                }),
                e.d(n, 'symbolStar', function() {
                    return ym
                }),
                e.d(n, 'symbolTriangle', function() {
                    return _m
                }),
                e.d(n, 'symbolWye', function() {
                    return Em
                }),
                e.d(n, 'curveBasisClosed', function() {
                    return Pm
                }),
                e.d(n, 'curveBasisOpen', function() {
                    return Im
                }),
                e.d(n, 'curveBasis', function() {
                    return Cm
                }),
                e.d(n, 'curveBundle', function() {
                    return Fm
                }),
                e.d(n, 'curveCardinalClosed', function() {
                    return Bm
                }),
                e.d(n, 'curveCardinalOpen', function() {
                    return jm
                }),
                e.d(n, 'curveCardinal', function() {
                    return qm
                }),
                e.d(n, 'curveCatmullRomClosed', function() {
                    return Vm
                }),
                e.d(n, 'curveCatmullRomOpen', function() {
                    return Zm
                }),
                e.d(n, 'curveCatmullRom', function() {
                    return Gm
                }),
                e.d(n, 'curveLinearClosed', function() {
                    return Qm
                }),
                e.d(n, 'curveLinear', function() {
                    return zb
                }),
                e.d(n, 'curveMonotoneX', function() {
                    return u_
                }),
                e.d(n, 'curveMonotoneY', function() {
                    return a_
                }),
                e.d(n, 'curveNatural', function() {
                    return s_
                }),
                e.d(n, 'curveStep', function() {
                    return h_
                }),
                e.d(n, 'curveStepAfter', function() {
                    return p_
                }),
                e.d(n, 'curveStepBefore', function() {
                    return d_
                }),
                e.d(n, 'stack', function() {
                    return b_
                }),
                e.d(n, 'stackOffsetExpand', function() {
                    return m_
                }),
                e.d(n, 'stackOffsetDiverging', function() {
                    return __
                }),
                e.d(n, 'stackOffsetNone', function() {
                    return v_
                }),
                e.d(n, 'stackOffsetSilhouette', function() {
                    return x_
                }),
                e.d(n, 'stackOffsetWiggle', function() {
                    return w_
                }),
                e.d(n, 'stackOrderAscending', function() {
                    return M_
                }),
                e.d(n, 'stackOrderDescending', function() {
                    return N_
                }),
                e.d(n, 'stackOrderInsideOut', function() {
                    return A_
                }),
                e.d(n, 'stackOrderNone', function() {
                    return g_
                }),
                e.d(n, 'stackOrderReverse', function() {
                    return T_
                }),
                e.d(n, 'timeInterval', function() {
                    return Wd
                }),
                e.d(n, 'timeMillisecond', function() {
                    return Kd
                }),
                e.d(n, 'timeMilliseconds', function() {
                    return Qd
                }),
                e.d(n, 'utcMillisecond', function() {
                    return Kd
                }),
                e.d(n, 'utcMilliseconds', function() {
                    return Qd
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
                    return op
                }),
                e.d(n, 'timeMinutes', function() {
                    return up
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
                    return gp
                }),
                e.d(n, 'timeTuesdays', function() {
                    return Mp
                }),
                e.d(n, 'timeWednesday', function() {
                    return yp
                }),
                e.d(n, 'timeWednesdays', function() {
                    return Ep
                }),
                e.d(n, 'timeThursday', function() {
                    return bp
                }),
                e.d(n, 'timeThursdays', function() {
                    return Np
                }),
                e.d(n, 'timeFriday', function() {
                    return mp
                }),
                e.d(n, 'timeFridays', function() {
                    return Ap
                }),
                e.d(n, 'timeSaturday', function() {
                    return _p
                }),
                e.d(n, 'timeSaturdays', function() {
                    return Tp
                }),
                e.d(n, 'timeMonth', function() {
                    return kp
                }),
                e.d(n, 'timeMonths', function() {
                    return Cp
                }),
                e.d(n, 'timeYear', function() {
                    return Pp
                }),
                e.d(n, 'timeYears', function() {
                    return Op
                }),
                e.d(n, 'utcMinute', function() {
                    return Rp
                }),
                e.d(n, 'utcMinutes', function() {
                    return Fp
                }),
                e.d(n, 'utcHour', function() {
                    return zp
                }),
                e.d(n, 'utcHours', function() {
                    return qp
                }),
                e.d(n, 'utcDay', function() {
                    return Bp
                }),
                e.d(n, 'utcDays', function() {
                    return Yp
                }),
                e.d(n, 'utcWeek', function() {
                    return $p
                }),
                e.d(n, 'utcWeeks', function() {
                    return Kp
                }),
                e.d(n, 'utcSunday', function() {
                    return $p
                }),
                e.d(n, 'utcSundays', function() {
                    return Kp
                }),
                e.d(n, 'utcMonday', function() {
                    return Hp
                }),
                e.d(n, 'utcMondays', function() {
                    return Qp
                }),
                e.d(n, 'utcTuesday', function() {
                    return Gp
                }),
                e.d(n, 'utcTuesdays', function() {
                    return Jp
                }),
                e.d(n, 'utcWednesday', function() {
                    return Xp
                }),
                e.d(n, 'utcWednesdays', function() {
                    return tv
                }),
                e.d(n, 'utcThursday', function() {
                    return Vp
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
                    return ov
                }),
                e.d(n, 'utcMonths', function() {
                    return uv
                }),
                e.d(n, 'utcYear', function() {
                    return cv
                }),
                e.d(n, 'utcYears', function() {
                    return fv
                }),
                e.d(n, 'timeFormatDefaultLocale', function() {
                    return kg
                }),
                e.d(n, 'timeFormat', function() {
                    return vv
                }),
                e.d(n, 'timeParse', function() {
                    return gv
                }),
                e.d(n, 'utcFormat', function() {
                    return yv
                }),
                e.d(n, 'utcParse', function() {
                    return bv
                }),
                e.d(n, 'timeFormatLocale', function() {
                    return dv
                }),
                e.d(n, 'isoFormat', function() {
                    return Cg
                }),
                e.d(n, 'isoParse', function() {
                    return Dg
                }),
                e.d(n, 'now', function() {
                    return Or
                }),
                e.d(n, 'timer', function() {
                    return Fr
                }),
                e.d(n, 'timerFlush', function() {
                    return Lr
                }),
                e.d(n, 'timeout', function() {
                    return Br
                }),
                e.d(n, 'interval', function() {
                    return Yr
                }),
                e.d(n, 'transition', function() {
                    return ci
                }),
                e.d(n, 'active', function() {
                    return no
                }),
                e.d(n, 'interrupt', function() {
                    return ei
                }),
                e.d(n, 'voronoi', function() {
                    return hx
                }),
                e.d(n, 'zoom', function() {
                    return Ax
                }),
                e.d(n, 'zoomTransform', function() {
                    return yx
                }),
                e.d(n, 'zoomIdentity', function() {
                    return gx
                })
        },
        77: function(t, n, e) {
            var r = e(198)
            t.exports = r()
        },
        83: function(t, n, e) {
            'use strict'
            e.r(n)
            n.default = {
                name: 'Top Level',
                value: 10,
                type: 'black',
                level: 'red',
                children: [
                    {
                        name: 'Level 2: A',
                        value: 15,
                        type: 'grey',
                        level: 'red',
                        children: [
                            {
                                name: 'Son of A',
                                value: 5,
                                type: 'steelblue',
                                level: 'orange',
                            },
                            {
                                name: 'Daughter of A',
                                value: 8,
                                type: 'steelblue',
                                level: 'red',
                            },
                            {
                                name: 'Son of A',
                                value: 5,
                                type: 'steelblue',
                                level: 'orange',
                            },
                            {
                                name: 'Daughter of A',
                                value: 8,
                                type: 'steelblue',
                                level: 'red',
                            },
                            {
                                name: 'Son of A',
                                value: 5,
                                type: 'steelblue',
                                level: 'orange',
                            },
                            {
                                name: 'Daughter of A',
                                value: 8,
                                type: 'steelblue',
                                level: 'red',
                            },
                        ],
                    },
                    {
                        name: 'Level 2: B',
                        value: 10,
                        type: 'grey',
                        level: 'green',
                        children: [
                            {
                                name: 'Son of A',
                                value: 5,
                                type: 'steelblue',
                                level: 'orange',
                            },
                            {
                                name: 'Daughter of A',
                                value: 8,
                                type: 'steelblue',
                                level: 'red',
                                children: [
                                    {
                                        name: 'Son of A',
                                        value: 5,
                                        type: 'steelblue',
                                        level: 'orange',
                                        children: [
                                            {
                                                name: 'Son of A',
                                                value: 5,
                                                type: 'steelblue',
                                                level: 'orange',
                                            },
                                        ],
                                    },
                                    {
                                        name: 'Daughter of A',
                                        value: 8,
                                        type: 'steelblue',
                                        level: 'red',
                                    },
                                    {
                                        name: 'Son of A',
                                        value: 5,
                                        type: 'steelblue',
                                        level: 'orange',
                                    },
                                    {
                                        name: 'Daughter of A',
                                        value: 8,
                                        type: 'steelblue',
                                        level: 'red',
                                    },
                                    {
                                        name: 'Son of A',
                                        value: 5,
                                        type: 'steelblue',
                                        level: 'orange',
                                    },
                                    {
                                        name: 'Daughter of A',
                                        value: 8,
                                        type: 'steelblue',
                                        level: 'red',
                                    },
                                ],
                            },
                            {
                                name: 'Son of A',
                                value: 5,
                                type: 'steelblue',
                                level: 'orange',
                            },
                            {
                                name: 'Daughter of A',
                                value: 8,
                                type: 'steelblue',
                                level: 'red',
                            },
                            {
                                name: 'Son of A',
                                value: 5,
                                type: 'steelblue',
                                level: 'orange',
                            },
                            {
                                name: 'Daughter of A',
                                value: 8,
                                type: 'steelblue',
                                level: 'red',
                            },
                        ],
                    },
                ],
            }
        },
    },
    [[371, 0, 1]],
])
