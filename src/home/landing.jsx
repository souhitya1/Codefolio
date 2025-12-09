import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="w-full h-145 md:px-10 lg:px-20 mt-32 text-center">

      {/* Title */}
      <h1 className="text-white mt-50 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
        Master Web Development
        <br />
        from Scratch
      </h1>

      {/* Subtitle */}
      <div className="mt-6">
        <p className="text-gray-300 text-lg sm:text-xl">
          Learn HTML, CSS, and JavaScript through interactive lessons
        </p>
        <p className="text-gray-300 text-lg sm:text-xl mt-1">
          and build real-world projects that matter
        </p>
      </div>

      {/* Button */}
      <div className="mt-8">
        <Link to="/dashboard">
          <button
            className="
              bg-blue-500/60 
              text-white 
              font-semibold 
              text-lg 
              px-8 
              py-3 
              rounded-xl 
              hover:bg-blue-500 
              transition 
              cursor-pointer
            "
          >
            Start Learning Free
          </button>
        </Link>
      </div>
    </div>
  );
}
