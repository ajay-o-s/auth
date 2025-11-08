var Nt = Object.defineProperty,
  kt = Object.defineProperties;
var St = Object.getOwnPropertyDescriptors;
var Qe = Object.getOwnPropertySymbols;
var Ct = Object.prototype.hasOwnProperty,
  Mt = Object.prototype.propertyIsEnumerable;
var Ze = (t, r, s) =>
    r in t
      ? Nt(t, r, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (t[r] = s),
  H = (t, r) => {
    for (var s in r || (r = {})) Ct.call(r, s) && Ze(t, s, r[s]);
    if (Qe) for (var s of Qe(r)) Mt.call(r, s) && Ze(t, s, r[s]);
    return t;
  },
  Z = (t, r) => kt(t, St(r));
import {
  r as l,
  j as e,
  u as V,
  d as Et,
  P as Pt,
  L as At,
  S as Rt,
  A as Lt,
  e as Tt,
  Z as ze,
  f as It,
  C as Dt,
  D as zt,
  g as Ot,
  X as _t,
  W as et,
  T as Gt,
  h as Ut,
  i as Ft,
  k as $t,
} from "./aos_vendor.js";
import {
  C as Ce,
  S as ce,
  P as de,
  W as ue,
  B as q,
  e as z,
  f as K,
  h as X,
  G as Ie,
  T as Bt,
  k as Ht,
  l as xe,
  n as Vt,
  o as Wt,
  M as le,
  q as ae,
  t as F,
  u as Me,
  v as ne,
  w as Ee,
  x as Yt,
  y as qt,
  z as Kt,
  D as Xt,
  F as Jt,
  H as Qt,
} from "./aos.js";
import { L as Zt } from "./index.js";
const Pe = (t) => `${btoa(`${t}`).replace(/=/g, "")}`,
  tt = "super-secret-key-ajayos",
  B = {
    get(t, r = null) {
      try {
        const s = localStorage.getItem(Pe(t));
        if (!s) return r;
        const a = Ce.AES.decrypt(s, tt).toString(Ce.enc.Utf8);
        if (!a) return r;
        try {
          const i = JSON.parse(a);
          return i && i.__type === "string" ? i.value : i;
        } catch (i) {
          return a;
        }
      } catch (s) {
        return r;
      }
    },
    set(t, r) {
      try {
        let s;
        typeof r == "string"
          ? (s = JSON.stringify({ __type: "string", value: r }))
          : (s = JSON.stringify(r));
        const n = Ce.AES.encrypt(s, tt).toString();
        localStorage.setItem(Pe(t), n);
      } catch (s) {
        console.error("Storage set error:", s);
      }
    },
    remove(t) {
      localStorage.removeItem(Pe(t));
    },
    firstLoad() {
      return this.get("seen", !1) ? !1 : (this.set("seen", !0), !0);
    },
  },
  es = () => {
    const t = l.useRef(null);
    return (
      l.useEffect(() => {
        const r = t.current;
        if (!r) return;
        const s = new ce(),
          n = new de(75, r.clientWidth / r.clientHeight, 0.1, 1e3);
        n.position.z = 50;
        const a = new ue({ alpha: !0, antialias: !0 });
        a.setSize(r.clientWidth, r.clientHeight),
          a.setPixelRatio(window.devicePixelRatio),
          r.appendChild(a.domElement);
        const i = new q(),
          d = 8e3,
          c = new Float32Array(d * 3),
          o = new Float32Array(d * 3);
        for (let v = 0; v < d; v++) {
          const w = v * 3,
            f = Math.random() * 50,
            N = Math.random() * Math.PI * 2,
            h = f * 0.2;
          (c[w] = Math.cos(N + h) * f),
            (c[w + 1] = (Math.random() - 0.5) * 20),
            (c[w + 2] = Math.sin(N + h) * f),
            (o[w] = Math.random()),
            (o[w + 1] = Math.random() * 0.5 + 0.5),
            (o[w + 2] = 1);
        }
        i.setAttribute("position", new z(c, 3)),
          i.setAttribute("color", new z(o, 3));
        const u = new K({
            size: 0.15,
            vertexColors: !0,
            transparent: !0,
            opacity: 0.7,
          }),
          m = new X(i, u);
        s.add(m);
        let x = 0,
          b = 0;
        const g = (v) => {
          (x = (v.clientX / window.innerWidth - 0.5) * 2),
            (b = (v.clientY / window.innerHeight - 0.5) * 2);
        };
        window.addEventListener("mousemove", g);
        const p = () => {
          (m.rotation.y += 8e-4),
            (m.rotation.x += (b * 0.05 - m.rotation.x) * 0.05),
            (m.rotation.z += (x * 0.05 - m.rotation.z) * 0.05),
            a.render(s, n),
            requestAnimationFrame(p);
        };
        p();
        const y = () => {
          (n.aspect = r.clientWidth / r.clientHeight),
            n.updateProjectionMatrix(),
            a.setSize(r.clientWidth, r.clientHeight);
        };
        return (
          window.addEventListener("resize", y),
          () => {
            window.removeEventListener("mousemove", g),
              window.removeEventListener("resize", y),
              r.removeChild(a.domElement),
              i.dispose(),
              u.dispose(),
              a.dispose();
          }
        );
      }, []),
      e.jsx("div", { ref: t, className: "absolute inset-0 z-0" })
    );
  },
  ts = () => {
    const t = l.useRef(null);
    return (
      l.useEffect(() => {
        const r = t.current;
        if (!r) return;
        const s = new ce(),
          n = new de(75, r.clientWidth / r.clientHeight, 0.1, 2e3);
        n.position.z = 60;
        const a = new ue({ alpha: !0, antialias: !0 });
        a.setSize(r.clientWidth, r.clientHeight),
          a.setPixelRatio(window.devicePixelRatio),
          r.appendChild(a.domElement);
        const i = new q(),
          d = 4e3,
          c = new Float32Array(d * 3),
          o = new Float32Array(d * 3);
        for (let A = 0; A < d; A++) {
          const E = A * 3;
          (c[E] = (Math.random() - 0.5) * 400),
            (c[E + 1] = (Math.random() - 0.5) * 400),
            (c[E + 2] = (Math.random() - 0.5) * 400);
          const C = Math.random();
          (o[E] = C), (o[E + 1] = C * 0.9 + 0.1), (o[E + 2] = 1);
        }
        i.setAttribute("position", new z(c, 3)),
          i.setAttribute("color", new z(o, 3));
        const u = new K({
            size: 0.1,
            vertexColors: !0,
            transparent: !0,
            opacity: 0.8,
          }),
          m = new X(i, u);
        s.add(m);
        const x = new Ie(),
          g = new Bt().load(
            "https://threejs.org/examples/textures/sprites/smoke.png",
          );
        for (let A = 0; A < 15; A++) {
          const E = new Ht({
              map: g,
              color: new xe().setHSL(Math.random(), 0.7, 0.5),
              transparent: !0,
              opacity: 0.15 + Math.random() * 0.1,
              depthWrite: !1,
            }),
            C = new Vt(E);
          C.position.set(
            (Math.random() - 0.5) * 300,
            (Math.random() - 0.5) * 200,
            (Math.random() - 0.5) * 300,
          );
          const R = 80 + Math.random() * 100;
          C.scale.set(R, R, 1), x.add(C);
        }
        s.add(x);
        const p = new q(),
          y = 2e3,
          v = new Float32Array(y * 3),
          w = new Float32Array(y * 3);
        for (let A = 0; A < y; A++) {
          const E = A * 3,
            C = Math.random() * 100,
            R = Math.random() * Math.PI * 2,
            D = Math.acos(Math.random() * 2 - 1);
          (v[E] = C * Math.sin(D) * Math.cos(R)),
            (v[E + 1] = C * Math.sin(D) * Math.sin(R)),
            (v[E + 2] = C * Math.cos(D));
          const I = new xe().setHSL(Math.random(), 1, 0.6);
          (w[E] = I.r), (w[E + 1] = I.g), (w[E + 2] = I.b);
        }
        p.setAttribute("position", new z(v, 3)),
          p.setAttribute("color", new z(w, 3));
        const f = new K({
            size: 0.5,
            vertexColors: !0,
            transparent: !0,
            opacity: 0.9,
            blending: Wt,
          }),
          N = new X(p, f);
        s.add(N);
        let h = 0,
          j = 0;
        const S = (A) => {
          (h = (A.clientX / window.innerWidth - 0.5) * 2),
            (j = (A.clientY / window.innerHeight - 0.5) * 2);
        };
        window.addEventListener("mousemove", S);
        const k = () => {
          requestAnimationFrame(k),
            (m.rotation.y += 2e-4),
            (N.rotation.y += 5e-4),
            (x.rotation.y += 1e-4),
            (x.rotation.x = Math.sin(Date.now() * 5e-5) * 0.1),
            (n.position.x += (h * 30 - n.position.x) * 0.05),
            (n.position.y += (-j * 20 - n.position.y) * 0.05),
            n.lookAt(s.position),
            a.render(s, n);
        };
        k();
        const M = () => {
          (n.aspect = r.clientWidth / r.clientHeight),
            n.updateProjectionMatrix(),
            a.setSize(r.clientWidth, r.clientHeight);
        };
        return (
          window.addEventListener("resize", M),
          () => {
            window.removeEventListener("mousemove", S),
              window.removeEventListener("resize", M),
              r.removeChild(a.domElement),
              a.dispose();
          }
        );
      }, []),
      e.jsx("div", { ref: t, className: "absolute inset-0 z-0" })
    );
  },
  ss = () => {
    const t = l.useRef(null),
      r = l.useRef(null),
      s = l.useRef(null),
      n = l.useRef(null),
      a = l.useRef(null),
      i = l.useRef(!1);
    return (
      l.useEffect(() => {
        if (!t.current || i.current) return;
        i.current = !0;
        const d = new ce();
        n.current = d;
        const c = new de(75, window.innerWidth / window.innerHeight, 0.1, 2e3);
        (c.position.z = 60), (a.current = c);
        const o = new ue({ alpha: !0, antialias: !0 });
        o.setSize(window.innerWidth, window.innerHeight),
          o.setPixelRatio(window.devicePixelRatio),
          o.setClearColor(0, 1),
          (s.current = o),
          t.current.appendChild(o.domElement);
        const u = new q(),
          m = 12e3,
          x = new Float32Array(m * 3),
          b = new Float32Array(m * 3),
          g = [
            { r: 0.1, g: 0.6, b: 1 },
            { r: 0.6, g: 0.2, b: 1 },
            { r: 1, g: 0.2, b: 0.6 },
            { r: 0.2, g: 1, b: 1 },
            { r: 1, g: 0.6, b: 0 },
            { r: 1, g: 0.3, b: 0.8 },
            { r: 0.5, g: 1, b: 0.5 },
            { r: 1, g: 1, b: 0.5 },
          ];
        for (let C = 0; C < m; C++) {
          const R = C * 3,
            D = Math.random() * Math.PI * 2,
            I = Math.pow(Math.random(), 0.5) * 60,
            te = 3,
            se = (I / 60) * Math.PI * 4,
            ge = (Math.floor(Math.random() * te) / te) * Math.PI * 2;
          (x[R] = Math.cos(D + se + ge) * I),
            (x[R + 1] = (Math.random() - 0.5) * 40),
            (x[R + 2] = Math.sin(D + se + ge) * I);
          const re = g[Math.floor(Math.random() * g.length)];
          (b[R] = re.r + (Math.random() - 0.5) * 0.2),
            (b[R + 1] = re.g + (Math.random() - 0.5) * 0.2),
            (b[R + 2] = re.b + (Math.random() - 0.5) * 0.2);
        }
        u.setAttribute("position", new z(x, 3)),
          u.setAttribute("color", new z(b, 3));
        const p = new K({
            size: 0.25,
            vertexColors: !0,
            transparent: !0,
            opacity: 0.8,
            sizeAttenuation: !0,
          }),
          y = new X(u, p);
        d.add(y);
        const v = new q(),
          w = 5e3,
          f = new Float32Array(w * 3),
          N = new Float32Array(w * 3);
        for (let C = 0; C < w; C++) {
          const R = C * 3;
          (f[R] = (Math.random() - 0.5) * 300),
            (f[R + 1] = (Math.random() - 0.5) * 300),
            (f[R + 2] = (Math.random() - 0.5) * 300);
          const D = Math.random();
          (N[R] = D * 0.8 + 0.2), (N[R + 1] = D * 0.8 + 0.2), (N[R + 2] = D);
        }
        v.setAttribute("position", new z(f, 3)),
          v.setAttribute("color", new z(N, 3));
        const h = new K({
            size: 0.08,
            vertexColors: !0,
            transparent: !0,
            opacity: 0.6,
            sizeAttenuation: !0,
          }),
          j = new X(v, h);
        d.add(j);
        for (let C = 0; C < 12; C++) {
          const R = new le({
              color: new xe().setHSL(0.5 + Math.random() * 0.4, 0.8, 0.4),
              transparent: !0,
              opacity: 0.06 + Math.random() * 0.08,
              depthWrite: !1,
            }),
            D = new ae(Math.random() * 40 + 25, 32, 32),
            I = new F(D, R);
          I.position.set(
            (Math.random() - 0.5) * 150,
            (Math.random() - 0.5) * 120,
            (Math.random() - 0.5) * 150,
          ),
            I.scale.set(
              Math.random() * 3 + 1,
              Math.random() * 3 + 1,
              Math.random() * 3 + 1,
            ),
            d.add(I);
        }
        let S = 0,
          k = 0;
        const M = (C) => {
          (S = (C.clientX / window.innerWidth) * 2 - 1),
            (k = -(C.clientY / window.innerHeight) * 2 + 1);
        };
        window.addEventListener("mousemove", M);
        const A = () => {
          (r.current = requestAnimationFrame(A)),
            (y.rotation.z += 15e-5),
            (y.rotation.x += 8e-5),
            (y.rotation.y += 1e-4),
            (j.rotation.z += 5e-5),
            (j.rotation.x += 2e-5),
            (c.position.x = S * 25),
            (c.position.y = k * 20),
            c.lookAt(0, 0, 0),
            o.render(d, c);
        };
        A();
        const E = () => {
          if (!o) return;
          const C = window.innerWidth,
            R = window.innerHeight;
          (c.aspect = C / R), c.updateProjectionMatrix(), o.setSize(C, R);
        };
        return (
          window.addEventListener("resize", E),
          () => {
            window.removeEventListener("mousemove", M),
              window.removeEventListener("resize", E),
              cancelAnimationFrame(r.current),
              u.dispose(),
              p.dispose(),
              v.dispose(),
              h.dispose(),
              o.dispose(),
              t.current &&
                o.domElement.parentNode === t.current &&
                t.current.removeChild(o.domElement),
              d.clear();
          }
        );
      }, []),
      e.jsx("div", { ref: t, className: "fixed inset-0 z-0" })
    );
  },
  rs = () => {
    const t = l.useRef(null),
      r = l.useRef(!1);
    return (
      l.useEffect(() => {
        if (!t.current || r.current) return;
        r.current = !0;
        const s = new ce(),
          n = new de(75, window.innerWidth / window.innerHeight, 0.1, 2e3);
        n.position.z = 60;
        const a = new ue({ alpha: !0, antialias: !0 });
        a.setSize(window.innerWidth, window.innerHeight),
          a.setPixelRatio(window.devicePixelRatio),
          a.setClearColor(0, 1),
          t.current.appendChild(a.domElement);
        const i = new q(),
          d = 12e3,
          c = new Float32Array(d * 3),
          o = new Float32Array(d * 3),
          u = [
            { r: 0.1, g: 0.6, b: 1 },
            { r: 0.6, g: 0.2, b: 1 },
            { r: 1, g: 0.2, b: 0.6 },
            { r: 0.2, g: 1, b: 1 },
            { r: 1, g: 0.6, b: 0 },
            { r: 1, g: 0.3, b: 0.8 },
            { r: 0.5, g: 1, b: 0.5 },
            { r: 1, g: 1, b: 0.5 },
          ];
        for (let k = 0; k < d; k++) {
          const M = k * 3,
            A = Math.random() * Math.PI * 2,
            E = Math.pow(Math.random(), 0.5) * 60,
            C = 3,
            D = (E / 60) * Math.PI * 4,
            I = (Math.floor(Math.random() * C) / C) * Math.PI * 2;
          (c[M] = Math.cos(A + D + I) * E),
            (c[M + 1] = (Math.random() - 0.5) * 40),
            (c[M + 2] = Math.sin(A + D + I) * E);
          const te = u[Math.floor(Math.random() * u.length)];
          (o[M] = te.r + (Math.random() - 0.5) * 0.2),
            (o[M + 1] = te.g + (Math.random() - 0.5) * 0.2),
            (o[M + 2] = te.b + (Math.random() - 0.5) * 0.2);
        }
        i.setAttribute("position", new z(c, 3)),
          i.setAttribute("color", new z(o, 3));
        const m = new K({
            size: 0.25,
            vertexColors: !0,
            transparent: !0,
            opacity: 0.8,
            sizeAttenuation: !0,
          }),
          x = new X(i, m);
        s.add(x);
        const b = new q(),
          g = 5e3,
          p = new Float32Array(g * 3),
          y = new Float32Array(g * 3);
        for (let k = 0; k < g; k++) {
          const M = k * 3;
          (p[M] = (Math.random() - 0.5) * 300),
            (p[M + 1] = (Math.random() - 0.5) * 300),
            (p[M + 2] = (Math.random() - 0.5) * 300);
          const A = Math.random();
          (y[M] = A * 0.8 + 0.2), (y[M + 1] = A * 0.8 + 0.2), (y[M + 2] = A);
        }
        b.setAttribute("position", new z(p, 3)),
          b.setAttribute("color", new z(y, 3));
        const v = new K({
            size: 0.08,
            vertexColors: !0,
            transparent: !0,
            opacity: 0.6,
            sizeAttenuation: !0,
          }),
          w = new X(b, v);
        s.add(w);
        for (let k = 0; k < 12; k++) {
          const M = new le({
              color: new xe().setHSL(0.5 + Math.random() * 0.4, 0.8, 0.4),
              transparent: !0,
              opacity: 0.06 + Math.random() * 0.08,
              depthWrite: !1,
            }),
            A = new ae(Math.random() * 40 + 25, 32, 32),
            E = new F(A, M);
          E.position.set(
            (Math.random() - 0.5) * 150,
            (Math.random() - 0.5) * 120,
            (Math.random() - 0.5) * 150,
          ),
            E.scale.set(
              Math.random() * 3 + 1,
              Math.random() * 3 + 1,
              Math.random() * 3 + 1,
            ),
            s.add(E);
        }
        let f = 0,
          N = 0;
        const h = (k) => {
          (f = (k.clientX / window.innerWidth) * 2 - 1),
            (N = -(k.clientY / window.innerHeight) * 2 + 1);
        };
        window.addEventListener("mousemove", h);
        const j = () => {
          (x.rotation.z += 15e-5),
            (x.rotation.x += 8e-5),
            (x.rotation.y += 1e-4),
            (w.rotation.z += 5e-5),
            (w.rotation.x += 2e-5),
            (n.position.x = f * 25),
            (n.position.y = N * 20),
            n.lookAt(0, 0, 0),
            a.render(s, n),
            requestAnimationFrame(j);
        };
        j();
        const S = () => {
          const k = window.innerWidth,
            M = window.innerHeight;
          (n.aspect = k / M), n.updateProjectionMatrix(), a.setSize(k, M);
        };
        return (
          window.addEventListener("resize", S),
          () => {
            window.removeEventListener("mousemove", h),
              window.removeEventListener("resize", S),
              a.dispose();
          }
        );
      }, []),
      e.jsx("div", { ref: t, className: "fixed inset-0 z-0" })
    );
  },
  as = () => {
    const t = l.useRef(null);
    return (
      l.useEffect(() => {
        const r = t.current;
        if (!r) return;
        const s = new ce(),
          n = new de(75, r.clientWidth / r.clientHeight, 0.1, 1e3);
        n.position.z = 50;
        const a = new ue({ alpha: !0, antialias: !0 });
        a.setSize(r.clientWidth, r.clientHeight),
          a.setPixelRatio(window.devicePixelRatio),
          r.appendChild(a.domElement);
        const i = new q(),
          d = 8e3,
          c = new Float32Array(d * 3),
          o = new Float32Array(d * 3);
        for (let v = 0; v < d; v++) {
          const w = v * 3,
            f = Math.random() * 50,
            N = Math.random() * Math.PI * 2,
            h = f * 0.2;
          (c[w] = Math.cos(N + h) * f),
            (c[w + 1] = (Math.random() - 0.5) * 20),
            (c[w + 2] = Math.sin(N + h) * f),
            (o[w] = Math.random()),
            (o[w + 1] = Math.random() * 0.5 + 0.5),
            (o[w + 2] = 1);
        }
        i.setAttribute("position", new z(c, 3)),
          i.setAttribute("color", new z(o, 3));
        const u = new K({
            size: 0.15,
            vertexColors: !0,
            transparent: !0,
            opacity: 0.7,
          }),
          m = new X(i, u);
        s.add(m);
        let x = 0,
          b = 0;
        const g = (v) => {
          (x = (v.clientX / window.innerWidth - 0.5) * 2),
            (b = (v.clientY / window.innerHeight - 0.5) * 2);
        };
        window.addEventListener("mousemove", g);
        const p = () => {
          (m.rotation.y += 8e-4),
            (m.rotation.x += (b * 0.05 - m.rotation.x) * 0.05),
            (m.rotation.z += (x * 0.05 - m.rotation.z) * 0.05),
            a.render(s, n),
            requestAnimationFrame(p);
        };
        p();
        const y = () => {
          (n.aspect = r.clientWidth / r.clientHeight),
            n.updateProjectionMatrix(),
            a.setSize(r.clientWidth, r.clientHeight);
        };
        return (
          window.addEventListener("resize", y),
          () => {
            window.removeEventListener("mousemove", g),
              window.removeEventListener("resize", y),
              r.removeChild(a.domElement),
              i.dispose(),
              u.dispose(),
              a.dispose();
          }
        );
      }, []),
      e.jsx("div", { ref: t, className: "absolute inset-0 z-0" })
    );
  },
  ns = () => {
    const t = l.useRef(null);
    return (
      l.useEffect(() => {
        const r = t.current;
        if (!r) return;
        const s = new ce(),
          n = new de(75, window.innerWidth / window.innerHeight, 0.1, 5e3);
        n.position.z = 100;
        const a = new ue({ alpha: !0, antialias: !0 });
        a.setSize(window.innerWidth, window.innerHeight),
          a.setPixelRatio(window.devicePixelRatio),
          a.setClearColor(0, 1),
          t.current.appendChild(a.domElement);
        const i = new q(),
          d = 1e4,
          c = new Float32Array(d * 3),
          o = new Float32Array(d * 3);
        for (let L = 0; L < d; L++) {
          const T = L * 3;
          (c[T] = (Math.random() - 0.5) * 500),
            (c[T + 1] = (Math.random() - 0.5) * 500),
            (c[T + 2] = (Math.random() - 0.5) * 500);
          const W = Math.random();
          (o[T] = W * 0.8 + 0.2), (o[T + 1] = W * 0.9 + 0.1), (o[T + 2] = W);
        }
        i.setAttribute("position", new z(c, 3)),
          i.setAttribute("color", new z(o, 3));
        const u = new K({
            size: 0.2,
            vertexColors: !0,
            transparent: !0,
            opacity: 0.8,
            sizeAttenuation: !0,
          }),
          m = new X(i, u);
        s.add(m);
        const x = new q(),
          b = 12e3,
          g = new Float32Array(b * 3),
          p = new Float32Array(b * 3),
          y = [
            { r: 0.1, g: 0.6, b: 1 },
            { r: 0.6, g: 0.2, b: 1 },
            { r: 1, g: 0.2, b: 0.6 },
            { r: 0.2, g: 1, b: 1 },
            { r: 1, g: 0.6, b: 0.1 },
          ];
        for (let L = 0; L < b; L++) {
          const T = L * 3,
            W = Math.random() * Math.PI * 2,
            $ = Math.pow(Math.random(), 0.6) * 45,
            Je = ($ / 45) * Math.PI * 5;
          (g[T] = Math.cos(W + Je) * $),
            (g[T + 1] = (Math.random() - 0.5) * 30),
            (g[T + 2] = Math.sin(W + Je) * $);
          const Se = y[Math.floor(Math.random() * y.length)];
          (p[T] = Se.r), (p[T + 1] = Se.g), (p[T + 2] = Se.b);
        }
        x.setAttribute("position", new z(g, 3)),
          x.setAttribute("color", new z(p, 3));
        const v = new K({
            size: 0.35,
            vertexColors: !0,
            transparent: !0,
            opacity: 0.8,
            sizeAttenuation: !0,
          }),
          w = new X(x, v);
        w.position.set(-60, -20, -50), s.add(w);
        const f = new ae(8, 32, 32),
          N = document.createElement("canvas");
        (N.width = 512), (N.height = 512);
        const h = N.getContext("2d"),
          j = h.createRadialGradient(256, 256, 0, 256, 256, 256);
        j.addColorStop(0, "#ffff99"),
          j.addColorStop(0.5, "#ffcc00"),
          j.addColorStop(1, "#ff8800"),
          (h.fillStyle = j),
          h.fillRect(0, 0, 512, 512);
        const S = new Me(N),
          k = new le({ map: S }),
          M = new F(f, k);
        M.position.set(80, 60, -100), s.add(M);
        const A = new ae(9, 32, 32),
          E = new le({
            color: 16755200,
            transparent: !0,
            opacity: 0.3,
            depthWrite: !1,
          }),
          C = new F(A, E);
        C.position.copy(M.position), s.add(C);
        const R = new ae(5, 32, 32),
          D = document.createElement("canvas");
        (D.width = 1024), (D.height = 512);
        const I = D.getContext("2d");
        (I.fillStyle = "#1a4d7a"),
          I.fillRect(0, 0, 1024, 512),
          (I.fillStyle = "#2d8a3d"),
          I.fillRect(100, 200, 120, 80),
          I.fillRect(400, 150, 150, 100),
          I.fillRect(750, 220, 130, 70);
        const te = new Me(D),
          Fe = new ne({ map: te, emissive: 1731496, emissiveIntensity: 0.2 }),
          se = new F(R, Fe);
        se.position.set(30, -10, 0), s.add(se);
        const ge = new ae(1.5, 16, 16),
          re = document.createElement("canvas");
        (re.width = 256), (re.height = 256);
        const J = re.getContext("2d");
        (J.fillStyle = "#cccccc"),
          J.fillRect(0, 0, 256, 256),
          (J.fillStyle = "#999999"),
          J.beginPath(),
          J.arc(80, 80, 20, 0, Math.PI * 2),
          J.fill(),
          J.beginPath(),
          J.arc(180, 150, 15, 0, Math.PI * 2),
          J.fill();
        const ct = new Me(re),
          dt = new ne({ map: ct }),
          me = new F(ge, dt);
        me.position.set(38, -8, 0), s.add(me);
        const Q = new Ie(),
          ut = new Ee(1.5, 6, 8),
          mt = new ne({ color: 16711680 }),
          $e = new F(ut, mt);
        ($e.position.z = 3), Q.add($e);
        const pt = new ae(1.5, 8, 8),
          ht = new ne({ color: 16776960 }),
          ke = new F(pt, ht);
        (ke.position.z = 6.5), (ke.scale.z = 0.6), Q.add(ke);
        for (let L = 0; L < 3; L++) {
          const T = new Ee(1, 3, 4),
            W = new ne({ color: 26367 }),
            $ = new F(T, W);
          $.position.set(0, 0, 0.5),
            ($.rotation.z = (L * Math.PI * 2) / 3),
            ($.rotation.x = Math.PI / 4),
            Q.add($);
        }
        const xt = new Ee(1, 2, 8),
          ft = new le({ color: 16737792 }),
          Be = new F(xt, ft);
        (Be.position.z = 0),
          Q.add(Be),
          Q.position.set(-30, 40, 20),
          (Q.rotation.z = Math.PI / 6),
          s.add(Q);
        const oe = new Ie(),
          gt = new Yt(2, 3, 1),
          wt = new ne({ color: 13421772 }),
          bt = new F(gt, wt);
        oe.add(bt);
        const yt = new qt(4, 2),
          vt = new ne({ color: 39423 });
        for (let L = 0; L < 2; L++) {
          const T = new F(yt, vt);
          (T.position.y = L === 0 ? 3 : -3),
            (T.rotation.x = Math.PI / 6),
            oe.add(T);
        }
        oe.position.set(60, 30, -80), s.add(oe);
        for (let L = 0; L < 10; L++) {
          const T = new le({
              color: new xe().setHSL(0.5 + Math.random() * 0.4, 0.8, 0.4),
              transparent: !0,
              opacity: 0.06 + Math.random() * 0.08,
              depthWrite: !1,
            }),
            W = new ae(Math.random() * 40 + 30, 32, 32),
            $ = new F(W, T);
          $.position.set(
            (Math.random() - 0.5) * 200,
            (Math.random() - 0.5) * 200,
            (Math.random() - 0.5) * 200,
          ),
            $.scale.set(
              Math.random() * 2 + 1,
              Math.random() * 2 + 1,
              Math.random() * 2 + 1,
            ),
            s.add($);
        }
        const He = new Kt(16755200, 1.5, 300);
        He.position.copy(M.position), s.add(He);
        const jt = new Xt(4491519, 0.4);
        s.add(jt);
        let Ve = 0,
          We = 0,
          pe = 0,
          Ye;
        const qe = (L) => {
          (Ve = (L.clientX / window.innerWidth) * 2 - 1),
            (We = -(L.clientY / window.innerHeight) * 2 + 1);
        };
        window.addEventListener("mousemove", qe);
        const Ke = () => {
          (Ye = requestAnimationFrame(Ke)),
            (pe += 3e-4),
            (m.rotation.z += 5e-5),
            (w.rotation.z += 2e-4),
            (w.rotation.x += 8e-5),
            (se.rotation.y += 0.002),
            (me.rotation.y += 0.01),
            (M.rotation.y += 0.001),
            (C.rotation.y -= 0.001),
            (me.position.x = se.position.x + Math.cos(pe * 2) * 8),
            (me.position.y = se.position.y + Math.sin(pe * 2) * 4),
            (Q.position.x = -30 + Math.cos(pe * 0.8) * 15),
            (Q.position.y = 40 + Math.sin(pe * 0.6) * 10),
            (oe.rotation.z += 0.005),
            (oe.rotation.x += 0.002),
            (n.position.x = Ve * 40),
            (n.position.y = We * 30),
            n.lookAt(0, 0, 0),
            a.render(s, n);
        };
        Ke();
        const Xe = () => {
          const L = window.innerWidth,
            T = window.innerHeight;
          (n.aspect = L / T), n.updateProjectionMatrix(), a.setSize(L, T);
        };
        return (
          window.addEventListener("resize", Xe),
          () => {
            window.removeEventListener("mousemove", qe),
              window.removeEventListener("resize", Xe),
              cancelAnimationFrame(Ye),
              r.removeChild(a.domElement),
              i.dispose(),
              u.dispose(),
              x.dispose(),
              v.dispose(),
              a.dispose();
          }
        );
      }, []),
      e.jsx("div", { ref: t, className: "absolute inset-0 z-0" })
    );
  },
  be = ({ className: t = "w-5 h-5" }) =>
    e.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: t,
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      strokeWidth: "1.8",
      children: e.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0115 0",
      }),
    }),
  De = ({ className: t = "w-5 h-5" }) =>
    e.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: t,
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      strokeWidth: "1.8",
      children: e.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M16.5 10.5V7.5a4.5 4.5 0 00-9 0v3m10.5 0H6A1.5 1.5 0 004.5 12v7.5A1.5 1.5 0 006 21h12a1.5 1.5 0 001.5-1.5V12a1.5 1.5 0 00-1.5-1.5z",
      }),
    }),
  Oe = ({ className: t = "w-5 h-5" }) =>
    e.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: t,
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      strokeWidth: "1.8",
      children: e.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M15.75 9V5.25A2.25 2.25 0 0013.5 3H6.75A2.25 2.25 0 004.5 5.25v13.5A2.25 2.25 0 006.75 21H13.5a2.25 2.25 0 002.25-2.25V15M9 12h12m0 0l-3-3m3 3l-3 3",
      }),
    }),
  nt = ({ className: t = "w-5 h-5" }) =>
    e.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: t,
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      strokeWidth: "1.8",
      children: e.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zM13.5 7.5L21 15l-3 3L9 15l-4 4V5a2 2 0 012-2z",
      }),
    }),
  _e = ({ className: t = "w-5 h-5" }) =>
    e.jsxs("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: t,
      viewBox: "0 0 24 24",
      children: [
        e.jsx("path", {
          fill: "#4285F4",
          d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.3 5.3 0 01-2.21 3.31l3.57 2.77c2.08-1.92 3.28-4.74 3.28-8.09z",
        }),
        e.jsx("path", {
          fill: "#34A853",
          d: "M12 23a10.9 10.9 0 007.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06A7.94 7.94 0 014.13 14H.45v2.84A11.98 11.98 0 0012 23z",
        }),
        e.jsx("path", {
          fill: "#FBBC05",
          d: "M4.13 14a7.93 7.93 0 010-4H.45V7.16A12.02 12.02 0 000 12c0 1.79.39 3.49 1.1 5.01L4.13 14z",
        }),
        e.jsx("path", {
          fill: "#EA4335",
          d: "M12 4.75c1.62 0 3.06.56 4.21 1.64l3.15-3.15A11.97 11.97 0 000 12l4.13-3.34C5 6.06 7.43 4.75 12 4.75z",
        }),
      ],
    }),
  Ge = ({ className: t = "w-5 h-5" }) =>
    e.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: t,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      children: e.jsx("path", {
        d: "M12 .297C5.37.297 0 5.67 0 12.297c0 5.3 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.337.726-4.033-1.416-4.033-1.416-.547-1.387-1.334-1.756-1.334-1.756-1.09-.745.083-.729.083-.729 1.205.083 1.839 1.237 1.839 1.237 1.07 1.834 2.806 1.304 3.492.997.108-.775.419-1.305.763-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.524.118-3.176 0 0 1.007-.322 3.3 1.23a11.34 11.34 0 013.003-.404c1.02.005 2.047.138 3.006.404 2.292-1.552 3.298-1.23 3.298-1.23.653 1.653.242 2.874.118 3.176.768.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.478 5.921.43.372.822 1.102.822 2.222v3.293c0 .319.192.694.801.576C20.563 22.097 24 17.6 24 12.297 24 5.67 18.627.297 12 .297z",
      }),
    }),
  ot = ({ className: t = "w-5 h-5" }) =>
    e.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: t,
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      strokeWidth: "1.8",
      children: e.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M3 8l9 6 9-6M4.5 6h15A1.5 1.5 0 0121 7.5v9A1.5 1.5 0 0119.5 18h-15A1.5 1.5 0 013 16.5v-9A1.5 1.5 0 014.5 6z",
      }),
    }),
  Ue = ({ className: t = "w-5 h-5" }) =>
    e.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: t,
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      strokeWidth: "1.8",
      children: e.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M6 12L3.269 3.125A59.769 59.769 0 0121.94 19m0 0v3.751a9.010 9.010 0 01-5.314-1.625 28.019 28.019 0 01-15.165-15.724m0 0L3.25 3.125",
      }),
    }),
  je = ({ className: t = "w-5 h-5" }) =>
    e.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: t,
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      strokeWidth: "1.8",
      children: e.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M15 19l-7-7 7-7",
      }),
    });
