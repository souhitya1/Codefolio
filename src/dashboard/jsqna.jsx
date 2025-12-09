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
  { q: "1. What is JavaScript?", a: "JavaScript is a versatile, high-level programming language used to make web pages interactive and dynamic.", code: null },
  { q: "2. Difference between var, let, and const?", a: "var is function-scoped, let and const are block-scoped. const cannot be reassigned.", code: "var x = 10; let y = 20; const z = 30;" },
  { q: "3. What are primitive data types in JS?", a: "String, Number, Boolean, Null, Undefined, Symbol, BigInt.", code: null },
  { q: "4. Difference between == and ===?", a: "== checks value with type coercion, === checks value and type strictly.", code: "5 == '5' // true\\n5 === '5' // false" },
  { q: "5. How do you create a function in JS?", a: "Functions can be declared, expressed, or arrow functions.", code: "function add(a,b){return a+b;}\\nconst sub = function(a,b){return a-b;}\\nconst mul = (a,b)=>a*b;" },
  { q: "6. What is a closure?", a: "Closure is when an inner function remembers variables from its outer scope even after the outer function has executed.", code: "function outer(){ let x=10; return function(){console.log(x);} }\\nconst fn = outer(); fn();" },
  { q: "7. What is hoisting?", a: "Hoisting moves declarations (not initializations) to the top of their scope.", code: "console.log(a); var a=5; // undefined due to hoisting" },
  { q: "8. What are arrow functions?", a: "A shorter syntax for writing functions introduced in ES6, with lexical this.", code: "const greet = name => console.log('Hello '+name);" },
  { q: "9. What is the difference between null and undefined?", a: "undefined means a variable is declared but not assigned; null is an intentional empty value.", code: null },
  { q: "10. What are template literals?", a: "Template literals allow string interpolation with backticks.", code: "const name='Souhitya'; console.log(`Hello ${name}`);" },
  { q: "11. What are objects in JS?", a: "Objects are collections of key-value pairs.", code: "const obj={name:'Alex', age:22};" },
  { q: "12. Difference between arrays and objects?", a: "Arrays are ordered collections (indexed), objects are key-value collections.", code: null },
  { q: "13. What is an IIFE?", a: "Immediately Invoked Function Expression runs as soon as it’s defined.", code: "(function(){console.log('IIFE');})();" },
  { q: "14. What is the difference between for...of and for...in?", a: "for...in iterates over keys, for...of iterates over values (iterables).", code: null },
  { q: "15. What is event bubbling?", a: "Event bubbling is when an event propagates from the target up through ancestors.", code: null },
  { q: "16. How do promises work?", a: "Promises represent eventual completion/failure of async operations.", code: "new Promise((res,rej)=>res(5)).then(v=>console.log(v));" },
  { q: "17. Difference between async and defer attributes in script?", a: "async loads script independently, executes when ready; defer executes after parsing HTML.", code: null },
  { q: "18. How to handle errors in JS?", a: "Use try...catch...finally for synchronous, and .catch for promises.", code: "try{throw Error('fail')}catch(e){console.log(e)}" },
  { q: "19. What are higher-order functions?", a: "Functions that take other functions as arguments or return them.", code: "[1,2,3].map(x=>x*2);" },
  { q: "20. What are callbacks?", a: "Functions passed as arguments to be executed later.", code: "setTimeout(()=>console.log('done'),1000);" },
  {q: ` Event Loop & Microtasks
What will be the output?`,
      code: `
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");
      `,
      a: `
Output:
A
D
C
B

Explanation:
- "A" and "D" run first (synchronous).
- "C" (Promise) is a microtask → runs before macrotasks.
- "B" (setTimeout) is a macrotask → runs last.
      `,
    },
    {
      q: ` Closures & Scope
What will be logged?`,
      code: `
function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1());
console.log(counter1());
console.log(counter2());
      `,
      a: `
Output:
1
2
1

Explanation:
Each call to createCounter() creates a new closure
with its own 'count' variable.
      `,
    },
    {
      q: `'this' Binding
Why does this log undefined?`,
      code: `
const user = {
  name: "Souhitya",
  greet() {
    console.log(\`Hi, \${this.name}\`);
  }
};

const greetFn = user.greet;
greetFn();
      `,
      a: `
Output:
Hi, undefined

Explanation:
When 'greetFn' is called standalone,
'this' is lost. Fix by binding:
const greetFn = user.greet.bind(user);
      `,
    },
    {
      q: `Prototypes & Inheritance
What will happen here?`,
      code: `
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function() {
  console.log(\`\${this.name} makes a sound\`);
};

function Dog(name) {
  Animal.call(this, name);
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function() {
  console.log(\`\${this.name} barks\`);
};

const d = new Dog("Rocky");
d.speak();
      `,
      a: `
Output:
Rocky barks

Explanation:
Dog inherits from Animal using prototypal inheritance.
The overridden 'speak' method in Dog runs instead.
      `,
    },
    {
      q: `Async / Await & Error Handling
Predict the output.`,
      code: `
async function fetchData() {
  try {
    throw new Error("Network failed");
  } catch (e) {
    return "Recovered";
  } finally {
    console.log("Cleanup");
  }
}

fetchData().then(console.log);
      `,
      a: `
Output:
Cleanup
Recovered

Explanation:
'finally' always runs.
Then the resolved value ("Recovered") is logged.
      `,
    },
];

export default function Jsqna() {
  const [index, setIndex] = useState(()=>{
    const savedIndex = localStorage.getItem("currentIndexjs");
    return savedIndex ? Number(savedIndex) : 0;
  })
  const [showAnswer, setShowAnswer] = useState(false);
  const [nextDisabled, setNextDisabled] = useState(Array(qnaList.length).fill(false))
  const [isFlipping, setIsFlipping] = useState(false);
const[jspro,setjspro]= useState(Number(localStorage.getItem("currentjsProgress"))||0);

  useEffect(()=>{
    const progress = ((index + 1) / qnaList.length) * 100;
    setjspro(progress);
    localStorage.setItem("currentjsProgress",progress);
    localStorage.setItem("currentIndexjs",index);
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
            background: 'linear-gradient(135deg, #e5f017ff, #e8f56fff)',
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
            JS Mastery Quiz
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
            JS Flashcards
          </h1>
          <p style={{ 
            opacity: 0.7, 
            fontSize: 16,
            maxWidth: 500,
            margin: '0 auto'
          }}>
            Master JS fundamentals one card at a time
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
              {Math.round(jspro)}%
            </span>
          </div>
          <ProgressBar progress={jspro} />
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