CGFversion = "2.0.1";
CGFdate = " (20190311)";
console.log("WebCGF - Library for Computer Graphics @ FEUP (WebGL) - v" + CGFversion + CGFdate);
var Detector = {
    canvas: !!window.CanvasRenderingContext2D,
    webgl: function() {
        try {
            var t = document.createElement("canvas");
            return !!(window.WebGLRenderingContext && t.getContext("webgl2"))
        } catch (t) {
            return false
        }
    }(),
    workers: !!window.Worker,
    fileapi: window.File && window.FileReader && window.FileList && window.Blob,
    getWebGLErrorMessage: function() {
        var t = document.createElement("div");
        t.id = "webgl-error-message";
        t.style.fontFamily = "monospace";
        t.style.fontSize = "13px";
        t.style.fontWeight = "normal";
        t.style.textAlign = "center";
        t.style.background = "#fff";
        t.style.color = "#000";
        t.style.padding = "1.5em";
        t.style.width = "400px";
        t.style.margin = "5em auto 0";
        if (!this.webgl) {
            t.innerHTML = window.WebGLRenderingContext ? ['Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br />', 'Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'].join("\n") : ['Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br/>', 'Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'].join("\n")
        }
        return t
    },
    addGetWebGLMessage: function(t) {
        var e, i, n;
        t = t || {};
        e = t.parent !== undefined ? t.parent : document.body;
        i = t.id !== undefined ? t.id : "oldie";
        n = Detector.getWebGLErrorMessage();
        n.id = i;
        e.appendChild(n)
    }
};
if (typeof module === "object") {
    module.exports = Detector
}(function() {
    "use strict";
    var t = {};
    if (typeof exports === "undefined") {
        if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
            t.exports = {};
            define(function() {
                return t.exports
            })
        } else {
            t.exports = window
        }
    } else {
        t.exports = exports
    }(function(t) {
        if (!e) {
            var e = 1e-6
        }
        if (!i) {
            var i = typeof Float32Array !== "undefined" ? Float32Array : Array
        }
        var n = {};
        n.setMatrixArrayType = function(t) {
            i = t
        };
        if (typeof t !== "undefined") {
            t.glMatrix = n
        }
        var r = {};
        r.create = function() {
            var t = new i(2);
            t[0] = 0;
            t[1] = 0;
            return t
        };
        r.clone = function(t) {
            var e = new i(2);
            e[0] = t[0];
            e[1] = t[1];
            return e
        };
        r.fromValues = function(t, e) {
            var n = new i(2);
            n[0] = t;
            n[1] = e;
            return n
        };
        r.copy = function(t, e) {
            t[0] = e[0];
            t[1] = e[1];
            return t
        };
        r.set = function(t, e, i) {
            t[0] = e;
            t[1] = i;
            return t
        };
        r.add = function(t, e, i) {
            t[0] = e[0] + i[0];
            t[1] = e[1] + i[1];
            return t
        };
        r.subtract = function(t, e, i) {
            t[0] = e[0] - i[0];
            t[1] = e[1] - i[1];
            return t
        };
        r.sub = r.subtract;
        r.multiply = function(t, e, i) {
            t[0] = e[0] * i[0];
            t[1] = e[1] * i[1];
            return t
        };
        r.mul = r.multiply;
        r.divide = function(t, e, i) {
            t[0] = e[0] / i[0];
            t[1] = e[1] / i[1];
            return t
        };
        r.div = r.divide;
        r.min = function(t, e, i) {
            t[0] = Math.min(e[0], i[0]);
            t[1] = Math.min(e[1], i[1]);
            return t
        };
        r.max = function(t, e, i) {
            t[0] = Math.max(e[0], i[0]);
            t[1] = Math.max(e[1], i[1]);
            return t
        };
        r.scale = function(t, e, i) {
            t[0] = e[0] * i;
            t[1] = e[1] * i;
            return t
        };
        r.distance = function(t, e) {
            var i = e[0] - t[0],
                n = e[1] - t[1];
            return Math.sqrt(i * i + n * n)
        };
        r.dist = r.distance;
        r.squaredDistance = function(t, e) {
            var i = e[0] - t[0],
                n = e[1] - t[1];
            return i * i + n * n
        };
        r.sqrDist = r.squaredDistance;
        r.length = function(t) {
            var e = t[0],
                i = t[1];
            return Math.sqrt(e * e + i * i)
        };
        r.len = r.length;
        r.squaredLength = function(t) {
            var e = t[0],
                i = t[1];
            return e * e + i * i
        };
        r.sqrLen = r.squaredLength;
        r.negate = function(t, e) {
            t[0] = -e[0];
            t[1] = -e[1];
            return t
        };
        r.normalize = function(t, e) {
            var i = e[0],
                n = e[1];
            var r = i * i + n * n;
            if (r > 0) {
                r = 1 / Math.sqrt(r);
                t[0] = e[0] * r;
                t[1] = e[1] * r
            }
            return t
        };
        r.dot = function(t, e) {
            return t[0] * e[0] + t[1] * e[1]
        };
        r.cross = function(t, e, i) {
            var n = e[0] * i[1] - e[1] * i[0];
            t[0] = t[1] = 0;
            t[2] = n;
            return t
        };
        r.lerp = function(t, e, i, n) {
            var r = e[0],
                o = e[1];
            t[0] = r + n * (i[0] - r);
            t[1] = o + n * (i[1] - o);
            return t
        };
        r.transformMat2 = function(t, e, i) {
            var n = e[0],
                r = e[1];
            t[0] = i[0] * n + i[2] * r;
            t[1] = i[1] * n + i[3] * r;
            return t
        };
        r.transformMat2d = function(t, e, i) {
            var n = e[0],
                r = e[1];
            t[0] = i[0] * n + i[2] * r + i[4];
            t[1] = i[1] * n + i[3] * r + i[5];
            return t
        };
        r.transformMat3 = function(t, e, i) {
            var n = e[0],
                r = e[1];
            t[0] = i[0] * n + i[3] * r + i[6];
            t[1] = i[1] * n + i[4] * r + i[7];
            return t
        };
        r.transformMat4 = function(t, e, i) {
            var n = e[0],
                r = e[1];
            t[0] = i[0] * n + i[4] * r + i[12];
            t[1] = i[1] * n + i[5] * r + i[13];
            return t
        };
        r.forEach = function() {
            var t = r.create();
            return function(e, i, n, r, o, s) {
                var a, c;
                if (!i) {
                    i = 2
                }
                if (!n) {
                    n = 0
                }
                if (r) {
                    c = Math.min(r * i + n, e.length)
                } else {
                    c = e.length
                }
                for (a = n; a < c; a += i) {
                    t[0] = e[a];
                    t[1] = e[a + 1];
                    o(t, t, s);
                    e[a] = t[0];
                    e[a + 1] = t[1]
                }
                return e
            }
        }();
        r.str = function(t) {
            return "vec2(" + t[0] + ", " + t[1] + ")"
        };
        if (typeof t !== "undefined") {
            t.vec2 = r
        }
        var o = {};
        o.create = function() {
            var t = new i(3);
            t[0] = 0;
            t[1] = 0;
            t[2] = 0;
            return t
        };
        o.clone = function(t) {
            var e = new i(3);
            e[0] = t[0];
            e[1] = t[1];
            e[2] = t[2];
            return e
        };
        o.fromValues = function(t, e, n) {
            var r = new i(3);
            r[0] = t;
            r[1] = e;
            r[2] = n;
            return r
        };
        o.copy = function(t, e) {
            t[0] = e[0];
            t[1] = e[1];
            t[2] = e[2];
            return t
        };
        o.set = function(t, e, i, n) {
            t[0] = e;
            t[1] = i;
            t[2] = n;
            return t
        };
        o.add = function(t, e, i) {
            t[0] = e[0] + i[0];
            t[1] = e[1] + i[1];
            t[2] = e[2] + i[2];
            return t
        };
        o.subtract = function(t, e, i) {
            t[0] = e[0] - i[0];
            t[1] = e[1] - i[1];
            t[2] = e[2] - i[2];
            return t
        };
        o.sub = o.subtract;
        o.multiply = function(t, e, i) {
            t[0] = e[0] * i[0];
            t[1] = e[1] * i[1];
            t[2] = e[2] * i[2];
            return t
        };
        o.mul = o.multiply;
        o.divide = function(t, e, i) {
            t[0] = e[0] / i[0];
            t[1] = e[1] / i[1];
            t[2] = e[2] / i[2];
            return t
        };
        o.div = o.divide;
        o.min = function(t, e, i) {
            t[0] = Math.min(e[0], i[0]);
            t[1] = Math.min(e[1], i[1]);
            t[2] = Math.min(e[2], i[2]);
            return t
        };
        o.max = function(t, e, i) {
            t[0] = Math.max(e[0], i[0]);
            t[1] = Math.max(e[1], i[1]);
            t[2] = Math.max(e[2], i[2]);
            return t
        };
        o.scale = function(t, e, i) {
            t[0] = e[0] * i;
            t[1] = e[1] * i;
            t[2] = e[2] * i;
            return t
        };
        o.distance = function(t, e) {
            var i = e[0] - t[0],
                n = e[1] - t[1],
                r = e[2] - t[2];
            return Math.sqrt(i * i + n * n + r * r)
        };
        o.dist = o.distance;
        o.squaredDistance = function(t, e) {
            var i = e[0] - t[0],
                n = e[1] - t[1],
                r = e[2] - t[2];
            return i * i + n * n + r * r
        };
        o.sqrDist = o.squaredDistance;
        o.length = function(t) {
            var e = t[0],
                i = t[1],
                n = t[2];
            return Math.sqrt(e * e + i * i + n * n)
        };
        o.len = o.length;
        o.squaredLength = function(t) {
            var e = t[0],
                i = t[1],
                n = t[2];
            return e * e + i * i + n * n
        };
        o.sqrLen = o.squaredLength;
        o.negate = function(t, e) {
            t[0] = -e[0];
            t[1] = -e[1];
            t[2] = -e[2];
            return t
        };
        o.normalize = function(t, e) {
            var i = e[0],
                n = e[1],
                r = e[2];
            var o = i * i + n * n + r * r;
            if (o > 0) {
                o = 1 / Math.sqrt(o);
                t[0] = e[0] * o;
                t[1] = e[1] * o;
                t[2] = e[2] * o
            }
            return t
        };
        o.dot = function(t, e) {
            return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
        };
        o.cross = function(t, e, i) {
            var n = e[0],
                r = e[1],
                o = e[2],
                s = i[0],
                a = i[1],
                c = i[2];
            t[0] = r * c - o * a;
            t[1] = o * s - n * c;
            t[2] = n * a - r * s;
            return t
        };
        o.lerp = function(t, e, i, n) {
            var r = e[0],
                o = e[1],
                s = e[2];
            t[0] = r + n * (i[0] - r);
            t[1] = o + n * (i[1] - o);
            t[2] = s + n * (i[2] - s);
            return t
        };
        o.transformMat4 = function(t, e, i) {
            var n = e[0],
                r = e[1],
                o = e[2];
            t[0] = i[0] * n + i[4] * r + i[8] * o + i[12];
            t[1] = i[1] * n + i[5] * r + i[9] * o + i[13];
            t[2] = i[2] * n + i[6] * r + i[10] * o + i[14];
            return t
        };
        o.transformQuat = function(t, e, i) {
            var n = e[0],
                r = e[1],
                o = e[2],
                s = i[0],
                a = i[1],
                c = i[2],
                u = i[3],
                l = u * n + a * o - c * r,
                h = u * r + c * n - s * o,
                f = u * o + s * r - a * n,
                d = -s * n - a * r - c * o;
            t[0] = l * u + d * -s + h * -c - f * -a;
            t[1] = h * u + d * -a + f * -s - l * -c;
            t[2] = f * u + d * -c + l * -a - h * -s;
            return t
        };
        o.forEach = function() {
            var t = o.create();
            return function(e, i, n, r, o, s) {
                var a, c;
                if (!i) {
                    i = 3
                }
                if (!n) {
                    n = 0
                }
                if (r) {
                    c = Math.min(r * i + n, e.length)
                } else {
                    c = e.length
                }
                for (a = n; a < c; a += i) {
                    t[0] = e[a];
                    t[1] = e[a + 1];
                    t[2] = e[a + 2];
                    o(t, t, s);
                    e[a] = t[0];
                    e[a + 1] = t[1];
                    e[a + 2] = t[2]
                }
                return e
            }
        }();
        o.str = function(t) {
            return "vec3(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
        };
        if (typeof t !== "undefined") {
            t.vec3 = o
        }
        var s = {};
        s.create = function() {
            var t = new i(4);
            t[0] = 0;
            t[1] = 0;
            t[2] = 0;
            t[3] = 0;
            return t
        };
        s.clone = function(t) {
            var e = new i(4);
            e[0] = t[0];
            e[1] = t[1];
            e[2] = t[2];
            e[3] = t[3];
            return e
        };
        s.fromValues = function(t, e, n, r) {
            var o = new i(4);
            o[0] = t;
            o[1] = e;
            o[2] = n;
            o[3] = r;
            return o
        };
        s.copy = function(t, e) {
            t[0] = e[0];
            t[1] = e[1];
            t[2] = e[2];
            t[3] = e[3];
            return t
        };
        s.set = function(t, e, i, n, r) {
            t[0] = e;
            t[1] = i;
            t[2] = n;
            t[3] = r;
            return t
        };
        s.add = function(t, e, i) {
            t[0] = e[0] + i[0];
            t[1] = e[1] + i[1];
            t[2] = e[2] + i[2];
            t[3] = e[3] + i[3];
            return t
        };
        s.subtract = function(t, e, i) {
            t[0] = e[0] - i[0];
            t[1] = e[1] - i[1];
            t[2] = e[2] - i[2];
            t[3] = e[3] - i[3];
            return t
        };
        s.sub = s.subtract;
        s.multiply = function(t, e, i) {
            t[0] = e[0] * i[0];
            t[1] = e[1] * i[1];
            t[2] = e[2] * i[2];
            t[3] = e[3] * i[3];
            return t
        };
        s.mul = s.multiply;
        s.divide = function(t, e, i) {
            t[0] = e[0] / i[0];
            t[1] = e[1] / i[1];
            t[2] = e[2] / i[2];
            t[3] = e[3] / i[3];
            return t
        };
        s.div = s.divide;
        s.min = function(t, e, i) {
            t[0] = Math.min(e[0], i[0]);
            t[1] = Math.min(e[1], i[1]);
            t[2] = Math.min(e[2], i[2]);
            t[3] = Math.min(e[3], i[3]);
            return t
        };
        s.max = function(t, e, i) {
            t[0] = Math.max(e[0], i[0]);
            t[1] = Math.max(e[1], i[1]);
            t[2] = Math.max(e[2], i[2]);
            t[3] = Math.max(e[3], i[3]);
            return t
        };
        s.scale = function(t, e, i) {
            t[0] = e[0] * i;
            t[1] = e[1] * i;
            t[2] = e[2] * i;
            t[3] = e[3] * i;
            return t
        };
        s.distance = function(t, e) {
            var i = e[0] - t[0],
                n = e[1] - t[1],
                r = e[2] - t[2],
                o = e[3] - t[3];
            return Math.sqrt(i * i + n * n + r * r + o * o)
        };
        s.dist = s.distance;
        s.squaredDistance = function(t, e) {
            var i = e[0] - t[0],
                n = e[1] - t[1],
                r = e[2] - t[2],
                o = e[3] - t[3];
            return i * i + n * n + r * r + o * o
        };
        s.sqrDist = s.squaredDistance;
        s.length = function(t) {
            var e = t[0],
                i = t[1],
                n = t[2],
                r = t[3];
            return Math.sqrt(e * e + i * i + n * n + r * r)
        };
        s.len = s.length;
        s.squaredLength = function(t) {
            var e = t[0],
                i = t[1],
                n = t[2],
                r = t[3];
            return e * e + i * i + n * n + r * r
        };
        s.sqrLen = s.squaredLength;
        s.negate = function(t, e) {
            t[0] = -e[0];
            t[1] = -e[1];
            t[2] = -e[2];
            t[3] = -e[3];
            return t
        };
        s.normalize = function(t, e) {
            var i = e[0],
                n = e[1],
                r = e[2],
                o = e[3];
            var s = i * i + n * n + r * r + o * o;
            if (s > 0) {
                s = 1 / Math.sqrt(s);
                t[0] = e[0] * s;
                t[1] = e[1] * s;
                t[2] = e[2] * s;
                t[3] = e[3] * s
            }
            return t
        };
        s.dot = function(t, e) {
            return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3]
        };
        s.lerp = function(t, e, i, n) {
            var r = e[0],
                o = e[1],
                s = e[2],
                a = e[3];
            t[0] = r + n * (i[0] - r);
            t[1] = o + n * (i[1] - o);
            t[2] = s + n * (i[2] - s);
            t[3] = a + n * (i[3] - a);
            return t
        };
        s.transformMat4 = function(t, e, i) {
            var n = e[0],
                r = e[1],
                o = e[2],
                s = e[3];
            t[0] = i[0] * n + i[4] * r + i[8] * o + i[12] * s;
            t[1] = i[1] * n + i[5] * r + i[9] * o + i[13] * s;
            t[2] = i[2] * n + i[6] * r + i[10] * o + i[14] * s;
            t[3] = i[3] * n + i[7] * r + i[11] * o + i[15] * s;
            return t
        };
        s.transformQuat = function(t, e, i) {
            var n = e[0],
                r = e[1],
                o = e[2],
                s = i[0],
                a = i[1],
                c = i[2],
                u = i[3],
                l = u * n + a * o - c * r,
                h = u * r + c * n - s * o,
                f = u * o + s * r - a * n,
                d = -s * n - a * r - c * o;
            t[0] = l * u + d * -s + h * -c - f * -a;
            t[1] = h * u + d * -a + f * -s - l * -c;
            t[2] = f * u + d * -c + l * -a - h * -s;
            return t
        };
        s.forEach = function() {
            var t = s.create();
            return function(e, i, n, r, o, s) {
                var a, c;
                if (!i) {
                    i = 4
                }
                if (!n) {
                    n = 0
                }
                if (r) {
                    c = Math.min(r * i + n, e.length)
                } else {
                    c = e.length
                }
                for (a = n; a < c; a += i) {
                    t[0] = e[a];
                    t[1] = e[a + 1];
                    t[2] = e[a + 2];
                    t[3] = e[a + 3];
                    o(t, t, s);
                    e[a] = t[0];
                    e[a + 1] = t[1];
                    e[a + 2] = t[2];
                    e[a + 3] = t[3]
                }
                return e
            }
        }();
        s.str = function(t) {
            return "vec4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
        };
        if (typeof t !== "undefined") {
            t.vec4 = s
        }
        var a = {};
        var c = new Float32Array([1, 0, 0, 1]);
        a.create = function() {
            var t = new i(4);
            t[0] = 1;
            t[1] = 0;
            t[2] = 0;
            t[3] = 1;
            return t
        };
        a.clone = function(t) {
            var e = new i(4);
            e[0] = t[0];
            e[1] = t[1];
            e[2] = t[2];
            e[3] = t[3];
            return e
        };
        a.copy = function(t, e) {
            t[0] = e[0];
            t[1] = e[1];
            t[2] = e[2];
            t[3] = e[3];
            return t
        };
        a.identity = function(t) {
            t[0] = 1;
            t[1] = 0;
            t[2] = 0;
            t[3] = 1;
            return t
        };
        a.transpose = function(t, e) {
            if (t === e) {
                var i = e[1];
                t[1] = e[2];
                t[2] = i
            } else {
                t[0] = e[0];
                t[1] = e[2];
                t[2] = e[1];
                t[3] = e[3]
            }
            return t
        };
        a.invert = function(t, e) {
            var i = e[0],
                n = e[1],
                r = e[2],
                o = e[3],
                s = i * o - r * n;
            if (!s) {
                return null
            }
            s = 1 / s;
            t[0] = o * s;
            t[1] = -n * s;
            t[2] = -r * s;
            t[3] = i * s;
            return t
        };
        a.adjoint = function(t, e) {
            var i = e[0];
            t[0] = e[3];
            t[1] = -e[1];
            t[2] = -e[2];
            t[3] = i;
            return t
        };
        a.determinant = function(t) {
            return t[0] * t[3] - t[2] * t[1]
        };
        a.multiply = function(t, e, i) {
            var n = e[0],
                r = e[1],
                o = e[2],
                s = e[3];
            var a = i[0],
                c = i[1],
                u = i[2],
                l = i[3];
            t[0] = n * a + r * u;
            t[1] = n * c + r * l;
            t[2] = o * a + s * u;
            t[3] = o * c + s * l;
            return t
        };
        a.mul = a.multiply;
        a.rotate = function(t, e, i) {
            var n = e[0],
                r = e[1],
                o = e[2],
                s = e[3],
                a = Math.sin(i),
                c = Math.cos(i);
            t[0] = n * c + r * a;
            t[1] = n * -a + r * c;
            t[2] = o * c + s * a;
            t[3] = o * -a + s * c;
            return t
        };
        a.scale = function(t, e, i) {
            var n = e[0],
                r = e[1],
                o = e[2],
                s = e[3],
                a = i[0],
                c = i[1];
            t[0] = n * a;
            t[1] = r * c;
            t[2] = o * a;
            t[3] = s * c;
            return t
        };
        a.str = function(t) {
            return "mat2(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
        };
        if (typeof t !== "undefined") {
            t.mat2 = a
        }
        var u = {};
        var l = new Float32Array([1, 0, 0, 1, 0, 0]);
        u.create = function() {
            var t = new i(6);
            t[0] = 1;
            t[1] = 0;
            t[2] = 0;
            t[3] = 1;
            t[4] = 0;
            t[5] = 0;
            return t
        };
        u.clone = function(t) {
            var e = new i(6);
            e[0] = t[0];
            e[1] = t[1];
            e[2] = t[2];
            e[3] = t[3];
            e[4] = t[4];
            e[5] = t[5];
            return e
        };
        u.copy = function(t, e) {
            t[0] = e[0];
            t[1] = e[1];
            t[2] = e[2];
            t[3] = e[3];
            t[4] = e[4];
            t[5] = e[5];
            return t
        };
        u.identity = function(t) {
            t[0] = 1;
            t[1] = 0;
            t[2] = 0;
            t[3] = 1;
            t[4] = 0;
            t[5] = 0;
            return t
        };
        u.invert = function(t, e) {
            var i = e[0],
                n = e[1],
                r = e[2],
                o = e[3],
                s = e[4],
                a = e[5];
            var c = i * o - n * r;
            if (!c) {
                return null
            }
            c = 1 / c;
            t[0] = o * c;
            t[1] = -n * c;
            t[2] = -r * c;
            t[3] = i * c;
            t[4] = (r * a - o * s) * c;
            t[5] = (n * s - i * a) * c;
            return t
        };
        u.determinant = function(t) {
            return t[0] * t[3] - t[1] * t[2]
        };
        u.multiply = function(t, e, i) {
            var n = e[0],
                r = e[1],
                o = e[2],
                s = e[3],
                a = e[4],
                c = e[5],
                u = i[0],
                l = i[1],
                h = i[2],
                f = i[3],
                d = i[4],
                p = i[5];
            t[0] = n * u + r * h;
            t[1] = n * l + r * f;
            t[2] = o * u + s * h;
            t[3] = o * l + s * f;
            t[4] = u * a + h * c + d;
            t[5] = l * a + f * c + p;
            return t
        };
        u.mul = u.multiply;
        u.rotate = function(t, e, i) {
            var n = e[0],
                r = e[1],
                o = e[2],
                s = e[3],
                a = e[4],
                c = e[5],
                u = Math.sin(i),
                l = Math.cos(i);
            t[0] = n * l + r * u;
            t[1] = -n * u + r * l;
            t[2] = o * l + s * u;
            t[3] = -o * u + l * s;
            t[4] = l * a + u * c;
            t[5] = l * c - u * a;
            return t
        };
        u.scale = function(t, e, i) {
            var n = i[0],
                r = i[1];
            t[0] = e[0] * n;
            t[1] = e[1] * r;
            t[2] = e[2] * n;
            t[3] = e[3] * r;
            t[4] = e[4] * n;
            t[5] = e[5] * r;
            return t
        };
        u.translate = function(t, e, i) {
            t[0] = e[0];
            t[1] = e[1];
            t[2] = e[2];
            t[3] = e[3];
            t[4] = e[4] + i[0];
            t[5] = e[5] + i[1];
            return t
        };
        u.str = function(t) {
            return "mat2d(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ")"
        };
        if (typeof t !== "undefined") {
            t.mat2d = u
        }
        var h = {};
        var f = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
        h.create = function() {
            var t = new i(9);
            t[0] = 1;
            t[1] = 0;
            t[2] = 0;
            t[3] = 0;
            t[4] = 1;
            t[5] = 0;
            t[6] = 0;
            t[7] = 0;
            t[8] = 1;
            return t
        };
        h.clone = function(t) {
            var e = new i(9);
            e[0] = t[0];
            e[1] = t[1];
            e[2] = t[2];
            e[3] = t[3];
            e[4] = t[4];
            e[5] = t[5];
            e[6] = t[6];
            e[7] = t[7];
            e[8] = t[8];
            return e
        };
        h.copy = function(t, e) {
            t[0] = e[0];
            t[1] = e[1];
            t[2] = e[2];
            t[3] = e[3];
            t[4] = e[4];
            t[5] = e[5];
            t[6] = e[6];
            t[7] = e[7];
            t[8] = e[8];
            return t
        };
        h.identity = function(t) {
            t[0] = 1;
            t[1] = 0;
            t[2] = 0;
            t[3] = 0;
            t[4] = 1;
            t[5] = 0;
            t[6] = 0;
            t[7] = 0;
            t[8] = 1;
            return t
        };
        h.transpose = function(t, e) {
            if (t === e) {
                var i = e[1],
                    n = e[2],
                    r = e[5];
                t[1] = e[3];
                t[2] = e[6];
                t[3] = i;
                t[5] = e[7];
                t[6] = n;
                t[7] = r
            } else {
                t[0] = e[0];
                t[1] = e[3];
                t[2] = e[6];
                t[3] = e[1];
                t[4] = e[4];
                t[5] = e[7];
                t[6] = e[2];
                t[7] = e[5];
                t[8] = e[8]
            }
            return t
        };
        h.invert = function(t, e) {
            var i = e[0],
                n = e[1],
                r = e[2],
                o = e[3],
                s = e[4],
                a = e[5],
                c = e[6],
                u = e[7],
                l = e[8],
                h = l * s - a * u,
                f = -l * o + a * c,
                d = u * o - s * c,
                p = i * h + n * f + r * d;
            if (!p) {
                return null
            }
            p = 1 / p;
            t[0] = h * p;
            t[1] = (-l * n + r * u) * p;
            t[2] = (a * n - r * s) * p;
            t[3] = f * p;
            t[4] = (l * i - r * c) * p;
            t[5] = (-a * i + r * o) * p;
            t[6] = d * p;
            t[7] = (-u * i + n * c) * p;
            t[8] = (s * i - n * o) * p;
            return t
        };
        h.adjoint = function(t, e) {
            var i = e[0],
                n = e[1],
                r = e[2],
                o = e[3],
                s = e[4],
                a = e[5],
                c = e[6],
                u = e[7],
                l = e[8];
            t[0] = s * l - a * u;
            t[1] = r * u - n * l;
            t[2] = n * a - r * s;
            t[3] = a * c - o * l;
            t[4] = i * l - r * c;
            t[5] = r * o - i * a;
            t[6] = o * u - s * c;
            t[7] = n * c - i * u;
            t[8] = i * s - n * o;
            return t
        };
        h.determinant = function(t) {
            var e = t[0],
                i = t[1],
                n = t[2],
                r = t[3],
                o = t[4],
                s = t[5],
                a = t[6],
                c = t[7],
                u = t[8];
            return e * (u * o - s * c) + i * (-u * r + s * a) + n * (c * r - o * a)
        };
        h.multiply = function(t, e, i) {
            var n = e[0],
                r = e[1],
                o = e[2],
                s = e[3],
                a = e[4],
                c = e[5],
                u = e[6],
                l = e[7],
                h = e[8],
                f = i[0],
                d = i[1],
                p = i[2],
                v = i[3],
                m = i[4],
                _ = i[5],
                g = i[6],
                b = i[7],
                y = i[8];
            t[0] = f * n + d * s + p * u;
            t[1] = f * r + d * a + p * l;
            t[2] = f * o + d * c + p * h;
            t[3] = v * n + m * s + _ * u;
            t[4] = v * r + m * a + _ * l;
            t[5] = v * o + m * c + _ * h;
            t[6] = g * n + b * s + y * u;
            t[7] = g * r + b * a + y * l;
            t[8] = g * o + b * c + y * h;
            return t
        };
        h.mul = h.multiply;
        h.translate = function(t, e, i) {
            var n = e[0],
                r = e[1],
                o = e[2],
                s = e[3],
                a = e[4],
                c = e[5],
                u = e[6],
                l = e[7],
                h = e[8],
                f = i[0],
                d = i[1];
            t[0] = n;
            t[1] = r;
            t[2] = o;
            t[3] = s;
            t[4] = a;
            t[5] = c;
            t[6] = f * n + d * s + u;
            t[7] = f * r + d * a + l;
            t[8] = f * o + d * c + h;
            return t
        };
        h.rotate = function(t, e, i) {
            var n = e[0],
                r = e[1],
                o = e[2],
                s = e[3],
                a = e[4],
                c = e[5],
                u = e[6],
                l = e[7],
                h = e[8],
                f = Math.sin(i),
                d = Math.cos(i);
            t[0] = d * n + f * s;
            t[1] = d * r + f * a;
            t[2] = d * o + f * c;
            t[3] = d * s - f * n;
            t[4] = d * a - f * r;
            t[5] = d * c - f * o;
            t[6] = u;
            t[7] = l;
            t[8] = h;
            return t
        };
        h.scale = function(t, e, i) {
            var n = i[0],
                r = i[2];
            t[0] = n * e[0];
            t[1] = n * e[1];
            t[2] = n * e[2];
            t[3] = r * e[3];
            t[4] = r * e[4];
            t[5] = r * e[5];
            t[6] = e[6];
            t[7] = e[7];
            t[8] = e[8];
            return t
        };
        h.fromMat2d = function(t, e) {
            t[0] = e[0];
            t[1] = e[1];
            t[2] = 0;
            t[3] = e[2];
            t[4] = e[3];
            t[5] = 0;
            t[6] = e[4];
            t[7] = e[5];
            t[8] = 1;
            return t
        };
        h.fromQuat = function(t, e) {
            var i = e[0],
                n = e[1],
                r = e[2],
                o = e[3],
                s = i + i,
                a = n + n,
                c = r + r,
                u = i * s,
                l = i * a,
                h = i * c,
                f = n * a,
                d = n * c,
                p = r * c,
                v = o * s,
                m = o * a,
                _ = o * c;
            t[0] = 1 - (f + p);
            t[1] = l + _;
            t[2] = h - m;
            t[3] = l - _;
            t[4] = 1 - (u + p);
            t[5] = d + v;
            t[6] = h + m;
            t[7] = d - v;
            t[8] = 1 - (u + f);
            return t
        };
        h.str = function(t) {
            return "mat3(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ")"
        };
        if (typeof t !== "undefined") {
            t.mat3 = h
        }
        var d = {};
        var p = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
        d.create = function() {
            var t = new i(16);
            t[0] = 1;
            t[1] = 0;
            t[2] = 0;
            t[3] = 0;
            t[4] = 0;
            t[5] = 1;
            t[6] = 0;
            t[7] = 0;
            t[8] = 0;
            t[9] = 0;
            t[10] = 1;
            t[11] = 0;
            t[12] = 0;
            t[13] = 0;
            t[14] = 0;
            t[15] = 1;
            return t
        };
        d.clone = function(t) {
            var e = new i(16);
            e[0] = t[0];
            e[1] = t[1];
            e[2] = t[2];
            e[3] = t[3];
            e[4] = t[4];
            e[5] = t[5];
            e[6] = t[6];
            e[7] = t[7];
            e[8] = t[8];
            e[9] = t[9];
            e[10] = t[10];
            e[11] = t[11];
            e[12] = t[12];
            e[13] = t[13];
            e[14] = t[14];
            e[15] = t[15];
            return e
        };
        d.copy = function(t, e) {
            t[0] = e[0];
            t[1] = e[1];
            t[2] = e[2];
            t[3] = e[3];
            t[4] = e[4];
            t[5] = e[5];
            t[6] = e[6];
            t[7] = e[7];
            t[8] = e[8];
            t[9] = e[9];
            t[10] = e[10];
            t[11] = e[11];
            t[12] = e[12];
            t[13] = e[13];
            t[14] = e[14];
            t[15] = e[15];
            return t
        };
        d.identity = function(t) {
            t[0] = 1;
            t[1] = 0;
            t[2] = 0;
            t[3] = 0;
            t[4] = 0;
            t[5] = 1;
            t[6] = 0;
            t[7] = 0;
            t[8] = 0;
            t[9] = 0;
            t[10] = 1;
            t[11] = 0;
            t[12] = 0;
            t[13] = 0;
            t[14] = 0;
            t[15] = 1;
            return t
        };
        d.transpose = function(t, e) {
            if (t === e) {
                var i = e[1],
                    n = e[2],
                    r = e[3],
                    o = e[6],
                    s = e[7],
                    a = e[11];
                t[1] = e[4];
                t[2] = e[8];
                t[3] = e[12];
                t[4] = i;
                t[6] = e[9];
                t[7] = e[13];
                t[8] = n;
                t[9] = o;
                t[11] = e[14];
                t[12] = r;
                t[13] = s;
                t[14] = a
            } else {
                t[0] = e[0];
                t[1] = e[4];
                t[2] = e[8];
                t[3] = e[12];
                t[4] = e[1];
                t[5] = e[5];
                t[6] = e[9];
                t[7] = e[13];
                t[8] = e[2];
                t[9] = e[6];
                t[10] = e[10];
                t[11] = e[14];
                t[12] = e[3];
                t[13] = e[7];
                t[14] = e[11];
                t[15] = e[15]
            }
            return t
        };
        d.invert = function(t, e) {
            var i = e[0],
                n = e[1],
                r = e[2],
                o = e[3],
                s = e[4],
                a = e[5],
                c = e[6],
                u = e[7],
                l = e[8],
                h = e[9],
                f = e[10],
                d = e[11],
                p = e[12],
                v = e[13],
                m = e[14],
                _ = e[15],
                g = i * a - n * s,
                b = i * c - r * s,
                y = i * u - o * s,
                x = n * c - r * a,
                w = n * u - o * a,
                E = r * u - o * c,
                A = l * v - h * p,
                C = l * m - f * p,
                M = l * _ - d * p,
                S = h * m - f * v,
                T = h * _ - d * v,
                R = f * _ - d * m,
                k = g * R - b * T + y * S + x * M - w * C + E * A;
            if (!k) {
                return null
            }
            k = 1 / k;
            t[0] = (a * R - c * T + u * S) * k;
            t[1] = (r * T - n * R - o * S) * k;
            t[2] = (v * E - m * w + _ * x) * k;
            t[3] = (f * w - h * E - d * x) * k;
            t[4] = (c * M - s * R - u * C) * k;
            t[5] = (i * R - r * M + o * C) * k;
            t[6] = (m * y - p * E - _ * b) * k;
            t[7] = (l * E - f * y + d * b) * k;
            t[8] = (s * T - a * M + u * A) * k;
            t[9] = (n * M - i * T - o * A) * k;
            t[10] = (p * w - v * y + _ * g) * k;
            t[11] = (h * y - l * w - d * g) * k;
            t[12] = (a * C - s * S - c * A) * k;
            t[13] = (i * S - n * C + r * A) * k;
            t[14] = (v * b - p * x - m * g) * k;
            t[15] = (l * x - h * b + f * g) * k;
            return t
        };
        d.adjoint = function(t, e) {
            var i = e[0],
                n = e[1],
                r = e[2],
                o = e[3],
                s = e[4],
                a = e[5],
                c = e[6],
                u = e[7],
                l = e[8],
                h = e[9],
                f = e[10],
                d = e[11],
                p = e[12],
                v = e[13],
                m = e[14],
                _ = e[15];
            t[0] = a * (f * _ - d * m) - h * (c * _ - u * m) + v * (c * d - u * f);
            t[1] = -(n * (f * _ - d * m) - h * (r * _ - o * m) + v * (r * d - o * f));
            t[2] = n * (c * _ - u * m) - a * (r * _ - o * m) + v * (r * u - o * c);
            t[3] = -(n * (c * d - u * f) - a * (r * d - o * f) + h * (r * u - o * c));
            t[4] = -(s * (f * _ - d * m) - l * (c * _ - u * m) + p * (c * d - u * f));
            t[5] = i * (f * _ - d * m) - l * (r * _ - o * m) + p * (r * d - o * f);
            t[6] = -(i * (c * _ - u * m) - s * (r * _ - o * m) + p * (r * u - o * c));
            t[7] = i * (c * d - u * f) - s * (r * d - o * f) + l * (r * u - o * c);
            t[8] = s * (h * _ - d * v) - l * (a * _ - u * v) + p * (a * d - u * h);
            t[9] = -(i * (h * _ - d * v) - l * (n * _ - o * v) + p * (n * d - o * h));
            t[10] = i * (a * _ - u * v) - s * (n * _ - o * v) + p * (n * u - o * a);
            t[11] = -(i * (a * d - u * h) - s * (n * d - o * h) + l * (n * u - o * a));
            t[12] = -(s * (h * m - f * v) - l * (a * m - c * v) + p * (a * f - c * h));
            t[13] = i * (h * m - f * v) - l * (n * m - r * v) + p * (n * f - r * h);
            t[14] = -(i * (a * m - c * v) - s * (n * m - r * v) + p * (n * c - r * a));
            t[15] = i * (a * f - c * h) - s * (n * f - r * h) + l * (n * c - r * a);
            return t
        };
        d.determinant = function(t) {
            var e = t[0],
                i = t[1],
                n = t[2],
                r = t[3],
                o = t[4],
                s = t[5],
                a = t[6],
                c = t[7],
                u = t[8],
                l = t[9],
                h = t[10],
                f = t[11],
                d = t[12],
                p = t[13],
                v = t[14],
                m = t[15],
                _ = e * s - i * o,
                g = e * a - n * o,
                b = e * c - r * o,
                y = i * a - n * s,
                x = i * c - r * s,
                w = n * c - r * a,
                E = u * p - l * d,
                A = u * v - h * d,
                C = u * m - f * d,
                M = l * v - h * p,
                S = l * m - f * p,
                T = h * m - f * v;
            return _ * T - g * S + b * M + y * C - x * A + w * E
        };
        d.multiply = function(t, e, i) {
            var n = e[0],
                r = e[1],
                o = e[2],
                s = e[3],
                a = e[4],
                c = e[5],
                u = e[6],
                l = e[7],
                h = e[8],
                f = e[9],
                d = e[10],
                p = e[11],
                v = e[12],
                m = e[13],
                _ = e[14],
                g = e[15];
            var b = i[0],
                y = i[1],
                x = i[2],
                w = i[3];
            t[0] = b * n + y * a + x * h + w * v;
            t[1] = b * r + y * c + x * f + w * m;
            t[2] = b * o + y * u + x * d + w * _;
            t[3] = b * s + y * l + x * p + w * g;
            b = i[4];
            y = i[5];
            x = i[6];
            w = i[7];
            t[4] = b * n + y * a + x * h + w * v;
            t[5] = b * r + y * c + x * f + w * m;
            t[6] = b * o + y * u + x * d + w * _;
            t[7] = b * s + y * l + x * p + w * g;
            b = i[8];
            y = i[9];
            x = i[10];
            w = i[11];
            t[8] = b * n + y * a + x * h + w * v;
            t[9] = b * r + y * c + x * f + w * m;
            t[10] = b * o + y * u + x * d + w * _;
            t[11] = b * s + y * l + x * p + w * g;
            b = i[12];
            y = i[13];
            x = i[14];
            w = i[15];
            t[12] = b * n + y * a + x * h + w * v;
            t[13] = b * r + y * c + x * f + w * m;
            t[14] = b * o + y * u + x * d + w * _;
            t[15] = b * s + y * l + x * p + w * g;
            return t
        };
        d.mul = d.multiply;
        d.translate = function(t, e, i) {
            var n = i[0],
                r = i[1],
                o = i[2],
                s, a, c, u, l, h, f, d, p, v, m, _;
            if (e === t) {
                t[12] = e[0] * n + e[4] * r + e[8] * o + e[12];
                t[13] = e[1] * n + e[5] * r + e[9] * o + e[13];
                t[14] = e[2] * n + e[6] * r + e[10] * o + e[14];
                t[15] = e[3] * n + e[7] * r + e[11] * o + e[15]
            } else {
                s = e[0];
                a = e[1];
                c = e[2];
                u = e[3];
                l = e[4];
                h = e[5];
                f = e[6];
                d = e[7];
                p = e[8];
                v = e[9];
                m = e[10];
                _ = e[11];
                t[0] = s;
                t[1] = a;
                t[2] = c;
                t[3] = u;
                t[4] = l;
                t[5] = h;
                t[6] = f;
                t[7] = d;
                t[8] = p;
                t[9] = v;
                t[10] = m;
                t[11] = _;
                t[12] = s * n + l * r + p * o + e[12];
                t[13] = a * n + h * r + v * o + e[13];
                t[14] = c * n + f * r + m * o + e[14];
                t[15] = u * n + d * r + _ * o + e[15]
            }
            return t
        };
        d.scale = function(t, e, i) {
            var n = i[0],
                r = i[1],
                o = i[2];
            t[0] = e[0] * n;
            t[1] = e[1] * n;
            t[2] = e[2] * n;
            t[3] = e[3] * n;
            t[4] = e[4] * r;
            t[5] = e[5] * r;
            t[6] = e[6] * r;
            t[7] = e[7] * r;
            t[8] = e[8] * o;
            t[9] = e[9] * o;
            t[10] = e[10] * o;
            t[11] = e[11] * o;
            t[12] = e[12];
            t[13] = e[13];
            t[14] = e[14];
            t[15] = e[15];
            return t
        };
        d.rotate = function(t, i, n, r) {
            var o = r[0],
                s = r[1],
                a = r[2],
                c = Math.sqrt(o * o + s * s + a * a),
                u, l, h, f, d, p, v, m, _, g, b, y, x, w, E, A, C, M, S, T, R, k, F, L;
            if (Math.abs(c) < e) {
                return null
            }
            c = 1 / c;
            o *= c;
            s *= c;
            a *= c;
            u = Math.sin(n);
            l = Math.cos(n);
            h = 1 - l;
            f = i[0];
            d = i[1];
            p = i[2];
            v = i[3];
            m = i[4];
            _ = i[5];
            g = i[6];
            b = i[7];
            y = i[8];
            x = i[9];
            w = i[10];
            E = i[11];
            A = o * o * h + l;
            C = s * o * h + a * u;
            M = a * o * h - s * u;
            S = o * s * h - a * u;
            T = s * s * h + l;
            R = a * s * h + o * u;
            k = o * a * h + s * u;
            F = s * a * h - o * u;
            L = a * a * h + l;
            t[0] = f * A + m * C + y * M;
            t[1] = d * A + _ * C + x * M;
            t[2] = p * A + g * C + w * M;
            t[3] = v * A + b * C + E * M;
            t[4] = f * S + m * T + y * R;
            t[5] = d * S + _ * T + x * R;
            t[6] = p * S + g * T + w * R;
            t[7] = v * S + b * T + E * R;
            t[8] = f * k + m * F + y * L;
            t[9] = d * k + _ * F + x * L;
            t[10] = p * k + g * F + w * L;
            t[11] = v * k + b * F + E * L;
            if (i !== t) {
                t[12] = i[12];
                t[13] = i[13];
                t[14] = i[14];
                t[15] = i[15]
            }
            return t
        };
        d.rotateX = function(t, e, i) {
            var n = Math.sin(i),
                r = Math.cos(i),
                o = e[4],
                s = e[5],
                a = e[6],
                c = e[7],
                u = e[8],
                l = e[9],
                h = e[10],
                f = e[11];
            if (e !== t) {
                t[0] = e[0];
                t[1] = e[1];
                t[2] = e[2];
                t[3] = e[3];
                t[12] = e[12];
                t[13] = e[13];
                t[14] = e[14];
                t[15] = e[15]
            }
            t[4] = o * r + u * n;
            t[5] = s * r + l * n;
            t[6] = a * r + h * n;
            t[7] = c * r + f * n;
            t[8] = u * r - o * n;
            t[9] = l * r - s * n;
            t[10] = h * r - a * n;
            t[11] = f * r - c * n;
            return t
        };
        d.rotateY = function(t, e, i) {
            var n = Math.sin(i),
                r = Math.cos(i),
                o = e[0],
                s = e[1],
                a = e[2],
                c = e[3],
                u = e[8],
                l = e[9],
                h = e[10],
                f = e[11];
            if (e !== t) {
                t[4] = e[4];
                t[5] = e[5];
                t[6] = e[6];
                t[7] = e[7];
                t[12] = e[12];
                t[13] = e[13];
                t[14] = e[14];
                t[15] = e[15]
            }
            t[0] = o * r - u * n;
            t[1] = s * r - l * n;
            t[2] = a * r - h * n;
            t[3] = c * r - f * n;
            t[8] = o * n + u * r;
            t[9] = s * n + l * r;
            t[10] = a * n + h * r;
            t[11] = c * n + f * r;
            return t
        };
        d.rotateZ = function(t, e, i) {
            var n = Math.sin(i),
                r = Math.cos(i),
                o = e[0],
                s = e[1],
                a = e[2],
                c = e[3],
                u = e[4],
                l = e[5],
                h = e[6],
                f = e[7];
            if (e !== t) {
                t[8] = e[8];
                t[9] = e[9];
                t[10] = e[10];
                t[11] = e[11];
                t[12] = e[12];
                t[13] = e[13];
                t[14] = e[14];
                t[15] = e[15]
            }
            t[0] = o * r + u * n;
            t[1] = s * r + l * n;
            t[2] = a * r + h * n;
            t[3] = c * r + f * n;
            t[4] = u * r - o * n;
            t[5] = l * r - s * n;
            t[6] = h * r - a * n;
            t[7] = f * r - c * n;
            return t
        };
        d.fromRotationTranslation = function(t, e, i) {
            var n = e[0],
                r = e[1],
                o = e[2],
                s = e[3],
                a = n + n,
                c = r + r,
                u = o + o,
                l = n * a,
                h = n * c,
                f = n * u,
                d = r * c,
                p = r * u,
                v = o * u,
                m = s * a,
                _ = s * c,
                g = s * u;
            t[0] = 1 - (d + v);
            t[1] = h + g;
            t[2] = f - _;
            t[3] = 0;
            t[4] = h - g;
            t[5] = 1 - (l + v);
            t[6] = p + m;
            t[7] = 0;
            t[8] = f + _;
            t[9] = p - m;
            t[10] = 1 - (l + d);
            t[11] = 0;
            t[12] = i[0];
            t[13] = i[1];
            t[14] = i[2];
            t[15] = 1;
            return t
        };
        d.fromQuat = function(t, e) {
            var i = e[0],
                n = e[1],
                r = e[2],
                o = e[3],
                s = i + i,
                a = n + n,
                c = r + r,
                u = i * s,
                l = i * a,
                h = i * c,
                f = n * a,
                d = n * c,
                p = r * c,
                v = o * s,
                m = o * a,
                _ = o * c;
            t[0] = 1 - (f + p);
            t[1] = l + _;
            t[2] = h - m;
            t[3] = 0;
            t[4] = l - _;
            t[5] = 1 - (u + p);
            t[6] = d + v;
            t[7] = 0;
            t[8] = h + m;
            t[9] = d - v;
            t[10] = 1 - (u + f);
            t[11] = 0;
            t[12] = 0;
            t[13] = 0;
            t[14] = 0;
            t[15] = 1;
            return t
        };
        d.frustum = function(t, e, i, n, r, o, s) {
            var a = 1 / (i - e),
                c = 1 / (r - n),
                u = 1 / (o - s);
            t[0] = o * 2 * a;
            t[1] = 0;
            t[2] = 0;
            t[3] = 0;
            t[4] = 0;
            t[5] = o * 2 * c;
            t[6] = 0;
            t[7] = 0;
            t[8] = (i + e) * a;
            t[9] = (r + n) * c;
            t[10] = (s + o) * u;
            t[11] = -1;
            t[12] = 0;
            t[13] = 0;
            t[14] = s * o * 2 * u;
            t[15] = 0;
            return t
        };
        d.perspective = function(t, e, i, n, r) {
            var o = 1 / Math.tan(e / 2),
                s = 1 / (n - r);
            t[0] = o / i;
            t[1] = 0;
            t[2] = 0;
            t[3] = 0;
            t[4] = 0;
            t[5] = o;
            t[6] = 0;
            t[7] = 0;
            t[8] = 0;
            t[9] = 0;
            t[10] = (r + n) * s;
            t[11] = -1;
            t[12] = 0;
            t[13] = 0;
            t[14] = 2 * r * n * s;
            t[15] = 0;
            return t
        };
        d.ortho = function(t, e, i, n, r, o, s) {
            var a = 1 / (e - i),
                c = 1 / (n - r),
                u = 1 / (o - s);
            t[0] = -2 * a;
            t[1] = 0;
            t[2] = 0;
            t[3] = 0;
            t[4] = 0;
            t[5] = -2 * c;
            t[6] = 0;
            t[7] = 0;
            t[8] = 0;
            t[9] = 0;
            t[10] = 2 * u;
            t[11] = 0;
            t[12] = (e + i) * a;
            t[13] = (r + n) * c;
            t[14] = (s + o) * u;
            t[15] = 1;
            return t
        };
        d.lookAt = function(t, i, n, r) {
            var o, s, a, c, u, l, h, f, p, v, m = i[0],
                _ = i[1],
                g = i[2],
                b = r[0],
                y = r[1],
                x = r[2],
                w = n[0],
                E = n[1],
                A = n[2];
            if (Math.abs(m - w) < e && Math.abs(_ - E) < e && Math.abs(g - A) < e) {
                return d.identity(t)
            }
            h = m - w;
            f = _ - E;
            p = g - A;
            v = 1 / Math.sqrt(h * h + f * f + p * p);
            h *= v;
            f *= v;
            p *= v;
            o = y * p - x * f;
            s = x * h - b * p;
            a = b * f - y * h;
            v = Math.sqrt(o * o + s * s + a * a);
            if (!v) {
                o = 0;
                s = 0;
                a = 0
            } else {
                v = 1 / v;
                o *= v;
                s *= v;
                a *= v
            }
            c = f * a - p * s;
            u = p * o - h * a;
            l = h * s - f * o;
            v = Math.sqrt(c * c + u * u + l * l);
            if (!v) {
                c = 0;
                u = 0;
                l = 0
            } else {
                v = 1 / v;
                c *= v;
                u *= v;
                l *= v
            }
            t[0] = o;
            t[1] = c;
            t[2] = h;
            t[3] = 0;
            t[4] = s;
            t[5] = u;
            t[6] = f;
            t[7] = 0;
            t[8] = a;
            t[9] = l;
            t[10] = p;
            t[11] = 0;
            t[12] = -(o * m + s * _ + a * g);
            t[13] = -(c * m + u * _ + l * g);
            t[14] = -(h * m + f * _ + p * g);
            t[15] = 1;
            return t
        };
        d.str = function(t) {
            return "mat4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ", " + t[9] + ", " + t[10] + ", " + t[11] + ", " + t[12] + ", " + t[13] + ", " + t[14] + ", " + t[15] + ")"
        };
        if (typeof t !== "undefined") {
            t.mat4 = d
        }
        var v = {};
        var m = new Float32Array([0, 0, 0, 1]);
        v.create = function() {
            var t = new i(4);
            t[0] = 0;
            t[1] = 0;
            t[2] = 0;
            t[3] = 1;
            return t
        };
        v.clone = s.clone;
        v.fromValues = s.fromValues;
        v.copy = s.copy;
        v.set = s.set;
        v.identity = function(t) {
            t[0] = 0;
            t[1] = 0;
            t[2] = 0;
            t[3] = 1;
            return t
        };
        v.setAxisAngle = function(t, e, i) {
            i = i * .5;
            var n = Math.sin(i);
            t[0] = n * e[0];
            t[1] = n * e[1];
            t[2] = n * e[2];
            t[3] = Math.cos(i);
            return t
        };
        v.add = s.add;
        v.multiply = function(t, e, i) {
            var n = e[0],
                r = e[1],
                o = e[2],
                s = e[3],
                a = i[0],
                c = i[1],
                u = i[2],
                l = i[3];
            t[0] = n * l + s * a + r * u - o * c;
            t[1] = r * l + s * c + o * a - n * u;
            t[2] = o * l + s * u + n * c - r * a;
            t[3] = s * l - n * a - r * c - o * u;
            return t
        };
        v.mul = v.multiply;
        v.scale = s.scale;
        v.rotateX = function(t, e, i) {
            i *= .5;
            var n = e[0],
                r = e[1],
                o = e[2],
                s = e[3],
                a = Math.sin(i),
                c = Math.cos(i);
            t[0] = n * c + s * a;
            t[1] = r * c + o * a;
            t[2] = o * c - r * a;
            t[3] = s * c - n * a;
            return t
        };
        v.rotateY = function(t, e, i) {
            i *= .5;
            var n = e[0],
                r = e[1],
                o = e[2],
                s = e[3],
                a = Math.sin(i),
                c = Math.cos(i);
            t[0] = n * c - o * a;
            t[1] = r * c + s * a;
            t[2] = o * c + n * a;
            t[3] = s * c - r * a;
            return t
        };
        v.rotateZ = function(t, e, i) {
            i *= .5;
            var n = e[0],
                r = e[1],
                o = e[2],
                s = e[3],
                a = Math.sin(i),
                c = Math.cos(i);
            t[0] = n * c + r * a;
            t[1] = r * c - n * a;
            t[2] = o * c + s * a;
            t[3] = s * c - o * a;
            return t
        };
        v.calculateW = function(t, e) {
            var i = e[0],
                n = e[1],
                r = e[2];
            t[0] = i;
            t[1] = n;
            t[2] = r;
            t[3] = -Math.sqrt(Math.abs(1 - i * i - n * n - r * r));
            return t
        };
        v.dot = s.dot;
        v.lerp = s.lerp;
        v.slerp = function(t, e, i, n) {
            var r = e[0],
                o = e[1],
                s = e[2],
                a = e[3],
                c = i[0],
                u = i[1],
                l = i[2],
                h = i[3];
            var f = r * c + o * u + s * l + a * h,
                d, p, v, m;
            if (Math.abs(f) >= 1) {
                if (t !== e) {
                    t[0] = r;
                    t[1] = o;
                    t[2] = s;
                    t[3] = a
                }
                return t
            }
            d = Math.acos(f);
            p = Math.sqrt(1 - f * f);
            if (Math.abs(p) < .001) {
                t[0] = r * .5 + c * .5;
                t[1] = o * .5 + u * .5;
                t[2] = s * .5 + l * .5;
                t[3] = a * .5 + h * .5;
                return t
            }
            v = Math.sin((1 - n) * d) / p;
            m = Math.sin(n * d) / p;
            t[0] = r * v + c * m;
            t[1] = o * v + u * m;
            t[2] = s * v + l * m;
            t[3] = a * v + h * m;
            return t
        };
        v.invert = function(t, e) {
            var i = e[0],
                n = e[1],
                r = e[2],
                o = e[3],
                s = i * i + n * n + r * r + o * o,
                a = s ? 1 / s : 0;
            t[0] = -i * a;
            t[1] = -n * a;
            t[2] = -r * a;
            t[3] = o * a;
            return t
        };
        v.conjugate = function(t, e) {
            t[0] = -e[0];
            t[1] = -e[1];
            t[2] = -e[2];
            t[3] = e[3];
            return t
        };
        v.length = s.length;
        v.len = v.length;
        v.squaredLength = s.squaredLength;
        v.sqrLen = v.squaredLength;
        v.normalize = s.normalize;
        v.fromMat3 = function() {
            var t = [1, 2, 0];
            return function(e, i) {
                var n = i[0] + i[4] + i[8];
                var r;
                if (n > 0) {
                    r = Math.sqrt(n + 1);
                    e[3] = .5 * r;
                    r = .5 / r;
                    e[0] = (i[7] - i[5]) * r;
                    e[1] = (i[2] - i[6]) * r;
                    e[2] = (i[3] - i[1]) * r
                } else {
                    var o = 0;
                    if (i[4] > i[0]) o = 1;
                    if (i[8] > i[o * 3 + o]) o = 2;
                    var s = t[o];
                    var a = t[s];
                    r = Math.sqrt(i[o * 3 + o] - i[s * 3 + s] - i[a * 3 + a] + 1);
                    e[o] = .5 * r;
                    r = .5 / r;
                    e[3] = (i[a * 3 + s] - i[s * 3 + a]) * r;
                    e[s] = (i[s * 3 + o] + i[o * 3 + s]) * r;
                    e[a] = (i[a * 3 + o] + i[o * 3 + a]) * r
                }
                return e
            }
        }();
        v.str = function(t) {
            return "quat(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
        };
        if (typeof t !== "undefined") {
            t.quat = v
        }
    })(t.exports)
})();
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.dat = {})
}(this, function(t) {
    "use strict";

    function e(t, e) {
        var i = t.__state.conversionName.toString(),
            n = Math.round(t.r),
            r = Math.round(t.g),
            o = Math.round(t.b),
            s = t.a,
            a = Math.round(t.h),
            c = t.s.toFixed(1),
            u = t.v.toFixed(1);
        if (e || "THREE_CHAR_HEX" === i || "SIX_CHAR_HEX" === i) {
            for (var l = t.hex.toString(16); l.length < 6;) l = "0" + l;
            return "#" + l
        }
        return "CSS_RGB" === i ? "rgb(" + n + "," + r + "," + o + ")" : "CSS_RGBA" === i ? "rgba(" + n + "," + r + "," + o + "," + s + ")" : "HEX" === i ? "0x" + t.hex.toString(16) : "RGB_ARRAY" === i ? "[" + n + "," + r + "," + o + "]" : "RGBA_ARRAY" === i ? "[" + n + "," + r + "," + o + "," + s + "]" : "RGB_OBJ" === i ? "{r:" + n + ",g:" + r + ",b:" + o + "}" : "RGBA_OBJ" === i ? "{r:" + n + ",g:" + r + ",b:" + o + ",a:" + s + "}" : "HSV_OBJ" === i ? "{h:" + a + ",s:" + c + ",v:" + u + "}" : "HSVA_OBJ" === i ? "{h:" + a + ",s:" + c + ",v:" + u + ",a:" + s + "}" : "unknown format"
    }

    function i(t, e, i) {
        Object.defineProperty(t, e, {
            get: function() {
                return "RGB" === this.__state.space ? this.__state[e] : (U.recalculateRGB(this, e, i), this.__state[e])
            },
            set: function(t) {
                "RGB" !== this.__state.space && (U.recalculateRGB(this, e, i), this.__state.space = "RGB"), this.__state[e] = t
            }
        })
    }

    function n(t, e) {
        Object.defineProperty(t, e, {
            get: function() {
                return "HSV" === this.__state.space ? this.__state[e] : (U.recalculateHSV(this), this.__state[e])
            },
            set: function(t) {
                "HSV" !== this.__state.space && (U.recalculateHSV(this), this.__state.space = "HSV"), this.__state[e] = t
            }
        })
    }

    function r(t) {
        if ("0" === t || S.isUndefined(t)) return 0;
        var e = t.match(X);
        return S.isNull(e) ? 0 : parseFloat(e[1])
    }

    function o(t) {
        var e = t.toString();
        return e.indexOf(".") > -1 ? e.length - e.indexOf(".") - 1 : 0
    }

    function s(t, e) {
        var i = Math.pow(10, e);
        return Math.round(t * i) / i
    }

    function a(t, e, i, n, r) {
        return n + (t - e) / (i - e) * (r - n)
    }

    function c(t, e, i, n) {
        t.style.background = "", S.each(tt, function(r) {
            t.style.cssText += "background: " + r + "linear-gradient(" + e + ", " + i + " 0%, " + n + " 100%); "
        })
    }

    function u(t) {
        t.style.background = "", t.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);", t.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", t.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", t.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", t.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"
    }

    function l(t, e, i) {
        var n = document.createElement("li");
        return e && n.appendChild(e), i ? t.__ul.insertBefore(n, i) : t.__ul.appendChild(n), t.onResize(), n
    }

    function h(t) {
        H.unbind(window, "resize", t.__resizeHandler), t.saveToLocalStorageIfPossible && H.unbind(window, "unload", t.saveToLocalStorageIfPossible)
    }

    function f(t, e) {
        var i = t.__preset_select[t.__preset_select.selectedIndex];
        i.innerHTML = e ? i.value + "*" : i.value
    }

    function d(t, e, i) {
        if (i.__li = e, i.__gui = t, S.extend(i, {
                options: function(e) {
                    if (arguments.length > 1) {
                        var n = i.__li.nextElementSibling;
                        return i.remove(), v(t, i.object, i.property, {
                            before: n,
                            factoryArgs: [S.toArray(arguments)]
                        })
                    }
                    if (S.isArray(e) || S.isObject(e)) {
                        var r = i.__li.nextElementSibling;
                        return i.remove(), v(t, i.object, i.property, {
                            before: r,
                            factoryArgs: [e]
                        })
                    }
                },
                name: function(t) {
                    return i.__li.firstElementChild.firstElementChild.innerHTML = t, i
                },
                listen: function() {
                    return i.__gui.listen(i), i
                },
                remove: function() {
                    return i.__gui.remove(i), i
                }
            }), i instanceof J) {
            var n = new Q(i.object, i.property, {
                min: i.__min,
                max: i.__max,
                step: i.__step
            });
            S.each(["updateDisplay", "onChange", "onFinishChange", "step", "min", "max"], function(t) {
                var e = i[t],
                    r = n[t];
                i[t] = n[t] = function() {
                    var t = Array.prototype.slice.call(arguments);
                    return r.apply(n, t), e.apply(i, t)
                }
            }), H.addClass(e, "has-slider"), i.domElement.insertBefore(n.domElement, i.domElement.firstElementChild)
        } else if (i instanceof Q) {
            var r = function(e) {
                if (S.isNumber(i.__min) && S.isNumber(i.__max)) {
                    var n = i.__li.firstElementChild.firstElementChild.innerHTML,
                        r = i.__gui.__listening.indexOf(i) > -1;
                    i.remove();
                    var o = v(t, i.object, i.property, {
                        before: i.__li.nextElementSibling,
                        factoryArgs: [i.__min, i.__max, i.__step]
                    });
                    return o.name(n), r && o.listen(), o
                }
                return e
            };
            i.min = S.compose(r, i.min), i.max = S.compose(r, i.max)
        } else i instanceof Y ? (H.bind(e, "click", function() {
            H.fakeEvent(i.__checkbox, "click")
        }), H.bind(i.__checkbox, "click", function(t) {
            t.stopPropagation()
        })) : i instanceof Z ? (H.bind(e, "click", function() {
            H.fakeEvent(i.__button, "click")
        }), H.bind(e, "mouseover", function() {
            H.addClass(i.__button, "hover")
        }), H.bind(e, "mouseout", function() {
            H.removeClass(i.__button, "hover")
        })) : i instanceof $ && (H.addClass(e, "color"), i.updateDisplay = S.compose(function(t) {
            return e.style.borderLeftColor = i.__color.toString(), t
        }, i.updateDisplay), i.updateDisplay());
        i.setValue = S.compose(function(e) {
            return t.getRoot().__preset_select && i.isModified() && f(t.getRoot(), !0), e
        }, i.setValue)
    }

    function p(t, e) {
        var i = t.getRoot(),
            n = i.__rememberedObjects.indexOf(e.object);
        if (-1 !== n) {
            var r = i.__rememberedObjectIndecesToControllers[n];
            if (void 0 === r && (r = {}, i.__rememberedObjectIndecesToControllers[n] = r), r[e.property] = e, i.load && i.load.remembered) {
                var o = i.load.remembered,
                    s = void 0;
                if (o[t.preset]) s = o[t.preset];
                else {
                    if (!o[st]) return;
                    s = o[st]
                }
                if (s[n] && void 0 !== s[n][e.property]) {
                    var a = s[n][e.property];
                    e.initialValue = a, e.setValue(a)
                }
            }
        }
    }

    function v(t, e, i, n) {
        if (void 0 === e[i]) throw new Error('Object "' + e + '" has no property "' + i + '"');
        var r = void 0;
        if (n.color) r = new $(e, i);
        else {
            var o = [e, i].concat(n.factoryArgs);
            r = it.apply(t, o)
        }
        n.before instanceof N && (n.before = n.before.__li), p(t, r), H.addClass(r.domElement, "c");
        var s = document.createElement("span");
        H.addClass(s, "property-name"), s.innerHTML = r.property;
        var a = document.createElement("div");
        a.appendChild(s), a.appendChild(r.domElement);
        var c = l(t, a, n.before);
        return H.addClass(c, dt.CLASS_CONTROLLER_ROW),
            r instanceof $ ? H.addClass(c, "color") : H.addClass(c, O(r.getValue())), d(t, c, r), t.__controllers.push(r), r
    }

    function m(t, e) {
        return document.location.href + "." + e
    }

    function _(t, e, i) {
        var n = document.createElement("option");
        n.innerHTML = e, n.value = e, t.__preset_select.appendChild(n), i && (t.__preset_select.selectedIndex = t.__preset_select.length - 1)
    }

    function g(t, e) {
        e.style.display = t.useLocalStorage ? "block" : "none"
    }

    function b(t) {
        var e = t.__save_row = document.createElement("li");
        H.addClass(t.domElement, "has-save"), t.__ul.insertBefore(e, t.__ul.firstChild), H.addClass(e, "save-row");
        var i = document.createElement("span");
        i.innerHTML = "&nbsp;", H.addClass(i, "button gears");
        var n = document.createElement("span");
        n.innerHTML = "Save", H.addClass(n, "button"), H.addClass(n, "save");
        var r = document.createElement("span");
        r.innerHTML = "New", H.addClass(r, "button"), H.addClass(r, "save-as");
        var o = document.createElement("span");
        o.innerHTML = "Revert", H.addClass(o, "button"), H.addClass(o, "revert");
        var s = t.__preset_select = document.createElement("select");
        if (t.load && t.load.remembered ? S.each(t.load.remembered, function(e, i) {
                _(t, i, i === t.preset)
            }) : _(t, st, !1), H.bind(s, "change", function() {
                for (var e = 0; e < t.__preset_select.length; e++) t.__preset_select[e].innerHTML = t.__preset_select[e].value;
                t.preset = this.value
            }), e.appendChild(s), e.appendChild(i), e.appendChild(n), e.appendChild(r), e.appendChild(o), at) {
            var a = document.getElementById("dg-local-explain"),
                c = document.getElementById("dg-local-storage");
            document.getElementById("dg-save-locally").style.display = "block", "true" === localStorage.getItem(m(t, "isLocal")) && c.setAttribute("checked", "checked"), g(t, a), H.bind(c, "change", function() {
                t.useLocalStorage = !t.useLocalStorage, g(t, a)
            })
        }
        var u = document.getElementById("dg-new-constructor");
        H.bind(u, "keydown", function(t) {
            !t.metaKey || 67 !== t.which && 67 !== t.keyCode || ct.hide()
        }), H.bind(i, "click", function() {
            u.innerHTML = JSON.stringify(t.getSaveObject(), void 0, 2), ct.show(), u.focus(), u.select()
        }), H.bind(n, "click", function() {
            t.save()
        }), H.bind(r, "click", function() {
            var e = prompt("Enter a new preset name.");
            e && t.saveAs(e)
        }), H.bind(o, "click", function() {
            t.revert()
        })
    }

    function y(t) {
        function e(e) {
            return e.preventDefault(), t.width += r - e.clientX, t.onResize(), r = e.clientX, !1
        }

        function i() {
            H.removeClass(t.__closeButton, dt.CLASS_DRAG), H.unbind(window, "mousemove", e), H.unbind(window, "mouseup", i)
        }

        function n(n) {
            return n.preventDefault(), r = n.clientX, H.addClass(t.__closeButton, dt.CLASS_DRAG), H.bind(window, "mousemove", e), H.bind(window, "mouseup", i), !1
        }
        var r = void 0;
        t.__resize_handle = document.createElement("div"), S.extend(t.__resize_handle.style, {
            width: "6px",
            marginLeft: "-3px",
            height: "200px",
            cursor: "ew-resize",
            position: "absolute"
        }), H.bind(t.__resize_handle, "mousedown", n), H.bind(t.__closeButton, "mousedown", n), t.domElement.insertBefore(t.__resize_handle, t.domElement.firstElementChild)
    }

    function x(t, e) {
        t.domElement.style.width = e + "px", t.__save_row && t.autoPlace && (t.__save_row.style.width = e + "px"), t.__closeButton && (t.__closeButton.style.width = e + "px")
    }

    function w(t, e) {
        var i = {};
        return S.each(t.__rememberedObjects, function(n, r) {
            var o = {},
                s = t.__rememberedObjectIndecesToControllers[r];
            S.each(s, function(t, i) {
                o[i] = e ? t.initialValue : t.getValue()
            }), i[r] = o
        }), i
    }

    function E(t) {
        for (var e = 0; e < t.__preset_select.length; e++) t.__preset_select[e].value === t.preset && (t.__preset_select.selectedIndex = e)
    }

    function A(t) {
        0 !== t.length && nt.call(window, function() {
            A(t)
        }), S.each(t, function(t) {
            t.updateDisplay()
        })
    }
    var C = Array.prototype.forEach,
        M = Array.prototype.slice,
        S = {
            BREAK: {},
            extend: function(t) {
                return this.each(M.call(arguments, 1), function(e) {
                    (this.isObject(e) ? Object.keys(e) : []).forEach(function(i) {
                        this.isUndefined(e[i]) || (t[i] = e[i])
                    }.bind(this))
                }, this), t
            },
            defaults: function(t) {
                return this.each(M.call(arguments, 1), function(e) {
                    (this.isObject(e) ? Object.keys(e) : []).forEach(function(i) {
                        this.isUndefined(t[i]) && (t[i] = e[i])
                    }.bind(this))
                }, this), t
            },
            compose: function() {
                var t = M.call(arguments);
                return function() {
                    for (var e = M.call(arguments), i = t.length - 1; i >= 0; i--) e = [t[i].apply(this, e)];
                    return e[0]
                }
            },
            each: function(t, e, i) {
                if (t)
                    if (C && t.forEach && t.forEach === C) t.forEach(e, i);
                    else if (t.length === t.length + 0) {
                    var n = void 0,
                        r = void 0;
                    for (n = 0, r = t.length; n < r; n++)
                        if (n in t && e.call(i, t[n], n) === this.BREAK) return
                } else
                    for (var o in t)
                        if (e.call(i, t[o], o) === this.BREAK) return
            },
            defer: function(t) {
                setTimeout(t, 0)
            },
            debounce: function(t, e, i) {
                var n = void 0;
                return function() {
                    var r = this,
                        o = arguments,
                        s = i || !n;
                    clearTimeout(n), n = setTimeout(function() {
                        n = null, i || t.apply(r, o)
                    }, e), s && t.apply(r, o)
                }
            },
            toArray: function(t) {
                return t.toArray ? t.toArray() : M.call(t)
            },
            isUndefined: function(t) {
                return void 0 === t
            },
            isNull: function(t) {
                return null === t
            },
            isNaN: function(t) {
                function e(e) {
                    return t.apply(this, arguments)
                }
                return e.toString = function() {
                    return t.toString()
                }, e
            }(function(t) {
                return isNaN(t)
            }),
            isArray: Array.isArray || function(t) {
                return t.constructor === Array
            },
            isObject: function(t) {
                return t === Object(t)
            },
            isNumber: function(t) {
                return t === t + 0
            },
            isString: function(t) {
                return t === t + ""
            },
            isBoolean: function(t) {
                return !1 === t || !0 === t
            },
            isFunction: function(t) {
                return "[object Function]" === Object.prototype.toString.call(t)
            }
        },
        T = [{
            litmus: S.isString,
            conversions: {
                THREE_CHAR_HEX: {
                    read: function(t) {
                        var e = t.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
                        return null !== e && {
                            space: "HEX",
                            hex: parseInt("0x" + e[1].toString() + e[1].toString() + e[2].toString() + e[2].toString() + e[3].toString() + e[3].toString(), 0)
                        }
                    },
                    write: e
                },
                SIX_CHAR_HEX: {
                    read: function(t) {
                        var e = t.match(/^#([A-F0-9]{6})$/i);
                        return null !== e && {
                            space: "HEX",
                            hex: parseInt("0x" + e[1].toString(), 0)
                        }
                    },
                    write: e
                },
                CSS_RGB: {
                    read: function(t) {
                        var e = t.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
                        return null !== e && {
                            space: "RGB",
                            r: parseFloat(e[1]),
                            g: parseFloat(e[2]),
                            b: parseFloat(e[3])
                        }
                    },
                    write: e
                },
                CSS_RGBA: {
                    read: function(t) {
                        var e = t.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
                        return null !== e && {
                            space: "RGB",
                            r: parseFloat(e[1]),
                            g: parseFloat(e[2]),
                            b: parseFloat(e[3]),
                            a: parseFloat(e[4])
                        }
                    },
                    write: e
                }
            }
        }, {
            litmus: S.isNumber,
            conversions: {
                HEX: {
                    read: function(t) {
                        return {
                            space: "HEX",
                            hex: t,
                            conversionName: "HEX"
                        }
                    },
                    write: function(t) {
                        return t.hex
                    }
                }
            }
        }, {
            litmus: S.isArray,
            conversions: {
                RGB_ARRAY: {
                    read: function(t) {
                        return 3 === t.length && {
                            space: "RGB",
                            r: t[0],
                            g: t[1],
                            b: t[2]
                        }
                    },
                    write: function(t) {
                        return [t.r, t.g, t.b]
                    }
                },
                RGBA_ARRAY: {
                    read: function(t) {
                        return 4 === t.length && {
                            space: "RGB",
                            r: t[0],
                            g: t[1],
                            b: t[2],
                            a: t[3]
                        }
                    },
                    write: function(t) {
                        return [t.r, t.g, t.b, t.a]
                    }
                }
            }
        }, {
            litmus: S.isObject,
            conversions: {
                RGBA_OBJ: {
                    read: function(t) {
                        return !!(S.isNumber(t.r) && S.isNumber(t.g) && S.isNumber(t.b) && S.isNumber(t.a)) && {
                            space: "RGB",
                            r: t.r,
                            g: t.g,
                            b: t.b,
                            a: t.a
                        }
                    },
                    write: function(t) {
                        return {
                            r: t.r,
                            g: t.g,
                            b: t.b,
                            a: t.a
                        }
                    }
                },
                RGB_OBJ: {
                    read: function(t) {
                        return !!(S.isNumber(t.r) && S.isNumber(t.g) && S.isNumber(t.b)) && {
                            space: "RGB",
                            r: t.r,
                            g: t.g,
                            b: t.b
                        }
                    },
                    write: function(t) {
                        return {
                            r: t.r,
                            g: t.g,
                            b: t.b
                        }
                    }
                },
                HSVA_OBJ: {
                    read: function(t) {
                        return !!(S.isNumber(t.h) && S.isNumber(t.s) && S.isNumber(t.v) && S.isNumber(t.a)) && {
                            space: "HSV",
                            h: t.h,
                            s: t.s,
                            v: t.v,
                            a: t.a
                        }
                    },
                    write: function(t) {
                        return {
                            h: t.h,
                            s: t.s,
                            v: t.v,
                            a: t.a
                        }
                    }
                },
                HSV_OBJ: {
                    read: function(t) {
                        return !!(S.isNumber(t.h) && S.isNumber(t.s) && S.isNumber(t.v)) && {
                            space: "HSV",
                            h: t.h,
                            s: t.s,
                            v: t.v
                        }
                    },
                    write: function(t) {
                        return {
                            h: t.h,
                            s: t.s,
                            v: t.v
                        }
                    }
                }
            }
        }],
        R = void 0,
        k = void 0,
        F = function() {
            k = !1;
            var t = arguments.length > 1 ? S.toArray(arguments) : arguments[0];
            return S.each(T, function(e) {
                if (e.litmus(t)) return S.each(e.conversions, function(e, i) {
                    if (R = e.read(t), !1 === k && !1 !== R) return k = R, R.conversionName = i, R.conversion = e, S.BREAK
                }), S.BREAK
            }), k
        },
        L = void 0,
        B = {
            hsv_to_rgb: function(t, e, i) {
                var n = Math.floor(t / 60) % 6,
                    r = t / 60 - Math.floor(t / 60),
                    o = i * (1 - e),
                    s = i * (1 - r * e),
                    a = i * (1 - (1 - r) * e),
                    c = [
                        [i, a, o],
                        [s, i, o],
                        [o, i, a],
                        [o, s, i],
                        [a, o, i],
                        [i, o, s]
                    ][n];
                return {
                    r: 255 * c[0],
                    g: 255 * c[1],
                    b: 255 * c[2]
                }
            },
            rgb_to_hsv: function(t, e, i) {
                var n = Math.min(t, e, i),
                    r = Math.max(t, e, i),
                    o = r - n,
                    s = void 0,
                    a = void 0;
                return 0 === r ? {
                    h: NaN,
                    s: 0,
                    v: 0
                } : (a = o / r, s = t === r ? (e - i) / o : e === r ? 2 + (i - t) / o : 4 + (t - e) / o, (s /= 6) < 0 && (s += 1), {
                    h: 360 * s,
                    s: a,
                    v: r / 255
                })
            },
            rgb_to_hex: function(t, e, i) {
                var n = this.hex_with_component(0, 2, t);
                return n = this.hex_with_component(n, 1, e), n = this.hex_with_component(n, 0, i)
            },
            component_from_hex: function(t, e) {
                return t >> 8 * e & 255
            },
            hex_with_component: function(t, e, i) {
                return i << (L = 8 * e) | t & ~(255 << L)
            }
        },
        O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        D = function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        },
        P = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        G = function t(e, i, n) {
            null === e && (e = Function.prototype);
            var r = Object.getOwnPropertyDescriptor(e, i);
            if (void 0 === r) {
                var o = Object.getPrototypeOf(e);
                return null === o ? void 0 : t(o, i, n)
            }
            if ("value" in r) return r.value;
            var s = r.get;
            if (void 0 !== s) return s.call(n)
        },
        V = function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        },
        I = function(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        },
        U = function() {
            function t() {
                if (D(this, t), this.__state = F.apply(this, arguments), !1 === this.__state) throw new Error("Failed to interpret color arguments");
                this.__state.a = this.__state.a || 1
            }
            return P(t, [{
                key: "toString",
                value: function() {
                    return e(this)
                }
            }, {
                key: "toHexString",
                value: function() {
                    return e(this, !0)
                }
            }, {
                key: "toOriginal",
                value: function() {
                    return this.__state.conversion.write(this)
                }
            }]), t
        }();
    U.recalculateRGB = function(t, e, i) {
        if ("HEX" === t.__state.space) t.__state[e] = B.component_from_hex(t.__state.hex, i);
        else {
            if ("HSV" !== t.__state.space) throw new Error("Corrupted color state");
            S.extend(t.__state, B.hsv_to_rgb(t.__state.h, t.__state.s, t.__state.v))
        }
    }, U.recalculateHSV = function(t) {
        var e = B.rgb_to_hsv(t.r, t.g, t.b);
        S.extend(t.__state, {
            s: e.s,
            v: e.v
        }), S.isNaN(e.h) ? S.isUndefined(t.__state.h) && (t.__state.h = 0) : t.__state.h = e.h
    }, U.COMPONENTS = ["r", "g", "b", "h", "s", "v", "hex", "a"], i(U.prototype, "r", 2), i(U.prototype, "g", 1), i(U.prototype, "b", 0), n(U.prototype, "h"), n(U.prototype, "s"), n(U.prototype, "v"), Object.defineProperty(U.prototype, "a", {
        get: function() {
            return this.__state.a
        },
        set: function(t) {
            this.__state.a = t
        }
    }), Object.defineProperty(U.prototype, "hex", {
        get: function() {
            return "HEX" !== !this.__state.space && (this.__state.hex = B.rgb_to_hex(this.r, this.g, this.b)), this.__state.hex
        },
        set: function(t) {
            this.__state.space = "HEX", this.__state.hex = t
        }
    });
    var N = function() {
            function t(e, i) {
                D(this, t), this.initialValue = e[i], this.domElement = document.createElement("div"), this.object = e, this.property = i, this.__onChange = void 0, this.__onFinishChange = void 0
            }
            return P(t, [{
                key: "onChange",
                value: function(t) {
                    return this.__onChange = t, this
                }
            }, {
                key: "onFinishChange",
                value: function(t) {
                    return this.__onFinishChange = t, this
                }
            }, {
                key: "setValue",
                value: function(t) {
                    return this.object[this.property] = t, this.__onChange && this.__onChange.call(this, t), this.updateDisplay(), this
                }
            }, {
                key: "getValue",
                value: function() {
                    return this.object[this.property]
                }
            }, {
                key: "updateDisplay",
                value: function() {
                    return this
                }
            }, {
                key: "isModified",
                value: function() {
                    return this.initialValue !== this.getValue()
                }
            }]), t
        }(),
        j = {
            HTMLEvents: ["change"],
            MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"],
            KeyboardEvents: ["keydown"]
        },
        z = {};
    S.each(j, function(t, e) {
        S.each(t, function(t) {
            z[t] = e
        })
    });
    var X = /(\d+(\.\d+)?)px/,
        H = {
            makeSelectable: function(t, e) {
                void 0 !== t && void 0 !== t.style && (t.onselectstart = e ? function() {
                    return !1
                } : function() {}, t.style.MozUserSelect = e ? "auto" : "none", t.style.KhtmlUserSelect = e ? "auto" : "none", t.unselectable = e ? "on" : "off")
            },
            makeFullscreen: function(t, e, i) {
                var n = i,
                    r = e;
                S.isUndefined(r) && (r = !0), S.isUndefined(n) && (n = !0), t.style.position = "absolute", r && (t.style.left = 0, t.style.right = 0), n && (t.style.top = 0, t.style.bottom = 0)
            },
            fakeEvent: function(t, e, i, n) {
                var r = i || {},
                    o = z[e];
                if (!o) throw new Error("Event type " + e + " not supported.");
                var s = document.createEvent(o);
                switch (o) {
                    case "MouseEvents":
                        var a = r.x || r.clientX || 0,
                            c = r.y || r.clientY || 0;
                        s.initMouseEvent(e, r.bubbles || !1, r.cancelable || !0, window, r.clickCount || 1, 0, 0, a, c, !1, !1, !1, !1, 0, null);
                        break;
                    case "KeyboardEvents":
                        var u = s.initKeyboardEvent || s.initKeyEvent;
                        S.defaults(r, {
                            cancelable: !0,
                            ctrlKey: !1,
                            altKey: !1,
                            shiftKey: !1,
                            metaKey: !1,
                            keyCode: void 0,
                            charCode: void 0
                        }), u(e, r.bubbles || !1, r.cancelable, window, r.ctrlKey, r.altKey, r.shiftKey, r.metaKey, r.keyCode, r.charCode);
                        break;
                    default:
                        s.initEvent(e, r.bubbles || !1, r.cancelable || !0)
                }
                S.defaults(s, n), t.dispatchEvent(s)
            },
            bind: function(t, e, i, n) {
                var r = n || !1;
                return t.addEventListener ? t.addEventListener(e, i, r) : t.attachEvent && t.attachEvent("on" + e, i), H
            },
            unbind: function(t, e, i, n) {
                var r = n || !1;
                return t.removeEventListener ? t.removeEventListener(e, i, r) : t.detachEvent && t.detachEvent("on" + e, i), H
            },
            addClass: function(t, e) {
                if (void 0 === t.className) t.className = e;
                else if (t.className !== e) {
                    var i = t.className.split(/ +/); - 1 === i.indexOf(e) && (i.push(e), t.className = i.join(" ").replace(/^\s+/, "").replace(/\s+$/, ""))
                }
                return H
            },
            removeClass: function(t, e) {
                if (e)
                    if (t.className === e) t.removeAttribute("class");
                    else {
                        var i = t.className.split(/ +/),
                            n = i.indexOf(e); - 1 !== n && (i.splice(n, 1), t.className = i.join(" "))
                    } else t.className = void 0;
                return H
            },
            hasClass: function(t, e) {
                return new RegExp("(?:^|\\s+)" + e + "(?:\\s+|$)").test(t.className) || !1
            },
            getWidth: function(t) {
                var e = getComputedStyle(t);
                return r(e["border-left-width"]) + r(e["border-right-width"]) + r(e["padding-left"]) + r(e["padding-right"]) + r(e.width)
            },
            getHeight: function(t) {
                var e = getComputedStyle(t);
                return r(e["border-top-width"]) + r(e["border-bottom-width"]) + r(e["padding-top"]) + r(e["padding-bottom"]) + r(e.height)
            },
            getOffset: function(t) {
                var e = t,
                    i = {
                        left: 0,
                        top: 0
                    };
                if (e.offsetParent)
                    do {
                        i.left += e.offsetLeft, i.top += e.offsetTop, e = e.offsetParent
                    } while (e) return i
            },
            isActive: function(t) {
                return t === document.activeElement && (t.type || t.href)
            }
        },
        Y = function(t) {
            function e(t, i) {
                D(this, e);
                var n = I(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i)),
                    r = n;
                return n.__prev = n.getValue(), n.__checkbox = document.createElement("input"), n.__checkbox.setAttribute("type", "checkbox"), H.bind(n.__checkbox, "change", function() {
                    r.setValue(!r.__prev)
                }, !1), n.domElement.appendChild(n.__checkbox), n.updateDisplay(), n
            }
            return V(e, N), P(e, [{
                key: "setValue",
                value: function(t) {
                    var i = G(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "setValue", this).call(this, t);
                    return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), this.__prev = this.getValue(), i
                }
            }, {
                key: "updateDisplay",
                value: function() {
                    return !0 === this.getValue() ? (this.__checkbox.setAttribute("checked", "checked"), this.__checkbox.checked = !0, this.__prev = !0) : (this.__checkbox.checked = !1, this.__prev = !1), G(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this).call(this)
                }
            }]), e
        }(),
        q = function(t) {
            function e(t, i, n) {
                D(this, e);
                var r = I(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i)),
                    o = n,
                    s = r;
                if (r.__select = document.createElement("select"), S.isArray(o)) {
                    var a = {};
                    S.each(o, function(t) {
                        a[t] = t
                    }), o = a
                }
                return S.each(o, function(t, e) {
                    var i = document.createElement("option");
                    i.innerHTML = e, i.setAttribute("value", t), s.__select.appendChild(i)
                }), r.updateDisplay(), H.bind(r.__select, "change", function() {
                    var t = this.options[this.selectedIndex].value;
                    s.setValue(t)
                }), r.domElement.appendChild(r.__select), r
            }
            return V(e, N), P(e, [{
                key: "setValue",
                value: function(t) {
                    var i = G(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "setValue", this).call(this, t);
                    return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), i
                }
            }, {
                key: "updateDisplay",
                value: function() {
                    return H.isActive(this.__select) ? this : (this.__select.value = this.getValue(), G(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this).call(this))
                }
            }]), e
        }(),
        W = function(t) {
            function e(t, i) {
                function n() {
                    o.setValue(o.__input.value)
                }
                D(this, e);
                var r = I(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i)),
                    o = r;
                return r.__input = document.createElement("input"), r.__input.setAttribute("type", "text"), H.bind(r.__input, "keyup", n), H.bind(r.__input, "change", n), H.bind(r.__input, "blur", function() {
                    o.__onFinishChange && o.__onFinishChange.call(o, o.getValue())
                }), H.bind(r.__input, "keydown", function(t) {
                    13 === t.keyCode && this.blur()
                }), r.updateDisplay(), r.domElement.appendChild(r.__input), r
            }
            return V(e, N), P(e, [{
                key: "updateDisplay",
                value: function() {
                    return H.isActive(this.__input) || (this.__input.value = this.getValue()), G(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this).call(this)
                }
            }]), e
        }(),
        K = function(t) {
            function e(t, i, n) {
                D(this, e);
                var r = I(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i)),
                    s = n || {};
                return r.__min = s.min, r.__max = s.max, r.__step = s.step, S.isUndefined(r.__step) ? 0 === r.initialValue ? r.__impliedStep = 1 : r.__impliedStep = Math.pow(10, Math.floor(Math.log(Math.abs(r.initialValue)) / Math.LN10)) / 10 : r.__impliedStep = r.__step, r.__precision = o(r.__impliedStep), r
            }
            return V(e, N), P(e, [{
                key: "setValue",
                value: function(t) {
                    var i = t;
                    return void 0 !== this.__min && i < this.__min ? i = this.__min : void 0 !== this.__max && i > this.__max && (i = this.__max), void 0 !== this.__step && i % this.__step != 0 && (i = Math.round(i / this.__step) * this.__step), G(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "setValue", this).call(this, i)
                }
            }, {
                key: "min",
                value: function(t) {
                    return this.__min = t, this
                }
            }, {
                key: "max",
                value: function(t) {
                    return this.__max = t, this
                }
            }, {
                key: "step",
                value: function(t) {
                    return this.__step = t, this.__impliedStep = t, this.__precision = o(t), this
                }
            }]), e
        }(),
        Q = function(t) {
            function e(t, i, n) {
                function r() {
                    c.__onFinishChange && c.__onFinishChange.call(c, c.getValue())
                }

                function o(t) {
                    var e = u - t.clientY;
                    c.setValue(c.getValue() + e * c.__impliedStep), u = t.clientY
                }

                function s() {
                    H.unbind(window, "mousemove", o), H.unbind(window, "mouseup", s), r()
                }
                D(this, e);
                var a = I(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i, n));
                a.__truncationSuspended = !1;
                var c = a,
                    u = void 0;
                return a.__input = document.createElement("input"), a.__input.setAttribute("type", "text"), H.bind(a.__input, "change", function() {
                    var t = parseFloat(c.__input.value);
                    S.isNaN(t) || c.setValue(t)
                }), H.bind(a.__input, "blur", function() {
                    r()
                }), H.bind(a.__input, "mousedown", function(t) {
                    H.bind(window, "mousemove", o), H.bind(window, "mouseup", s), u = t.clientY
                }), H.bind(a.__input, "keydown", function(t) {
                    13 === t.keyCode && (c.__truncationSuspended = !0, this.blur(), c.__truncationSuspended = !1, r())
                }), a.updateDisplay(), a.domElement.appendChild(a.__input), a
            }
            return V(e, K), P(e, [{
                key: "updateDisplay",
                value: function() {
                    return this.__input.value = this.__truncationSuspended ? this.getValue() : s(this.getValue(), this.__precision), G(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this).call(this)
                }
            }]), e
        }(),
        J = function(t) {
            function e(t, i, n, r, o) {
                function s(t) {
                    t.preventDefault();
                    var e = f.__background.getBoundingClientRect();
                    return f.setValue(a(t.clientX, e.left, e.right, f.__min, f.__max)), !1
                }

                function c() {
                    H.unbind(window, "mousemove", s), H.unbind(window, "mouseup", c), f.__onFinishChange && f.__onFinishChange.call(f, f.getValue())
                }

                function u(t) {
                    var e = t.touches[0].clientX,
                        i = f.__background.getBoundingClientRect();
                    f.setValue(a(e, i.left, i.right, f.__min, f.__max))
                }

                function l() {
                    H.unbind(window, "touchmove", u), H.unbind(window, "touchend", l), f.__onFinishChange && f.__onFinishChange.call(f, f.getValue())
                }
                D(this, e);
                var h = I(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i, {
                        min: n,
                        max: r,
                        step: o
                    })),
                    f = h;
                return h.__background = document.createElement("div"), h.__foreground = document.createElement("div"), H.bind(h.__background, "mousedown", function(t) {
                    document.activeElement.blur(), H.bind(window, "mousemove", s), H.bind(window, "mouseup", c), s(t)
                }), H.bind(h.__background, "touchstart", function(t) {
                    1 === t.touches.length && (H.bind(window, "touchmove", u), H.bind(window, "touchend", l), u(t))
                }), H.addClass(h.__background, "slider"), H.addClass(h.__foreground, "slider-fg"), h.updateDisplay(), h.__background.appendChild(h.__foreground), h.domElement.appendChild(h.__background), h
            }
            return V(e, K), P(e, [{
                key: "updateDisplay",
                value: function() {
                    var t = (this.getValue() - this.__min) / (this.__max - this.__min);
                    return this.__foreground.style.width = 100 * t + "%", G(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this).call(this)
                }
            }]), e
        }(),
        Z = function(t) {
            function e(t, i, n) {
                D(this, e);
                var r = I(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i)),
                    o = r;
                return r.__button = document.createElement("div"), r.__button.innerHTML = void 0 === n ? "Fire" : n, H.bind(r.__button, "click", function(t) {
                    return t.preventDefault(), o.fire(), !1
                }), H.addClass(r.__button, "button"), r.domElement.appendChild(r.__button), r
            }
            return V(e, N), P(e, [{
                key: "fire",
                value: function() {
                    this.__onChange && this.__onChange.call(this), this.getValue().call(this.object), this.__onFinishChange && this.__onFinishChange.call(this, this.getValue())
                }
            }]), e
        }(),
        $ = function(t) {
            function e(t, i) {
                function n(t) {
                    h(t), H.bind(window, "mousemove", h), H.bind(window, "touchmove", h), H.bind(window, "mouseup", o), H.bind(window, "touchend", o)
                }

                function r(t) {
                    f(t), H.bind(window, "mousemove", f), H.bind(window, "touchmove", f), H.bind(window, "mouseup", s), H.bind(window, "touchend", s)
                }

                function o() {
                    H.unbind(window, "mousemove", h), H.unbind(window, "touchmove", h), H.unbind(window, "mouseup", o), H.unbind(window, "touchend", o), l()
                }

                function s() {
                    H.unbind(window, "mousemove", f), H.unbind(window, "touchmove", f), H.unbind(window, "mouseup", s), H.unbind(window, "touchend", s), l()
                }

                function a() {
                    var t = F(this.value);
                    !1 !== t ? (p.__color.__state = t, p.setValue(p.__color.toOriginal())) : this.value = p.__color.toString()
                }

                function l() {
                    p.__onFinishChange && p.__onFinishChange.call(p, p.__color.toOriginal())
                }

                function h(t) {
                    -1 === t.type.indexOf("touch") && t.preventDefault();
                    var e = p.__saturation_field.getBoundingClientRect(),
                        i = t.touches && t.touches[0] || t,
                        n = i.clientX,
                        r = i.clientY,
                        o = (n - e.left) / (e.right - e.left),
                        s = 1 - (r - e.top) / (e.bottom - e.top);
                    return s > 1 ? s = 1 : s < 0 && (s = 0), o > 1 ? o = 1 : o < 0 && (o = 0), p.__color.v = s, p.__color.s = o, p.setValue(p.__color.toOriginal()), !1
                }

                function f(t) {
                    -1 === t.type.indexOf("touch") && t.preventDefault();
                    var e = p.__hue_field.getBoundingClientRect(),
                        i = 1 - ((t.touches && t.touches[0] || t).clientY - e.top) / (e.bottom - e.top);
                    return i > 1 ? i = 1 : i < 0 && (i = 0), p.__color.h = 360 * i, p.setValue(p.__color.toOriginal()), !1
                }
                D(this, e);
                var d = I(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i));
                d.__color = new U(d.getValue()), d.__temp = new U(0);
                var p = d;
                d.domElement = document.createElement("div"), H.makeSelectable(d.domElement, !1), d.__selector = document.createElement("div"), d.__selector.className = "selector", d.__saturation_field = document.createElement("div"), d.__saturation_field.className = "saturation-field", d.__field_knob = document.createElement("div"), d.__field_knob.className = "field-knob", d.__field_knob_border = "2px solid ", d.__hue_knob = document.createElement("div"), d.__hue_knob.className = "hue-knob", d.__hue_field = document.createElement("div"), d.__hue_field.className = "hue-field", d.__input = document.createElement("input"), d.__input.type = "text", d.__input_textShadow = "0 1px 1px ", H.bind(d.__input, "keydown", function(t) {
                    13 === t.keyCode && a.call(this)
                }), H.bind(d.__input, "blur", a), H.bind(d.__selector, "mousedown", function() {
                    H.addClass(this, "drag").bind(window, "mouseup", function() {
                        H.removeClass(p.__selector, "drag")
                    })
                }), H.bind(d.__selector, "touchstart", function() {
                    H.addClass(this, "drag").bind(window, "touchend", function() {
                        H.removeClass(p.__selector, "drag")
                    })
                });
                var v = document.createElement("div");
                return S.extend(d.__selector.style, {
                    width: "122px",
                    height: "102px",
                    padding: "3px",
                    backgroundColor: "#222",
                    boxShadow: "0px 1px 3px rgba(0,0,0,0.3)"
                }), S.extend(d.__field_knob.style, {
                    position: "absolute",
                    width: "12px",
                    height: "12px",
                    border: d.__field_knob_border + (d.__color.v < .5 ? "#fff" : "#000"),
                    boxShadow: "0px 1px 3px rgba(0,0,0,0.5)",
                    borderRadius: "12px",
                    zIndex: 1
                }), S.extend(d.__hue_knob.style, {
                    position: "absolute",
                    width: "15px",
                    height: "2px",
                    borderRight: "4px solid #fff",
                    zIndex: 1
                }), S.extend(d.__saturation_field.style, {
                    width: "100px",
                    height: "100px",
                    border: "1px solid #555",
                    marginRight: "3px",
                    display: "inline-block",
                    cursor: "pointer"
                }), S.extend(v.style, {
                    width: "100%",
                    height: "100%",
                    background: "none"
                }), c(v, "top", "rgba(0,0,0,0)", "#000"), S.extend(d.__hue_field.style, {
                    width: "15px",
                    height: "100px",
                    border: "1px solid #555",
                    cursor: "ns-resize",
                    position: "absolute",
                    top: "3px",
                    right: "3px"
                }), u(d.__hue_field), S.extend(d.__input.style, {
                    outline: "none",
                    textAlign: "center",
                    color: "#fff",
                    border: 0,
                    fontWeight: "bold",
                    textShadow: d.__input_textShadow + "rgba(0,0,0,0.7)"
                }), H.bind(d.__saturation_field, "mousedown", n), H.bind(d.__saturation_field, "touchstart", n), H.bind(d.__field_knob, "mousedown", n), H.bind(d.__field_knob, "touchstart", n), H.bind(d.__hue_field, "mousedown", r), H.bind(d.__hue_field, "touchstart", r), d.__saturation_field.appendChild(v), d.__selector.appendChild(d.__field_knob), d.__selector.appendChild(d.__saturation_field), d.__selector.appendChild(d.__hue_field), d.__hue_field.appendChild(d.__hue_knob), d.domElement.appendChild(d.__input), d.domElement.appendChild(d.__selector), d.updateDisplay(), d
            }
            return V(e, N), P(e, [{
                key: "updateDisplay",
                value: function() {
                    var t = F(this.getValue());
                    if (!1 !== t) {
                        var e = !1;
                        S.each(U.COMPONENTS, function(i) {
                            if (!S.isUndefined(t[i]) && !S.isUndefined(this.__color.__state[i]) && t[i] !== this.__color.__state[i]) return e = !0, {}
                        }, this), e && S.extend(this.__color.__state, t)
                    }
                    S.extend(this.__temp.__state, this.__color.__state), this.__temp.a = 1;
                    var i = this.__color.v < .5 || this.__color.s > .5 ? 255 : 0,
                        n = 255 - i;
                    S.extend(this.__field_knob.style, {
                        marginLeft: 100 * this.__color.s - 7 + "px",
                        marginTop: 100 * (1 - this.__color.v) - 7 + "px",
                        backgroundColor: this.__temp.toHexString(),
                        border: this.__field_knob_border + "rgb(" + i + "," + i + "," + i + ")"
                    }), this.__hue_knob.style.marginTop = 100 * (1 - this.__color.h / 360) + "px", this.__temp.s = 1, this.__temp.v = 1, c(this.__saturation_field, "left", "#fff", this.__temp.toHexString()), this.__input.value = this.__color.toString(), S.extend(this.__input.style, {
                        backgroundColor: this.__color.toHexString(),
                        color: "rgb(" + i + "," + i + "," + i + ")",
                        textShadow: this.__input_textShadow + "rgba(" + n + "," + n + "," + n + ",.7)"
                    })
                }
            }]), e
        }(),
        tt = ["-moz-", "-o-", "-webkit-", "-ms-", ""],
        et = {
            load: function(t, e) {
                var i = e || document,
                    n = i.createElement("link");
                n.type = "text/css", n.rel = "stylesheet", n.href = t, i.getElementsByTagName("head")[0].appendChild(n)
            },
            inject: function(t, e) {
                var i = e || document,
                    n = document.createElement("style");
                n.type = "text/css", n.innerHTML = t;
                var r = i.getElementsByTagName("head")[0];
                try {
                    r.appendChild(n)
                } catch (t) {}
            }
        },
        it = function(t, e) {
            var i = t[e];
            return S.isArray(arguments[2]) || S.isObject(arguments[2]) ? new q(t, e, arguments[2]) : S.isNumber(i) ? S.isNumber(arguments[2]) && S.isNumber(arguments[3]) ? S.isNumber(arguments[4]) ? new J(t, e, arguments[2], arguments[3], arguments[4]) : new J(t, e, arguments[2], arguments[3]) : S.isNumber(arguments[4]) ? new Q(t, e, {
                min: arguments[2],
                max: arguments[3],
                step: arguments[4]
            }) : new Q(t, e, {
                min: arguments[2],
                max: arguments[3]
            }) : S.isString(i) ? new W(t, e) : S.isFunction(i) ? new Z(t, e, "") : S.isBoolean(i) ? new Y(t, e) : null
        },
        nt = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
            setTimeout(t, 1e3 / 60)
        },
        rt = function() {
            function t() {
                D(this, t), this.backgroundElement = document.createElement("div"), S.extend(this.backgroundElement.style, {
                    backgroundColor: "rgba(0,0,0,0.8)",
                    top: 0,
                    left: 0,
                    display: "none",
                    zIndex: "1000",
                    opacity: 0,
                    WebkitTransition: "opacity 0.2s linear",
                    transition: "opacity 0.2s linear"
                }), H.makeFullscreen(this.backgroundElement), this.backgroundElement.style.position = "fixed", this.domElement = document.createElement("div"), S.extend(this.domElement.style, {
                    position: "fixed",
                    display: "none",
                    zIndex: "1001",
                    opacity: 0,
                    WebkitTransition: "-webkit-transform 0.2s ease-out, opacity 0.2s linear",
                    transition: "transform 0.2s ease-out, opacity 0.2s linear"
                }), document.body.appendChild(this.backgroundElement), document.body.appendChild(this.domElement);
                var e = this;
                H.bind(this.backgroundElement, "click", function() {
                    e.hide()
                })
            }
            return P(t, [{
                key: "show",
                value: function() {
                    var t = this;
                    this.backgroundElement.style.display = "block", this.domElement.style.display = "block", this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)", this.layout(), S.defer(function() {
                        t.backgroundElement.style.opacity = 1, t.domElement.style.opacity = 1, t.domElement.style.webkitTransform = "scale(1)"
                    })
                }
            }, {
                key: "hide",
                value: function() {
                    var t = this,
                        e = function e() {
                            t.domElement.style.display = "none", t.backgroundElement.style.display = "none", H.unbind(t.domElement, "webkitTransitionEnd", e), H.unbind(t.domElement, "transitionend", e), H.unbind(t.domElement, "oTransitionEnd", e)
                        };
                    H.bind(this.domElement, "webkitTransitionEnd", e), H.bind(this.domElement, "transitionend", e), H.bind(this.domElement, "oTransitionEnd", e), this.backgroundElement.style.opacity = 0, this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)"
                }
            }, {
                key: "layout",
                value: function() {
                    this.domElement.style.left = window.innerWidth / 2 - H.getWidth(this.domElement) / 2 + "px", this.domElement.style.top = window.innerHeight / 2 - H.getHeight(this.domElement) / 2 + "px"
                }
            }]), t
        }(),
        ot = function(t) {
            if (t && "undefined" != typeof window) {
                var e = document.createElement("style");
                return e.setAttribute("type", "text/css"), e.innerHTML = t, document.head.appendChild(e), t
            }
        }(".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\n");
    et.inject(ot);
    var st = "Default",
        at = function() {
            try {
                return !!window.localStorage
            } catch (t) {
                return !1
            }
        }(),
        ct = void 0,
        ut = !0,
        lt = void 0,
        ht = !1,
        ft = [],
        dt = function t(e) {
            var i = this,
                n = e || {};
            this.domElement = document.createElement("div"), this.__ul = document.createElement("ul"), this.domElement.appendChild(this.__ul), H.addClass(this.domElement, "dg"), this.__folders = {}, this.__controllers = [], this.__rememberedObjects = [], this.__rememberedObjectIndecesToControllers = [], this.__listening = [], n = S.defaults(n, {
                closeOnTop: !1,
                autoPlace: !0,
                width: t.DEFAULT_WIDTH
            }), n = S.defaults(n, {
                resizable: n.autoPlace,
                hideable: n.autoPlace
            }), S.isUndefined(n.load) ? n.load = {
                preset: st
            } : n.preset && (n.load.preset = n.preset), S.isUndefined(n.parent) && n.hideable && ft.push(this), n.resizable = S.isUndefined(n.parent) && n.resizable, n.autoPlace && S.isUndefined(n.scrollable) && (n.scrollable = !0);
            var r = at && "true" === localStorage.getItem(m(this, "isLocal")),
                o = void 0,
                s = void 0;
            if (Object.defineProperties(this, {
                    parent: {
                        get: function() {
                            return n.parent
                        }
                    },
                    scrollable: {
                        get: function() {
                            return n.scrollable
                        }
                    },
                    autoPlace: {
                        get: function() {
                            return n.autoPlace
                        }
                    },
                    closeOnTop: {
                        get: function() {
                            return n.closeOnTop
                        }
                    },
                    preset: {
                        get: function() {
                            return i.parent ? i.getRoot().preset : n.load.preset
                        },
                        set: function(t) {
                            i.parent ? i.getRoot().preset = t : n.load.preset = t, E(this), i.revert()
                        }
                    },
                    width: {
                        get: function() {
                            return n.width
                        },
                        set: function(t) {
                            n.width = t, x(i, t)
                        }
                    },
                    name: {
                        get: function() {
                            return n.name
                        },
                        set: function(t) {
                            n.name = t, s && (s.innerHTML = n.name)
                        }
                    },
                    closed: {
                        get: function() {
                            return n.closed
                        },
                        set: function(e) {
                            n.closed = e, n.closed ? H.addClass(i.__ul, t.CLASS_CLOSED) : H.removeClass(i.__ul, t.CLASS_CLOSED), this.onResize(), i.__closeButton && (i.__closeButton.innerHTML = e ? t.TEXT_OPEN : t.TEXT_CLOSED)
                        }
                    },
                    load: {
                        get: function() {
                            return n.load
                        }
                    },
                    useLocalStorage: {
                        get: function() {
                            return r
                        },
                        set: function(t) {
                            at && (r = t, t ? H.bind(window, "unload", o) : H.unbind(window, "unload", o), localStorage.setItem(m(i, "isLocal"), t))
                        }
                    }
                }), S.isUndefined(n.parent)) {
                if (this.closed = n.closed || !1, H.addClass(this.domElement, t.CLASS_MAIN), H.makeSelectable(this.domElement, !1), at && r) {
                    i.useLocalStorage = !0;
                    var a = localStorage.getItem(m(this, "gui"));
                    a && (n.load = JSON.parse(a))
                }
                this.__closeButton = document.createElement("div"), this.__closeButton.innerHTML = t.TEXT_CLOSED, H.addClass(this.__closeButton, t.CLASS_CLOSE_BUTTON), n.closeOnTop ? (H.addClass(this.__closeButton, t.CLASS_CLOSE_TOP), this.domElement.insertBefore(this.__closeButton, this.domElement.childNodes[0])) : (H.addClass(this.__closeButton, t.CLASS_CLOSE_BOTTOM), this.domElement.appendChild(this.__closeButton)), H.bind(this.__closeButton, "click", function() {
                    i.closed = !i.closed
                })
            } else {
                void 0 === n.closed && (n.closed = !0);
                var c = document.createTextNode(n.name);
                H.addClass(c, "controller-name"), s = l(i, c);
                H.addClass(this.__ul, t.CLASS_CLOSED), H.addClass(s, "title"), H.bind(s, "click", function(t) {
                    return t.preventDefault(), i.closed = !i.closed, !1
                }), n.closed || (this.closed = !1)
            }
            n.autoPlace && (S.isUndefined(n.parent) && (ut && (lt = document.createElement("div"), H.addClass(lt, "dg"), H.addClass(lt, t.CLASS_AUTO_PLACE_CONTAINER), document.body.appendChild(lt), ut = !1), lt.appendChild(this.domElement), H.addClass(this.domElement, t.CLASS_AUTO_PLACE)), this.parent || x(i, n.width)), this.__resizeHandler = function() {
                i.onResizeDebounced()
            }, H.bind(window, "resize", this.__resizeHandler), H.bind(this.__ul, "webkitTransitionEnd", this.__resizeHandler), H.bind(this.__ul, "transitionend", this.__resizeHandler), H.bind(this.__ul, "oTransitionEnd", this.__resizeHandler), this.onResize(), n.resizable && y(this), o = function() {
                at && "true" === localStorage.getItem(m(i, "isLocal")) && localStorage.setItem(m(i, "gui"), JSON.stringify(i.getSaveObject()))
            }, this.saveToLocalStorageIfPossible = o, n.parent || function() {
                var t = i.getRoot();
                t.width += 1, S.defer(function() {
                    t.width -= 1
                })
            }()
        };
    dt.toggleHide = function() {
        ht = !ht, S.each(ft, function(t) {
            t.domElement.style.display = ht ? "none" : ""
        })
    }, dt.CLASS_AUTO_PLACE = "a", dt.CLASS_AUTO_PLACE_CONTAINER = "ac", dt.CLASS_MAIN = "main", dt.CLASS_CONTROLLER_ROW = "cr", dt.CLASS_TOO_TALL = "taller-than-window", dt.CLASS_CLOSED = "closed", dt.CLASS_CLOSE_BUTTON = "close-button", dt.CLASS_CLOSE_TOP = "close-top", dt.CLASS_CLOSE_BOTTOM = "close-bottom", dt.CLASS_DRAG = "drag", dt.DEFAULT_WIDTH = 245, dt.TEXT_CLOSED = "Close Controls", dt.TEXT_OPEN = "Open Controls", dt._keydownHandler = function(t) {
        "text" === document.activeElement.type || 72 !== t.which && 72 !== t.keyCode || dt.toggleHide()
    }, H.bind(window, "keydown", dt._keydownHandler, !1), S.extend(dt.prototype, {
        add: function(t, e) {
            return v(this, t, e, {
                factoryArgs: Array.prototype.slice.call(arguments, 2)
            })
        },
        addColor: function(t, e) {
            return v(this, t, e, {
                color: !0
            })
        },
        remove: function(t) {
            this.__ul.removeChild(t.__li), this.__controllers.splice(this.__controllers.indexOf(t), 1);
            var e = this;
            S.defer(function() {
                e.onResize()
            })
        },
        destroy: function() {
            if (this.parent) throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");
            this.autoPlace && lt.removeChild(this.domElement);
            var t = this;
            S.each(this.__folders, function(e) {
                t.removeFolder(e)
            }), H.unbind(window, "keydown", dt._keydownHandler, !1), h(this)
        },
        addFolder: function(t) {
            if (void 0 !== this.__folders[t]) throw new Error('You already have a folder in this GUI by the name "' + t + '"');
            var e = {
                name: t,
                parent: this
            };
            e.autoPlace = this.autoPlace, this.load && this.load.folders && this.load.folders[t] && (e.closed = this.load.folders[t].closed, e.load = this.load.folders[t]);
            var i = new dt(e);
            this.__folders[t] = i;
            var n = l(this, i.domElement);
            return H.addClass(n, "folder"), i
        },
        removeFolder: function(t) {
            this.__ul.removeChild(t.domElement.parentElement), delete this.__folders[t.name], this.load && this.load.folders && this.load.folders[t.name] && delete this.load.folders[t.name], h(t);
            var e = this;
            S.each(t.__folders, function(e) {
                t.removeFolder(e)
            }), S.defer(function() {
                e.onResize()
            })
        },
        open: function() {
            this.closed = !1
        },
        close: function() {
            this.closed = !0
        },
        onResize: function() {
            var t = this.getRoot();
            if (t.scrollable) {
                var e = H.getOffset(t.__ul).top,
                    i = 0;
                S.each(t.__ul.childNodes, function(e) {
                    t.autoPlace && e === t.__save_row || (i += H.getHeight(e))
                }), window.innerHeight - e - 20 < i ? (H.addClass(t.domElement, dt.CLASS_TOO_TALL), t.__ul.style.height = window.innerHeight - e - 20 + "px") : (H.removeClass(t.domElement, dt.CLASS_TOO_TALL), t.__ul.style.height = "auto")
            }
            t.__resize_handle && S.defer(function() {
                t.__resize_handle.style.height = t.__ul.offsetHeight + "px"
            }), t.__closeButton && (t.__closeButton.style.width = t.width + "px")
        },
        onResizeDebounced: S.debounce(function() {
            this.onResize()
        }, 50),
        remember: function() {
            if (S.isUndefined(ct) && ((ct = new rt).domElement.innerHTML = '<div id="dg-save" class="dg dialogue">\n\n  Here\'s the new load parameter for your <code>GUI</code>\'s constructor:\n\n  <textarea id="dg-new-constructor"></textarea>\n\n  <div id="dg-save-locally">\n\n    <input id="dg-local-storage" type="checkbox"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id="dg-local-explain">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>\'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n\n    </div>\n\n  </div>\n\n</div>'), this.parent) throw new Error("You can only call remember on a top level GUI.");
            var t = this;
            S.each(Array.prototype.slice.call(arguments), function(e) {
                0 === t.__rememberedObjects.length && b(t), -1 === t.__rememberedObjects.indexOf(e) && t.__rememberedObjects.push(e)
            }), this.autoPlace && x(this, this.width)
        },
        getRoot: function() {
            for (var t = this; t.parent;) t = t.parent;
            return t
        },
        getSaveObject: function() {
            var t = this.load;
            return t.closed = this.closed, this.__rememberedObjects.length > 0 && (t.preset = this.preset, t.remembered || (t.remembered = {}), t.remembered[this.preset] = w(this)), t.folders = {}, S.each(this.__folders, function(e, i) {
                t.folders[i] = e.getSaveObject()
            }), t
        },
        save: function() {
            this.load.remembered || (this.load.remembered = {}), this.load.remembered[this.preset] = w(this), f(this, !1), this.saveToLocalStorageIfPossible()
        },
        saveAs: function(t) {
            this.load.remembered || (this.load.remembered = {}, this.load.remembered[st] = w(this, !0)), this.load.remembered[t] = w(this), this.preset = t, _(this, t, !0), this.saveToLocalStorageIfPossible()
        },
        revert: function(t) {
            S.each(this.__controllers, function(e) {
                this.getRoot().load.remembered ? p(t || this.getRoot(), e) : e.setValue(e.initialValue), e.__onFinishChange && e.__onFinishChange.call(e, e.getValue())
            }, this), S.each(this.__folders, function(t) {
                t.revert(t)
            }), t || f(this.getRoot(), !1)
        },
        listen: function(t) {
            var e = 0 === this.__listening.length;
            this.__listening.push(t), e && A(this.__listening)
        },
        updateDisplay: function() {
            S.each(this.__controllers, function(t) {
                t.updateDisplay()
            }), S.each(this.__folders, function(t) {
                t.updateDisplay()
            })
        }
    });
    var pt = {
            Color: U,
            math: B,
            interpret: F
        },
        vt = {
            Controller: N,
            BooleanController: Y,
            OptionController: q,
            StringController: W,
            NumberController: K,
            NumberControllerBox: Q,
            NumberControllerSlider: J,
            FunctionController: Z,
            ColorController: $
        },
        mt = {
            dom: H
        },
        _t = {
            GUI: dt
        },
        gt = dt,
        bt = {
            color: pt,
            controllers: vt,
            dom: mt,
            gui: _t,
            GUI: gt
        };
    t.color = pt, t.controllers = vt, t.dom = mt, t.gui = _t, t.GUI = gt, t.default = bt, Object.defineProperty(t, "__esModule", {
        value: !0
    })
});

