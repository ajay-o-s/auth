const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = ["assets/SystemGuard.js", "assets/aos_vendor.js", "assets/aos.js"]),
) => i.map((i) => d[i]);
var w = Object.defineProperty;
var v = (n, o, r) =>
  o in n
    ? w(n, o, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (n[o] = r);
var f = (n, o, r) => v(n, typeof o != "symbol" ? o + "" : o, r);
import {
  r as h,
  j as e,
  Z as j,
  c as k,
  R as N,
  a as E,
  b as z,
} from "./aos_vendor.js";
import "./aos.js";
(function () {
  const o = document.createElement("link").relList;
  if (o && o.supports && o.supports("modulepreload")) return;
  for (const t of document.querySelectorAll('link[rel="modulepreload"]')) i(t);
  new MutationObserver((t) => {
    for (const a of t)
      if (a.type === "childList")
        for (const l of a.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && i(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(t) {
    const a = {};
    return (
      t.integrity && (a.integrity = t.integrity),
      t.referrerPolicy && (a.referrerPolicy = t.referrerPolicy),
      t.crossOrigin === "use-credentials"
        ? (a.credentials = "include")
        : t.crossOrigin === "anonymous"
          ? (a.credentials = "omit")
          : (a.credentials = "same-origin"),
      a
    );
  }
  function i(t) {
    if (t.ep) return;
    t.ep = !0;
    const a = r(t);
    fetch(t.href, a);
  }
})();
const S = "modulepreload",
  I = function (n) {
    return "/" + n;
  },
  u = {},
  C = function (o, r, i) {
    let t = Promise.resolve();
    if (r && r.length > 0) {
      let l = function (c) {
        return Promise.all(
          c.map((p) =>
            Promise.resolve(p).then(
              (m) => ({ status: "fulfilled", value: m }),
              (m) => ({ status: "rejected", reason: m }),
            ),
          ),
        );
      };
      document.getElementsByTagName("link");
      const s = document.querySelector("meta[property=csp-nonce]"),
        x =
          (s == null ? void 0 : s.nonce) ||
          (s == null ? void 0 : s.getAttribute("nonce"));
      t = l(
        r.map((c) => {
          if (((c = I(c)), c in u)) return;
          u[c] = !0;
          const p = c.endsWith(".css"),
            m = p ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${c}"]${m}`)) return;
          const d = document.createElement("link");
          if (
            ((d.rel = p ? "stylesheet" : S),
            p || (d.as = "script"),
            (d.crossOrigin = ""),
            (d.href = c),
            x && d.setAttribute("nonce", x),
            document.head.appendChild(d),
            p)
          )
            return new Promise((g, y) => {
              d.addEventListener("load", g),
                d.addEventListener("error", () =>
                  y(new Error(`Unable to preload CSS for ${c}`)),
                );
            });
        }),
      );
    }
    function a(l) {
      const s = new Event("vite:preloadError", { cancelable: !0 });
      if (((s.payload = l), window.dispatchEvent(s), !s.defaultPrevented))
        throw l;
    }
    return t.then((l) => {
      for (const s of l || []) s.status === "rejected" && a(s.reason);
      return o().catch(a);
    });
  };
class R extends h.Component {
  constructor(r) {
    super(r);
    f(this, "handleGoHome", () => {
      this.props.history && typeof this.props.history.push == "function"
        ? this.props.history.push("/")
        : typeof window != "undefined" && (window.location.href = "/");
    });
    f(this, "openModal", () => this.setState({ showModal: !0 }));
    f(this, "closeModal", () => this.setState({ showModal: !1 }));
    f(this, "toggleDetails", () => {
      this.setState((r) => ({ showDetails: !r.showDetails }));
    });
    f(this, "copyErrorId", async () => {
      const { errorId: r } = this.state;
      if (!(!r || typeof navigator == "undefined" || !navigator.clipboard))
        try {
          await navigator.clipboard.writeText(r),
            this.setState({ copied: !0 }),
            setTimeout(() => this.setState({ copied: !1 }), 2e3);
        } catch (i) {}
    });
    this.state = {
      hasError: !1,
      error: null,
      errorInfo: null,
      errorId: null,
      showDetails: !1,
      showModal: !1,
      copied: !1,
    };
  }
  static getDerivedStateFromError(r) {
    const i =
      "ERR-" +
      Date.now().toString(36).toUpperCase() +
      "-" +
      Math.random().toString(36).slice(2, 7).toUpperCase();
    return { hasError: !0, error: r, errorId: i };
  }
  componentDidCatch(r, i) {
    if (
      (this.setState({ errorInfo: i }),
      console.error("ErrorBoundary caught an error:", r, i),
      typeof this.props.onError == "function")
    )
      try {
        this.props.onError({
          error: r,
          errorInfo: i,
          errorId: this.state.errorId,
        });
      } catch (t) {
        console.warn("onError callback failed", t);
      }
  }
  render() {
    var i;
    if (!this.state.hasError) return this.props.children;
    const r =
      typeof window != "undefined" && this.state.errorId
        ? `https://status.ajayos.in/error/status/${this.state.errorId}`
        : `/error/status/${this.state.errorId || "unknown"}`;
    return e.jsxs("div", {
      className: "error-container",
      role: "alert",
      "aria-live": "assertive",
      children: [
        e.jsx("div", {
          className: "particles",
          "aria-hidden": "true",
          children: [...Array(40)].map((t, a) =>
            e.jsx(
              "div",
              {
                className: "particle",
                style: {
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 20}s`,
                  animationDuration: `${15 + Math.random() * 10}s`,
                },
              },
              a,
            ),
          ),
        }),
        e.jsx("div", {
          className: "matrix-lines",
          "aria-hidden": "true",
          children: [...Array(8)].map((t, a) =>
            e.jsx(
              "div",
              {
                className: "matrix-line",
                style: { left: `${12.5 * a}%`, animationDelay: `${a * 0.5}s` },
              },
              a,
            ),
          ),
        }),
        e.jsxs("div", {
          className: "error-content",
          children: [
            e.jsxs("div", {
              className: "glitch-container",
              "aria-hidden": "true",
              children: [
                e.jsx("div", { className: "glitch-icon", children: "⚠" }),
                e.jsx("div", {
                  className: "glitch-icon glitch-shadow-1",
                  children: "⚠",
                }),
                e.jsx("div", {
                  className: "glitch-icon glitch-shadow-2",
                  children: "⚠",
                }),
              ],
            }),
            e.jsx("h1", {
              className: "error-title glitch-text",
              "data-text": "Oops!",
              children: "Oops!",
            }),
            e.jsx("div", {
              className: "error-subtitle",
              children: e.jsx("span", {
                className: "typing-text",
                "aria-hidden": "true",
                children: "Something went wrong...!",
              }),
            }),
            e.jsx("div", {
              className: "space-error-subtitle",
              children: e.jsx("span", {
                className: "space-typing-text",
                "aria-hidden": "true",
                children: "Lost in the void of space...",
              }),
            }),
            e.jsxs("div", {
              className: "error-id-display",
              "aria-label": "Error identifier",
              children: [
                e.jsx("div", { className: "scan-line" }),
                e.jsx("div", {
                  className: "error-label",
                  children: "ERROR_ID",
                }),
                e.jsx("div", {
                  className: "error-value",
                  children: e.jsx("code", { children: this.state.errorId }),
                }),
                e.jsxs("div", {
                  style: {
                    marginTop: "8px",
                    display: "flex",
                    gap: "8px",
                    justifyContent: "center",
                  },
                  children: [
                    e.jsx("button", {
                      className: "small-btn",
                      onClick: this.copyErrorId,
                      "aria-label": "Copy error id",
                      children: this.state.copied ? "COPIED" : "COPY ID",
                    }),
                    e.jsx("a", {
                      href: r,
                      onClick: (t) => {
                        typeof window != "undefined" &&
                          (t.preventDefault(),
                          window.open(r, "_blank", "noopener,noreferrer"));
                      },
                      className: "small-link",
                      children: "VIEW STATUS",
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className: "action-panel",
              children: [
                e.jsxs("button", {
                  className: "cyber-btn primary",
                  onClick: this.handleGoHome,
                  children: [
                    e.jsx("span", {
                      className: "btn-text",
                      children: "RETURN HOME",
                    }),
                    e.jsx("div", { className: "btn-glow" }),
                  ],
                }),
                e.jsxs("button", {
                  className: "cyber-btn primary",
                  onClick: this.openModal,
                  children: [
                    e.jsx("span", {
                      className: "btn-text",
                      children: "📊 VIEW LOGS",
                    }),
                    e.jsx("div", { className: "btn-glow" }),
                  ],
                }),
              ],
            }),
            this.state.showModal &&
              e.jsx("div", {
                className: "space-modal-backdrop",
                onClick: this.closeModal,
                children: e.jsxs("div", {
                  className: "space-modal",
                  onClick: (t) => t.stopPropagation(),
                  children: [
                    e.jsxs("div", {
                      className: "space-modal-header",
                      children: [
                        e.jsx("h2", { children: "⚙ Error Diagnostics ⚙" }),
                        e.jsx("button", {
                          className: "space-modal-close",
                          onClick: this.closeModal,
                          children: "✖",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "space-modal-content",
                      children: [
                        e.jsxs("div", {
                          className: "space-log-line",
                          children: [
                            e.jsx("span", {
                              className: "space-log-label",
                              children: "ERROR:",
                            }),
                            e.jsx("span", {
                              className: "space-log-value",
                              children:
                                ((i = this.state.error) == null
                                  ? void 0
                                  : i.message) || "Unknown anomaly detected",
                            }),
                          ],
                        }),
                        this.state.errorInfo &&
                          e.jsxs("div", {
                            className: "space-stack-container",
                            children: [
                              e.jsx("div", {
                                className: "space-stack-label",
                                children: "STACK TRACE:",
                              }),
                              e.jsx("div", {
                                className: "space-stack-content",
                                children: this.state.errorInfo.componentStack,
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              }),
            e.jsxs("div", {
              className: "footer-info",
              children: [
                e.jsxs("div", {
                  className: "footer-line",
                  children: ["REF: ", this.state.errorId],
                }),
                e.jsx("div", {
                  className: "footer-line",
                  children: "AWAITING SYSTEM RECOVERY...",
                }),
              ],
            }),
          ],
        }),
        e.jsx("style", {
          children: `
          /* Modal */
          .space-modal-backdrop { position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.85); display:flex; align-items:center; justify-content:center; z-index:100000;}
          .space-modal { background:#0a0a1a; border:2px solid #00e5ff; border-radius:12px; width:90%; max-width:600px; padding:1.5rem; max-height:80vh; overflow-y:auto; box-shadow:0 0 30px #00e5ff;}
          .space-modal-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; }
          .space-modal-close { background:none; border:none; color:#ff0080; font-size:1.3rem; cursor:pointer; }
          .space-modal-content { font-family:'Courier New', monospace; color:#d0f0ff; }
          .space-stack-content { background:rgba(255,0,128,0.05); border:1px solid rgba(255,0,128,0.1); border-radius:6px; padding:0.8rem; color:#c0e0ff; font-size:0.8rem; max-height:300px; overflow-y:auto; white-space:pre-wrap; line-height:1.4;}
          .space-error-subtitle { font-size:1.1rem; margin-bottom:1.5rem; color:#ff6b9d; font-style:italic;}
          .space-typing-text { display:inline-block; overflow:hidden; border-right:0.2em solid #00e5ff; white-space:nowrap; letter-spacing:0.15em; animation:space-typing 4s steps(25,end), blink-space 0.75s step-end infinite;}
          @keyframes space-typing {from{width:0;}to{width:100%;}} @keyframes blink-space{0%,100%{border-color:transparent;}50%{border-color:#00e5ff;}}
          
          .error-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
            color: #00ff88;
            font-family: 'Courier New', monospace;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 999999;
          }

          .particles { position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; }
          .particle { position: absolute; width: 2px; height: 2px; background: #00ff88; border-radius: 50%; animation: float infinite linear; opacity: 0.7; }
          @keyframes float {
            0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
          }

          .matrix-lines { position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; }
          .matrix-line { position: absolute; width: 1px; height: 100%; background: linear-gradient(to bottom, transparent, #00ff88, transparent); animation: matrix-scan 3s infinite; opacity: 0.25; }
          @keyframes matrix-scan { 0%,100% { transform: translateY(-100%); } 50% { transform: translateY(100%); } }

          .error-content { position: relative; z-index: 10; text-align: center; max-width: 720px; padding: 2rem; }
          .glitch-container { position: relative; margin-bottom: 1.25rem; }
          .glitch-icon { font-size: 3.5rem; color: #00ff88; position: relative; display: inline-block; animation: glitch-pulse 2s infinite; }
          .glitch-shadow-1, .glitch-shadow-2 { position: absolute; top: 0; left: 0; }
          .glitch-shadow-1 { color: #ff0088; animation: glitch-1 0.5s infinite; }
          .glitch-shadow-2 { color: #0088ff; animation: glitch-2 0.7s infinite; }

          @keyframes glitch-pulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.08); filter: brightness(1.2); } }
          @keyframes glitch-1 { 0%,100%{transform:translate(0);} 20%{transform:translate(-2px,2px);} 40%{transform:translate(-2px,-2px);} 60%{transform:translate(2px,2px);} 80%{transform:translate(2px,-2px);} }
          @keyframes glitch-2 { 0%,100%{transform:translate(0);} 25%{transform:translate(2px,-2px);} 50%{transform:translate(-2px,2px);} 75%{transform:translate(2px,2px);} }

          .error-title { font-size: 2.6rem; font-weight: 700; margin-bottom: 0.75rem; position: relative; text-shadow: 0 0 10px #00ff88; }
          .glitch-text { position: relative; }
          .glitch-text::before, .glitch-text::after { content: attr(data-text); position: absolute; top: 0; left: 0; width: 100%; }
          .glitch-text::before { color: #ff0088; animation: glitch-3 0.3s infinite; z-index: -1; }
          .glitch-text::after { color: #0088ff; animation: glitch-4 0.3s infinite; z-index: -2; }
          @keyframes glitch-3 { 0%{transform:translate(-1px,-1px);}25%{transform:translate(1px,1px);}50%{transform:translate(-1px,1px);}75%{transform:translate(1px,-1px);}100%{transform:translate(-1px,-1px);} }
          @keyframes glitch-4 { 0%{transform:translate(1px,1px);}25%{transform:translate(-1px,-1px);}50%{transform:translate(1px,-1px);}75%{transform:translate(-1px,1px);}100%{transform:translate(1px,1px);} }

          .error-subtitle { font-size: 1.05rem; margin-bottom: 0.25rem; color: #ff6b6b; }
          .typing-text { display:inline-block; overflow: hidden; border-right: 0.15em solid #00ff88; white-space: nowrap; letter-spacing: 0.12em; animation: typing 3.5s steps(20, end), blink-caret 0.75s step-end infinite; text-align: left; }
          @keyframes typing { from { width: 0; } to { width: 100%; } }
          @keyframes blink-caret { from,to { border-color: transparent; } 50% { border-color: #00ff88; } }

          .error-id-display { background: rgba(0,255,136,0.06); border: 1px solid rgba(0,255,136,0.12); border-radius: 8px; padding: 1.25rem; margin-bottom: 1.25rem; position: relative; overflow: hidden; }
          .scan-line { position:absolute; top:0; left:0; width:100%; height:2px; background:#00ff88; animation: scan 2.2s infinite; opacity:0.12; }
          @keyframes scan { 0%{transform:translateY(0);} 100%{transform:translateY(100px);} }

          .error-label { font-size: 0.88rem; margin-bottom: 0.35rem; color: #00ff88; }
          .error-value { font-size: 1.2rem; font-weight: 700; color: #fff; text-shadow: 0 0 8px #00ff88; }

          .qr-section { display:flex; align-items:center; justify-content:center; gap:1.5rem; margin-bottom:1.25rem; flex-wrap:wrap; }
          .qr-container { position:relative; padding:0.6rem; border: 1px solid rgba(0,255,136,0.12); border-radius:8px; background: rgba(0,0,0,0.6); }
          .qr-glow { position:absolute; top:-2px; left:-2px; right:-2px; bottom:-2px; background: linear-gradient(45deg, #00ff88, #0088ff, #ff0088, #00ff88); border-radius:8px; z-index:-1; animation: rotate-border 3s linear infinite; opacity:0.25; }
          @keyframes rotate-border { 0%{transform:rotate(0);}100%{transform:rotate(360deg);} }

          .qr-code { width:120px; height:120px; border-radius:4px; animation: qr-pulse 2s infinite; display:block; }
          @keyframes qr-pulse { 0%,100%{transform:scale(1);}50%{transform:scale(1.04);} }

          .status-text { text-align:left; max-width:320px; }
          .status-line { font-size:1.02rem; font-weight:700; margin-bottom:0.4rem; color:#00ff88; }
          .status-url { font-size:0.88rem; color:#cfcfcf; word-break:break-all; background: rgba(0,255,136,0.04); padding:0.45rem; border-radius:4px; border-left:3px solid #00ff88; }

          .action-panel { display:flex; gap:1rem; justify-content:center; margin-bottom:1rem; flex-wrap:wrap; }
          .cyber-btn { position:relative; padding:0.75rem 1.5rem; background:transparent; border:1.5px solid #00ff88; color:#00ff88; font-family:inherit; font-size:0.95rem; cursor:pointer; transition:all 0.25s ease; text-transform:uppercase; letter-spacing:1px; overflow:hidden; min-width:140px; border-radius:8px; }
          .cyber-btn.primary { border-color:#00ff88; color:#00ff88; }
          .cyber-btn.secondary { border-color:#0088ff; color:#0088ff; }

          .btn-glow { position:absolute; top:0; left:-90%; width:90%; height:100%; background: linear-gradient(90deg, transparent, rgba(0,255,136,0.12), transparent); transition:left 0.45s; pointer-events:none; }
          .cyber-btn:hover .btn-glow { left:100%; }
          .cyber-btn:hover { transform: translateY(-3px); box-shadow: 0 8px 20px rgba(0,255,136,0.06); background: rgba(0,255,136,0.03); }

          .btn-text { position:relative; z-index:1; }

          .details-panel { background: rgba(0,0,0,0.75); border: 1px solid rgba(0,255,136,0.08); border-radius:8px; padding:1rem; margin-bottom:1rem; text-align:left; animation: slide-up 0.45s ease; max-height:320px; overflow:auto; }
          @keyframes slide-up { from { opacity:0; transform: translateY(12px); } to { opacity:1; transform: translateY(0); } }

          .panel-header { display:flex; align-items:center; justify-content:space-between; margin-bottom:0.6rem; padding-bottom:0.4rem; border-bottom:1px solid rgba(0,255,136,0.04); }
          .panel-title { font-weight:700; color:#00ff88; font-size:0.95rem; }
          .status-indicator { width:12px; height:12px; background:#ff6b6b; border-radius:50%; animation: status-blink 1s infinite; }
          @keyframes status-blink { 0%,50%{opacity:1}51%,100%{opacity:0.35} }

          .error-log { font-family: 'Courier New', monospace; color:#ddd; }
          .log-line { margin-bottom:0.8rem; display:flex; flex-wrap:wrap; gap:0.5rem; }
          .log-label { color:#ff6b6b; font-weight:700; min-width:90px; }
          .log-value { color:#fff; flex:1; }

          .stack-container { margin-top:0.8rem; }
          .stack-label { color:#ff6b6b; font-weight:700; margin-bottom:0.4rem; }
          .stack-content { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.03); border-radius:6px; padding:0.75rem; color:#cfcfcf; font-size:0.82rem; max-height:180px; overflow-y:auto; white-space:pre-wrap; line-height:1.35; }

          .footer-info { font-size:0.9rem; color:#9aa; animation: footer-fade 1s ease 0.9s both; margin-top:0.5rem; }
          .footer-line { margin-bottom:0.25rem; }

          .small-btn { background:transparent; border:1px solid rgba(255,255,255,0.06); color:#cfcfcf; padding:6px 10px; border-radius:6px; cursor:pointer; font-size:0.8rem; }
          .small-link { color:#cfefff; text-decoration:none; font-size:0.85rem; padding:6px 10px; border-radius:6px; border:1px solid rgba(255,255,255,0.04); }

          @media (max-width:768px) {
            .error-content { padding:1rem; max-width:92%; }
            .error-title { font-size:1.8rem; }
            .glitch-icon { font-size:2.6rem; }
            .qr-section { flex-direction:column; gap:0.9rem; }
            .status-text { text-align:center; max-width:none; }
            .action-panel { flex-direction:column; gap:0.6rem; }
            .cyber-btn { width:100%; min-width:auto; border-radius:10px; }
          }
        `,
        }),
      ],
    });
  }
}
function b() {
  return e.jsxs("div", {
    className:
      "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden",
    children: [
      e.jsx("div", {
        className: "absolute inset-0 opacity-10",
        children: e.jsx("div", {
          className: "absolute inset-0",
          style: {
            backgroundImage:
              "linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          },
        }),
      }),
      e.jsx("div", {
        className:
          "absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob",
      }),
      e.jsx("div", {
        className:
          "absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000",
      }),
      e.jsx("div", {
        className: "relative z-10 w-full max-w-md",
        children: e.jsxs("div", {
          className: "group",
          children: [
            e.jsx("div", {
              className: "flex justify-center mb-8",
              children: e.jsxs("div", {
                className: "relative w-20 h-20",
                children: [
                  e.jsx("div", {
                    className:
                      "absolute inset-0 rounded-full border-2 border-transparent border-t-purple-400 border-r-pink-400 animate-spin",
                  }),
                  e.jsx("div", {
                    className:
                      "absolute inset-2 rounded-full border-2 border-transparent border-b-pink-400 border-l-purple-400 animate-spin",
                    style: {
                      animationDirection: "reverse",
                      animationDuration: "1.5s",
                    },
                  }),
                  e.jsx("div", {
                    className:
                      "absolute inset-0 flex items-center justify-center",
                    children: e.jsx(j, {
                      className: "w-8 h-8 text-purple-400",
                      fill: "currentColor",
                    }),
                  }),
                ],
              }),
            }),
            e.jsx("div", {
              className: "text-center",
              children: e.jsxs("div", {
                className: "inline-flex items-center justify-center space-x-2",
                children: [
                  e.jsx("span", {
                    className: "text-purple-300/70 text-sm",
                    children: "Initializing",
                  }),
                  e.jsxs("span", {
                    className: "inline-flex space-x-1",
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
                          "w-2 h-2 bg-purple-400 rounded-full animate-bounce",
                        style: { animationDelay: "0.3s" },
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
      e.jsx("style", {
        children: `
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }

        @keyframes slideIn {
          0%, 100% {
            width: 0%;
          }
          50% {
            width: 100%;
          }
        }
      `,
      }),
    ],
  });
}
const D = h.lazy(() =>
    C(() => import("./SystemGuard.js"), __vite__mapDeps([0, 1, 2])),
  ),
  O = k(
    [
      {
        path: "*",
        element: e.jsx(R, { children: e.jsx(D, {}) }),
        HydrateFallback: e.jsx(b, {}),
      },
    ],
    { future: { v7_startTransition: !0 } },
  );
N.createRoot(document.getElementById("ajayos")).render(
  e.jsx(E.StrictMode, {
    children: e.jsx(h.Suspense, {
      fallback: e.jsx(b, {}),
      children: e.jsx(z, { router: O }),
    }),
  }),
);
export { b as L };
