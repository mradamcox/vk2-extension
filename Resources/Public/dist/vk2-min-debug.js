(function(){var k, aa = aa || {}, m = this;
function n(c) {
  return void 0 !== c;
}
function ba() {
}
function ca(c) {
  var d = typeof c;
  if ("object" == d) {
    if (c) {
      if (c instanceof Array) {
        return "array";
      }
      if (c instanceof Object) {
        return d;
      }
      var e = Object.prototype.toString.call(c);
      if ("[object Window]" == e) {
        return "object";
      }
      if ("[object Array]" == e || "number" == typeof c.length && "undefined" != typeof c.splice && "undefined" != typeof c.propertyIsEnumerable && !c.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == e || "undefined" != typeof c.call && "undefined" != typeof c.propertyIsEnumerable && !c.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == d && "undefined" == typeof c.call) {
      return "object";
    }
  }
  return d;
}
function da(c) {
  return null != c;
}
function ea(c) {
  return "array" == ca(c);
}
function fa(c) {
  var d = ca(c);
  return "array" == d || "object" == d && "number" == typeof c.length;
}
function q(c) {
  return "string" == typeof c;
}
function ga(c) {
  return "number" == typeof c;
}
function ha(c) {
  return "function" == ca(c);
}
function ia(c) {
  var d = typeof c;
  return "object" == d && null != c || "function" == d;
}
var ja = "closure_uid_" + (1E9 * Math.random() >>> 0), ka = 0;
function la(c, d, e) {
  return c.call.apply(c.bind, arguments);
}
function ma(c, d, e) {
  if (!c) {
    throw Error();
  }
  if (2 < arguments.length) {
    var f = Array.prototype.slice.call(arguments, 2);
    return function() {
      var e = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(e, f);
      return c.apply(d, e);
    };
  }
  return function() {
    return c.apply(d, arguments);
  };
}
function r(c, d, e) {
  r = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? la : ma;
  return r.apply(null, arguments);
}
function na(c, d) {
  var e = Array.prototype.slice.call(arguments, 1);
  return function() {
    var d = e.slice();
    d.push.apply(d, arguments);
    return c.apply(this, d);
  };
}
var oa = Date.now || function() {
  return +new Date;
};
function u(c, d) {
  var e = c.split("."), f = m;
  e[0] in f || !f.execScript || f.execScript("var " + e[0]);
  for (var g;e.length && (g = e.shift());) {
    !e.length && n(d) ? f[g] = d : f[g] ? f = f[g] : f = f[g] = {};
  }
}
function v(c, d) {
  function e() {
  }
  e.prototype = d.prototype;
  c.ja = d.prototype;
  c.prototype = new e;
  c.prototype.constructor = c;
  c.Sb = function(c, e, h) {
    for (var l = Array(arguments.length - 2), p = 2;p < arguments.length;p++) {
      l[p - 2] = arguments[p];
    }
    return d.prototype[e].apply(c, l);
  };
}
;var pa, qa, ra, sa, ta, ua, va, wa, xa, za, Aa, Ba, Ca, Da, y, Ea, Fa, Ga, z, Ha;
u("vk2.settings.updateSettings", function() {
  pa = vk2x.settings.ELASTICSEARCH_NODE;
  qa = vk2x.settings.ELASTICSEARCH_SRS;
  ra = vk2x.settings.EVALUATION_GETPROCESS;
  sa = vk2x.settings.EVALUATION_SETISINVALIDE;
  ta = vk2x.settings.EVALUATION_SETISVALIDE;
  ua = vk2x.settings.GEOREFERENCE_CONFIRM;
  va = vk2x.settings.GEOREFERENCE_EXTENT_SRS;
  wa = vk2x.settings.GEOREFERENCE_GETPROCESS;
  xa = vk2x.settings.GEOREFERENCE_HISTORY;
  za = vk2x.settings.GEOREFERENCE_INFORMATION;
  Aa = vk2x.settings.GEOREFERENCE_PAGE;
  Ba = vk2x.settings.GEOREFERENCE_VALIDATION;
  Ca = vk2x.settings.MAIN_PAGE;
  Da = vk2x.settings.MAPPROFILE_PAGE;
  y = vk2x.settings.MAPVIEW_PARAMS;
  A = vk2x.settings.MODE_3D;
  Ea = vk2x.settings.SEARCH_TIMEINTERVAL;
  Fa = vk2x.settings.THUMB_PATH;
  Ga = vk2x.settings.TMS_URL_SUBDOMAINS;
  z = vk2x.settings.WITH_SPEAKING_URLS;
  Ha = vk2x.settings.WMS_DYNAMIC_TEMPLATE;
});
var A = !1;
function Ia(c, d) {
  function e(c, e) {
    if ("polygon" === e.toLowerCase()) {
      for (var d = [], f = 0, g = c.length;f < g;f++) {
        var w = ol.proj.transform(c[f], "EPSG:4326", "EPSG:900913");
        A && w.push(1E4);
        d.push(w);
      }
      return new ol.geom.Polygon([d]);
    }
  }
  var f = "clippolygon" in d ? e(d.clippolygon, "polygon") : void 0, f = void 0 === f && "geometry" in d ? e(d.geometry.coordinates[0], d.geometry.type) : f;
  delete d.geometry;
  var f = new ol.Feature({geometry:f}), g;
  for (g in d) {
    d.hasOwnProperty(g) && ("time" === g ? f.set(g, d[g].split("-")[0]) : f.set(g, d[g]));
  }
  f.setId(c);
  return f;
}
function Ja(c) {
  for (var d = [], e = 0, f = c.length;e < f;e++) {
    d.push(Ia(c[e]._id, c[e]._source));
  }
  return d;
}
;var C = {l:{}};
C.l.Qb = new ol.style.Style({stroke:new ol.style.Stroke({color:"rgba(0, 0, 255, 1.0)", width:2})});
C.l.nb = new ol.style.Style({stroke:new ol.style.Stroke({color:"#f00", width:1}), fill:new ol.style.Fill({color:"rgba(255,0,0,0.1)"})});
C.l.ob = new ol.style.Style({stroke:new ol.style.Stroke({color:"#000000", width:2})});
C.l.Ga = new ol.style.Style({fill:new ol.style.Fill({color:"rgba(255, 255, 255, 0.2)"}), stroke:new ol.style.Stroke({color:"#ffcc33", width:2}), image:new ol.style.Circle({radius:7, fill:new ol.style.Fill({color:"#ffcc33"})})});
C.l.ya = function(c) {
  var d = 16 * Math.PI / 6, d = [0, d, d, d, d, d, d];
  c = n(c) ? c : void 0;
  return new ol.style.Style({image:new ol.style.Circle({radius:8, fill:new ol.style.Fill({color:"rgba(255,255,255,0.6)"}), stroke:new ol.style.Stroke({color:"rgba(49,159,211,0.5)", width:15, lineDash:d})}), text:new ol.style.Text({textAlign:"start", textBaseline:"bottom", font:"12px Calibri,sans-serif", text:c, fill:new ol.style.Fill({color:"#aa3300"}), stroke:new ol.style.Stroke({color:"#ffffff", width:3}), offsetX:10, offsetY:-5})});
};
C.l.Ha = new ol.style.Style({image:new ol.style.Circle({radius:7, fill:new ol.style.Fill({color:"rgba(255, 255, 255, 0.6)"}), stroke:new ol.style.Stroke({color:"#29A329", width:1.5})})});
C.l.ma = new ol.style.Style({image:new ol.style.Circle({radius:7, fill:new ol.style.Fill({color:"rgba(255,0,0,0.1)"}), stroke:new ol.style.Stroke({color:"#f00", width:1})}), zIndex:1E5});
C.l.ha = function(c) {
  var d = 22 * Math.PI / 6, d = [0, d, d, d, d, d, d];
  c = n(c) ? c : void 0;
  return new ol.style.Style({image:new ol.style.Circle({radius:11, fill:new ol.style.Fill({color:"rgba(255,128,0,0.6)"}), stroke:new ol.style.Stroke({color:"rgba(240,0,0,0.5)", width:15, lineDash:d})}), text:new ol.style.Text({textAlign:"start", textBaseline:"bottom", font:"12px Calibri,sans-serif", text:c, fill:new ol.style.Fill({color:"#aa3300"}), stroke:new ol.style.Stroke({color:"#ffffff", width:3}), offsetX:10, offsetY:-5})});
};
function Ka() {
  this.b = this.a = !1;
  this.i = 0;
}
function La(c) {
  c.a || c.b || (c.i += 1);
  return "" + c.i;
}
;function Ma(c) {
  this.sa = c;
}
;function Na() {
  0 != Oa && (Pa[this[ja] || (this[ja] = ++ka)] = this);
  this.i = this.i;
  this.I = this.I;
}
var Oa = 0, Pa = {};
Na.prototype.i = !1;
function D(c) {
  c.i || (c.i = !0, c.U(), 0 != Oa && (c = c[ja] || (c[ja] = ++ka), delete Pa[c]));
}
Na.prototype.U = function() {
  if (this.I) {
    for (;this.I.length;) {
      this.I.shift()();
    }
  }
};
function E(c, d) {
  this.type = c;
  this.currentTarget = this.target = d;
  this.b = !1;
  this.fb = !0;
}
E.prototype.stopPropagation = function() {
  this.b = !0;
};
E.prototype.preventDefault = function() {
  this.fb = !1;
};
var Qa = "closure_listenable_" + (1E6 * Math.random() | 0), Ra = 0;
function Sa(c, d, e, f, g) {
  this.listener = c;
  this.a = null;
  this.src = d;
  this.type = e;
  this.da = !!f;
  this.X = g;
  ++Ra;
  this.Z = this.na = !1;
}
function Ta(c) {
  c.Z = !0;
  c.listener = null;
  c.a = null;
  c.src = null;
  c.X = null;
}
;function Va(c) {
  c = String(c);
  if (/^\s*$/.test(c) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(c.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + c + ")");
    } catch (d) {
    }
  }
  throw Error("Invalid JSON string: " + c);
}
;function Wa(c, d) {
  this.width = c;
  this.height = d;
}
k = Wa.prototype;
k.clone = function() {
  return new Wa(this.width, this.height);
};
k.isEmpty = function() {
  return !(this.width * this.height);
};
k.ceil = function() {
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this;
};
k.floor = function() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this;
};
k.round = function() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this;
};
function Xa(c, d) {
  for (var e in c) {
    d.call(void 0, c[e], e, c);
  }
}
function Ya(c, d) {
  for (var e in c) {
    if (d.call(void 0, c[e], e, c)) {
      return !0;
    }
  }
  return !1;
}
function Za(c) {
  var d = [], e = 0, f;
  for (f in c) {
    d[e++] = c[f];
  }
  return d;
}
function $a(c) {
  var d = [], e = 0, f;
  for (f in c) {
    d[e++] = f;
  }
  return d;
}
function ab(c) {
  var d = {}, e;
  for (e in c) {
    d[e] = c[e];
  }
  return d;
}
var bb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function cb(c, d) {
  for (var e, f, g = 1;g < arguments.length;g++) {
    f = arguments[g];
    for (e in f) {
      c[e] = f[e];
    }
    for (var h = 0;h < bb.length;h++) {
      e = bb[h], Object.prototype.hasOwnProperty.call(f, e) && (c[e] = f[e]);
    }
  }
}
function db(c) {
  var d = arguments.length;
  if (1 == d && ea(arguments[0])) {
    return db.apply(null, arguments[0]);
  }
  for (var e = {}, f = 0;f < d;f++) {
    e[arguments[f]] = !0;
  }
  return e;
}
;db("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
function eb(c) {
  eb[" "](c);
  return c;
}
eb[" "] = ba;
var fb = String.prototype.trim ? function(c) {
  return c.trim();
} : function(c) {
  return c.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
};
function gb(c) {
  if (!hb.test(c)) {
    return c;
  }
  -1 != c.indexOf("&") && (c = c.replace(ib, "&amp;"));
  -1 != c.indexOf("<") && (c = c.replace(jb, "&lt;"));
  -1 != c.indexOf(">") && (c = c.replace(lb, "&gt;"));
  -1 != c.indexOf('"') && (c = c.replace(mb, "&quot;"));
  -1 != c.indexOf("'") && (c = c.replace(nb, "&#39;"));
  -1 != c.indexOf("\x00") && (c = c.replace(ob, "&#0;"));
  return c;
}
var ib = /&/g, jb = /</g, lb = />/g, mb = /"/g, nb = /'/g, ob = /\x00/g, hb = /[\x00&<>"']/;
function pb(c, d) {
  return c < d ? -1 : c > d ? 1 : 0;
}
function qb(c) {
  return String(c).replace(/\-([a-z])/g, function(c, e) {
    return e.toUpperCase();
  });
}
function rb(c) {
  var d = q(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
  return c.replace(new RegExp("(^" + (d ? "|[" + d + "]+" : "") + ")([a-z])", "g"), function(c, d, g) {
    return d + g.toUpperCase();
  });
}
;var F = Array.prototype, sb = F.indexOf ? function(c, d, e) {
  return F.indexOf.call(c, d, e);
} : function(c, d, e) {
  e = null == e ? 0 : 0 > e ? Math.max(0, c.length + e) : e;
  if (q(c)) {
    return q(d) && 1 == d.length ? c.indexOf(d, e) : -1;
  }
  for (;e < c.length;e++) {
    if (e in c && c[e] === d) {
      return e;
    }
  }
  return -1;
}, tb = F.forEach ? function(c, d, e) {
  F.forEach.call(c, d, e);
} : function(c, d, e) {
  for (var f = c.length, g = q(c) ? c.split("") : c, h = 0;h < f;h++) {
    h in g && d.call(e, g[h], h, c);
  }
}, ub = F.filter ? function(c, d, e) {
  return F.filter.call(c, d, e);
} : function(c, d, e) {
  for (var f = c.length, g = [], h = 0, l = q(c) ? c.split("") : c, p = 0;p < f;p++) {
    if (p in l) {
      var t = l[p];
      d.call(e, t, p, c) && (g[h++] = t);
    }
  }
  return g;
};
function vb(c) {
  var d;
  a: {
    d = wb;
    for (var e = c.length, f = q(c) ? c.split("") : c, g = 0;g < e;g++) {
      if (g in f && d.call(void 0, f[g], g, c)) {
        d = g;
        break a;
      }
    }
    d = -1;
  }
  return 0 > d ? null : q(c) ? c.charAt(d) : c[d];
}
function xb(c, d) {
  return 0 <= sb(c, d);
}
function yb(c, d) {
  var e = sb(c, d), f;
  (f = 0 <= e) && F.splice.call(c, e, 1);
  return f;
}
function zb(c) {
  return F.concat.apply(F, arguments);
}
function Ab(c) {
  var d = c.length;
  if (0 < d) {
    for (var e = Array(d), f = 0;f < d;f++) {
      e[f] = c[f];
    }
    return e;
  }
  return [];
}
function Bb(c, d, e) {
  return 2 >= arguments.length ? F.slice.call(c, d) : F.slice.call(c, d, e);
}
;function Cb(c) {
  c = c.className;
  return q(c) && c.match(/\S+/g) || [];
}
function G(c, d) {
  var e = Cb(c);
  Db(e, Bb(arguments, 1));
  c.className = e.join(" ");
}
function H(c, d) {
  var e = Cb(c), e = Eb(e, Bb(arguments, 1));
  c.className = e.join(" ");
}
function Db(c, d) {
  for (var e = 0;e < d.length;e++) {
    xb(c, d[e]) || c.push(d[e]);
  }
}
function Eb(c, d) {
  return ub(c, function(c) {
    return !xb(d, c);
  });
}
function Fb(c, d, e) {
  var f = Cb(c);
  q(d) ? yb(f, d) : ea(d) && (f = Eb(f, d));
  q(e) && !xb(f, e) ? f.push(e) : ea(e) && Db(f, e);
  c.className = f.join(" ");
}
function I(c, d) {
  return xb(Cb(c), d);
}
;function Gb(c) {
  if (c.classList) {
    return c.classList;
  }
  c = c.className;
  return q(c) && c.match(/\S+/g) || [];
}
function Hb(c) {
  return c.classList ? c.classList.contains("active") : xb(Gb(c), "active");
}
function Ib(c) {
  c.classList ? c.classList.add("active") : Hb(c) || (c.className += 0 < c.className.length ? " active" : "active");
}
function Jb(c) {
  c.classList ? c.classList.remove("active") : Hb(c) && (c.className = ub(Gb(c), function(c) {
    return "active" != c;
  }).join(" "));
}
;function Kb(c) {
  this.src = c;
  this.a = {};
  this.b = 0;
}
Kb.prototype.add = function(c, d, e, f, g) {
  var h = c.toString();
  c = this.a[h];
  c || (c = this.a[h] = [], this.b++);
  var l = Lb(c, d, f, g);
  -1 < l ? (d = c[l], e || (d.na = !1)) : (d = new Sa(d, this.src, h, !!f, g), d.na = e, c.push(d));
  return d;
};
Kb.prototype.remove = function(c, d, e, f) {
  c = c.toString();
  if (!(c in this.a)) {
    return !1;
  }
  var g = this.a[c];
  d = Lb(g, d, e, f);
  return -1 < d ? (Ta(g[d]), F.splice.call(g, d, 1), 0 == g.length && (delete this.a[c], this.b--), !0) : !1;
};
function Mb(c, d) {
  var e = d.type;
  e in c.a && yb(c.a[e], d) && (Ta(d), 0 == c.a[e].length && (delete c.a[e], c.b--));
}
Kb.prototype.za = function(c, d, e, f) {
  c = this.a[c.toString()];
  var g = -1;
  c && (g = Lb(c, d, e, f));
  return -1 < g ? c[g] : null;
};
Kb.prototype.hasListener = function(c, d) {
  var e = n(c), f = e ? c.toString() : "", g = n(d);
  return Ya(this.a, function(c) {
    for (var l = 0;l < c.length;++l) {
      if (!(e && c[l].type != f || g && c[l].da != d)) {
        return !0;
      }
    }
    return !1;
  });
};
function Lb(c, d, e, f) {
  for (var g = 0;g < c.length;++g) {
    var h = c[g];
    if (!h.Z && h.listener == d && h.da == !!e && h.X == f) {
      return g;
    }
  }
  return -1;
}
;function Nb(c, d) {
  this.g = {};
  this.a = [];
  this.b = 0;
  var e = arguments.length;
  if (1 < e) {
    if (e % 2) {
      throw Error("Uneven number of arguments");
    }
    for (var f = 0;f < e;f += 2) {
      this.set(arguments[f], arguments[f + 1]);
    }
  } else {
    if (c) {
      c instanceof Nb ? (e = c.getKeys(), f = c.L()) : (e = $a(c), f = Za(c));
      for (var g = 0;g < e.length;g++) {
        this.set(e[g], f[g]);
      }
    }
  }
}
k = Nb.prototype;
k.wa = function() {
  return this.b;
};
k.L = function() {
  Ob(this);
  for (var c = [], d = 0;d < this.a.length;d++) {
    c.push(this.g[this.a[d]]);
  }
  return c;
};
k.getKeys = function() {
  Ob(this);
  return this.a.concat();
};
k.equals = function(c, d) {
  if (this === c) {
    return !0;
  }
  if (this.b != c.wa()) {
    return !1;
  }
  var e = d || Pb;
  Ob(this);
  for (var f, g = 0;f = this.a[g];g++) {
    if (!e(this.get(f), c.get(f))) {
      return !1;
    }
  }
  return !0;
};
function Pb(c, d) {
  return c === d;
}
k.isEmpty = function() {
  return 0 == this.b;
};
k.clear = function() {
  this.g = {};
  this.b = this.a.length = 0;
};
k.remove = function(c) {
  return Qb(this.g, c) ? (delete this.g[c], this.b--, this.a.length > 2 * this.b && Ob(this), !0) : !1;
};
function Ob(c) {
  if (c.b != c.a.length) {
    for (var d = 0, e = 0;d < c.a.length;) {
      var f = c.a[d];
      Qb(c.g, f) && (c.a[e++] = f);
      d++;
    }
    c.a.length = e;
  }
  if (c.b != c.a.length) {
    for (var g = {}, e = d = 0;d < c.a.length;) {
      f = c.a[d], Qb(g, f) || (c.a[e++] = f, g[f] = 1), d++;
    }
    c.a.length = e;
  }
}
k.get = function(c, d) {
  return Qb(this.g, c) ? this.g[c] : d;
};
k.set = function(c, d) {
  Qb(this.g, c) || (this.b++, this.a.push(c));
  this.g[c] = d;
};
k.forEach = function(c, d) {
  for (var e = this.getKeys(), f = 0;f < e.length;f++) {
    var g = e[f], h = this.get(g);
    c.call(d, h, g, this);
  }
};
k.clone = function() {
  return new Nb(this);
};
function Qb(c, d) {
  return Object.prototype.hasOwnProperty.call(c, d);
}
;function Rb(c) {
  if ("function" == typeof c.L) {
    return c.L();
  }
  if (q(c)) {
    return c.split("");
  }
  if (fa(c)) {
    for (var d = [], e = c.length, f = 0;f < e;f++) {
      d.push(c[f]);
    }
    return d;
  }
  return Za(c);
}
function Sb(c, d, e) {
  if ("function" == typeof c.forEach) {
    c.forEach(d, e);
  } else {
    if (fa(c) || q(c)) {
      tb(c, d, e);
    } else {
      var f;
      if ("function" == typeof c.getKeys) {
        f = c.getKeys();
      } else {
        if ("function" != typeof c.L) {
          if (fa(c) || q(c)) {
            f = [];
            for (var g = c.length, h = 0;h < g;h++) {
              f.push(h);
            }
          } else {
            f = $a(c);
          }
        } else {
          f = void 0;
        }
      }
      for (var g = Rb(c), h = g.length, l = 0;l < h;l++) {
        d.call(e, g[l], f && f[l], c);
      }
    }
  }
}
;function Tb(c) {
  this.a = c;
}
var Ub = /\s*;\s*/;
k = Tb.prototype;
k.set = function(c, d, e, f, g, h) {
  if (/[;=\s]/.test(c)) {
    throw Error('Invalid cookie name "' + c + '"');
  }
  if (/[;\r\n]/.test(d)) {
    throw Error('Invalid cookie value "' + d + '"');
  }
  n(e) || (e = -1);
  g = g ? ";domain=" + g : "";
  f = f ? ";path=" + f : "";
  h = h ? ";secure" : "";
  e = 0 > e ? "" : 0 == e ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(oa() + 1E3 * e)).toUTCString();
  this.a.cookie = c + "=" + d + g + f + e + h;
};
k.get = function(c, d) {
  for (var e = c + "=", f = (this.a.cookie || "").split(Ub), g = 0, h;h = f[g];g++) {
    if (0 == h.lastIndexOf(e, 0)) {
      return h.substr(e.length);
    }
    if (h == c) {
      return "";
    }
  }
  return d;
};
k.remove = function(c, d, e) {
  var f = n(this.get(c));
  this.set(c, "", 0, d, e);
  return f;
};
k.getKeys = function() {
  return Vb(this).keys;
};
k.L = function() {
  return Vb(this).values;
};
k.isEmpty = function() {
  return !this.a.cookie;
};
k.wa = function() {
  return this.a.cookie ? (this.a.cookie || "").split(Ub).length : 0;
};
k.clear = function() {
  for (var c = Vb(this).keys, d = c.length - 1;0 <= d;d--) {
    this.remove(c[d]);
  }
};
function Vb(c) {
  c = (c.a.cookie || "").split(Ub);
  for (var d = [], e = [], f, g, h = 0;g = c[h];h++) {
    f = g.indexOf("="), -1 == f ? (d.push(""), e.push(g)) : (d.push(g.substring(0, f)), e.push(g.substring(f + 1)));
  }
  return {keys:d, values:e};
}
var Wb = new Tb(document);
Wb.b = 3950;
function Xb() {
}
Xb.prototype.a = null;
function Yb(c) {
  var d;
  (d = c.a) || (d = {}, Zb(c) && (d[0] = !0, d[1] = !0), d = c.a = d);
  return d;
}
;var $b;
function ac() {
}
v(ac, Xb);
function bc(c) {
  return (c = Zb(c)) ? new ActiveXObject(c) : new XMLHttpRequest;
}
function Zb(c) {
  if (!c.b && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for (var d = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], e = 0;e < d.length;e++) {
      var f = d[e];
      try {
        return new ActiveXObject(f), c.b = f;
      } catch (g) {
      }
    }
    throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
  }
  return c.b;
}
$b = new ac;
var dc;
a: {
  var ec = m.navigator;
  if (ec) {
    var fc = ec.userAgent;
    if (fc) {
      dc = fc;
      break a;
    }
  }
  dc = "";
}
function J(c) {
  return -1 != dc.indexOf(c);
}
;function gc() {
  return J("Edge");
}
;var hc = J("Opera") || J("OPR"), K = J("Edge") || J("Trident") || J("MSIE"), ic = J("Gecko") && !(-1 != dc.toLowerCase().indexOf("webkit") && !gc()) && !(J("Trident") || J("MSIE")) && !gc(), L = -1 != dc.toLowerCase().indexOf("webkit") && !gc();
L && J("Mobile");
var jc = J("Macintosh");
J("Windows");
J("Linux") || J("CrOS");
var kc = m.navigator || null;
kc && (kc.appVersion || "").indexOf("X11");
J("Android");
!J("iPhone") || J("iPod") || J("iPad");
J("iPad");
function lc() {
  var c = dc;
  if (ic) {
    return /rv\:([^\);]+)(\)|;)/.exec(c);
  }
  if (K && gc()) {
    return /Edge\/([\d\.]+)/.exec(c);
  }
  if (K) {
    return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(c);
  }
  if (L) {
    return /WebKit\/(\S+)/.exec(c);
  }
}
function mc() {
  var c = m.document;
  return c ? c.documentMode : void 0;
}
var nc = function() {
  if (hc && m.opera) {
    var c = m.opera.version;
    return ha(c) ? c() : c;
  }
  var c = "", d = lc();
  d && (c = d ? d[1] : "");
  return K && !gc() && (d = mc(), d > parseFloat(c)) ? String(d) : c;
}(), oc = {};
function M(c) {
  var d;
  if (!(d = oc[c])) {
    d = 0;
    for (var e = fb(String(nc)).split("."), f = fb(String(c)).split("."), g = Math.max(e.length, f.length), h = 0;0 == d && h < g;h++) {
      var l = e[h] || "", p = f[h] || "", t = RegExp("(\\d*)(\\D*)", "g"), x = RegExp("(\\d*)(\\D*)", "g");
      do {
        var w = t.exec(l) || ["", "", ""], B = x.exec(p) || ["", "", ""];
        if (0 == w[0].length && 0 == B[0].length) {
          break;
        }
        d = pb(0 == w[1].length ? 0 : parseInt(w[1], 10), 0 == B[1].length ? 0 : parseInt(B[1], 10)) || pb(0 == w[2].length, 0 == B[2].length) || pb(w[2], B[2]);
      } while (0 == d);
    }
    d = oc[c] = 0 <= d;
  }
  return d;
}
function pc() {
  return K && (gc() || 9 <= qc);
}
var rc = m.document, sc = mc(), qc = !rc || !K || !sc && gc() ? void 0 : sc || ("CSS1Compat" == rc.compatMode ? parseInt(nc, 10) : 5);
var tc = !K || pc();
!ic && !K || K && pc() || ic && M("1.9.1");
K && M("9");
var uc = K || hc || L;
K && pc();
function N(c) {
  var d = document;
  return q(c) ? d.getElementById(c) : c;
}
function O(c, d) {
  var e = d || document;
  return e.querySelectorAll && e.querySelector ? e.querySelectorAll("." + c) : vc("*", c, d);
}
function P(c, d) {
  var e = d || document, f = null;
  e.getElementsByClassName ? f = e.getElementsByClassName(c)[0] : e.querySelectorAll && e.querySelector ? f = e.querySelector("." + c) : f = vc("*", c, d)[0];
  return f || null;
}
function vc(c, d, e) {
  var f = document;
  e = e || f;
  c = c && "*" != c ? c.toUpperCase() : "";
  if (e.querySelectorAll && e.querySelector && (c || d)) {
    return e.querySelectorAll(c + (d ? "." + d : ""));
  }
  if (d && e.getElementsByClassName) {
    e = e.getElementsByClassName(d);
    if (c) {
      for (var f = {}, g = 0, h = 0, l;l = e[h];h++) {
        c == l.nodeName && (f[g++] = l);
      }
      f.length = g;
      return f;
    }
    return e;
  }
  e = e.getElementsByTagName(c || "*");
  if (d) {
    f = {};
    for (h = g = 0;l = e[h];h++) {
      c = l.className, "function" == typeof c.split && xb(c.split(/\s+/), d) && (f[g++] = l);
    }
    f.length = g;
    return f;
  }
  return e;
}
function wc(c, d) {
  Xa(d, function(e, d) {
    "style" == d ? c.style.cssText = e : "class" == d ? c.className = e : "for" == d ? c.htmlFor = e : d in xc ? c.setAttribute(xc[d], e) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? c.setAttribute(d, e) : c[d] = e;
  });
}
var xc = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
function Q(c, d, e) {
  var f = arguments, g = document, h = f[0], l = f[1];
  if (!tc && l && (l.name || l.type)) {
    h = ["<", h];
    l.name && h.push(' name="', gb(l.name), '"');
    if (l.type) {
      h.push(' type="', gb(l.type), '"');
      var p = {};
      cb(p, l);
      delete p.type;
      l = p;
    }
    h.push(">");
    h = h.join("");
  }
  h = g.createElement(h);
  l && (q(l) ? h.className = l : ea(l) ? h.className = l.join(" ") : wc(h, l));
  2 < f.length && yc(g, h, f);
  return h;
}
function yc(c, d, e) {
  function f(e) {
    e && d.appendChild(q(e) ? c.createTextNode(e) : e);
  }
  for (var g = 2;g < e.length;g++) {
    var h = e[g];
    !fa(h) || ia(h) && 0 < h.nodeType ? f(h) : tb(zc(h) ? Ab(h) : h, f);
  }
}
function R(c, d) {
  c.appendChild(d);
}
function Ac(c) {
  c && c.parentNode && c.parentNode.removeChild(c);
}
function Bc(c) {
  var d;
  if (uc && !(K && M("9") && !M("10") && m.SVGElement && c instanceof m.SVGElement) && (d = c.parentElement)) {
    return d;
  }
  d = c.parentNode;
  return ia(d) && 1 == d.nodeType ? d : null;
}
function Cc(c, d) {
  var e = [];
  return Dc(c, d, e, !0) ? e[0] : void 0;
}
function Ec(c, d) {
  var e = [];
  Dc(c, d, e, !1);
  return e;
}
function Dc(c, d, e, f) {
  if (null != c) {
    for (c = c.firstChild;c;) {
      if (d(c) && (e.push(c), f) || Dc(c, d, e, f)) {
        return !0;
      }
      c = c.nextSibling;
    }
  }
  return !1;
}
function zc(c) {
  if (c && "number" == typeof c.length) {
    if (ia(c)) {
      return "function" == typeof c.item || "string" == typeof c.item;
    }
    if (ha(c)) {
      return "function" == typeof c.item;
    }
  }
  return !1;
}
;function Fc() {
  proj4.defs("EPSG:3043", "+proj=utm +zone=31 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");
  proj4.defs("EPSG:4314", "+proj=longlat +ellps=bessel +datum=potsdam +no_defs");
  proj4.defs("EPSG:4326", "+proj=longlat +datum=WGS84 +no_defs");
  proj4.defs("EPSG:900913", "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext +over no_defs");
  proj4.defs("EPSG:3857", "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs");
}
function Gc(c) {
  var d = c.hasOwnProperty("polygon") && 0 < c.polygon.length ? new ol.geom.Polygon([c.polygon]) : void 0;
  void 0 !== d && d.transform(c.source, y.projection);
  return new ol.Feature({geometry:d});
}
function Hc() {
  var c = N("transformation-chooser");
  return "tps" === c.value.toLowerCase() ? "tps" : "polynom" === c.value.toLowerCase() ? "polynom" : "affine";
}
function Ic() {
  var c = N("projection-chooser");
  return null !== c && void 0 !== c ? c.value : "EPSG:4314";
}
;function Jc(c, d) {
  this.b = q(c) ? N(c) : c;
  var e = n("vertical") && q("vertical") ? "vertical" : "horizontal", f = this.b, g = Q("div", {"class":"opacity-container"});
  f.appendChild(g);
  f = Q("div", {"class":"slider-container opacity-slider"});
  g.appendChild(f);
  this.a = Q("div", {"class":"slider"});
  f.appendChild(this.a);
  Kc(this, this.a, d, e);
}
function Kc(c, d, e, f) {
  function g(c, e) {
    "vertical" == f ? e.style.top = 100 - (c - 0) / 100 * 100 + "%" : e.style.left = (c - 0) / 100 * 100 + "%";
    e.innerHTML = c + "%";
  }
  var h = 100 * e.getOpacity();
  $(d).slider({min:0, max:100, value:h, animate:"slow", orientation:f, step:1, slide:function(c, d) {
    var f = d.value;
    g(f, l);
    e.setOpacity(f / 100);
  }, change:r(function(c, d) {
    var f = d.value;
    g(f, l);
    e.setOpacity(f / 100);
  }, c)});
  var l = Q("div", {"class":"tooltip value", innerHTML:"100%"});
  d.appendChild(l);
  e.on("change:opacity", function() {
    var c = 100 * this.getOpacity();
    19 < Math.abs(c - $(d).slider("value")) && $(d).slider("value", c);
  });
}
;!K || pc();
var Lc = !K || pc(), Mc = K && !M("9");
!L || M("528");
ic && M("1.9b") || K && M("8") || hc && M("9.5") || L && M("528");
ic && !M("8") || K && M("9");
function Nc(c, d) {
  E.call(this, c ? c.type : "");
  this.currentTarget = this.target = null;
  this.keyCode = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.h = this.j = this.a = this.i = !1;
  this.O = null;
  if (c) {
    this.type = c.type;
    this.target = c.target || c.srcElement;
    this.currentTarget = d;
    var e = c.relatedTarget;
    if (e && ic) {
      try {
        eb(e.nodeName);
      } catch (f) {
      }
    }
    this.offsetX = L || void 0 !== c.offsetX ? c.offsetX : c.layerX;
    this.offsetY = L || void 0 !== c.offsetY ? c.offsetY : c.layerY;
    this.clientX = void 0 !== c.clientX ? c.clientX : c.pageX;
    this.clientY = void 0 !== c.clientY ? c.clientY : c.pageY;
    this.keyCode = c.keyCode || 0;
    this.i = c.ctrlKey;
    this.a = c.altKey;
    this.j = c.shiftKey;
    this.h = c.metaKey;
    this.O = c;
    c.defaultPrevented && this.preventDefault();
  }
}
v(Nc, E);
Nc.prototype.stopPropagation = function() {
  Nc.ja.stopPropagation.call(this);
  this.O.stopPropagation ? this.O.stopPropagation() : this.O.cancelBubble = !0;
};
Nc.prototype.preventDefault = function() {
  Nc.ja.preventDefault.call(this);
  var c = this.O;
  if (c.preventDefault) {
    c.preventDefault();
  } else {
    if (c.returnValue = !1, Mc) {
      try {
        if (c.ctrlKey || 112 <= c.keyCode && 123 >= c.keyCode) {
          c.keyCode = -1;
        }
      } catch (d) {
      }
    }
  }
};
var Oc = "closure_lm_" + (1E6 * Math.random() | 0), Pc = {}, Qc = 0;
function S(c, d, e, f, g) {
  if (ea(d)) {
    for (var h = 0;h < d.length;h++) {
      S(c, d[h], e, f, g);
    }
    return null;
  }
  e = Rc(e);
  return c && c[Qa] ? c.D.add(String(d), e, !1, f, g) : Sc(c, d, e, !1, f, g);
}
function Sc(c, d, e, f, g, h) {
  if (!d) {
    throw Error("Invalid event type");
  }
  var l = !!g, p = Tc(c);
  p || (c[Oc] = p = new Kb(c));
  e = p.add(d, e, f, g, h);
  if (e.a) {
    return e;
  }
  f = Uc();
  e.a = f;
  f.src = c;
  f.listener = e;
  if (c.addEventListener) {
    c.addEventListener(d.toString(), f, l);
  } else {
    if (c.attachEvent) {
      c.attachEvent(Vc(d.toString()), f);
    } else {
      throw Error("addEventListener and attachEvent are unavailable.");
    }
  }
  Qc++;
  return e;
}
function Uc() {
  var c = Wc, d = Lc ? function(e) {
    return c.call(d.src, d.listener, e);
  } : function(e) {
    e = c.call(d.src, d.listener, e);
    if (!e) {
      return e;
    }
  };
  return d;
}
function T(c, d, e, f, g) {
  if (ea(d)) {
    for (var h = 0;h < d.length;h++) {
      T(c, d[h], e, f, g);
    }
  } else {
    e = Rc(e), c && c[Qa] ? c.D.add(String(d), e, !0, f, g) : Sc(c, d, e, !0, f, g);
  }
}
function Xc(c, d, e, f, g) {
  if (ea(d)) {
    for (var h = 0;h < d.length;h++) {
      Xc(c, d[h], e, f, g);
    }
  } else {
    e = Rc(e), c && c[Qa] ? c.D.remove(String(d), e, f, g) : c && (c = Tc(c)) && (d = c.za(d, e, !!f, g)) && Yc(d);
  }
}
function Yc(c) {
  if (!ga(c) && c && !c.Z) {
    var d = c.src;
    if (d && d[Qa]) {
      Mb(d.D, c);
    } else {
      var e = c.type, f = c.a;
      d.removeEventListener ? d.removeEventListener(e, f, c.da) : d.detachEvent && d.detachEvent(Vc(e), f);
      Qc--;
      (e = Tc(d)) ? (Mb(e, c), 0 == e.b && (e.src = null, d[Oc] = null)) : Ta(c);
    }
  }
}
function Vc(c) {
  return c in Pc ? Pc[c] : Pc[c] = "on" + c;
}
function Zc(c, d, e, f) {
  var g = !0;
  if (c = Tc(c)) {
    if (d = c.a[d.toString()]) {
      for (d = d.concat(), c = 0;c < d.length;c++) {
        var h = d[c];
        h && h.da == e && !h.Z && (h = $c(h, f), g = g && !1 !== h);
      }
    }
  }
  return g;
}
function $c(c, d) {
  var e = c.listener, f = c.X || c.src;
  c.na && Yc(c);
  return e.call(f, d);
}
function Wc(c, d) {
  if (c.Z) {
    return !0;
  }
  if (!Lc) {
    var e;
    if (!(e = d)) {
      a: {
        e = ["window", "event"];
        for (var f = m, g;g = e.shift();) {
          if (null != f[g]) {
            f = f[g];
          } else {
            e = null;
            break a;
          }
        }
        e = f;
      }
    }
    g = e;
    e = new Nc(g, this);
    f = !0;
    if (!(0 > g.keyCode || void 0 != g.returnValue)) {
      a: {
        var h = !1;
        if (0 == g.keyCode) {
          try {
            g.keyCode = -1;
            break a;
          } catch (l) {
            h = !0;
          }
        }
        if (h || void 0 == g.returnValue) {
          g.returnValue = !0;
        }
      }
      g = [];
      for (h = e.currentTarget;h;h = h.parentNode) {
        g.push(h);
      }
      for (var h = c.type, p = g.length - 1;!e.b && 0 <= p;p--) {
        e.currentTarget = g[p];
        var t = Zc(g[p], h, !0, e), f = f && t;
      }
      for (p = 0;!e.b && p < g.length;p++) {
        e.currentTarget = g[p], t = Zc(g[p], h, !1, e), f = f && t;
      }
    }
    return f;
  }
  return $c(c, new Nc(d, this));
}
function Tc(c) {
  c = c[Oc];
  return c instanceof Kb ? c : null;
}
var ad = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function Rc(c) {
  if (ha(c)) {
    return c;
  }
  c[ad] || (c[ad] = function(d) {
    return c.handleEvent(d);
  });
  return c[ad];
}
;function bd(c) {
  function d(c) {
    c.preventDefault();
    g.getMap().getView().setRotation(0);
  }
  c = c || {};
  var e = document.createElement("a");
  e.href = "#rotate-north";
  e.innerHTML = "N";
  e.className = "ol-has-tooltip";
  var f = Q("span", {role:"tooltip", innerHTML:C.c("rotatenorth-title")});
  e.appendChild(f);
  var g = this;
  S(e, "click", d, void 0, this);
  S(e, "touchstart", d, void 0, this);
  f = document.createElement("div");
  f.className = "rotate-north ol-unselectable";
  f.appendChild(e);
  ol.control.Control.call(this, {element:f, target:c.target});
}
ol.inherits(bd, ol.control.Control);
function U() {
  Na.call(this);
  this.D = new Kb(this);
  this.jb = this;
  this.Ea = null;
}
v(U, Na);
U.prototype[Qa] = !0;
k = U.prototype;
k.addEventListener = function(c, d, e, f) {
  S(this, c, d, e, f);
};
k.removeEventListener = function(c, d, e, f) {
  Xc(this, c, d, e, f);
};
k.dispatchEvent = function(c) {
  var d, e = this.Ea;
  if (e) {
    for (d = [];e;e = e.Ea) {
      d.push(e);
    }
  }
  var e = this.jb, f = c.type || c;
  if (q(c)) {
    c = new E(c, e);
  } else {
    if (c instanceof E) {
      c.target = c.target || e;
    } else {
      var g = c;
      c = new E(f, e);
      cb(c, g);
    }
  }
  var g = !0, h;
  if (d) {
    for (var l = d.length - 1;!c.b && 0 <= l;l--) {
      h = c.currentTarget = d[l], g = cd(h, f, !0, c) && g;
    }
  }
  c.b || (h = c.currentTarget = e, g = cd(h, f, !0, c) && g, c.b || (g = cd(h, f, !1, c) && g));
  if (d) {
    for (l = 0;!c.b && l < d.length;l++) {
      h = c.currentTarget = d[l], g = cd(h, f, !1, c) && g;
    }
  }
  return g;
};
k.U = function() {
  U.ja.U.call(this);
  if (this.D) {
    var c = this.D, d = 0, e;
    for (e in c.a) {
      for (var f = c.a[e], g = 0;g < f.length;g++) {
        ++d, Ta(f[g]);
      }
      delete c.a[e];
      c.b--;
    }
  }
  this.Ea = null;
};
function cd(c, d, e, f) {
  d = c.D.a[String(d)];
  if (!d) {
    return !0;
  }
  d = d.concat();
  for (var g = !0, h = 0;h < d.length;++h) {
    var l = d[h];
    if (l && !l.Z && l.da == e) {
      var p = l.listener, t = l.X || l.src;
      l.na && Mb(c.D, l);
      g = !1 !== p.call(t, f) && g;
    }
  }
  return g && 0 != f.fb;
}
k.za = function(c, d, e, f) {
  return this.D.za(String(c), d, e, f);
};
k.hasListener = function(c, d) {
  return this.D.hasListener(n(c) ? String(c) : void 0, d);
};
var dd = {AE:"maptype-ae", MTB:"maptype-mtb", TK:"maptype-tk", GL:"maptype-gl", ToGeoref:"georeference-false"};
function ed(c, d) {
  this.o = q(c) ? N(c) : c;
  d || delete dd.ToGeoref;
  var e = "", f;
  for (f in dd) {
    var g = C.c("facet-" + f.toLowerCase()), e = e + ('<label class="checkbox-inline" title="' + g + '"><input class="facet-search-el" type="checkbox" id="' + f + '" value="' + dd[f] + '" title="' + g + '" >' + g + "</label>")
  }
  e = Q("div", {"class":"search-facet", innerHTML:e});
  this.o.appendChild(e);
  S(e, "click", function(c) {
    c = O("facet-search-el", c.currentTarget);
    for (var e = [], d = !0, f = 0;f < c.length;f++) {
      if (c[f].checked) {
        var g = c[f].value.split("-")[0], w = c[f].value.split("-")[1];
        "georeference" !== g && e.push({key:g, value:w});
        "georeference" === g && (d = !1);
      }
    }
    this.dispatchEvent(new E("facet-change", {facets:e, georeference:d}));
  }, void 0, this);
  U.call(this);
}
v(ed, U);
function fd(c, d) {
  this.b = q(c) ? N(c) : c;
  var e = void 0 !== d ? d : [1868, 1945], f = this.b, g = Q("div", {"class":"timeslider-container"});
  f.appendChild(g);
  f = Q("label", {innerHTML:C.c("timeslider-adjust-timeperiod")});
  g.appendChild(f);
  f = Q("div", {"class":"slider-container"});
  g.appendChild(f);
  this.a = Q("div", {"class":"slider"});
  f.appendChild(this.a);
  gd(this, this.a, e);
  U.call(this);
}
v(fd, U);
function gd(c, d, e) {
  function f(c, d) {
    d.style.left = (c - e[0]) / (e[1] - e[0]) * 100 + "%";
    d.innerHTML = c;
  }
  var g, h;
  $(d).slider({range:!0, min:e[0], max:e[1], values:[e[0], e[1]], animate:"slow", orientation:"horizontal", step:1, slide:function(c, e) {
    var d = e.values;
    f(d[0], g);
    f(d[1], h);
  }, change:r(function(c, e) {
    var d = e.values;
    f(d[0], g);
    f(d[1], h);
    this.dispatchEvent(new E(hd, {time:d}));
  }, c)});
  g = Q("div", {"class":"tooltip min-value", innerHTML:e[0]});
  d.appendChild(g);
  h = Q("div", {"class":"tooltip max-value", innerHTML:e[1]});
  d.appendChild(h);
}
var hd = "timechange";
function V() {
  this.status_ = !1;
  U.call(this);
}
v(V, U);
V.prototype.B = function() {
};
V.prototype.C = function() {
};
function id(c, d, e, f) {
  this.a = [e, f];
  this.s = [new ol.interaction.Draw({source:c, type:"Point", style:function() {
    return [C.l.ma];
  }}), new ol.interaction.Draw({source:d, type:"Point", style:function() {
    return [C.l.ma];
  }})];
  V.call(this);
}
v(id, V);
id.prototype.B = function() {
  this.H();
  this.status_ = !0;
};
id.prototype.H = function() {
  for (var c = 0;c < this.a.length;c++) {
    this.a[c].addInteraction(this.s[c]);
  }
};
id.prototype.C = function() {
  this.N();
  this.status_ = !1;
};
id.prototype.N = function() {
  for (var c = 0;c < this.a.length;c++) {
    this.a[c].removeInteraction(this.s[c]);
  }
};
function jd(c, d, e, f) {
  function g(c, e, d) {
    if ("point" === c.getGeometry().getType().toLowerCase()) {
      var f = e.getSource().getFeatureById(c.getId());
      c = d.getSource().getFeatureById(c.getId());
      null != f && e.getSource().removeFeature(f);
      null != c && d.getSource().removeFeature(c);
    }
  }
  this.a = [e, f];
  this.s = [new ol.interaction.Select({condition:ol.events.condition.click, layer:c, style:function() {
    return [C.l.ma];
  }, condition:r(function(f) {
    "click" === f.type && e.forEachFeatureAtPixel(f.pixel, function(e) {
      g(e, c, d);
    });
    return !1;
  }, this)}), new ol.interaction.Select({condition:ol.events.condition.click, layer:d, style:function() {
    return [C.l.ma];
  }, condition:r(function(e) {
    "click" === e.type && f.forEachFeatureAtPixel(e.pixel, function(e) {
      g(e, c, d);
    });
    return !1;
  }, this)})];
  V.call(this);
}
v(jd, V);
jd.prototype.B = function() {
  this.H();
  this.status_ = !0;
};
jd.prototype.H = function() {
  for (var c = 0;c < this.a.length;c++) {
    this.a[c].addInteraction(this.s[c]);
  }
};
jd.prototype.C = function() {
  this.N();
  this.status_ = !1;
};
jd.prototype.N = function() {
  for (var c = 0;c < this.a.length;c++) {
    this.a[c].removeInteraction(this.s[c]);
  }
};
function kd(c, d, e, f) {
  this.a = [e, f];
  c.getStyle();
  C.l.ha();
  this.s = [new ol.interaction.Modify({features:c.getSource().getFeaturesCollection(), pixelTolerance:10, style:function() {
    return [C.l.ha()];
  }}), new ol.interaction.Modify({features:d.getSource().getFeaturesCollection(), pixelTolerance:10, style:function() {
    return [C.l.ha()];
  }})];
  this.s[0].getMap = function() {
    return e;
  };
  this.s[1].getMap = function() {
    return f;
  };
  ld(this, this.s, [c, d]);
  V.call(this);
}
v(kd, V);
kd.prototype.B = function() {
  this.H();
  this.status_ = !0;
};
kd.prototype.H = function() {
  for (var c = 0;c < this.a.length;c++) {
    this.a[c].addInteraction(this.s[c]);
  }
};
kd.prototype.C = function() {
  this.N();
  this.status_ = !1;
};
kd.prototype.N = function() {
  for (var c = 0;c < this.a.length;c++) {
    this.a[c].removeInteraction(this.s[c]);
  }
};
function ld(c, d, e) {
  function f(c, e) {
    var d = h(e.target.getMap(), e.mapBrowserPointerEvent.pixel, c);
    da(d.getId()) && this.dispatchEvent(new E("deselected", {feature:d, srcStyle:C.l.ha(d.getId()), targetStyle:C.l.ya(d.getId())}));
  }
  function g(c, e) {
    var d = h(e.target.getMap(), e.mapBrowserPointerEvent.pixel, c);
    da(d.getId()) && this.dispatchEvent(new E("selected", {feature:d, srcStyle:C.l.ya(d.getId()), targetStyle:C.l.ha(d.getId())}));
  }
  function h(c, e, d) {
    var f;
    c.forEachFeatureAtPixel(e, function(c) {
      f = c;
    });
    return d.getFeatureById(f.getId());
  }
  var l = e[0].getSource();
  e = e[1].getSource();
  d[0].on("modifystart", r(g, c, e));
  d[1].on("modifystart", r(g, c, l));
  d[0].on("modifyend", r(f, c, e));
  d[1].on("modifyend", r(f, c, l));
}
ol.Collection.prototype.addFeature = function(c) {
  var d = !1;
  this.forEach(function(e) {
    e === c && (d = !0);
  });
  d || this.push(c);
};
ol.Collection.prototype.removeFeature = function(c) {
  var d = !1;
  this.forEach(function(e) {
    e === c && (d = !0);
  });
  d && this.remove(c);
};
function md(c, d) {
  var e = d.getSource();
  this.g = c;
  this.s = [new ol.interaction.Draw({features:e.getFeaturesCollection(), type:"Polygon", style:C.l.Ga}), new ol.interaction.Modify({features:d.getSource().getFeaturesCollection(), deleteCondition:function(c) {
    return ol.events.condition.shiftKeyOnly(c) && ol.events.condition.singleClick(c);
  }})];
  this.s[0].on("drawstart", function() {
    1 <= e.getFeatures().length && this.finishDrawing();
  }, this.s[0]);
  e.getFeaturesCollection().on("add", function() {
    1 < e.getFeatures().length ? e.getFeatures().splice(1, 1) : this.dispatchEvent(new E("drawend", {feature:e.getFeatures()[0]}));
  }, this);
  V.call(this);
}
v(md, V);
md.prototype.B = function() {
  this.H();
  this.status_ = !0;
};
md.prototype.H = function() {
  for (var c = 0;c < this.s.length;c++) {
    this.g.addInteraction(this.s[c]);
  }
};
md.prototype.C = function() {
  this.N();
  this.status_ = !1;
};
md.prototype.N = function() {
  for (var c = 0;c < this.s.length;c++) {
    this.g.removeInteraction(this.s[c]);
  }
};
function nd() {
  U.call(this);
}
v(nd, U);
function od(c, d, e, f, g) {
  if (!(K || L && M("525"))) {
    return !0;
  }
  if (jc && g) {
    return pd(c);
  }
  if (g && !f) {
    return !1;
  }
  ga(d) && (d = qd(d));
  if (!e && (17 == d || 18 == d || jc && 91 == d)) {
    return !1;
  }
  if (L && f && e) {
    switch(c) {
      case 220:
      ;
      case 219:
      ;
      case 221:
      ;
      case 192:
      ;
      case 186:
      ;
      case 189:
      ;
      case 187:
      ;
      case 188:
      ;
      case 190:
      ;
      case 191:
      ;
      case 192:
      ;
      case 222:
        return !1;
    }
  }
  if (K && f && d == c) {
    return !1;
  }
  switch(c) {
    case 13:
      return !0;
    case 27:
      return !L;
  }
  return pd(c);
}
function pd(c) {
  if (48 <= c && 57 >= c || 96 <= c && 106 >= c || 65 <= c && 90 >= c || L && 0 == c) {
    return !0;
  }
  switch(c) {
    case 32:
    ;
    case 63:
    ;
    case 107:
    ;
    case 109:
    ;
    case 110:
    ;
    case 111:
    ;
    case 186:
    ;
    case 59:
    ;
    case 189:
    ;
    case 187:
    ;
    case 61:
    ;
    case 188:
    ;
    case 190:
    ;
    case 191:
    ;
    case 192:
    ;
    case 222:
    ;
    case 219:
    ;
    case 220:
    ;
    case 221:
      return !0;
    default:
      return !1;
  }
}
function qd(c) {
  if (ic) {
    c = rd(c);
  } else {
    if (jc && L) {
      a: {
        switch(c) {
          case 93:
            c = 91;
            break a;
        }
      }
    }
  }
  return c;
}
function rd(c) {
  switch(c) {
    case 61:
      return 187;
    case 59:
      return 186;
    case 173:
      return 189;
    case 224:
      return 91;
    case 0:
      return 224;
    default:
      return c;
  }
}
;function sd(c, d) {
  U.call(this);
  c && (this.ra && td(this), this.fa = c, this.qa = S(this.fa, "keypress", this, d), this.Aa = S(this.fa, "keydown", this.a, d, this), this.ra = S(this.fa, "keyup", this.b, d, this));
}
v(sd, U);
k = sd.prototype;
k.fa = null;
k.qa = null;
k.Aa = null;
k.ra = null;
k.F = -1;
k.R = -1;
k.va = !1;
var ud = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, vd = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, wd = K || 
L && M("525"), xd = jc && ic;
sd.prototype.a = function(c) {
  L && (17 == this.F && !c.i || 18 == this.F && !c.a || jc && 91 == this.F && !c.h) && (this.R = this.F = -1);
  -1 == this.F && (c.i && 17 != c.keyCode ? this.F = 17 : c.a && 18 != c.keyCode ? this.F = 18 : c.h && 91 != c.keyCode && (this.F = 91));
  wd && !od(c.keyCode, this.F, c.j, c.i, c.a) ? this.handleEvent(c) : (this.R = qd(c.keyCode), xd && (this.va = c.a));
};
sd.prototype.b = function(c) {
  this.R = this.F = -1;
  this.va = c.a;
};
sd.prototype.handleEvent = function(c) {
  var d = c.O, e, f, g = d.altKey;
  K && "keypress" == c.type ? e = this.R : L && "keypress" == c.type ? e = this.R : hc && !L ? e = this.R : (e = d.keyCode || this.R, f = d.charCode || 0, xd && (g = this.va), jc && 63 == f && 224 == e && (e = 191));
  f = e = qd(e);
  var h = d.keyIdentifier;
  e ? 63232 <= e && e in ud ? f = ud[e] : 25 == e && c.j && (f = 9) : h && h in vd && (f = vd[h]);
  this.F = f;
  c = new yd(f, 0, 0, d);
  c.a = g;
  this.dispatchEvent(c);
};
function td(c) {
  c.qa && (Yc(c.qa), Yc(c.Aa), Yc(c.ra), c.qa = null, c.Aa = null, c.ra = null);
  c.fa = null;
  c.F = -1;
  c.R = -1;
}
sd.prototype.U = function() {
  sd.ja.U.call(this);
  td(this);
};
function yd(c, d, e, f) {
  Nc.call(this, f);
  this.type = "key";
  this.keyCode = c;
}
v(yd, Nc);
function zd(c, d, e) {
  if (q(d)) {
    (d = Ad(c, d)) && (c.style[d] = e);
  } else {
    for (var f in d) {
      e = c;
      var g = d[f], h = Ad(e, f);
      h && (e.style[h] = g);
    }
  }
}
var Bd = {};
function Ad(c, d) {
  var e = Bd[d];
  if (!e) {
    var f = qb(d), e = f;
    void 0 === c.style[f] && (f = (L ? "Webkit" : ic ? "Moz" : K ? "ms" : hc ? "O" : null) + rb(f), void 0 !== c.style[f] && (e = f));
    Bd[d] = e;
  }
  return e;
}
function Cd(c, d) {
  var e = c.style[qb(d)];
  return "undefined" !== typeof e ? e : c.style[Ad(c, d)] || "";
}
function Dd(c) {
  var d = Ed, e;
  a: {
    e = 9 == c.nodeType ? c : c.ownerDocument || c.document;
    if (e.defaultView && e.defaultView.getComputedStyle && (e = e.defaultView.getComputedStyle(c, null))) {
      e = e.display || e.getPropertyValue("display") || "";
      break a;
    }
    e = "";
  }
  if ("none" != (e || (c.currentStyle ? c.currentStyle.display : null) || c.style && c.style.display)) {
    return d(c);
  }
  e = c.style;
  var f = e.display, g = e.visibility, h = e.position;
  e.visibility = "hidden";
  e.position = "absolute";
  e.display = "inline";
  c = d(c);
  e.display = f;
  e.position = h;
  e.visibility = g;
  return c;
}
function Ed(c) {
  var d = c.offsetWidth, e = c.offsetHeight, f = L && !d && !e;
  if ((!n(d) || f) && c.getBoundingClientRect) {
    var g;
    a: {
      try {
        g = c.getBoundingClientRect();
      } catch (h) {
        g = {left:0, top:0, right:0, bottom:0};
        break a;
      }
      K && c.ownerDocument.body && (c = c.ownerDocument, g.left -= c.documentElement.clientLeft + c.body.clientLeft, g.top -= c.documentElement.clientTop + c.body.clientTop);
    }
    return new Wa(g.right - g.left, g.bottom - g.top);
  }
  return new Wa(d, e);
}
K && M(12);
function Fd(c, d, e) {
  c = Q("div", {"class":"modal fade " + c, id:c});
  var f = Q("div", {"class":"modal-dialog"});
  c.appendChild(f);
  var g = Q("div", {"class":"modal-content"});
  f.appendChild(g);
  this.a = Q("div", {"class":"modal-header"});
  g.appendChild(this.a);
  f = Q("button", {"class":"close", type:"button", "data-dismiss":"modal", "aria-hidden":"true", innerHTML:"&times;"});
  this.a.appendChild(f);
  f = Q("h4", {"class":"modal-title"});
  this.a.appendChild(f);
  f = Q("div", {"class":"modal-body"});
  g.appendChild(f);
  f = Q("div", {"class":"modal-footer"});
  g.appendChild(f);
  g = Q("button", {"class":"btn btn-default", type:"button", "data-dismiss":"modal", innerHTML:"Close"});
  f.appendChild(g);
  this.G = c;
  d.appendChild(this.G);
  Gd(this.G, e || !1);
}
function Hd(c, d) {
  for (var e = Ec(d, function(c) {
    return "a" === c.nodeName.toLowerCase() && c.hasAttribute("href");
  }), f = P("modal-content", c.G), g = 0;g < e.length;g++) {
    var h = e[g];
    if (!h.hasAttribute("target") || "_self" === h.getAttribute("target")) {
      h.setAttribute("data-href", h.href);
      h.href = "#";
      var l = n("map-profile") ? "map-profile" : h.hasAttribute("data-classname") ? h.getAttribute("data-classname") : "";
      S(h, "click", na(function(c, e) {
        e.preventDefault();
        var d = e.currentTarget.getAttribute("data-href");
        Id(this, {href:d, classes:c});
        f.className = "modal-content " + c;
        return !1;
      }, l), void 0, c);
    }
  }
}
function Gd(c, d) {
  $(c).on("hidden.bs.modal", function() {
    P("modal-body", this).innerHTML = "";
    P("modal-title", this.G).innerHTML = "";
    P("modal-content", this).className = "modal-content";
    d && Ac(this);
  });
}
function Id(c, d) {
  var e = P("modal-body", c.G);
  e.innerHTML = "";
  var f = Q("iframe", {frameborder:"0", src:d.href});
  f.setAttribute("webkitallowfullscreen", "");
  f.setAttribute("mozallowfullscreen", "");
  f.setAttribute("allowfullscreen", "");
  n(d.width) && zd(f, "width", d.width);
  n(d.height) && zd(f, "height", d.height);
  n(d.classes) && G(f, d.classes);
  e.appendChild(f);
}
Fd.prototype.close = function() {
  n(this.G) && $(this.G).modal("hide");
};
Fd.prototype.open = function(c, d, e) {
  null != c && c ? P("modal-title", this.G).innerHTML = c : this.a.style.display = "none";
  n(d) && (c = P("modal-content", this.G), G(c, d));
  n(e) && Id(this, e);
  $(this.G).modal("show");
};
function Jd(c, d) {
  var e = P("modal-body", c.G);
  q(d) && (e.innerHTML = d);
}
;function Kd(c, d, e) {
  if (ha(c)) {
    e && (c = r(c, e));
  } else {
    if (c && "function" == typeof c.handleEvent) {
      c = r(c.handleEvent, c);
    } else {
      throw Error("Invalid listener argument");
    }
  }
  return 2147483647 < d ? -1 : m.setTimeout(c, d || 0);
}
;function Ld(c, d) {
  this.oa = n(d) ? d : void 0;
  this.o = n(c) ? c : void 0;
  this.u = !1;
}
function Md(c) {
  for (var d in c) {
    if (c.hasOwnProperty(d)) {
      for (var e = c[d], f = 0;f < e.length;f++) {
        e[f].setOpacity(0), e[f].setVisible(!0);
      }
    }
  }
}
function Nd(c, d) {
  Md(d);
  ({start:function(c, d, g) {
    if (g.u) {
      for (var h in c) {
        break;
      }
      var l = n(c[h]) ? c[h] : [];
      delete c[h];
      c = r(this.start, this, c, d, g);
      Kd(na(g.Lb, l, c), d, g);
      n(g.oa) && (g.oa.innerHTML = n(h) ? h : "");
      n(h) || (console.log("Visualization finished ...."), g.u = !1, n(g.o) && H(g.o, "play"));
    }
  }}).start(d, 500, c);
}
function Od(c, d) {
  for (var e = c.sort(function(c, e) {
    return c.getTime() > e.getTime() ? 1 : c.getTime() < e.getTime() ? -1 : 0;
  }), f = 0;f < e.length;f++) {
    d.removeLayer(e[f]), d.addLayer(e[f]);
  }
  for (var g = {}, f = 0;f < e.length;f++) {
    e[f].getTime() in g ? g[e[f].getTime()].push(e[f]) : g[e[f].getTime()] = [e[f]];
  }
  return g;
}
Ld.prototype.Lb = function(c, d) {
  ({Sa:function(c, d, g, h, l) {
    if (l.u) {
      var p = c[0].getOpacity() + d;
      if (1.05 >= p) {
        for (var t = 0;t < c.length;t++) {
          c[t].setOpacity(p);
        }
        Kd(na(this.Sa, c, d, g, h, l), g, this);
      } else {
        n(h) && h();
      }
    }
  }, start:function(c, d, g, h, l) {
    for (var p = 0;p < c.length;p++) {
      c[p].setOpacity(0), c[p].setVisible(!0);
    }
    Kd(na(this.Sa, c, d, g, h, l), g, this);
  }}).start(c, .1, 500, d, this);
};
function Pd(c) {
  c.u = !1;
  n(c.oa) && (c.oa.innerHTML = n(void 0) ? void 0 : "");
  n(c.o) && H(c.o, "play");
}
;var Qd = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;
function Rd(c) {
  if (Sd) {
    Sd = !1;
    var d = m.location;
    if (d) {
      var e = d.href;
      if (e && (e = (e = Rd(e)[3] || null) ? decodeURI(e) : e) && e != d.hostname) {
        throw Sd = !0, Error();
      }
    }
  }
  return c.match(Qd);
}
var Sd = L;
function Ud(c, d) {
  for (var e = c.split("&"), f = 0;f < e.length;f++) {
    var g = e[f].indexOf("="), h = null, l = null;
    0 <= g ? (h = e[f].substring(0, g), l = e[f].substring(g + 1)) : h = e[f];
    d(h, l ? decodeURIComponent(l.replace(/\+/g, " ")) : "");
  }
}
;function W(c, d) {
  this.h = this.v = this.i = "";
  this.m = null;
  this.I = this.j = "";
  this.b = !1;
  var e;
  c instanceof W ? (this.b = n(d) ? d : c.b, Vd(this, c.i), this.v = c.v, this.h = c.h, Wd(this, c.m), this.j = c.j, Xd(this, c.a.clone()), this.I = c.I) : c && (e = Rd(String(c))) ? (this.b = !!d, Vd(this, e[1] || "", !0), this.v = Yd(e[2] || ""), this.h = Yd(e[3] || "", !0), Wd(this, e[4]), this.j = Yd(e[5] || "", !0), Xd(this, e[6] || "", !0), this.I = Yd(e[7] || "")) : (this.b = !!d, this.a = new Zd(null, 0, this.b));
}
W.prototype.toString = function() {
  var c = [], d = this.i;
  d && c.push($d(d, ae, !0), ":");
  if (d = this.h) {
    c.push("//");
    var e = this.v;
    e && c.push($d(e, ae, !0), "@");
    c.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g, "%$1"));
    d = this.m;
    null != d && c.push(":", String(d));
  }
  if (d = this.j) {
    this.h && "/" != d.charAt(0) && c.push("/"), c.push($d(d, "/" == d.charAt(0) ? be : ce, !0));
  }
  (d = this.a.toString()) && c.push("?", d);
  (d = this.I) && c.push("#", $d(d, de));
  return c.join("");
};
W.prototype.clone = function() {
  return new W(this);
};
function Vd(c, d, e) {
  c.i = e ? Yd(d, !0) : d;
  c.i && (c.i = c.i.replace(/:$/, ""));
}
function Wd(c, d) {
  if (d) {
    d = Number(d);
    if (isNaN(d) || 0 > d) {
      throw Error("Bad port number " + d);
    }
    c.m = d;
  } else {
    c.m = null;
  }
}
function Xd(c, d, e) {
  d instanceof Zd ? (c.a = d, ee(c.a, c.b)) : (e || (d = $d(d, fe)), c.a = new Zd(d, 0, c.b));
}
function ge(c) {
  return c.a;
}
function Yd(c, d) {
  return c ? d ? decodeURI(c.replace(/%25/g, "%2525")) : decodeURIComponent(c) : "";
}
function $d(c, d, e) {
  return q(c) ? (c = encodeURI(c).replace(d, he), e && (c = c.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c) : null;
}
function he(c) {
  c = c.charCodeAt(0);
  return "%" + (c >> 4 & 15).toString(16) + (c & 15).toString(16);
}
var ae = /[#\/\?@]/g, ce = /[\#\?:]/g, be = /[\#\?]/g, fe = /[\#\?@]/g, de = /#/g;
function Zd(c, d, e) {
  this.b = this.a = null;
  this.i = c || null;
  this.h = !!e;
}
function ie(c) {
  c.a || (c.a = new Nb, c.b = 0, c.i && Ud(c.i, function(d, e) {
    c.add(decodeURIComponent(d.replace(/\+/g, " ")), e);
  }));
}
k = Zd.prototype;
k.wa = function() {
  ie(this);
  return this.b;
};
k.add = function(c, d) {
  ie(this);
  this.i = null;
  c = je(this, c);
  var e = this.a.get(c);
  e || this.a.set(c, e = []);
  e.push(d);
  this.b++;
  return this;
};
k.remove = function(c) {
  ie(this);
  c = je(this, c);
  return Qb(this.a.g, c) ? (this.i = null, this.b -= this.a.get(c).length, this.a.remove(c)) : !1;
};
k.clear = function() {
  this.a = this.i = null;
  this.b = 0;
};
k.isEmpty = function() {
  ie(this);
  return 0 == this.b;
};
function ke(c, d) {
  ie(c);
  d = je(c, d);
  return Qb(c.a.g, d);
}
k.getKeys = function() {
  ie(this);
  for (var c = this.a.L(), d = this.a.getKeys(), e = [], f = 0;f < d.length;f++) {
    for (var g = c[f], h = 0;h < g.length;h++) {
      e.push(d[f]);
    }
  }
  return e;
};
k.L = function(c) {
  ie(this);
  var d = [];
  if (q(c)) {
    ke(this, c) && (d = zb(d, this.a.get(je(this, c))));
  } else {
    c = this.a.L();
    for (var e = 0;e < c.length;e++) {
      d = zb(d, c[e]);
    }
  }
  return d;
};
k.set = function(c, d) {
  ie(this);
  this.i = null;
  c = je(this, c);
  ke(this, c) && (this.b -= this.a.get(c).length);
  this.a.set(c, [d]);
  this.b++;
  return this;
};
k.get = function(c, d) {
  var e = c ? this.L(c) : [];
  return 0 < e.length ? String(e[0]) : d;
};
k.toString = function() {
  if (this.i) {
    return this.i;
  }
  if (!this.a) {
    return "";
  }
  for (var c = [], d = this.a.getKeys(), e = 0;e < d.length;e++) {
    for (var f = d[e], g = encodeURIComponent(String(f)), f = this.L(f), h = 0;h < f.length;h++) {
      var l = g;
      "" !== f[h] && (l += "=" + encodeURIComponent(String(f[h])));
      c.push(l);
    }
  }
  return this.i = c.join("&");
};
k.clone = function() {
  var c = new Zd;
  c.i = this.i;
  this.a && (c.a = this.a.clone(), c.b = this.b);
  return c;
};
function je(c, d) {
  var e = String(d);
  c.h && (e = e.toLowerCase());
  return e;
}
function ee(c, d) {
  d && !c.h && (ie(c), c.i = null, c.a.forEach(function(c, d) {
    var g = d.toLowerCase();
    d != g && (this.remove(d), this.remove(g), 0 < c.length && (this.i = null, this.a.set(je(this, g), Ab(c)), this.b += c.length));
  }, c));
  c.h = d;
}
k.extend = function(c) {
  for (var d = 0;d < arguments.length;d++) {
    Sb(arguments[d], function(c, d) {
      this.add(d, c);
    }, this);
  }
};
C.f = {};
C.f.Tb = function(c) {
  c = c.split("/");
  for (var d = "/", e = 0;e < c.length;e++) {
    "" !== c[e] && (d += c[e] + "/");
  }
  return d;
};
C.f.A = function() {
  var c = new W(window.location.href), d = C.getQueryParam("L"), d = void 0 !== d && "" !== d ? d : 0, c = c.j;
  return z ? -1 === c.indexOf(Ca) ? (-1 !== c.indexOf("/de") || -1 !== c.indexOf("/en") ? c.substring(0, 3) : "") + Ca + "?" : c.substring(0, c.indexOf(Ca) + Ca.length) + "?" : c + "?" + Ca + "&L=" + d;
};
C.f.K = function() {
  var c = C.f.A(), d = c.indexOf("?");
  return c.substring(0, d);
};
C.f.xa = function(c) {
  new W(window.location.href);
  return z ? C.f.K() + ra + "&" + c : C.f.A() + "&" + ra + "&" + c;
};
C.f.xb = function(c) {
  new W(window.location.href);
  return z ? C.f.K() + ta + "&" + c : C.f.A() + "&" + ta + "&" + c;
};
C.f.wb = function(c) {
  new W(window.location.href);
  return z ? C.f.K() + sa + "&" + c : C.f.A() + "&" + sa + "&" + c;
};
C.f.zb = function() {
  new W(window.location.href);
  return z ? C.f.K() + xa : C.f.A() + "&" + xa;
};
C.f.yb = function() {
  new W(window.location.href);
  return z ? C.f.K() + za : C.f.A() + "&" + za;
};
C.f.ub = function(c) {
  new W(window.location.href);
  return z ? C.f.K() + wa + "&" + c : C.f.A() + "&" + wa + "&" + c;
};
C.f.vb = function() {
  new W(window.location.href);
  return z ? C.f.K() + Ba + "&undefined" : C.f.A() + "&" + Ba + "&undefined";
};
C.f.tb = function() {
  new W(window.location.href);
  return z ? C.f.K() + ua + "&undefined" : C.f.A() + "&" + ua + "&undefined";
};
C.f.pa = function(c, d) {
  var e = void 0 !== c ? "&objectid=" + c : void 0 !== d ? "&" + d : "";
  new W(window.location.href);
  return z ? C.f.K() + Aa + "&" + e : C.f.A() + "&" + Aa + e;
};
C.f.Ab = function(c) {
  new W(window.location.href);
  return z ? C.f.K() + Da + "&objectid=" + c : C.f.A() + "&" + Da + "&objectid=" + c;
};
C.f.Pa = function() {
  return C.f.A();
};
function X(c) {
  U.call(this);
  this.kb = new Nb;
  this.V = c || null;
  this.u = !1;
  this.S = this.a = null;
  this.j = this.la = "";
  this.b = this.ia = this.h = this.Y = !1;
  this.v = 0;
  this.m = null;
  this.Fa = le;
  this.aa = this.lb = !1;
}
v(X, U);
var le = "", me = /^https?$/i, ne = ["POST", "PUT"], oe = [];
function pe(c, d, e, f) {
  var g = new X;
  oe.push(g);
  d && g.D.add("complete", d, !1, void 0, void 0);
  g.D.add("ready", g.qb, !0, void 0, void 0);
  g.send(c, e, f, void 0);
}
k = X.prototype;
k.qb = function() {
  D(this);
  yb(oe, this);
};
k.send = function(c, d, e, f) {
  if (this.a) {
    throw Error("[goog.net.XhrIo] Object is active with another request=" + this.la + "; newUri=" + c);
  }
  d = d ? d.toUpperCase() : "GET";
  this.la = c;
  this.j = "";
  this.Y = !1;
  this.u = !0;
  this.a = this.V ? bc(this.V) : bc($b);
  this.S = this.V ? Yb(this.V) : Yb($b);
  this.a.onreadystatechange = r(this.Za, this);
  try {
    this.ia = !0, this.a.open(d, String(c), !0), this.ia = !1;
  } catch (g) {
    qe(this, g);
    return;
  }
  c = e || "";
  var h = this.kb.clone();
  f && Sb(f, function(c, e) {
    h.set(e, c);
  });
  f = vb(h.getKeys());
  e = m.FormData && c instanceof m.FormData;
  !xb(ne, d) || f || e || h.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  h.forEach(function(c, e) {
    this.a.setRequestHeader(e, c);
  }, this);
  this.Fa && (this.a.responseType = this.Fa);
  "withCredentials" in this.a && (this.a.withCredentials = this.lb);
  try {
    re(this), 0 < this.v && ((this.aa = se(this.a)) ? (this.a.timeout = this.v, this.a.ontimeout = r(this.hb, this)) : this.m = Kd(this.hb, this.v, this)), this.h = !0, this.a.send(c), this.h = !1;
  } catch (l) {
    qe(this, l);
  }
};
function se(c) {
  return K && M(9) && ga(c.timeout) && n(c.ontimeout);
}
function wb(c) {
  return "content-type" == c.toLowerCase();
}
k.hb = function() {
  "undefined" != typeof aa && this.a && (this.j = "Timed out after " + this.v + "ms, aborting", this.dispatchEvent("timeout"), this.a && this.u && (this.u = !1, this.b = !0, this.a.abort(), this.b = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), te(this)));
};
function qe(c, d) {
  c.u = !1;
  c.a && (c.b = !0, c.a.abort(), c.b = !1);
  c.j = d;
  ue(c);
  te(c);
}
function ue(c) {
  c.Y || (c.Y = !0, c.dispatchEvent("complete"), c.dispatchEvent("error"));
}
k.U = function() {
  this.a && (this.u && (this.u = !1, this.b = !0, this.a.abort(), this.b = !1), te(this, !0));
  X.ja.U.call(this);
};
k.Za = function() {
  this.i || (this.ia || this.h || this.b ? ve(this) : this.Hb());
};
k.Hb = function() {
  ve(this);
};
function ve(c) {
  if (c.u && "undefined" != typeof aa && (!c.S[1] || 4 != we(c) || 2 != xe(c))) {
    if (c.h && 4 == we(c)) {
      Kd(c.Za, 0, c);
    } else {
      if (c.dispatchEvent("readystatechange"), 4 == we(c)) {
        c.u = !1;
        try {
          var d = xe(c), e;
          a: {
            switch(d) {
              case 200:
              ;
              case 201:
              ;
              case 202:
              ;
              case 204:
              ;
              case 206:
              ;
              case 304:
              ;
              case 1223:
                e = !0;
                break a;
              default:
                e = !1;
            }
          }
          var f;
          if (!(f = e)) {
            var g;
            if (g = 0 === d) {
              var h = Rd(String(c.la))[1] || null;
              if (!h && self.location) {
                var l = self.location.protocol, h = l.substr(0, l.length - 1)
              }
              g = !me.test(h ? h.toLowerCase() : "");
            }
            f = g;
          }
          if (f) {
            c.dispatchEvent("complete"), c.dispatchEvent("success");
          } else {
            var p;
            try {
              p = 2 < we(c) ? c.a.statusText : "";
            } catch (t) {
              p = "";
            }
            c.j = p + " [" + xe(c) + "]";
            ue(c);
          }
        } finally {
          te(c);
        }
      }
    }
  }
}
function te(c, d) {
  if (c.a) {
    re(c);
    var e = c.a, f = c.S[0] ? ba : null;
    c.a = null;
    c.S = null;
    d || c.dispatchEvent("ready");
    try {
      e.onreadystatechange = f;
    } catch (g) {
    }
  }
}
function re(c) {
  c.a && c.aa && (c.a.ontimeout = null);
  ga(c.m) && (m.clearTimeout(c.m), c.m = null);
}
function we(c) {
  return c.a ? c.a.readyState : 0;
}
function xe(c) {
  try {
    return 2 < we(c) ? c.a.status : -1;
  } catch (d) {
    return -1;
  }
}
function ye(c) {
  try {
    return c.a ? c.a.responseXML : null;
  } catch (d) {
    return null;
  }
}
function Y(c) {
  if (c.a) {
    return Va(c.a.responseText);
  }
}
;C.Rb = function() {
  $(window);
};
C.pb = function(c, d) {
  var e = C.c("facetedsearch-open"), f = C.c("facetedsearch-close"), g = n("facetedsearch-open") ? "facetedsearch-open" : "active", h = n(e) ? e : "", l = n(f) ? f : "";
  S(c, "click", function(e) {
    e.preventDefault();
    I(d, g) ? (H(d, g), c.title = h) : (G(d, g), c.title = l);
  });
};
C.ca = function(c) {
  var d = Dd(N("spatialsearch-container")), e = Dd(N("layermanagement-container")), f = Dd(N("mapdiv")), e = f.width - e.width - 30, d = c.getCoordinateFromPixel([0 + d.width + 30, f.height - 25 - 30]);
  c = c.getCoordinateFromPixel([e, 35]);
  return [d[0], d[1], c[0], c[1]];
};
C.Ja = function() {
  navigator.cookieEnabled || alert("For proper working of the virtuel map forum 2.0 please activate cookies in your browser");
};
C.Ma = function(c) {
  return ge(n(c) ? new W(c) : new W(window.location.href));
};
C.Na = function(c, d) {
  return c = I(c, d) ? c : C.Na(Bc(c), d);
};
C.c = function(c) {
  if (!n(c)) {
    return "";
  }
  try {
    if (n(window.lang_dictionary)) {
      return window.lang_dictionary[c];
    }
  } catch (d) {
    return "";
  }
};
C.Cb = function(c) {
  return [[c[0], c[1]], [c[0], c[3]], [c[2], c[3]], [c[2], c[1]], [c[0], c[1]]];
};
C.getQueryParam = function(c, d) {
  return n(d) ? C.Ma(d).get(c) : C.Ma().get(c);
};
C.sb = function() {
  return Wb.get("vk2-welcomepage");
};
C.Oa = function(c, d, e, f) {
  var g = new Fd("vk2-overlay-modal", document.body, !0);
  g.open(c, n(f) ? f : "");
  Jd(g, "<p>" + d + '</p><br><button type="button" class="btn btn-primary" id="confirm-dialog-btn-yes">' + C.c("yes") + '</button><button type="button" class="btn btn-primary"id="confirm-dialog-btn-no">' + C.c("no") + "</button>");
  var h = n(e) ? e : function() {
  };
  S(N("confirm-dialog-btn-yes"), "click", function() {
    h();
    g.close();
  });
  S(N("confirm-dialog-btn-no"), "click", function() {
    g.close();
  });
};
C.Ub = function() {
  return n(Wb.get("auth_tkt")) ? !0 : !1;
};
C.Va = function(c) {
  c = O(c, (n(void 0) ? void 0 : document.body).body);
  for (var d = 0;d < c.length;d++) {
    S(c[d], "click", function(c) {
      c.preventDefault();
      try {
        var d = new Fd("vk2-overlay-modal", document.body, !0), g = this.title, h = this.getAttribute("data-classes");
        d.open(g, h, {href:this.href, classes:h});
        c.preventDefault();
      } catch (l) {
      }
    });
  }
};
C.round = function(c, d) {
  var e = n(d) ? Math.pow(10, Math.ceil(d)) : Math.pow(10, 2);
  return Math.round(c * e) / e;
};
C.Ib = function(c) {
  c = P("ol-overlaycontainer-stopevent", N(c));
  for (var d = 0;d < c.children.length;d++) {
    var e = c.children[d];
    if (I(e.children[0], "ol-has-tooltip")) {
      for (var e = O("ol-has-tooltip", e), f = 0;f < e.length;f++) {
        e[f].setAttribute("title", e[f].children[0].innerHTML);
      }
    }
  }
};
C.Vb = function(c, d, e) {
  var f = new X;
  T(f, "success", function(c) {
    c = c.target;
    n(d) && d(c);
    D(c);
  });
  T(f, "error", function(c) {
    c = c.target;
    n(e) && e(c);
  });
  f.send(c);
};
C.gb = function(c, d) {
  Wb.set(c, d, void 0, "/");
};
u("vk2.utils.setCookie", C.gb);
C.Wb = function() {
};
C.Xb = function(c, d) {
  var e = Q("div", {"class":"georef-point-container alert alert-warning", style:"display:none;"});
  c.appendChild(e);
  e.innerHTML = "+" + d + " " + C.c("points");
  $(e).fadeIn(1E3).effect("puff", {}, 3E3, function() {
    e.innerHTML = "";
  });
};
C.Nb = function(c) {
  return [Math.round(c[0]), Math.round(-1 * c[1])];
};
C.Ob = function(c) {
  return [Math.round(c[0]), Math.round(-1 * c[1])];
};
u("vk2.app.UserHistoryApp", function(c) {
  ze(this, N(c.target), N(c.targetPoints));
  $("body").scroll(function() {
    $(".lazy-image").lazyload();
  });
  $(".lazy-image").lazyload();
});
function Ae(c, d, e) {
  void 0 !== c.points && (e.innerHTML = c.points);
  if (void 0 !== c.georef_profile) {
    e = 0;
    for (var f = c.georef_profile.length;e < f;e++) {
      R(d, Be(c.georef_profile[e]));
    }
  }
  setTimeout(function() {
    $("body").scroll();
  }, 100);
}
function ze(c, d, e) {
  var f = new X;
  T(f, "success", function(c) {
    c = c.target;
    var f = Y(c);
    Ae(f, d, e);
    D(c);
  }, !1, c);
  T(f, "error", function() {
    alert("Something went wrong, while trying to fetch data from the server.");
  }, !1, c);
  c = C.f.zb();
  f.send(c, "GET");
}
function Be(c) {
  var d = void 0 !== c.transformed && !0 === c.transformed ? Ha + "?SERVICE=WMS&VERSION=1.0.0&REQUEST=GetCapabilities&map=" + c.mapid : "#", e = void 0 !== c.thumbnail ? c.thumbnail : "#", f = C.f.A() + "&oid=" + c.mapid, f = void 0 !== c.transformed && !0 === c.transformed ? '<a href="' + f + '" target="_blank" class="btn btn-default">' + C.c("evaluation-showmap") + "</a>" : "", g = void 0 !== c.transformed && !0 === c.transformed ? '<a href="' + C.f.pa(void 0, "georeferenceid=" + c.georefid) + 
  '" target="_blank" class="btn btn-default">' + C.c("evaluation-gotoprocess") + "</a>" : "", h = "" !== c.isvalide ? c.isvalide : "waiting", h = '<span class="label ' + ("waiting" === h ? "label-warning" : "isvalide" === h ? "label-success" : "label-danger") + '">' + h + "</span>";
  return Q("article", {id:c.georefid, innerHTML:'<div class="media"><a class="pull-right" href="' + d + '"><img alt="" class="lazy-image" alt="" data-original="' + e + '"></a><div class="media-body"><h3>' + c.title + "</h3><p><strong>" + C.c("georef-history-mapId") + ":</strong> " + c.mapid + "</p><p><strong>Validation:</strong> " + h + '</p><p class="links">' + f + " " + g + '</p><p class="meta">Created: ' + c.georeftime + "</p></div></div>"});
}
;u("vk2.app.WelcomePageApp", function(c) {
  var d = void 0 !== c.georefenceElClass ? O(c.georefenceElClass) : void 0, e = void 0 !== c.overallGeorefenceElClass ? O(c.overallGeorefenceElClass) : void 0, f = void 0 !== c.relGeoreferenceElClass ? O(c.relGeoreferenceElClass) : void 0, g = void 0 !== c.georeferenceUserRankingElId ? N(c.georeferenceUserRankingElId) : void 0;
  $("#" + c.deactivateWelcomePageId).change(function() {
    var c = $(this).prop("checked") ? "off" : "on";
    C.gb("vk2-welcomepage", c);
  });
  void 0 !== d && void 0 !== e && void 0 !== f && void 0 !== g && Ce(this, d, e, f, g);
});
function Ce(c, d, e, f, g) {
  var h = new X;
  T(h, "success", function(c) {
    c = c.target;
    var h = Y(c), t = h.georeference_map_count, x = t + h.missing_georeference_map_count, w = parseInt(t / x * 100);
    De(d, t);
    De(e, x);
    for (t = 0;t < f.length;t++) {
      var x = Cd(f[t], "width"), B = Cd(f[t], "margin-left");
      void 0 !== x && "" !== x && zd(f[t], "width", w + "%");
      void 0 !== B && "" !== B && (-1 < B.indexOf("-") ? zd(f[t], "margin-left", "-" + w + "%") : zd(f[t], "margin-left", w + "%"));
    }
    $("head").append("<style>.vk2WelcomePageBody .vk2GeoreferenceProgressText .content:after{ left:" + w + "%; }</style>");
    w = Math.min(h.pointoverview.length, 3);
    for (t = 0;t < w;t++) {
      x = h.pointoverview[t], x = Q("li", {innerHTML:"<span><b>" + (x.hasOwnProperty("username") ? x.username : x.userid) + ":</b> " + x.points + " " + C.c("welcome-points") + "</span>"}), g.appendChild(x);
    }
    D(c);
  }, !1, c);
  T(h, "error", function() {
    alert("Something went wrong, while trying to fetch data from the server.");
  }, !1, c);
  c = C.f.yb();
  h.send(c, "GET");
}
function De(c, d) {
  for (var e = 0;e < c.length;e++) {
    c[e].innerHTML = d;
  }
}
;function Ee(c, d) {
  function e() {
    var c = !1;
    I(g, "deactivate") ? (H(g, "deactivate"), g.title = C.c("activatemap-all")) : (G(g, "deactivate"), g.title = C.c("deactivatemap-all"), c = !0);
    for (var e = Fe(d), f = 0;f < e.length;f++) {
      e[f].setVisible(c);
    }
  }
  var f = Q("div", {"class":"deactivate-map-col-control"});
  c.appendChild(f);
  var g = Q("a", {href:"#", innerHTML:"D", "class":"deactivate", title:C.c("deactivatemap-all")});
  f.appendChild(g);
  S(g, "click", e);
  S(g, "touchstart", e);
}
;function Ge(c, d) {
  var e = Q("div", {"class":"dyn-vis-control", title:C.c("dynamicmapvis-open")}), f = Q("div", {"class":"content", style:"display:none;"});
  e.appendChild(f);
  c.appendChild(e);
  var g = Q("div", {"class":"feedback"});
  f.appendChild(g);
  g = new Ld(e, g);
  He(this, f, g, d);
  Ie(this, e, f, g);
}
function Ie(c, d, e, f) {
  var g = Q("a", {innerHTML:"o", "class":"open-dyn-vis"});
  d.insertBefore(g, d.childNodes[0] || null);
  S(g, "click", function(c) {
    c.preventDefault();
    $(e).slideToggle();
    I(c.currentTarget, "open") ? (Pd(f), H(c.currentTarget, "open"), c.currentTarget.parentElement.title = C.c("dynamicmapvis-open")) : (G(c.currentTarget, "open"), c.currentTarget.parentElement.title = C.c("dynamicmapvis-close"));
  }, void 0, c);
}
function He(c, d, e, f) {
  var g = Q("div", {"class":"start-container"});
  d.appendChild(g);
  var h = Q("a", {href:"#dynamic-start", title:C.c("dynamicmapvis-start"), innerHTML:"Start"});
  g.appendChild(h);
  S(h, "click", function(c) {
    c.preventDefault();
    c = Fe(f);
    e.u || (e.u = !0, c = Od(c, f), Nd(e, c), n(e.o) && !I(e.o, "play") && G(e.o, "play"));
  }, void 0, c);
  g = Q("span", {role:"tooltip", innerHTML:C.c("dynamicmapvis-start")});
  h.appendChild(g);
  h = Q("div", {"class":"stop-container"});
  d.appendChild(h);
  d = Q("a", {href:"#dynamic-stop", title:C.c("dynamicmapvis-stop"), innerHTML:"Stop"});
  h.appendChild(d);
  S(d, "click", function(c) {
    c.preventDefault();
    Pd(e);
  }, void 0, c);
  c = Q("span", {role:"tooltip", innerHTML:C.c("dynamicmapvis-stop")});
  d.appendChild(c);
}
;var Je = {brightness:1, contrast:1, hue:0, saturation:0};
function Ke(c) {
  function d(c) {
    c.preventDefault();
    I(c.target, "active") ? (H(c.target, "active"), $(l).fadeOut().removeClass("open")) : (G(c.target, "active"), $(l).fadeIn().addClass("open"));
  }
  function e(c) {
    c = c.glContext;
    var e = $("canvas.ol-unselectable")[0];
    if (void 0 !== c && null !== c) {
      var d = c.getGL();
      if (t) {
        glif.reset();
        for (var f in p) {
          glif.addFilter(f, p[f]);
        }
        t = !1;
      }
      glif.apply(d, e);
      c.useProgram(void 0);
    }
  }
  c = c || {};
  var f = Q("a", {"class":"ol-has-tooltip", href:"#image-manipulation", innerHTML:"I"}), g = Q("span", {role:"tooltip", innerHTML:C.c("imagemanipulation-open")}), h = Q("div", {"class":"image-manipulation ol-unselectable"}), l = Q("div", {"class":"slider-container", style:"display:none;"});
  f.appendChild(g);
  h.appendChild(f);
  h.appendChild(l);
  var p = ab(Je), t = !1, x = !1, w = r(function(c, d, f, g, h) {
    h = Q("div", {"class":"slider " + c, title:n("opt_title") ? h : "", "data-type":f});
    var l = n(g) ? g[1] : 0, B = n(g) ? g[2] : 100, w = n(g) ? g[3] : 1, ya = n(g) ? g[0] : 100, Td = r(function(c, g) {
      var h = g.value, w = this.getMap().getLayers().getArray()[0];
      x || (w.on("postcompose", e), x = !0);
      "vertical" == d ? (Ua.style.top = 100 - (h - l) / (B - l) * 100 + "%", Ua.innerHTML = h + "%") : (Ua.style.left = (h - l) / (B - l) * 100 + "%", Ua.innerHTML = h, p[f] = h, t = !0, w.changed());
    }, this);
    $(h).slider({min:l, max:B, value:ya, animate:"slow", orientation:d, step:w, slide:Td, change:Td});
    var Ua = Q("div", {"class":"tooltip value " + c, innerHTML:n(g) ? g[0] : ""});
    h.appendChild(Ua);
    return h;
  }, this), g = w("slider-contrast", "horizontal", "contrast", [1, 0, 2, .01], C.c("imagemanipulation-contrast")), B = w("slider-saturation", "horizontal", "saturation", [0, -1, 1, .01], C.c("imagemanipulation-saturation")), ya = w("slider-brightness", "horizontal", "brightness", [1, 0, 2, .1], C.c("imagemanipulation-brightness")), w = w("slider-hue", "horizontal", "hue", [0, -180, 180, 5], C.c("imagemanipulation-hue"));
  l.appendChild(g);
  l.appendChild(B);
  l.appendChild(ya);
  l.appendChild(w);
  g = Q("button", {"class":"reset-btn", title:C.c("imagemanipulation-reset"), innerHTML:"Reset"});
  l.appendChild(g);
  S(g, "click", function() {
    this.getMap().getLayers().getArray()[0].un("postcompose", e);
    x = !1;
    for (var c = O("slider", l), d = 0;d < c.length;d++) {
      var f = c[d], g = f.getAttribute("data-type"), g = Je[g];
      $(f).slider("value", g);
    }
  }, void 0, this);
  S(f, "click", d);
  S(f, "touchstart", d);
  ol.control.Control.call(this, {element:h, target:c.target});
}
ol.inherits(Ke, ol.control.Control);
function Le(c) {
  c = c || {};
  var d = n(c.spyLayer) ? c.spyLayer : new ol.layer.Tile({attribution:void 0, source:new ol.source.OSM({attribution:void 0})}), e = n(c.radius) ? parseInt(c.radius, 0) : 75, f = null, g = Q("a", {"class":"ol-has-tooltip", href:"#layerspy", innerHTML:"L"}), h = Q("div", {"class":"ol-layerspy ol-unselectable"}), l = Q("span", {role:"tooltip", innerHTML:C.c("layerspy-title")});
  h.appendChild(g);
  g.appendChild(l);
  var p = {bb:function(c) {
    c.context.restore();
  }, cb:function(c) {
    var d = c.context;
    c = c.frameState.pixelRatio;
    d.save();
    d.beginPath();
    f && (d.arc(f[0] * c, f[1] * c, e * c, 0, 2 * Math.PI), d.lineWidth = 5 * c, d.strokeStyle = "rgba(0,0,0,0.5)", d.stroke());
    d.clip();
  }, Xa:function(c) {
    f = this.getMap().getEventPixel(c.O);
    this.getMap().render();
  }, Ya:function() {
    f = null;
    this.getMap().render();
  }, Ta:function(c) {
    89 === c.keyCode ? (e = Math.min(e + 5, 150), this.getMap().render()) : 88 === c.keyCode && (e = Math.max(e - 5, 25), this.getMap().render());
  }, Ia:function(c) {
    c.target.getArray()[c.target.getLength() - 1] !== d && (this.getMap().removeLayer(d), this.getMap().addLayer(d));
  }}, t = null, x = r(function(c, d, e) {
    this.getMap().addLayer(d);
    d.on("precompose", e.cb, this);
    d.on("postcompose", e.bb, this);
    S(this.getMap().getViewport(), "mousemove", e.Xa, void 0, this);
    S(this.getMap().getViewport(), "mouseout", e.Ya, void 0, this);
    G(c, "active");
    t = t || new sd(document);
    S(t, "key", e.Ta, void 0, this);
    this.getMap().getLayers().on("add", e.Ia, this);
  }, this), w = r(function(c, e, d) {
    e.un("precompose", d.cb, this);
    e.un("postcompose", d.bb, this);
    Xc(this.getMap().getViewport(), "mousemove", d.Xa, void 0, this);
    Xc(this.getMap().getViewport(), "mouseout", d.Ya, void 0, this);
    this.getMap().removeLayer(e);
    H(c, "active");
    Xc(t, "key", d.Ta, void 0, this);
    this.getMap().getLayers().un("add", d.Ia, this);
  }, this);
  S(g, "click", r(function(c) {
    c.preventDefault();
    I(g, "active") ? w(g, d, p) : x(g, d, p);
  }, this));
  ol.control.Control.call(this, {element:h, target:c.target});
}
ol.inherits(Le, ol.control.Control);
function Me(c) {
  function d(c) {
    var d = this.getMap();
    c = ol.proj.transform(d.getEventCoordinate(c), y.projection, "EPSG:4326");
    g.innerHTML = "Lon: " + C.round(c[0], 3) + ", Lat: " + C.round(c[1], 3);
  }
  c = c || {};
  var e = document.createElement("a");
  e.href = "#mouse-position";
  e.innerHTML = "M";
  e.className = "ol-has-tooltip";
  var f = Q("span", {role:"tooltip", innerHTML:C.c("mouseposition-title")});
  e.appendChild(f);
  var g = void 0, f = r(function(c) {
    c.preventDefault();
    var e = !Hb(c.target), f = this.getMap();
    ol.proj.transform(f.getEventCoordinate(c), y.projection, "EPSG:4326");
    var t = c.target;
    Hb(t) ? Jb(t) : Ib(t);
    void 0 === g ? (t = f.getViewport(), g = Q("div", {"class":"mouse-position-box", innerHTML:""}), t.appendChild(g)) : g.innerHTML = "";
    e ? S(f.getViewport(), "mousemove", d, void 0, this) : Xc(f.getViewport(), "mousemove", d, void 0, this);
    d.call(this, [c]);
    c = g;
    Hb(c) ? Jb(c) : Ib(c);
  }, this);
  S(e, "click", f);
  S(e, "touchstart", f);
  f = document.createElement("div");
  f.className = "mouse-position ol-unselectable";
  f.appendChild(e);
  ol.control.Control.call(this, {element:f, target:c.target});
}
ol.inherits(Me, ol.control.Control);
function Ne(c, d, e) {
  var f = c.getVisible() ? "visible" : "notvisible", g = Q("li", {"class":"layermanagement-record " + f, id:d, "data-id":c.getId()});
  d = Q("div", {"class":"control-container"});
  g.appendChild(d);
  f = Q("button", {"class":"move-layer-top minimize-tool", type:"button", title:C.c("factory-move-top"), innerHTML:C.c("factory-move-top")});
  d.appendChild(f);
  S(f, "click", function(d) {
    e.removeLayer(c);
    e.addLayer(c);
    d.stopPropagation();
  });
  f = Q("button", {"class":"disable-layer minimize-tool", type:"button", title:C.c("factory-show-map"), innerHTML:C.c("factory-show-map")});
  d.appendChild(f);
  S(f, "click", function() {
    I(g, "visible") ? (Fb(g, "visible", "notvisible"), c.setVisible(!1)) : (Fb(g, "notvisible", "visible"), c.setVisible(!0));
  });
  f = Q("button", {"class":"remove-layer minimize-tool", type:"button", title:C.c("factory-rm-map"), innerHTML:C.c("factory-rm-map")});
  d.appendChild(f);
  S(f, "click", function(d) {
    e.removeLayer(c);
    d.stopPropagation();
  });
  f = Q("div", {"class":"drag-btn"});
  d.appendChild(f);
  f = Q("a", {"class":"thumbnail", href:"#"});
  g.appendChild(f);
  var h = Q("img", {onerror:'this.onerror=null;this.src="http://www.deutschefotothek.de/images/noimage/image120.jpg"', alt:"...", src:c.Qa()});
  f.appendChild(h);
  f = Q("div", {"class":"metadata-container"});
  g.appendChild(f);
  h = Q("h4", {innerHTML:c.Ra()});
  f.appendChild(h);
  h = Q("div", {"class":"timestamps"});
  f.appendChild(h);
  f = Q("span", {"class":"timestamps-label", innerHTML:C.c("timestamp") + " " + c.getTime()});
  h.appendChild(f);
  Wb.get("vk2-auth") && (f = Q("a", {"class":"georeference-update", title:C.c("factory-update-georef") + " ...", innerHTML:C.c("factory-update-georef") + " ...", target:"_blank", href:C.f.pa(c.getId())}), d.appendChild(f));
  new Jc(g, c);
  c.on("change:visible", function() {
    !c.getVisible() && I(g, "visible") ? Fb(g, "visible", "notvisible") : c.getVisible() && I(g, "notvisible") && Fb(g, "notvisible", "visible");
  });
  return g;
}
;function Oe(c, d, e) {
  $(c).hover(function() {
    I(this, "hover") || (e.getSource().clear(), e.getSource().addFeature(d), G(this, "hover"), A && void 0 !== window.ol3d && window.ol3d.getAutoRenderLoop().restartRenderLoop());
  }, function() {
    I(this, "hover") && (e.getSource().clear(), H(this, "hover"));
  });
}
;function Pe(c, d, e) {
  pe(C.f.vb(), function(c) {
    200 === xe(c.target) ? d(c) : e(c);
  }, "POST", "req=" + JSON.stringify(c));
}
function Qe(c, d) {
  pe(C.f.tb(), d, "POST", "req=" + JSON.stringify(c));
}
;function Z(c) {
  this.id_ = n(c.id) ? c.id : void 0;
  this.time_ = c.time;
  this.title_ = n(c.title) ? c.title : void 0;
  this.thumb_ = n(c.thumbnail) ? c.thumbnail : Fa;
  this.allowUseInLayerManagement = !0;
  for (var d = [], e = 0;e < Ga.length;e++) {
    d.push(c.tms.replace("{s}", Ga[e]) + "/{z}/{x}/{-y}.png");
  }
  e = Re(c.clip, this.id_, this.time_, this.title_);
  d = new ol.layer.Tile({extent:c.clip.getExtent(), source:new ol.source.XYZ({maxZoom:15, urls:d, crossOrigin:"*"})});
  e = new ol.layer.Vector({source:new ol.source.Vector({features:[e]}), style:function() {
    return [C.l.ob];
  }});
  c.layers = [d, e];
  ol.layer.Group.call(this, c);
}
ol.inherits(Z, ol.layer.Group);
function Re(c, d, e, f) {
  c = new ol.Feature(c);
  c.setProperties({objectid:d, time:e, title:f});
  c.setId(d);
  return c;
}
Z.prototype.getTime = function() {
  return this.time_;
};
Z.prototype.Ra = function() {
  return this.title_;
};
Z.prototype.Qa = function() {
  return this.thumb_;
};
Z.prototype.getId = function() {
  return this.id_;
};
function Se(c) {
  this.id_ = n(c.id) ? c.id : void 0;
  this.time_ = c.time;
  this.title_ = n(c.title) ? c.title : void 0;
  this.thumb_ = n(c.thumbnail) ? c.thumbnail : Fa;
  this.allowUseInLayerManagement = !0;
  for (var d = [], e = 0;e < Ga.length;e++) {
    d.push(c.tms.replace("{s}", Ga[e]) + "/{z}/{x}/{-y}.png");
  }
  c.extent = c.clip.getExtent();
  c.source = new ol.source.XYZ({maxZoom:15, urls:d, crossOrigin:"*"});
  ol.layer.Tile.call(this, c);
}
ol.inherits(Se, ol.layer.Tile);
Se.prototype.getTime = function() {
  return this.time_;
};
Se.prototype.Ra = function() {
  return this.title_;
};
Se.prototype.Qa = function() {
  return this.thumb_;
};
Se.prototype.getId = function() {
  return this.id_;
};
function Te(c, d) {
  var e = n(c.ea) ? c.ea : void 0, f = n(c.projection) ? c.projection : "EPSG:900913", g = n(c.ib) ? c.ib : void 0, h = n(c.Ua) ? c.Ua : void 0, l = void 0 === e ? void 0 : e.getExtent();
  c.source = new ol.source.TileWMS({url:g, params:{LAYERS:h, VERSION:"1.1.1"}, projection:f, extent:l});
  c.preload = Infinity;
  f = new ol.layer.Tile(c);
  f.set("wms_url", g);
  f.set("layerid", h);
  f.Bb = r(function(c) {
    for (var d = [], f = e.getCoordinates()[0], g = 0;g < f.length;g++) {
      d.push(c.getPixelFromCoordinate(f[g]));
    }
    return d;
  }, f);
  f.rb = function(c, d, e) {
    e.beginPath();
    e.moveTo(c[0][0] * d, c[0][1] * d);
    for (var f = 1;f < c.length;f++) {
      e.lineTo(c[f][0] * d, c[f][1] * d);
    }
    e.closePath();
  };
  n(e) && (f.on("precompose", function(c) {
    var e = c.context, f = this.Bb(d);
    e.save();
    this.rb(f, c.frameState.pixelRatio, e);
    e.clip();
  }, f), f.on("postcompose", function(c) {
    c.context.restore();
  }));
  return f;
}
;function Ue(c, d, e) {
  this.a = d;
  this.g = e;
  d = q(c) ? N(c) : c;
  c = Q("div", {"class":"layermanagement-container", id:"layermanagement-container"});
  d.appendChild(c);
  d = Q("div", {"class":"heading"});
  c.appendChild(d);
  e = Q("span", {"class":"header-label", innerHTML:C.c("layermanagement-header-lbl")});
  d.appendChild(e);
  e = Q("ul", {"class":"layermanagement-body", innerHTML:'<li class="empty">' + C.c("layermanagement-start-msg") + "</li>"});
  c.appendChild(e);
  this.b = e;
  new Ee(d, this.g);
  new Ge(d, this.g);
  this.H();
  U.call(this);
}
v(Ue, U);
function Ve(c) {
  c = c.a.getArray();
  for (var d = [], e = 0, f = c.length;e < f;e++) {
    n(c[e].allowUseInLayerManagement) && c[e].allowUseInLayerManagement && d.push(c[e]);
  }
  return d;
}
function We(c, d) {
  for (var e = c.a.getArray(), f = 0, g = e.length;f < g;f++) {
    if (d === e[f]) {
      return f;
    }
  }
}
Ue.prototype.h = function(c) {
  if (n(c.element.allowUseInLayerManagement) && c.element.allowUseInLayerManagement) {
    this.b.innerHTML = "";
    c = Ve(this);
    for (var d = c.length - 1;0 <= d;d--) {
      var e = Ne(c[d], d, this.g);
      this.b.appendChild(e);
    }
  }
  $(this.b).sortable({revert:!0, handle:".drag-btn", stop:r(function(c, d) {
    var e = Ve(this), l = O("layermanagement-record", this.b), p = l.length - parseInt(l[d.item.index()].id, 0) - 1, t = d.item.index(), x = e.length - 1 - t, l = parseInt(l[t].id, 0);
    n(l) && p != t && (p = e[l], t = We(this, p), this.a.removeAt(t), e = We(this, e[x]), x > l ? this.a.insertAt(e + 1, p) : this.a.insertAt(e, p));
  }, this)});
};
Ue.prototype.H = function() {
  this.a.on("add", this.h, this);
  this.a.on("remove", this.h, this);
};
Ue.prototype.N = function() {
  this.a.un("add", this.h, this);
  this.a.un("remove", this.h, this);
};
Ue.prototype.getLayers = function() {
  return this.a.getArray();
};
function Xe() {
  return {query:{filtered:{filter:{bool:{must:[]}}}}, sort:{}};
}
function Ye(c) {
  var d = {geo_shape:{}};
  d.geo_shape.geometry = {relation:"intersects", shape:{type:"polygon", coordinates:[c]}};
  return d;
}
function Ze(c) {
  for (var d = [], e = {bool:{should:d}}, f = 0;f < c.length;f++) {
    var g = c[f], h = {term:{}};
    h.term[g.key] = g.value.toLowerCase();
    d.push(h);
  }
  return e;
}
function $e(c) {
  var d = {range:{}};
  d.range.time = {gte:c[0], lte:c[1]};
  return d;
}
function af(c, d) {
  var e = pa + "/map/_mget", f = JSON.stringify({ids:c});
  pe(e, d, "POST", f);
}
function bf(c, d) {
  for (var e = [], f = {query:{filtered:{filter:{bool:{should:e}}}}}, g = 0, h = d.length;g < h;g++) {
    var l = {term:{}};
    l.term[c] = d[g];
    e.push(l);
  }
  return f;
}
;u("vk2.app.GeoreferenceChooseApp", function(c) {
  this.a = [];
  cf(this, N(c.target), N(c.targetCount));
});
function df(c, d) {
  d.innerHTML = "";
  var e = Q("div", {"class":"form-group"}), f = Q("input", {type:"text", id:"georeference-search", name:"georeference-search", "class":"form-control", placeholder:C.c("georef-search-field") + ":"}), g = Q("ul");
  e.appendChild(f);
  d.appendChild(e);
  d.appendChild(g);
  var h = r(function(c) {
    g.innerHTML = "";
    for (var d = 0, e = c.length;d < e;d++) {
      R(g, ef(c[d]));
    }
    setTimeout(function() {
      $("body").scroll();
    }, 100);
  }, c), l;
  S(f, "keydown", function(c) {
    clearTimeout(l);
    l = setTimeout(r(function() {
      for (var d = c.target.value, e = $.extend(!0, [], this.a), f = [], g = e.length - 1;0 <= g;g--) {
        0 === e[g]._source.title.indexOf(d, 0) && f.push(e[g]);
      }
      h(f);
    }, this), 1E3);
  }, void 0, c);
  h(c.a);
}
function ff(c, d, e, f) {
  void 0 !== d.hits && void 0 !== d.hits.total && (f.innerHTML = d.hits.total);
  void 0 !== d.hits && void 0 !== d.hits.hits && 0 < d.hits.hits.length && (c.a = d.hits.hits, df(c, e));
  $("body").scroll(function() {
    $(".lazy-image").lazyload();
  });
  $(".lazy-image").lazyload();
}
function cf(c, d, e) {
  var f = new X;
  T(f, "success", function(c) {
    c = c.target;
    var f = Y(c);
    ff(this, f, d, e);
    D(c);
  }, !1, c);
  T(f, "error", function() {
    alert("Something went wrong, while trying to fetch data from the server.");
  }, !1, c);
  c = pa + "/_search?size=2000";
  var g = bf("georeference", [!1]);
  g.sort = {title:{order:"asc"}};
  f.send(c, "POST", JSON.stringify(g));
}
function ef(c) {
  var d = c._source, e = c._id;
  c = d.maptype;
  var f = void 0 !== d.thumb ? d.thumb : "#", e = void 0 !== e ? C.f.pa(e) : "#", g = d.time;
  return Q("li", {id:d.id, innerHTML:'<div class="container record-container"><div class="image"><img class="lazy-image" alt="" data-original="' + f + '"></div><div class="body"><p><strong>' + d.title + "</strong></p><p>" + C.c("georef-choose-time") + ": " + g + "</p><p>" + C.c("georef-choose-maptype") + ": " + c + '</p></div><div class="tools"><a class="btn btn-primary" href="' + e + '" target="_top">' + C.c("georef-choose-goToGeoreference") + "</a></div></div>"});
}
;function gf(c) {
  this.m = n(c.projection) ? c.projection : "EPSG:900913";
  this.aa = n(c.Fb) ? c.Fb : 20;
  this.Ba = void 0;
  this.j = new ol.Collection;
  this.S = "title";
  this.Y = "ascending";
  this.b = 0;
  this.h = void 0;
  this.a = {ba:n(c.time) ? c.time[0] : 1868, ua:n(c.time) ? c.time[1] : 1945};
  this.g = c.map;
  this.v = [];
  this.V = !0;
  this.B();
  U.call(this);
}
v(gf, U);
gf.prototype.B = function() {
  this.g.on("moveend", function() {
    var c = C.ca(this.g);
    n(this.Ba) && ol.extent.equals(this.Ba, c) || this.ta();
  }, this);
};
function hf(c, d, e) {
  var f = [c.a.ba + "-01-01", c.a.ua + "-01-01"], g = "ascending" === c.Y ? "asc" : "desc";
  if (c.V) {
    d = C.Cb(ol.proj.transformExtent(d, e, qa));
    e = c.S;
    c = c.v;
    var h = [], l = Xe();
    h.push($e(f));
    h.push(Ye(d));
    h.push(Ze(c));
    h.push({term:{georeference:!0}});
    l.query.filtered.filter.bool.must = h;
    l.sort[e] = {order:g};
    return l;
  }
  d = c.S;
  c = c.v;
  e = [];
  h = Xe();
  e.push($e(f));
  e.push(Ze(c));
  e.push({term:{georeference:!1}});
  h.query.filtered.filter.bool.must = e;
  h.sort[d] = {order:g};
  return h;
}
gf.prototype.la = function(c) {
  this.dispatchEvent(new E("refresh", {features:c, totalFeatureCount:this.h}));
};
gf.prototype.ia = function(c) {
  this.dispatchEvent(new E("paginate", {features:c, totalFeatureCount:this.h}));
};
function jf(c, d, e, f) {
  d = hf(c, d, e);
  e = pa + "/_search?from=" + c.b + "&size=" + c.aa;
  var g = new X;
  T(g, "success", function(c) {
    c = c.target;
    if (Y(c)) {
      var d = Y(c);
      this.h = d.hits.total;
      D(c);
      c = Ja(d.hits.hits);
      this.j.extend(c);
      this.b += c.length;
      f.call(this, c);
    } else {
      console.log("Response is empty");
    }
  }, !1, c);
  g.send(e, "POST", JSON.stringify(d));
}
gf.prototype.ta = function() {
  var c = C.ca(this.g);
  kf(this, c, this.m);
  this.Ba = Ab(c);
};
function kf(c, d, e) {
  c.j.clear();
  c.b = 0;
  jf(c, d, e, c.la);
}
;function lf(c, d) {
  this.o = q(c) ? N(c) : c;
  this.a = new gf({projection:"EPSG:900913", map:d});
  S(this.a, "refresh", r(this.v, this));
  S(this.a, "paginate", r(this.ta, this));
  this.h = ["time", "title", "georeference"];
  this.J = new ol.layer.Vector({source:new ol.source.Vector, style:function() {
    return [C.l.nb];
  }});
  A && void 0 !== window.ol3d && this.J.set("altitudeMode", "clampToGround");
  d.addLayer(this.J);
  d.getLayers().on("add", function(c) {
    c = c.target.getArray()[c.target.getLength() - 1];
    if (c instanceof Z || c instanceof Se || "click" == c.get("type")) {
      d.removeLayer(this.J), d.addLayer(this.J);
    }
  }, this);
  mf(this, this.o);
  nf(this, this.o);
  of(this);
  pf(this);
  qf(this);
  U.call(this);
}
v(lf, U);
function mf(c, d) {
  var e = Q("div", {"class":"mapsearch-container"});
  d.appendChild(e);
  var f = Q("div", {"class":"panel panel-default searchTablePanel"});
  e.appendChild(f);
  var g = Q("div", {"class":"panel-heading"});
  f.appendChild(g);
  var h = Q("div", {"class":"content"});
  g.appendChild(h);
  c.j = Q("div");
  h.appendChild(c.j);
  var l = Q("a", {innerHTML:"o", title:C.c("facetedsearch-open")});
  h.appendChild(l);
  h = Q("div", {"class":"facet-container"});
  g.appendChild(h);
  C.pb(l, e);
  c.m = new ed(h, !1);
  e = Q("div", {"class":"panel-body"});
  f.appendChild(e);
  f = Q("div", {"class":"mapsearch-list"});
  e.appendChild(f);
  e = Q("div", {"class":"list-header"});
  f.appendChild(e);
  for (g = 0;g < c.h.length;g++) {
    h = c.h[g], l = Q("div", {"class":"inner-col " + h}), h = Q("div", {"data-type":h, "class":"sort-element " + h, innerHTML:C.c("mapsearch-" + h) + ' <span class="caret caret-reversed"></span>'}), l.appendChild(h), e.appendChild(l);
  }
  c.b = Q("ul", {id:"mapsearch-contentlist", "class":"mapsearch-contentlist"});
  f.appendChild(c.b);
}
function pf(c) {
  n(c.b) && S(c.b, "click", function(c) {
    c.preventDefault();
    var e = C.Na(c.O.target, "mapsearch-record"), f;
    this.a.j.forEach(function(c) {
      c.get("id") == e.id && (f = c);
    });
    this.dispatchEvent(new E("click-record", {feature:f}));
  }, void 0, c);
}
function nf(c, d) {
  for (var e = O("sort-element", d), f = 0;f < e.length;f++) {
    S(e[f], "click", function(c) {
      c = c.target.getAttribute("data-type");
      for (var d = P("sort-element " + c), e = I(d, "ascending") ? "descending" : "ascending", f = O("sort-element"), t = 0;t < f.length;t++) {
        H(f[t], "descending"), H(f[t], "ascending");
      }
      G(d, e);
      this.a.S = c;
      this.a.Y = e;
      c = this.a;
      kf(c, C.ca(c.g), c.m);
    }, void 0, c);
  }
}
function of(c) {
  var d = !1;
  n(c.b) && S(c.b, "scroll", function(c) {
    if (!d) {
      d = !0;
      c = c.currentTarget;
      if (c.offsetHeight + c.scrollTop >= c.scrollHeight && (c = this.a, !(c.j.getLength() >= c.h) && (c = this.a, c.b < c.h && 500 > c.b))) {
        var f = C.ca(c.g);
        jf(c, f, c.m, c.ia);
      }
      d = !1;
    }
  }, void 0, c);
}
function qf(c) {
  S(c.m, "facet-change", function(c) {
    var e = this.a;
    c = c.target;
    e.V = c.georeference;
    e.v = c.facets;
    e.ta();
  }, void 0, c);
}
function rf(c, d) {
  for (var e = 0;e < d.length;e++) {
    var f, g = d[e];
    f = Q("li", {"class":"mapsearch-record type " + g.get("maptype"), id:g.get("id")});
    var h = Q("span", {"class":"data-col time", innerHTML:parseInt(g.get("time"), 0)});
    f.appendChild(h);
    h = Q("span", {"class":"data-col title", innerHTML:g.get("title")});
    f.appendChild(h);
    h = Q("span", {"class":"data-col time", innerHTML:1});
    f.appendChild(h);
    h = Q("div", {"class":"view-item"});
    f.appendChild(h);
    var l = Q("a", {"class":"thumbnail", href:"#"});
    h.appendChild(l);
    var p = Q("img", {onerror:'this.onerror=null;this.src="http://www.deutschefotothek.de/images/noimage/image120.jpg"', alt:"...", src:g.get("thumb")});
    l.appendChild(p);
    l = Q("div", {"class":"overview"});
    h.appendChild(l);
    h = Q("h2", {innerHTML:g.get("title")});
    l.appendChild(h);
    h = Q("p", {"class":"details"});
    l.appendChild(h);
    l = Q("div", {"class":"timestamp", innerHTML:C.c("timestamp") + " " + g.get("time")});
    h.appendChild(l);
    l = Q("div", {"class":"scale", innerHTML:C.c("factory-scale") + " 1:25.000"});
    h.appendChild(l);
    g.get("georeference") || (g = Q("div", {"class":"georeference", innerHTML:C.c("factory-no-georef")}), h.appendChild(g));
    c.b.appendChild(f);
    n(c.J) && Oe(f, d[e], c.J);
  }
}
lf.prototype.v = function(c) {
  sf(this, c.target.totalFeatureCount);
  this.b.innerHTML = "";
  rf(this, c.target.features);
};
lf.prototype.ta = function(c) {
  sf(this, c.target.Zb);
  rf(this, c.target.features);
};
function sf(c, d) {
  c.j.innerHTML = 0 < d ? d + " " + C.c("mapsearch-found-maps") : C.c("mapsearch-found-no-maps");
}
;function tf(c) {
  this.j = q(c) ? N(c) : c;
  uf(this, this.j);
  this.b = {};
  this.m = {placename:r(function(c) {
    this.b.hasOwnProperty(c) ? vf(this, this.b[c][0]) : wf(this, c, r(function(c) {
      0 < c.length ? vf(this, c[0]) : alert("The choosen placename is unknown.");
    }, this));
  }, this)};
  xf(this);
  yf(this);
  U.call(this);
}
v(tf, U);
function uf(c, d) {
  var e = Q("div", {"class":"gazetteersearch-container"});
  d.appendChild(e);
  var f = Q("div", {"class":"form-group"});
  e.appendChild(f);
  c.a = Q("input", {placeholder:C.c("gazetteer-placeholder"), type:"text", "class":"form-control gazetteersearch-input"});
  f.appendChild(c.a);
  c.h = Q("input", {value:C.c("gazetteer-submit"), type:"submit", "class":"form-control gazetteersearch-submit"});
  f.appendChild(c.h);
}
function xf(c) {
  $(c.a).autocomplete({source:r(function(c, e) {
    wf(this, c.term, e);
  }, c), delay:300, minLength:3, autoFocus:!0, select:r(function(c, e) {
    vf(this, e.item);
  }, c), open:function() {
    $(this).removeClass("ui-corner-all").addClass("ui-corner-top");
  }, close:function() {
    $(this).removeClass("ui-corner-top").addClass("ui-corner-all");
  }});
}
function yf(c) {
  var d = r(function(c) {
    c = -1 < c.indexOf(",") ? c.split(",")[0] : c;
    this.m.placename(c);
  }, c);
  S(c.a, "keydown", function(c) {
    13 === c.keyCode && d(this.a.value);
  }, void 0, c);
  S(c.h, "click", function() {
    d(this.a.value);
  }, void 0, c);
}
function wf(c, d, e) {
  G(c.a, "loading");
  pe("https://search.mapzen.com/v1/autocomplete?api_key=search-53q8sJs&text=" + d, r(function(c) {
    c = c.target;
    var g;
    if (Y(c)) {
      g = Y(c);
    } else {
      try {
        g = c.a ? c.a.responseText : "";
      } catch (h) {
        g = "";
      }
    }
    D(c);
    c = $.map(g.features, function(c) {
      return {label:c.properties.label, value:c.properties.name, lonlat:{x:c.geometry.coordinates[0], y:c.geometry.coordinates[1]}, type:c.properties.layer};
    });
    this.b[d] = c;
    e(c);
    I(this.a, "loading") && H(this.a, "loading");
  }, c), "GET");
}
function vf(c, d) {
  c.dispatchEvent(new E(zf, {location_type:d.type, lonlat:[d.lonlat.x, d.lonlat.y], srs:n(void 0) ? void 0 : "EPSG:4326"}));
}
var zf = "jumpto";
function Af(c, d) {
  this.I = q(c) ? N(c) : c;
  Bf(this, this.I);
  this.i = new tf(this.a);
  this.j = new fd(this.a, Ea);
  this.b = new lf(this.a, d);
  S(this.j, "timechange", function(c) {
    var d = this.b.a, g = c.target.time[0];
    c = c.target.time[1];
    var h = d.a.ba;
    if (null != g && ga(g)) {
      if (g > d.a.ua) {
        throw {name:"WrongParameterExecption", message:"Start value shouldn't be higher than the end value."};
      }
      d.a.ba = g;
    }
    if (null != c && ga(c)) {
      if (c < d.a.ba) {
        throw d.a.ba = h, {name:"WrongParameterExecption", message:"End value shouldn't be lower than the start value."};
      }
      d.a.ua = c;
    }
    d = this.b.a;
    kf(d, C.ca(d.g), d.m);
  }, void 0, this);
}
function Bf(c, d) {
  var e = Q("div", {"class":"spatialsearch-inner-container"});
  d.appendChild(e);
  var f = Q("div", {"class":"spatialsearch-content-panel"});
  e.appendChild(f);
  e = Q("div", {"class":"header-container"});
  f.appendChild(e);
  c.h = Q("div", {"class":"content"});
  e.appendChild(c.h);
  c.a = Q("div", {"class":"body-container"});
  f.appendChild(c.a);
}
;function Cf(c, d, e) {
  this.a = q(c) ? N(c) : c;
  c = Q("div", {"class":"container"});
  this.a.appendChild(c);
  var f = Q("div", {"class":"row-metadata"});
  c.appendChild(f);
  c = Q("div", {"class":"col-md-8 col-lg-8 metdata-col"});
  f.appendChild(c);
  var g = Q("div", {"class":"col-md-4 col-lg-4 thumbnail-col"});
  f.appendChild(g);
  var h = e.description, f = Q("div", {"class":"description"});
  c.appendChild(f);
  h = Q("h3", {innerHTML:h});
  f.appendChild(h);
  f = Q("img", {"class":"thumbnail", src:e.thumb});
  g.appendChild(f);
  h = C.c("metadata-keyword");
  f = e.keywords;
  g = Df(c);
  h = Q("div", {"class":"label", innerHTML:h});
  g.appendChild(h);
  f = Q("div", {innerHTML:f});
  g.appendChild(f);
  for (g = 0;g < e["online-resources"].length;g++) {
    var h = C.c("metadata-online-res"), f = e["online-resources"][g].url, l = Df(c), h = Q("div", {"class":"label", innerHTML:h});
    l.appendChild(h);
    h = Q("div");
    l.appendChild(h);
    var l = new W(f), p = !1;
    n(l.a.get("SERVICE")) && "wcs" == l.a.get("SERVICE").toLowerCase() && l.a.get("REQUEST") && "getcoverage" == l.a.get("REQUEST").toLowerCase() && (p = !0);
    Xd(l, "", void 0);
    f = p ? Q("a", {target:"_blank", href:f, innerHTML:l.toString(), "class":"download"}) : Q("a", {target:"_blank", href:f, innerHTML:l.toString()});
    h.appendChild(f);
  }
  f = C.c("metadata-spatial-res");
  e = e.denominator;
  g = Df(c);
  f = Q("div", {"class":"label", innerHTML:f});
  g.appendChild(f);
  f = Q("div");
  g.appendChild(f);
  g = Q("label", {innerHTML:""});
  f.appendChild(g);
  e = Q("span", {innerHTML:e});
  f.appendChild(e);
  d = Q("span", {"class":"unique-id metadata-content-row", innerHTML:'<div class="label">' + C.c("metadata-unqiue-id") + "</div><div>" + d + "</div>"});
  c.appendChild(d);
}
function Df(c) {
  var d = Q("div", {"class":"metadata-content-row"});
  c.appendChild(d);
  return d;
}
;function Ef() {
  U.call(this);
}
v(Ef, U);
function Ff(c, d) {
  var e = ge(new W(window.location.href)), f, g, h, l, p, t;
  if (ke(e, "c")) {
    var x = e.get("c").split(",");
    f = ol.proj.transform([parseFloat(x[0], 0), parseFloat(x[1], 0)], "EPSG:4326", y.projection);
    g = void 0 !== e.get("z") ? parseInt(e.get("z"), 0) : 4;
    h = void 0 !== e.get("t") ? parseFloat(e.get("t"), 5) : 0;
    p = void 0 !== e.get("a") ? parseFloat(e.get("a"), 1) : 1E4;
    l = void 0 !== e.get("d") ? parseFloat(e.get("d"), 1) : 1E4;
    t = void 0 !== e.get("r") ? parseFloat(e.get("r"), 5) : 0;
    if (isNaN(f[0]) || isNaN(f[1])) {
      f = ol.proj.transform([parseFloat(x[0], 0), parseFloat(x[1], 0)], "EPSG:3857", y.projection);
    }
    Gf(d, f, g, h, l, p, t);
  }
  var w = r(function(c, e) {
    var h = Ja(c);
    if (void 0 !== e) {
      for (var l = 0;l < B.length;l++) {
        for (var p = 0;p < h.length;p++) {
          B[l] == h[p].getId() && this.dispatchEvent(new E("addmap", {feature:h[p]}));
        }
      }
    } else {
      for (p = 0;p < h.length;p++) {
        this.dispatchEvent(new E("addmap", {feature:h[p]}));
      }
    }
    !f && 0 < h.length && (f = h[0].getGeometry().getInteriorPoint().getCoordinates(), Gf(d, f, g));
  }, c);
  if (ke(e, "oid") && "" !== e.get("oid")) {
    for (var B = e.get("oid").split(","), e = 0;e < B.length;e++) {
      "" == B[e] && B.splice(e, 1);
    }
    B.reverse();
    af(B, function(c) {
      c = c.target;
      var d = Y(c) ? Y(c) : void 0;
      D(c);
      void 0 !== d.docs && 0 < d.docs.length && w(d.docs, B);
    });
  } else {
    ke(e, "dataid") && "" !== e.get("dataid") && (h = pa + "/_search", e = bf("dataid", [e.get("dataid")]), pe(h, function(c) {
      c = c.target;
      var d = Y(c) ? Y(c) : void 0;
      D(c);
      void 0 !== d.hits && void 0 !== d.hits.hits && 0 < d.hits.hits.length && w(d.hits.hits);
    }, "POST", JSON.stringify(e)));
  }
}
function Hf(c) {
  var d = "";
  c.getLayers().forEach(function(c) {
    n(c.getId) && (d += c.getId() + ",");
  });
  var e = ol.proj.transform(c.getView().getCenter(), y.projection, "EPSG:4326"), f = c.getView().getZoom(), g = A && void 0 !== window.ol3d ? window.location.origin + "/vkviewer/main/3d/?welcomepage=off" : window.location.origin + C.f.A() + "?welcomepage=off", g = new W(g), h = g.a;
  h.set("z", f);
  h.set("c", C.round(e[0], 4) + "," + C.round(e[1], 4));
  h.set("oid", d);
  A && void 0 !== window.ol3d && (e = window.ol3d.getCamera(), f = ol.proj.transform(e.getPosition(), y.projection, "EPSG:4326"), h.set("t", C.round(e.getTilt(), 5)), h.set("d", C.round(e.getDistance(), 1)), h.set("a", C.round(e.getAltitude(), 1)), h.set("c", C.round(f[0], 4) + "," + C.round(f[1], 4)), h.set("r", C.round(c.getView().getRotation(), 4)));
  Xd(g, h);
  return g.toString();
}
;function If(c) {
  c = c || {};
  var d = Q("div", {"class":"permalink ol-unselectable"}), e = Q("a", {href:"#permalink", innerHTML:"P", "class":"ol-has-tooltip"});
  d.appendChild(e);
  var f = Q("span", {role:"tooltip", innerHTML:C.c("permalink-title")});
  e.appendChild(f);
  var g = Q("form", {id:"permaCopyBox", style:"display:none;"}), f = Q("div", {"class":"permaClose"});
  g.appendChild(f);
  f = Q("div", {"class":"nose"});
  g.appendChild(f);
  f = Q("div", {"class":"moreDots", innerHTML:"..."});
  g.appendChild(f);
  var h = Q("input", {type:"text", id:"permalinkResult", readonly:"readonly", value:"#"});
  g.appendChild(h);
  f = "MacIntel" == navigator.platform ? "&#8984;" : "Strg";
  f = Q("label", {"for":"permalinkResult", innerHTML:C.c("permalink-msg") + " " + f + "+C."});
  g.appendChild(f);
  d.appendChild(g);
  f = r(function(c) {
    c.preventDefault();
    $(g).hasClass("open") ? ($(g).fadeOut().removeClass("open"), $(h).blur()) : (h.value = Hf(this.getMap()), $(g).fadeIn().addClass("open"), $(h).focus().select());
  }, this);
  S(e, "click", f);
  S(e, "touchstart", f);
  ol.control.Control.call(this, {element:d, target:c.target});
}
ol.inherits(If, ol.control.Control);
function Gf(c, d, e, f, g, h, l) {
  void 0 !== d && c.getView().setCenter(d);
  void 0 === e || isNaN(e) || c.getView().setZoom(e);
  A && void 0 !== window.ol3d && (e = window.ol3d.getCamera(), l = void 0 === l || isNaN(l) ? 0 : l, e.setTilt(void 0 === f || isNaN(f) ? 0 : f), void 0 === g || isNaN(g) || e.setAltitude(g), void 0 === h || isNaN(h) || e.setDistance(h), void 0 !== d && e.setPosition(d), c.getView().setRotation(l));
}
function Fe(c) {
  c = c.getLayers().getArray();
  for (var d = [], e = 0;e < c.length;e++) {
    c[e] instanceof Z && d.push(c[e]);
  }
  return d;
}
function Jf(c, d, e) {
  d = void 0 !== d ? d : {projection:"EPSG:3857", center:[1528150, 6630500], zoom:2};
  var f = [new ol.control.Attribution({collapsible:!1, collapsed:!1}), new ol.control.Zoom, new ol.control.FullScreen, new bd, new ol.control.ScaleLine, new If, new Me];
  (!0 === A && !n(e) || !1 === e) && f.push(new Le({spyLayer:new ol.layer.Tile({attribution:void 0, source:new ol.source.OSM})}));
  this.g = new ol.Map({layers:[new ol.layer.Tile({source:new ol.source.OSM})], renderer:"canvas", target:c, interactions:ol.interaction.defaults().extend([new ol.interaction.DragRotateAndZoom]), controls:f, view:new ol.View(d)});
  if (!0 === A && n(e) && !0 === e) {
    c = new olcs.OLCesium({map:this.g});
    c.enableAutoRenderLoop();
    e = c.getCesiumScene();
    var f = e.globe, g = c.getCamera();
    window.ol3d = c;
    window.b = 8;
    window.i = [8, 11, 14, 16, 17];
    window.a = void 0;
    f.baseColor = Cesium.Color.WHITE;
    f.b = "100";
    f.a = "2";
    e.backgroundColor = Cesium.Color.WHITE;
    e.globe.depthTestAgainstTerrain = !0;
    e.screenSpaceCameraController.maximumZoomDistance = 75E5;
    e.terrainProvider = new Cesium.CesiumTerrainProvider({url:"//assets.agi.com/stk-terrain/world"});
    e.fog.enabled = !0;
    e.fog.density = "0.0001";
    e.fog.screenSpaceErrorFactor = "25";
    c.setEnabled(!0);
    g.setPosition(d.center);
  }
  this.g.on("singleclick", function(c) {
    var d = [];
    A && void 0 !== window.ol3d ? (c = this.g.getCoordinateFromPixel(c.pixel), d = this.M.getSource().getFeaturesAtCoordinate(c)) : this.getMap().forEachFeatureAtPixel(c.pixel, function(c) {
      d.push(c);
    });
    Kf(d);
  }, this);
}
u("vk2.module.MapModule", Jf);
function Lf(c) {
  return A && void 0 !== window.ol3d ? new Se({time:c.get("time"), thumbnail:c.get("thumb"), title:c.get("title"), objectid:c.get("id"), id:c.getId(), dataid:c.get("dataid"), tms:c.get("tms"), clip:c.getGeometry().clone()}) : new Z({time:c.get("time"), thumbnail:c.get("thumb"), title:c.get("title"), objectid:c.get("id"), id:c.getId(), dataid:c.get("dataid"), tms:c.get("tms"), clip:c.getGeometry().clone()});
}
Jf.prototype.getMap = function() {
  return this.g;
};
Jf.prototype.getMap = Jf.prototype.getMap;
function Mf(c, d) {
  S(d, "addmap", function(c) {
    c = c.target.feature;
    !0 === c.get("georeference") && (this.g.addLayer(Lf(c)), A && (c = Re(c.getGeometry().clone(), c.getId(), c.get("time"), c.get("title")), this.M.getSource().addFeature(c)));
  }, void 0, c);
}
function Nf(c, d) {
  c.a = d.b;
  c.M = A && void 0 !== window.ol3d ? new ol.layer.Vector({source:new ol.source.Vector, style:function() {
    return [];
  }}) : void 0;
  void 0 !== c.M && (c.M.set("altitudeMode", "clampToGround"), c.M.set("type", "click"), c.g.getLayers().on("add", function(c) {
    c = c.target.getArray()[c.target.getLength() - 1];
    if (c instanceof Z || c instanceof Se) {
      this.g.removeLayer(this.M), this.g.addLayer(this.M);
    }
  }, c), c.g.addLayer(c.M));
  S(c.a, "click-record", function(c) {
    c = c.target.feature;
    var d;
    a: {
      d = c.getId();
      for (var g = this.g.getLayers().getArray(), h = 0;h < g.length;h++) {
        if ((g[h] instanceof Z || g[h] instanceof Se) && g[h].getId() == d) {
          d = !0;
          break a;
        }
      }
      d = !1;
    }
    !d && c.get("georeference") && (this.g.addLayer(Lf(c)), A && void 0 !== window.ol3d && (c = Re(c.getGeometry().clone(), c.getId(), c.get("time"), c.get("title")), this.M.getSource().addFeature(c)));
  }, void 0, c);
  S(d.i, "jumpto", function(c) {
    var d = c.target.lonlat;
    c = ol.proj.transform([parseFloat(d[0]), parseFloat(d[1])], c.target.srs, y.projection);
    Gf(this.g, c, 6);
  }, void 0, c);
}
function Kf(c) {
  if (0 < c.length) {
    var d = new Fd("vk2-overlay-modal", document.body, !0);
    d.open(void 0, "mapcontroller-click-modal");
    for (var e = Q("section"), f = 0;f < c.length;f++) {
      var g = Q("a", {href:C.f.Ab(c[f].getId()), innerHTML:c[f].get("title") + " " + c[f].get("time"), target:"_self"});
      e.appendChild(g);
      var h = Q("br");
      e.appendChild(h);
    }
    f = P("modal-body", d.G);
    ia(e) && 1 == e.nodeType && (f.appendChild(e), Hd(d, e));
    1 == c.length && g.click();
  }
}
;u("vk2.app.PresentationApp", function(c) {
  C.Ja();
  var d = n(c.authenticate) && "boolean" == typeof c.authenticate ? c.authenticate : !1;
  C.Va(n(c.modalAnchorClassName) ? c.modalAnchorClassName : "vk2-modal-anchor");
  d || Of();
  var d = new Jf(c.mapContainerId, y, n(c.with25d) ? c.with25d : void 0), e = new Af(c.spatialsearchContainerId, d.getMap());
  Nf(d, e);
  new Ue(c.mapContainerId, d.getMap().getLayers(), d.getMap());
  e = new Ef(d.getMap());
  Ff(e, d.getMap());
  Mf(d, e);
  setTimeout(function() {
    C.Ib(c.mapContainerId);
  }, 500);
});
function Of() {
  var c = C.getQueryParam("welcomepage");
  N("welcome-page-link") && "off" !== C.sb() && "off" !== c && N("welcome-page-link").click();
}
;function Pf(c, d, e, f) {
  var g = n(e) ? "webgl" : "canvas", h = n(f) ? f : !1;
  pe(d, r(function(e) {
    200 != xe(e.target) && alert("Something went wrong, while trying to get the process information from the server. Please try again or contact the administrator.");
    e = ye(e.target);
    var f = Cc(e, function(c) {
      return 1 == c.nodeType && "IMAGE_PROPERTIES" == c.tagName;
    });
    e = parseInt(f.getAttribute("WIDTH"), 0);
    f = parseInt(f.getAttribute("HEIGHT"), 0);
    Qf(this, d.substring(0, d.lastIndexOf("/") + 1), f, e, c, g, h);
  }, this), "GET");
  U.call(this);
}
v(Pf, U);
function Qf(c, d, e, f, g, h, l) {
  c.h = e;
  c.j = f;
  var p = new ol.proj.Projection({code:"ZOOMIFY", units:"pixels", extent:[0, 0, f, e]});
  c.m = new ol.source.Zoomify({url:d, size:[f, e], crossOrigin:"*"});
  d = new ol.View({projection:p, center:[f / 2, -e / 2], zoom:1, maxZoom:9});
  c.b = new ol.layer.Tile({source:c.m});
  e = [new ol.control.FullScreen, new ol.control.Zoom];
  l && e.push(new ol.control.OverviewMap({collapsed:!1, layers:[c.b]}));
  c.a = new ol.Map({layers:[c.b], interactions:ol.interaction.defaults().extend([new ol.interaction.DragZoom]), controls:e, renderer:h, target:g, view:d});
  c.a.addControl(new ol.control.ZoomToExtent({extent:d.calculateExtent(c.a.getSize())}));
  c.dispatchEvent(new E("loadend", {}));
}
Pf.prototype.getMap = function() {
  return this.a;
};
Pf.prototype.getHeight = function() {
  return parseInt(this.h, 0);
};
Pf.prototype.getWidth = function() {
  return parseInt(this.j, 0);
};
u("vk2.app.MapProfileApp", function(c) {
  var d = C.getQueryParam("objectid");
  null != d ? pe(pa + "/map/" + d, r(function(d) {
    if (d = Y(d.target)) {
      d = Ia(d._id, d._source), Rf(d, c);
    }
  }, this)) : console.log("Could not identify objectid.");
});
function Rf(c, d) {
  var e = c.getProperties();
  N(d.titleshortId).innerHTML = e.title;
  N(d.titlelongId).innerHTML = e.titlelong;
  N(d.linkToFotothekId).href = e.plink;
  if (ol.has.WEBGL) {
    f = new Pf(d.zoomifyContainer, e.zoomify, !0), new Cf(d.metadataContainer, c.getId(), e), S(f, "loadend", function() {
      f.getMap().addControl(new Ke);
    });
  } else {
    var f = new Pf(d.zoomifyContainer, e.zoomify);
    new Cf(d.metadataContainer, c.getId(), e);
  }
}
;function Sf(c, d, e, f) {
  var g = Q("div", {"class":"vk2GeorefToolsBtn btn btn-default btn-submit deactivate", innerHTML:'<span class="glyphicon glyphicon-refresh"></span> ' + C.c("georef-confirm")});
  N(c).appendChild(g);
  S(g, "click", r(this.a, this, d, e, f));
  U.call(this);
}
v(Sf, U);
Sf.prototype.a = function(c, d, e) {
  this.dispatchEvent(new E("start-confirm", {}));
  var f = Ic(), g = Tf(d, f);
  e = 0 < e.getFeatures().length ? e.getFeatures()[0].getGeometry().clone().transform(y.projection, f) : void 0;
  var h = d.getType();
  if (4 > g.gcps.length) {
    alert("You have to place at least 4 ground control points");
  } else {
    var l = {georeference:g, id:c, type:h};
    void 0 !== e && (l.clip = {source:f, polygon:e.getCoordinates()[0]});
    "update" === h && (c = n(d.ab) ? d.ab : void 0, l.overwrites = c);
    var p = r(function(c) {
      c = Y(c.target);
      this.dispatchEvent(new E("end-confirm", {data:c}));
    }, this);
    r(function() {
      this.dispatchEvent(new E("error", {error:"Something went wrong, while sending confirmation data from the server."}));
    }, this);
    l.hasOwnProperty("clip") ? Qe(l, p) : C.Oa(C.c("georef-confirm-clip-title"), C.c("georef-confirm-clip-msg"), function() {
      Qe(l, p);
    }, "georeference-confirm-without-clip");
  }
};
function Uf(c, d, e) {
  var f = Q("div", {"class":"vk2GeorefToolsBtn btn btn-default btn-validate", innerHTML:'<span class="glyphicon glyphicon-refresh"></span> ' + C.c("georef-validate")});
  N(c).appendChild(f);
  S(f, "click", r(this.a, this, d, e));
  U.call(this);
}
v(Uf, U);
Uf.prototype.a = function(c, d) {
  var e = {georeference:Vf(d, Hc(), Ic()), id:c};
  if (!(4 > e.georeference.gcps.length)) {
    this.dispatchEvent(new E("start-warping", {}));
    var f = r(function(c) {
      c = Y(c.target);
      this.dispatchEvent(new E("end-warping", {data:c, georefParams:e}));
    }, this), g = r(function() {
      this.dispatchEvent(new E("error", {error:"Something went wrong, while fetching validation data from the server."}));
    }, this);
    Pe(e, f, g);
  }
};
function Wf(c) {
  this.a = n(c.ga) && ia(c.ga) ? n(c.ga["new"]) ? ab(c.ga["new"]) : ab(c.ga) : {source:"pixel", target:"EPSG:4314"};
  this.ab = n(c.$a) ? c.$a : void 0;
  this.h = n(c.Yb) ? c.eb : {source:"pixel", target:"EPSG:900913"};
  this.b = c.sources;
  this.m = n(c.type) ? "update" === c.type ? !0 : !1 : !1;
  this.j = new Ka;
  this.H();
  U.call(this);
}
v(Wf, U);
Wf.prototype.H = function() {
  Xf(this, this.b);
  if (this.a.hasOwnProperty("gcps")) {
    for (var c = this.a, d = this.b, e = this.h, f = 0;f < c.gcps.length;f++) {
      var g = c.gcps[f], h = C.Ob(g.source), h = new ol.Feature(new ol.geom.Point(h)), g = ol.proj.transform(g.target, c.target, e.target), g = new ol.Feature(new ol.geom.Point(g));
      d[0].addFeature(h);
      d[1].addFeature(g);
    }
  }
};
function Xf(c, d) {
  function e(c) {
    var e = d[0].getFeatureById(c), l = d[1].getFeatureById(c);
    if (null != e && null != l) {
      e.setProperties({Jb:!0});
      l.setProperties({Jb:!0});
      var p = C.l.ya();
      p.getText().setText("" + c);
      e.setStyle(p);
      l.setStyle(p);
      f.a = !1;
      f.b = !1;
    }
  }
  var f = c.j;
  d[0].on("addfeature", function(c) {
    if (!1 === f.a) {
      var d = La(f);
      c = c.feature;
      f.a = !0;
      c.setId(d);
      c.setStyle(C.l.Ha);
      f.a && f.b && e(d);
    } else {
      alert("Please add source to other map!"), this.removeFeature(c.feature);
    }
  });
  d[0].on("removefeature", function(c) {
    c = c.feature.getId();
    var e = void 0 !== c ? d[0].getFeatureById(c) : void 0;
    null === (void 0 !== c ? d[1].getFeatureById(c) : void 0) & null === e && f.a && (f.a = !1);
  });
  d[1].on("removefeature", function(c) {
    c = c.feature.getId();
    var e = void 0 !== c ? d[0].getFeatureById(c) : void 0;
    null === (void 0 !== c ? d[1].getFeatureById(c) : void 0) & null === e && f.b && (f.b = !1);
  });
  d[1].on("addfeature", function(c) {
    if (!1 === f.b) {
      var d = La(f);
      c = c.feature;
      f.b = !0;
      c.setId(d);
      c.setStyle(C.l.Ha);
      f.a && f.b && e(d);
    } else {
      alert("Please add source to other map!"), this.removeFeature(c.feature);
    }
  });
}
function Vf(c, d, e) {
  d = n(d) ? d : "affine";
  c = Yf(c, n(e) ? e : void 0);
  c.algorithm = d;
  return c;
}
function Yf(c, d) {
  var e = r(function(c, d) {
    for (var e = [], f = 0;f < c.length;f++) {
      var g = C.Nb(c[f][0].getGeometry().getCoordinates()), w = ol.proj.transform(c[f][1].getGeometry().getCoordinates(), this.h.target, d);
      e.push({source:g, target:w});
    }
    return e;
  }, c), f = ab(c.a), g = n(d) ? d : f.target;
  f.gcps = e(function(c) {
    for (var d = [], e = 0;e < c[0].getFeatures().length;e++) {
      var f = c[0].getFeatures()[e], g;
      da(f.getId()) && (g = c[1].getFeatureById(f.getId()));
      null != f && null != g && d.push([f, g]);
    }
    return d;
  }(c.b), g);
  f.target = g;
  return f;
}
function Tf(c, d) {
  var e = Hc(), e = n(e) ? e : "affine", f = ab(c.a), g = Vf(c, e, n(d) ? d : f.target);
  Vf(c, e, f.target);
  return g;
}
Wf.prototype.getType = function() {
  return this.m ? "update" : "new";
};
function Zf(c) {
  this.b = q(c) ? N(c) : c;
  var d = Q("div", {"class":"georef-tools-clip-container", id:"georef-tools-clip-container"});
  this.b.appendChild(d);
  $f(this, d);
  c = Q("div", {"class":"georef-tools-clip-inner-container", id:"georef-tools-clip-inner-container"});
  d.appendChild(c);
  var d = [], e = ag("noneToggle", "none", C.c("georef-movemap"));
  c.appendChild(e);
  d.push(e);
  var f = ag("drawClip", "drawclip", C.c("georef-drawclip"));
  c.appendChild(f);
  d.push(f);
  S(e, "click", r(this.a, this, "none", d));
  S(f, "click", r(this.a, this, "drawclip", d));
  U.call(this);
}
v(Zf, nd);
Zf.prototype.B = function() {
  var c = N("georef-tools-clip-handler");
  null != c && I(c, "open") || $(c).trigger("click");
};
function ag(c, d, e) {
  var f = Q("div", {"class":"tool"});
  c = Q("div", {id:c, "class":"tool-move toggle-elements " + c, value:d, innerHTML:'<span class="tool-title">' + e + "</span>"});
  f.appendChild(c);
  return f;
}
Zf.prototype.C = function() {
  var c = N("georef-tools-clip-handler");
  if (null == c || I(c, "open")) {
    $(c).trigger("click");
    for (var c = O("toggle-elements"), d = 0;d < c.length;d++) {
      I(c[d], "active") && H(c[d], "active");
    }
  }
};
Zf.prototype.a = function(c, d) {
  for (var e = r(function(c, d) {
    I(c, "active") || G(c, "active");
    this.dispatchEvent(new E("activate-" + d, c));
  }, this), f = r(function(c, d) {
    I(c, "active") && H(c, "active");
    this.dispatchEvent(new E("deactivate-" + d, c));
  }, this), g = 0;g < d.length;g++) {
    var h = d[g].children[0];
    h.value === c ? e(h, h.value) : f(h, h.value);
  }
};
function $f(c, d) {
  var e = Q("div", {"class":"georef-tools-clip-handler", id:"georef-tools-clip-handler"});
  d.appendChild(e);
  R(e, Q("span", {"class":"icon"}));
  $(e).click(r(function() {
    var c = I(e, "open") ? new E("deactivate", e) : new E("activate", e);
    this.dispatchEvent(c);
    $("#georef-tools-clip-inner-container").slideToggle(300, function() {
      $(e).toggleClass("open");
    });
  }, c));
}
;function bg(c, d, e) {
  this.a = new ol.source.Vector({features:new ol.Collection});
  n(e) && (e = Gc(e), this.a.addFeature(e));
  this.J = new ol.layer.Vector({source:this.a, style:C.l.Ga});
  this.J.setMap(d);
  this.b = new md(d, this.J);
  cg(c, {"activate-drawclip":this.b, "deactivate-drawclip":this.b});
  this.sa = c;
}
v(bg, Ma);
bg.prototype.i = function(c) {
  c = Gc(c.target.clip);
  0 === this.a.getFeatures().length && (this.a.addFeature(c), this.J.addFeature(c));
};
function cg(c, d) {
  function e(c) {
    if (n(c)) {
      var e = c.type;
      n(e) && d.hasOwnProperty(e) && d[e].C();
    } else {
      for (e in d) {
        d.hasOwnProperty(e) && d[e].C();
      }
    }
  }
  S(c, "activate-drawclip", function(c) {
    e();
    d[c.type].B();
  });
  S(c, "deactivate-drawclip", e);
  S(c, "activate", function() {
  });
  S(c, "deactivate", function() {
    e();
  });
}
;function dg(c) {
  this.o = q(c) ? N(c) : c;
  var d = Q("div", {"class":"georef-tools-gcp-container", id:"georef-tools-gcp-container"});
  this.o.appendChild(d);
  eg(this, d);
  c = Q("div", {"class":"georef-tools-gcp-inner-container", id:"georef-tools-gcp-inner-container"});
  d.appendChild(c);
  var d = [], e = fg("noneToggle", "none", C.c("georef-movemap"));
  c.appendChild(e);
  d.push(e);
  var f = fg("pointToggle", "addgcp", C.c("georef-setgcp"));
  c.appendChild(f);
  d.push(f);
  var g = fg("dragToggle", "draggcp", C.c("georef-movegcp"));
  c.appendChild(g);
  d.push(g);
  var h = fg("deleteToggle", "delgcp", C.c("georef-delgcp"));
  c.appendChild(h);
  d.push(h);
  S(e, "click", r(this.a, this, "none", d));
  S(f, "click", r(this.a, this, "addgcp", d));
  S(g, "click", r(this.a, this, "draggcp", d));
  S(h, "click", r(this.a, this, "delgcp", d));
  U.call(this);
}
v(dg, nd);
dg.prototype.B = function() {
  var c = N("georef-tools-gcp-handler");
  null != c && I(c, "open") || $(c).trigger("click");
};
function fg(c, d, e) {
  var f = Q("div", {"class":"tool"});
  c = Q("div", {id:c, "class":"tool-move toggle-elements " + c, value:d, innerHTML:'<span class="tool-title">' + e + "</span>"});
  f.appendChild(c);
  return f;
}
dg.prototype.C = function() {
  var c = N("georef-tools-gcp-handler");
  if (null == c || I(c, "open")) {
    $(c).trigger("click");
    for (var c = O("toggle-elements"), d = 0;d < c.length;d++) {
      I(c[d], "active") && H(c[d], "active");
    }
  }
};
dg.prototype.a = function(c, d) {
  for (var e = r(function(c, d) {
    I(c, "active") || G(c, "active");
    this.dispatchEvent(new E("activate-" + d, c));
  }, this), f = r(function(c, d) {
    I(c, "active") && H(c, "active");
    this.dispatchEvent(new E("deactivate-" + d, c));
  }, this), g = 0;g < d.length;g++) {
    var h = d[g].children[0];
    h.value === c ? e(h, h.value) : f(h, h.value);
  }
};
function eg(c, d) {
  var e = Q("div", {"class":"georef-tools-gcp-handler", id:"georef-tools-gcp-handler"});
  d.appendChild(e);
  R(e, Q("span", {"class":"icon"}));
  $(e).click(r(function() {
    var c = I(e, "open") ? new E("deactivate", e) : new E("activate", e);
    this.dispatchEvent(c);
    $("#georef-tools-gcp-inner-container").slideToggle(300, function() {
      $(e).toggleClass("open");
    });
  }, c));
}
;function gg(c) {
  this.a = c.X;
  var d = c.Mb, e = c.sources[0], f = c.sources[1];
  c = {T:c.Wa[0], P:c.Wa[1]};
  var g = {T:new ol.layer.Vector({source:e, style:function() {
    return [C.l.mb];
  }}), P:new ol.layer.Vector({source:f, style:function() {
    return [C.l.mb];
  }})}, f = new id(e, f, c.T, c.P), e = new kd(g.T, g.P, c.T, c.P), h = new jd(g.T, g.P, c.T, c.P), f = {"activate-addgcp":f, "deactivate-addgcp":f, "activate-draggcp":e, "deactivate-draggcp":e, "activate-delgcp":h, "deactivate-delgcp":h};
  hg(e);
  ig(d, c, g, f);
  this.sa = d;
}
v(gg, Ma);
function hg(c) {
  function d(c) {
    c.target.feature.setStyle(c.target.targetStyle);
  }
  S(c, "selected", d);
  S(c, "deselected", d);
}
function ig(c, d, e, f) {
  function g(c) {
    h();
    f[c.type].B();
  }
  function h(c) {
    if (n(c)) {
      var d = c.type;
      n(d) && f.hasOwnProperty(d) && f[d].C();
    } else {
      for (d in f) {
        f.hasOwnProperty(d) && f[d].C();
      }
    }
  }
  S(c, "activate-addgcp", g);
  S(c, "deactivate-addgcp", h);
  S(c, "activate-draggcp", g);
  S(c, "deactivate-draggcp", h);
  S(c, "activate-delgcp", g);
  S(c, "deactivate-delgcp", h);
  S(c, "activate", function() {
  });
  S(c, "deactivate", function() {
    h();
  });
  d.T.addLayer(e.T);
  d.P.addLayer(e.P);
}
;function jg(c) {
  var d = q(c.Da) ? N(c.Da) : c.Da, e = q(c.Ca) ? N(c.Ca) : c.Ca, f = c.Gb, g = c.Db, h = c.Kb, l = c.Pb, p = n(c.Ka) ? c.Ka : void 0, t = n(c.type) ? c.type : void 0, x = n(c.ea) ? c.ea : void 0, w = n(c.La) ? c.La : void 0, B = [new ol.source.Vector({features:new ol.Collection}), new ol.source.Vector({features:new ol.Collection})], ya = n(c.eb) ? ya : void 0;
  c = {mtb:"affine", gl:"affine", ae:"affine", tk:"affine", ak:"tps"}[c.Eb.toLowerCase().toLowerCase()];
  for (var cc = $("#transformation-chooser option"), kb = 0;kb < cc.length;kb++) {
    c.toLowerCase() === cc[kb].innerHTML.toLowerCase() && $("#transformation-chooser").val(cc[kb].innerHTML);
  }
  p = new Wf({sources:B, ga:p, type:t, $a:w, eb:ya});
  d = new dg(d);
  h = new gg({Mb:d, X:p, Wa:[h.getMap(), l.getMap()], sources:B});
  e = new Zf(e);
  x = new bg(e, l.getMap(), x);
  B = h.sa;
  p = x.sa;
  S(B, "activate", p.C);
  S(p, "activate", B.C);
  T(h.a, "add-gcp-clippolygon", x.i, void 0, x);
  B = new Uf(f, g, h.a);
  f = new Sf(f, g, h.a, x.a);
  kg(B, f, l, x, e);
  d.B();
}
function kg(c, d, e, f, g) {
  S(c, "start-warping", function() {
    lg(e);
  });
  S(c, "end-warping", function(c) {
    c = c.target.data;
    var d = 0 < f.a.getFeatures().length ? f.a.getFeatures()[0] : void 0, p = ol.proj.transformExtent(c.extent, Ic(), y.projection);
    mg(e, c.wmsUrl, c.layerId, d);
    e.setZoom(p);
    ng(e);
    g.B();
  });
  S(c, "error", function() {
    alert("Something went wrong, while trying to request a validation result.");
    ng(e);
  });
  S(d, "end-confirm", function() {
    window.location.href = C.f.Pa();
  });
  S(f.b, "drawend", function(c) {
    c = c.target.feature;
    if (void 0 !== e.W) {
      var d = e.W.getProperties();
      mg(e, d.wms_url, d.layerid, c);
    }
  });
}
;function og(c, d) {
  Pf.call(this, c, d);
}
v(og, Pf);
function pg(c, d) {
  this.b = y.projection;
  this.W = void 0;
  this.o = N(c);
  var e = n(d) ? d : [640161.933, 5958026.134, 3585834.8011505, 7847377.4901306], f = new ol.layer.Tile({source:new ol.source.OSM});
  this.g = new ol.Map({layers:[f], interactions:ol.interaction.defaults().extend([new ol.interaction.DragZoom]), renderer:"canvas", target:this.o, view:new ol.View({projection:this.b, center:[0, 0], zoom:2}), controls:[new ol.control.FullScreen, new ol.control.Zoom, new ol.control.Attribution, new Le({spyLayer:new ol.layer.Tile({attribution:void 0, source:new ol.source.OSM})})]});
  this.g.getView().fit(e, this.g.getSize());
  n(d) && (this.a = new ol.control.ZoomToExtent({extent:e}), this.g.addControl(this.a));
  e = new tf(this.o);
  S(e, "jumpto", function(c) {
    var d = this.g.getView(), e = c.target.lonlat;
    d.setCenter(ol.proj.transform([parseFloat(e[0]), parseFloat(e[1])], c.target.srs, this.b));
    d.setZoom(12);
  }, void 0, this);
  P("ol-attribution").children[0].children[0].remove();
}
function lg(c) {
  if (!n(qg(c))) {
    var d = Q("div", {"class":"result-viewer-loading-panel", id:"result-viewer-loading-panel", innerHTML:'<div class="progress"><div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="100"aria-valuemin="0" aria-valuemax="100" style="width: 100%"><span class="sr-only">100% Complete</span></div></div>'});
    c.o.appendChild(d);
  }
}
function ng(c) {
  c = qg(c);
  n(c) && Ac(c);
}
function mg(c, d, e, f) {
  n(c.W) && c.g.removeLayer(c.W);
  f = void 0 !== f ? f.getGeometry() : void 0;
  c.W = Te({ib:d, Ua:e, ea:f}, c.g);
  c.g.getLayers().insertAt(1, c.W);
  N("opacity-slider-container") && (N("opacity-slider-container").innerHTML = "", new Jc(N("opacity-slider-container"), c.W));
}
pg.prototype.getMap = function() {
  return this.g;
};
function qg(c) {
  for (var d = 0;d < c.o.children.length;d++) {
    if ("result-viewer-loading-panel" === c.o.children[d].id) {
      return c.o.children[d];
    }
  }
}
pg.prototype.setZoom = function(c) {
  void 0 !== c && (c = void 0 === c ? this.g.getView().calculateExtent(this.g.getSize()) : c, this.g.removeControl(this.a), this.a = new ol.control.ZoomToExtent({extent:c}), this.g.addControl(this.a), this.g.getView().fit(c, this.g.getSize()));
};
u("vk2.app.AdminEvaluationApp", function(c) {
  if (!c.hasOwnProperty("process_list") || !c.hasOwnProperty("map_container")) {
    throw "Missing parameter in the vk2.app.AdminEvaluationApp settings. Please check the documentation.";
  }
  var d = c.map_container;
  Fc();
  this.ka = new pg(d);
  c.hasOwnProperty("btn_getallprocess") && rg(this, c.btn_getallprocess, c.process_list);
  c.hasOwnProperty("btn_getallinvalideprocess") && rg(this, c.btn_getallinvalideprocess, c.process_list, "validation=invalide");
  c.hasOwnProperty("btn_getsingleprocess_mapid") && sg(this, c.btn_getsingleprocess_mapid, c.process_list);
  c.hasOwnProperty("btn_getsingleprocess_userid") && tg(this, c.btn_getsingleprocess_userid, c.process_list);
});
function rg(c, d, e, f) {
  S(N(d), "click", function() {
    var c = new X;
    T(c, "success", function(c) {
      c = c.target;
      ug(this, e, Y(c));
      D(c);
    }, !1, this);
    T(c, "error", function() {
      alert("Something went wrong, while trying to fetch data from the server.");
    }, !1, this);
    var d = C.f.xa(n(f) ? f : void 0);
    c.send(d, "GET");
  }, void 0, c);
}
function sg(c, d, e) {
  S(N(d), "click", function(c) {
    c = c.currentTarget.getAttribute("data-src");
    var d = N(c).value;
    c = new X;
    T(c, "success", function(c) {
      c = c.target;
      ug(this, e, Y(c));
      D(c);
    }, !1, this);
    d = C.f.xa("mapid=" + d);
    c.send(d, "GET");
  }, void 0, c);
}
function tg(c, d, e) {
  S(N(d), "click", function(c) {
    c = c.currentTarget.getAttribute("data-src");
    var d = N(c).value;
    c = new X;
    T(c, "success", function(c) {
      c = c.target;
      ug(this, e, Y(c));
      D(c);
    }, !1, this);
    T(c, "error", function() {
      alert("Something went wrong, while trying to fetch data from the server.");
    }, !1, this);
    d = C.f.xa("userid=" + d);
    c.send(d, "GET");
  }, void 0, c);
}
function vg(c, d) {
  function e(c, d, e, f) {
    e = void 0 !== e ? e : "";
    return void 0 !== f && f ? Q("p", {"class":e, innerHTML:"<strong>" + c + ":</strong><br><span>" + d + "</span>"}) : Q("p", {"class":e, innerHTML:"<strong>" + c + ":</strong> " + d});
  }
  var f = Q("article", {id:d.georef_id}), g = r(function(c) {
    var d = Q("p");
    if ("isvalide" != c.adminvalidation) {
      var e = Q("button", {"data-href":C.f.xb("georeferenceid=" + c.georef_id), "class":"btn btn-primary action-btn", innerHTML:C.c("evaluation-isvalide")});
      wg(e, f, "Georeference process is valide?", "Are you sure you wanna set this georeference process to isvalide? Why?");
      d.appendChild(e);
    }
    e = Q("button", {"data-params-georef":JSON.stringify(c.georef_params), "data-params-id":c.mapid, "class":"btn btn-primary btn-show-georef", innerHTML:C.c("evaluation-showmap")});
    void 0 !== c.clippolygon && e.setAttribute("data-params-clip", JSON.stringify(c.clippolygon));
    xg(this, e);
    d.appendChild(e);
    e = Q("a", {href:C.f.pa(void 0, "georeferenceid=" + c.georef_id), "class":"btn btn-primary action-btn", target:"_blank", innerHTML:C.c("evaluation-gotoprocess")});
    d.appendChild(e);
    "invalide" != c.adminvalidation && (c = Q("button", {"data-href":C.f.wb("georeferenceid=" + c.georef_id), "class":"btn btn-warning action-btn", innerHTML:C.c("evaluation-isinvalide")}), wg(c, f, "Georeference process is invalide?", "Are you sure you wanna set this georeference process to invalide? Why?"), d.appendChild(c));
    return d;
  }, c);
  R(f, e("Process-ID", d.georef_id));
  R(f, e("Admin validation", d.adminvalidation));
  R(f, e("Map id", d.mapid));
  R(f, e("User id", d.userid));
  R(f, e("Map sheet description", d.title));
  R(f, e("Georeference parameter (lon:lat)", JSON.stringify(d.georef_params), "json", !0));
  R(f, e("Type", d.type));
  R(f, e("Processed", d.processed));
  R(f, e("Is active", d.georef_isactive));
  R(f, Q("p", {"class":"meta", innerHTML:"Created: " + d.georef_time}));
  R(f, g(d));
  return f;
}
function ug(c, d, e) {
  d = N(d);
  d.innerHTML = "";
  for (var f = 0, g = e.length;f < g;f++) {
    var h = vg(c, e[f]);
    d.appendChild(h);
  }
}
function wg(c, d, e, f) {
  S(c, "click", na(C.Oa, e, f + '<br><div id="admin-validation-comment" class="input-group"><input type="radio" value="imprecision"> Imprecision<br><input type="radio" value="wrong-parameter"> Wrong Parameter<br><input type="radio" value="wrong-map-sheet-number"> Wrong map sheet number<br><input type="radio" value="bad-original"> Bad original<br><br><input type="text" class="form-control" placeholder="comment" id="confirm-comment"></div>', function() {
    for (var e = vc("input", void 0, N("admin-validation-comment")), f = void 0, l = 0;l < e.length;l++) {
      "radio" == e[l].type && e[l].checked && (f = e[l].value);
    }
    e = n(f) ? f : N("confirm-comment").value;
    e = c.getAttribute("data-href") + "&comment=" + e;
    pe(e, function(c) {
      alert(Y(c.target).message);
      Ac(d);
    }, "GET");
  }));
}
function xg(c, d) {
  S(d, "click", function(c) {
    var d = JSON.parse(c.currentTarget.getAttribute("data-params-georef")), g = d.hasOwnProperty("new") ? d["new"] : d, h = null == c.currentTarget.getAttribute("data-params-clip") || void 0 == c.currentTarget.getAttribute("data-params-clip") ? void 0 : JSON.parse(c.currentTarget.getAttribute("data-params-clip"));
    c = parseInt(c.currentTarget.getAttribute("data-params-id"), 0);
    c = {georeference:g, id:c};
    void 0 !== h && (c.clip = h);
    lg(this.ka);
    Pe(c, r(function(c) {
      c = Y(c.target);
      var d = ol.proj.transformExtent(c.extent, g.target, y.projection), e = void 0 !== h ? Gc(h) : void 0;
      mg(this.ka, c.wmsUrl, c.layerId, e);
      this.ka.setZoom(d);
      ng(this.ka);
    }, this), function() {
      ng(this.ka);
      alert("Something went wrong while trying to fetch a georeference validation result from server ....");
    });
  }, !1, c);
}
;function yg(c, d) {
  C.Ja();
  C.Va("vk2-modal-anchor");
  Fc();
  var e = new W(window.location.href), f = e.a.get("objectid"), e = e.a.get("georeferenceid");
  n(e) ? zg("georeferenceid=" + e, r(this.a, this, c, d)) : n(f) && zg("objectid=" + f, r(this.a, this, c, d));
}
u("vk2.app.GeoreferenceApp", yg);
function zg(c, d) {
  var e = C.f.ub(c);
  pe(e, function(c) {
    200 != xe(c.target) && alert("Something went wrong, while trying to get the process information from the server. Please try again or contact the administrator.");
    d(Y(c.target));
  });
}
yg.prototype.a = function(c, d, e) {
  var f = e.hasOwnProperty("extent") ? ol.proj.transformExtent(e.extent, va, "EPSG:3857") : void 0, g = new og(c, e.zoomify), h = new pg(d, f);
  S(g, "loadend", function() {
    var f = e.hasOwnProperty("recommendedsrid") ? "EPSG:" + e.recommendedsrid : "EPSG:4326";
    $("#projection-chooser").val(f);
    new jg({Da:c, Ca:d, Gb:"georef-validate-menu", Db:e.objectid, Kb:g, Pb:h, Ka:e.georeference, type:e.type, ea:e.clippolygon, La:e.georeferenceid, Eb:e.maptype});
  }, void 0, this);
  e.hasOwnProperty("warn") && (f = Q("div", {innerHTML:e.warn + ' <a href="' + C.f.Pa() + '">' + C.c("back-to-main") + "</a>", "class":"alert alert-danger warn-msg"}), N(c).appendChild(f));
};
}).call(window);