function setProperty(t, e, i) {
    var n = e.split(/[\.\[\]]/).filter(function(t) {
        return t.length > 0
    });
    var r = t;
    for (var o = 0; o < n.length - 1; ++o) {
        if (r[n[o]] === undefined) {
            r[n[o]] = {}
        }
        r = r[n[o]]
    }
    r[n[n.length - 1]] = i
}

function getStringFromUrl(t) {
    var e = new XMLHttpRequest;
    e.open("GET", t, false);
    e.send();
    return e.responseText
}
class CGFshader {
    constructor(t, e, i) {
        this.gl = t;
        this.uniforms = {};
        this.attributes = {};
        if (e != undefined && i != undefined) {
            this.init(e, i)
        }
        this.textureUnit = 0
    }
    init(t, e) {
        this.fragmentURL = e;
        this.vertexURL = t;
        var i = getStringFromUrl(e);
        var n = getStringFromUrl(t);
        var r = this.createShaderFromSource(WebGLRenderingContext.FRAGMENT_SHADER, i);
        var o = this.createShaderFromSource(WebGLRenderingContext.VERTEX_SHADER, n);
        this.compile_program(o, r)
    }
    createShaderFromSource(t, e) {
        var i = this.gl.createShader(t);
        this.gl.shaderSource(i, e);
        this.gl.compileShader(i);
        if (!this.gl.getShaderParameter(i, this.gl.COMPILE_STATUS)) {
            alert(this.gl.getShaderInfoLog(i));
            return null
        }
        return i
    }
    createUniformSetter(t, e, i, n) {
        var r = i.type;
        var o = i.size > 1 && i.name.substr(-3) === "[0]";
        if (r === t.FLOAT && o) {
            return function(e) {
                t.uniform1fv(n, e)
            }
        }
        if (r === t.FLOAT) {
            return function(e) {
                t.uniform1f(n, e)
            }
        }
        if (r === t.FLOAT_VEC2) {
            return function(e) {
                t.uniform2fv(n, e)
            }
        }
        if (r === t.FLOAT_VEC3) {
            return function(e) {
                t.uniform3fv(n, e)
            }
        }
        if (r === t.FLOAT_VEC4) {
            return function(e) {
                t.uniform4fv(n, e)
            }
        }
        if (r === t.INT && o) {
            return function(e) {
                t.uniform1iv(n, e)
            }
        }
        if (r === t.INT) {
            return function(e) {
                t.uniform1i(n, e)
            }
        }
        if (r === t.INT_VEC2) {
            return function(e) {
                t.uniform2iv(n, e)
            }
        }
        if (r === t.INT_VEC3) {
            return function(e) {
                t.uniform3iv(n, e)
            }
        }
        if (r === t.INT_VEC4) {
            return function(e) {
                t.uniform4iv(n, e)
            }
        }
        if (r === t.BOOL) {
            return function(e) {
                t.uniform1i(n, e)
            }
        }
        if (r === t.BOOL_VEC2) {
            return function(e) {
                t.uniform2iv(n, e)
            }
        }
        if (r === t.BOOL_VEC3) {
            return function(e) {
                t.uniform3iv(n, e)
            }
        }
        if (r === t.BOOL_VEC4) {
            return function(e) {
                t.uniform4iv(n, e)
            }
        }
        if (r === t.FLOAT_MAT2) {
            return function(e) {
                t.uniformMatrix2fv(n, false, e)
            }
        }
        if (r === t.FLOAT_MAT3) {
            return function(e) {
                t.uniformMatrix3fv(n, false, e)
            }
        }
        if (r === t.FLOAT_MAT4) {
            return function(e) {
                t.uniformMatrix4fv(n, false, e)
            }
        }
        if ((r === t.SAMPLER_2D || r === t.SAMPLER_CUBE) && o) {
            var s = [];
            for (var a = 0; a < info.size; ++a) {
                s.push(textureUnit++)
            }
            return function(e, i) {
                return function(e) {
                    t.uniform1iv(n, i);
                    e.forEach(function(t, e) {})
                }
            }(this.getBindPointForSamplerType(t, r), s)
        }
        if (r === t.SAMPLER_2D || r === t.SAMPLER_CUBE) {
            return function(e) {
                t.uniform1i(n, e)
            }
        }
        throw "unknown type: 0x" + r.toString(16)
    }
    getBindPointForSamplerType(t, e) {
        if (e === t.SAMPLER_2D) return t.TEXTURE_2D;
        if (e === t.SAMPLER_CUBE) return t.TEXTURE_CUBE_MAP
    }
    createAttributeSetter(t, e) {
        return function(i) {
            t.bindBuffer(t.ARRAY_BUFFER, i.buffer);
            t.enableVertexAttribArray(e);
            t.vertexAttribPointer(e, i.numComponents || i.size, i.type || t.FLOAT, i.normalize || false, i.stride || 0, i.offset || 0)
        }
    }
    compile_program(t, e) {
        var i = this.gl;
        var n = i.createProgram();
        i.attachShader(n, t);
        i.attachShader(n, e);
        try {
            i.bindAttribLocation(n, 0, "aVertexPosition")
        } catch (t) {
            console.log("CGFshader: could not bind 'aVertexPosition' to location 0. Do you have this attribute in your shader?")
        }
        i.linkProgram(n);
        if (!i.getProgramParameter(n, i.LINK_STATUS)) {
            console.log(i.getProgramInfoLog(n));
            alert("Could not initialise shaders")
        }
        this.program = n;
        i.useProgram(n);
        this.uniforms = {};
        this.uniformSetters = {};
        var r = i.getProgramParameter(n, i.ACTIVE_UNIFORMS);
        for (var o = 0; o < r; ++o) {
            var s = i.getActiveUniform(n, o);
            var a = i.getUniformLocation(n, s.name);
            setProperty(this.uniforms, s.name, a);
            setProperty(this.uniformSetters, s.name, this.createUniformSetter(i, n, s, a))
        }
        this.attributes = {};
        this.attributeSetters = {};
        var c = i.getProgramParameter(n, i.ACTIVE_ATTRIBUTES);
        for (var o = 0; o < c; ++o) {
            var u = i.getActiveAttrib(n, o);
            var a = i.getAttribLocation(n, u.name);
            setProperty(this.attributes, u.name, a);
            setProperty(this.attributeSetters, u.name, this.createAttributeSetter(i, a))
        }
    }
    update() {}
    bind() {
        this.gl.useProgram(this.program)
    }
    unbind() {
        if (!this.warnedunbind) {
            console.warn("CGFshader.unbind should not be used. Please review your code and remove direct shader binding/unbinding and use CGFscene.setActiveShader() instead.");
            this.warnedunbind = true
        }
    }
    applyUniforms(t) {
        var e = this;
        Object.keys(t).forEach(function(i) {
            var n = e.uniformSetters[i];
            if (n) {
                n(t[i])
            } else {
                console.log("Attempt to set value for uniform '" + i + "' with no setter function (does it exist in the shader?).")
            }
        })
    }
    getUniformsValues() {
        var t = this;
        var e = function(i, n) {
            for (var r in i) {
                var o;
                if (typeof i[r] !== "function") {
                    if (!(i[r] instanceof WebGLUniformLocation)) {
                        o = {};
                        e(i[r], o)
                    } else o = t.gl.getUniform(t.program, i[r]);
                    n[r] = o
                }
            }
        };
        var i = {};
        e(this.uniforms, i);
        return i
    }
    setUniformsValues(t) {
        this.bind();
        var e = this;
        var i = function(t, e) {
            for (var n in t) {
                try {
                    if (typeof e[n] != "undefined")
                        if (typeof t[n] !== "function") i(t[n], e[n]);
                        else t[n](e[n])
                } catch (t) {
                    console.log("Problem setting uniform " + n)
                }
            }
        };
        i(this.uniformSetters, t)
    }
    importUniforms(t) {
        t.bind();
        var e = t.getUniformsValues();
        this.bind();
        this.setUniformsValues(e)
    }
    getUniformValue(t) {
        return this.gl.getUniform(this.program, this.uniforms[t])
    }
}
class CGFtexture {
    constructor(t, e) {
        this.scene = t;
        this.texID = -1;
        this.gl = t.gl;
        this.image = new Image;
        this.image.crossOrigin = "anonymous";
        var i = this;
        this.image.onload = function() {
            console.log("Texture loaded: " + i.image.src);
            i.texID = i.gl.createTexture();
            i.gl.bindTexture(i.gl.TEXTURE_2D, i.texID);
            i.gl.texImage2D(i.gl.TEXTURE_2D, 0, i.gl.RGBA, i.gl.RGBA, i.gl.UNSIGNED_BYTE, i.image);
            i.gl.texParameteri(i.gl.TEXTURE_2D, i.gl.TEXTURE_MAG_FILTER, i.gl.LINEAR);
            if (isPowerOfTwo(i.image.width) && isPowerOfTwo(i.image.height)) {
                i.gl.texParameteri(i.gl.TEXTURE_2D, i.gl.TEXTURE_MIN_FILTER, i.gl.LINEAR)
            } else {
                i.gl.texParameteri(i.gl.TEXTURE_2D, i.gl.TEXTURE_MIN_FILTER, i.gl.LINEAR);
                i.gl.texParameteri(i.gl.TEXTURE_2D, i.gl.TEXTURE_WRAP_S, i.gl.CLAMP_TO_EDGE);
                i.gl.texParameteri(i.gl.TEXTURE_2D, i.gl.TEXTURE_WRAP_T, i.gl.CLAMP_TO_EDGE)
            }
        };
        this.image.src = e
    }
    bind(t) {
        var e = t || 0;
        if (this.texID != -1) {
            this.gl.activeTexture(this.gl.TEXTURE0 + e);
            this.gl.bindTexture(this.gl.TEXTURE_2D, this.texID);
            if (e == 0) this.scene.activeTexture = this;
            return true
        } else {
            if (e == 0) this.scene.activeTexture = null;
            return false
        }
    }
    unbind(t) {
        var e = t || 0;
        this.gl.activeTexture(this.gl.TEXTURE0 + e);
        this.gl.bindTexture(this.gl.TEXTURE_2D, null);
        if (e == 0) this.scene.activeTexture = null
    }
}

