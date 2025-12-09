export default function Achievements({ htmlque = 0, cssque = 0, jsque = 0 }) {
  const achievedata = [
    { icon: "🔥", title: "First Step", label: "Complete first question", type: "first" },
    { icon: "👑", title: "HTML Master", label: "Completed HTML all modules", type: "html" },
    { icon: "🎨", title: "CSS Master", label: "Completed CSS all modules", type: "css" },
    { icon: "⚡", title: "JavaScript Master", label: "Completed JavaScript all modules", type: "js" },
    { icon: "⭐", title: "All Rounder", label: "Completed all modules", type: "all" },
  ];
  
  return (
    <div style={{ backgroundColor: '#0a0e1a', minHeight: '100vh', padding: '32px 0' }}>
      <h2 style={{ color: 'white', textAlign: 'center', fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '64px' }}>
        Your Achievements
      </h2>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '0 16px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px' }}>
          {achievedata.map((achieve, index) => {
            let unlocked = false;
            switch (achieve.type) {
              case "first":
                unlocked = htmlque > 0 || cssque > 0 || jsque > 0;
                break;
              case "html":
                unlocked = htmlque >= 23;
                break;
              case "css":
                unlocked = cssque >= 23;
                break;
              case "js":
                unlocked = jsque >= 23; 
                break;
              case "all":
                unlocked = htmlque >= 23 && cssque >= 23 && jsque >= 23;
                break;
              default:
                unlocked = false;
            }
            return (
              <div
                key={index}
                style={{
                  width: '192px',
                  height: '224px',
                  borderRadius: '16px',
                  padding: '24px 16px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  transition: 'all 0.5s',
                  background: unlocked 
                    ? 'linear-gradient(to bottom right, rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.2))'
                    : 'rgba(15, 23, 42, 0.6)',
                  border: unlocked 
                    ? '1px solid rgba(96, 165, 250, 0.3)'
                    : '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: unlocked 
                    ? '0 10px 15px -3px rgba(59, 130, 246, 0.3)'
                    : 'none',
                  opacity: unlocked ? 1 : 0.5,
                  filter: unlocked ? 'none' : 'grayscale(100%)',
                  transform: unlocked ? 'scale(1.05)' : 'scale(1)'
                }}
              >
                <p style={{ fontSize: '2.25rem', marginBottom: '16px' }}>{achieve.icon}</p>
                <p style={{ fontSize: '1.125rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '8px' }}>
                  {achieve.title}
                </p>
                <p style={{ fontSize: '0.875rem', color: '#d1d5db', textAlign: 'center' }}>
                  {achieve.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}