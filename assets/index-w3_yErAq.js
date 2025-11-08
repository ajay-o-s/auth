const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SystemGuard-C6ZkGetX.js","assets/aos_vendor-BBEs1h-_.js","assets/aos-CZN-F8ZP.js"])))=>i.map(i=>d[i]);
var D=Object.defineProperty;var g=(s,n,o)=>n in s?D(s,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[n]=o;var d=(s,n,o)=>g(s,typeof n!="symbol"?n+"":n,o);import{r as h,j as e,Z as E,c as y,R as S,a as v,b as A}from"./aos_vendor-BBEs1h-_.js";import"./aos-CZN-F8ZP.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(r){if(r.ep)return;r.ep=!0;const t=o(r);fetch(r.href,t)}})();const j="modulepreload",w=function(s){return"/"+s},b={},R=function(n,o,i){let r=Promise.resolve();if(o&&o.length>0){let l=function(m){return Promise.all(m.map(u=>Promise.resolve(u).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),p=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=l(o.map(m=>{if(m=w(m),m in b)return;b[m]=!0;const u=m.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${f}`))return;const c=document.createElement("link");if(c.rel=u?"stylesheet":j,u||(c.as="script"),c.crossOrigin="",c.href=m,p&&c.setAttribute("nonce",p),document.head.appendChild(c),u)return new Promise((x,O)=>{c.addEventListener("load",x),c.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${m}`)))})}))}function t(l){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=l,window.dispatchEvent(a),!a.defaultPrevented)throw l}return r.then(l=>{for(const a of l||[])a.status==="rejected"&&t(a.reason);return n().catch(t)})};class T extends h.Component{constructor(o){super(o);d(this,"handleGoHome",()=>{this.props.history&&typeof this.props.history.push=="function"?this.props.history.push("/"):typeof window!="undefined"&&(window.location.href="/")});d(this,"openModal",()=>this.setState({showModal:!0}));d(this,"closeModal",()=>this.setState({showModal:!1}));d(this,"toggleDetails",()=>{this.setState(o=>({showDetails:!o.showDetails}))});d(this,"copyErrorId",async()=>{const{errorId:o}=this.state;if(!(!o||typeof navigator=="undefined"||!navigator.clipboard))try{await navigator.clipboard.writeText(o),this.setState({copied:!0}),setTimeout(()=>this.setState({copied:!1}),2e3)}catch(i){}});this.state={hasError:!1,error:null,errorInfo:null,errorId:null,showDetails:!1,showModal:!1,copied:!1}}static getDerivedStateFromError(o){const i="ERR-"+Date.now().toString(36).toUpperCase()+"-"+Math.random().toString(36).slice(2,7).toUpperCase();return{hasError:!0,error:o,errorId:i}}componentDidCatch(o,i){if(this.setState({errorInfo:i}),console.error("ErrorBoundary caught an error:",o,i),typeof this.props.onError=="function")try{this.props.onError({error:o,errorInfo:i,errorId:this.state.errorId})}catch(r){console.warn("onError callback failed",r)}}render(){var i;if(!this.state.hasError)return this.props.children;const o=typeof window!="undefined"&&this.state.errorId?`https://status.ajayos.in/error/status/${this.state.errorId}`:`/error/status/${this.state.errorId||"unknown"}`;return e.jsxDEV("div",{className:"error-container",role:"alert","aria-live":"assertive",children:[e.jsxDEV("div",{className:"particles","aria-hidden":"true",children:[...Array(40)].map((r,t)=>e.jsxDEV("div",{className:"particle",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*20}s`,animationDuration:`${15+Math.random()*10}s`}},t,!1,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/ErrorBoundary.jsx",lineNumber:98,columnNumber:13},this))},void 0,!1,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/ErrorBoundary.jsx",lineNumber:96,columnNumber:9},this),e.jsxDEV("div",{className:"matrix-lines","aria-hidden":"true",children:[...Array(8)].map((r,t)=>e.jsxDEV("div",{className:"matrix-line",style:{left:`${12.5*t}%`,animationDelay:`${t*.5}s`}},t,!1,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/ErrorBoundary.jsx",lineNumber:112,columnNumber:13},this))},void 0,!1,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/ErrorBoundary.jsx",lineNumber:110,columnNumber:9},this),e.jsxDEV("div",{className:"error-content",children:[e.jsxDEV("div",{className:"glitch-container","aria-hidden":"true",children:[e.jsxDEV("div",{className:"glitch-icon",children:"⚠"},void 0,!1,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/ErrorBoundary.jsx",lineNumber:125,columnNumber:13},this),e.jsxDEV("div",{className:"glitch-icon glitch-shadow-1",children:"⚠"},void 0,!1,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/ErrorBoundary.jsx",lineNumber:126,columnNumber:13},this),e.jsxDEV("div",{className:"glitch-icon glitch-shadow-2",children:"⚠"},void 0,!1,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/ErrorBoundary.jsx",lineNumber:127,columnNumber:13},this)]},void 0,!0,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/ErrorBoundary.jsx",lineNumber:124,columnNumber:11},this),e.jsxDEV("h1",{className:"error-title glitch-text","data-text":"Oops!",children:"Oops!"},void 0,!1,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/ErrorBoundary.jsx",lineNumber:130,columnNumber:11},this),e.jsxDEV("div",{className:"error-subtitle",children:e.jsxDEV("span",{className:"typing-text","aria-hidden":"true",children:"Something went wrong...!"},void 0,!1,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/ErrorBoundary.jsx",lineNumber:135,columnNumber:13},this)},void 0,!1,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/ErrorBoundary.jsx",lineNumber:134,columnNumber:11},this),e.jsxDEV("div",{className:"space-error-subtitle",children:e.jsxDEV("span",{className:"space-typing-text","aria-hidden":"true",children:"Lost in the void of space..."},void 0,!1,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/ErrorBoundary.jsx",lineNumber:141,columnNumber:13},this)},void 0,!1,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/ErrorBoundary.jsx",lineNumber:140,columnNumber:11},this),e.jsxDEV("div",{className:"error-id-display","aria-label":"Error identifier",children:[e.jsxDEV("div",{className:"scan-line"},void 0,!1,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/ErrorBoundary.jsx",lineNumber:147,columnNumber:13},this),e.jsxDEV("div",{className:"error-label",children:"ERROR_ID"},void 0,!1,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/ErrorBoundary.jsx",lineNumber:148,columnNumber:13},this),e.jsxDEV("div",{className:"error-value",children:e.jsxDEV("code",{children:this.state.errorId},void 0,!1,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/ErrorBoundary.jsx",lineNumber:150,columnNumber:15},this)},void 0,!1,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/ErrorBoundary.jsx",lineNumber:149,columnNumber:13},this),e.jsxDEV("div",{style:{marginTop:"8px",display:"flex",gap:"8px",justifyContent:"center"},children:[e.jsxDEV("button",{className:"small-btn",onClick:this.copyErrorId,"aria-label":"Copy error id",children:this.state.copied?"COPIED":"COPY ID"},void 0,!1,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/ErrorBoundary.jsx",lineNumber:160,columnNumber:15},this),e.jsxDEV("a",{href:o,onClick:r=>{typeof window!="undefined"&&(r.preventDefault(),window.open(o,"_blank","noopener,noreferrer"))},className:"small-link",children:"VIEW STATUS"},void 0,!1,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/ErrorBoundary.jsx",lineNumber:167,columnNumber:15},this)]},void 0,!0,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/ErrorBoundary.jsx",lineNumber:152,columnNumber:13},this)]},void 0,!0,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/ErrorBoundary.jsx",lineNumber:146,columnNumber:11},this),e.jsxDEV("div",{className:"action-panel",children:[e.jsxDEV("button",{className:"cyber-btn primary",onClick:this.handleGoHome,children:[e.jsxDEV("span",{className:"btn-text",children:"RETURN HOME"},void 0,!1,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/ErrorBoundary.jsx",lineNumber:185,columnNumber:15},this),e.jsxDEV("div",{className:"btn-glow"},void 0,!1,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/ErrorBoundary.jsx",lineNumber:186,columnNumber:15},this)]},void 0,!0,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/ErrorBoundary.jsx",lineNumber:184,columnNumber:13},this),e.jsxDEV("button",{className:"cyber-btn primary",onClick:this.openModal,children:[e.jsxDEV("span",{className:"btn-text",children:"📊 VIEW LOGS"},void 0,!1,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/ErrorBoundary.jsx",lineNumber:190,columnNumber:15},this),e.jsxDEV("div",{className:"btn-glow"},void 0,!1,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/ErrorBoundary.jsx",lineNumber:191,columnNumber:15},this)]},void 0,!0,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/ErrorBoundary.jsx",lineNumber:189,columnNumber:13},this)]},void 0,!0,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/ErrorBoundary.jsx",lineNumber:183,columnNumber:11},this),this.state.showModal&&e.jsxDEV("div",{className:"space-modal-backdrop",onClick:this.closeModal,children:e.jsxDEV("div",{className:"space-modal",onClick:r=>r.stopPropagation(),children:[e.jsxDEV("div",{className:"space-modal-header",children:[e.jsxDEV("h2",{children:"⚙ Error Diagnostics ⚙"},void 0,!1,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/ErrorBoundary.jsx",lineNumber:200,columnNumber:19},this),e.jsxDEV("button",{className:"space-modal-close",onClick:this.closeModal,children:"✖"},void 0,!1,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/ErrorBoundary.jsx",lineNumber:201,columnNumber:19},this)]},void 0,!0,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/ErrorBoundary.jsx",lineNumber:199,columnNumber:17},this),e.jsxDEV("div",{className:"space-modal-content",children:[e.jsxDEV("div",{className:"space-log-line",children:[e.jsxDEV("span",{className:"space-log-label",children:"ERROR:"},void 0,!1,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/ErrorBoundary.jsx",lineNumber:210,columnNumber:21},this),e.jsxDEV("span",{className:"space-log-value",children:((i=this.state.error)==null?void 0:i.message)||"Unknown anomaly detected"},void 0,!1,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/ErrorBoundary.jsx",lineNumber:211,columnNumber:21},this)]},void 0,!0,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/ErrorBoundary.jsx",lineNumber:209,columnNumber:19},this),this.state.errorInfo&&e.jsxDEV("div",{className:"space-stack-container",children:[e.jsxDEV("div",{className:"space-stack-label",children:"STACK TRACE:"},void 0,!1,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/ErrorBoundary.jsx",lineNumber:217,columnNumber:23},this),e.jsxDEV("div",{className:"space-stack-content",children:this.state.errorInfo.componentStack},void 0,!1,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/ErrorBoundary.jsx",lineNumber:218,columnNumber:23},this)]},void 0,!0,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/ErrorBoundary.jsx",lineNumber:216,columnNumber:21},this)]},void 0,!0,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/ErrorBoundary.jsx",lineNumber:208,columnNumber:17},this)]},void 0,!0,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/ErrorBoundary.jsx",lineNumber:198,columnNumber:15},this)},void 0,!1,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/ErrorBoundary.jsx",lineNumber:197,columnNumber:13},this),e.jsxDEV("div",{className:"footer-info",children:[e.jsxDEV("div",{className:"footer-line",children:["REF: ",this.state.errorId]},void 0,!0,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/ErrorBoundary.jsx",lineNumber:229,columnNumber:13},this),e.jsxDEV("div",{className:"footer-line",children:"AWAITING SYSTEM RECOVERY..."},void 0,!1,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/ErrorBoundary.jsx",lineNumber:230,columnNumber:13},this)]},void 0,!0,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/ErrorBoundary.jsx",lineNumber:228,columnNumber:11},this)]},void 0,!0,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/ErrorBoundary.jsx",lineNumber:123,columnNumber:9},this),e.jsxDEV("style",{children:`
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
        `},void 0,!1,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/ErrorBoundary.jsx",lineNumber:235,columnNumber:9},this)]},void 0,!0,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/ErrorBoundary.jsx",lineNumber:95,columnNumber:7},this)}}function N(){return e.jsxDEV("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden",children:[e.jsxDEV("div",{className:"absolute inset-0 opacity-10",children:e.jsxDEV("div",{className:"absolute inset-0",style:{backgroundImage:"linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)",backgroundSize:"50px 50px"}},void 0,!1,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/LoadingWindow.jsx",lineNumber:8,columnNumber:9},this)},void 0,!1,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/LoadingWindow.jsx",lineNumber:7,columnNumber:7},this),e.jsxDEV("div",{className:"absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"},void 0,!1,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/LoadingWindow.jsx",lineNumber:19,columnNumber:7},this),e.jsxDEV("div",{className:"absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"},void 0,!1,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/LoadingWindow.jsx",lineNumber:20,columnNumber:7},this),e.jsxDEV("div",{className:"relative z-10 w-full max-w-md",children:e.jsxDEV("div",{className:"group",children:[e.jsxDEV("div",{className:"flex justify-center mb-8",children:e.jsxDEV("div",{className:"relative w-20 h-20",children:[e.jsxDEV("div",{className:"absolute inset-0 rounded-full border-2 border-transparent border-t-purple-400 border-r-pink-400 animate-spin"},void 0,!1,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/LoadingWindow.jsx",lineNumber:29,columnNumber:15},this),e.jsxDEV("div",{className:"absolute inset-2 rounded-full border-2 border-transparent border-b-pink-400 border-l-purple-400 animate-spin",style:{animationDirection:"reverse",animationDuration:"1.5s"}},void 0,!1,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/LoadingWindow.jsx",lineNumber:31,columnNumber:15},this),e.jsxDEV("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsxDEV(E,{className:"w-8 h-8 text-purple-400",fill:"currentColor"},void 0,!1,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/LoadingWindow.jsx",lineNumber:40,columnNumber:17},this)},void 0,!1,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/LoadingWindow.jsx",lineNumber:39,columnNumber:15},this)]},void 0,!0,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/LoadingWindow.jsx",lineNumber:27,columnNumber:13},this)},void 0,!1,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/LoadingWindow.jsx",lineNumber:26,columnNumber:11},this),e.jsxDEV("div",{className:"text-center",children:e.jsxDEV("div",{className:"inline-flex items-center justify-center space-x-2",children:[e.jsxDEV("span",{className:"text-purple-300/70 text-sm",children:"Initializing"},void 0,!1,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/LoadingWindow.jsx",lineNumber:48,columnNumber:15},this),e.jsxDEV("span",{className:"inline-flex space-x-1",children:[e.jsxDEV("span",{className:"w-2 h-2 bg-purple-400 rounded-full animate-bounce",style:{animationDelay:"0s"}},void 0,!1,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/LoadingWindow.jsx",lineNumber:50,columnNumber:17},this),e.jsxDEV("span",{className:"w-2 h-2 bg-pink-400 rounded-full animate-bounce",style:{animationDelay:"0.15s"}},void 0,!1,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/LoadingWindow.jsx",lineNumber:54,columnNumber:17},this),e.jsxDEV("span",{className:"w-2 h-2 bg-purple-400 rounded-full animate-bounce",style:{animationDelay:"0.3s"}},void 0,!1,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/LoadingWindow.jsx",lineNumber:58,columnNumber:17},this)]},void 0,!0,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/LoadingWindow.jsx",lineNumber:49,columnNumber:15},this)]},void 0,!0,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/LoadingWindow.jsx",lineNumber:47,columnNumber:13},this)},void 0,!1,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/LoadingWindow.jsx",lineNumber:46,columnNumber:11},this)]},void 0,!0,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/LoadingWindow.jsx",lineNumber:24,columnNumber:9},this)},void 0,!1,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/LoadingWindow.jsx",lineNumber:23,columnNumber:7},this),e.jsxDEV("style",{children:`
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
      `},void 0,!1,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/LoadingWindow.jsx",lineNumber:69,columnNumber:7},this)]},void 0,!0,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/components/common/LoadingWindow.jsx",lineNumber:5,columnNumber:5},this)}const k=h.lazy(()=>R(()=>import("./SystemGuard-C6ZkGetX.js"),__vite__mapDeps([0,1,2]))),G=y([{path:"*",element:e.jsxDEV(T,{children:e.jsxDEV(k,{},void 0,!1,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/AOS.jsx",lineNumber:21,columnNumber:11},void 0)},void 0,!1,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/AOS.jsx",lineNumber:20,columnNumber:9},void 0),HydrateFallback:e.jsxDEV(N,{},void 0,!1,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/AOS.jsx",lineNumber:24,columnNumber:24},void 0)}],{future:{v7_startTransition:!0}});S.createRoot(document.getElementById("ajayos")).render(e.jsxDEV(v.StrictMode,{children:e.jsxDEV(h.Suspense,{fallback:e.jsxDEV(N,{},void 0,!1,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/AOS.jsx",lineNumber:37,columnNumber:26},void 0),children:e.jsxDEV(A,{router:G},void 0,!1,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/AOS.jsx",lineNumber:38,columnNumber:5},void 0)},void 0,!1,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/AOS.jsx",lineNumber:37,columnNumber:6},void 0)},void 0,!1,{fileName:"D:/Github/AOS/AOS/FRONTEND/auth/src/AOS.jsx",lineNumber:36,columnNumber:3},void 0));export{N as L};