function isPowerOfTwo(t) {
    return (t & t - 1) == 0
}
class CGFappearance {
    constructor(t) {
        this.scene = t;
        this.ambient = vec4.fromValues(.2, .2, .2, 1);
        this.diffuse = vec4.fromValues(.5, .5, .5, 1);
        this.specular = vec4.fromValues(.5, .5, .5, 1);
        this.shininess = 10;
        this.emission = vec4.fromValues(0, 0, 0, 1);
        this.texture = null
    }
    setAmbient(t, e, i, n) {
        vec4.set(this.ambient, t, e, i, n)
    }
    setDiffuse(t, e, i, n) {
        vec4.set(this.diffuse, t, e, i, n)
    }
    setSpecular(t, e, i, n) {
        vec4.set(this.specular, t, e, i, n)
    }
    setShininess(t) {
        this.shininess = t
    }
    setEmission(t, e, i, n) {
        vec4.set(this.emission, t, e, i, n)
    }
    setColor(t, e, i, n) {
        this.setAmbient(t, e, i, n);
        this.setDiffuse(t, e, i, n)
    }
    apply() {
        this.scene.setAmbient(this.ambient[0], this.ambient[1], this.ambient[2], this.ambient[3]);
        this.scene.setDiffuse(this.diffuse[0], this.diffuse[1], this.diffuse[2], this.diffuse[3]);
        this.scene.setSpecular(this.specular[0], this.specular[1], this.specular[2], this.specular[3]);
        this.scene.setShininess(this.shininess);
        this.scene.setEmission(this.emission[0], this.emission[1], this.emission[2], this.emission[3]);
        if (this.texture) {
            if (this.texture.bind() && this.wrapS && this.wrapT) {
                var t = this.scene.gl;
                t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, this.wrapS);
                t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, this.wrapT);
                this.scene.activeTexture = this.texture
            }
        } else this.scene.activeTexture = null
    }
    setTexture(t) {
        this.texture = t
    }
    loadTexture(t) {
        this.texture = new CGFtexture(this.scene, t)
    }
    setTextureWrap(t, e) {
        this.wrapS = this.scene.gl[t];
        this.wrapT = this.scene.gl[e]
    }
}
class CGFobject {
    constructor(t) {
        this.scene = t;
        this.inited = false;
        this.pickingEnabled = false;
        this.primitiveType = this.scene.gl.TRIANGLES;
        this.normalVizEnabled = false;
        this.normalVizInited = false
    }
    display() {
        this.drawElements(this.primitiveType);
        if (this.normalVizEnabled) this.drawNormalViz()
    }
    initGLBuffers() {
        var t = this.scene.gl;
        this.vertsBuffer = t.createBuffer();
        t.bindBuffer(t.ARRAY_BUFFER, this.vertsBuffer);
        t.bufferData(t.ARRAY_BUFFER, new Float32Array(this.vertices), t.STATIC_DRAW);
        if (!this.normals) this.normals = Array.apply(null, new Array(this.vertices.length)).map(function() {
            return 1
        });
        this.normsBuffer = t.createBuffer();
        t.bindBuffer(t.ARRAY_BUFFER, this.normsBuffer);
        t.bufferData(t.ARRAY_BUFFER, new Float32Array(this.normals), t.STATIC_DRAW);
        this.indicesBuffer = t.createBuffer();
        t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indicesBuffer);
        t.bufferData(t.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.indices), t.STATIC_DRAW);
        if (!this.texCoords) this.hasTexCoords = false;
        else {
            this.hasTexCoords = true;
            this.texCoordsBuffer = t.createBuffer();
            t.bindBuffer(t.ARRAY_BUFFER, this.texCoordsBuffer);
            t.bufferData(t.ARRAY_BUFFER, new Float32Array(this.texCoords), t.STATIC_DRAW)
        }
        this.indicesBuffer.numValues = this.indices.length;
        t.bindBuffer(t.ARRAY_BUFFER, null);
        t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, null);
        this.inited = true
    }
    updateTexCoordsGLBuffers() {
        var t = this.scene.gl;
        if (!this.texCoords) this.hasTexCoords = false;
        else {
            this.hasTexCoords = true;
            if (!this.texCoordsBuffer) this.texCoordsBuffer = t.createBuffer();
            t.bindBuffer(t.ARRAY_BUFFER, this.texCoordsBuffer);
            t.bufferData(t.ARRAY_BUFFER, new Float32Array(this.texCoords), t.STATIC_DRAW)
        }
    }
    initBuffers() {
        this.vertices = [-.5, -.5, 0, .5, -.5, 0, -.5, .5, 0, .5, .5, 0];
        this.indices = [0, 1, 2, 3];
        this.normals = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1];
        this.primitiveType = this.scene.gl.TRIANGLE_STRIP;
        this.initGLBuffers()
    }
    drawElements(t) {
        var e = this.scene.activeShader;
        var i = this.scene.gl;
        i.uniformMatrix4fv(e.uniforms.uMVMatrix, false, this.scene.activeMatrix);
        i.enableVertexAttribArray(e.attributes.aVertexPosition);
        i.bindBuffer(i.ARRAY_BUFFER, this.vertsBuffer);
        i.vertexAttribPointer(e.attributes.aVertexPosition, 3, i.FLOAT, false, 0, 0);
        if (e.uniforms.uNMatrix) this.scene.updateInverseMatrix();
        i.uniformMatrix4fv(e.uniforms.uNMatrix, false, this.scene.invMatrix);
        if (e.attributes.aVertexNormal) {
            i.enableVertexAttribArray(e.attributes.aVertexNormal);
            i.bindBuffer(i.ARRAY_BUFFER, this.normsBuffer);
            i.vertexAttribPointer(e.attributes.aVertexNormal, 3, i.FLOAT, false, 0, 0)
        }
        var n = this.scene.texturesEnabled;
        if (e.attributes.aTextureCoord)
            if (this.hasTexCoords && n && this.scene.activeTexture) {
                i.enableVertexAttribArray(e.attributes.aTextureCoord);
                i.bindBuffer(i.ARRAY_BUFFER, this.texCoordsBuffer);
                i.vertexAttribPointer(e.attributes.aTextureCoord, 2, i.FLOAT, false, 0, 0)
            } else {
                this.scene.enableTextures(false);
                i.disableVertexAttribArray(e.attributes.aTextureCoord)
            }
        i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, this.indicesBuffer);
        i.drawElements(t, this.indicesBuffer.numValues, i.UNSIGNED_SHORT, 0);
        i.bindBuffer(i.ARRAY_BUFFER, null);
        i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, null);
        this.scene.enableTextures(n)
    }
    initNormalVizBuffers(t = 1) {
        this.normalVerts = [];
        this.normalIndices = [];
        for (var e = 0; e < this.normals.length; e += 3) {
            this.normalVerts.push(this.vertices[e], this.vertices[e + 1], this.vertices[e + 2]);
            this.normalVerts.push(this.vertices[e] + this.normals[e] * t, this.vertices[e + 1] + this.normals[e + 1] * t, this.vertices[e + 2] + this.normals[e + 2] * t);
            this.normalIndices.push(2 * (e / 3), 2 * (e / 3) + 1)
        }
        var i = this.scene.gl;
        this.nVertsBuffer = i.createBuffer();
        i.bindBuffer(i.ARRAY_BUFFER, this.nVertsBuffer);
        i.bufferData(i.ARRAY_BUFFER, new Float32Array(this.normalVerts), i.STATIC_DRAW);
        this.nIndicesBuffer = i.createBuffer();
        i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, this.nIndicesBuffer);
        i.bufferData(i.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.normalIndices), i.STATIC_DRAW);
        this.nIndicesBuffer.numValues = this.normalIndices.length;
        i.bindBuffer(i.ARRAY_BUFFER, null);
        i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, null);
        this.normalVizInited = true
    }
    drawNormalViz() {
        var t = this.scene.activeShader;
        var e = this.scene.normalsShader;
        this.scene.setActiveShaderSimple(e);
        var i = this.scene.gl;
        i.uniformMatrix4fv(e.uniforms.uMVMatrix, false, this.scene.activeMatrix);
        i.enableVertexAttribArray(e.attributes.aVertexPosition);
        i.bindBuffer(i.ARRAY_BUFFER, this.nVertsBuffer);
        i.vertexAttribPointer(e.attributes.aVertexPosition, 3, i.FLOAT, false, 0, 0);
        i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, this.nIndicesBuffer);
        i.drawElements(this.scene.gl.LINES, this.nIndicesBuffer.numValues, i.UNSIGNED_SHORT, 0);
        i.bindBuffer(i.ARRAY_BUFFER, null);
        i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, null);
        this.scene.setActiveShaderSimple(t)
    }
    enableNormalViz() {
        if (!this.normalVizInited) this.initNormalVizBuffers();
        this.normalVizEnabled = true
    }
    disableNormalViz() {
        this.normalVizEnabled = false
    }
}
class CGFaxis extends CGFobject {
    constructor(t, e, i) {
        super(t);
        this.length = 5;
        this.thickness = .05;
        switch (arguments.length) {
            case 3:
                this.thickness = i;
            case 2:
                this.length = e
        }
        this.HALF_PI = 3.1415926536 / 2;
        this.pyr = new CGFquadPyramid(t, this.length - this.thickness / 2, this.thickness)
    }
    display() {
        this.scene.pushMatrix();
        this.scene.activeTexture = null;
        this.scene.setShininess(100);
        this.scene.setAmbient(1, 1, 1, 1);
        this.scene.pushMatrix();
        this.scene.translate(0, 0, this.thickness / 2);
        this.scene.setDiffuse(0, 0, 1, 1);
        this.scene.setSpecular(0, 0, 1, 1);
        this.pyr.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.rotate(this.HALF_PI, 0, 1, 0);
        this.scene.translate(0, 0, this.thickness / 2);
        this.scene.setDiffuse(1, 0, 0, 1);
        this.scene.setSpecular(1, 0, 0, 1);
        this.pyr.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.rotate(-this.HALF_PI, 1, 0, 0);
        this.scene.translate(0, 0, this.thickness / 2);
        this.scene.setDiffuse(0, 1, 0, 1);
        this.scene.setSpecular(0, 1, 0, 1);
        this.pyr.display();
        this.scene.popMatrix();
        this.scene.popMatrix()
    }
}
class CGFquadPyramid extends CGFobject {
    constructor(t, e, i) {
        super(t);
        this.halfSide = i / 2;
        this.height = e;
        this.initBuffers()
    }
    initBuffers() {
        this.vertices = [-this.halfSide, -this.halfSide, 0, this.halfSide, -this.halfSide, 0, -this.halfSide, this.halfSide, 0, this.halfSide, this.halfSide, 0, 0, 0, this.height];
        this.indices = [2, 1, 0, 1, 2, 3, 0, 1, 4, 1, 3, 4, 2, 0, 4, 3, 2, 4];
        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers()
    }
}
class CGFinterface {
    constructor() {
        this.mouse = vec2.create();
        this.prevMouse = vec2.create();
        this.mouseButtons = [false, false, false];
        this.activeCamera = null;
        this.ctrlKey = false
    }
    init(t) {
        console.log("Initializing Interface");
        this.scene = t.scene;
        var e = t.gl.canvas;
        e.tabIndex = 1;
        var i = this;
        e.oncontextmenu = function(t) {
            return false
        };
        e.addEventListener("mousedown", function(t) {
            t.preventDefault();
            t.stopPropagation();
            i.processMouseDown(t);
            i.scene.onPick(t)
        });
        e.addEventListener("mouseup", function(t) {
            t.preventDefault();
            t.stopPropagation();
            i.processMouseUp(t)
        });
        e.addEventListener("mousemove", function(t) {
            t.preventDefault();
            t.stopPropagation();
            i.processMouseMove(t)
        });
        e.addEventListener("touchstart", function(t) {
            t.preventDefault();
            t.stopPropagation();
            i.processTouchStart(t)
        });
        e.addEventListener("touchend", function(t) {
            t.preventDefault();
            t.stopPropagation();
            i.processTouchEnd(t);
            i.scene.onPick(t)
        });
        e.addEventListener("touchmove", function(t) {
            t.preventDefault();
            t.stopPropagation();
            i.processTouchMove(t)
        });
        document.onkeypress = function(t) {
            i.processKeyboard(t)
        };
        document.onkeydown = function(t) {
            i.processKeyDown(t)
        };
        document.onkeyup = function(t) {
            i.processKeyUp(t)
        };
        return true
    }
    update() {}
    processKeyboard(t) {
        console.log("keypress")
    }
    processKeyDown(t) {
        console.log("keydown")
    }
    processKeyUp(t) {
        console.log("keyup")
    }
    setActiveCamera(t) {
        this.activeCamera = t
    }
    processMouseDown(t) {
        var e = t.which;
        this.mouseButtons[e - 1] = true;
        this.mouse[0] = t.pageX;
        this.mouse[1] = t.pageY;
        this.prevMouse[0] = this.mouse[0];
        this.prevMouse[1] = this.mouse[1];
        this.ctrlKey = t.ctrlKey
    }
    processMouseUp(t) {
        var e = t.which;
        this.mouseButtons[e - 1] = false;
        this.prevMouse[0] = this.mouse[0];
        this.prevMouse[1] = this.mouse[1];
        this.mouse[0] = t.pageX;
        this.mouse[1] = t.pageY;
        this.ctrlKey = t.ctrlKey
    }
    processMouseMove(t) {
        this.prevMouse[0] = this.mouse[0];
        this.prevMouse[1] = this.mouse[1];
        this.mouse[0] = t.pageX;
        this.mouse[1] = t.pageY;
        this.processMouse()
    }
    processMouse() {
        if (this.activeCamera) {
            var t = vec2.subtract(vec2.create(), this.mouse, this.prevMouse);
            if (this.mouseButtons[0]) {
                if (this.ctrlKey) {
                    this.activeCamera.zoom(t[1] * .05)
                } else {
                    this.activeCamera.orbit(CGFcameraAxisID.X, t[1] * Math.PI / 180);
                    this.activeCamera.orbit(CGFcameraAxisID.Y, -t[0] * Math.PI / 180)
                }
            } else if (this.mouseButtons[2]) {
                this.activeCamera.pan([-t[0] * .05, t[1] * .05, 0])
            } else if (this.mouseButtons[1]) {
                this.activeCamera.zoom(t[1] * .05)
            }
        }
    }
    processTouchStart(t) {
        this.touches = t.targetTouches;
        this.prevTouches = this.touches
    }
    processTouchEnd(t) {
        this.prevTouches = this.touches;
        this.touches = t.targetTouches
    }
    processTouchMove(t) {
        this.prevTouches = this.touches;
        this.touches = t.targetTouches;
        this.processTouches()
    }
    processTouches() {
        if (this.activeCamera) {
            if (this.touches.length == 1) {
                var t = [this.prevTouches[0].pageX, this.prevTouches[0].pageY];
                var e = [this.touches[0].pageX, this.touches[0].pageY];
                var i = vec2.subtract(vec2.create(), e, t);
                this.activeCamera.orbit(CGFcameraAxisID.X, i[1] * Math.PI / 180);
                this.activeCamera.orbit(CGFcameraAxisID.Y, -i[0] * Math.PI / 180)
            } else {
                var n = [this.prevTouches[0].pageX, this.prevTouches[0].pageY];
                var r = [this.touches[0].pageX, this.touches[0].pageY];
                if (this.touches.length == 2) {
                    var o = [this.prevTouches[1].pageX, this.prevTouches[1].pageY];
                    var s = [this.touches[1].pageX, this.touches[1].pageY];
                    var a = this.distanceBetweenPoints(n, o);
                    var c = this.distanceBetweenPoints(r, s);
                    var u = c - a;
                    this.activeCamera.zoom(u * .05)
                } else {
                    var i = vec2.subtract(vec2.create(), r, n);
                    this.activeCamera.pan([-i[0] * .05, i[1] * .05, 0])
                }
            }
        }
    }
    distanceBetweenPoints(t, e) {
        return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]))
    }
}
class CGFscene {
    constructor() {}
    init(t) {
        console.log("Initializing Scene");
        this.gl = t.gl;
        this.pMatrix = mat4.create();
        this.invMatrix = mat4.create();
        this.activeMatrix = mat4.create();
        this.matrixStack = new Array;
        this.picksRequests = [];
        this.pickData = [];
        this.pickIds = [];
        this.pickResults = [];
        this.pickMode = false;
        this.normalsShader = new CGFshader(this.gl, "../lib/CGF/shaders/viz/normals-vertex.glsl", "../lib/CGF/shaders/viz/normals-fragment.glsl");
        this.pickShader = new CGFshader(this.gl, "../lib/CGF/shaders/picking/vertex.glsl", "../lib/CGF/shaders/picking/fragment.glsl");
        this.defaultShader = new CGFshader(this.gl, "../lib/CGF/shaders/Gouraud/textured/multiple_light-vertex.glsl", "../lib/CGF/shaders/Gouraud/textured/fragment.glsl");
        this.shader = {
            bind: function() {
                console.error("direct shader bind deprecated, use CGFscene.setActiveShader() instead, and only when you need to change shader. (" + arguments.callee.caller.name + ")")
            },
            unbind: function() {
                console.error("direct shader unbind deprecated, please remove. (" + arguments.callee.caller.name + ")")
            }
        };
        this.activeShader = this.defaultShader;
        this.activeShader.bind();
        this.gl.activeTexture(this.gl.TEXTURE0);
        this.gl.uniform1i(this.activeShader.uniforms.uSampler, 0);
        this.enableTextures(false);
        this.activeTexture = null;
        this.lights = new Array;
        var e = 0;
        for (var i in this.activeShader.uniforms.uLight) {
            this.lights[e] = new CGFlight(this, e);
            this.lights[e].disable();
            this.lights[e].update();
            e++
        }
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.setGlobalAmbientLight(.1, .1, .1, 1);
        this.lastUpdate = 0;
        this.updatePeriod = 0;
        return true
    }
    enableTextures(t) {
        this.activeShader.bind();
        this.texturesEnabled = t;
        this.gl.uniform1i(this.activeShader.uniforms.uUseTexture, t)
    }
    loadIdentity() {
        mat4.identity(this.activeMatrix)
    }
    pushMatrix() {
        this.matrixStack.push(this.activeMatrix);
        this.activeMatrix = mat4.clone(this.activeMatrix)
    }
    popMatrix() {
        this.activeMatrix = this.matrixStack.pop()
    }
    multMatrix(t) {
        mat4.multiply(this.activeMatrix, this.activeMatrix, t)
    }
    getMatrix() {
        return mat4.clone(this.activeMatrix)
    }
    setMatrix(t) {
        this.activeMatrix = mat4.clone(t)
    }
    translate(t, e, i) {
        mat4.translate(this.activeMatrix, this.activeMatrix, [t, e, i])
    }
    rotate(t, e, i, n) {
        mat4.rotate(this.activeMatrix, this.activeMatrix, t, [e, i, n])
    }
    scale(t, e, i) {
        mat4.scale(this.activeMatrix, this.activeMatrix, [t, e, i])
    }
    setEmission(t, e, i, n) {
        this.activeShader.setUniformsValues({
            uFrontMaterial: {
                emission: [t, e, i, n]
            }
        })
    }
    setAmbient(t, e, i, n) {
        this.activeShader.setUniformsValues({
            uFrontMaterial: {
                ambient: [t, e, i, n]
            }
        })
    }
    setDiffuse(t, e, i, n) {
        this.activeShader.setUniformsValues({
            uFrontMaterial: {
                diffuse: [t, e, i, n]
            }
        })
    }
    setSpecular(t, e, i, n) {
        this.activeShader.setUniformsValues({
            uFrontMaterial: {
                specular: [t, e, i, n]
            }
        })
    }
    setShininess(t) {
        this.activeShader.setUniformsValues({
            uFrontMaterial: {
                shininess: t
            }
        })
    }
    getProjectionMatrix() {
        return this.camera.getProjectionMatrix(this.gl.canvas.width, this.gl.canvas.height)
    }
    updateProjectionMatrix() {
        this.pMatrix = this.getProjectionMatrix();
        this.activeShader.setUniformsValues({
            uPMatrix: this.pMatrix
        })
    }
    applyViewMatrix() {
        mat4.mul(this.activeMatrix, this.activeMatrix, this.camera.getViewMatrix())
    }
    update(t) {}
    setUpdatePeriod(t) {
        this.updatePeriod = t
    }
    checkUpdate() {
        if (this.updatePeriod > 0) {
            var t = Date.now();
            if (t - this.lastUpdate >= this.updatePeriod) {
                this.update(t);
                this.lastUpdate = t
            }
        }
    }
    display() {
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        this.gl.clearColor(0, 0, 0, 1)
    }
    displayWithPick() {
        var t = this.getNextPickRequest();
        if (t != null) {
            var e = this.activeShader;
            var i = t[0][0];
            var n = t[0][1];
            this.setActiveShader(this.pickShader);
            var r = new Uint8Array(4);
            this.pickMode = true;
            var o = this.texturesEnabled;
            this.texturesEnabled = false;
            this.display();
            this.texturesEnabled = o;
            this.pickMode = false;
            this.gl.readPixels(i, n, 1, 1, this.gl.RGBA, this.gl.UNSIGNED_BYTE, r);
            if (r != null && r != undefined) {
                this.pickResults.splice(0, this.pickResults.length);
                var s = this.getPickData(r);
                if (s != null) {
                    this.pickResults.push([s[0], s[1]])
                } else {
                    this.pickResults.push([undefined, undefined])
                }
            }
            this.setActiveShader(e)
        }
        this.display()
    }
    setGlobalAmbientLight(t, e, i, n) {
        this.activeShader.bind();
        this.gl.uniform4f(this.activeShader.uniforms.uGlobalAmbient, t, e, i, n)
    }
    onPick(t) {
        if (this.pickEnabled == false) return;
        var e = t.clientX,
            i = t.clientY;
        var n = t.target.getBoundingClientRect();
        if (n.left <= e && e < n.right && n.top <= i && i < n.bottom) {
            var r = e - n.left;
            var o = n.bottom - i;
            this.picksRequests.push([r, o])
        }
    }
    getNextPickRequest() {
        if (this.picksRequests.length == 0) return null;
        return this.picksRequests.splice(0, 1)
    }
    registerForPick(t, e) {
        if (this.pickMode) {
            var i = this.intToRGB(t);
            this.pickData[t] = [e, t, i];
            this.gl.uniform4fv(this.pickShader.uniforms.uPickColor, i)
        }
    }
    clearPickRegistration() {
        if (this.pickMode) this.gl.uniform4fv(this.pickShader.uniforms.uPickColor, [0, 0, 0, 0])
    }
    intToRGB(t) {
        var e = t >> 16;
        var i = t % 65536 >> 8;
        var n = t % 256;
        return [e / 255, i / 255, n / 255, 1]
    }
    getPickData(t) {
        var e = 65536 * t[0] + 256 * t[1] + t[2];
        return this.pickData[e]
    }
    setPickEnabled(t) {
        this.pickEnabled = t
    }
    setActiveShader(t) {
        if (this.pickMode == false) {
            t.importUniforms(this.activeShader);
            this.activeShader = t;
            this.activeShader.bind()
        }
        return
    }
    setActiveShaderSimple(t) {
        if (this.pickMode == false) {
            var e = this.activeShader.getUniformValue("uPMatrix");
            this.activeShader = t;
            this.activeShader.bind();
            t.setUniformsValues({
                uPMatrix: e
            })
        }
        return
    }
    updateInverseMatrix() {
        mat4.invert(this.invMatrix, this.activeMatrix);
        mat4.transpose(this.invMatrix, this.invMatrix);
        return
    }
}
var CGFcameraAxis = Object.freeze({
    X: vec3.fromValues(1, 0, 0),
    Y: vec3.fromValues(0, 1, 0),
    Z: vec3.fromValues(0, 0, 1)
});
var CGFcameraAxisID = Object.freeze({
    X: 0,
    Y: 1,
    Z: 2
});
class CGFcamera {
    constructor(t, e, i, n, r) {
        this.fov = t;
        this.near = e;
        this.far = i;
        this.position = vec4.fromValues(n[0], n[1], n[2], 0);
        this.target = vec4.fromValues(r[0], r[1], r[2], 0);
        this.direction = this.calculateDirection();
        this._up = vec3.fromValues(0, 1, 0);
        this._viewMatrix = mat4.create();
        this._projectionMatrix = mat4.create()
    }
    getViewMatrix() {
        mat4.lookAt(this._viewMatrix, this.position, this.target, this._up);
        return this._viewMatrix
    }
    getProjectionMatrix(t, e) {
        var i = t / e;
        mat4.perspective(this._projectionMatrix, this.fov, i, this.near, this.far);
        return this._projectionMatrix
    }
    calculateDirection() {
        return vec4.normalize(vec4.create(), vec4.subtract(vec4.create(), this.target, this.position))
    }
    setPosition(t) {
        vec3.copy(this.position, t);
        this.direction = this.calculateDirection()
    }
    setTarget(t) {
        vec3.copy(this.target, t);
        this.direction = this.calculateDirection()
    }
    translate(t) {
        var e = vec4.scale(vec4.create(), this.direction, -t[2]);
        var i = vec4.fromValues(0, t[1], 0, 0);
        var n = vec3.create();
        vec3.scale(n, vec3.cross(n, vec3.fromValues(0, 1, 0), this.direction), t[0]);
        var r = vec4.fromValues(n[0], n[1], n[2], 0);
        var o = vec4.create();
        o = vec4.add(o, e, vec4.add(o, i, r));
        vec4.add(this.position, this.position, o);
        vec4.add(this.target, this.position, this.direction)
    }
    rotate(t, e) {
        vec4.transformMat4(this.direction, this.direction, mat4.rotate(mat4.create(), mat4.create(), e, t));
        vec4.add(this.target, this.position, this.direction)
    }
    orbit(t, e) {
        var i = vec4.sub(vec4.create(), this.position, this.target);
        i[3] = 0;
        var n;
        if (t == CGFcameraAxisID.X) {
            var r = vec3.create();
            vec3.normalize(r, vec3.cross(r, i, this._up));
            var o = mat4.rotate(mat4.create(), mat4.create(), e, r);
            n = vec4.transformMat4(vec4.create(), i, o);
            vec3.normalize(this._up, vec3.cross(this._up, r, n))
        } else n = vec4.transformMat4(vec4.create(), i, mat4.rotate(mat4.create(), mat4.create(), e, this._up));
        vec4.add(this.position, this.target, n);
        this.direction = this.calculateDirection()
    }
    pan(t) {
        var e = .05 * vec3.distance(this.target, this.position);
        var i = vec3.cross(vec3.create(), this.direction, this._up);
        var n = vec4.scale(vec4.create(), vec3.normalize(i, i), t[0] * e);
        n[3] = 0;
        var r = vec4.scale(vec4.create(), this._up, t[1] * e);
        r[3] = 0;
        vec4.add(this.position, this.position, n);
        vec4.add(this.target, this.target, n);
        vec4.add(this.position, this.position, r);
        vec4.add(this.target, this.target, r)
    }
    zoom(t) {
        if (vec4.distance(this.position, this.target) > t) vec4.add(this.position, this.position, vec4.scale(vec4.create(), this.direction, t));
        else console.warn("CGFcamera: zoom exceeds target position, ignoring request.")
    }
}
class CGFinterfaceCamera extends CGFcamera {
    constructor(t, e, i) {
        super(t, e, i, [10, 10, 10], [0, 0, 0]);
        this.translation = [0, 0, 0];
        this.rotation = [.52, .79, 0];
        this.distance = 50;
        this._positionMatrix = mat4.create();
        this._invPositionMatrix = mat4.create()
    }
    getViewMatrix() {
        vec4.set(this.position, 0, 0, this.distance, 1);
        vec4.set(this.target, 0, 0, 0, 1);
        vec3.set(this._up, 0, 1, 0);
        vec4.set(this.direction, 0, 0, -1, 0);
        mat4.lookAt(this._viewMatrix, this.position, this.target, this._up);
        mat4.identity(this._positionMatrix);
        mat4.rotateZ(this._positionMatrix, this._positionMatrix, this.rotation[2]);
        mat4.rotateX(this._positionMatrix, this._positionMatrix, this.rotation[0]);
        mat4.rotateY(this._positionMatrix, this._positionMatrix, -this.rotation[1]);
        mat4.translate(this._positionMatrix, this._positionMatrix, this.translation);
        mat4.invert(this._invPositionMatrix, this._positionMatrix);
        vec4.transformMat4(this.position, this.position, this._invPositionMatrix);
        vec4.transformMat4(this.target, this.target, this._invPositionMatrix);
        vec4.transformMat4(this.direction, this.direction, this._invPositionMatrix);
        vec3.transformMat4(this._up, this._up, this._invPositionMatrix);
        mat4.multiply(this._viewMatrix, this._viewMatrix, this._positionMatrix);
        return this._viewMatrix
    }
    setDistance(t) {
        this.distance = t;
        this.clampDistance()
    }
    clampDistance() {
        if (this.distance < this.near) this.distance = this.near;
        else if (this.distance > this.far) this.distance = this.far
    }
    roll(t) {
        this.rotate(CGFcameraAxis.Z, t)
    }
    orbit(t, e) {
        this.rotation[t] += e
    }
    rotate(t, e) {
        this.rotation[t] += e
    }
    zoom(t) {
        this.distance -= t;
        this.clampDistance()
    }
    translate(t) {
        vec4.add(this.translation, this.translation, t)
    }
    pan(t) {
        t[3] = 0;
        vec4.transformMat4(t, t, this._invPositionMatrix);
        vec4.sub(this.translation, this.translation, t)
    }
}
class CGFcameraOrtho {
    constructor(t, e, i, n, r, o, s, a, c) {
        this.left = t;
        this.right = e;
        this.bottom = i;
        this.top = n;
        this.near = r;
        this.far = o;
        this.position = vec4.fromValues(s[0], s[1], s[2], 0);
        this.target = vec4.fromValues(a[0], a[1], a[2], 0);
        this.direction = this.calculateDirection();
        this._up = c;
        this._viewMatrix = mat4.create();
        this._projectionMatrix = mat4.create()
    }
    getViewMatrix() {
        mat4.lookAt(this._viewMatrix, this.position, this.target, this._up);
        return this._viewMatrix
    }
    getProjectionMatrix(t, e) {
        var i = t / e;
        mat4.ortho(this._projectionMatrix, this.left, this.right, this.bottom, this.top, this.near, this.far);
        return this._projectionMatrix
    }
    calculateDirection() {
        return vec4.normalize(vec4.create(), vec4.subtract(vec4.create(), this.target, this.position))
    }
    setPosition(t) {
        vec3.copy(this.position, t);
        this.direction = this.calculateDirection()
    }
    setTarget(t) {
        vec3.copy(this.target, t);
        this.direction = this.calculateDirection()
    }
    translate(t) {
        var e = vec4.scale(vec4.create(), this.direction, -t[2]);
        var i = vec4.fromValues(0, t[1], 0, 0);
        var n = vec3.create();
        vec3.scale(n, vec3.cross(n, vec3.fromValues(0, 1, 0), this.direction), t[0]);
        var r = vec4.fromValues(n[0], n[1], n[2], 0);
        var o = vec4.create();
        o = vec4.add(o, e, vec4.add(o, i, r));
        vec4.add(this.position, this.position, o);
        vec4.add(this.target, this.position, this.direction)
    }
    rotate(t, e) {
        vec4.transformMat4(this.direction, this.direction, mat4.rotate(mat4.create(), mat4.create(), e, t));
        vec4.add(this.target, this.position, this.direction)
    }
    orbit(t, e) {
        var i = vec4.sub(vec4.create(), this.position, this.target);
        i[3] = 0;
        var n;
        if (t == CGFcameraAxisID.X) {
            var r = vec3.create();
            vec3.normalize(r, vec3.cross(r, i, this._up));
            var o = mat4.rotate(mat4.create(), mat4.create(), e, r);
            n = vec4.transformMat4(vec4.create(), i, o);
            vec3.normalize(this._up, vec3.cross(this._up, r, n))
        } else n = vec4.transformMat4(vec4.create(), i, mat4.rotate(mat4.create(), mat4.create(), e, this._up));
        vec4.add(this.position, this.target, n);
        this.direction = this.calculateDirection()
    }
    pan(t) {
        var e = .05 * vec3.distance(this.target, this.position);
        var i = vec3.cross(vec3.create(), this.direction, this._up);
        var n = vec4.scale(vec4.create(), vec3.normalize(i, i), t[0] * e);
        n[3] = 0;
        var r = vec4.scale(vec4.create(), this._up, t[1] * e);
        r[3] = 0;
        vec4.add(this.position, this.position, n);
        vec4.add(this.target, this.target, n);
        vec4.add(this.position, this.position, r);
        vec4.add(this.target, this.target, r)
    }
    zoom(t) {
        if (vec4.distance(this.position, this.target) > t) vec4.add(this.position, this.position, vec4.scale(vec4.create(), this.direction, t));
        else console.warn("CGFcameraOrtho: zoom exceeds target position, ignoring request.")
    }
    setUp(t) {
        this._up = t
    }
}
class CGFlight extends CGFobject {
    constructor(t, e) {
        super(t);
        this.scene = t;
        this.id = e;
        console.log("Created Light " + e);
        this.setPosition(0, 0, 0, 1);
        this.setAmbient(.1, .1, .1, 1);
        this.setDiffuse(.5, .5, .5, 1);
        this.setSpecular(.5, .5, .5, 1);
        this.setSpotDirection(0, -1, 0);
        this.setSpotExponent(10);
        this.setSpotCutOff(180);
        this.setConstantAttenuation(1);
        this.setLinearAttenuation(0);
        this.setQuadraticAttenuation(0);
        this.visible = false;
        this.initBuffers()
    }
    initBuffers() {
        this.vertices = [-.5, 0, 0, 0, .5, 0, .5, 0, 0, 0, -.5, 0, 0, 0, .5, 0, 0, -.5];
        this.indices = [1, 4, 0, 1, 2, 4, 1, 5, 2, 1, 0, 5, 3, 0, 4, 3, 4, 2, 3, 2, 5, 3, 5, 0];
        this.normals = [1, 0, 0, 0, -1, 0, -1, 0, 0, 0, 1, 0, 0, 0, -1, 0, 0, 1];
        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers()
    }
    enable() {
        this.enabled = true
    }
    disable() {
        this.enabled = false
    }
    setPosition(t, e, i, n) {
        this.position = [t, e, i, n]
    }
    setAmbient(t, e, i, n) {
        this.ambient = [t, e, i, n]
    }
    setDiffuse(t, e, i, n) {
        this.diffuse = [t, e, i, n]
    }
    setSpecular(t, e, i, n) {
        this.specular = [t, e, i, n]
    }
    setSpotDirection(t, e, i) {
        this.spot_direction = [t, e, i, 1]
    }
    setSpotExponent(t) {
        this.spot_exponent = t
    }
    setSpotCutOff(t) {
        this.spot_cutoff = t
    }
    setConstantAttenuation(t) {
        this.constant_attenuation = t
    }
    setLinearAttenuation(t) {
        this.linear_attenuation = t
    }
    setQuadraticAttenuation(t) {
        this.quadratic_attenuation = t
    }
    update() {
        this.tPosition = [0, 0, 0, 0];
        this.tDirection = [0, 0, 0, 0];
        this.scene.updateInverseMatrix();
        vec4.transformMat4(this.tDirection, this.spot_direction, this.scene.invMatrix);
        vec4.transformMat4(this.tPosition, this.position, this.scene.activeMatrix);
        this.updateShader();
        if (this.visible) {
            this.scene.setDiffuse(.5, .5, .5, 1);
            this.scene.pushMatrix();
            this.scene.translate(this.position[0], this.position[1], this.position[2]);
            this.scene.scale(.3, .3, .3);
            this.display();
            this.scene.popMatrix()
        }
    }
    updateShader() {
        var t = this.scene.gl;
        if (!this.scene.pickMode) try {
            var e = this.scene.activeShader.uniforms.uLight[this.id];
            t.uniform1i(e.enabled, this.enabled);
            t.uniform4fv(e.position, this.tPosition);
            t.uniform4fv(e.ambient, this.ambient);
            t.uniform4fv(e.diffuse, this.diffuse);
            t.uniform4fv(e.specular, this.specular);
            t.uniform3fv(e.spot_direction, [this.tDirection[0], this.tDirection[1], this.tDirection[2]]);
            t.uniform1f(e.spot_exponent, this.spot_exponent);
            t.uniform1f(e.spot_cutoff, this.spot_cutoff);
            t.uniform1f(e.constant_attenuation, this.constant_attenuation);
            t.uniform1f(e.linear_attenuation, this.linear_attenuation);
            t.uniform1f(e.quadratic_attenuation, this.quadratic_attenuation)
        } catch (t) {
            console.log("CGFlight.updateShader: Problem updating light " + this.id)
        }
    }
    setVisible(t) {
        this.visible = t
    }
}
class CGFapplication {
    constructor(t) {
        this.element = t;
        this.initialized = false;
        this.gl = null
    }
    init() {
        if (this.initialized) {
            return true
        }
        var t = document.createElement("canvas");
        this.gl = t.getContext("webgl2", {
            antialias: true
        });
        if (!this.gl) {
            Detector.addGetWebGLMessage({
                parent: this.element
            });
            return false
        }
        this.initialized = true;
        this.element.appendChild(this.gl.canvas);
        this.initScene();
        this.initInterface();
        window.addEventListener("resize", this.resizeCanvas(this.gl));
        this.resizeCanvas(this.gl)();
        return true
    }
    resizeCanvas(t) {
        return function() {
            console.log("resize");
            if (!t) return;
            var e = window.innerWidth;
            var i = window.innerHeight;
            console.log("clientWidth: " + e + ", clientHeight: " + i);
            if (t.canvas.width != e || t.canvas.height != i) {
                console.log("width: " + t.canvas.width + ", height: " + t.canvas.height);
                t.canvas.width = e;
                t.canvas.height = i
            }
        }
    }
    setScene(t) {
        this.scene = t;
        if (this.initialized) {
            this.scene.init(this)
        }
    }
    setInterface(t) {
        this.interface = t;
        if (this.initialized) {
            this.interface.init(this)
        }
    }
    initScene() {
        if (this.scene && this.initialized) {
            return this.scene.init(this)
        }
        return false
    }
    initInterface() {
        if (this.interface && this.initialized) {
            return this.interface.init(this)
        }
        return false
    }
    run() {
        var t = this;

        function e() {
            requestAnimationFrame(e, t.gl.canvas);
            if (t.interface) {
                t.interface.update()
            }
            if (t.scene) {
                t.scene.checkUpdate();
                t.scene.displayWithPick()
            }
        }
        e()
    }
}
class CGFplane extends CGFobject {
    constructor(t, e) {
        super(t);
        this.numDivisions = e ? e + 1 : 2;
        this.initBuffers();
        this.wireframe = false
    }
    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        for (var t = 0; t < this.numDivisions; ++t) {
            for (var e = 0; e < this.numDivisions; ++e) {
                this.vertices.push(t, 0, e);
                this.normals.push(0, 1, 0)
            }
        }
        var i = 0;
        for (var t = 0; t < this.numDivisions - 1; ++t) {
            this.indices.push(i);
            var e;
            for (e = 0; e < this.numDivisions - 1; ++e) {
                this.indices.push(i + (e + 1));
                this.indices.push(i + this.numDivisions + e)
            }
            i += this.numDivisions;
            this.indices.push(i + e)
        }
        this.primitiveType = this.scene.gl.TRIANGLE_STRIP;
        this.initGLBuffers()
    }
    display() {
        this.scene.pushMatrix();
        this.scene.translate(-.5, 0, -.5);
        var t = 1 / (this.numDivisions - 1);
        this.scene.scale(t, 1, t);
        this.drawElements(this.primitiveType);
        this.scene.popMatrix()
    }
}

