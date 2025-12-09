import React, { useEffect, useState } from "react";

const ProgressBar = ({ progress }) => (
  <div style={{ 
    width: '100%', 
    background: 'linear-gradient(90deg, #1e293b 0%, #334155 100%)', 
    borderRadius: 12, 
    overflow: 'hidden', 
    height: 10,
    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3)'
  }}>
    <div style={{ 
      width: `${progress}%`, 
      background: 'linear-gradient(90deg, #3b82f6 0%, #60a5fa 100%)', 
      height: '100%', 
      transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)'
    }} />
  </div>
);

const qnaList = [
  {
    q: "What is the purpose of rel='noopener' and rel='noreferrer' on external links?",
    a: "rel='noopener' prevents the new page from getting a reference to window.opener (security/performance). rel='noreferrer' also prevents sending the Referer header. Use them when opening untrusted pages with target='_blank'.",
    code: `<a href="https://example.com" target="_blank" rel="noopener noreferrer">External</a>`
  },
  {
    q: "Explain critical CSS and a technique to deliver it.",
    a: "Critical CSS is the subset of styles needed to render above-the-fold content quickly. Technique: inline those critical rules in <head> and load the rest asynchronously (link rel='preload' as='style' then switch rel to 'stylesheet' on load).",
    code: `<!-- inline critical CSS in head -->\n<style>/* critical rules */</style>\n<link rel="preload" href="/styles.css" as="style" onload="this.rel='stylesheet'">`
  },
  {
    q: "What is the difference between <picture> and srcset?",
    a: "<picture> lets you provide multiple <source> tags with media queries or types (format selection). srcset is for the <img> element to offer resolution/width candidates. Use <picture> for format or art-direction switches, srcset for responsive sizes.",
    code: `<picture>\n  <source srcset="hero.webp" type="image/webp">\n  <img src="hero.jpg" srcset="hero-800.jpg 800w, hero-1200.jpg 1200w" sizes="(max-width:600px) 480px, 800px" alt="Hero">\n</picture>`
  },

  /* CSS */
  {
    q: "Explain CSS containment and when to use it.",
    a: "CSS 'contain' hints the browser that an element's layout/paint/size are independent of the rest of the page, so the browser can limit reflow/paint work. Use for complex widgets/components to improve rendering performance: e.g., contain: layout paint;",
    code: `/* isolate a heavy component */\n.component { contain: layout paint; }`
  },
  {
    q: "How does CSS specificity work? Give an example where !important won't win.",
    a: "Specificity follows inline styles > IDs > classes/attributes/pseudo-classes > element selectors. !important overrides normal rules, but a later !important with higher specificity wins. User-agent or user styles with !important can override author rules in some contexts.",
    code: `/* later !important overrides earlier */\n.a { color: red !important; }\ndiv .b { color: blue !important; } /* if this comes later and has equal or higher specificity it wins */`
  },
  {
    q: "What is the difference between em and rem units? When to use each?",
    a: "em is relative to the computed font-size of the element (cascades). rem is relative to the root (<html>) font-size. Use rem for consistent scaling across layout; em for component-relative sizing (e.g., spacing inside a component).",
    code: `html { font-size: 16px; }\nh1 { font-size: 2rem; } /* 32px */\n.btn { padding: 0.5em 1em; } /* relative to .btn's font-size */`
  },
  {
    q: "How to avoid Cumulative Layout Shift (CLS) with images and fonts?",
    a: "For images: set width & height or use aspect-ratio to reserve space. For web fonts: use font-display: swap and preload critical fonts to avoid invisible text reflows.",
    code: `<img src="hero.jpg" width="1200" height="600" alt="...">\n@font-face { font-family:'Inter'; src: url('inter.woff2'); font-display:swap; }`
  },

  /* JS */
  {
    q: "Explain event loop, microtasks and macrotasks with an example.",
    a: "JS runs tasks: synchronous code, then microtasks (Promises, MutationObserver), then macrotasks (setTimeout, I/O). Microtasks run before the next macrotask—useful to schedule immediate follow-ups.",
    code: `console.log('start');\nsetTimeout(() => console.log('timer'), 0);\nPromise.resolve().then(() => console.log('promise'));\nconsole.log('end');\n// Output: start, end, promise, timer`
  },
  {
    q: "What is the difference between == and === in JS? When might == be useful (and dangerous)?",
    a: "=== checks strict equality without coercion; == coerces operands. == can be useful for quick truthy comparisons but is dangerous due to surprising coercions ('' == 0 true). Prefer === to avoid bugs.",
    code: `0 == '0' // true\n0 === '0' // false`
  },
  {
    q: "Explain hoisting and temporal dead zone (TDZ).",
    a: "Function declarations and var-declared variables are hoisted (vars initialized to undefined). let/const are hoisted but not initialized — accessing them before declaration throws (TDZ).",
    code: `console.log(a); var a = 1; // undefined\nconsole.log(b); let b = 2; // ReferenceError (TDZ)`
  },
  {
    q: "What are closures and a common memory-leak pitfall in the browser?",
    a: "A closure captures variables from an outer scope. Memory leaks happen when closures retain large DOM references (e.g., long-lived timers holding onto nodes). Detach listeners/timers on teardown to avoid leaks.",
    code: `function makeCounter(){ let count = 0; return () => ++count; }\nconst c = makeCounter();`
  },
  {
    q: "Explain module patterns: CommonJS vs ES Modules and a key difference at runtime.",
    a: "CommonJS (require/exports) loads modules synchronously and exports a mutable object. ES Modules (import/export) are statically analyzable and loaded async-ish; exports are live bindings reflecting updates.",
    code: `// ES Module\nexport let x = 1; setTimeout(()=> x = 2,1000);\n// import receives live binding of x`
  },
  {
    q: "What is debouncing vs throttling and when to use each?",
    a: "Debounce: group many calls into one after inactivity (useful for search input). Throttle: limit calls to at most once per interval (useful on scroll/resize).",
    code: `function debounce(fn, ms=300){ let t; return (...a)=>{ clearTimeout(t); t=setTimeout(()=>fn(...a), ms); }; }\nfunction throttle(fn, ms=200){ let last=0; return (...a)=>{ const now=Date.now(); if(now-last>ms){ last=now; fn(...a); } } }`
  },
  {
    q: "What are WeakMap and WeakSet and why are they useful?",
    a: "WeakMap/WeakSet hold weak references to objects—entries are GC-able when object has no other references. Useful for caching metadata keyed by DOM nodes without preventing their GC.",
    code: `const cache = new WeakMap();\nlet el = document.getElementById('x');\ncache.set(el, { data: 123 });\n// if el is removed and no other refs exist, entry can be collected`
  },
  {
    q: "Explain 'this' differences in arrow functions vs normal functions.",
    a: "Normal functions' 'this' depends on how the function is called (call site). Arrow functions capture 'this' lexically from the surrounding scope. Use arrows for callbacks that should keep the outer 'this'.",
    code: `const obj = { v:1, f(){ setTimeout(function(){ console.log(this); },0); }, g(){ setTimeout(()=>console.log(this),0); } }`
  },
  {
    q: "What is event delegation and why is it useful?",
    a: "Attach a single handler on a common ancestor and detect target via event.target. Useful to handle many child elements efficiently and for dynamic content.",
    code: `document.querySelector('#list').addEventListener('click', (e)=>{ const li = e.target.closest('li'); if(li) handle(li); });`
  },
  {
    q: "How does garbage collection work in JS (brief) and what leads to leaks?",
    a: "Most engines use mark-and-sweep: reachable objects are kept; unreachable are collected. Leaks occur from unintended global refs, lingering timers/listeners, closures holding big structures, or DOM retained in JS objects.",
    code: `// avoid retaining DOM nodes in long-lived objects\nlet cache = {}; // if cache keeps node refs, GC won't reclaim them`
  },

  /* Mixed advanced topics */
  {
    q: "How would you implement an accessible custom dropdown (keyboard + ARIA)?",
    a: "Use role='combobox' or role='listbox' patterns, manage focus, trap arrow keys for selection, update aria-activedescendant, and link input with list via aria-controls and aria-expanded. Ensure tab focus and screen-reader labels.",
    code: `/* pseudo */\n<div role="combobox" aria-expanded="false" aria-controls="list" tabindex="0">...</div>\n<ul id="list" role="listbox">...</ul>`
  },
  {
    q: "Describe the Performance API you can use to measure page paint metrics.",
    a: "Use Performance API: performance.getEntriesByType('navigation'), performance.getEntriesByType('paint') for 'first-paint'/'first-contentful-paint', and PerformanceObserver for streaming metrics.",
    code: `new PerformanceObserver((list)=> console.log(list.getEntries())).observe({type:'paint', buffered:true});`
  },
  {
    q: "Explain how to make a SPA route change without losing scroll position and how to restore it.",
    a: "Save scroll position before route change (history.state or a map keyed by route), then restore on navigation. Use history.replaceState to persist positions and window.scrollTo on load.",
    code: `history.replaceState({...history.state, scroll: window.scrollY}, '');\n// later: window.scrollTo(0, history.state.scroll || 0);`
  },
  {
    q: "How do you securely include third-party scripts? Name at least 2 measures.",
    a: "Use Subresource Integrity (SRI) with crossorigin, set strict Content-Security-Policy limiting script-src, load scripts with async/defer, sandbox iframes for isolation, and review vendor code.",
    code: `<script src="https://cdn.com/lib.js" integrity="sha384-..." crossorigin="anonymous" defer></script>`
  },
  {
    q: "What is CSP nonce and how does it help mitigate XSS?",
    a: "A nonce is a per-response random token used in CSP (script-src 'nonce-...') to allow inline scripts with matching nonce while blocking other inline scripts—reduces XSS risk even if attackers inject inline code without the nonce.",
    code: `// server renders: <script nonce="RANDOM">/* inline */</script>\n// header: Content-Security-Policy: script-src 'nonce-RANDOM' 'strict-dynamic'`
  },
  {
    q: "Explain progressive hydration / partial hydration for large client apps.",
    a: "Instead of hydrating the full app at once, progressive/partial hydration hydrates interactive parts on demand (e.g., on interaction or viewport). This reduces initial JS cost and speeds up interactivity.",
    code: `// conceptual: server renders full HTML, client hydrates only components when needed`
  },
  {
    q: "How does CSS Houdini help developers, and name one API it provides?",
    a: "Houdini exposes low-level CSS engine hooks so authors can write JS that integrates with the rendering pipeline. Example API: Paint API (registerPaint) to create custom paint worklets.",
    code: `// register a paint worklet (conceptual)\nCSS.paintWorklet.addModule('/paint.js');`
  }
];