class os {
  constructor() {
    this.map = new Map();
  }
  on(r, s) {
    const n = this.map.get(r) || [];
    return n.push(s), this.map.set(r, n), () => this.off(r, s);
  }
  once(r, s) {
    const n = this.on(r, (...a) => {
      n(), s(...a);
    });
    return n;
  }
  off(r, s) {
    const n = this.map.get(r) || [];
    this.map.set(
      r,
      n.filter((a) => a !== s),
    );
  }
  emit(r, ...s) {
    const n = this.map.get(r) || [];
    for (const a of n)
      try {
        a(...s);
      } catch (i) {
        console.error(i);
      }
  }
}
const G = new os(),
  U = {
    API_LOADING: "api:loading",
    API_TRACE: "api:trace",
    ERROR: "app:error",
    INSPECT_DETECTED: "security:inspect",
    INPUT_TRACE: "trace:input",
    VERSION_MISMATCH: "app:version:mismatch",
    TAB_VISIBILITY: "tab:visibility",
    THEME_CHANGED: "theme:changed",
    SOCKET_MESSAGE: "socket:message",
    SERVER_NOT_PING: "server_not_ping",
  },
  is = "Auth",
  ls = "1.0.0",
  cs = {
    inspectGuard: !0,
    inputTracer: !0,
    tabTracker: !0,
    wss: !1,
    isServerLive: !0,
  },
  ds = {
    url: "wss://api.ajayos.in",
    withCredentials: !0,
    reconnectionAttempts: 3,
    reconnectionDelay: 1e3,
    reconnection: !1,
    autoConnect: !0,
    transports: ["websocket"],
    timeout: 8e3,
    multiplex: !0,
    path: "",
  },
  us = {
    baseURL: "https://api.ajayos.in",
    timeout: 2e4,
    withCredentials: !0,
    retry: 3,
  },
  ms = "November 5, 2025",
  ps = [
    {
      id: 1,
      category: "✨ New Features",
      icon: "🎨",
      gradient: "from-purple-500/40 to-pink-500/40",
      borderColor: "border-purple-400/60",
      badgeGradient: "from-purple-500 to-pink-500",
      items: [
        {
          title: "Dark Mode Support",
          description: "Complete dark theme across all pages",
          image: "🌙",
        },
        {
          title: "Real-time Collaboration",
          description: "Work together with live updates",
          image: "👥",
        },
        {
          title: "AI-Powered Search",
          description: "Smart search with natural language",
          image: "🤖",
        },
      ],
    },
    {
      id: 2,
      category: "🐛 Bug Fixes",
      icon: "🔧",
      gradient: "from-blue-500/40 to-cyan-500/40",
      borderColor: "border-blue-400/60",
      badgeGradient: "from-blue-500 to-cyan-500",
      items: [
        {
          title: "Mobile Animation Fix",
          description: "Fixed loading spinner stuttering",
          image: "📱",
        },
        {
          title: "Memory Leak Resolution",
          description: "Resolved websocket memory leak",
          image: "💾",
        },
        {
          title: "Timezone Conversion",
          description: "Fixed timezone conversion errors",
          image: "⏰",
        },
      ],
    },
    {
      id: 3,
      category: "⚡ Performance",
      icon: "⚙️",
      gradient: "from-orange-500/40 to-red-500/40",
      borderColor: "border-orange-400/60",
      badgeGradient: "from-orange-500 to-red-500",
      items: [
        {
          title: "Bundle Size Reduction",
          description: "Reduced app bundle by 35%",
          image: "📦",
        },
        {
          title: "API Response Speed",
          description: "Improved response time by 40%",
          image: "⚡",
        },
        {
          title: "Image Optimization",
          description: "Smart loading for slow networks",
          image: "🖼️",
        },
      ],
    },
  ],
  it = {
    projectName: is,
    appVersion: ls,
    features: cs,
    ws: ds,
    api: us,
    releaseDate: ms,
    changelog: ps,
  },
  P = it,
  Ne = (t) => {
    var r;
    return !!((r = it.features) != null && r[t]);
  };
