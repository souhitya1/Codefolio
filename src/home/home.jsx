import Navbar from "./navbar";
import Landing from "./landing";
import Objective from "./objective";
import Getstarted from "./getstarted";
import Whatlearn from "./whatlearn";
import { useEffect } from "react";
import gsap from "gsap";
import Somefeature from "./somefeature";
import Ready from "./ready";
export default function Home(){
    return(
        <div>
             <div className="min-h-screen w-full relative">
  {/* Dark Horizon Glow */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #0d1a36 100%)",
    }}
    >
            <Navbar/>
            <Landing/>
            <Objective/>
            <Whatlearn/>
            <Somefeature/>
            <Ready/>
        </div>
        </div>
        </div>
    )
}