export default function Htmlcssjsqna() {
  const [index, setIndex] = useState(()=>{
    const savedIndex = localStorage.getItem("currentIndexmixed");
    return savedIndex ? Number(savedIndex) : 0;
  })
  const [showAnswer, setShowAnswer] = useState(false);
  const [nextDisabled, setNextDisabled] = useState(Array(qnaList.length).fill(false))
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(()=>{
    localStorage.setItem("currentIndexmixed",index);
  },[index]);

  const progress = ((index + 1) / qnaList.length) * 100;

  function handleNext() {
    if (index < qnaList.length - 1) {
      const updated = [...nextDisabled];
      updated[index] = true;
      setNextDisabled(updated);
      setIndex(index + 1);
      setShowAnswer(false);
      setIsFlipping(false);
          localStorage.setItem("nextDisabled", JSON.stringify(updated)); // ✅ save

    }
  }

  function handlePrev() {
    if (index > 0) {
      const updated = [...nextDisabled];
      updated[index - 1] = false;
      setNextDisabled(updated);
      setIndex(index - 1);
      setShowAnswer(false);
      setIsFlipping(false);
          localStorage.setItem("nextDisabled", JSON.stringify(updated)); // ✅ save

    }
  }

  function handleReveal() {
    setIsFlipping(true);
    setTimeout(() => {
      setShowAnswer(!showAnswer);
      setIsFlipping(false);
    }, 150);
  }

  const item = qnaList[index];

  return (
    <div style={{ 
      padding: '24px 16px', 
      fontFamily: 'Inter, system-ui, Arial, sans-serif', 
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
      minHeight: '100vh', 
      color: '#e6eef8',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated background elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(235, 122, 16, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(40px)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(40px)',
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <header style={{ marginBottom: 40, textAlign: 'center' }}>
          <div style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #eeebe8ff, #b3b0acff)',
            padding: '8px 24px',
            borderRadius: '50px',
            marginBottom: 16,
            fontSize: 12,
            fontWeight: 900,
            letterSpacing: 1,
            textTransform: 'uppercase',
            boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
            color: "black"
          }}>
            HTML,CSS and JS Mixed Mastery Quiz
          </div>
          <h1 style={{ 
            fontSize: 42, 
            margin: '0 0 12px 0',
            background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 800,
            letterSpacing: '-1px'
          }}>
            Mixed Flashcards
          </h1>
          <p style={{ 
            opacity: 0.7, 
            fontSize: 16,
            maxWidth: 500,
            margin: '0 auto'
          }}>
            Master HTML, CSS and JS mixed fundamentals ,one card at a time
          </p>
        </header>

        <div style={{ marginBottom: 40 }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 12
          }}>
            <span style={{ fontSize: 13, fontWeight: 600, opacity: 0.8 }}>
              Question {index + 1} of {qnaList.length}
            </span>
            <span style={{ 
              fontSize: 13, 
              fontWeight: 700,
              color: '#60a5fa'
            }}>
              {Math.round(progress)}%
            </span>
          </div>
          <ProgressBar progress={progress} />
        </div>

        <div style={{ 
          background: 'linear-gradient(145deg, #1e293b, #0f172a)',
          padding: 48, 
          borderRadius: 24, 
          boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)',
          minHeight: 320,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          border: '1px solid rgba(59, 130, 246, 0.1)',
          transform: isFlipping ? 'scale(0.98)' : 'scale(1)',
          transition: 'transform 0.15s ease',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Card glow effect */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: showAnswer 
              ? 'linear-gradient(90deg, transparent, #8b5cf6, transparent)' 
              : 'linear-gradient(90deg, transparent, #3b82f6, transparent)',
            transition: 'background 0.3s ease'
          }} />

          <div>
            <div style={{ 
              display: 'inline-block',
              fontSize: 11, 
              textTransform: 'uppercase', 
              letterSpacing: 1.5, 
              background: showAnswer 
                ? 'linear-gradient(135deg, #8b5cf6, #a78bfa)' 
                : 'linear-gradient(135deg, #3b82f6, #60a5fa)',
              padding: '6px 16px',
              borderRadius: '50px',
              marginBottom: 24,
              fontWeight: 700,
              boxShadow: showAnswer 
                ? '0 4px 12px rgba(139, 92, 246, 0.3)' 
                : '0 4px 12px rgba(59, 130, 246, 0.3)',
              transition: 'all 0.3s ease'
            }}>
              {showAnswer ? '💡 Answer' : '❓ Question'}
            </div>
            
            {!showAnswer ? (
              <h2 style={{ 
                fontSize: 26, 
                lineHeight: 1.5, 
                margin: 0, 
                color: '#e0f2fe',
                fontWeight: 600
              }}>
                {item.q.replace(/^[0-9]+\. /, '')}
              </h2>
            ) : (
              <div>
                <p style={{ 
                  fontSize: 17, 
                  lineHeight: 1.7, 
                  margin: '0 0 20px 0', 
                  color: '#dbeafe'
                }}>
                  {item.a}
                </p>
                {item.code && (
                  <div style={{
                    background: 'linear-gradient(145deg, #020617, #0c1929)',
                    padding: 20,
                    borderRadius: 12,
                    border: '1px solid rgba(59, 130, 246, 0.2)',
                    boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.3)'
                  }}>
                    <div style={{
                      fontSize: 10,
                      textTransform: 'uppercase',
                      letterSpacing: 1,
                      color: '#60a5fa',
                      marginBottom: 8,
                      fontWeight: 700
                    }}>
                      Code Example
                    </div>
                    <pre style={{ 
                      margin: 0,
                      color: '#e0f2fe',
                      fontSize: 13,
                      lineHeight: 1.6,
                      overflowX: 'auto',
                      fontFamily: 'Monaco, Consolas, monospace'
                    }}>
                      <code>{item.code}</code>
                    </pre>
                  </div>
                )}
              </div>
            )}
          </div>

          <button 
            onClick={handleReveal}
            onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            style={{
              background: showAnswer 
                ? 'linear-gradient(135deg, #475569, #334155)' 
                : 'linear-gradient(135deg, #3b82f6, #2563eb)',
              color: 'white',
              padding: '16px 32px',
              borderRadius: '12px',
              border: 'none',
              cursor: 'pointer',
              fontSize: 16,
              fontWeight: 700,
              marginTop: 32,
              transition: 'all 0.2s ease',
              boxShadow: showAnswer 
                ? '0 8px 20px rgba(0,0,0,0.3)' 
                : '0 8px 20px rgba(59, 130, 246, 0.4)',
              textTransform: 'uppercase',
              letterSpacing: 0.5
            }}
          >
            {showAnswer ? '🔄 Hide Answer' : '✨ Reveal Answer'}
          </button>
        </div>

        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          marginTop: 32,
          gap: 16
        }}>
          <button 
            onClick={handlePrev}
            disabled={index === 0}
            onMouseEnter={(e) => !e.target.disabled && (e.target.style.transform = 'translateX(-4px)')}
            onMouseLeave={(e) => e.target.style.transform = 'translateX(0)'}
            style={{
              background: index === 0 
                ? 'linear-gradient(135deg, #1e293b, #0f172a)' 
                : 'linear-gradient(135deg, #334155, #1e293b)',
              color: 'white',
              padding: '16px 40px',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.1)',
              cursor: index === 0 ? 'not-allowed' : 'pointer',
              opacity: index === 0 ? 0.4 : 1,
              fontSize: 15,
              fontWeight: 700,
              flex: 1,
              transition: 'all 0.2s ease',
              boxShadow: index === 0 ? 'none' : '0 4px 12px rgba(0,0,0,0.3)',
              textTransform: 'uppercase',
              letterSpacing: 0.5
            }}
          >
            ← Previous
          </button>
          
          <button 
            onClick={handleNext}
            disabled={nextDisabled[index] || index === qnaList.length - 1}
            onMouseEnter={(e) => !e.target.disabled && (e.target.style.transform = 'translateX(4px)')}
            onMouseLeave={(e) => e.target.style.transform = 'translateX(0)'}
            style={{
              background: (nextDisabled[index] || index === qnaList.length - 1)
                ? 'linear-gradient(135deg, #1e293b, #0f172a)'
                : 'linear-gradient(135deg, #3b82f6, #2563eb)',
              color: 'white',
              padding: '16px 40px',
              borderRadius: '12px',
              border: (nextDisabled[index] || index === qnaList.length - 1) 
                ? '1px solid rgba(255,255,255,0.1)' 
                : 'none',
              cursor: (nextDisabled[index] || index === qnaList.length - 1) ? 'not-allowed' : 'pointer',
              opacity: (nextDisabled[index] || index === qnaList.length - 1) ? 0.4 : 1,
              fontSize: 15,
              fontWeight: 700,
              flex: 1,
              transition: 'all 0.2s ease',
              boxShadow: (nextDisabled[index] || index === qnaList.length - 1) 
                ? 'none' 
                : '0 4px 12px rgba(59, 130, 246, 0.4)',
              textTransform: 'uppercase',
              letterSpacing: 0.5
            }}
          >
            Next →
          </button>
        </div>

        {nextDisabled[index] && index < qnaList.length - 1 && (
          <div style={{ 
            textAlign: 'center', 
            marginTop: 24, 
            fontSize: 14,
            background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(59, 130, 246, 0.1))',
            padding: '12px 24px',
            borderRadius: '50px',
            display: 'inline-block',
            width: '100%',
            boxShadow: '0 4px 12px rgba(34, 197, 94, 0.2)',
            border: '1px solid rgba(34, 197, 94, 0.2)'
          }}>
            <span style={{ marginRight: 8 }}>✓</span>
            <span style={{ fontWeight: 600, color: '#86efac' }}>Question Reviewed</span>
          </div>
        )}

        {index === qnaList.length - 1 && nextDisabled[index] && (
          <div style={{ 
            textAlign: 'center', 
            marginTop: 24, 
            fontSize: 18,
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))',
            padding: '20px 32px',
            borderRadius: '16px',
            fontWeight: 700,
            color: '#c4b5fd',
            boxShadow: '0 8px 24px rgba(139, 92, 246, 0.3)',
            border: '1px solid rgba(139, 92, 246, 0.3)'
          }}>
            <div style={{ fontSize: 32, marginBottom: 8 }}>🎉</div>
            Congratulations! You've completed all flashcards!
          </div>
        )}
      </div>
    </div>
  );
}