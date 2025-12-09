export default function Ready(){
    return(
            <div className="h-150 w-full relative">
  {/* Aurora Waves Pattern */}
  <style>{`
    @keyframes aurora {
      0% { transform: scale(1) rotate(0deg); opacity: 0.5; }
      50% { transform: scale(1.2) rotate(180deg); opacity: 0.8; }
      100% { transform: scale(1) rotate(360deg); opacity: 0.5; }
    }
  `}</style>
  <div
    className="absolute inset-0 z-0"
    style={{
      background: `linear-gradient(45deg, #1a1a1a 0%, #003366 100%),
        repeating-linear-gradient(
          45deg,
          rgba(0, 255, 255, 0.1) 0px,
          rgba(0, 255, 255, 0.1) 20px,
          rgba(0, 255, 0, 0.1) 20px,
          rgba(0, 255, 0, 0.1) 40px
        ),
        radial-gradient(
          circle at 50% 50%,
          rgba(32, 196, 232, 0.3) 0%,
          rgba(76, 201, 240, 0.1) 100%
        )`,
    }}>
  <div className="flex justify-center align-center mt-50">
    <div className="rounded-xl  h-75 w-155" style={{backgroundColor: "#0033666e"}}>
        <p style={{color: "white"}} className="text-4xl text-center font-bold mt-10">Ready to Start your Journey?</p>
        <p style={{color: "white"}} className="text-lg text-center mt-4">Join thousands of learners mastering web development</p>
        <div className="flex justify-center align-center mt-10">
        <div className="rounded-4xl  w-70 h-15 flex justify-center align-center bg-blue-500 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]">
        <button style={{color: "white"}} className="text-lg">Start Learning now its free</button>
        </div>
       </div>
    </div>
  </div>
  </div>
</div>
    
    )
}