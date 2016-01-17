﻿(function (h, f, Y) {
    function v(a, b) {
        return function () {
            try {
                return a.apply(this, arguments)
            } catch (c) {
                na(c, b)
            }
        }
    }

    function na(a, b) {
        if (.01 > Math.random()) try {
            (new P).log("jserrs", V, a.message, b, A.href, N, "string" == typeof a.stack && a.stack.replace(/\n/g, "\\n"))
        } catch (e) {
            var c = ["cp: " + b, a.name + ": " + a.message, "debug: " + N, "code: " + V, "stack: " + a.stack];
            (new Image).src = "//an.yandex.ru/jserr/101500?cnt-class=100&errmsg=" + encodeURIComponent(c.join("; ").replace(/\r?\n/g, "\\n"))
        }
    }

    function B() {
        for (var a = {}, b = "hash host hostname href pathname port protocol search".split(" "),
                c = b.length, e = c; e--;) a[b[e]] = "";
        try {
            for (var d = h.location, e = c; e--;) {
                var g = b[e];
                a[g] = "" + d[g]
            }
        } catch (f) {
            A && (a = A)
        }
        return a
    }

    function Ga(a) {
        return a ? ("" + a).replace(/^\s+/, "").replace(/\s+$/, "") : ""
    }

    function ha(a) {
        return -1 !== ("" + h.navigator.userAgent).toLowerCase().search(a)
    }

    function qa(a, b) {
        if (!a || !b) return !1;
        for (var c = [], e = 0; e < b.length; e++) c.push(b[e].replace(/\^/g, "\\^").replace(/\$/g, "\\$").replace(/\./g, "\\.").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\|/g, "\\|").replace(/\(/g, "\\(").replace(/\)/g,
            "\\)").replace(/\?/g, "\\?").replace(/\*/g, "\\*").replace(/\+/g, "\\+").replace(/\{/g, "\\{").replace(/\}/g, "\\}"));
        return (new RegExp("\\.(" + c.join("|") + ")$", "i")).test(a)
    }

    function ab(a) {
        a = a.target || a.srcElement;
        if (!a) return !1;
        3 == a.nodeType && (a = a.parentNode);
        for (var b = a && a.nodeName && a.nodeName.toString().toLowerCase() ; a && a.parentNode && a.parentNode.nodeName && ("a" != b && "area" != b || !a.href) ;) b = (a = a.parentNode) && a.nodeName && a.nodeName.toString().toLowerCase();
        return a.href ? a : !1
    }

    function bb(a, b) {
        return (a ? a.replace(/^www\./,
            "") : "") == (b ? b.replace(/^www\./, "") : "")
    }

    function cb(a, b) {
        function c(a) {
            a = a.split(":");
            a = a[1] || "";
            a = a.replace(/^\/*/, "").replace(/^www\./, "");
            return a.split("/")[0]
        }
        return a && b ? c(a) == c(b) : a || b ? !1 : !0
    }

    function Ha() {
        var a = h.performance || h.webkitPerformance,
            b = [];
        if (a = a && a.timing) {
            var c = a.navigationStart;
            if (c)
                for (b = [a.domainLookupEnd - a.domainLookupStart, a.connectEnd - a.connectStart, a.responseStart - a.requestStart, a.responseEnd - a.responseStart, a.fetchStart - c, a.redirectEnd - a.redirectStart, a.redirectCount], b.push(a.domInteractive &&
                        a.domLoading ? a.domInteractive - a.domLoading : null), b.push(a.domContentLoadedEventStart && a.domContentLoadedEventEnd ? a.domContentLoadedEventEnd - a.domContentLoadedEventStart : null), b.push(a.domComplete ? a.domComplete - c : null), b.push(a.loadEventStart ? a.loadEventStart - c : null), b.push(a.loadEventStart && a.loadEventEnd ? a.loadEventEnd - a.loadEventStart : null), b.push(a.domContentLoadedEventStart ? a.domContentLoadedEventStart - c : null), a = 0; a < b.length; a++) c = b[a], null !== c && (0 > c || 36E5 < c) && (b[a] = null)
        }
        return b
    }

    function db(a) {
        var b = [],
            c = a._lastPerformanceTiming,
            e = Ha();
        if (c)
            for (var d = 0, g = c.length; d < g; d++) null === e[d] ? b.push(e[d]) : b.push(c[d] === e[d] ? "" : e[d]);
        else b = e;
        a._lastPerformanceTiming = e;
        return b.join(",")
    }

    function eb() {
        var a;
        if ("object" == typeof h.chrome && h.chrome.loadTimes) {
            if (a = h.chrome.loadTimes(), a.requestTime && a.firstPaintTime) return ~~(1E3 * (a.firstPaintTime - a.requestTime))
        } else if (h.performance && h.performance.timing && (a = h.performance.timing, a.navigationStart && a.msFirstPaint)) return a.msFirstPaint - a.navigationStart;
        return null
    }

    function fb(a) {
        var b = f.referrer || "";
        if ((new RegExp("^https?://" + A.host + "/")).test(b)) return !1;
        for (var c = a.patterns, e = 0; e < c.length; e++)
            if (b.match(new RegExp(c[e], "i"))) {
                var d = a.params || [];
                if (d.length)
                    for (var g = ca((RegExp.$1 || "").replace(/\+/g, "%20")), h = 0; h < d.length; h++) {
                        if (g == ca(d[h])) return !0
                    } else return !0
            }
        return !1
    }

    function Ia(a, b) {
        var c = !1;
        if (a && "string" != typeof a && a.length)
            for (var e = 0; e < a.length; e++) {
                var d = a[e].selector,
                    g = a[e].text,
                    h = d.charAt(0),
                    d = d.slice(1);
                if ("#" == h) {
                    if (h = f.getElementById(d)) c = !0, b && Q.unshift([h, h.innerHTML]), h.innerHTML = g
                } else if ("." == h)
                    for (h = l.getElementsByClassName(d), d = 0; d < h.length; d++) {
                        var c = !0,
                            k = h[d],
                            x = g;
                        b && Q.unshift([k, k.innerHTML]);
                        k.innerHTML = x
                    }
            }
        return c
    }

    function Ja() {
        for (var a = 0; a < Q.length; a++) Q[a][0].innerHTML = Q[a][1]
    }

    function gb(a, b) {
        var c, e, d = "",
            g;
        a = a && a.replace(/^\?/, "");
        b = b && b.replace(/^#/, "") || "";
        if (a)
            for (e = a.split("&"), c = 0; c < e.length; c++) g = e[c].split("="), "_openstat" === g[0] && (d = g[1]);
        var h = b.split("?");
        for (c = 0; c < h.length; c++) {
            var f = h[c].split("&");
            for (e =
                0; e < f.length; e++) g = f[e].split("="), "_openstat" === g[0] && (d = g[1])
        }
        d && (d = -1 < d.indexOf(";") ? ca(d) : hb(d.replace(/[-*_]/g, function (a) {
            return {
                "*": "+",
                "-": "/",
                _: "="
            }[a] || a
        })));
        return d && (c = d.split(";"), 4 == c.length) ? {
            service: c[0],
            campaign: c[1],
            ad: c[2],
            source: c[3]
        } : null
    }

    function ca(a) {
        try {
            return decodeURIComponent(a)
        } catch (b) {
            return ""
        }
    }

    function hb(a) {
        for (; a.length % 4;) a += "=";
        var b, c, e, d, g, h = 0,
            f = "";
        do {
            b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(h++));
            c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(h++));
            d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(h++));
            g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(h++));
            if (0 > b || 0 > c || 0 > d || 0 > g) return null;
            e = b << 18 | c << 12 | d << 6 | g;
            b = e >> 16 & 255;
            c = e >> 8 & 255;
            e &= 255;
            f = 64 == d ? f + String.fromCharCode(b) : 64 == g ? f + String.fromCharCode(b, c) : f + String.fromCharCode(b, c, e)
        } while (h < a.length);
        a = f;
        d = "";
        for (b = f = h = g = 0; g < a.length;) h = a.charCodeAt(g), 128 > h ? (d += String.fromCharCode(h), g++) : 191 < h && 224 > h ? (f = a.charCodeAt(g +
            1), d += String.fromCharCode((h & 31) << 6 | f & 63), g += 2) : (f = a.charCodeAt(g + 1), b = a.charCodeAt(g + 2), d += String.fromCharCode((h & 15) << 12 | (f & 63) << 6 | b & 63), g += 3);
        return d
    }

    function Ka(a) {
        try {
            delete h[a]
        } catch (b) {
            h[a] = Y
        }
    }

    function La(a) {
        var b = f.createElement("script");
        b.type = "text/javascript";
        b.async = !0;
        b.src = a;
        try {
            var c = f.getElementsByTagName("html")[0];
            f.getElementsByTagName("head")[0] || c.appendChild(f.createElement("head"));
            var e = f.getElementsByTagName("head")[0];
            e.insertBefore(b, e.firstChild)
        } catch (d) { }
    }

    function ib(a,
        b, c, e, d, W) {
        function q(a) {
            var b = (new Date).getTime();
            a && b < a && (ga += a - b + 20);
            g.setTimeout(function () {
                q(b)
            }, 20, "timeCorrector")
        }

        function ra() {
            var a = (new Date).getTime() + ga;
            a < V && (a = V + 10);
            return V = a
        }

        function x() {
            return Math.round((ra() - qa) / 50)
        }

        function p(a, b) {
            b = Math.max(0, Math.min(b, 65535));
            g.mergeArrays(a, [b >> 8, b & 255])
        }

        function y(a, b) {
            g.mergeArrays(a, [b & 255])
        }

        function m(a, b) {
            for (b = Math.max(0, b | 0) ; 127 < b;) g.mergeArrays(a, [b & 127 | 128]), b >>= 7;
            g.mergeArrays(a, [b])
        }

        function w(a, b) {
            255 < b.length && (b = b.substr(0,
                255));
            g.mergeArrays(a, [b.length]);
            for (var c = 0; c < b.length; c++) p(a, b.charCodeAt(c))
        }

        function t(a, b) {
            m(a, b.length);
            for (var c = 0; c < b.length; c++) m(a, b.charCodeAt(c))
        }

        function A(a, b, c, d, e, g) {
            for (; c && (!c.offsetWidth || !c.offsetHeight) ;) c = l.getElementParent(c);
            if (!c) return null;
            var h = c[C];
            if (!h || 0 > h) return null;
            var f = {
                mousemove: 2,
                click: 32,
                dblclick: 33,
                mousedown: 4,
                mouseup: 30,
                touch: 12
            }[b];
            if (!f) return null;
            var n = l.getElementXY(c);
            c = [];
            y(c, f);
            m(c, a);
            m(c, h);
            m(c, Math.max(0, d[0] - n[0]));
            m(c, Math.max(0, d[1] - n[1]));
            /^mouse(up|down)|click$/.test(b) && (a = e || g, y(c, 2 > a ? 1 : a == (e ? 2 : 4) ? 4 : 2));
            return c
        }

        function E(a, b, c, d) {
            b = b[C];
            if (!b || 0 > b) return null;
            var e = [];
            y(e, 31);
            m(e, a);
            m(e, b);
            m(e, c[0]);
            m(e, c[1]);
            y(e, 0);
            y(e, 0);
            y(e, d);
            return e
        }

        function I(a, b) {
            var c = [];
            y(c, 3);
            m(c, a);
            m(c, b[0]);
            m(c, b[1]);
            return c
        }

        function H(a, b, c) {
            var d = [];
            c = c[C];
            if (!c || 0 > c) return null;
            y(d, 16);
            m(d, a);
            m(d, b[0]);
            m(d, b[1]);
            m(d, c);
            return d
        }

        function M(a, b, c) {
            var d = [];
            y(d, 28);
            m(d, a);
            m(d, b[0]);
            m(d, b[1]);
            m(d, c[0]);
            m(d, c[1]);
            return d
        }

        function K(a, b, c, d) {
            var e = [];
            y(e, 5);
            m(e, a);
            p(e, b);
            y(e, c);
            a = d[C];
            if (!a || 0 > a) a = 0;
            m(e, a);
            return e
        }

        function z(a, b) {
            var c, d;
            0 == b.length ? d = c = "" : 100 >= b.length ? (c = b, d = "") : 200 >= b.length ? (c = b.substr(0, 100), d = b.substr(100)) : (c = b.substr(0, 97), d = b.substr(b.length - 97));
            var e = [];
            y(e, 29);
            m(e, a);
            t(e, c);
            t(e, d);
            return e
        }

        function J(a) {
            var b = [];
            y(b, 27);
            m(b, a);
            return b
        }

        function X(a) {
            var b = [];
            y(b, 14);
            m(b, a);
            return b
        }

        function S(a) {
            var b = [];
            y(b, 15);
            m(b, a);
            return b
        }

        function Y(a, b) {
            var c = [];
            y(c, 17);
            m(c, a);
            m(c, b[C]);
            return c
        }

        function jb(a, b) {
            var c = [];
            y(c, 18);
            m(c, a);
            m(c, b[C]);
            return c
        }

        function da(a, b, c) {
            var d = [];
            y(d, 19);
            m(d, a);
            m(d, b[C]);
            w(d, String(c));
            return d
        }

        function Z(a) {
            var b = a[C];
            if (!b || 0 > b || !/^INPUT|SELECT|TEXTAREA$/.test(a.nodeName) || !a.form || D(a.form)) return null;
            var c = l.getFormNumber(a.form);
            if (0 > c) return null;
            var d;
            d = "INPUT" == a.nodeName ? {
                text: 0,
                color: 0,
                date: 0,
                datetime: 0,
                "datetime-local": 0,
                email: 0,
                number: 0,
                range: 0,
                search: 0,
                tel: 0,
                time: 0,
                url: 0,
                month: 0,
                week: 0,
                password: 2,
                radio: 3,
                checkbox: 4,
                file: 6,
                image: 7
            }[a.type] : {
                SELECT: 1,
                TEXTAREA: 5
            }[a.nodeName];
            if ("number" != typeof d) return null;
            for (var e = -1, g = a.form.elements, h = g.length, f = 0, n = 0; f < h; f++)
                if (g[f].name == a.name) {
                    if (g[f] == a) {
                        e = n;
                        break
                    }
                    n++
                }
            if (0 > e) return null;
            g = [];
            y(g, 7);
            m(g, b);
            m(g, c);
            m(g, d);
            t(g, a.name || "");
            m(g, e);
            return g
        }

        function O(a, b) {
            var c = l.getFormNumber(b);
            if (0 > c) return null;
            for (var d = b.elements, e = d.length, h = [], f = 0; f < e; f++)
                if (!l.isEmptyField(d[f])) {
                    var n = d[f][C];
                    n && 0 < n && g.mergeArrays(h, [n])
                }
            d = [];
            y(d, 11);
            m(d, a);
            m(d, c);
            m(d, h.length);
            for (c = 0; c < h.length; c++) m(d, h[c]);
            return d
        }

        function fa() {
            var a = [];
            y(a, 13);
            return a
        }

        function r(a, b, c) {
            a = a.apply(h, b);
            ka.append(a, c)
        }

        function n(a) {
            if (a[C]) a: {
                var b = x(),
                    c = a[C];
                if (0 < c) {
                    var d = [];
                    a = l.getElementRegion(a);
                    var e = sa[c],
                        g = a[0] + "x" + a[1],
                        h = a[2] + "x" + a[3];
                    g != e.pos && (e.pos = g, y(d, 9), m(d, b), m(d, c), m(d, a[0]), m(d, a[1]));
                    h != e.size && (e.size = h, y(d, 10), m(d, b), m(d, c), m(d, a[2]), m(d, a[3]));
                    if (d.length) {
                        a = d;
                        break a
                    }
                }
                a = null
            } else {
                (c = l.getElementParent(a)) && n(c);
                a[C] = ha;
                sa[ha] = {};
                ha++;
                if (a.nodeName)
                    if (c = +a[C], !isFinite(c) || 0 >= c) b = null;
                    else {
                        var d = 64,
                            e = 0,
                            f = l.getElementParent(a),
                            g = f && f[C] ? f[C] : 0;
                        0 > g && (g = 0);
                        var h = a.nodeName.toUpperCase(),
                            r = la[h];
                        r || (d |= 2);
                        var W = l.getElementNeighborPosition(a);
                        W || (d |= 4);
                        var q = l.getElementRegion(a);
                        (f = f ? l.getElementRegion(f) : null) && q[0] == f[0] && q[1] == f[1] && q[2] == f[2] && q[3] == f[3] && (d |= 8);
                        sa[c].pos = q[0] + "x" + q[1];
                        sa[c].size = q[2] + "x" + q[3];
                        a.id && "string" == typeof a.id && (d |= 32);
                        (f = l.calcTextChecksum(a)) && (d |= 16);
                        var k = l.calcAttribChecksum(a);
                        k && (e |= 2);
                        var u;
                        b: {
                            u = l.getElementChildren(l.getElementParent(a), a.tagName);
                            for (var D = 0; D < u.length; D++)
                                if ((!u[D].id ||
                                        "string" != typeof u[D].id) && l.calcAttribChecksum(u[D]) == k && l.calcTextChecksum(u[D]) == f) {
                                    u = !0;
                                    break b
                                }
                            u = !1
                        }
                        u && (d |= 1, b = l.calcChildrenChecksum(a));
                        u = [];
                        y(u, 1);
                        m(u, c);
                        y(u, d);
                        m(u, g);
                        r ? y(u, r) : w(u, h);
                        W && m(u, W);
                        d & 8 || (m(u, q[0]), m(u, q[1]), m(u, q[2]), m(u, q[3]));
                        d & 32 && w(u, a.id);
                        f && p(u, f);
                        d & 1 && p(u, b);
                        y(u, e);
                        k && p(u, k);
                        b = u
                    } else a[C] = -1, b = null;
                ka.append(b, void 0);
                a = Z(a)
            }
            ka.append(a, void 0)
        }

        function u(a, b) {
            var c = a && l.classNameExists(a, "(ym-disable-keys|-metrika-nokeys)");
            b && a && (c = c || !!l.getElementsByClassName("(ym-disable-keys|-metrika-nokeys)",
                a).length);
            return c
        }

        function D(a) {
            return a && l.classNameExists(a, "(ym-disable-submit|-metrika-noform)")
        }

        function U(a) {
            var b = G.getTarget(a);
            if (b && "SCROLLBAR" != b.nodeName) {
                if (b && /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(b.tagName))
                    if (b[C]) n(b);
                    else {
                        var c = b.form;
                        if (c)
                            for (var c = c.elements, d = c.length, e = 0; e < d; e++) /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(c[e].tagName) && !c[e][C] && n(c[e]);
                        else n(b)
                    } else n(b);
                r(A, [x(), a.type, b, G.getPos(a), a.which, a.button])
            }
        }

        function Ma(a) {
            U(a);
            a: {
                var b, c;
                if (h.getSelection) {
                    try {
                        var d =
                            h.getSelection()
                    } catch (e) {
                        break a
                    }
                    b = d.toString();
                    c = d.anchorNode
                } else f.selection && f.selection.createRange && (a = f.selection.createRange(), b = a.text, c = a.parentElement());
                if ("string" == typeof b) {
                    try {
                        for (; c && 1 != c.nodeType;) c = c.parentNode
                    } catch (e) {
                        break a
                    }
                    c && ya(c) || u(c, !0) || b == za || (za = b, r(z, [x(), b]))
                }
            }
        }

        function Na(a) {
            var b = ra(),
                c = b - aa;
            if (!(10 > c)) {
                var d = G.getPos(a),
                    e = ia[0] - d[0],
                    g = ia[1] - d[1],
                    e = e * e + g * g;
                0 >= e || 16 > e && 100 > c || 20 > c && 256 > e || (aa = b, ia = d, U(a))
            }
        }

        function ta() {
            var a = l.getDocumentScroll(),
                b = ra();
            10 > b - ma ||
                10 > Math.abs(a[0] - ja[0]) && 10 > Math.abs(a[1] - ja[1]) || (ma = b, ja = a, r(I, [x(), a]))
        }

        function Oa(a) {
            a = G.getTarget(a);
            var b = Math.random(),
                c = [a.scrollLeft, a.scrollTop];
            if (a.localId) {
                if (b = ba[a.localId], !b || 10 > Math.abs(c[0] - b[0]) && 10 > Math.abs(c[1] - b[1])) return
            } else {
                for (; ba[b];) b = Math.random();
                a.localId = b
            }
            ba[a.localId] = c;
            a !== f && (n(a), r(H, [x(), c, a]))
        }

        function Aa() {
            r(M, [x(), l.getViewportSize(), l.getDocumentSize()])
        }

        function ua() {
            r(fa, [], !0)
        }

        function Pa(a) {
            return (a.shiftKey ? 2 : 0) | (a.ctrlKey ? 4 : 0) | (a.altKey ? 1 : 0) | (a.metaKey ?
                8 : 0) | (a.ctrlKey || a.altKey ? 16 : 0)
        }

        function ya(a) {
            return "INPUT" == a.tagName ? "password" == a.type || a.name && na.test(a.name) || a.id && na.test(a.id) : !1
        }

        function Qa(a, b, c) {
            a = G.getTarget(a);
            ya(a) || u(a) || (n(a), r(K, [x(), b, c, a]))
        }

        function Ra(a) {
            var b = a.keyCode,
                c = Pa(a);
            if ({
                    3: 1,
                    8: 1,
                    9: 1,
                    13: 1,
                    16: 1,
                    17: 1,
                    18: 1,
                    19: 1,
                    20: 1,
                    27: 1,
                    33: 1,
                    34: 1,
                    35: 1,
                    36: 1,
                    37: 1,
                    38: 1,
                    39: 1,
                    40: 1,
                    45: 1,
                    46: 1,
                    91: 1,
                    92: 1,
                    93: 1,
                    106: 1,
                    110: 1,
                    111: 1,
                    144: 1,
                    145: 1
            }[b] || 112 <= b && 123 >= b || 96 <= b && 105 >= b || c & 16) 19 == b && 4 == (c & -17) && (b = 144), Qa(a, b, c | 16), Ba = !1, g.setTimeout(function () {
                Ba = !0
            }, 1), !(67 == b && c & 4) || c & 1 || c & 2 || Ca()
        }

        function Sa(a) {
            Ba && !Da && 0 !== a.which && (Qa(a, a.charCode || a.keyCode, Pa(a)), Da = !0, g.setTimeout(function () {
                Da = !1
            }, 1))
        }

        function Ca() {
            Ea || (Ea = !0, za && r(J, [x()]), g.setTimeout(function () {
                Ea = !1
            }, 1))
        }

        function Fa() {
            oa || (oa = !0, r(X, [x()]))
        }

        function pa() {
            oa && (oa = !1, r(S, [x()]))
        }

        function Ta(a) {
            (!oa || a && !a.fromElement) && Fa()
        }

        function ca(a) {
            a && !a.toElement && pa()
        }

        function Q(a) {
            if ((a = G.getTarget(a)) && /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(a.tagName)) {
                if (a[C]) n(a);
                else {
                    var b = a.form;
                    if (b)
                        for (var b =
                                b.elements, c = b.length, d = 0; d < c; d++) /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(b[d].tagName) && !b[d][C] && n(b[d]);
                    else n(a)
                }
                r(Y, [x(), a])
            }
        }

        function R(a) {
            (a = G.getTarget(a)) && /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(a.tagName) && (n(a), r(jb, [x(), a]))
        }

        function L(a) {
            a = G.getTarget(a);
            if (!ya(a) && !u(a) && a && /^INPUT|SELECT|TEXTAREA$/.test(a.tagName)) {
                var b = /^(checkbox|radio)$/.test(a.type) ? a.checked : a.value;
                n(a);
                r(da, [x(), a, b])
            }
        }

        function F(a) {
            a = G.getTarget(a);
            if (!D(a) && "FORM" == a.nodeName) {
                for (var b = a.elements, c = 0; c < b.length; c++) l.isEmptyField(b[c]) ||
                    n(b[c]);
                r(O, [x(), a], !0)
            }
        }

        function ea(a) {
            ta();
            if (a.touches && a.touches.length) {
                var b = G.getTarget(a);
                N = typeof b + " - " + String(b);
                if (b && b != f) {
                    n(b);
                    for (var c = 0; c < a.touches.length; c++) r(A, [x(), "touch", b, [a.touches[c].pageX, a.touches[c].pageY], 0, 0])
                }
            }
        }

        function T(a) {
            var b = G.getTarget(a);
            if (b) {
                var c;
                "wheel" == a.type ? c = 0 < a.deltaY ? 1 : 0 > a.deltaY ? 2 : 0 : "mousewheel" == a.type && (c = 0 < a.wheelDelta ? 2 : 0 > a.wheelDelta ? 1 : 0);
                c && (n(b), r(E, [x(), b, G.getPos(a), c]))
            }
        }

        function P(a) {
            (a = G.getTarget(a)) && "BODY" == a.tagName && ka.append([], !0)
        }
        var ka = new Ua({
            protocol: a,
            counterId: b,
            counterType: c,
            meta: {
                url: B().href,
                hitId: d,
                timezone: va,
                timestamp: wa
            }
        }),
            la = {
                A: 1,
                ABBR: 2,
                ACRONYM: 3,
                ADDRESS: 4,
                APPLET: 5,
                AREA: 6,
                B: 7,
                BASE: 8,
                BASEFONT: 9,
                BDO: 10,
                BIG: 11,
                BLOCKQUOTE: 12,
                BODY: 13,
                BR: 14,
                BUTTON: 15,
                CAPTION: 16,
                CENTER: 17,
                CITE: 18,
                CODE: 19,
                COL: 20,
                COLGROUP: 21,
                DD: 22,
                DEL: 23,
                DFN: 24,
                DIR: 25,
                DIV: 26,
                DL: 27,
                DT: 28,
                EM: 29,
                FIELDSET: 30,
                FONT: 31,
                FORM: 32,
                FRAME: 33,
                FRAMESET: 34,
                H1: 35,
                H2: 36,
                H3: 37,
                H4: 38,
                H5: 39,
                H6: 40,
                HEAD: 41,
                HR: 42,
                HTML: 43,
                I: 44,
                IFRAME: 45,
                IMG: 46,
                INPUT: 47,
                INS: 48,
                ISINDEX: 49,
                KBD: 50,
                LABEL: 51,
                LEGEND: 52,
                LI: 53,
                LINK: 54,
                MAP: 55,
                MENU: 56,
                META: 57,
                NOFRAMES: 58,
                NOSCRIPT: 59,
                OBJECT: 60,
                OL: 61,
                OPTGROUP: 62,
                OPTION: 63,
                P: 64,
                PARAM: 65,
                PRE: 66,
                Q: 67,
                S: 68,
                SAMP: 69,
                SCRIPT: 70,
                SELECT: 71,
                SMALL: 72,
                SPAN: 73,
                STRIKE: 74,
                STRONG: 75,
                STYLE: 76,
                SUB: 77,
                SUP: 78,
                TABLE: 79,
                TBODY: 80,
                TD: 81,
                TEXTAREA: 82,
                TFOOT: 83,
                TH: 84,
                THEAD: 85,
                TITLE: 86,
                TR: 87,
                TT: 88,
                U: 89,
                UL: 90,
                VAR: 91,
                NOINDEX: 100
            },
            ga = 0;
        q(0);
        var V = 0,
            ha = 1,
            aa = 0,
            ia = [0, 0],
            ma = 0,
            ja = [0, 0],
            ba = {},
            na = /^(password|passwd|pswd)$/,
            Ba = !0,
            Da = !1,
            za = "",
            Ea = !1,
            oa = !0,
            qa = ra(),
            C = "metrikaId_" + Math.random(),
            sa = {},
            xa = ":submit" + Math.random();
        if ("MetrikaPlayer" != h.name) {
            k.on(f, "mousemove", Na);
            k.on(f, "click,dblclick,mousedown", U);
            k.on(f, "mouseup", Ma);
            k.on(h, "scroll", ta);
            if ("onmousewheel" in f) k.on(f, "mousewheel", T);
            else k.on(f, "wheel", T);
            k.on(h, "beforeunload", ua);
            if (!kb) k.on(h, "unload", ua);
            k.on(h, "resize", Aa);
            k.on(f, "keydown", Ra);
            k.on(f, "keypress", Sa);
            k.on(f, "copy", Ca);
            k.on(f, "touchmove,touchstart", ea);
            if (f.body) k.on(f, "mouseleave", P);
            f.attachEvent && !h.opera ? (k.on(f, "focusin", Ta), k.on(f, "focusout", ca)) : (k.on(h,
                "focus", Fa), k.on(h, "blur", pa), k.on(f, "blur", pa));
            f.addEventListener ? (k.on(f, "scroll", Oa), k.on(f, "focus", Q), k.on(f, "blur", R), k.on(f, "change", L), k.on(f, "submit", F)) : f.attachEvent && (k.on(f, "focusin", Q), k.on(f, "focusout", R), function () {
                for (var a = f.getElementsByTagName("form"), b = 0; b < a.length; b++) {
                    for (var c = a[b].getElementsByTagName("*"), d = 0; d < c.length; d++)
                        if (/^INPUT|SELECT|TEXTAREA$/.test(c[d].tagName)) k.on(c[d], "change", L);
                    k.on(a[b], "submit", F)
                }
            }());
            (function () {
                var a = f.getElementsByTagName("form");
                if (a.length)
                    for (var b =
                            0; b < a.length; b++) {
                        var c = a[b].submit;
                        if ("function" == typeof c || "object" == typeof c && /^\s*function submit\(\)/.test(String(c))) a[b][xa] = c, a[b].submit = function () {
                            F({
                                target: this
                            });
                            return this[xa]()
                        }
                    }
            })();
            "0:0" != l.getDocumentScroll().join(":") && ta();
            Aa();
            W.uploadPage = v(function (e) {
                if ("function" == typeof h.toStaticHTML && -1 < h.toStaticHTML.toString().indexOf("NoScript")) return !1;
                var g = f.documentElement;
                if (g && 19E4 < ("" + g.innerHTML).length) return !1;
                var n = h.XMLHttpRequest ? new h.XMLHttpRequest : new ActiveXObject("Msxml2.XMLHTTP"),
                    r = l.getDocumentCharset(),
                    u = "text/html" + (r ? ";charset=" + r : ""),
                    q = new lb({
                        protocol: a,
                        counterId: b,
                        counterType: c
                    });
                if ("html" == e) return e = RegExp("<script [^>]*?//mc\\.yandex\\.ru/watch/.*?\x3c/script>", "gi"), q.sendContent(l.getDocumentHTML().replace(e, ""), u, d, va, wa), !0;
                n && (n.open("get", B().href, !0), n.onreadystatechange = v(function () {
                    if (4 == n.readyState) {
                        var a = n.getResponseHeader("content-type") || "";
                        r && -1 === a.indexOf("charset=") && (a = u);
                        q.sendContent(n.responseText, a, d, va, wa)
                    }
                }, "updatePage.1"), n.overrideMimeType &&
                    r && n.overrideMimeType(u), n.send(null));
                return !0
            }, "uploadPage")
        }
        return {
            start: function () {
                ka.activate()
            },
            stop: function () {
                ka.clear();
                k.un(f, "mousemove", Na);
                k.un(f, "click,dblclick,mousedown", U);
                k.un(f, "mouseup", Ma);
                k.un(f, "mousewheel,wheel", T);
                k.un(h, "scroll", ta);
                k.un(h, "beforeunload", ua);
                k.un(h, "unload", ua);
                k.un(h, "resize", Aa);
                k.un(f, "keydown", Ra);
                k.un(f, "keypress", Sa);
                k.un(f, "copy", Ca);
                k.un(f, "touchmove,touchstart", ea);
                f.body && k.un(f, "mouseleave", P);
                k.un(f, "focusin", Ta);
                k.un(f, "focusout", ca);
                k.un(h,
                    "focus", Fa);
                k.un(h, "blur", pa);
                k.un(f, "blur", pa);
                f.removeEventListener ? (k.un(f, "scroll", Oa), k.un(f, "focus", Q), k.un(f, "blur", R), k.un(f, "change", L), k.un(f, "submit", F)) : f.detachEvent && (k.un(f, "focusin", Q), k.un(f, "focusout", R), function () {
                    for (var a = f.getElementsByTagName("form"), b = 0; b < a.length; b++) {
                        for (var c = a[b].getElementsByTagName("*"), d = 0; d < c.length; d++) /^INPUT|SELECT|TEXTAREA$/.test(c[d].tagName) && k.un(c[d], "change", L);
                        k.un(a[b], "submit", F)
                    }
                }());
                (function () {
                    for (var a = f.getElementsByTagName("form"),
                            b = 0; b < a.length; b++) a[b][xa] && (a[b].submit = a[b][xa])
                })()
            },
            uploadPages: function (a, b) {
                function c() {
                    k.un(f, "DOMContentLoaded", c);
                    k.un(h, "load", c);
                    for (var d = a.split(/\n/), e = B().href, g = /regexp:/, n = 0; n < d.length; n++) {
                        var r = d[n];
                        if (r)
                            if (g.test(r)) {
                                r = Ga(r.replace(g, ""));
                                try {
                                    var u = new RegExp(r)
                                } catch (q) { }
                                if (u && u.test(e)) {
                                    W.uploadPage(b);
                                    break
                                }
                            } else if (-1 !== e.indexOf(r)) {
                                W.uploadPage(b);
                                break
                            }
                    }
                }
                "complete" == f.readyState ? c() : (k.on(f, "DOMContentLoaded", c), k.on(h, "load", c))
            }
        }
    }
    var N = "",
        kb = !ha(/webkit/) && ha(/gecko/),
        l = {
            getDocumentCharset: function () {
                return ("" + (f.characterSet || f.charset || "")).toLowerCase()
            },
            getDocumentHTML: function () {
                var a = "",
                    b = "",
                    a = f.documentElement,
                    c = a.outerHTML;
                if (c) a = c;
                else {
                    for (var c = a.attributes, e = "", d = 0; d < c.length; d++) {
                        var g = c[d];
                        g && (e += " " + g.name + '="' + (g.value || "") + '"')
                    }
                    a = "<html" + e + ">" + a.innerHTML + "</html>"
                } (c = f.doctype) && (b = "<!DOCTYPE " + c.name + (c.publicId ? ' PUBLIC "' + c.publicId + '"' : "") + (c.systemId ? ' "' + c.systemId + '"' : "") + ">\n");
                return b + a
            },
            getRootElement: function () {
                var a = f.documentElement;
                return "CSS1Compat" == f.compatMode ? a : f.body || a
            },
            getViewportSize: function () {
                var a = l.getRootElement();
                return [a.clientWidth, a.clientHeight]
            },
            getDocumentSize: function () {
                var a = l.getRootElement(),
                    b = l.getViewportSize();
                return [Math.max(a.scrollWidth, b[0]), Math.max(a.scrollHeight, b[1])]
            },
            getDocumentScroll: function () {
                return [h.pageXOffset || f.documentElement && f.documentElement.scrollLeft || f.body && f.body.scrollLeft || 0, h.pageYOffset || f.documentElement && f.documentElement.scrollTop || f.body && f.body.scrollTop || 0]
            },
            getElementXY: function (a) {
                if (!a.ownerDocument ||
                    "PARAM" == a.tagName || a == f.body || a == f.documentElement) return [0, 0];
                if (a.getBoundingClientRect) {
                    a = a.getBoundingClientRect();
                    var b = l.getDocumentScroll();
                    return [Math.round(a.left + b[0]), Math.round(a.top + b[1])]
                }
                for (var c = b = 0; a;) b += a.offsetLeft, c += a.offsetTop, a = a.offsetParent;
                return [b, c]
            },
            getElementParent: function (a) {
                return a == f.documentElement ? null : a == f.body ? f.documentElement : a.parentNode
            }
        },
        g = {
            isArray: function (a) {
                return "function" == typeof Array.isArray ? Array.isArray(a) : "[object Array]" == Object.prototype.toString.call(a)
            },
            mergeArrays: function (a) {
                for (var b = 1; b < arguments.length; b++)
                    if (g.isArray(arguments[b]))
                        for (var c = 0; c < arguments[b].length; c++) a[a.length] = arguments[b][c];
                return a
            }
        };
    l.getElementChildren = function (a, b) {
        var c = [];
        if (a) {
            var e = a.childNodes;
            if (e)
                for (var d = 0, h = e.length; d < h; d++) {
                    var f = e[d];
                    "INPUT" == f.nodeName && f.type && "hidden" == f.type.toLocaleLowerCase() || b && f.nodeName != b || g.mergeArrays(c, [f])
                }
        }
        return c
    };
    l.getElementNeighborPosition = function (a) {
        var b = l.getElementParent(a);
        if (b)
            for (var c = 0, b = b.childNodes, e, d =
                    a && a.nodeName, g = 0; g < b.length; g++)
                if (e = b[g] && b[g].nodeName, d == e) {
                    if (a == b[g]) return c;
                    c++
                }
        return 0
    };
    l.getElementSize = function (a) {
        return a == f.body || a == f.documentElement ? l.getDocumentSize() : [a.offsetWidth, a.offsetHeight]
    };
    l.getElementRegion = function (a) {
        var b = l.getElementXY(a);
        a = l.getElementSize(a);
        return [b[0], b[1], a[0], a[1]]
    };
    g.fletcher = function (a) {
        for (var b = a.length, c = 0, e = 255, d = 255; b;) {
            var g = 21 < b ? 21 : b,
                b = b - g;
            do {
                var f = "string" == typeof a ? a.charCodeAt(c) : a[c];
                c++;
                if (255 < f) var h = f >> 8,
                    f = f & 255,
                    f = f ^ h;
                e += f;
                d +=
                    e
            } while (--g);
            e = (e & 255) + (e >> 8);
            d = (d & 255) + (d >> 8)
        }
        a = (e & 255) + (e >> 8) << 8 | (d & 255) + (d >> 8);
        return 65535 == a ? 0 : a
    };
    l.calcTextChecksum = function (a) {
        var b = "";
        a = a.childNodes;
        for (var c = 0, e = a.length; c < e; c++) a[c] && 3 == a[c].nodeType && (b += a[c].nodeValue);
        return g.fletcher(b.replace(/[\u0000-\u0020]+/g, ""))
    };
    l.calcAttribChecksum = function (a) {
        var b = "",
            c = "width height align title alt name".split(" ");
        "IMG" == a.tagName && (b += a.src.toLowerCase());
        "A" == a.tagName && (b += a.href.toLowerCase());
        for (var b = b + String(a.className || "").toLowerCase(),
                e = 0; e < c.length; e++) a.getAttribute && (b += String(a.getAttribute(c[e]) || "").toLowerCase());
        return g.fletcher(b.replace(/[\u0000-\u0020]+/g, ""))
    };
    l.calcChildrenChecksum = function (a) {
        return g.fletcher((a.innerHTML || "").replace(/(<[^>]*>|[\u0000-\u0020])/g, ""))
    };
    l.getFormNumber = function (a) {
        for (var b = f.getElementsByTagName("form"), c = 0, e = b.length; c < e; c++)
            if (b[c] == a) return c;
        return -1
    };
    l.classNameExists = function (a, b) {
        try {
            return (new RegExp("(?:^|\\s)" + b + "(?:\\s|$)")).test(a.className)
        } catch (c) {
            return !1
        }
    };
    l.isEmptyField =
        function (a) {
            return "INPUT" == a.nodeName && "submit" != a.type && "image" != a.type && "hidden" != a.type ? "radio" == a.type || "checkbox" == a.type ? !a.checked : !a.value : "TEXTAREA" == a.nodeName ? !a.value : "SELECT" == a.nodeName ? 0 > a.selectedIndex : !0
        };
    l.getElementsByClassName = function (a, b) {
        b = b || f;
        for (var c = b.getElementsByTagName("*"), e = [], d = 0; d < c.length; d++) l.classNameExists(c[d], a) && e.push(c[d]);
        return e
    };
    l.getDocumentTitle = function () {
        var a = f.title;
        "string" != typeof a && (a = (a = f.getElementsByTagName("title")) && a.length ? a[0].innerHTML :
            "");
        return a
    };
    var G = {
        getPos: function (a) {
            var b = l.getRootElement(),
                c = l.getDocumentScroll();
            return [a.pageX || a.clientX + c[0] - (b.clientLeft || 0) || 0, a.pageY || a.clientY + c[1] - (b.clientTop || 0) || 0]
        },
        getTarget: function (a) {
            a = a.target || a.srcElement;
            N = typeof a + " - " + String(a);
            !a.ownerDocument && a.documentElement && (a = a.documentElement);
            return a
        },
        getMouseButton: function (a) {
            return a.which || a.button == Y ? a.which : a.button & 1 ? 1 : a.button & 2 ? 3 : a.button & 4 ? 2 : 0
        }
    };
    g.isFunction = function (a) {
        return "function" === typeof a
    };
    g.isNativeFunction =
        function (a, b) {
            var c;
            b = b || h;
            c = b[a];
            try {
                return g.isFunction(c) && -1 !== Function.prototype.toString.call(c).indexOf("[native code]")
            } catch (e) {
                return !1
            }
        };
    G.dispatchCustomEvent = v(function (a, b) {
        var c;
        b = b || f;
        g.isNativeFunction("Event") ? c = new Event(a) : f.createEvent ? (c = f.createEvent("Event"), c.initEvent(a, !0, !0)) : f.createEventObject && (c = f.createEventObject(), c.eventType = a);
        c.eventName = a;
        if (b.dispatchEvent) b.dispatchEvent(c);
        else if (b[a]) b[a]();
        else if (b["on" + a]) b["on" + a]()
    }, "EventHelper.dispatchCustomEvent");
    g.mixin = function (a) {
        for (var b = 1; b < arguments.length; b++)
            if (arguments[b]) {
                for (var c in arguments[b]) arguments[b].hasOwnProperty(c) && (a[c] = arguments[b][c]);
                arguments[b].hasOwnProperty("toString") && (a.toString = arguments[b].toString)
            }
        return a
    };
    var H = function (a) {
        a = a || {};
        g.mixin(this, a);
        this._initComponent()
    };
    H.prototype._initComponent = function () { };
    H.inherit = function (a) {
        a = a || {};
        var b = "function" == typeof this ? this : Object;
        a.hasOwnProperty("constructor") || (a.constructor = function () {
            b.apply(this, arguments)
        });
        var c = function () { };
        c.prototype = b.prototype;
        a.constructor.prototype = new c;
        g.mixin(a.constructor.prototype, a);
        a.constructor.prototype.constructor = a.constructor;
        a.constructor.superclass = b.prototype;
        a.constructor.inherit = H.inherit;
        return a.constructor
    };
    var k = H.inherit({
        _initComponent: function () {
            k.superclass._initComponent.apply(this, arguments);
            this._listeners = []
        },
        on: function (a, b, c, e, d) {
            d = 5 > arguments.length ? !0 : !!d;
            for (var g = b.split(","), f = 0; f < g.length; f++) {
                var k = g[f],
                    l = v(function (a) {
                        c.call(e || this, a ||
                            h.event)
                    }, "on" + k);
                this._listeners[this._listeners.length] = [a, k, c, e, d, l];
                a.addEventListener ? a.addEventListener(k, l, d) : a.attachEvent && a.attachEvent("on" + k, l)
            }
        },
        un: function (a, b, c, e, d) {
            d = 5 > arguments.length ? !0 : !!d;
            for (var g = b.split(","), f = 0; f < g.length; f++)
                for (var h = g[f], k = 0; k < this._listeners.length; k++) {
                    var l = this._listeners[k];
                    if (l[0] == a && l[1] == h && l[2] == c && l[3] == e && l[4] == d) {
                        this._listeners.splice(k, 1);
                        this._removeListener(a, h, l[5], d);
                        return
                    }
                }
        },
        unAll: function () {
            for (var a = 0; a < this._listeners.length; a++) {
                var b =
                    this._listeners[a];
                this._removeListener(b[0], b[1], b[5], b[4])
            }
            this._listeners.length = 0
        },
        _removeListener: function (a, b, c, e) {
            a.removeEventListener ? a.removeEventListener(b, c, e) : a.detachEvent && a.detachEvent("on" + b, c)
        }
    });
    k.on = function (a, b, c, e, d) {
        k._instance || (k._instance = new k);
        k._instance.on.apply(k._instance, arguments)
    };
    k.un = function (a, b, c, e, d) {
        k._instance && k._instance.un.apply(k._instance, arguments)
    };
    var la = null;
    g.toJSON = function (a) {
        if (a === Y) return "";
        if (null === a) return "null";
        switch (a.constructor) {
            case Boolean:
                return a.toString();
            case Number:
                return isFinite(a) ? a.toString() : "null";
            case String:
                return '"' + a.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r") + '"';
            case Array:
                for (var b = [], c = 0, e = a.length; c < e; c++) b[b.length] = g.toJSON(a[c]);
                return "[" + b.join(",") + "]";
            case Object:
                b = [];
                for (c in a) a.hasOwnProperty(c) && a[c] !== Y && (b[b.length] = g.toJSON(c) + ":" + g.toJSON(a[c]));
                return "{" + b.join(",") + "}";
            default:
                try {
                    return JSON.stringify(a)
                } catch (d) {
                    return "null"
                }
        }
    };
    var da = H.inherit({
        counterId: "",
        _initComponent: function () {
            da.superclass._initComponent.apply(this,
                arguments);
            this._ls = null;
            try {
                this._ls = h.localStorage
            } catch (a) { }
        },
        set: function (a, b) {
            if (this.isEnabled()) try {
                !b || b && g.isArray(b) && !b.length ? this.remove(a) : this._ls.setItem(this._getLsKey(a), g.toJSON(b))
            } catch (c) { }
        },
        get: function (a) {
            if (this.isEnabled()) try {
                return JSON.parse(this._ls.getItem(this._getLsKey(a)))
            } catch (b) { }
            return null
        },
        remove: function (a) {
            if (this.isEnabled()) try {
                this._ls.removeItem(this._getLsKey(a))
            } catch (b) { }
        },
        isEnabled: function () {
            return this._ls && h.JSON && "object" == typeof this._ls && "object" ==
                typeof h.JSON
        },
        getStorageId: function () {
            var a = this.get("lsid");
            a || (a = Math.round(Math.random() * new Date), this.set("lsid", a));
            return a
        },
        clearStorageId: function () {
            this.remove("lsid")
        },
        _getLsKey: function (a) {
            return "_ym" + this.counterId + "_" + a
        }
    }),
        X = H.inherit({
            counterId: "",
            onlyCurrentDomain: !1,
            skipPrefix: !1,
            _initComponent: function () {
                X.superclass._initComponent.apply(this, arguments);
                this._domain = null;
                if (!this.onlyCurrentDomain)
                    for (var a = A.host.split("."), b = 2; ;)
                        if (b <= a.length) {
                            if (this._domain = "." + a.slice(-b).join("."),
                                b++, this.isEnabled()) break
                        } else {
                            this._domain = null;
                            break
                        }
            },
            create: function (a, b, c) {
                a = [this._prepareName(a) + "=" + encodeURIComponent(b)];
                c && (b = new Date, b.setTime(b.getTime() + 6E4 * c), a.push("expires=" + b.toGMTString()));
                this._domain && a.push("domain=" + this._domain);
                a.push("path=/");
                try {
                    f.cookie = a.join(";")
                } catch (e) { }
            },
            read: function (a) {
                try {
                    var b = f.cookie
                } catch (c) { }
                return b && b.match(new RegExp("(?:^|;\\s*)" + this._prepareName(a) + "=([^;]*)")) ? decodeURIComponent(RegExp.$1) : null
            },
            erase: function (a) {
                this.create(a,
                    "", -1)
            },
            isEnabled: function () {
                this.create("metrika_enabled", "1", 60);
                var a = !!this.read("metrika_enabled");
                this.erase("metrika_enabled");
                return a
            },
            _prepareName: function (a) {
                return (this.skipPrefix ? "" : "_ym_") + a + (this.counterId ? "_" + this.counterId : "")
            }
        });
    X.isEnabled = function () {
        return (new X({
            onlyCurrentDomain: !0
        })).isEnabled()
    };
    var t = H.inherit({
        transports: [],
        postParams: [],
        send: function (a, b, c, e) {
            c = c || function () { };
            (function W(g) {
                if (g < this.transports.length) try {
                    var f = new this.transports[g]({
                        postParams: this.postParams
                    });
                    f.request(a, b, function (a, b) {
                        a ? c.call(e, b) : W.call(this, g + 1)
                    }, this)
                } catch (h) {
                    na(h, "send by " + (f && f.id)), W.call(this, g + 1)
                }
            }).call(this, 0)
        }
    }),
        aa = {
            stringify: function (a) {
                var b = [],
                    c;
                for (c in a)
                    if (a.hasOwnProperty(c)) {
                        var e = a[c];
                        if (g.isArray(e))
                            for (var d = 0; d < e.length; d++) b.push(encodeURIComponent(c) + "=" + encodeURIComponent(String(e[d])));
                        else b.push(encodeURIComponent(c) + "=" + encodeURIComponent(String(e)))
                    }
                return b.join("&")
            }
        };
    g.forEachKey = function (a, b, c) {
        for (var e in a) a.hasOwnProperty(e) && b.call(c, e, a[e],
            a)
    };
    g.inArray = function (a, b) {
        for (var c = 0; c < a.length; c++)
            if (a[c] == b) return !0;
        return !1
    };
    var E = H.inherit({
        postParams: [],
        _buildUrl: function (a, b) {
            return a + (-1 < a.indexOf("?") ? "&" : "?") + aa.stringify(b)
        },
        _splitParams: function (a) {
            var b = {},
                c = {};
            g.forEachKey(a, function (a, d) {
                g.inArray(this.postParams, a) ? c[a] = d : b[a] = d
            }, this);
            return {
                get: b,
                post: c
            }
        }
    });
    E.inherit({
        id: "beacon",
        request: function (a, b, c, e) {
            "function" == typeof I.sendBeacon ? (b = this._splitParams(b), c.call(e, I.sendBeacon(this._buildUrl(a, b.get), aa.stringify(b.post)))) :
                c.call(e, !1)
        }
    });
    g.getNativeFunction = function (a, b) {
        b = b || h;
        var c = b.constructor && b.constructor.prototype && b.constructor.prototype[a] || b[a];
        return c && "apply" in c ? function () {
            return c.apply(b, arguments)
        } : c
    };
    g.setTimeout = function (a, b, c) {
        return g.getNativeFunction("setTimeout")(v(a, c || "setTimeout"), b)
    };
    var J = E.inherit({
        id: "XHR",
        request: function (a, b, c, e) {
            if (/[^a-z0-9.:-]/.test(A.host) && h.opera && "function" == typeof h.opera.version) {
                var d = h.opera.version();
                if ("string" == typeof d && "12" == d.split(".")[0]) return c.call(e, !1)
            }
            if (h.XMLHttpRequest) {
                var f = new XMLHttpRequest;
                if ("withCredentials" in f) {
                    b = this._splitParams(b);
                    a = this._buildUrl(a, b.get);
                    try {
                        f.open("POST", a, !0)
                    } catch (k) {
                        return c.call(e, !1)
                    }
                    f.withCredentials = !0;
                    f.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                    f.send(aa.stringify(b.post));
                    (function () {
                        4 == f.readyState ? c.call(e, 200 == f.status) : g.setTimeout(arguments.callee, 50, "TransportXHR.request")
                    })();
                    return
                }
            }
            c.call(e, !1)
        }
    });
    g.random = function (a, b) {
        2 > arguments.length && (b = a, a = 0);
        1 > arguments.length &&
            (b = 1073741824);
        return Math.floor(Math.random() * (b - a)) + a
    };
    var R = E.inherit({
        id: "form",
        enctype: "application/x-www-form-urlencoded",
        htmlfileOnly: !1,
        _initComponent: function () {
            R.superclass._initComponent.apply(this, arguments);
            "_htmlfile" in R.prototype || (R.prototype._htmlfile = this._createHtmlfile());
            this._doc = this._htmlfile || (this.htmlfileOnly ? null : f)
        },
        request: function (a, b, c, e) {
            var d = this._doc;
            if (!d) return c.call(e, !1);
            b = this._splitParams(b);
            var f = "ifr" + g.random(),
                h = d.createElement("div");
            h.style.position =
                "absolute";
            h.style.left = "-99999px";
            h.style.top = "-99999px";
            var k = ['<iframe name="', f, '"></iframe>', '<form action="', this._buildUrl(a, b.get), '" method="post" target="', f, '" enctype="', this.enctype, '">'];
            g.forEachKey(b.post, function (a) {
                g.mergeArrays(k, ['<input type="hidden" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" name="', a, '"/>'])
            });
            g.mergeArrays(k, ["</form>"]);
            h.innerHTML = k.join("");
            d.body.appendChild(h);
            var l = h.getElementsByTagName("form")[0];
            g.forEachKey(b.post,
                function (a, b) {
                    l[a].value = b
                });
            l.submit();
            g.setTimeout(function () {
                d.body.removeChild(h)
            }, 1E4, "TransportForm.request.2");
            return c.call(e, !0)
        },
        _createHtmlfile: function () {
            try {
                if (h.ActiveXObject) {
                    var a = new ActiveXObject("htmlfile");
                    a.open();
                    a.write("<html><body></body></html>");
                    a.close();
                    return a
                }
            } catch (b) { }
            return null
        }
    }),
        L = R.inherit({
            id: "htmlfile",
            htmlfileOnly: !0
        }),
        K = E.inherit({
            id: "img",
            request: function (a, b, c, e) {
                a = this._buildUrl(a, b);
                b = f.createElement("img");
                b.onload = v(function () {
                    c.call(e, !0)
                }, "TransportImage.request");
                b.onerror = v(function () {
                    c.call(e, !1)
                }, "TransportImage.request");
                b.src = a
            }
        });
    g.defer = function (a, b, c, e, d) {
        return g.setTimeout(function () {
            a.apply(c, e || [])
        }, b, d)
    };
    var M = t.inherit({
        protocol: "",
        host: "mc.yandex.ru",
        resource: "",
        counterId: "",
        counterType: 0,
        retry: !1,
        transports: [J, K, L],
        _initComponent: function () {
            M.superclass._initComponent.apply(this, arguments);
            this.retry && (this._storage = new da)
        },
        send: function (a, b, c, e) {
            var d = this._registerRequest(a, b);
            this._sendSavedRequest(d, a, b, c, e)
        },
        _sendSavedRequest: function (a,
            b, c, e, d) {
            var f = h.Ya._metrika.firstReqStatus;
            if ("process" == f) h.Ya._metrika.firstReqCallbacks = g.mergeArrays(h.Ya._metrika.firstReqCallbacks || [], [
                [this, arguments]
            ]);
            else {
                f || (h.Ya._metrika.firstReqStatus = "process");
                f = {};
                this.counterType && (f["cnt-class"] = this.counterType);
                g.mixin(f, b);
                c.st = Math.round((new Date).getTime() / 1E3);
                c.u = M._userID;
                var k = [this.protocol, "//", this.host, "/" + this.resource + "/" + this.counterId].join(""),
                    l = [];
                c && (g.forEachKey(c, function (a, b) {
                    "t" != a && g.mergeArrays(l, [a, b])
                }), c.t && g.mergeArrays(l, ["t", c.t]));
                l.length && (f["browser-info"] = l.join(":"));
                return M.superclass.send.call(this, k, f, function () {
                    h.Ya._metrika.firstReqStatus = "complete";
                    this._unregisterRequest(a);
                    var b = h.Ya._metrika.firstReqCallbacks;
                    h.Ya._metrika.firstReqCallbacks = null;
                    if (b)
                        for (var c = 0; c < b.length; c++) b[c][0]._sendSavedRequest.apply(b[c][0], b[c][1]);
                    e && e.apply(d, arguments)
                }, this)
            }
        },
        _isRetryEnabled: function () {
            return this.retry && this._storage && this._storage.isEnabled()
        },
        _registerRequest: function (a, b) {
            if (this._isRetryEnabled()) {
                b.rqnl =
                    b.rqnl || 0;
                b.rqnl++;
                for (var c = this._storage.get("retryReqs") || {}, e = 1; c[e];) e++;
                c[e] = {
                    protocol: this.protocol,
                    host: this.host,
                    resource: this.resource,
                    counterId: this.counterId,
                    counterType: this.counterType,
                    postParams: this.postParams,
                    params: a,
                    browserInfo: b,
                    ghid: Ya._globalMetrikaHitId,
                    time: +new Date
                };
                this._storage.set("retryReqs", c);
                return e
            }
        },
        _unregisterRequest: function (a) {
            if (a && this._isRetryEnabled()) {
                var b = this._storage.get("retryReqs") || {};
                b[a] && (delete b[a], this._storage.set("retryReqs", b))
            }
        }
    });
    M.initCookie =
        function () {
            var a = new X,
                b = a.read("uid");
            b || (b = Math.round((new Date).getTime() / 1E3), b = b + "" + g.random(), a.create("uid", b, 259200));
            M._userID = b
        };
    M.retransmit = function () {
        var a = new da,
            b = a.get("retryReqs") || {};
        a.remove("retryReqs");
        g.forEachKey(b, function (a, b) {
            h.Ya._metrika.firstReqStatus || (h.Ya._metrika.firstReqStatus = "complete");
            b.ghid && b.ghid != Ya._globalMetrikaHitId && b.time && b.time + 864E5 > +new Date && 2 >= b.browserInfo.rqnl && (new M({
                protocol: b.protocol,
                host: b.host,
                resource: b.resource,
                counterId: b.counterId,
                counterType: b.counterType,
                postParams: b.postParams || [],
                retry: !0
            })).send(b.params, b.browserInfo)
        })
    };
    var F = {
        abc: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        tail: "+/=",
        tailSafe: "*-_",
        encode: function (a, b) {
            for (var c = (F.abc + (b ? F.tailSafe : F.tail)).split(""), e = a.length, d = [], f = e - e % 3, h, k = 0; k < f; k += 3) h = (a[k] << 16) + (a[k + 1] << 8) + a[k + 2], g.mergeArrays(d, [c[h >> 18 & 63], c[h >> 12 & 63], c[h >> 6 & 63], c[h & 63]]);
            switch (e - f) {
                case 1:
                    h = a[f] << 4;
                    g.mergeArrays(d, [c[h >> 6 & 63], c[h & 63], c[64], c[64]]);
                    break;
                case 2:
                    h = (a[f] <<
                        10) + (a[f + 1] << 2), g.mergeArrays(d, [c[h >> 12 & 63], c[h >> 6 & 63], c[h & 63], c[64]])
            }
            return d.join("")
        }
    },
        mb = {
            encode: function (a) {
                for (var b = [], c = 0, e = a.length; c < e; c++) {
                    var d = a.charCodeAt(c);
                    128 > d ? b.push(d) : (127 < d && 2048 > d ? b.push(d >> 6 | 192) : (b.push(d >> 12 | 224), b.push(d >> 6 & 63 | 128)), b.push(d & 63 | 128))
                }
                return b
            }
        },
        lb = M.inherit({
            resource: "webvisor",
            transports: [J, R],
            postParams: ["wv-data"],
            sendContent: function (a, b, c, e, d, g, f) {
                if (!a) return !1; -1 < a.indexOf("\r") && (a = a.replace(/\r\n/g, "\n"));
                a = {
                    "wv-type": 1,
                    "page-url": B().href,
                    "wv-hit": c,
                    "wv-data": F.encode(mb.encode(a))
                };
                return 245E3 < a["wv-data"].length ? !1 : this.send(a, {
                    z: e,
                    i: d,
                    pct: b || ""
                }, g, f)
            }
        });
    g.throttle = function (a, b, c, e) {
        var d, f, h;
        return function () {
            f = arguments;
            h = this;
            d || function () {
                d = null;
                f && (a.apply(c || h, f), f = null, d = g.setTimeout(arguments.callee, b, e))
            }()
        }
    };
    var Va = H.inherit({
        storage: null,
        storageKey: "dataBuffer",
        maxBufferSize: 255,
        flushTimeout: 1E4,
        active: !0,
        meta: null,
        onFlush: function () { },
        onFlushCtx: null,
        bufferExpireTime: 864E5,
        _initComponent: function () {
            Va.superclass._initComponent.apply(this,
                arguments);
            this._data = [];
            this._packetNumber = 0;
            this._flushTID = null;
            this._saveToStorageThrottled = g.throttle(this._saveToStorage, 300, this, "DataBuffer._saveToStorage");
            if (this.storage) {
                var a = this.storage.get(this.storageKey);
                a && a.data && a.meta && a.time && a.time + this.bufferExpireTime > +new Date && this.onFlush.call(this.onFlushCtx || this, a.data, a.meta, a.pnum);
                this.clear()
            }
        },
        append: function (a, b) {
            g.mergeArrays(this._data, a);
            this._saveToStorageThrottled();
            this.active && ((b || this._data.length >= this.maxBufferSize) &&
                this._flush(), this._flushTID || (this._flushTID = g.defer(this._flush, this.flushTimeout, this, [], "DataBuffer._flush")))
        },
        activate: function () {
            this.active || (this.active = !0, this.append([]))
        },
        clear: function () {
            this._data.length = 0;
            this._flushTID = null;
            this.storage && this.storage.remove(this.storageKey)
        },
        _flush: function () {
            this.onFlush.call(this.onFlushCtx || this, this._data, this.meta, this._packetNumber);
            this._packetNumber++;
            this.clear()
        },
        _saveToStorage: function () {
            this.storage && this._data.length && this.storage.set(this.storageKey, {
                data: this._data,
                meta: this.meta,
                pnum: this._packetNumber,
                time: +new Date
            })
        }
    });
    g.trim = function (a, b) {
        a = String(a).replace(/^\s+|\s+$/g, "");
        b && a.length > b && (a = a.substr(0, b));
        return a
    };
    g.isString = function (a) {
        return "[object String]" == Object.prototype.toString.call(a)
    };
    g.arrayIndexOf = function (a, b) {
        for (var c = 0; c < a.length; c++)
            if (a[c] === b) return c;
        return -1
    };
    var w = {
        _jScriptVersion: 0,
        getJScriptVersion: function () {
            w._jScriptVersion || (w._jScriptVersion = (new Function("return /*@cc_on @_jscript_version @*/;"))());
            return w._jScriptVersion
        },
        _silverlightVersion: "",
        getSilverlightVersion: function () {
            if (!w._silverlightVersion)
                if (h.ActiveXObject) try {
                    var a = function (a, b, c, g) {
                        for (; a.isVersionSupported(b[0] + "." + b[1] + "." + b[2] + "." + b[3]) ;) b[c] += g;
                        b[c] -= g
                    },
                        b = new ActiveXObject("AgControl.AgControl"),
                        c = [1, 0, 0, 0];
                    a(b, c, 0, 1);
                    a(b, c, 1, 1);
                    a(b, c, 2, 1E4);
                    a(b, c, 2, 1E3);
                    a(b, c, 2, 100);
                    a(b, c, 2, 10);
                    a(b, c, 2, 1);
                    a(b, c, 3, 1);
                    w._silverlightVersion = c.join(".")
                } catch (e) { } else if (a = h.navigator, a = a.plugins && a.plugins["Silverlight Plug-In"]) w._silverlightVersion = a.description;
            return w._silverlightVersion || ""
        },
        _flashVersion: 0,
        getFlashVersion: function () {
            if (!w._flashVersion) {
                var a = h.navigator;
                if ("undefined" != typeof a.plugins && "object" == typeof a.plugins["Shockwave Flash"]) {
                    var b = a.plugins["Shockwave Flash"],
                        c = b.version;
                    if ((b = b.description) || c)
                        if (a = a.mimeTypes, "undefined" == typeof a || !a["application/x-shockwave-flash"] || a["application/x-shockwave-flash"].enabledPlugin) c ? w._flashVersion = c : b && (w._flashVersion = b.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s+r|\s+b[0-9]+)/, "."))
                } else if ("undefined" !=
                    typeof h.ActiveXObject) try {
                        if (c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))
                            if (b = c.GetVariable("$version")) w._flashVersion = b.split(" ")[1].replace(/,/g, ".").replace(/[^.\d]/g, "")
                    } catch (e) { }
            }
            return w._flashVersion
        },
        getLanguage: function () {
            return (h.navigator && (I.language || I.browserLanguage) || "").toLowerCase()
        },
        getJavaEnabled: function () {
            try {
                return I.javaEnabled()
            } catch (a) {
                return !1
            }
        },
        getNotificationPermission: function () {
            var a;
            try {
                a = Notification.permission
            } catch (b) { }
            switch (a) {
                case "denied":
                    return 1;
                case "granted":
                    return 2
            }
        },
        isIframe: function () {
            try {
                return h.top != h.self
            } catch (a) {
                return !1
            }
        }
    };
    g.fnv32a = function (a) {
        for (var b = 2166136261, c = 0, e = a.length; c < e; ++c) b ^= a.charCodeAt(c), b += (b << 1) + (b << 4) + (b << 7) + (b << 8) + (b << 24);
        return b >>> 0
    };
    w.getFingerPrint = function () {
        var a = [];
        if (I.plugins && I.plugins.length)
            for (var b = 0; b < I.plugins.length; b++) {
                var c = I.plugins[b];
                g.mergeArrays(a, [c.name, c.version, c.description, c.filename])
            }
        if (I.mimeTypes && I.mimeTypes.length)
            for (b = 0; b < I.mimeTypes.length; b++) c = I.mimeTypes[b], g.mergeArrays(a, [c.type, c.description, c.suffixes]);
        return g.fnv32a(a.join(";")) + "01"
    };
    var nb = {
        url: "https://mc.yandex.ru/metrika/advert.gif",
        _value: null,
        _storage: null,
        is: function () {
            var a;
            if (null !== this._value && this._value !== Y) return this._value;
            this._storage || (this._storage = new X);
            if (a = this._storage.read("isad")) return this._set(a), this._value;
            this._getReqStatus() || this._send();
            return !1
        },
        _set: function (a) {
            var b = !1;
            "1" == a && (b = !0);
            this._value = b
        },
        _send: function () {
            var a = f.createElement("img"),
                b = this;
            a.onload = function () {
                b._saveReq(!1)
            };
            a.onerror = function () {
                b._saveReq(!0)
            };
            this._setReqStatus("process");
            a.src = this.url
        },
        _saveReq: function (a) {
            this._value = !!a;
            this._setReqStatus("complete");
            this._storage.create("isad", a ? "1" : "0", 1200)
        },
        _setReqStatus: function (a) {
            try {
                h.Ya._metrika.adStatus = a
            } catch (b) { }
        },
        _getReqStatus: function () {
            try {
                return h.Ya._metrika.adStatus
            } catch (a) {
                return "complete"
            }
        }
    },
        ea = M.inherit({
            hitId: 0,
            trackHash: !1,
            trimParams: !1,
            webvisor: !1,
            counter: null,
            counterNum: 0,
            resource: "watch",
            retry: !0,
            postParams: ["site-info"],
            countersNoTitle: "22836271 1143050 29626870 9928105 26128362 29850769".split(" "),
            sendTitle: !0,
            _initComponent: function () {
                ea.superclass._initComponent.apply(this, arguments);
                this._trackHash = this.trackHash;
                "0" === "" + this.counterType && (this.sendTitle = -1 === g.arrayIndexOf(this.countersNoTitle, "" + this.counterId))
            },
            setTrackHash: function (a) {
                this._trackHash = a
            },
            sendHit: function (a) {
                this._hitExt({
                    url: a.url,
                    title: a.title,
                    referrer: a.referrer,
                    userParams: a.userParams,
                    modes: {
                        ar: !0,
                        saveRef: !0
                    },
                    callback: a.callback,
                    ctx: a.ctx
                })
            },
            sendPrerenderHit: function (a) {
                this._hitExt({
                    url: a.url,
                    title: a.title,
                    referrer: a.referrer,
                    modes: {
                        ar: !0,
                        pq: !0
                    }
                })
            },
            sendAjaxHit: function (a) {
                this._hitExt({
                    url: a.url,
                    title: a.title,
                    referrer: a.referrer,
                    modes: a.modes
                })
            },
            sendParams: function (a, b, c) {
                this._hitExt({
                    url: B().href,
                    title: "",
                    referrer: "",
                    userParams: a,
                    modes: {
                        ar: !0,
                        pa: !0,
                        onlyData: !0
                    },
                    callback: b,
                    ctx: c
                })
            },
            sendGoal: function (a, b) {
                if (!/[\/&=?#]/.test(a)) {
                    var c = a ? "goal://" + B().hostname + "/" + encodeURIComponent(a) : B().href,
                        e = l.getDocumentTitle(),
                        d = a ? B().href : f.referrer;
                    this._hitExt({
                        url: c,
                        title: e,
                        referrer: d,
                        userParams: b.userParams,
                        modes: {
                            ar: !0
                        },
                        callback: b.callback,
                        ctx: b.ctx
                    })
                }
            },
            sendClickLink: function (a) {
                this._hitExt({
                    url: a.url,
                    title: a.title,
                    referrer: B().href,
                    modes: a.modes
                })
            },
            sendExtLink: function (a) {
                this._hitExt({
                    url: a.url,
                    title: a.title || "",
                    referrer: B().href,
                    userParams: a.userParams,
                    modes: {
                        ar: !0,
                        ln: !0,
                        ut: ia
                    },
                    callback: a.callback,
                    ctx: a.ctx
                })
            },
            sendFileUpload: function (a) {
                this._hitExt({
                    url: a.url,
                    title: a.title || "",
                    referrer: B().href,
                    userParams: a.userParams,
                    modes: {
                        ar: !0,
                        ln: !0,
                        dl: !0
                    },
                    callback: a.callback,
                    ctx: a.ctx
                })
            },
            sendNotBounce: function (a, b) {
                this._hitExt({
                    url: B().href,
                    title: "",
                    referrer: "",
                    modes: {
                        cl: a,
                        ar: !0,
                        nb: !0,
                        onlyData: !0
                    },
                    callback: b.callback,
                    ctx: b.ctx
                })
            },
            _hitExt: function (a) {
                function b(a, b) {
                    b && (k[a] = b)
                }
                var c = a.modes || {},
                    e = a.browserInfo || {};
                if ("MetrikaPlayer" != h.name) {
                    var d = "undefined" != typeof a.referrer ? a.referrer : la,
                        f = a.url,
                        k = {};
                    c.ar && !c.onlyData && (d = this._prepareHitUrl(d), f = this._prepareHitUrl(a.url));
                    b("page-ref", g.trim(d, ma));
                    b("page-url", g.trim(f, ma)); -1 != B().hostname.search(/(?:^|\.)(?:ya|yandex|narod|narod2)\.(?:\w+|com\.\w+)$/) ? b("ut", ia) : "undefined" !=
                        typeof c.ut && b("ut", g.trim(c.ut, ob));
                    if (a.userParams)
                        if (f = g.toJSON(a.userParams), this.trimParams && f.length > pb) var l = !0;
                        else b("site-info", f);
                    c.saveRef && (la = d);
                    g.mixin(e, this._getTechInfo(a.title, c, this.counterId, a.ts, a.tz, this._trackHash, this.hitId, this.webvisor, this.counter));
                    this.send(k, e, function () {
                        l && (new ea({
                            protocol: this.protocol,
                            counterType: this.counterType,
                            counterId: this.counterId,
                            hitId: this.hitId,
                            trackHash: this.trackHash,
                            webvisor: this.webvisor,
                            counterNum: this.counterNum,
                            counter: this.counter
                        })).sendParams(a.userParams);
                        g.isFunction(a.callback) && a.callback.apply(a.ctx, arguments)
                    }, this)
                }
            },
            _prepareHitUrl: function (a) {
                var b = B(),
                    c = b.host,
                    b = b.href,
                    e;
                if (!g.isString(a)) return b;
                if (-1 != a.search(/^\w+:\/\//)) return a;
                e = a.charAt(0);
                if ("?" == e) return e = b.search(/\?/), -1 == e ? b + a : b.substr(0, e) + a;
                if ("#" == e) return e = b.search(/#/), -1 == e ? b + a : b.substr(0, e) + a;
                if ("/" == e) {
                    if (e = b.search(c), -1 != e) return b.substr(0, e + c.length) + a
                } else return c = b.split("/"), c[c.length - 1] = a, c.join("/");
                return a
            },
            _getTechInfo: function (a, b, c, e, d, f, k, v, x) {
                function p(a,
                    b) {
                    a && b && (m[a] = b)
                }

                function y(a) {
                    b[a] && p(a, "1")
                }
                b = b || {};
                var m = {};
                e = e || O.getTimestamp();
                d = d || O.getTimezone();
                p("j", w.getJavaEnabled() ? "1" : "");
                T && p("s", T.width + "x" + T.height + "x" + (T.colorDepth || T.pixelDepth));
                h.devicePixelRatio && p("sk", h.devicePixelRatio);
                w.isIframe() && p("ifr", "1");
                nb.is() && p("adb", "1");
                p("f", w.getFlashVersion());
                p("l", w.getSilverlightVersion());
                p("fpr", w.getFingerPrint());
                p("cn", this.counterNum);
                if (!b.pa) {
                    var t = l.getViewportSize();
                    p("w", t[0] + "x" + t[1])
                }
                p("z", d);
                p("i", e);
                p("et", Math.round((new Date).getTime() /
                    1E3));
                p("en", l.getDocumentCharset());
                p("v", V);
                p("c", I.cookieEnabled ? "1" : "");
                p("jv", w.getJScriptVersion());
                p("la", w.getLanguage());
                p("ntf", w.getNotificationPermission());
                f && p("wh", "1");
                d = "ar ln dl ad nb pa pq".split(" ");
                for (e = 0; e < d.length; e++) y(d[e]);
                d = ["va", "vt", "sn", "sa", "he"];
                b.nb && d.push("cl");
                for (e = 0; e < d.length; e++) f = d[e], p(f, b[f]);
                c = new da({
                    counterId: c
                });
                c.isEnabled() && (e = c.getStorageId(), (d = c.get("reqNum")) ? d++ : d = 1, c.set("reqNum", d), c.get("reqNum") == d ? (p("ls", e), p("rqn", d)) : (c.remove("reqNum"),
                    c.clearStorageId(), 1 < d && (p("ls", e), p("rqn", 0))));
                p("rn", g.random());
                p("hid", k);
                p("ds", db(x));
                x._firstPaint || (x._firstPaint = eb(), p("fp", x._firstPaint));
                if (v) {
                    h.name || (h.name = Math.round(65535 * Math.random()));
                    if (k = +h.name) 0 > k && (k *= -1), k %= 65535;
                    p("wn", k || g.fletcher(h.name));
                    try {
                        h.history && p("hl", String(h.history.length))
                    } catch (A) { }
                }
                k = "";
                this.sendTitle && (k = this._getTitle(a));
                p("t", k);
                return m
            },
            _getTitle: function (a) {
                var b = "";
                b = "undefined" == typeof a ? (b = l.getDocumentTitle()) ? g.trim(b, Wa) : "" : g.trim(a, Wa);
                return b
            }
        });
    g.array2Props = function (a) {
        for (var b = a.length, c = {}, e = c, d = 0; d < b - 1; d++) {
            var f = a[d];
            e[f] = {};
            d < b - 2 && (e = e[f])
        }
        e[f] = a[b - 1];
        return c
    };
    var P = H.inherit({
        sampling: 1,
        counterId: 26302566,
        _initComponent: function () {
            P.superclass._initComponent.apply(this, arguments);
            this._sender = new ea({
                protocol: "https:",
                counterId: this.counterId,
                retry: !1,
                counter: {}
            })
        },
        log: function () {
            this.logParams(g.array2Props(arguments))
        },
        logParams: function (a) {
            Math.random() < this.sampling && this._sender.sendHit({
                url: A.href,
                title: "",
                referrer: "",
                userParams: a
            })
        }
    }),
        qb = M.inherit({
            resource: "webvisor",
            retry: !0,
            postParams: ["wv-data"],
            sendPacket: function (a, b, c, e, d, f, k, l) {
                if (!a || !a.length) return !1;
                var w = F.encode(a, !0);
                0 == w.indexOf("AAAAAAAAADw") && h.Error && "string" == typeof Error().stack && (new P({
                    sampling: .1
                })).log("bad visor packet 5", 1);
                a = {
                    rn: g.random(),
                    "page-url": b,
                    wmode: 0,
                    "wv-type": 0,
                    "wv-hit": c,
                    "wv-part": e + 1,
                    "wv-check": g.fletcher(a),
                    "wv-data": w
                };
                return this.send(a, {
                    z: d,
                    i: f
                }, k, l)
            }
        }),
        Ua = Va.inherit({
            protocol: "",
            counterId: "",
            counterType: "",
            meta: null,
            maxBufferSize: 7500,
            flushTimeout: 3E4,
            storageKey: "visorbuff",
            active: !1,
            _initComponent: function () {
                this.storage = new da({
                    counterId: this.counterId
                });
                this._sender = new qb({
                    protocol: this.protocol,
                    counterId: this.counterId,
                    counterType: this.counterType
                });
                Ua.superclass._initComponent.apply(this, arguments)
            },
            onFlush: function (a, b, c) {
                this._sender.sendPacket(a, b.url, b.hitId, c, b.timezone, b.timestamp)
            }
        });
    g.isObject = function (a) {
        try {
            return a && null !== a && "[object Object]" == Object.prototype.toString.call(a)
        } catch (b) {
            return !1
        }
    };
    g.isNumber = function (a) {
        return isFinite(a) && !isNaN(a) && "[object Number]" == Object.prototype.toString.call(a)
    };
    g.clearTimeout = function (a) {
        return g.getNativeFunction("clearTimeout")(a)
    };
    g._urlParser = null;
    g.parseUrl = function (a) {
        if (!this._urlParser) try {
            this._urlParser = f.createElement("a")
        } catch (b) { }
        return this._urlParser ? (this._urlParser.href = a, {
            protocol: this._urlParser.protocol,
            host: this._urlParser.host,
            port: this._urlParser.port,
            hostname: this._urlParser.hostname,
            hash: this._urlParser.hash,
            search: this._urlParser.search,
            query: this._urlParser.search.replace(/^\?/, ""),
            pathname: this._urlParser.pathname || "/",
            path: (this._urlParser.pathname || "/") + this._urlParser.search,
            href: this._urlParser.href
        }) : {}
    };
    w.isIE = function () {
        return 5.8 >= w.getJScriptVersion()
    };
    var fa = {};
    fa._cookie = new X({
        onlyCurrentDomain: !0
    });
    fa.log = v(function () {
        var a = -1 < A.href.indexOf("_ym_debug=1") || h._ym_debug;
        a && this._cookie.create("debug", "1");
        h.console && console.log && (a || "1" === this._cookie.read("debug")) && console.log.apply(console, arguments)
    }, "DebugConsole.log");
    var rb = M.inherit({
        resource: "clmap",
        retry: !0,
        transports: [K],
        sendClick: function (a, b, c, e) {
            this.send({
                "page-url": a,
                "pointer-click": b
            }, {}, c, e)
        }
    }),
        sb = H.inherit({
            filter: null,
            ignoreTags: [],
            quota: 0,
            isTrackHash: !1,
            protocol: "",
            counterId: 0,
            counterType: 0,
            startTime: 0,
            MAX_LEN_PATH: 128,
            TIMEOUT_CLICK: 50,
            TIMEOUT_SAME_CLICKS: 1E3,
            DELTA_SAME_CLICKS: 2,
            tags: "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN".split(" "),
            _initComponent: function () {
                this._lastClick = null;
                this.hasQuota = !!this.quota;
                this._quota = this.quota;
                this._ignoreTags = [];
                if (this.ignoreTags)
                    for (var a = 0; a < this.ignoreTags.length; a++) this.ignoreTags[a] && g.mergeArrays(this._ignoreTags, [String(this.ignoreTags[a]).toUpperCase()]);
                this._cacheTags = {};
                for (var a = 59, b = String.fromCharCode, c = 0; c < this.tags.length; c++) this._cacheTags[this.tags[c]] = b(a), b(a), a++;
                this._sender = new rb({
                    protocol: this.protocol,
                    counterId: this.counterId,
                    counterType: this.counterType
                });
                this._start = !1;
                this.start()
            },
            destroy: function () {
                this.stop()
            },
            start: function () {
                if (!this._start) k.on(f, "click", this._handler, this);
                this._start = !0
            },
            stop: function () {
                this._start && k.un(f, "click", this._handler, this);
                this._start = !1
            },
            setTrackHash: function (a) {
                this.isTrackHash = a
            },
            _isIgnore: function (a) {
                return l.classNameExists(a, "(ym-disable-clickmap|ym-clickmap-ignore)")
            },
            _handler: function (a) {
                N = 1;
                a = {
                    el: G.getTarget(a),
                    pos: G.getPos(a),
                    button: G.getMouseButton(a),
                    time: +new Date
                };
                N = 2;
                if (this._isTrackingClick(a)) {
                    N = 3;
                    var b = l.getElementSize(a.el),
                        c = l.getElementXY(a.el),
                        b = ["rn", g.random(), "x", Math.floor(65535 * (a.pos[0] - c[0]) / (b[0] || 1)), "y", Math.floor(65535 * (a.pos[1] - c[1]) / (b[1] || 1)), "t", Math.floor((a.time - this.startTime) / 100), "p", this._getElPath(a.el)];
                    N = 4;
                    c = B().href;
                    this.isTrackHash ? g.mergeArrays(b, ["wh", "1"]) : c = c.split("#")[0];
                    N = 5;
                    this._sender.sendClick(g.trim(c, ma), b.join(":"));
                    this._lastClick = a
                }
                N = 6
            },
            _isTrackingClick: function (a) {
                if (h.ymDisabledClickmap || "MetrikaPlayer" == h.name) return !1;
                var b = a.el.tagName;
                if ((2 == a.button || 3 == a.button) && "A" !=
                    b || this.filter && !this.filter(a.el, b)) return !1;
                for (var c = 0; c < this._ignoreTags.length; c++)
                    if (this._ignoreTags[c] == b) return !1;
                for (b = a.el; b;) {
                    if (this._isIgnore(b)) return !1;
                    b = b.parentNode
                }
                if (this._lastClick) {
                    if (a.time - this._lastClick.time < this.TIMEOUT_CLICK) return !1;
                    var b = Math.abs(this._lastClick.pos[0] - a.pos[0]),
                        c = Math.abs(this._lastClick.pos[1] - a.pos[1]),
                        e = a.time - this._lastClick.time;
                    if (this._lastClick.el == a.el && b < this.DELTA_SAME_CLICKS && c < this.DELTA_SAME_CLICKS && e < this.TIMEOUT_SAME_CLICKS) return !1
                }
                if (this.hasQuota) {
                    if (!this._quota) return !1;
                    this._quota--
                }
                return !0
            },
            _getElPath: function (a) {
                for (var b = ""; a && a.parentNode && "BODY" != a.tagName && "HTML" != a.tagName;) b += this._cacheTags[a.tagName] || "*", b += l.getElementNeighborPosition(a) || "", a = a.parentNode;
                return g.trim(b, this.MAX_LEN_PATH)
            }
        }),
        Xa = H.inherit({
            _initComponent: function () {
                Xa.superclass._initComponent.apply(this, arguments);
                this._executedMsgs = {};
                k.on(h, "message", this.RemoteControl__onMessage, this)
            },
            RemoteControl__onMessage: function (a) {
                try {
                    var b = a.origin
                } catch (e) { }
                if (b && /^http:\/\/(.+\.)?webvisor\.com$/.test(b)) {
                    try {
                        var c =
                            (new Function("return " + a.data))()
                    } catch (e) { }
                    c && c.id && c.code && !this._executedMsgs[c.id] && (this._executedMsgs[c.id] = !0, (new Function("evt", c.code))(a))
                }
            }
        }),
        O = {};
    g.pad = function (a) {
        return (10 > a ? "0" : "") + a
    };
    O.getTimestamp = function () {
        for (var a = new Date, a = [a.getFullYear(), a.getMonth() + 1, a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds()], b = "", c = 0; c < a.length; c++) b += g.pad(a[c]);
        return b
    };
    O.getTimezone = function () {
        return -(new Date).getTimezoneOffset()
    };
    g.bind = function (a, b) {
        return function () {
            return a.apply(b ||
                this, arguments)
        }
    };
    var Za = H.inherit({
        counter: null,
        prefsEcommerce: null,
        dataLayerName: "dataLayer",
        _initComponent: function () {
            var a = "customArr";
            Za.superclass._initComponent.apply(this, arguments);
            this._overridePush(this.prefsEcommerce) || (g.isString(this.prefsEcommerce) && (this.dataLayerName = this.prefsEcommerce), a = this.dataLayerName, this._tryTimeout = g.bind(this._tryTimeout, this), this._tryTimeout());
            this.counter._ecommerce = a
        },
        _overridePush: function (a) {
            if (a && "function" == typeof a.push) {
                var b = this;
                b._send(a);
                var c = a.push;
                a.push = function () {
                    b._send([].slice.call(arguments, 0));
                    c.apply(this, arguments)
                };
                return !0
            }
            return !1
        },
        _tryTimeout: function () {
            this._overridePush(h[this.dataLayerName]) || g.setTimeout(this._tryTimeout, 1E3, "dlObserver")
        },
        _send: function (a) {
            for (var b = [], c = 0; c < a.length; c++) a[c].ecommerce && (b[b.length] = a[c].ecommerce);
            b.length && this.counter.params({
                __ym: {
                    ecommerce: b
                }
            })
        }
    }),
        t = E.inherit({
            id: "script",
            request: function (a, b, c, e) {
                var d = "_ymjsp" + g.random(),
                    k = f.createElement("script");
                h[d] = v(function (a) {
                    try {
                        delete h[d]
                    } catch (b) {
                        h[d] =
                            Y
                    }
                    c.call(e, !0, a);
                    k.parentNode && k.parentNode.removeChild(k)
                }, "transport.script");
                k.type = "text/javascript";
                k.src = this._buildUrl(a, g.mixin({
                    wmode: 5,
                    callback: d
                }, b));
                a = f.getElementsByTagName("head")[0];
                a.insertBefore(k, a.firstChild);
                return !0
            }
        }),
        tb = ea.inherit({
            transports: [t],
            trimParams: !0,
            sendHit: function (a) {
                var b = {};
                a.visitColor && (b.vc = a.visitColor);
                a.hasPrerender && (b.pr = 1);
                this._hitExt({
                    url: a.url,
                    title: a.title,
                    referrer: a.referrer,
                    userParams: a.userParams,
                    modes: a.modes,
                    browserInfo: b,
                    ts: a.ts,
                    tz: a.tz,
                    callback: a.callback,
                    ctx: a.ctx
                })
            }
        }),
        Q = [];
    h.Ya = h.Ya || {};
    Ya._metrika = Ya._metrika || {};
    Ya._metrika.counters = Ya._metrika.counters || {};
    Ya._metrika.hitParam = Ya._metrika.hitParam || {};
    Ya._metrika.counterNum = Ya._metrika.counterNum || 0;
    Ya._metrika.hitId = Ya._metrika.hitId || g.random();
    Ya._globalMetrikaHitId = g.random();
    var A = B(),
        va = O.getTimezone(),
        wa = O.getTimestamp(),
        I = h.navigator,
        T = h.screen,
        V = "ver672".slice(3),
        ob = 64,
        ma = w.isIE() ? 512 : 2048,
        pb = w.isIE() ? 512 : 2048,
        Wa = w.isIE() ? 100 : 400,
        ia = "noindex",
        $a = /\.(3gp|7z|aac|ac3|acs|ai|avi|ape|apk|asf|bmp|bz2|cab|cdr|crc32|css|csv|cue|divx|dmg|djvu?|doc(x|m|b)?|emf|eps|exe|flac?|flv|iso|swf|gif|t?gz|jpe?g?|js|m3u8?|m4a|mp(3|4|e?g?)|m4v|md5|mkv|mov|msi|ods|og(g|m|v)|pdf|phps|png|ppt(x|m|b)?|psd|rar|rss|rtf|sea|sfv|sit|sha1|svg|tar|tif?f|torrent|ts|txt|vob|wave?|wma|wmv|wmf|webm|xls(x|m|b)?|xpi|g?zip)$/i,
        ub = +new Date,
        ja, ga;
    h.Ya.Metrika = function (a, b, c, e) {
        var d = this;
        return v(function () {
            function t(r) {
                var n = !1;
                if (Ya._metrika.hitParam[F]) {
                    if (1 != c || Ya._metrika.counters[F]) return !1;
                    n = !0
                }
                Ya._metrika.counters[F] = d;
                Ya._metrika.hitParam[F] = 1;
                d._webvisor = !e && (z && z.webvisor || !1);
                d._directCampaign = z && z.directCampaign;
                z && z.trackHash && H(!0);
                if (!e && !n) {
                    d.replacePhones();
                    var u = new X({
                        counterId: a
                    }),
                        D = u.read("visorc");
                    "b" != D && "w" != D && (D = "");
                    if (!u.isEnabled() || ha("opera mini")) D = "b";
                    ja = +new Date;
                    var n = new tb({
                        protocol: "https:",
                        counterType: c,
                        counterId: a,
                        trackHash: Z,
                        hitId: L,
                        webvisor: d._webvisor,
                        counter: d,
                        counterNum: T
                    }),
                        w = {
                            ut: N,
                            he: z ? ~~z.httpError : 0,
                            ad: 1 == c && h.Ya && h.Ya.Direct,
                            saveRef: !0
                        };
                    n.sendHit({
                        url: A.href,
                        title: l.getDocumentTitle(),
                        referrer: f.referrer,
                        userParams: b,
                        modes: w,
                        visitColor: D,
                        hasPrerender: r,
                        ts: wa,
                        tz: va,
                        callback: function (c) {
                            fa.log("PageView. Counter " + a + ". URL: " + A.href + ". Referrer: " + f.referrer, ". Params: ", b);
                            ga || (ga = +new Date);
                            c = c || {};
                            var e = c.webvisor || {};
                            if (O) {
                                var n = +e.recp;
                                if (!isFinite(n) || 0 > n || 1 < n) D = "w";
                                D ||
                                    (D = L % 1E4 / 1E4 < n ? "w" : "b");
                                u.create("visorc", D, 30);
                                "w" == D ? (O.start(), n = e.arch_type, (e = e.urls) && n && "none" != n && O.uploadPages(e, n)) : O.stop()
                            }
                            c = c.mp2;
                            u.erase("mp2_substs");
                            if (c) {
                                b: if ((e = c.conditions) && e.length)
                                    for (n = 0; n < e.length; n++) {
                                        var r;
                                        r = e[n];
                                        if ("ref" == r.type) r = fb(r);
                                        else if ("adv" == r.type) {
                                            var l = r,
                                                m = Ya._metrika.counter._directCampaign,
                                                p = l.ServiceNamePattern,
                                                w = l.RefererPattern;
                                            r = m ? l.direct_orders : l.direct_camp;
                                            var y = f.referrer,
                                                t = A.search,
                                                t = t && t.replace(/^\?/, ""),
                                                U = {};
                                            if (t)
                                                for (var t = t.split("&"), v = 0; v <
                                                    t.length; v++) {
                                                    var q = t[v].split("=");
                                                    U[ca(q[0])] = ca(q[1])
                                                }
                                            for (var t = gb(A.search, A.hash), v = {}, q = ["source", "medium", "campaign", "term", "content"], x = 0; x < q.length; x++) U["utm_" + q[x]] && (v[q[x]] = U["utm_" + q[x]]);
                                            x = m ? "direct.yandex.ru" : t && t.service || v.source;
                                            q = !1;
                                            if (!q && p && p.length)
                                                for (var z = 0; z < p.length; z++)
                                                    if ((new RegExp(p[z], "i")).test(x)) {
                                                        q = !0;
                                                        break
                                                    }
                                            if (!q && w && w.length)
                                                for (p = 0; p < w.length; p++)
                                                    if ((new RegExp(w[p], "i")).test(y)) {
                                                        q = !0;
                                                        break
                                                    } !q && l.google_adwords && U.gclid && (q = !0);
                                            if (q && r && r.length && (q = !1, l = m ||
                                                    t && t.campaign || v && v.campaign))
                                                for (m = 0; m < r.length; m++)
                                                    if (r[m] == l) {
                                                        q = !0;
                                                        break
                                                    }
                                            r = q
                                        } else r = !1;
                                        if (r) {
                                            e[n].track_id && u.create("mp2_track", e[n].track_id, 43200);
                                            break b
                                        }
                                    }
                                e = u.read("mp2_track"); c = c.substs && c.substs[e]; e && c ? (u.create("mp2_substs", g.toJSON(c)), c = Ia(c), d.params("__ym", c ? "mp_trackid" : "mp_trackid_bad", e)) : Ja()
                            } else Ja();
                            k.on(h, "load", d.replacePhones, d);
                            d._inited = !0
                        }
                    })
                }
                E();
                z && (z.enableAll ? (q(!0), p(!0), m()) : (z.clickmap && p(z.clickmap), z.trackLinks && q(z.trackLinks), z.accurateTrackBounce && m(z.accurateTrackBounce)),
                    (z.ecommerce || z.useDataLayer) && new Za({
                        counter: d,
                        prefsEcommerce: z.ecommerce
                    }), z.triggerEvent && G.dispatchCustomEvent("yacounter" + a + "inited"));
                d._webvisor && (O = new ib("https:", a, c, z, L, d))
            }

            function q(a) {
                var b = {};
                switch (typeof a) {
                    case "string":
                        b.on = !0;
                        break;
                    case "object":
                        b.on = !0;
                        break;
                    case "boolean":
                        b.on = a;
                        break;
                    default:
                        return
                }
                d._trackLinks = b
            }

            function E() {
                q(!1);
                k.on(f, "click", function (a) {
                    d._trackLinks && d._trackLinks.on && x(a)
                })
            }

            function x(a) {
                var b = ab(a);
                if (b) {
                    a = !1;
                    var c = "" + b.href,
                        d = c ? c.split(/\?/)[0] : "",
                        e = function (a) {
                            var d = Ga(b.innerHTML.replace(/<\/?[^>]+>/gi, ""));
                            S.sendClickLink({
                                url: c,
                                title: c == d ? "" : d,
                                modes: a
                            })
                        };
                    if ($a.test(d) || $a.test(c) || qa(c, P) || qa(d, P)) a = !0;
                    var f = l.classNameExists(b, "ym-disable-tracklink"),
                        d = l.classNameExists(b, "ym-external-link");
                    f || (f = {
                        ln: !0,
                        dl: a
                    }, d ? e(f) : (d = b.hostname || g.parseUrl(b.href).hostname || "", bb(B().hostname, d) ? a && (f.ln = !1, e(f)) : c && -1 != c.search(/^ *(data|javascript):/i) || (f.ut = ia, e(f))))
                }
            }

            function p(b) {
                "undefined" == typeof b && (b = !0);
                !0 === b && (b = {});
                d._clickmap && d._clickmap.destroy();
                b && (d._clickmap = new sb({
                    filter: b.filter,
                    ignoreTags: b.ignoreTags,
                    quota: b.quota,
                    isTrackHash: b.isTrackHash,
                    protocol: "https:",
                    counterId: a,
                    counterType: c,
                    startTime: ub
                }))
            }

            function y(a, b) {
                function c() {
                    if (!z) {
                        y && g.clearTimeout(y);
                        var d;
                        d = t ? v : v + +new Date - x;
                        d = b - d;
                        0 > d && (d = 0);
                        y = g.setTimeout(function () {
                            z = !0;
                            m(!1);
                            a()
                        }, d, "trackUserTime")
                    }
                }

                function d() {
                    t = p = q = !0;
                    v += +new Date - x;
                    x = +new Date;
                    c()
                }

                function e() {
                    p || q || (v = 0);
                    x = +new Date;
                    p = q = !0;
                    t = !1;
                    c()
                }

                function l() {
                    q || (p = !0, t = !1, q = !0, c())
                }

                function m(a) {
                    for (var b = 0; b < A.length; b +=
                        3)
                        if (a) k.on(A[b], A[b + 1], A[b + 2]);
                        else k.un(A[b], A[b + 1], A[b + 2])
                }
                var p = !1,
                    q = !1,
                    t = !0,
                    v = 0,
                    x = +new Date,
                    y = null,
                    z = !1;
                if (w.isIE()) g.setTimeout(a, b, "trackUserTime");
                else {
                    var A = [h, "blur", d, h, "focus", e, f, "click", l, f, "mousemove", l, f, "keydown", l, f, "scroll", l];
                    m(!0);
                    c()
                }
            }

            function m(b) {
                "number" != typeof b && (b = 15E3);
                if (!d._isAccurateTrackBounce) {
                    d._isAccurateTrackBounce = !0;
                    var c = new da({
                        counterId: a
                    }),
                        e = c.get("lastHit");
                    c.set("lastHit", +new Date);
                    ((c = c.get("lastHit")) && (!e || e < c - 18E5) || !cb(f.referrer, B().href) || .1 > Math.random()) &&
                    y(function () {
                        d.notBounce()
                    }, b)
                }
            }

            function I(a) {
                function b() {
                    var a = B().hash.split("#")[1];
                    if ("undefined" == typeof a) return !1;
                    var c = a.indexOf("?");
                    0 < c && (a = a.substring(0, c));
                    return a
                }
                var c = b();
                (function U() {
                    var d = b();
                    d !== c && (a(), c = d);
                    V = g.setTimeout(U, 200, "trackHash")
                })()
            }

            function H(a) {
                if (!1 === a) Z && ("onhashchange" in h ? k.un(h, "hashchange", K) : g.clearTimeout(V), Z = !1);
                else if (a = K, !Z) {
                    if ("onhashchange" in h) k.on(h, "hashchange", a);
                    else I(a);
                    Z = !0
                }
                S.setTrackHash(Z);
                d._trackHash = Z
            }

            function K() {
                R = la = Q;
                var a = {
                    ut: N,
                    ad: 1 == c && h.Ya && h.Ya.Direct,
                    wh: !0,
                    saveRef: !0
                };
                S.sendAjaxHit({
                    url: B().href,
                    title: l.getDocumentTitle(),
                    referrer: R,
                    modes: a
                });
                Q = B().href
            }

            function J(a, b, c) {
                a = ba.parseValidate(a, b);
                b = [];
                a && (b.push(a), c = c || {}, g.isFunction(c.callback) && (b.push(c.callback), c.ctx && b.push(c.ctx)));
                b.length && d.params.apply(d, b)
            }
            var F, N = "",
                Q = la = A.href,
                R = "",
                z;
            Ya._metrika.counter || (Ya._metrika.counter = d);
            "object" == typeof a && (z = a, e = a.defer, N = a.ut, c = a.type, b = a.params, a = a.id);
            a = a || 0;
            /^\d+$/.test(a) || (a = 0);
            c = c || 0;
            F = a + ":" + c;
            if (Ya._metrika.counters[F]) return Ya._metrika.counters[F];
            var L = Ya._metrika.hitId;
            Ya._metrika.counterNum++;
            var T = Ya._metrika.counterNum;
            M.initCookie();
            M.retransmit();
            var S = new ea({
                protocol: "https:",
                counterType: c,
                counterId: a,
                hitId: L,
                counter: d,
                counterNum: T
            }),
                O;
            d.replacePhones = v(function () {
                try {
                    var b = (new X({
                        counterId: a
                    })).read("mp2_substs");
                    if (b) {
                        var c = (new Function("return " + b))();
                        c && Ia(c, !0)
                    }
                } catch (d) { }
            }, "counter.replacePhones");
            d.reachGoal = v(function (b, c, d, e) {
                2 <= arguments.length && "function" === typeof c && (e = d, d = c, c = Y);
                fa.log("Reach goal. Counter: " + a + ". Goal id: " +
                    b + ". Params: ", c);
                S.sendGoal(b, {
                    userParams: c,
                    callback: d,
                    ctx: e
                });
                return !0
            }, "counter.reachGoal");
            d.trackLinks = v(function (a) {
                q(a)
            }, "counter.trackLinks");
            d.hit = v(function (b, c, d, e, f, h) {
                b && (g.isObject(c) && (d = c.referer, e = c.params, f = c.callback, h = c.ctx, c = c.title), fa.log("PageView. Counter " + a + ". URL: " + b + ". Referrer: " + d + ". Params: ", e), S.sendHit({
                    url: b,
                    title: c,
                    referrer: d,
                    userParams: e,
                    callback: f,
                    ctx: h
                }))
            }, "counter.hit");
            d.params = v(function (b) {
                var c = arguments.length,
                    d = c,
                    e, f, h = [].slice.call(arguments, 0);
                b &&
                    (1 < arguments.length && (g.isFunction(arguments[c - 1]) ? (e = arguments[c - 1], d = c - 1) : g.isFunction(arguments[c - 2]) && (e = arguments[c - 2], f = arguments[c - 1], d = c - 2), h = [].slice.call(h, 0, d), 1 < h.length && (h = [g.array2Props(h)])), fa.log("User params. Counter " + a + ". Params: ", h[0]), S.sendParams(h[0], e, f))
            }, "counter.params");
            d.file = v(function (a, b) {
                a && (b = b || {}, S.sendFileUpload({
                    url: a,
                    title: b.title,
                    userParams: b.params,
                    callback: b.callback,
                    ctx: b.ctx
                }))
            }, "counter.file");
            d.extLink = v(function (a, b) {
                a && (b = b || {}, S.sendExtLink({
                    url: a,
                    title: b.title,
                    userParams: b.params,
                    callback: b.callback,
                    ctx: b.ctx
                }))
            }, "counter.extLink");
            d.notBounce = v(function (a) {
                var b = 0;
                a = a || {};
                ja && ga && (b = ga - ja);
                S.sendNotBounce(b, {
                    callback: a.callback,
                    ctx: a.ctx
                })
            }, "counter.notBounce");
            var P = [];
            d.addFileExtension = function (a) {
                "string" == typeof a ? P.push(a) : P = P.concat(a)
            };
            d.clickmap = function (a) {
                p(a)
            };
            d.accurateTrackBounce = function (a) {
                m(a)
            };
            var V = null,
                Z = !1;
            d.trackHash = function (a) {
                H(a)
            };
            g.arrayEvery = function (a, b, c) {
                for (var d = 0; d < a.length; d++)
                    if (!b.call(c, a[d], d, a)) return !1;
                return !0
            };
            var ba = {
                requiredEcommerceFields: ["currency", "goods"],
                parseValidate: function (a, b) {
                    var c = this.validate(a, b);
                    if (!c.isValid) return console && console.log(c.message), !1;
                    c = {};
                    c[a] = {};
                    b.currency && (c.currencyCode = b.currency);
                    b.goods && (c[a].products = b.goods);
                    for (var d in b) b.hasOwnProperty(d) && -1 === g.arrayIndexOf(this.requiredEcommerceFields, d) && (c[a].actionField || (c[a].actionField = {}), c[a].actionField[d] = b[d]);
                    return {
                        __ym: {
                            ecommerce: [c]
                        }
                    }
                },
                validate: function (a, b) {
                    var c = !1,
                        d = "";
                    if (g.isObject(b)) switch (a) {
                        case "detail":
                        case "add":
                        case "remove":
                            g.isArray(b.goods) &&
                                b.goods.length ? (c = g.arrayEvery(b.goods, function (a) {
                                    return g.isObject(a) && (g.isString(a.id) || g.isNumber(a.id) || g.isString(a.name) || g.isString(a.name))
                                })) || (d = "All items in 'goods' should be objects and contain 'id' or 'name' field") : d = "Ecommerce data should contain 'goods' non-empty array";
                            break;
                        case "purchase":
                            g.isNumber(b.id) || g.isString(b.id) ? c = !0 : d = "Purchase object should contain string or number 'id' field"
                    } else d = "Ecommerce data should be an object";
                    return {
                        isValid: c,
                        message: d
                    }
                }
            };
            d.ecommerceDetail =
                v(function (a, b) {
                    J("detail", a, b)
                }, "ecommerce.detail");
            d.ecommerceAdd = v(function (a, b) {
                J("add", a, b)
            }, "ecommerce.add");
            d.ecommerceRemove = v(function (a, b) {
                J("remove", a, b)
            }, "ecommerce.remove");
            d.ecommercePurchase = v(function (a, b) {
                J("purchase", a, b)
            }, "ecommerce.purchase");
            d.userParams = v(function (a, b, c) {
                g.isObject(a) && d.params({
                    __ymu: a
                }, b || function () { }, c)
            }, "uparams");
            d.id = v(function (a, b, c) {
                (g.isString(a) || g.isNumber(a)) && d.params({
                    __ym: {
                        user_id: a
                    }
                }, b || function () { }, c)
            }, "id");
            d.enableAll = function () {
                q(!0);
                p(!0);
                m()
            };
            d.uploadPage = function () { };
            d._performanceTiming = Ha;
            if (a)
                if ("prerender" == f.webkitVisibilityState) {
                    S.sendPrerenderHit({
                        url: A.href,
                        title: l.getDocumentTitle(),
                        referrer: f.referrer
                    });
                    var aa = function () {
                        "prerender" != f.webkitVisibilityState && (k.un(f, "webkitvisibilitychange", aa), t(!0))
                    };
                    k.on(f, "webkitvisibilitychange", aa)
                } else t(!1)
        }, "init")()
    };
    if (h.performance && "function" == typeof performance.getEntries) {
        E = {
            2343947156: 1,
            1996539654: 1,
            2065498185: 1,
            823651274: 1,
            12282461: 1,
            1555719328: 1,
            1417229093: 1,
            138396985: 1
        };
        J = performance.getEntries();
        L = {};
        for (t = 0; t < J.length; t++) {
            var K = J[t],
                ba = K.name.replace(/^https?:\/\//, "").split("?")[0],
                vb = g.fnv32a(ba);
            E[vb] && !L[ba] && 0 < K.duration && (L[ba] = {
                dns: Math.round(K.domainLookupEnd - K.domainLookupStart),
                tcp: Math.round(K.connectEnd - K.connectStart),
                duration: Math.round(K.duration),
                response: Math.round(K.responseEnd - K.requestStart),
                pages: A.href
            })
        } (new P({
            sampling: .001
        })).logParams({
            timings8: L
        })
    }
    h.Ya._metrika.remoteCtrlInited || (h.Ya._metrika.remoteCtrlInited = !0, new Xa);
    h.Ya.Metrika.counters =
        function () {
            var a = [];
            g.forEachKey(h.Ya._metrika.counters, function (b, c) {
                var e = b.split(":");
                a.push({
                    id: +e[0],
                    type: +e[1],
                    accurateTrackBounce: c._isAccurateTrackBounce,
                    clickmap: c._clickmap && c._clickmap._start,
                    oldCode: !!h.ya_cid,
                    trackHash: !!c._trackHash,
                    trackLinks: c._trackLinks && c._trackLinks.on,
                    webvisor: !!c._webvisor
                })
            });
            return a
        };
    h.ya_cid && new Ya.Metrika(h.ya_cid, h.ya_params, h.ya_class);
    h.ya_cid && !h.ya_hit && (h.ya_hit = function (a, b) {
        Ya._metrika.counter && Ya._metrika.counter.reachGoal(a, b)
    });
    t = h.yandex_metrika_callback;
    E = h.yandex_metrika_callbacks;
    "function" == typeof t && t();
    if ("object" == typeof E)
        for (t = 0; t < E.length; t++)
            if (J = E[t]) E[t] = null, J();
    Ka("yandex_metrika_callback");
    Ka("yandex_metrika_callbacks");
    E = ["link", "click", "scroll", "res"];
    for (t = 0; t < E.length; t++)
        if (J = E[t] + "map", -1 != A.href.search("ym_playback=" + J)) {
            La("https://old.metrika.yandex.ru/js/" + J + "/_loader.js");
            break
        }
    h.Ya.Metrika.informer = function (a) {
        var b = !!Ya.Metrika._informer;
        Ya.Metrika._informer = a;
        b || La("https://informer.yandex.ru/metrika/informer.js")
    };
    (function () {
        var a =
            function () {
                var a = f.getElementsByTagName("body")[0],
                    b = f.createElement("iframe");
                b.src = "http://awaps.yandex.ru/0/2153/0.htm?ad=165746&pl=93829&rnd=" + g.random();
                b.setAttribute("style", "position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden;visibility:hidden");
                a.appendChild(b);
                g.setTimeout(function () {
                    b.parentNode && b.parentNode.removeChild(b)
                }, 1E4, "ad")
            },
            b = function () {
                h.removeEventListener("load", b, !1);
                a()
            },
            c = h.performance;
        g.random(200) || Ya._metrika.isAd || (Ya._metrika.isAd = !0, "http:" == A.protocol &&
            "object" == typeof c && h.addEventListener && (c.timing && c.timing.loadEventStart ? a() : h.addEventListener("load", b, !1)))
    })()
})(this, this.document);