let O = null,
  Y = 0,
  Ae = null,
  we = [];
function _(t, r = {}) {
  G.emit(`SOCKET:${t}`, H({ type: t }, r));
}
function hs() {
  var r;
  if (!Ne("wss") || O) return;
  const t =
    ((r = P == null ? void 0 : P.ws) == null ? void 0 : r.url) ||
    window.location.origin;
  (O = Jt(t, P.ws)),
    O.on("connect", () => {
      (Y = 0), _("STATUS", { connected: !0, id: O.id }), xs();
    }),
    O.on("message", (s) => {
      _("MESSAGE", { data: s });
    }),
    O.on("notification", (s) => _("NOTIFICATION", { data: s })),
    O.on("update", (s) => _("UPDATE", { data: s })),
    O.on("connect_error", (s) => {
      _("ERROR", { message: s.message || "Connection error", attempt: Y }),
        st();
    }),
    O.on("disconnect", (s) => {
      _("DISCONNECT", { reason: s }), s !== "io client disconnect" && st();
    }),
    O.on("reconnect_attempt", () => {
      _("RECONNECT_ATTEMPT", { attempt: Y });
    }),
    O.on("reconnect_failed", () => {
      _("RECONNECT_FAILED", { attempt: Y });
    }),
    O.on("ping", () => {
      _("PING", { ts: Date.now() });
    }),
    O.on("pong", (s) => {
      _("PONG", { latency: s });
    }),
    _("INIT", { connected: !1 });
}
function xs() {
  if (we.length) {
    _("flush_start", { count: we.length });
    for (const t of we) O.emit(t.type, t.payload), _("sent", t);
    (we = []), _("flush_end");
  }
}
function st() {
  var n, a, i, d;
  if (Ae) return;
  const t =
      (a =
        (n = P == null ? void 0 : P.realtime) == null
          ? void 0
          : n.maxRetries) != null
        ? a
        : 5,
    r =
      (d =
        (i = P == null ? void 0 : P.realtime) == null
          ? void 0
          : i.retryDelay) != null
        ? d
        : 2e3;
  if (Y >= t) {
    _("reconnect_failed", { retries: Y });
    return;
  }
  const s = Math.min(r * Math.pow(2, Y), 3e4);
  Y++,
    _("reconnect_scheduled", { delay: s, attempt: Y }),
    (Ae = setTimeout(() => {
      (Ae = null),
        _("reconnecting", { attempt: Y }),
        O && !O.connected && O.connect();
    }, s));
}
let ye = localStorage.getItem("U1RBVElDX1VVSUQ");
ye || ((ye = lt()), localStorage.setItem("U1RBVElDX1VVSUQ", ye));
function lt(t = !1) {
  if (typeof crypto != "undefined") {
    if (crypto.getRandomValues) {
      const r = new Uint8Array(20);
      return (
        crypto.getRandomValues(r),
        `aos.${t ? "request" : "device"}_` +
          Array.from(r)
            .map((s) => s.toString(16).padStart(2, "0"))
            .join("")
      );
    } else if (crypto.randomBytes)
      return (
        `aos.${t ? "request" : "device"}_` +
        crypto.randomBytes(20).toString("hex")
      );
  }
  return (
    `aos.${t ? "request" : "device"}_` +
    (Math.random().toString(36).substring(2, 10) + Date.now())
  );
}
const ve = (t) =>
  `${(t.method || "GET").toUpperCase()} ${t.baseURL || ""}${t.url || ""}`;
function fs(t) {
  return (
    (t.metadata = { start: Date.now() }),
    (t.headers["x-request-time"] = new Date().toISOString()),
    (t.headers["x-request-id"] = lt(!0)),
    (t.headers["x-visitor-id"] = ye),
    (t.headers["x-request-timezone"] =
      Intl.DateTimeFormat().resolvedOptions().timeZone),
    (t.headers["x-request-utc-offset"] = -new Date().getTimezoneOffset() / 60),
    (t.headers["x-request-epoch"] = Date.now()),
    (t.headers["x-app-name"] = P.projectName),
    t
  );
}
async function gs(t, r) {
  var c, o, u, m, x, b;
  const s = t.config;
  if (!s || s._retrying) return Promise.reject(t);
  (s._retrying = !0), (s.__retryCount = s.__retryCount || 0);
  const n = Math.min(
      (o = (c = s.retry) != null ? c : P.api.retry) != null ? o : 3,
      5,
    ),
    a =
      (m = (u = s.retryDelay) != null ? u : P.api.retryDelay) != null ? m : 1e3,
    i = (x = t.response) == null ? void 0 : x.status;
  if (
    (i && i >= 400 && i < 500) ||
    t.code === "ECONNABORTED" ||
    ((b = t.message) != null && b.includes("canceled"))
  )
    return Promise.reject(t);
  let d = t;
  for (; s.__retryCount < n; ) {
    s.__retryCount += 1;
    const g = a * Math.pow(2, s.__retryCount - 1);
    P.api.trace &&
      G.emit(U.API_TRACE, {
        method: s.method,
        url: s.url,
        retry: s.__retryCount,
        delay: g,
      }),
      await new Promise((p) => setTimeout(p, g));
    try {
      const p = await r(s);
      return (
        s.loading === !0 &&
          G.emit(U.API_LOADING, { key: ve(s), loading: !1, inFlight: 0 }),
        p
      );
    } catch (p) {
      if (((d = p), s.__retryCount >= n)) break;
    }
  }
  return (
    s.loading === !0 &&
      G.emit(U.API_LOADING, { key: ve(s), loading: !1, inFlight: 0 }),
    G.emit(U.ERROR, d),
    G.emit(U.API_RETRY_END, {
      method: s.method,
      url: s.url,
      attempts: s.__retryCount,
    }),
    Promise.reject(d)
  );
}
const fe = Qt.create(P.api);
fe.interceptors.request.use(
  (t) => (
    fs(t),
    t.loading === !0 &&
      G.emit(U.API_LOADING, { key: ve(t), loading: !0, inFlight: 1 }),
    t
  ),
);
fe.interceptors.response.use(
  (t) => {
    var s;
    const r =
      Date.now() -
      (((s = t.config.metadata) == null ? void 0 : s.start) || Date.now());
    return (
      t.config.loading === !0 &&
        G.emit(U.API_LOADING, { key: ve(t.config), loading: !1, inFlight: 0 }),
      P.api.trace &&
        G.emit(U.API_TRACE, {
          method: t.config.method,
          url: t.config.url,
          ms: r,
          status: t.status,
        }),
      t
    );
  },
  async (t) => {
    var n, a;
    const r = t.config || {},
      s =
        Date.now() -
        (((n = r.metadata) == null ? void 0 : n.start) || Date.now());
    return (
      P.api.trace &&
        G.emit(U.API_TRACE, {
          method: r.method,
          url: r.url,
          ms: s,
          status: ((a = t.response) == null ? void 0 : a.status) || 0,
        }),
      gs(t, fe)
    );
  },
);
const ie = async (t = "GET", r, s = {}, n = {}) => {
    var c;
    let a;
    function i(o = {}) {
      const u = encodeURIComponent;
      return Object.keys(o)
        .map((m) => `${u(m)}=${u(o[m])}`)
        .join("&");
    }
    const d = H({ method: t.toUpperCase(), url: r }, n);
    if (["GET", "DELETE", "HEAD"].includes(t.toUpperCase())) {
      if (s && Object.keys(s).length) {
        const o = i(s),
          u = r.includes("?") ? "&" : "?";
        d.url = `${r}${u}${o}`;
      }
    } else d.data = s;
    try {
      const { data: o } = await fe(d);
      a = o;
    } catch (o) {
      a = ((c = o == null ? void 0 : o.response) == null ? void 0 : c.data) || {
        error: !0,
        code: "INTERNAL_SERVER_ERROR",
        message: (o == null ? void 0 : o.message) || "Something went wrong :)",
      };
    }
    return a;
  },
  ee = {
    get: (t, r = {}, s = {}) => ie("GET", t, r, s),
    post: (t, r = {}, s = {}) => ie("POST", t, r, s),
    put: (t, r = {}, s = {}) => ie("PUT", t, r, s),
    patch: (t, r = {}, s = {}) => ie("PATCH", t, r, s),
    delete: (t, r = {}, s = {}) => ie("DELETE", t, r, s),
    head: (t, r = {}, s = {}) => ie("HEAD", t, r, s),
  };
