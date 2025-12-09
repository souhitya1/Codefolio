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
  { q: "1. What is CSS?", a: "Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of HTML documents—layout, colors, fonts, and responsive behavior.", code: null },
  { q: "2. How do you include CSS in an HTML page?", a: "You can inline styles, include a <style> block in the head, or link an external stylesheet with <link rel=\"stylesheet\" href=\"styles.css\">.", code: `<link rel=\"stylesheet\" href=\"styles.css\">` },
  { q: "3. What is the Cascade in CSS?", a: "The cascade determines which rules apply when multiple selectors target the same element: importance (!important), specificity, source order, and origin.", code: null },
  { q: "4. How does specificity work?", a: "Specificity is calculated from selector types: inline styles > IDs > classes/attributes/pseudo-classes > elements/pseudo-elements. Higher specificity wins.", code: null },
  { q: "5. What is the box model?", a: "Every element is a box with content, padding, border, and margin. box-sizing controls whether width/height include padding and border.", code: `/* default */\ndiv{ box-sizing: content-box; }\n/* easier layout */\n*{ box-sizing: border-box; }` },
  { q: "6. How to center an element horizontally and vertically?", a: "Use Flexbox or Grid: display:flex; align-items:center; justify-content:center; for a container.", code: `.center{ display:flex; align-items:center; justify-content:center; }` },
  { q: "7. What is Flexbox?", a: "A one-dimensional layout module for arranging items along a row or column with powerful alignment and distribution features.", code: `.container{ display:flex; gap:12px; }\n.item{ flex:1 }` },
  { q: "8. What is CSS Grid?", a: "A two-dimensional layout system for rows and columns; great for complex page layouts.", code: `.grid{ display:grid; grid-template-columns: repeat(3, 1fr); gap:16px }` },
  { q: "9. Difference between margin and padding?", a: "Padding is inside the element (between content and border); margin is outside (space between elements).", code: null },
  { q: "10. How to make responsive designs?", a: "Use flexible layouts, relative units (%, rem, vw), media queries, and responsive images (srcset, picture).", code: `@media (max-width:600px){ .sidebar{ display:none } }` },

  { q: "11. What are media queries?", a: "CSS rules that apply conditionally based on viewport features like width, height, resolution, or prefers-reduced-motion.", code: `@media (min-width:1024px){ .layout{ max-width:1000px } }` },
  { q: "12. What is rem and em?", a: "rem is relative to the root (<html>) font-size; em is relative to the current element's font-size—useful for scalable components.", code: `html{ font-size:16px }\nh1{ font-size:2rem }` },
  { q: "13. How to use CSS variables (custom properties)?", a: "Define them with --name and access via var(--name); they cascade and can be updated at runtime.", code: `:root{ --accent:#06b6d4 }\n.btn{ background:var(--accent) }` },
  { q: "14. What is pseudo-class vs pseudo-element?", a: "Pseudo-classes (e.g., :hover, :active) target state; pseudo-elements (e.g., ::before, ::after) create virtual elements.", code: `.link:hover{ color:#06b6d4 }\n.card::before{ content:''; display:block }` },
  { q: "15. How to create a gradient background?", a: "Use linear-gradient or radial-gradient as background-image.", code: `background: linear-gradient(90deg, #06b6d4, #7c3aed);` },
  { q: "16. How to hide an element visually but keep it accessible?", a: "Use techniques like sr-only (screen-reader only) CSS instead of display:none which removes it from assistive tech.", code: `.sr-only{ position:absolute; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden; clip:rect(0,0,0,0); border:0 }` },
  { q: "17. What is z-index?", a: "Controls stacking order for positioned elements; higher z-index appears on top within the same stacking context.", code: `.modal{ position:fixed; z-index:1000 }` },
  { q: "18. How to create CSS animations?", a: "Define @keyframes and use animation property on the element.", code: `@keyframes fade{ from{opacity:0} to{opacity:1} }\n.fade-in{ animation: fade 400ms ease forwards }` },
  { q: "19. How to transition properties smoothly?", a: "Use transition with property, duration, timing-function to animate between states.", code: `.btn{ transition: transform .2s ease }\n.btn:hover{ transform: translateY(-3px) }` },
  { q: "20. What is transform and how is it different from position?", a: "transform applies visual transforms (translate, scale, rotate) without affecting document flow; position changes layout flow if static/relative/absolute/fixed/sticky.", code: `.box{ transform: rotate(5deg) }` },

  { q: "21. How to do responsive typography?", a: "Use fluid sizing with clamp(), vw units, or scale with rem and media queries.", code: `h1{ font-size: clamp(1.5rem, 2.5vw, 3rem); }` },
  { q: "22. What is object-fit?", a: "Controls how replaced elements like images or videos fit their container (cover, contain, fill).", code: `img{ width:100%; height:200px; object-fit:cover }` },
  { q: "23. How to vertically align text?", a: "Use line-height to match the container height or use flexbox align-items:center.", code: `.vcenter{ display:flex; align-items:center }` },
  { q: "24. What are CSS selectors?", a: "Patterns used to select elements: type, class, id, attribute, combinators, pseudo-classes, pseudo-elements.", code: `/* attribute selector */\na[href^=\"https\"]{ color:blue }` },
  { q: "25. How to create a responsive grid with auto-fill/auto-fit?", a: "Use grid-template-columns with repeat(auto-fit/auto-fill, minmax(...)) for responsive columns.", code: `.grid{ display:grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap:16px }` },

];

export default function Cssqna() {
  const [index, setIndex] = useState(()=>{
    const savedIndex = localStorage.getItem("currentIndexcss");
    return savedIndex ? Number(savedIndex) : 0;
  })
  const [showAnswer, setShowAnswer] = useState(false);
  const [nextDisabled, setNextDisabled] = useState(Array(qnaList.length).fill(false))
  const [isFlipping, setIsFlipping] = useState(false);
  const[csspro,setcsspro]= useState(Number(localStorage.getItem("currentcssProgress"))||0);

  useEffect(()=>{
 const progress = ((index + 1) / qnaList.length) * 100;
 setcsspro(progress);
 localStorage.setItem("currentIndexcss",index);
    localStorage.setItem("currentcssProgress",progress);
  },[index]);

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
            background: 'linear-gradient(135deg, #1f1fdaff, #866ff5ff)',
            padding: '8px 24px',
            borderRadius: '50px',
            marginBottom: 16,
            fontSize: 12,
            fontWeight: 900,
            letterSpacing: 1,
            textTransform: 'uppercase',
            boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
            color: "white"
          }}>
            CSS Mastery Quiz
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
            CSS Flashcards
          </h1>
          <p style={{ 
            opacity: 0.7, 
            fontSize: 16,
            maxWidth: 500,
            margin: '0 auto'
          }}>
            Master CSS fundamentals one card at a time
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
              {Math.round(csspro)}%
            </span>
          </div>
          <ProgressBar progress={csspro} />
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