import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function openhome() {
    window.location.href = "http://localhost:5173/";
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <h3
          onClick={openhome}
          className="text-2xl font-bold cursor-pointer"
        >
          Codefolio
        </h3>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-10 text-xl">
          <Link to="/roadmap" className="hover:text-gray-300">Roadmap</Link>
          <Link to="/compile" className="hover:text-gray-300">Compiler</Link>
          <Link to="/question" className="hover:text-gray-300">Questions</Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="md:hidden bg-black px-6 pb-4 space-y-3 text-lg">
          <Link to="/roadmap" className="block">Roadmap</Link>
          <Link to="/compile" className="block">Compiler</Link>
          <Link to="/question" className="block">Questions</Link>
        </div>
      )}
    </nav>
  );
}
