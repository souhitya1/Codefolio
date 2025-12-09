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
  { q: "1. What is HTML?", a: "HTML (HyperText Markup Language) is the standard markup language used to create web pages and structure content on the web.", code: null },
  { q: "2. What does <!DOCTYPE html> do?", a: "Declares the document is HTML5 so browsers render the page in standards mode.", code: "<!DOCTYPE html>" },
  { q: "3. How do you create a link?", a: "Use the anchor tag with an href attribute.", code: `<a href="https://example.com" target="_blank" rel="noopener noreferrer">Visit example</a>` },
  { q: "4. How do you add an image and why alt matters?", a: "Use <img> with src and alt; alt is important for accessibility and when images fail to load.", code: `<img src="/images/photo.jpg" alt="A descriptive caption" loading="lazy" />` },
  { q: "5. What are semantic elements?", a: "Elements like <header>, <nav>, <main>, <article>, <section>, and <footer> that describe the meaning of content.", code: null },
  { q: "6. How to create a list (ordered and unordered)?", a: "Use <ol> for ordered lists and <ul> for unordered lists with <li> items.", code: `<ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n</ul>` },
  { q: "7. How to create a table?", a: "Use <table> with <thead>, <tbody>, <tr>, <th>, and <td> to represent tabular data.", code: `<table>\n  <thead><tr><th>Name</th><th>Age</th></tr></thead>\n  <tbody><tr><td>Alice</td><td>25</td></tr></tbody>\n</table>` },
  { q: "8. How to make text bold or italic?", a: "Use semantic tags: <strong> for important text (bold) and <em> for emphasis (italic).", code: `<p><strong>Important</strong> and <em>emphasized</em> text.</p>` },
  { q: "9. How do you include CSS and JS files in HTML?", a: "Link CSS in <head> and include JS with <script>; prefer defer for non-blocking behavior.", code: `<link rel="stylesheet" href="styles.css">\n<script src="app.js" defer></script>` },
  { q: "10. What is the viewport meta tag?", a: "Makes pages responsive on mobile devices by controlling layout viewport and scale.", code: `<meta name="viewport" content="width=device-width, initial-scale=1">` },
  { q: "11. How to make inputs?", a: "Use the input element with input controls; use method and action attributes to control submission.", code: `<label for="email">Email</label>\n<input id="email" name="email" type="email" required />\n<button type="submit">Send</button>` },
  { q: "12. How to prevent page reload on submit (AJAX)?", a: "Use JavaScript to call event.preventDefault() and submit via fetch/XHR.", code: `document.querySelector('btn').addEventListener('click', async (e) => {\n  e.preventDefault();\n  const fd = new FormData(e.target);\n  await fetch('/submit', { method: 'POST', body: fd });\n});` },
  { q: "13. Input types introduced in HTML5", a: "HTML5 added types like email, url, number, date, time, range, color, file, and more for better UX and validation.", code: `<input type="email" required />\n<input type="date">` },
  { q: "14. How to upload files?", a: "Use input type file and set enctype to multipart/form-data when sending files to server.", code: `<input type="file" name="photo">` },
  { q: "15. What is the alt attribute for images?", a: "Accessibility text used by screen readers and shown when images fail to load.", code: null },
  { q: "16. How to create dropdown/select menus?", a: "Use <select> with <option> children and optionally optgroup for grouping.", code: `<label for="country">Country</label>\n<select id="country">\n  <option value="in">India</option>\n  <option value="us">United States</option>\n</select>` },
  { q: "17. What is the difference between GET and POST?", a: "GET appends data to the URL and is used for retrieval; POST sends data in the request body and is used for changes or large payloads.", code: null },
  { q: "18. How to use labels for accessibility?", a: "Associate <label for=\"id\"> with inputs to improve screen reader support and click area.", code: `<label for="name">Name</label>\n<input id="name" name="name">` },
  { q: "19. What is ARIA and when to use it?", a: "ARIA attributes (aria-label, aria-hidden, role, etc.) improve accessibility when native semantics are insufficient.", code: `<div role="navigation" aria-label="Main menu">...</div>` },
  { q: "20. How to make responsive images?", a: "Use srcset and picture to provide different sizes/formats for different viewports and DPR.", code: `<picture>\n  <source srcset="image.avif" type="image/avif">\n  <source srcset="image.webp" type="image/webp">\n  <img src="image.jpg" alt="Example" loading="lazy">\n</picture>` },
  { q: "21. What is the picture element?", a: "Provides multiple sources for an image depending on media queries or supported formats, improving performance.", code: null },
  { q: "22. How to lazy-load images?", a: "Add loading=\"lazy\" to img or iframe to defer offscreen loading.", code: `<img src="large.jpg" loading="lazy" alt="...">` },
  { q: "23. How to use srcset for responsive images?", a: "Provide a comma-separated list of image candidates with widths; the browser picks the best one.", code: `<img src="small.jpg" srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w" sizes="(max-width:600px) 480px, 800px" alt="...">` },
  { q: "24. What is the canvas element used for?", a: "A drawable area controlled by JavaScript for 2D/3D graphics, animations, and games.", code: `<canvas id="c" width="300" height="150"></canvas>\n<script>\nconst ctx = document.getElementById('c').getContext('2d');\nctx.fillStyle = 'orange';\nctx.fillRect(10,10,100,50);\n</script>` },
  { q: "25. What is SVG and when to use it?", a: "SVG is XML-based vector graphics ideal for icons and illustrations that scale without quality loss.", code: `<svg width="100" height="100" viewBox="0 0 100 100">\n  <circle cx="50" cy="50" r="40" fill="#38bdf8" />\n</svg>` }
];

export default function Htmlqna() {
  const [index, setIndex] = useState(()=>{
    const savedIndex = localStorage.getItem("currentIndexhtml");
    return savedIndex ? Number(savedIndex) : 0;
  })
  const [showAnswer, setShowAnswer] = useState(false);
  const [nextDisabled, setNextDisabled] = useState(() => {
  const saved = localStorage.getItem("nextDisabled");
  return saved ? JSON.parse(saved) : Array(qnaList.length).fill(false);
});

  const [isFlipping, setIsFlipping] = useState(false);
  const [htmlpro, sethtmlpro] = useState(() => {
  const saved = localStorage.getItem("currenthtmlProgress");
  return saved ? Number(saved) : 0;
});

  useEffect(()=>{
    const progress = ((index + 1) / qnaList.length) * 100;
    sethtmlpro(progress);
    localStorage.setItem("currentIndexhtml",index);
    localStorage.setItem("currenthtmlProgress",progress);
  },[index])

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
    setIndex(index - 1);
    setShowAnswer(false);
    setIsFlipping(false);
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
            background: 'linear-gradient(135deg, #ef8222ff, #f6b85cff)',
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
            HTML Mastery Quiz
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
            HTML Flashcards
          </h1>
          <p style={{ 
            opacity: 0.7, 
            fontSize: 16,
            maxWidth: 500,
            margin: '0 auto'
          }}>
            Master HTML fundamentals one card at a time
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
              {Math.round(htmlpro)}%
            </span>
          </div>
          <ProgressBar progress={htmlpro} />
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