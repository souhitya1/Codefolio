export default function Getstarted(){
    function opencompiler(){
        window.location.href = "http://localhost:5173/compile";
    }
    return(
        <div style={{height: "350px", marginLeft: "6.5%"}}>
            <div style={{marginLeft: "30%"}}>
            <h2 style={{fontSize: "60px"}}>Ready to get started </h2>
            <h2 style={{marginTop: "-50px", marginLeft: "50px", fontSize: "60px"}}>with Codefolio</h2>
            <button 
            style={{
          width: "200px",
          padding: "12px",
          backgroundColor: "#4A90E2",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "1rem",
          marginLeft: "170px",
          marginTop: "-20px"
            }}
            onClick={opencompiler}
            >Start Building</button>
            </div>
        </div>
    )
}