function ws() {
  const t = () => G.emit(U.TAB_VISIBILITY, { hidden: document.hidden });
  document.addEventListener("visibilitychange", t), t();
}
const bs = async () => {
  try {
    await fe({
      method: "GET",
      url: "/ping",
      timeout: 2e3,
      retry: 1,
      loading: !1,
    });
  } catch (t) {
    G.emit("SYSTEM_GUARD", {
      model: "SERVER_DOWN",
      error: t == null ? void 0 : t.message,
    });
  }
};
function ys() {
  Ne("inputTracer") &&
    (window.addEventListener(
      "keydown",
      (t) => {
        G.emit(U.INPUT_TRACE, { type: "key", key: t.key, ts: Date.now() });
      },
      !0,
    ),
    window.addEventListener(
      "click",
      (t) => {
        G.emit(U.INPUT_TRACE, {
          type: "mouse",
          button: t.button,
          x: t.clientX,
          y: t.clientY,
          ts: Date.now(),
        });
      },
      !0,
    ));
}
const vs = [
  { key: "F12" },
  { key: "I", ctrlKey: !0, shiftKey: !0 },
  { key: "C", ctrlKey: !0, shiftKey: !0 },
  { key: "U", ctrlKey: !0 },
  { key: "S", ctrlKey: !0 },
];
function js(t, r) {
  var s;
  return (
    (r.key ? ((s = t.key) == null ? void 0 : s.toUpperCase()) === r.key : !0) &&
    (r.ctrlKey ? t.ctrlKey : !r.ctrlKey) &&
    (r.shiftKey ? t.shiftKey : !r.shiftKey)
  );
}
function Ns() {
  const t = `
    font-size: 32px;
    font-weight: 800;
    color: #ff0000;
    text-shadow: 0 0 8px #ff0000;
  `,
    r = `
    font-size: 14px;
    color: #ffffff;
    background-color: #1e1e1e;
    padding: 10px;
    border: 1px solid #ff0000;
    border-radius: 6px;
  `;
  console.clear(),
    console.log("%c⚠️ SECURITY WARNING ⚠️", t),
    console.log(
      "%cThis console is for developers only. Any unauthorized access, data inspection, or code modification may violate terms of service or security policies.",
      r,
    ),
    console.log(
      "%c📜 View Terms & Conditions: https://terms.ajayos.in/",
      "color: #00ffff; font-weight: bold;",
    ),
    console.log(
      "%c🔒 For security reasons, please close the DevTools window if opened unintentionally.",
      "color: #ff8800;",
    );
}
function ks() {
  if (!Ne("inspectGuard")) return;
  Ns(),
    console.log("%cInspect Guard is active.", "color: #00ff00;"),
    window.addEventListener("contextmenu", (s) => s.preventDefault()),
    window.addEventListener(
      "keydown",
      (s) => {
        vs.some((n) => js(s, n)) && (s.preventDefault(), s.stopPropagation());
      },
      !0,
    );
  let t = !1;
  setInterval(() => {
    const n =
      window.outerWidth - window.innerWidth > 160 ||
      window.outerHeight - window.innerHeight > 160;
    n !== t &&
      ((t = n),
      t &&
        (console.log(
          "%c-----------------------------------",
          "color: #555555;",
        ),
        console.log("%cDevTools detected!", "color: #ff0000; font-size: 16px;"),
        console.log("%cPlease close the DevTools window.", "color: #ff8800;"),
        console.log(
          "%c🔒 For security reasons, please close the DevTools window if opened unintentionally.",
          "color: #ff8800;",
        ),
        console.log("%c-----------------------------------", "color: #555555;"),
        G.emit(U.INSPECT_DETECTED, { open: !0 })));
  }, 1e3);
}
const Re = {
    inspectGuard: ks,
    inputTracer: ys,
    tabTracker: ws,
    wss: hs,
    isServerLive: bs,
  },
  Ss = () => {
    const [t, r] = l.useState({ username: "", password: "" }),
      [s, n] = l.useState(!1),
      [a, i] = l.useState(!1),
      [d, c] = l.useState({ username: "", password: "" }),
      [o, u] = l.useState({ type: "", text: "" }),
      m = V(),
      b = new URLSearchParams(window.location.search).get("next"),
      g = async (f) => {
        f.preventDefault(),
          c({ username: "", password: "" }),
          u({ type: "", text: "" }),
          i(!0);
        let N = null,
          h = null;
        try {
          const j = btoa(JSON.stringify(t)),
            { code: S, message: k } = await ee.get(`/auth/login?data=${j}`);
          switch (((N = S), (h = k), S)) {
            case "ACCOUNT_NOT_FOUND":
            case "ACCOUNT_SUSPENDED":
            case "ACCOUNT_NOT_VERIFIED":
              c({ username: k, password: "" });
              break;
            case "NO_PASSWORD_SET":
            case "INVALID_PASSWORD":
              c({ username: "", password: k });
              break;
            case "LOGIN_SUCCESS":
              u({
                type: "success",
                text: "✅ Login successful! Redirecting...",
              }),
                setTimeout(() => {
                  m(b || "/");
                }, 1500);
              break;
            default:
              u({
                type: "error",
                text: k || "⚠️ Something went wrong. Please try again later.",
              });
              break;
          }
        } catch (j) {
          u({
            type: "error",
            text: "🚨 Network error: Unable to reach the server.",
          });
        } finally {
          i(!1);
        }
      },
      p = (f) => m(`/oauth/${f.toLowerCase()}${b ? `?next=${b}` : ""}`),
      y =
        "peer w-full p-3 bg-black/30 border rounded-xl text-white placeholder-transparent focus:ring-4 focus:outline-none transition",
      v = (f) =>
        d[f]
          ? "text-red-400"
          : t[f]
            ? "text-cyan-300"
            : "text-gray-400 peer-focus:text-cyan-300",
      w = (f) =>
        d[f]
          ? "border-red-400 focus:ring-red-400/30"
          : "border-cyan-400/40 focus:border-cyan-300 focus:ring-cyan-500/30";
    return e.jsx("div", {
      className:
        "relative z-10 w-screen h-[80vh] flex items-center justify-center px-4",
      children: e.jsx("div", {
        className:
          "w-full max-w-md backdrop-blur-2xl bg-white/5 border border-cyan-400/30 rounded-3xl shadow-2xl p-8",
        style: {
          boxShadow:
            "0 50px 100px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255,255,255,0.1)",
        },
        children: e.jsxs("form", {
          className: "space-y-6",
          onSubmit: g,
          children: [
            e.jsxs("div", {
              className: "relative",
              children: [
                e.jsx(be, {
                  className:
                    "absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400 w-5 h-5",
                }),
                e.jsx("input", {
                  type: "text",
                  id: "username",
                  required: !0,
                  value: t.username,
                  onChange: (f) =>
                    r(Z(H({}, t), { username: f.target.value.trim() })),
                  className: `${y} pl-12 ${w("username")}`,
                  placeholder: "Username or Email",
                  title: "Enter your username or email address",
                }),
                e.jsx("label", {
                  htmlFor: "username",
                  className: `absolute left-12 text-sm transition-all duration-200 pointer-events-none ${t.username ? "top-0 -translate-y-full text-xs" : "top-1/2 -translate-y-1/2 peer-focus:top-0 peer-focus:text-xs peer-focus:-translate-y-full"} ${v("username")}`,
                  children: "Username or Email",
                }),
                d.username &&
                  e.jsx("p", {
                    className: "text-xs text-red-400 mt-1",
                    children: d.username,
                  }),
              ],
            }),
            e.jsxs("div", {
              className: "relative",
              children: [
                e.jsx(De, {
                  className:
                    "absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400 w-5 h-5",
                }),
                e.jsx("input", {
                  type: s ? "text" : "password",
                  id: "password",
                  required: !0,
                  value: t.password,
                  onChange: (f) =>
                    r(Z(H({}, t), { password: f.target.value.trim() })),
                  className: `${y} pl-12 pr-10 ${w("password")}`,
                  placeholder: "Password",
                  title: "Enter your password",
                }),
                e.jsx("label", {
                  htmlFor: "password",
                  className: `absolute left-12 text-sm transition-all duration-200 pointer-events-none ${t.password ? "top-0 -translate-y-full text-xs" : "top-1/2 -translate-y-1/2 peer-focus:top-0 peer-focus:text-xs peer-focus:-translate-y-full"} ${v("password")}`,
                  children: "Password",
                }),
                e.jsx("button", {
                  type: "button",
                  onClick: () => n(!s),
                  className:
                    "absolute right-4 top-1/2 -translate-y-1/2 transition hover:scale-125",
                  title: s ? "Hide password" : "Show password",
                  children: s ? "🙉" : "🙈",
                }),
                d.password &&
                  e.jsx("p", {
                    className: "text-xs text-red-400 mt-1",
                    children: d.password,
                  }),
              ],
            }),
            e.jsx("div", {
              className:
                "text-right text-sm text-indigo-400 hover:text-indigo-300 cursor-pointer transition",
              onClick: () => m(`/forgot${b ? `?next=${b}` : ""}`),
              title: "Reset your password",
              children: "Forgot Password?",
            }),
            o.text &&
              e.jsx("div", {
                className: `p-3 text-sm border rounded-xl ${o.type === "success" ? "text-green-400 bg-green-900/20 border-green-500/30 animate-bounce" : "text-red-400 bg-red-900/20 border-red-500/30 animate-pulse"}`,
                children: o.text,
              }),
            e.jsxs("button", {
              type: "submit",
              disabled: a,
              className: `w-full p-3 font-bold rounded-xl text-white shadow-xl transition-all duration-300 relative overflow-hidden group ${a ? "bg-gradient-to-r from-gray-500 to-gray-700 cursor-wait" : "bg-gradient-to-r from-cyan-500 to-indigo-600 hover:scale-[1.02] hover:shadow-2xl"}`,
              children: [
                e.jsxs("span", {
                  className:
                    "relative z-10 flex justify-center items-center gap-2",
                  children: [
                    a
                      ? e.jsx("span", {
                          className:
                            "animate-spin border-2 border-t-transparent border-white w-5 h-5 rounded-full",
                        })
                      : e.jsx(Oe, { className: "w-5 h-5" }),
                    a ? "Signing In..." : "SIGN IN",
                  ],
                }),
                e.jsx("span", {
                  className:
                    "absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-all duration-700 group-hover:left-[100%]",
                }),
              ],
            }),
            e.jsxs("div", {
              className: "flex items-center my-6",
              children: [
                e.jsx("div", {
                  className:
                    "flex-grow h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent",
                }),
                e.jsx("span", {
                  className:
                    "mx-4 text-xs text-gray-500 uppercase tracking-widest font-semibold",
                  children: "Or log in with",
                }),
                e.jsx("div", {
                  className:
                    "flex-grow h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent",
                }),
              ],
            }),
            e.jsx("div", {
              className: "flex gap-3",
              children: [
                { name: "Google", icon: e.jsx(_e, {}), id: "google" },
                { name: "GitHub", icon: e.jsx(Ge, {}), id: "github" },
                {
                  name: "Passkey",
                  icon: e.jsx(nt, { className: "w-4 h-4 text-indigo-400" }),
                  id: "passkey",
                },
              ].map(({ name: f, icon: N, id: h }) =>
                e.jsxs(
                  "button",
                  {
                    onClick: () => p(h),
                    type: "button",
                    className:
                      "flex-1 p-3 border border-indigo-400/40 rounded-xl bg-black/30 text-sm text-gray-200 font-semibold flex items-center justify-center gap-2 transition hover:bg-indigo-400/10 hover:border-indigo-400 hover:scale-[1.02] hover:shadow-lg",
                    title: `Continue with ${f}`,
                    children: [
                      N,
                      e.jsx("span", {
                        className: "hidden sm:inline",
                        children: f,
                      }),
                    ],
                  },
                  h,
                ),
              ),
            }),
            e.jsx("div", {
              className: "text-center text-sm text-blue-400 cursor-pointer",
              onClick: () => m(`/signup${b ? `?next=${b}` : ""}`),
              title: "Create a new account",
              children: "Don’t have an account? Sign Up",
            }),
          ],
        }),
      }),
    });
  },
  Cs = () => {
    const [t, r] = l.useState({ email: "", firstName: "", lastName: "" }),
      [s, n] = l.useState(!1),
      [a, i] = l.useState({ email: "", firstName: "", lastName: "" }),
      [d, c] = l.useState({ type: "", text: "" }),
      o = V(),
      u = async (g) => {
        if (
          (g.preventDefault(),
          i({ email: "", firstName: "", lastName: "" }),
          c({ type: "", text: "" }),
          !t.firstName || !t.lastName || !t.email)
        ) {
          i({
            email: t.email ? "" : "Email is required.",
            firstName: t.firstName ? "" : "First Name is required.",
            lastName: t.lastName ? "" : "Last Name is required.",
          });
          return;
        }
        n(!0);
        try {
          const { code: p, message: y } = await ee.post("/auth/account", t);
          switch (p) {
            case "USER_ALREADY_EXISTS":
            case "USER_NOT_VERIFIED":
            case "ACCOUNT_NOT_VERIFIED":
              i({ email: y, firstName: "", lastName: "" });
              break;
            case "REGISTER_SUCCESS":
              c({
                type: "success",
                text: "✅ Registration successful! check your mail...",
              }),
                o("/checkMail");
              break;
            default:
              c({
                type: "error",
                text: "⚠️ Something went wrong. Please try again later.",
              });
              break;
          }
        } catch (p) {
          console.log(p),
            c({
              type: "error",
              text: "🚨 Network error: Unable to reach the server.",
            });
        } finally {
          n(!1);
        }
      },
      m = (g) => o(`/oauth/${g.toLowerCase()}`),
      x =
        "peer w-full p-3 bg-black/30 border rounded-xl text-white placeholder-transparent focus:ring-4 focus:outline-none transition",
      b =
        "peer w-full p-3 bg-black/30 border border-cyan-400/40 rounded-xl text-white placeholder-transparent focus:ring-4 focus:ring-cyan-500/30 focus:border-cyan-300 focus:outline-none transition";
    return e.jsx("div", {
      className:
        "relative z-10 w-screen h-[80vh] flex items-center justify-center px-4",
      children: e.jsx("div", {
        className:
          "w-full max-w-md backdrop-blur-2xl bg-white/5 border border-cyan-400/30 rounded-3xl shadow-2xl p-8",
        style: {
          boxShadow:
            "0 50px 100px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255,255,255,0.1)",
        },
        children: e.jsxs("form", {
          className: "space-y-6",
          onSubmit: u,
          children: [
            e.jsxs("div", {
              className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
              children: [
                e.jsxs("div", {
                  className: "relative",
                  children: [
                    e.jsx(be, {
                      className:
                        "absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400 w-5 h-5",
                    }),
                    e.jsx("input", {
                      type: "text",
                      id: "firstName",
                      value: t.firstName,
                      onChange: (g) =>
                        r(Z(H({}, t), { firstName: g.target.value })),
                      className: b + " pl-12",
                      placeholder: "First Name",
                    }),
                    e.jsx("label", {
                      htmlFor: "firstName",
                      className: `absolute left-12 text-sm transition-all duration-200 pointer-events-none ${t.firstName ? "top-0 -translate-y-full text-xs text-cyan-300" : "top-1/2 -translate-y-1/2 text-gray-400 peer-focus:top-0 peer-focus:text-xs peer-focus:-translate-y-full peer-focus:text-cyan-300"}`,
                      children: "First Name",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "relative",
                  children: [
                    e.jsx(be, {
                      className:
                        "absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400 w-5 h-5",
                    }),
                    e.jsx("input", {
                      type: "text",
                      id: "lastName",
                      value: t.lastName,
                      onChange: (g) =>
                        r(Z(H({}, t), { lastName: g.target.value })),
                      className: b + " pl-12",
                      placeholder: "Last Name",
                    }),
                    e.jsx("label", {
                      htmlFor: "lastName",
                      className: `absolute left-12 text-sm transition-all duration-200 pointer-events-none ${t.lastName ? "top-0 -translate-y-full text-xs text-cyan-300" : "top-1/2 -translate-y-1/2 text-gray-400 peer-focus:top-0 peer-focus:text-xs peer-focus:-translate-y-full peer-focus:text-cyan-300"}`,
                      children: "Last Name",
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className: "relative",
              children: [
                e.jsx(be, {
                  className:
                    "absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400 w-5 h-5",
                }),
                e.jsx("input", {
                  type: "email",
                  id: "email",
                  required: !0,
                  value: t.email,
                  onChange: (g) =>
                    r(Z(H({}, t), { email: g.target.value.trim() })),
                  className: `${x} pl-12 border-cyan-400/40 focus:border-cyan-300 focus:ring-cyan-500/30 ${a.email ? "border-red-400 focus:ring-red-400/30" : ""}`,
                  placeholder: "Email",
                }),
                e.jsx("label", {
                  htmlFor: "email",
                  className: `absolute left-12 text-sm transition-all duration-200 pointer-events-none ${t.email ? "top-0 -translate-y-full text-xs text-cyan-300" : "top-1/2 -translate-y-1/2 text-gray-400 peer-focus:top-0 peer-focus:text-xs peer-focus:-translate-y-full peer-focus:text-cyan-300"}`,
                  children: "Email",
                }),
                a.email &&
                  e.jsx("p", {
                    className: "text-xs text-red-400 mt-1",
                    children: a.email,
                  }),
              ],
            }),
            d.text &&
              e.jsx("div", {
                className: `p-3 text-sm border rounded-xl ${d.type === "success" ? "text-green-400 bg-green-900/20 border-green-500/30 animate-bounce" : "text-red-400 bg-red-900/20 border-red-500/30 animate-pulse"}`,
                children: d.text,
              }),
            e.jsxs("button", {
              type: "submit",
              disabled: s,
              className: `w-full p-3 font-bold rounded-xl text-white shadow-xl transition-all duration-300 relative overflow-hidden group ${s ? "bg-gradient-to-r from-gray-500 to-gray-700 cursor-wait" : "bg-gradient-to-r from-cyan-500 to-indigo-600 hover:scale-[1.02] hover:shadow-2xl"}`,
              children: [
                e.jsxs("span", {
                  className:
                    "relative z-10 flex justify-center items-center gap-2",
                  children: [
                    s
                      ? e.jsx("span", {
                          className:
                            "animate-spin border-2 border-t-transparent border-white w-5 h-5 rounded-full",
                        })
                      : e.jsx(Oe, { className: "w-5 h-5" }),
                    s ? "Signing up..." : "SIGN UP",
                  ],
                }),
                e.jsx("span", {
                  className:
                    "absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-all duration-700 group-hover:left-[100%]",
                }),
              ],
            }),
            e.jsxs("div", {
              className: "flex items-center my-6",
              children: [
                e.jsx("div", {
                  className:
                    "flex-grow h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent",
                }),
                e.jsx("span", {
                  className:
                    "mx-4 text-xs text-gray-500 uppercase tracking-widest font-semibold",
                  children: "Or Sign up with",
                }),
                e.jsx("div", {
                  className:
                    "flex-grow h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent",
                }),
              ],
            }),
            e.jsx("div", {
              className: "flex gap-3",
              children: [
                { name: "Google", icon: e.jsx(_e, {}), id: "google" },
                { name: "GitHub", icon: e.jsx(Ge, {}), id: "github" },
              ].map(({ name: g, icon: p, id: y }) =>
                e.jsxs(
                  "button",
                  {
                    onClick: () => m(y),
                    type: "button",
                    className:
                      "flex-1 p-3 border border-indigo-400/40 rounded-xl bg-black/30 text-sm text-gray-200 font-semibold flex items-center justify-center gap-2 transition hover:bg-indigo-400/10 hover:border-indigo-400 hover:scale-[1.02] hover:shadow-lg",
                    children: [
                      p,
                      e.jsx("span", {
                        className: "hidden sm:inline",
                        children: g,
                      }),
                    ],
                  },
                  y,
                ),
              ),
            }),
            e.jsx("div", {
              className: "text-center text-sm text-blue-400 cursor-pointer",
              onClick: () => o("/login"),
              children: "have an account? Sign In",
            }),
          ],
        }),
      }),
    });
  },
  Ms = () => {
    const t = V(),
      s = new URLSearchParams(window.location.search).get("next");
    return e.jsxs("div", {
      className:
        "relative z-10 w-screen h-[80vh] flex items-center justify-center px-4",
      children: [
        e.jsx("div", {
          className:
            "absolute w-[400px] h-[400px] bg-cyan-500/20 blur-3xl rounded-full -top-20 -left-20 animate-pulse",
        }),
        e.jsxs("div", {
          className:
            "relative z-10 max-w-md w-full mx-auto p-8 rounded-3xl border border-cyan-400/30 backdrop-blur-2xl bg-white/5 shadow-2xl text-center animate-fadeIn",
          children: [
            e.jsx("div", {
              className: "flex justify-center mb-6",
              children: e.jsx("div", {
                className:
                  "p-6 bg-cyan-500/20 rounded-full border border-cyan-400/30 shadow-xl animate-float",
                children: e.jsx(ot, { className: "w-12 h-12 text-cyan-400" }),
              }),
            }),
            e.jsx("h1", {
              className:
                "text-2xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-2",
              children: "Check Your Mail",
            }),
            e.jsx("p", {
              className: "text-gray-300 text-sm mb-6",
              children:
                "We’ve sent a confirmation link to your registered email address. Please check your inbox and click on the link to verify your account.",
            }),
            e.jsxs("div", {
              className: "flex flex-col sm:flex-row gap-3",
              children: [
                e.jsxs("button", {
                  onClick: () =>
                    window.open("https://mail.google.com", "_blank"),
                  className:
                    "flex items-center justify-center gap-2 w-full p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 font-semibold",
                  children: [
                    e.jsx(Ue, { className: "w-5 h-5" }),
                    "Open Mail App",
                  ],
                }),
                e.jsxs("button", {
                  onClick: () => t(`/login${s ? `?next=${s}` : ""}`),
                  className:
                    "flex items-center justify-center gap-2 w-full p-3 rounded-xl bg-white/10 hover:bg-white/20 border border-cyan-400/30 transition-all duration-300 font-semibold",
                  children: [
                    e.jsx(je, { className: "w-5 h-5" }),
                    "Back to Login",
                  ],
                }),
              ],
            }),
            e.jsxs("p", {
              className: "text-xs text-gray-400 mt-6",
              children: [
                "Didn’t get it? Check spam folder or ",
                e.jsx("button", {
                  onClick: () => t("https://support.ajayos.in"),
                  className:
                    "text-cyan-400 hover:text-cyan-300 underline cursor-pointer",
                  children: "contact Support",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Es = () => {
    const t = V(),
      r = new URLSearchParams(window.location.search),
      s = r.get("token"),
      n = r.get("next"),
      [a, i] = l.useState({ password: "", confirm: "" }),
      [d, c] = l.useState(""),
      [o, u] = l.useState(!1),
      [m, x] = l.useState(""),
      [b, g] = l.useState({ type: "", text: "" }),
      [p, y] = l.useState(!1);
    l.useEffect(() => {
      try {
        if (s) {
          const f = JSON.parse(atob(s));
          f.email
            ? c(f.email)
            : (x("Invalid token data. Please check your link."),
              t(`/login${n ? `?next=${n}` : ""}`));
        }
      } catch (f) {
        console.error("Invalid base64 data");
      }
    }, [s, t, n]);
    const v = async (f) => {
        if (
          (f.preventDefault(),
          x(""),
          g({ type: "", text: "" }),
          a.password.length < 6)
        ) {
          x("Password must be at least 6 characters long.");
          return;
        }
        if (a.password !== a.confirm) {
          x("Passwords do not match!");
          return;
        }
        y(!0);
        try {
          const { message: N, error: h } = await ee.post(
            "/auth/account/verify-email",
            { data: btoa(JSON.stringify({ email: d, password: a.password })) },
          );
          h
            ? x({
                type: "error",
                text: N || "⚠️ Something went wrong. Try again!",
              })
            : (g({ type: "success", text: "✅ Password set successfully!" }),
              setTimeout(() => {
                t(`/login${n ? `?next=${n}` : ""}`);
              }, 2e3));
        } catch (N) {
          g({ type: "error", text: "⚠️ Something went wrong. Try again!" });
        } finally {
          y(!1);
        }
      },
      w =
        "peer w-full p-3 bg-black/30 border rounded-xl text-white placeholder-transparent focus:ring-4 focus:outline-none transition";
    return e.jsx("div", {
      className:
        "relative z-10 w-screen h-[80vh] flex items-center justify-center px-4",
      children: e.jsxs("div", {
        className:
          "w-full max-w-md backdrop-blur-2xl bg-white/5 border border-cyan-400/30 rounded-3xl shadow-2xl p-8",
        style: {
          boxShadow:
            "0 50px 100px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255,255,255,0.1)",
        },
        children: [
          e.jsxs("button", {
            onClick: () => t(-1),
            className:
              "flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-6 transition",
            children: [
              e.jsx(je, { className: "w-4 h-4" }),
              e.jsx("span", { children: "Back" }),
            ],
          }),
          e.jsx("h2", {
            className: "text-2xl font-bold text-white text-center mb-6",
            children: "🔐 Set Your Password",
          }),
          e.jsxs("form", {
            className: "space-y-6",
            onSubmit: v,
            children: [
              e.jsxs("div", {
                className: "relative",
                children: [
                  e.jsx(De, {
                    className:
                      "absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400 w-5 h-5",
                  }),
                  e.jsx("input", {
                    type: o ? "text" : "password",
                    id: "password",
                    required: !0,
                    value: a.password,
                    onChange: (f) =>
                      i(Z(H({}, a), { password: f.target.value.trim() })),
                    className: `${w} pl-12 border-cyan-400/40 focus:border-cyan-300 focus:ring-cyan-500/30`,
                    placeholder: "New Password",
                  }),
                  e.jsx("label", {
                    htmlFor: "password",
                    className: `absolute left-12 text-sm transition-all duration-200 pointer-events-none ${a.password ? "top-0 -translate-y-full text-xs text-cyan-300" : "top-1/2 -translate-y-1/2 text-gray-400 peer-focus:top-0 peer-focus:text-xs peer-focus:-translate-y-full peer-focus:text-cyan-300"}`,
                    children: "New Password",
                  }),
                  e.jsx("button", {
                    type: "button",
                    onClick: () => u(!o),
                    className:
                      "absolute right-4 top-1/2 -translate-y-1/2 transition hover:scale-125",
                    children: o ? "🙉" : "🙈",
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "relative",
                children: [
                  e.jsx(De, {
                    className:
                      "absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400 w-5 h-5",
                  }),
                  e.jsx("input", {
                    type: o ? "text" : "password",
                    id: "confirm",
                    required: !0,
                    value: a.confirm,
                    onChange: (f) =>
                      i(Z(H({}, a), { confirm: f.target.value.trim() })),
                    className: `${w} pl-12 border-cyan-400/40 focus:border-cyan-300 focus:ring-cyan-500/30`,
                    placeholder: "Confirm Password",
                  }),
                  e.jsx("label", {
                    htmlFor: "confirm",
                    className: `absolute left-12 text-sm transition-all duration-200 pointer-events-none ${a.confirm ? "top-0 -translate-y-full text-xs text-cyan-300" : "top-1/2 -translate-y-1/2 text-gray-400 peer-focus:top-0 peer-focus:text-xs peer-focus:-translate-y-full peer-focus:text-cyan-300"}`,
                    children: "Confirm Password",
                  }),
                ],
              }),
              m &&
                e.jsx("p", {
                  className:
                    "text-xs text-red-400 bg-red-900/20 p-2 rounded-lg border border-red-500/30",
                  children: m,
                }),
              b.text &&
                e.jsx("div", {
                  className: `p-3 text-sm border rounded-xl ${b.type === "success" ? "text-green-400 bg-green-900/20 border-green-500/30 animate-bounce" : "text-red-400 bg-red-900/20 border-red-500/30 animate-pulse"}`,
                  children: b.text,
                }),
              e.jsxs("button", {
                type: "submit",
                disabled: p,
                className: `w-full p-3 font-bold rounded-xl text-white shadow-xl transition-all duration-300 relative overflow-hidden group ${p ? "bg-gradient-to-r from-gray-500 to-gray-700 cursor-wait" : "bg-gradient-to-r from-cyan-500 to-indigo-600 hover:scale-[1.02] hover:shadow-2xl"}`,
                children: [
                  e.jsxs("span", {
                    className:
                      "relative z-10 flex justify-center items-center gap-2",
                    children: [
                      p
                        ? e.jsx("span", {
                            className:
                              "animate-spin border-2 border-t-transparent border-white w-5 h-5 rounded-full",
                          })
                        : e.jsx(Ue, { className: "w-5 h-5" }),
                      p ? "Setting Password..." : "SET PASSWORD",
                    ],
                  }),
                  e.jsx("span", {
                    className:
                      "absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-all duration-700 group-hover:left-[100%]",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  Ps = () => {
    const [t, r] = l.useState(""),
      [s, n] = l.useState(!1),
      [a, i] = l.useState({ type: "", text: "" }),
      d = V(),
      o = new URLSearchParams(window.location.search).get("next"),
      u = async (m) => {
        m.preventDefault(), i({ type: "", text: "" }), n(!0);
        try {
          const x = btoa(JSON.stringify({ email: t })),
            { code: b, message: g } = await ee.get(
              `/auth/forgot?data=${x}${o ? `&next=${o}` : ""}`,
            );
          switch (b) {
            case "EMAIL_NOT_FOUND":
              i({ type: "error", text: "❌ Email not found." });
              break;
            case "RESET_LINK_SENT":
              i({ type: "success", text: "✅ Reset link sent to your email!" });
              break;
            default:
              i({
                type: "error",
                text: g || "⚠️ Something went wrong. Try again later.",
              });
          }
        } catch (x) {
          console.error(x),
            i({
              type: "error",
              text: "🚨 Network error: Unable to reach the server.",
            });
        } finally {
          n(!1);
        }
      };
    return e.jsx("div", {
      className:
        "relative z-10 w-screen h-[80vh] flex items-center justify-center px-4",
      children: e.jsx("div", {
        className:
          "w-full max-w-md backdrop-blur-2xl bg-white/5 border border-cyan-400/30 rounded-3xl shadow-2xl p-8",
        style: {
          boxShadow:
            "0 50px 100px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255,255,255,0.1)",
        },
        children: e.jsxs("form", {
          className: "space-y-6",
          onSubmit: u,
          children: [
            e.jsx("h2", {
              className: "text-center text-2xl font-bold text-cyan-300 mb-2",
              children: "Forgot Password",
            }),
            e.jsx("p", {
              className: "text-center text-sm text-gray-400 mb-4",
              children:
                "Enter your registered email address and we’ll send you a reset link.",
            }),
            e.jsxs("div", {
              className: "relative",
              children: [
                e.jsx(ot, {
                  className:
                    "absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400 w-5 h-5",
                }),
                e.jsx("input", {
                  type: "email",
                  id: "email",
                  required: !0,
                  value: t,
                  onChange: (m) => r(m.target.value.trim()),
                  className:
                    "peer w-full p-3 bg-black/30 border rounded-xl text-white placeholder-transparent pl-12 border-cyan-400/40 focus:border-cyan-300 focus:ring-4 focus:ring-cyan-500/30 focus:outline-none transition",
                  placeholder: "Email address",
                }),
                e.jsx("label", {
                  htmlFor: "email",
                  className: `absolute left-12 text-sm transition-all duration-200 pointer-events-none ${t ? "top-0 -translate-y-full text-xs text-cyan-300" : "top-1/2 -translate-y-1/2 text-gray-400 peer-focus:top-0 peer-focus:-translate-y-full peer-focus:text-xs peer-focus:text-cyan-300"}`,
                  children: "Email address",
                }),
              ],
            }),
            a.text &&
              e.jsx("div", {
                className: `p-3 text-sm border rounded-xl ${a.type === "success" ? "text-green-400 bg-green-900/20 border-green-500/30 animate-bounce" : "text-red-400 bg-red-900/20 border-red-500/30 animate-pulse"}`,
                children: a.text,
              }),
            e.jsxs("button", {
              type: "submit",
              disabled: s,
              className: `w-full p-3 font-bold rounded-xl text-white shadow-xl transition-all duration-300 relative overflow-hidden group ${s ? "bg-gradient-to-r from-gray-500 to-gray-700 cursor-wait" : "bg-gradient-to-r from-cyan-500 to-indigo-600 hover:scale-[1.02] hover:shadow-2xl"}`,
              children: [
                e.jsxs("span", {
                  className:
                    "relative z-10 flex justify-center items-center gap-2",
                  children: [
                    s
                      ? e.jsx("span", {
                          className:
                            "animate-spin border-2 border-t-transparent border-white w-5 h-5 rounded-full",
                        })
                      : e.jsx(Ue, { className: "w-5 h-5" }),
                    s ? "Sending..." : "SEND RESET LINK",
                  ],
                }),
                e.jsx("span", {
                  className:
                    "absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-all duration-700 group-hover:left-[100%]",
                }),
              ],
            }),
            e.jsxs("button", {
              type: "button",
              onClick: () => d(`/login${o ? `?next=${o}` : ""}`),
              className:
                "w-full flex items-center justify-center gap-2 p-3 border border-indigo-400/40 rounded-xl bg-black/30 text-sm text-gray-300 font-semibold transition hover:bg-indigo-400/10 hover:border-indigo-400 hover:scale-[1.02] hover:shadow-lg",
              children: [
                e.jsx(je, { className: "w-4 h-4 text-indigo-300" }),
                "Back to Login",
              ],
            }),
          ],
        }),
      }),
    });
  },
  As = () => {
    const t = V();
    return e.jsxs("div", {
      className:
        "relative z-10 w-screen h-[80vh] flex items-center justify-center px-4",
      children: [
        e.jsx("div", {
          className:
            "absolute w-[450px] h-[450px] bg-cyan-500/20 blur-3xl rounded-full -top-20 -left-20 animate-pulse",
        }),
        e.jsx("div", {
          className:
            "absolute w-[400px] h-[400px] bg-indigo-500/20 blur-3xl rounded-full -bottom-20 -right-20 animate-pulse",
        }),
        e.jsxs("div", {
          className:
            "relative z-10 text-center px-8 py-10 max-w-md w-full bg-white/5 border border-cyan-400/30 backdrop-blur-2xl rounded-3xl shadow-2xl animate-fadeIn",
          children: [
            e.jsx("h1", {
              className:
                "text-[6rem] sm:text-[8rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-cyan-400 leading-none mb-4 animate-glow",
              children: "404",
            }),
            e.jsx("h2", {
              className: "text-2xl font-bold text-cyan-300 mb-2",
              children: "Page Not Found",
            }),
            e.jsx("p", {
              className: "text-gray-400 text-sm mb-8",
              children:
                "Oops! The page you’re looking for doesn’t exist or has been moved.",
            }),
            e.jsxs("div", {
              className: "flex flex-col sm:flex-row gap-3 justify-center",
              children: [
                e.jsxs("button", {
                  onClick: () => t("/"),
                  className:
                    "flex items-center justify-center gap-2 w-full sm:w-auto p-3 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:scale-[1.03] hover:shadow-xl transition-all duration-300 font-semibold",
                  children: [e.jsx(Oe, { className: "w-5 h-5" }), "Go Home"],
                }),
                e.jsxs("button", {
                  onClick: () => t(-1),
                  className:
                    "flex items-center justify-center gap-2 w-full sm:w-auto p-3 px-6 rounded-xl border border-cyan-400/40 bg-white/10 hover:bg-white/20 transition-all duration-300 font-semibold",
                  children: [e.jsx(je, { className: "w-5 h-5" }), "Go Back"],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Rs = () =>
    e.jsxs("div", {
      className:
        "relative w-72 h-72 sm:w-96 sm:h-96 bg-white/10 rounded-3xl backdrop-blur-md border border-white/10 overflow-hidden",
      children: [
        e.jsx("div", {
          className:
            "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer",
        }),
        e.jsxs("div", {
          className:
            "flex flex-col items-center justify-center h-full text-gray-400",
          children: [
            e.jsx("div", {
              className:
                "w-16 h-16 rounded-full bg-white/10 mb-6 animate-pulse",
            }),
            e.jsx("div", {
              className: "w-48 h-5 rounded bg-white/10 mb-3 animate-pulse",
            }),
            e.jsx("div", {
              className: "w-32 h-4 rounded bg-white/10 animate-pulse",
            }),
          ],
        }),
      ],
    }),
  Ls = () => {
    const [t, r] = l.useState("Initializing Google login..."),
      [s, n] = l.useState(!0),
      [a, i] = l.useState(null),
      [d, c] = l.useState("text-gray-300"),
      o = V(),
      u = new URLSearchParams(window.location.search),
      m = u.get("next");
    return (
      l.useEffect(() => {
        const x = u.get("code"),
          b =
            "818711819823-segq27qkuatd2d033nethk4ldd8hjp3t.apps.googleusercontent.com",
          g = `${window.location.origin}/oauth/google`;
        if (x)
          i(x),
            r("🔄 Verifying Google login..."),
            n(!0),
            (async () => {
              try {
                const p = btoa(JSON.stringify({ code: x })),
                  { code: y, message: v } = await ee.get(
                    `/auth/oauth/google?data=${p}`,
                  );
                y === "OAUTH_SUCCESS"
                  ? (r("✅ Login successful! Redirecting..."),
                    c("text-green-400"),
                    setTimeout(
                      () =>
                        (window.location.href =
                          m || "https://dashboard.ajayos.in/"),
                      1200,
                    ))
                  : (r(v || "❌ Verification failed. Please try again."),
                    c("text-red-400"));
              } catch (p) {
                console.error(p),
                  r("🚨 Server error while verifying your account."),
                  c("text-red-400");
              } finally {
                n(!1);
              }
            })();
        else {
          const p = new URL("https://accounts.google.com/o/oauth2/v2/auth");
          p.searchParams.append("client_id", b),
            p.searchParams.append("redirect_uri", g),
            p.searchParams.append("response_type", "code"),
            p.searchParams.append("scope", "profile email"),
            p.searchParams.append("access_type", "offline"),
            p.searchParams.append("prompt", "consent"),
            m && p.searchParams.append("state", m),
            r("Opening Google login..."),
            n(!0),
            (window.location.href = p.toString());
        }
      }, [m, u]),
      e.jsx("div", {
        className:
          "relative z-10 w-screen h-[80vh] flex items-center justify-center px-4",
        children: e.jsx("div", {
          className:
            "w-full max-w-md backdrop-blur-2xl bg-white/5 border border-cyan-400/30 rounded-3xl shadow-2xl p-8",
          style: {
            boxShadow:
              "0 50px 100px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255,255,255,0.1)",
          },
          children: e.jsxs("div", {
            className: "flex flex-col items-center justify-center space-y-6",
            children: [
              e.jsx(_e, { className: "w-12 h-12 text-red-400" }),
              e.jsx("h2", {
                className: "text-xl font-semibold tracking-wide",
                children: "Google Login",
              }),
              e.jsx("p", {
                className: `text-sm text-center ${d}`,
                children: t,
              }),
              a &&
                e.jsxs("div", {
                  className:
                    "text-xs text-gray-400 break-all border border-cyan-400/20 rounded-md p-2 w-full mt-2 bg-black/20",
                  children: [e.jsx("strong", { children: "Code:" }), " ", a],
                }),
              s &&
                e.jsx("div", {
                  className:
                    "w-10 h-10 border-4 border-t-transparent border-cyan-400 rounded-full animate-spin mt-4",
                }),
              !s &&
                e.jsx("button", {
                  onClick: () => o("/login"),
                  className:
                    "mt-4 px-5 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 transition text-white text-sm",
                  children: "Back to Login",
                }),
            ],
          }),
        }),
      })
    );
  },
  Ts = () => {
    const [t, r] = l.useState("Initializing GitHub login..."),
      [s, n] = l.useState(!0),
      [a, i] = l.useState(null),
      [d, c] = l.useState("text-gray-300"),
      o = V(),
      u = new URLSearchParams(window.location.search),
      m = u.get("next");
    return (
      l.useEffect(() => {
        const x = u.get("code"),
          b = "Ov23lizrjD3wtrFFibTm",
          g = `${window.location.origin}/oauth/github`;
        if (x)
          i(x),
            r("🔄 Verifying GitHub login..."),
            n(!0),
            (async () => {
              try {
                const p = btoa(JSON.stringify({ code: x })),
                  { code: y, message: v } = await ee.get(
                    `/auth/oauth/github?data=${p}`,
                  );
                y === "OAUTH_SUCCESS"
                  ? (r("✅ Login successful! Redirecting..."),
                    c("text-green-400"),
                    setTimeout(
                      () =>
                        (window.location.href =
                          m || "https://dashboard.ajayos.in/"),
                      1200,
                    ))
                  : (r(v || "❌ Verification failed. Please try again."),
                    c("text-red-400"));
              } catch (p) {
                console.error(p),
                  r("🚨 Server error while verifying your account."),
                  c("text-red-400");
              } finally {
                n(!1);
              }
            })();
        else {
          const p = new URL("https://github.com/login/oauth/authorize");
          p.searchParams.append("client_id", b),
            p.searchParams.append("redirect_uri", g),
            p.searchParams.append("scope", "read:user user:email"),
            m && p.searchParams.append("state", m),
            r("Opening GitHub login..."),
            n(!0),
            (window.location.href = p.toString());
        }
      }, [m, u]),
      e.jsx("div", {
        className:
          "relative z-10 w-screen h-[80vh] flex items-center justify-center px-4",
        children: e.jsx("div", {
          className:
            "w-full max-w-md backdrop-blur-2xl bg-white/5 border border-gray-500/30 rounded-3xl shadow-2xl p-8",
          style: {
            boxShadow:
              "0 50px 100px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255,255,255,0.1)",
          },
          children: e.jsxs("div", {
            className: "flex flex-col items-center justify-center space-y-6",
            children: [
              e.jsx(Ge, { className: "w-12 h-12 text-white" }),
              e.jsx("h2", {
                className: "text-xl font-semibold tracking-wide",
                children: "GitHub Login",
              }),
              e.jsx("p", {
                className: `text-sm text-center ${d}`,
                children: t,
              }),
              a &&
                e.jsxs("div", {
                  className:
                    "text-xs text-gray-400 break-all border border-gray-500/20 rounded-md p-2 w-full mt-2 bg-black/20",
                  children: [e.jsx("strong", { children: "Code:" }), " ", a],
                }),
              s &&
                e.jsx("div", {
                  className:
                    "w-10 h-10 border-4 border-t-transparent border-gray-400 rounded-full animate-spin mt-4",
                }),
              !s &&
                e.jsx("button", {
                  onClick: () => o("/login"),
                  className:
                    "mt-4 px-5 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition text-white text-sm",
                  children: "Back to Login",
                }),
            ],
          }),
        }),
      })
    );
  },
  Is = () => {
    const [t, r] = l.useState("🔐 Ready for system authentication..."),
      [s, n] = l.useState(!0),
      [a, i] = l.useState("text-gray-300"),
      d = V(),
      o = new URLSearchParams(window.location.search).get("next");
    return (
      l.useEffect(() => {
        (async () => {
          var u;
          try {
            r("🔑 Initializing system passkey authentication..."), n(!0);
            const { code: m, message: x } = await ee.get(
              "/auth/passkey/challenge",
            );
            if (m !== "SUCCESS") {
              r(x || "❌ Could not start passkey authentication."),
                i("text-red-400"),
                n(!1);
              return;
            }
            const b = x;
            if (!b || !b.challenge) {
              r("❌ Could not start passkey authentication."),
                i("text-red-400"),
                n(!1);
              return;
            }
            const g = (h) => Uint8Array.from(atob(h), (j) => j.charCodeAt(0)),
              p = {
                challenge: g(b.challenge),
                allowCredentials:
                  ((u = b.allowCredentials) == null
                    ? void 0
                    : u.map((h) => Z(H({}, h), { id: g(h.id) }))) || [],
                timeout: 6e4,
                userVerification: "required",
                rpId: window.location.hostname,
              },
              y = await navigator.credentials.get({ publicKey: p });
            r("🔄 Verifying with secure enclave..."), n(!0);
            const v = {
                id: y.id,
                type: y.type,
                rawId: btoa(String.fromCharCode(...new Uint8Array(y.rawId))),
                response: {
                  clientDataJSON: btoa(
                    String.fromCharCode(
                      ...new Uint8Array(y.response.clientDataJSON),
                    ),
                  ),
                  authenticatorData: btoa(
                    String.fromCharCode(
                      ...new Uint8Array(y.response.authenticatorData),
                    ),
                  ),
                  signature: btoa(
                    String.fromCharCode(
                      ...new Uint8Array(y.response.signature),
                    ),
                  ),
                  userHandle: y.response.userHandle
                    ? btoa(
                        String.fromCharCode(
                          ...new Uint8Array(y.response.userHandle),
                        ),
                      )
                    : null,
                },
              },
              w = btoa(JSON.stringify(v)),
              { code: f, message: N } = await ee.post(
                `/auth/passkey/verify?data=${w}`,
              );
            f === "PASSKEY_SUCCESS"
              ? (r("✅ Verified! Welcome back."),
                i("text-green-400"),
                setTimeout(() => d(o || "/dashboard"), 1200))
              : (r(N || "❌ Authentication failed."), i("text-red-400"));
          } catch (m) {
            console.error(m),
              r("🚨 Passkey authentication cancelled or failed."),
              i("text-red-400");
          } finally {
            n(!1);
          }
        })();
      }, []),
      e.jsx("div", {
        className:
          "relative z-10 w-screen h-[80vh] flex items-center justify-center px-4",
        children: e.jsx("div", {
          className:
            "w-full max-w-md backdrop-blur-2xl bg-white/5 border border-yellow-400/30 rounded-3xl shadow-2xl p-8",
          style: {
            boxShadow:
              "0 50px 100px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255,255,255,0.1)",
          },
          children: e.jsxs("div", {
            className: "flex flex-col items-center justify-center space-y-6",
            children: [
              e.jsx(nt, { className: "w-12 h-12 text-yellow-400" }),
              e.jsx("h2", {
                className: "text-xl font-semibold tracking-wide",
                children: "System Passkey",
              }),
              e.jsx("p", {
                className: `text-sm text-center ${a}`,
                children: t,
              }),
              s &&
                e.jsx("div", {
                  className:
                    "w-10 h-10 border-4 border-t-transparent border-yellow-400 rounded-full animate-spin mt-4",
                }),
              !s &&
                e.jsx("button", {
                  onClick: () => d("/login"),
                  className:
                    "mt-4 px-5 py-2 rounded-lg bg-yellow-600 hover:bg-yellow-500 transition text-white text-sm",
                  children: "Back to Login",
                }),
            ],
          }),
        }),
      })
    );
  },
  Ds = () => {
    const [t] = Et(),
      r = t.get("next"),
      s = V(),
      [n, a] = l.useState(""),
      [i, d] = l.useState(!1),
      [c, o] = l.useState({ type: "", text: "" }),
      u = (b) => /^\d{10}$/.test(b),
      m = async (b) => {
        if ((b.preventDefault(), o({ type: "", text: "" }), !u(n))) {
          o({
            type: "error",
            text: "📞 Please enter a valid 10-digit phone number.",
          });
          return;
        }
        d(!0);
        try {
          const g = { phone: `+91${n}` },
            y = `/auth/forgot?data=${btoa(JSON.stringify(g))}${r ? `&next=${r}` : ""}`,
            { code: v, message: w } = await ee.get(y);
          switch (v) {
            case "PHONE_NOT_FOUND":
              o({ type: "error", text: "❌ Phone number not found." });
              break;
            case "RESET_LINK_SENT":
              o({ type: "success", text: "✅ Reset link sent via SMS!" });
              break;
            default:
              o({
                type: "error",
                text: w || "⚠️ Something went wrong. Try again later.",
              });
          }
        } catch (g) {
          console.error("Forgot password error:", g),
            o({
              type: "error",
              text: "🚨 Network error: Unable to reach the server.",
            });
        } finally {
          d(!1);
        }
      },
      x = (b) => {
        const g = b.target.value.replace(/\D/g, "").slice(0, 10);
        a(g), c.type === "error" && u(g) && o({ type: "", text: "" });
      };
    return e.jsx("div", {
      className:
        "relative z-10 w-screen h-[80vh] flex items-center justify-center px-4",
      children: e.jsx("div", {
        className:
          "w-full max-w-md backdrop-blur-2xl bg-white/5 border border-cyan-400/30 rounded-3xl shadow-2xl p-8",
        style: {
          boxShadow:
            "0 50px 100px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255,255,255,0.1)",
        },
        children: e.jsxs("form", {
          className: "space-y-6",
          onSubmit: m,
          children: [
            e.jsx("h2", {
              className: "text-center text-2xl font-bold text-cyan-300 mb-2",
              children: "PRUDENT SSO",
            }),
            e.jsx("p", {
              className: "text-center text-sm text-gray-400 mb-4",
              children: "Enter your registered phone number.",
            }),
            e.jsxs("div", {
              className: "relative",
              children: [
                e.jsx("label", {
                  htmlFor: "phone",
                  className: "sr-only",
                  children: "Phone Number",
                }),
                e.jsxs("div", {
                  className:
                    "flex items-center bg-black/30 border rounded-xl border-cyan-400/40 focus-within:border-cyan-300 focus-within:ring-4 focus-within:ring-cyan-500/30 transition",
                  children: [
                    e.jsx(Pt, {
                      className: "absolute left-4 text-cyan-400 w-5 h-5",
                    }),
                    e.jsxs("div", {
                      className: "flex items-center pl-10 w-full",
                      children: [
                        e.jsx("span", {
                          className:
                            "text-cyan-300 font-semibold pr-2 select-none",
                          children: "+91",
                        }),
                        e.jsx("input", {
                          id: "phone",
                          type: "tel",
                          inputMode: "numeric",
                          pattern: "[0-9]{10}",
                          maxLength: "10",
                          required: !0,
                          value: n,
                          onChange: x,
                          className:
                            "w-full bg-transparent text-white p-3 placeholder-transparent focus:outline-none",
                          placeholder: "10-digit number",
                          "aria-describedby": c.text ? "phone-error" : void 0,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            c.text &&
              e.jsx("div", {
                id: "phone-error",
                className: `p-3 text-sm border rounded-xl ${c.type === "success" ? "text-green-400 bg-green-900/20 border-green-500/30 animate-bounce" : "text-red-400 bg-red-900/20 border-red-500/30 animate-pulse"}`,
                role: "alert",
                "aria-live": "polite",
                children: c.text,
              }),
            e.jsxs("button", {
              type: "submit",
              disabled: i || !u(n),
              className: `w-full p-3 font-bold rounded-xl text-white shadow-xl transition-all duration-300 relative overflow-hidden group ${i || !u(n) ? "bg-gradient-to-r from-gray-500 to-gray-700 cursor-not-allowed" : "bg-gradient-to-r from-cyan-500 to-indigo-600 hover:scale-[1.02] hover:shadow-2xl"}`,
              children: [
                e.jsx("span", {
                  className:
                    "relative z-10 flex justify-center items-center gap-2",
                  children: i
                    ? e.jsxs(e.Fragment, {
                        children: [
                          e.jsx(At, { className: "w-5 h-5 animate-spin" }),
                          "Sending...",
                        ],
                      })
                    : e.jsxs(e.Fragment, {
                        children: [
                          e.jsx(Rt, { className: "w-5 h-5" }),
                          "SEND OTP",
                        ],
                      }),
                }),
                e.jsx("span", {
                  className:
                    "absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-all duration-700 group-hover:left-[100%]",
                }),
              ],
            }),
            e.jsxs("button", {
              type: "button",
              onClick: () => s(`/login${r ? `?next=${r}` : ""}`),
              className:
                "w-full flex items-center justify-center gap-2 p-3 border border-indigo-400/40 rounded-xl bg-black/30 text-sm text-gray-300 font-semibold transition hover:bg-indigo-400/10 hover:border-indigo-400 hover:scale-[1.02] hover:shadow-lg",
              children: [
                e.jsx(Lt, { className: "w-4 h-4 text-indigo-300" }),
                "Back to Login",
              ],
            }),
          ],
        }),
      }),
    });
  },
  zs = () => {
    const t = V(),
      [r, s] = l.useState(["", "", "", "", "", ""]),
      [n, a] = l.useState(!1),
      [i, d] = l.useState(0),
      [c, o] = l.useState({ type: "", text: "" }),
      u = l.useRef([]),
      m = l.useRef(null),
      x = "9876543210",
      b = "Ajay O S";
    l.useEffect(() => {
      var h;
      (h = u.current[0]) == null || h.focus();
    }, []),
      l.useEffect(
        () => (
          i > 0 &&
            (m.current = setTimeout(() => {
              d(i - 1);
            }, 1e3)),
          () => clearTimeout(m.current)
        ),
        [i],
      );
    const g = (h, j) => {
        const S = j.replace(/\D/g, "").slice(0, 1),
          k = [...r];
        (k[h] = S),
          s(k),
          c.type === "error" && S && o({ type: "", text: "" }),
          S && h < 5 && u.current[h + 1].focus();
      },
      p = (h, j) => {
        if (j.key === "Backspace") {
          if (!r[h] && h > 0) {
            const S = [...r];
            (S[h - 1] = ""), s(S), u.current[h - 1].focus();
          }
        } else
          j.key === "ArrowLeft" && h > 0
            ? u.current[h - 1].focus()
            : j.key === "ArrowRight" && h < 5 && u.current[h + 1].focus();
      },
      y = (h) => {
        h.preventDefault();
        const S = h.clipboardData
          .getData("text")
          .replace(/\D/g, "")
          .slice(0, 6)
          .padEnd(6, "")
          .split("");
        s(S), S.filter((k) => k !== "").length === 6 && u.current[5].focus();
      },
      v = r.every((h) => h !== ""),
      w = async () => {
        if ((o({ type: "", text: "" }), !v)) {
          o({ type: "error", text: "Please enter the complete 6-digit OTP" }),
            u.current[0].focus();
          return;
        }
        a(!0);
        try {
          await new Promise((h) => setTimeout(h, 1500)),
            o({
              type: "success",
              text: "OTP verified successfully! Redirecting...",
            }),
            setTimeout(() => {
              alert("Redirecting to reset password...");
            }, 1e3);
        } catch (h) {
          console.error("OTP verification error:", h),
            o({
              type: "error",
              text: "Network error. Please check your connection.",
            });
        } finally {
          a(!1);
        }
      },
      f = (h) =>
        h
          .split(" ")
          .map((j) => j[0])
          .join("")
          .toUpperCase()
          .slice(0, 2),
      N = (h) => {
        const j = [
            "from-blue-500 to-blue-600",
            "from-purple-500 to-purple-600",
            "from-pink-500 to-pink-600",
            "from-green-500 to-green-600",
            "from-orange-500 to-orange-600",
            "from-indigo-500 to-indigo-600",
            "from-cyan-500 to-cyan-600",
            "from-red-500 to-red-600",
          ],
          S = h.length % j.length;
        return j[S];
      };
    return e.jsx("div", {
      className:
        "relative z-10 w-screen h-[80vh] flex items-center justify-center px-4",
      children: e.jsxs("div", {
        className:
          "backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-cyan-400/30 rounded-3xl shadow-2xl p-8 space-y-6",
        style: {
          boxShadow:
            "0 25px 50px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
        },
        children: [
          e.jsxs("div", {
            className: "text-center space-y-4",
            children: [
              e.jsx("div", {
                className: `w-20 h-20 mx-auto bg-gradient-to-br ${N(b)} rounded-full flex items-center justify-center border-2 border-white/20 shadow-lg`,
                children: e.jsx("span", {
                  className: "text-3xl font-bold text-white",
                  children: f(b),
                }),
              }),
              e.jsxs("div", {
                className:
                  "flex flex-col items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-xl p-3",
                children: [
                  e.jsx("h3", {
                    className: "text-xl font-semibold text-white",
                    children: b,
                  }),
                  e.jsxs("div", {
                    className:
                      "flex items-center justify-center gap-2 px-3 py-1",
                    children: [
                      e.jsx("svg", {
                        className: "w-4 h-4 text-cyan-400",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: e.jsx("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2",
                          d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                        }),
                      }),
                      e.jsxs("span", {
                        className: "text-sm font-mono text-gray-300",
                        children: ["+91 ", x.slice(0, 2), "****", x.slice(-2)],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx("div", {}),
            ],
          }),
          e.jsxs("div", {
            className: "space-y-6",
            children: [
              e.jsxs("div", {
                className: "space-y-3",
                children: [
                  e.jsx("label", {
                    className: "sr-only",
                    children: "Verification Code",
                  }),
                  e.jsx("div", {
                    className:
                      "flex justify-between gap-2 bg-black/40 border border-cyan-400/40 rounded-2xl focus-within:border-cyan-300 focus-within:ring-4 focus-within:ring-cyan-500/20 transition-all p-3",
                    onPaste: y,
                    children: r.map((h, j) =>
                      e.jsx(
                        "input",
                        {
                          ref: (S) => (u.current[j] = S),
                          type: "text",
                          inputMode: "numeric",
                          maxLength: "1",
                          value: h,
                          onChange: (S) => g(j, S.target.value),
                          onKeyDown: (S) => p(j, S),
                          className:
                            "w-12 h-14 bg-gradient-to-br from-white/10 to-white/5 text-center text-2xl font-bold text-white rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-400 transition hover:border-cyan-400/50",
                          "aria-label": `OTP digit ${j + 1}`,
                        },
                        j,
                      ),
                    ),
                  }),
                ],
              }),
              c.text &&
                e.jsxs("div", {
                  className: `p-4 text-sm border rounded-xl flex items-start gap-3 transition-all ${c.type === "success" ? "text-green-300 bg-green-900/20 border-green-500/30" : "text-red-300 bg-red-900/20 border-red-500/30"}`,
                  role: "alert",
                  "aria-live": "polite",
                  children: [
                    e.jsx("span", {
                      className: "flex-shrink-0 mt-0.5",
                      children:
                        c.type === "success"
                          ? e.jsx("svg", {
                              className: "w-5 h-5",
                              fill: "currentColor",
                              viewBox: "0 0 20 20",
                              children: e.jsx("path", {
                                fillRule: "evenodd",
                                d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                clipRule: "evenodd",
                              }),
                            })
                          : e.jsx("svg", {
                              className: "w-5 h-5",
                              fill: "currentColor",
                              viewBox: "0 0 20 20",
                              children: e.jsx("path", {
                                fillRule: "evenodd",
                                d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                                clipRule: "evenodd",
                              }),
                            }),
                    }),
                    e.jsx("span", { className: "flex-1", children: c.text }),
                  ],
                }),
              e.jsxs("button", {
                onClick: w,
                disabled: n || !v,
                className: `w-full py-3 px-4 font-bold rounded-xl text-white shadow-lg transition-all duration-300 relative overflow-hidden group ${n || !v ? "bg-gradient-to-r from-gray-500 to-gray-700 cursor-not-allowed opacity-50" : "bg-gradient-to-r from-cyan-500 to-indigo-600 hover:scale-[1.02] hover:shadow-xl active:scale-95"}`,
                children: [
                  e.jsx("span", {
                    className:
                      "relative z-10 flex justify-center items-center gap-2",
                    children: n
                      ? e.jsxs(e.Fragment, {
                          children: [
                            e.jsxs("svg", {
                              className: "w-5 h-5 animate-spin",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              children: [
                                e.jsx("circle", {
                                  className: "opacity-25",
                                  cx: "12",
                                  cy: "12",
                                  r: "10",
                                  stroke: "currentColor",
                                  strokeWidth: "4",
                                }),
                                e.jsx("path", {
                                  className: "opacity-75",
                                  fill: "currentColor",
                                  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                                }),
                              ],
                            }),
                            "Verifying...",
                          ],
                        })
                      : e.jsxs(e.Fragment, {
                          children: [
                            e.jsx("svg", {
                              className: "w-5 h-5",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              children: e.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M5 13l4 4L19 7",
                              }),
                            }),
                            "Verify OTP",
                          ],
                        }),
                  }),
                  e.jsx("span", {
                    className:
                      "absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-700 group-hover:left-[100%]",
                  }),
                ],
              }),
              e.jsxs("button", {
                onClick: () => t("/sso/prudent"),
                className:
                  "w-full flex items-center justify-center gap-2 py-3 px-4 border border-gray-500/40 rounded-xl bg-black/20 text-sm text-gray-300 font-semibold hover:bg-gray-500/10 hover:border-gray-400 hover:text-gray-200 transition-all",
                children: [
                  e.jsx("svg", {
                    className: "w-4 h-4",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: e.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M15 19l-7-7 7-7",
                    }),
                  }),
                  "Back to Login",
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  Le = [es, ts, ss, rs, as, ns],
  Te = {
    LOGIN: Ss,
    SIGNUP: Cs,
    CHECKMAIL: Ms,
    SETPASSWORD: Es,
    FORGOT: Ps,
    DEFAULT: As,
    LOADING: Rs,
    GOOGLE: Ls,
    GITHUB: Ts,
    PASSKEY: Is,
    PRUDENT: Ds,
    VERIFY_PRUDENT: zs,
  };
function he() {
  const [t, r] = l.useState(() => Math.floor(Math.random() * Le.length)),
    [s, n] = l.useState("LOADING"),
    a = Le[t],
    i = Te[s],
    d = (o) => {
      const u = o.split("/").filter(Boolean),
        m = (u[0] || "").toUpperCase(),
        x = (u[1] || "").toUpperCase();
      return m
        ? Te[m]
          ? m
          : ["OAUTH", "SSO"].includes(m) && Te[x]
            ? x
            : "DEFAULT"
        : "LOGIN";
    };
  l.useEffect(() => {
    n(d(window.location.pathname));
  }, []),
    l.useEffect(() => {
      const o = () => {
        n(d(window.location.pathname));
      };
      window.addEventListener("popstate", o);
      const u = window.history.pushState,
        m = window.history.replaceState;
      return (
        (window.history.pushState = function (...x) {
          u.apply(window.history, x), o();
        }),
        (window.history.replaceState = function (...x) {
          m.apply(window.history, x), o();
        }),
        () => {
          window.removeEventListener("popstate", o),
            (window.history.pushState = u),
            (window.history.replaceState = m);
        }
      );
    }, []);
  const c = () => {
    r((o) => (o + 1) % Le.length);
  };
  return e.jsx("div", {
    className: "relative w-screen h-screen overflow-hidden bg-black text-white",
    children: e.jsxs("div", {
      className:
        "relative w-screen h-screen overflow-hidden text-white animate-fade-in-slow",
      children: [
        e.jsx(
          "div",
          {
            className:
              "absolute inset-0 z-0 transition-opacity duration-700 ease-in-out opacity-100",
            children: e.jsx(a, {}),
          },
          t,
        ),
        e.jsxs("button", {
          onClick: c,
          className:
            "absolute top-5 right-6 z-20 px-4 py-2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-sm rounded-md border border-white/20 transition-all duration-200",
          children: [t + 1, " ✨"],
        }),
        e.jsx("div", {
          className: "absolute inset-0 flex items-center justify-center z-10",
          children: e.jsx("div", {
            className: "translate-y-7",
            children: e.jsx(i, {}),
          }),
        }),
        e.jsxs("footer", {
          className:
            "absolute bottom-3 w-full flex items-center justify-between px-6 text-xs text-gray-300 z-20",
          children: [
            e.jsxs("span", {
              children: [
                "© ",
                new Date().getFullYear(),
                " AOS All rights reserved.",
              ],
            }),
            e.jsxs("span", {
              children: [
                "Code by ",
                e.jsx("span", {
                  className: "font-semibold text-white",
                  children: "Ajay O S",
                }),
                e.jsx("span", { className: "text-pink-400", children: "♥" }),
              ],
            }),
          ],
        }),
        e.jsx("style", {
          children: `
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          .animate-shimmer {
            animation: shimmer 1.6s infinite linear;
            background-size: 200% 100%;
          }
          @keyframes fade-in {
            from { opacity: 0; transform: scale(0.98); }
            to { opacity: 1; transform: scale(1); }
          }
          .animate-fade-in {
            animation: fade-in 0.8s ease-out;
          }
          .animate-fade-in-slow {
            animation: fade-in 1.2s ease-out;
          }
        `,
        }),
      ],
    }),
  });
}
const rt = [
    { path: "/oauth/*", element: e.jsx(he, {}) },
    { path: "/sso/*", element: e.jsx(he, {}) },
    { path: "*", element: e.jsx(he, {}) },
  ],
  Os = [
    { path: "/oauth/*", element: e.jsx(he, {}) },
    { path: "*", element: e.jsx(he, {}) },
    { path: "/about", element: e.jsx("h1", { children: "About Page v1.0.0" }) },
  ];
function _s() {
  var t = B.get("appVersion");
  t = t.replace(/\./g, "_");
  const s = { "1_0_0": rt, "1_1_0": Os }[t] || rt;
  return Tt(s);
}
const Gs = () => {
    const [t, r] = l.useState(60),
      [s, n] = l.useState(1);
    return (
      l.useEffect(() => {
        const a = setInterval(() => {
          r((i) => (i > 0 ? i - 1 : 60)), n(Math.random() * 0.5 + 0.7);
        }, 1e3);
        return () => clearInterval(a);
      }, []),
      e.jsxs("div", {
        className:
          "fixed inset-0 w-screen h-screen overflow-hidden flex flex-col justify-center items-center bg-slate-950 text-white",
        children: [
          e.jsxs("div", {
            className: "absolute inset-0",
            children: [
              e.jsx("div", {
                className:
                  "absolute inset-0 bg-gradient-to-br from-slate-950 via-red-950/20 to-slate-950",
              }),
              e.jsx("div", {
                className:
                  "absolute inset-0 bg-gradient-to-r from-red-600/30 via-transparent to-orange-600/30",
                style: { opacity: s },
              }),
            ],
          }),
          e.jsxs("div", {
            className: "absolute inset-0 overflow-hidden pointer-events-none",
            children: [
              e.jsx("div", {
                className:
                  "absolute -top-40 -left-40 w-96 h-96 bg-red-500 rounded-full mix-blend-screen blur-3xl opacity-20 animate-float",
              }),
              e.jsx("div", {
                className:
                  "absolute top-1/4 -right-32 w-80 h-80 bg-orange-500 rounded-full mix-blend-screen blur-3xl opacity-15 animate-float-delayed",
              }),
              e.jsx("div", {
                className:
                  "absolute -bottom-32 left-1/3 w-96 h-96 bg-red-600 rounded-full mix-blend-screen blur-3xl opacity-20 animate-float-delayed-2",
              }),
            ],
          }),
          e.jsxs("div", {
            className:
              "relative z-50 w-full max-w-xl px-6 py-12 flex flex-col items-center justify-center",
            children: [
              e.jsxs("div", {
                className: "mb-8 text-center animate-in fade-in duration-700",
                children: [
                  e.jsx("div", {
                    className: "text-7xl mb-4 animate-pulse-custom",
                    children: "🚫",
                  }),
                  e.jsx("h1", {
                    className:
                      "text-5xl font-black mb-2 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent",
                    children: "ACCESS DENIED",
                  }),
                  e.jsx("p", {
                    className:
                      "text-red-300 text-sm font-mono tracking-widest uppercase",
                    children: "Developer Tools Detected",
                  }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "flex gap-3 justify-center mb-8 flex-wrap animate-in slide-in-from-bottom duration-700 delay-100",
                children: [
                  e.jsx("div", {
                    className:
                      "px-4 py-2 bg-red-500/20 border border-red-500/50 rounded-full backdrop-blur",
                    children: e.jsx("span", {
                      className: "text-red-300 font-bold text-sm",
                      children: "⚠️ SECURITY ALERT",
                    }),
                  }),
                  e.jsx("div", {
                    className:
                      "px-4 py-2 bg-orange-500/20 border border-orange-500/50 rounded-full backdrop-blur",
                    children: e.jsx("span", {
                      className: "text-orange-300 font-bold text-sm",
                      children: "🔒 BLOCKED",
                    }),
                  }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "w-full mb-8 p-6 bg-gradient-to-br from-red-950/40 to-orange-950/30 border border-red-500/30 rounded-xl backdrop-blur-lg shadow-2xl animate-in zoom-in duration-700 delay-200",
                children: [
                  e.jsx("p", {
                    className: "text-center text-gray-200 leading-relaxed mb-3",
                    children:
                      "Inspector tools have been detected on this protected page. This action is not permitted.",
                  }),
                  e.jsxs("div", {
                    className:
                      "flex items-center justify-center gap-2 text-sm text-red-400 font-mono",
                    children: [
                      e.jsx("span", {
                        className:
                          "inline-block w-2 h-2 bg-red-500 rounded-full animate-pulse",
                      }),
                      "Closing in:",
                      " ",
                      e.jsxs("span", {
                        className: "font-bold text-lg text-red-300",
                        children: [t, "s"],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 animate-in slide-in-from-bottom duration-700 delay-300",
                children: [
                  e.jsxs("button", {
                    onClick: () => window.location.reload(),
                    className:
                      "group relative px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl overflow-hidden",
                    children: [
                      e.jsx("div", {
                        className:
                          "absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                      }),
                      e.jsxs("span", {
                        className:
                          "relative flex items-center justify-center gap-2",
                        children: [
                          e.jsx("span", {
                            className: "text-xl group-hover:animate-spin",
                            style: { animationDuration: "0.8s" },
                            children: "🔄",
                          }),
                          "Reload",
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("a", {
                    href: "https://terms.ajayos.in",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "group relative px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl overflow-hidden",
                    children: [
                      e.jsx("div", {
                        className:
                          "absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                      }),
                      e.jsxs("span", {
                        className:
                          "relative flex items-center justify-center gap-2",
                        children: [
                          e.jsx("span", {
                            className: "text-xl",
                            children: "📋",
                          }),
                          "Terms & Conditions",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "w-full space-y-2 text-center text-xs text-gray-400 animate-in fade-in duration-700 delay-500",
                children: [
                  e.jsxs("p", {
                    className: "flex items-center justify-center gap-2",
                    children: [
                      e.jsx("span", { children: "💡" }),
                      e.jsxs("span", {
                        children: [
                          "Press",
                          " ",
                          e.jsx("span", {
                            className: "font-mono font-bold text-gray-300",
                            children: "F12",
                          }),
                          " or",
                          " ",
                          e.jsx("span", {
                            className: "font-mono font-bold text-gray-300",
                            children: "Ctrl+Shift+I",
                          }),
                          " ",
                          "to close Developer Tools",
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "pt-2 border-t border-gray-700/50",
                    children: [
                      e.jsxs("p", {
                        className: "text-gray-500",
                        children: [
                          "Contact:",
                          " ",
                          e.jsx("span", {
                            className: "text-gray-400 font-mono",
                            children: "support@ajayos.in",
                          }),
                        ],
                      }),
                      e.jsx("p", {
                        className: "text-gray-600",
                        children: "© 2025 ajayos.in | Encrypted Connection",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsx("style", {
            children: `
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-30px) translateX(20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(30px) translateX(-20px); }
        }
        @keyframes float-delayed-2 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(-30px); }
        }
        @keyframes pulse-custom {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
        .animate-float-delayed-2 { animation: float-delayed-2 8s ease-in-out infinite; }
        .animate-pulse-custom { animation: pulse-custom 3s ease-in-out infinite; }
      `,
          }),
        ],
      })
    );
  },
  at = ({ children: t }) => {
    const [r, s] = l.useState(0);
    return (
      l.useEffect(
        () => G.on(U.API_LOADING, ({ inFlight: a }) => s(a || 0)),
        [],
      ),
      e.jsxs("div", {
        className: "relative",
        children: [
          t,
          r > 0 &&
            e.jsxs("div", {
              className:
                "fixed inset-0 z-50 flex flex-col items-center justify-center",
              children: [
                e.jsx("div", {
                  className: "absolute inset-0 bg-black/40 backdrop-blur-md",
                }),
                e.jsx("div", {
                  className:
                    "absolute inset-0 bg-gradient-to-br from-slate-900/10 via-purple-900/10 to-slate-900/10",
                }),
                e.jsx("div", {
                  className:
                    "absolute top-1/3 left-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob",
                }),
                e.jsx("div", {
                  className:
                    "absolute bottom-1/3 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob",
                  style: { animationDelay: "2s" },
                }),
                e.jsx("div", {
                  className:
                    "absolute top-1/4 right-1/3 w-80 h-80 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob",
                  style: { animationDelay: "4s" },
                }),
                e.jsxs("div", {
                  className:
                    "relative z-10 flex flex-col items-center gap-8 p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl",
                  children: [
                    e.jsxs("div", {
                      className: "relative w-28 h-28",
                      children: [
                        e.jsx("div", {
                          className:
                            "absolute inset-0 rounded-full border-3 border-transparent border-t-purple-400 border-r-pink-400 animate-spin",
                        }),
                        e.jsx("div", {
                          className:
                            "absolute inset-3 rounded-full border-2 border-transparent border-b-pink-400 border-l-purple-400 animate-spin",
                          style: {
                            animationDirection: "reverse",
                            animationDuration: "1.5s",
                          },
                        }),
                        e.jsx("div", {
                          className:
                            "absolute inset-6 rounded-full border-2 border-transparent border-t-blue-300 border-r-purple-300 animate-spin",
                          style: { animationDuration: "2s" },
                        }),
                        e.jsx("div", {
                          className:
                            "absolute inset-0 flex items-center justify-center",
                          children: e.jsx(ze, {
                            className:
                              "w-10 h-10 text-purple-300 drop-shadow-lg",
                            fill: "currentColor",
                          }),
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "text-center space-y-2",
                      children: [
                        e.jsx("h2", {
                          className:
                            "text-lg font-semibold text-white drop-shadow-lg",
                          children: "Processing",
                        }),
                        e.jsxs("div", {
                          className: "flex items-center justify-center gap-2",
                          children: [
                            e.jsx("span", {
                              className: "text-sm text-purple-200",
                              children: "Running API",
                            }),
                            e.jsxs("span", {
                              className: "inline-flex gap-1.5",
                              children: [
                                e.jsx("span", {
                                  className:
                                    "w-2 h-2 bg-purple-400 rounded-full animate-bounce",
                                  style: { animationDelay: "0s" },
                                }),
                                e.jsx("span", {
                                  className:
                                    "w-2 h-2 bg-pink-400 rounded-full animate-bounce",
                                  style: { animationDelay: "0.15s" },
                                }),
                                e.jsx("span", {
                                  className:
                                    "w-2 h-2 bg-blue-400 rounded-full animate-bounce",
                                  style: { animationDelay: "0.3s" },
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsx("div", {
                  className:
                    "absolute bottom-12 z-10 w-48 h-1 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm border border-white/20",
                  children: e.jsx("div", {
                    className:
                      "h-full bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-pulse",
                    style: { animation: "shimmer 2s infinite" },
                  }),
                }),
              ],
            }),
          e.jsx("style", {
            children: `
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(40px, -60px) scale(1.1); }
          66% { transform: translate(-30px, 30px) scale(0.9); }
        }
        @keyframes shimmer {
          0% { width: 0%; }
          50% { width: 100%; }
          100% { width: 0%; }
        }
        .animate-blob { animation: blob 8s infinite; }
      `,
          }),
        ],
      })
    );
  };
function Us({ children: t }) {
  var y, v;
  const [r, s] = l.useState(!1),
    [n, a] = l.useState(!1),
    [i, d] = l.useState("idle"),
    [c, o] = l.useState(0),
    [u, m] = l.useState(null),
    x = (w, f) => {
      const N = w.split(".").map(Number),
        h = f.split(".").map(Number);
      for (let j = 0; j < Math.max(N.length, h.length); j++) {
        const S = N[j] || 0,
          k = h[j] || 0;
        if (S > k) return 1;
        if (S < k) return -1;
      }
      return 0;
    };
  l.useEffect(() => {
    m(P.appVersion);
    const f = setTimeout(() => {
      const N = B.get("appVersion") || P.appVersion,
        h = B.get("skippedVersion"),
        j = B.get("lastSkipDate"),
        S = Date.now(),
        k = 1440 * 60 * 1e3;
      if (u && x(u, N) > 0) {
        const M = !h || h !== u || !j || S - j > 1 * k;
        a(M);
      }
      B.get("appVersion") || B.set("appVersion", P.appVersion);
    }, 500);
    return () => clearTimeout(f);
  }, [u]);
  const b = () => {
      B.set("skippedVersion", u),
        B.set("lastSkipDate", Date.now()),
        setTimeout(() => {
          a(!1);
        }, 300);
    },
    g = () => {
      d("checking"),
        o(0),
        setTimeout(() => {
          d("downloading"), o(15);
        }, 1200);
      const w = setInterval(() => {
        o((f) => (f >= 85 ? (clearInterval(w), 85) : f + Math.random() * 20));
      }, 300);
      setTimeout(() => {
        clearInterval(w), d("installing"), o(90);
      }, 3e3),
        setTimeout(() => {
          o(100), d("complete");
        }, 4500),
        setTimeout(() => {
          window.location.reload();
        }, 5500),
        B.remove("skippedVersion"),
        B.remove("lastSkipDate"),
        B.set("appVersion", u);
    };
  if (!n || !u) return t;
  const p = B.get("appVersion") || P.appVersion;
  return e.jsxs("div", {
    className:
      "w-full min-h-screen bg-gradient-to-br from-slate-950 via-purple-900 to-slate-950 flex items-center justify-center p-4 relative overflow-hidden",
    children: [
      e.jsxs("div", {
        className: "fixed inset-0 overflow-hidden pointer-events-none",
        children: [
          e.jsx("div", {
            className:
              "absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-blob",
          }),
          e.jsx("div", {
            className:
              "absolute bottom-0 left-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-blob",
            style: { animationDelay: "2s" },
          }),
          e.jsx("div", {
            className:
              "absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-blob",
            style: { animationDelay: "4s" },
          }),
        ],
      }),
      e.jsx("div", {
        className: "relative z-10 w-full max-w-sm sm:max-w-md",
        children: e.jsxs("div", {
          className:
            "bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden hover:shadow-purple-500/20 hover:shadow-2xl transition-all duration-300 group",
          children: [
            e.jsx("div", {
              className:
                "relative h-28 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 border-b border-white/20 flex items-center justify-between px-6",
              children: e.jsxs("div", {
                className: "space-y-1",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      e.jsx(It, {
                        className: "w-5 h-5 text-yellow-300 animate-pulse",
                      }),
                      e.jsx("h1", {
                        className:
                          "text-2xl font-bold text-white drop-shadow-lg",
                        children:
                          i === "idle" ? "Update Available" : "Updating...",
                      }),
                    ],
                  }),
                  e.jsxs("p", {
                    className: "text-purple-100 text-sm font-medium",
                    children: [p, " → ", u],
                  }),
                ],
              }),
            }),
            e.jsx("div", {
              className: "px-6 py-6 space-y-5",
              children:
                i === "idle"
                  ? e.jsxs(e.Fragment, {
                      children: [
                        e.jsx("p", {
                          className:
                            "text-slate-200 text-sm leading-relaxed text-center",
                          children:
                            "A major new version is available with exciting features, bug fixes, and performance improvements.",
                        }),
                        e.jsxs("button", {
                          onClick: () => s(!0),
                          className:
                            "w-full flex items-center justify-between py-3 px-4 bg-gradient-to-r from-purple-500/30 to-pink-500/30 hover:from-purple-500/50 hover:to-pink-500/50 rounded-xl border border-purple-400/60 transition-all group hover:shadow-lg hover:shadow-purple-500/30 backdrop-blur-sm",
                          children: [
                            e.jsxs("span", {
                              className: "font-semibold text-white text-sm",
                              children: ["What's New in v", u],
                            }),
                            e.jsx(Dt, {
                              className:
                                "w-4 h-4 text-purple-200 group-hover:rotate-180 transition-transform",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "space-y-3 pt-2",
                          children: [
                            e.jsxs("button", {
                              onClick: g,
                              className:
                                "w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-xl transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-lg hover:shadow-pink-500/50",
                              children: [
                                e.jsx(zt, { className: "w-4 h-4" }),
                                "Update Now",
                              ],
                            }),
                            e.jsxs("button", {
                              onClick: b,
                              className:
                                "w-full bg-gradient-to-r from-blue-500/30 to-cyan-500/30 hover:from-blue-500/50 hover:to-cyan-500/50 text-slate-100 font-semibold py-3 rounded-xl transition-all border border-blue-400/60 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/30 backdrop-blur-sm",
                              children: [
                                e.jsx(Ot, { className: "w-4 h-4" }),
                                "Remind Me Later",
                              ],
                            }),
                          ],
                        }),
                        e.jsx("p", {
                          className: "text-xs text-slate-500 text-center pt-2",
                          children:
                            "Updates keep your app secure and running smoothly",
                        }),
                      ],
                    })
                  : e.jsx(e.Fragment, {
                      children: e.jsxs("div", {
                        className: "space-y-4",
                        children: [
                          e.jsx("div", {
                            className: "flex justify-center py-6",
                            children: e.jsxs("div", {
                              className: "relative w-24 h-24",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500 border-r-pink-500 animate-spin",
                                }),
                                e.jsx("div", {
                                  className:
                                    "absolute inset-2 rounded-full border-4 border-transparent border-b-cyan-500 border-l-orange-500 animate-spin",
                                  style: { animationDirection: "reverse" },
                                }),
                                e.jsx("div", {
                                  className:
                                    "absolute inset-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 animate-pulse flex items-center justify-center",
                                  children: e.jsx(ze, {
                                    className:
                                      "w-6 h-6 text-white animate-bounce",
                                  }),
                                }),
                              ],
                            }),
                          }),
                          e.jsxs("div", {
                            className: "text-center space-y-2",
                            children: [
                              e.jsxs("p", {
                                className:
                                  "text-white font-semibold text-lg capitalize",
                                children: [
                                  i === "checking" && "Checking for updates...",
                                  i === "downloading" &&
                                    "Downloading update...",
                                  i === "installing" && "Installing update...",
                                  i === "complete" && "Update complete!",
                                ],
                              }),
                              e.jsxs("p", {
                                className: "text-slate-400 text-sm",
                                children: [
                                  i === "checking" &&
                                    "Verifying latest version",
                                  i === "downloading" &&
                                    "Fetching update files",
                                  i === "installing" &&
                                    "Installing and configuring",
                                  i === "complete" && "Preparing to restart...",
                                ],
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "space-y-2",
                            children: [
                              e.jsx("div", {
                                className:
                                  "w-full bg-white/10 rounded-full h-3 overflow-hidden border border-white/20 backdrop-blur-sm",
                                children: e.jsx("div", {
                                  className:
                                    "h-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 transition-all duration-500 ease-out rounded-full shadow-lg shadow-pink-500/50",
                                  style: { width: `${c}%` },
                                }),
                              }),
                              e.jsxs("p", {
                                className:
                                  "text-center text-white font-semibold text-sm",
                                children: [Math.round(c), "%"],
                              }),
                            ],
                          }),
                          e.jsx("div", {
                            className: "grid grid-cols-4 gap-2 pt-4",
                            children: [
                              "Checking",
                              "Download",
                              "Install",
                              "Complete",
                            ].map((w, f) => {
                              const h = [
                                  "checking",
                                  "downloading",
                                  "installing",
                                  "complete",
                                ].indexOf(i),
                                j = f < h || (f === h && i === "complete"),
                                S = f === h;
                              return e.jsxs(
                                "div",
                                {
                                  className: `text-center p-2 rounded-lg transition-all ${j ? "bg-green-500/30 border border-green-400/60" : S ? "bg-purple-500/40 border border-purple-400/60 animate-pulse" : "bg-white/10 border border-white/20"}`,
                                  children: [
                                    e.jsx("p", {
                                      className:
                                        "text-xs font-semibold text-white",
                                      children: w,
                                    }),
                                    j &&
                                      e.jsx("p", {
                                        className: "text-green-400 text-lg",
                                        children: "✓",
                                      }),
                                  ],
                                },
                                w,
                              );
                            }),
                          }),
                        ],
                      }),
                    }),
            }),
          ],
        }),
      }),
      r &&
        ((y = P == null ? void 0 : P.changelog) == null ? void 0 : y.length) >
          0 &&
        e.jsx("div", {
          className:
            "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in",
          children: e.jsxs("div", {
            className:
              "bg-gradient-to-br from-slate-900/95 via-purple-900/50 to-slate-900/95 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col",
            children: [
              e.jsxs("div", {
                className:
                  "bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 border-b border-white/20 p-6 flex items-center justify-between",
                children: [
                  e.jsxs("h2", {
                    className:
                      "text-2xl font-bold text-white flex items-center gap-2 drop-shadow-lg",
                    children: [
                      e.jsx("span", { children: "📝" }),
                      "Changelog v",
                      u,
                    ],
                  }),
                  e.jsx("button", {
                    onClick: () => s(!1),
                    className:
                      "p-2 hover:bg-white/20 rounded-lg transition-colors",
                    children: e.jsx(_t, { className: "w-5 h-5 text-white" }),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "overflow-y-auto flex-1 p-6 space-y-6",
                children: [
                  (v = P == null ? void 0 : P.changelog) == null
                    ? void 0
                    : v.map((w) =>
                        e.jsxs(
                          "div",
                          {
                            className: "space-y-4 animate-slide-up",
                            children: [
                              e.jsxs("div", {
                                className: `inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold text-white bg-gradient-to-r ${w.badgeGradient} border ${w.borderColor} backdrop-blur-sm shadow-lg`,
                                children: [
                                  e.jsx("span", {
                                    className: "text-lg",
                                    children: w.icon,
                                  }),
                                  w.category,
                                ],
                              }),
                              e.jsx("div", {
                                className:
                                  "grid grid-cols-1 md:grid-cols-2 gap-4",
                                children: w.items.map((f, N) =>
                                  e.jsx(
                                    "div",
                                    {
                                      className: `bg-gradient-to-br ${w.gradient} hover:shadow-lg hover:-translate-y-1 border ${w.borderColor} rounded-xl p-4 transition-all space-y-2 group backdrop-blur-sm`,
                                      children: e.jsxs("div", {
                                        className: "flex items-start gap-3",
                                        children: [
                                          e.jsx("div", {
                                            className:
                                              "text-3xl flex-shrink-0 group-hover:scale-110 transition-transform",
                                            children: f.image,
                                          }),
                                          e.jsxs("div", {
                                            className: "flex-1",
                                            children: [
                                              e.jsx("h4", {
                                                className:
                                                  "text-white font-semibold text-sm",
                                                children: f.title,
                                              }),
                                              e.jsx("p", {
                                                className:
                                                  "text-slate-300 text-xs mt-1",
                                                children: f.description,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    },
                                    N,
                                  ),
                                ),
                              }),
                            ],
                          },
                          w.id,
                        ),
                      ),
                  e.jsxs("div", {
                    className:
                      "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/40 rounded-xl p-4 backdrop-blur-sm animate-slide-up",
                    children: [
                      e.jsxs("p", {
                        className:
                          "text-slate-200 text-sm flex items-center gap-2",
                        children: [
                          e.jsx("span", {
                            className: "font-semibold",
                            children: "📅 Release Date:",
                          }),
                          " ",
                          P.releaseDate,
                        ],
                      }),
                      e.jsx("p", {
                        className: "text-slate-400 text-xs mt-2",
                        children:
                          "All updates are tested thoroughly to ensure stability and security",
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "bg-white/10 border-t border-white/20 p-4 flex gap-3 backdrop-blur-sm",
                children: [
                  e.jsx("button", {
                    onClick: () => s(!1),
                    className:
                      "flex-1 bg-white/10 hover:bg-white/20 text-white font-semibold py-2.5 rounded-lg transition-all border border-white/20",
                    children: "Close",
                  }),
                  e.jsx("button", {
                    onClick: () => {
                      g(), s(!1);
                    },
                    className:
                      "flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-2.5 rounded-lg transition-all shadow-lg hover:shadow-pink-500/50",
                    children: "Update Now",
                  }),
                ],
              }),
            ],
          }),
        }),
      e.jsx("style", {
        children: `
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(40px, -60px) scale(1.1); }
          66% { transform: translate(-30px, 30px) scale(0.9); }
        }
        .animate-blob { animation: blob 8s infinite; }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out; }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up { animation: slide-up 0.4s ease-out; }
      `,
      }),
    ],
  });
}
function Fs() {
  const [t, r] = l.useState(0),
    [s, n] = l.useState(!1);
  l.useEffect(() => {
    const d = setInterval(() => {
      r((c) => c + 1);
    }, 1e3);
    return () => clearInterval(d);
  }, []);
  const a = () => {
      n(!0),
        setTimeout(() => {
          window.location.reload();
        }, 500);
    },
    i = (d) => {
      const c = Math.floor(d / 60),
        o = d % 60;
      return `${c}:${o.toString().padStart(2, "0")}`;
    };
  return e.jsxs("div", {
    className:
      "w-full min-h-screen bg-gradient-to-br from-slate-950 via-red-950 to-slate-950 flex items-center justify-center p-4 relative overflow-hidden",
    children: [
      e.jsxs("div", {
        className: "fixed inset-0 overflow-hidden pointer-events-none",
        children: [
          e.jsx("div", {
            className:
              "absolute -top-40 -right-40 w-80 h-80 bg-red-600/30 rounded-full blur-3xl animate-pulse",
          }),
          e.jsx("div", {
            className:
              "absolute -bottom-40 -left-40 w-80 h-80 bg-red-500/20 rounded-full blur-3xl animate-pulse",
            style: { animationDelay: "1s" },
          }),
        ],
      }),
      e.jsxs("div", {
        className: "relative z-10 w-full max-w-5xl",
        children: [
          e.jsxs("div", {
            className:
              "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center",
            children: [
              e.jsx("div", {
                className: "hidden lg:flex justify-center",
                children: e.jsxs("div", {
                  className: "relative w-64 h-80",
                  children: [
                    e.jsx("div", {
                      className:
                        "absolute inset-0 bg-gradient-to-b from-red-500/10 to-transparent rounded-3xl blur-3xl",
                    }),
                    e.jsx("div", {
                      className:
                        "absolute inset-0 rounded-full border border-red-500/20 animate-pulse",
                    }),
                    e.jsx("div", {
                      className:
                        "absolute inset-6 rounded-full border border-red-500/10 animate-pulse",
                      style: { animationDelay: "0.3s" },
                    }),
                    e.jsx("div", {
                      className:
                        "absolute inset-0 flex items-center justify-center",
                      children: e.jsxs("div", {
                        className: "w-40 h-56 relative",
                        children: [
                          e.jsxs("div", {
                            className:
                              "absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border-2 border-red-500/40 shadow-2xl shadow-red-500/20",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "h-10 bg-gradient-to-r from-slate-700 to-slate-800 rounded-t-xl border-b border-red-500/30 flex items-center px-4 gap-3",
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "w-2 h-2 rounded-full bg-red-500 animate-pulse",
                                  }),
                                  e.jsx("span", {
                                    className:
                                      "text-xs text-slate-400 font-mono",
                                    children: "SERVER",
                                  }),
                                ],
                              }),
                              e.jsx("div", {
                                className:
                                  "flex-1 flex flex-col justify-center px-4 gap-2",
                                children: [0, 1, 2].map((d) =>
                                  e.jsxs(
                                    "div",
                                    {
                                      className: "flex items-center gap-2",
                                      children: [
                                        e.jsx("div", {
                                          className: `w-2 h-2 rounded-full ${d === 0 ? "bg-red-500 animate-pulse" : "bg-slate-700"}`,
                                        }),
                                        e.jsx("div", {
                                          className:
                                            "flex-1 h-1 bg-slate-700 rounded",
                                        }),
                                      ],
                                    },
                                    d,
                                  ),
                                ),
                              }),
                              e.jsx("div", {
                                className:
                                  "h-10 bg-gradient-to-r from-slate-800 to-slate-900 rounded-b-xl border-t border-red-500/30 flex items-center justify-center",
                                children: e.jsx(et, {
                                  className:
                                    "w-5 h-5 text-red-500 animate-pulse",
                                }),
                              }),
                            ],
                          }),
                          e.jsx("div", {
                            className:
                              "absolute -top-6 -right-6 animate-bounce",
                            children: e.jsx("div", {
                              className:
                                "bg-red-500/30 p-2 rounded-full border border-red-500/60 backdrop-blur",
                              children: e.jsx(Gt, {
                                className: "w-5 h-5 text-red-300",
                              }),
                            }),
                          }),
                          e.jsx("div", {
                            className: "absolute -bottom-2 -left-6",
                            children: e.jsx("div", {
                              className:
                                "bg-red-500/20 p-2 rounded-full border border-red-500/40",
                              children: e.jsx(ze, {
                                className: "w-4 h-4 text-red-300 animate-pulse",
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              e.jsx("div", {
                className: "flex flex-col justify-center space-y-6",
                children: e.jsxs("div", {
                  className:
                    "bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-8 space-y-6",
                  children: [
                    e.jsxs("div", {
                      className: "space-y-3",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center gap-3",
                          children: [
                            e.jsx("div", {
                              className:
                                "p-2 bg-red-500/20 rounded-lg border border-red-500/40",
                              children: e.jsx(et, {
                                className: "w-6 h-6 text-red-400",
                              }),
                            }),
                            e.jsx("h1", {
                              className: "text-4xl font-bold text-white",
                              children: "Service Down",
                            }),
                          ],
                        }),
                        e.jsx("p", {
                          className: "text-slate-300 text-sm",
                          children: "We're experiencing temporary issues",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className:
                        "bg-red-500/10 border border-red-500/30 rounded-2xl p-5 backdrop-blur-sm space-y-2",
                      children: [
                        e.jsx("p", {
                          className: "text-slate-200 text-sm leading-relaxed",
                          children:
                            "Our backend infrastructure is currently unavailable. Our engineering team is actively investigating and working to restore service as quickly as possible.",
                        }),
                        e.jsxs("p", {
                          className: "text-red-300 text-xs font-mono",
                          children: ["Downtime: ", i(t)],
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className: "grid ",
                      children: e.jsxs("button", {
                        onClick: a,
                        disabled: s,
                        className:
                          "bg-red-600 hover:bg-red-700 disabled:bg-red-600/50 text-white font-semibold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 group",
                        children: [
                          e.jsx(Ut, {
                            className: `w-4 h-4 ${s ? "animate-spin" : "group-hover:rotate-180 transition-transform"}`,
                          }),
                          "Retry",
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
          e.jsx("div", {
            className:
              "mt-12 bg-gradient-to-r from-red-500/15 to-rose-500/10 border border-red-500/30 rounded-2xl p-5 backdrop-blur-sm",
            children: e.jsxs("div", {
              className: "flex items-center gap-4",
              children: [
                e.jsx(Ft, {
                  className: "w-5 h-5 text-red-400 flex-shrink-0 animate-pulse",
                }),
                e.jsxs("div", {
                  className: "flex-1 min-w-0",
                  children: [
                    e.jsx("p", {
                      className: "text-white font-semibold text-sm",
                      children: "Real-time Updates",
                    }),
                    e.jsx("p", {
                      className: "text-slate-400 text-xs",
                      children:
                        "Visit our status page for live incident reports",
                    }),
                  ],
                }),
                e.jsxs("a", {
                  href: "https://status.ajayos.in",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "text-red-400 hover:text-red-300 text-sm font-semibold flex items-center gap-1 flex-shrink-0",
                  children: ["View ", e.jsx($t, { className: "w-3 h-3" })],
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
const Ys = () => {
  const [t, r] = l.useState("SYSTEM_UPDATE"),
    [s, n] = l.useState(!1);
  return (
    l.useEffect(() => {
      const a = [
        G.on("SYSTEM_GUARD", ({ model: i = null }) => {
          r(i);
        }),
      ];
      return () => a.forEach((i) => i());
    }, []),
    l.useEffect(
      () => (
        Object.keys(Re).forEach((a) => {
          if (Ne(a) && typeof Re[a] == "function")
            try {
              Re[a]();
            } catch (i) {
              console.error(
                `[SystemGuard] Error initializing feature: ${a}`,
                i,
              );
            }
        }),
        n(!0)
      ),
      [],
    ),
    s
      ? t === "LOADING"
        ? e.jsx(at, {})
        : t === "INSPECT_BLOCKER"
          ? e.jsx(Gs, {})
          : t === "SERVER_DOWN"
            ? e.jsx(Fs, {})
            : e.jsx(at, { children: e.jsx(Us, { children: e.jsx(_s, {}) }) })
      : e.jsx(Zt, {})
  );
};
export { Ys as default };