function indexOf(t) {
    if (typeof Array.prototype.indexOf === "function") {
        indexOf = Array.prototype.indexOf
    } else {
        indexOf = function(t) {
            var e = -1,
                i = -1;
            for (e = 0; e < this.length; e++) {
                if (this[e] === t) {
                    i = e;
                    break
                }
            }
            return i
        }
    }
    return indexOf.call(this, t)
}
class CGFXMLreader {
    constructor() {
        this.xmlhttp = null;
        this.xmlDoc = null;
        this.xmlfile = null;
        this.parserObj = null;
        this.errorMessage = null
    }
    getErrorMessage() {
        return this.errorMessage
    }
    open(t, e) {
        this.xmlfile = t;
        if (typeof e.onXMLReady !== "function") console.error("CGFXMLReader.open: onXMLReady handler not defined.");
        if (typeof e.onXMLError !== "function") console.error("CGFXMLReader.open: onXMLError handler not defined.");
        this.parserObj = e;
        if (window.XMLHttpRequest) {
            this.xmlhttp = new XMLHttpRequest
        } else if (window.ActiveXObject) {
            this.xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
        }
        if (this.xmlhttp != null) {
            var i = this;
            var n = this.xmlhttp;
            this.xmlhttp.onreadystatechange = function(r) {
                if (n.readyState == 4) {
                    if (n.status == 200) {
                        var o = new window.DOMParser;
                        i.xmlDoc = o.parseFromString(this.response, "text/xml");
                        if (i.xmlDoc.getElementsByTagName("parseerror")) {
                            if (typeof e.onXMLError === "function") e.onXMLError("File " + t + " has errors.")
                        }
                        if (typeof e.onXMLReady === "function") e.onXMLReady();
                        if (i.getErrorMessage() != null) {
                            if (typeof e.onXMLError === "function") e.onXMLError(i.getErrorMessage());
                            return
                        }
                    } else {
                        if (typeof e.onXMLError === "function") e.onXMLError(n.status + ": " + i.xmlfile + ", " + n.statusText)
                    }
                }
            };
            this.xmlhttp.onerror = function(t) {
                if (typeof e.onXMLError === "function") e.onXMLError("[CGFXMLreader] Error", n.statusText)
            };
            this.xmlhttp.open("GET", t, true);
            this.xmlhttp.setRequestHeader("Content-Type", "text/xml");
            try {
                this.xmlhttp.send(null)
            } catch (t) {
                if (typeof e.onXMLError === "function") e.onXMLError("[CGFXMLreader] Error", n.statusText)
            }
        } else {
            if (typeof e.onXMLError === "function") e.onXMLError("The XMLHttpRequest is not supported");
            return
        }
    }
    getRGBA(t, e, i) {
        if (i == undefined) i = true;
        if (t == null) {
            console.error("element is null.");
            return null
        }
        if (e == null) {
            console.error("color (rgba) attribute name is null.");
            return null
        }
        var n = t.getAttribute(e);
        if (n == null) {
            if (i) {
                console.error("color (rgba) value is null for attribute " + e + ".")
            }
            return null
        }
        var r = n.split(" ");
        if (r.length != 4) {
            console.error("invalid " + r.length + " number of color components for color (rgba) in attribute " + e + ".");
            return null
        }
        var o = new Array;
        for (var s = 0; s < 4; s++) {
            o.push(parseFloat(r[s]))
        }
        return o
    }
    getVector3(t, e, i) {
        if (i == undefined) i = true;
        if (t == null) {
            console.error("element is null.");
            return null
        }
        if (e == null) {
            console.error("vector3 attribute name is null.");
            return null
        }
        var n = t.getAttribute(e);
        if (n == null) {
            if (i) {
                console.error("vector3 value is null for attribute " + e + ".")
            }
            return null
        }
        var r = n.split(" ");
        if (r.length != 3) {
            console.error("invalid " + r.length + " number of components for a vector3, in attribute " + e + ".");
            return null
        }
        var o = new Array;
        for (var s = 0; s < 3; s++) {
            o.push(parseFloat(r[s]))
        }
        return o
    }
    getVector2(t, e, i) {
        if (i == undefined) i = true;
        if (t == null) {
            console.error("element is null.");
            return null
        }
        if (e == null) {
            console.error("vector3 attribute name is null.");
            return null
        }
        var n = t.getAttribute(e);
        if (n == null) {
            if (i) {
                console.error("vector2 value is null for attribute " + e + ".")
            }
            return null
        }
        var r = n.split(" ");
        if (r.length != 2) {
            console.error("invalid " + r.length + " number of components for a vector2, in attribute " + e + ".");
            return null
        }
        var o = new Array;
        for (var s = 0; s < 2; s++) {
            o.push(parseFloat(r[s]))
        }
        return o
    }
    getItem(t, e, i, n) {
        if (n == undefined) n = true;
        if (t == null) {
            console.error("element is null.");
            return null
        }
        if (e == null) {
            console.error("item attribute name is null.");
            return null
        }
        var r = t.getAttribute(e);
        if (r == null) {
            if (n) {
                console.error("item value is null for attribute " + e + ".")
            }
            return null
        }
        r = r.toLowerCase();
        var o = indexOf.call(i, r);
        if (o < 0) {
            console.error("value '" + r + "' is not a choice in [" + i.toString() + "]");
            return null
        }
        return r
    }
    getString(t, e, i) {
        if (i == undefined) i = true;
        if (t == null) {
            console.error("element is null.");
            return null
        }
        if (e == null) {
            console.error("string attribute name is null.");
            return null
        }
        var n = t.getAttribute(e);
        if (n == null && i) {
            console.error("string value is null for attribute " + e + ".");
            return null
        }
        return n
    }
    hasAttribute(t, e) {
        if (t == null) {
            console.error("element is null.");
            return null
        }
        if (e == null) {
            console.error("string attribute name is null.");
            return null
        }
        var i = t.getAttribute(e);
        return i != null
    }
    getBoolean(t, e, i) {
        if (i == undefined) i = true;
        var n = this.getItem(t, e, ["true", "t", "1", "false", "f", "0"], i);
        if (n == null) {
            return null
        }
        if (n == "1" || n == "true" || n == "t") return true;
        return false
    }
    getInteger(t, e, i) {
        if (i == undefined) i = true;
        var n = this.getString(t, e, i);
        if (n == null) {
            return null
        }
        return parseInt(n)
    }
    getFloat(t, e, i) {
        if (i == undefined) i = true;
        var n = this.getString(t, e, i);
        if (n == null) {
            return null
        }
        return parseFloat(n)
    }
}
CGFnurbsUtils = {
    findSpan: function(t, e, i) {
        var n = i.length - t - 1;
        if (e >= i[n]) {
            return n - 1
        }
        if (e <= i[t]) {
            return t
        }
        var r = t;
        var o = n;
        var s = Math.floor((r + o) / 2);
        while (e < i[s] || e >= i[s + 1]) {
            if (e < i[s]) {
                o = s
            } else {
                r = s
            }
            s = Math.floor((r + o) / 2)
        }
        return s
    },
    calcBasisFunctions: function(t, e, i, n) {
        var r = [];
        var o = [];
        var s = [];
        r[0] = 1;
        for (var a = 1; a <= i; ++a) {
            o[a] = e - n[t + 1 - a];
            s[a] = n[t + a] - e;
            var c = 0;
            for (var u = 0; u < a; ++u) {
                var l = s[u + 1];
                var h = o[a - u];
                var f = r[u] / (l + h);
                r[u] = c + l * f;
                c = h * f
            }
            r[a] = c
        }
        return r
    },
    calcBSplinePoint: function(t, e, i, n) {
        var r = this.findSpan(t, n, e);
        var o = this.calcBasisFunctions(r, n, t, e);
        var s = new vec4.fromValues(0, 0, 0, 0);
        for (var a = 0; a <= t; ++a) {
            var c = i[r - t + a];
            var u = o[a];
            var l = c[3] * u;
            s[0] += c[0] * l;
            s[1] += c[1] * l;
            s[2] += c[2] * l;
            s[3] += c[3] * u
        }
        return s
    },
    calcBasisFunctionDerivatives: function(t, e, i, n, r) {
        var o = [];
        for (var s = 0; s <= i; ++s) o[s] = 0;
        var a = [];
        for (var s = 0; s <= n; ++s) a[s] = o.slice(0);
        var c = [];
        for (var s = 0; s <= i; ++s) c[s] = o.slice(0);
        c[0][0] = 1;
        var u = o.slice(0);
        var l = o.slice(0);
        for (var h = 1; h <= i; ++h) {
            u[h] = e - r[t + 1 - h];
            l[h] = r[t + h] - e;
            var f = 0;
            for (var d = 0; d < h; ++d) {
                var p = l[d + 1];
                var v = u[h - d];
                c[h][d] = p + v;
                var m = c[d][h - 1] / c[h][d];
                c[d][h] = f + p * m;
                f = v * m
            }
            c[h][h] = f
        }
        for (var h = 0; h <= i; ++h) {
            a[0][h] = c[h][i]
        }
        for (var d = 0; d <= i; ++d) {
            var _ = 0;
            var g = 1;
            var b = [];
            for (var s = 0; s <= i; ++s) {
                b[s] = o.slice(0)
            }
            b[0][0] = 1;
            for (var y = 1; y <= n; ++y) {
                var x = 0;
                var w = d - y;
                var E = i - y;
                if (d >= y) {
                    b[g][0] = b[_][0] / c[E + 1][w];
                    x = b[g][0] * c[w][E]
                }
                var A = w >= -1 ? 1 : -w;
                var C = d - 1 <= E ? y - 1 : i - d;
                for (var h = A; h <= C; ++h) {
                    b[g][h] = (b[_][h] - b[_][h - 1]) / c[E + 1][w + h];
                    x += b[g][h] * c[w + h][E]
                }
                if (d <= E) {
                    b[g][y] = -b[_][y - 1] / c[E + 1][d];
                    x += b[g][y] * c[d][E]
                }
                a[y][d] = x;
                var h = _;
                _ = g;
                g = h
            }
        }
        var d = i;
        for (var y = 1; y <= n; ++y) {
            for (var h = 0; h <= i; ++h) {
                a[y][h] *= d
            }
            d *= i - y
        }
        return a
    },
    calcBSplineDerivatives: function(t, e, i, n, r) {
        var o = r < t ? r : t;
        var s = [];
        var a = this.findSpan(t, n, e);
        var c = this.calcBasisFunctionDerivatives(a, n, t, o, e);
        var u = [];
        for (var l = 0; l < i.length; ++l) {
            var h = i[l].clone();
            var f = h[3];
            h[0] *= f;
            h[1] *= f;
            h[2] *= f;
            u[l] = h
        }
        for (var d = 0; d <= o; ++d) {
            var h = u[a - t].clone().multiplyScalar(c[d][0]);
            for (var p = 1; p <= t; ++p) {
                h.add(u[a - t + p].clone().multiplyScalar(c[d][p]))
            }
            s[d] = h
        }
        for (var d = o + 1; d <= r + 1; ++d) {
            s[d] = vec4.fromValues(0, 0, 0, 0)
        }
        return s
    },
    calcKoverI: function(t, e) {
        var i = 1;
        for (var n = 2; n <= t; ++n) {
            i *= n
        }
        var r = 1;
        for (var n = 2; n <= e; ++n) {
            r *= n
        }
        for (var n = 2; n <= t - e; ++n) {
            r *= n
        }
        return i / r
    },
    calcRationalCurveDerivatives: function(t) {
        var e = t.length;
        var i = [];
        var n = [];
        for (var r = 0; r < e; ++r) {
            var o = t[r];
            i[r] = vec3.fromValues(o[0], o[1], o[2]);
            n[r] = o[3]
        }
        var s = [];
        for (var a = 0; a < e; ++a) {
            var c = i[a].clone();
            for (var r = 1; r <= a; ++r) {
                c.sub(s[a - r].clone().multiplyScalar(this.calcKoverI(a, r) * n[r]))
            }
            s[a] = c.divideScalar(n[0])
        }
        return s
    },
    calcNURBSDerivatives: function(t, e, i, n, r) {
        var o = this.calcBSplineDerivatives(t, e, i, n, r);
        return this.calcRationalCurveDerivatives(o)
    },
    calcSurfacePoint: function(t, e, i, n, r, o, s) {
        var a = this.findSpan(t, o, i);
        var c = this.findSpan(e, s, n);
        var u = this.calcBasisFunctions(a, o, t, i);
        var l = this.calcBasisFunctions(c, s, e, n);
        var h = [];
        for (var f = 0; f <= e; ++f) {
            h[f] = vec4.fromValues(0, 0, 0, 0);
            for (var d = 0; d <= t; ++d) {
                var p = vec4.clone(r[a - t + d][c - e + f]);
                var v = p[3];
                p[0] *= v;
                p[1] *= v;
                p[2] *= v;
                var m = [];
                vec4.scale(m, p, u[d]);
                vec4.add(h[f], h[f], m)
            }
        }
        var _ = new vec4.fromValues(0, 0, 0, 0);
        for (var f = 0; f <= e; ++f) {
            var g = [];
            vec4.scale(g, h[f], l[f]);
            vec4.add(_, _, g)
        }
        _[0] = _[0] / _[3];
        _[1] = _[1] / _[3];
        _[2] = _[2] / _[3];
        return new vec3.fromValues(_[0], _[1], _[2])
    }
};
CGFnurbsSurface = function(t, e, i) {
    this.degree1 = t;
    this.degree2 = e;
    this.knots1 = this.generateKnots(t);
    this.knots2 = this.generateKnots(e);
    this.controlPoints = [];
    var n = t + 1;
    var r = e + 1;
    for (var o = 0; o < n; ++o) {
        this.controlPoints[o] = [];
        for (var s = 0; s < r; ++s) {
            var a = i[o][s];
            this.controlPoints[o][s] = new vec4.fromValues(a[0], a[1], a[2], a[3])
        }
    }
};
CGFnurbsSurface.prototype = {
    constructor: CGFnurbsSurface,
    getPoint: function(t, e) {
        var i = this.knots1[0] + t * (this.knots1[this.knots1.length - 1] - this.knots1[0]);
        var n = this.knots2[0] + e * (this.knots2[this.knots2.length - 1] - this.knots2[0]);
        return CGFnurbsUtils.calcSurfacePoint(this.degree1, this.degree2, this.knots1, this.knots2, this.controlPoints, i, n)
    },
    generateKnots: function(t) {
        n = t + 1;
        res = [];
        for (v = 0; v <= 1; v++)
            for (i = 0; i < n; i++) res.push(v);
        return res
    }
};
CGFnurbsObject = function(t, e, i, n) {
    CGFobject.call(this, t);
    this.evalObj = n;
    this.slices = e;
    this.stacks = i;
    this.initBuffers();
    this.wireframe = false;
    this.pickingEnabled = true
};
CGFnurbsObject.prototype = Object.create(CGFobject.prototype);
CGFnurbsObject.prototype.constructor = CGFnurbsObject;
CGFnurbsObject.prototype.initBuffers = function() {
    this.vertices = [];
    this.faceNormals = [];
    this.texCoords = [];
    this.colors = [];
    this.indices = [];
    this.faces = [];
    var t, e, i;
    var n, r;
    var o = this.slices + 1;
    var s;
    for (t = 0; t <= this.stacks; t++) {
        r = t / this.stacks;
        for (e = 0; e <= this.slices; e++) {
            n = e / this.slices;
            i = this.evalObj.getPoint(n, r);
            this.vertices.push(i[0]);
            this.vertices.push(i[1]);
            this.vertices.push(i[2]);
            s = vec2.fromValues(e / this.slices, t / this.stacks);
            this.texCoords.push(s[0]);
            this.texCoords.push(1 - s[1])
        }
    }
    var a, c, u, l;
    for (t = 0; t < this.stacks; t++) {
        for (e = 0; e < this.slices; e++) {
            a = t * o + e;
            c = t * o + e + 1;
            u = (t + 1) * o + e + 1;
            l = (t + 1) * o + e;
            this.indices.push(a);
            this.indices.push(c);
            this.indices.push(l);
            this.faceNormals.push(this.computeFaceNormal(a, c, l, o));
            this.indices.push(c);
            this.indices.push(u);
            this.indices.push(l);
            this.faceNormals.push(this.computeFaceNormal(c, u, l, o))
        }
    }
    this.normals = this.computeVertexNormals();
    this.primitiveType = this.scene.gl.TRIANGLES;
    this.initGLBuffers()
};
CGFnurbsObject.prototype.computeFaceNormal = function(t, e, i, n) {
    var r = t * 3;
    var o = e * 3;
    var s = i * 3;
    var a = vec3.fromValues(this.vertices[r], this.vertices[r + 1], this.vertices[r + 2]);
    var c = vec3.fromValues(this.vertices[o], this.vertices[o + 1], this.vertices[o + 2]);
    var u = vec3.fromValues(this.vertices[s], this.vertices[s + 1], this.vertices[s + 2]);
    var l = vec3.create();
    var h = vec3.create();
    var f = vec3.create();
    vec3.subtract(l, c, a);
    vec3.subtract(h, u, a);
    vec3.cross(f, l, h);
    vec3.normalize(f, f);
    return f
};
CGFnurbsObject.prototype.computeVertexNormals = function() {
    var t = this.vertices.length;
    var e = new Array(t);
    for (var i = 0; i < t; i++) {
        e[i] = vec3.fromValues(0, 0, 0)
    }
    var n, r, o;
    var s;
    var a = 0;
    var c = this.indices.length;
    for (var i = 0; i < c; i += 3) {
        s = this.faceNormals[a];
        n = this.indices[i + 0];
        r = this.indices[i + 1];
        o = this.indices[i + 2];
        vec3.add(e[n], e[n], s);
        vec3.add(e[r], e[r], s);
        vec3.add(e[o], e[o], s);
        a++
    }
    var u = [];
    for (var i = 0; i < t; i++) {
        vec3.normalize(e[i], e[i]);
        u.push(e[i][0], e[i][1], e[i][2])
    }
    return u
};
CGFnurbsObject.prototype.display = function() {
    this.scene.pushMatrix();
    this.drawElements(this.primitiveType);
    this.scene.popMatrix()
};