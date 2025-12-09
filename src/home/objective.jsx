export default function Objective() {
  return (
    <div className="bg-[#0d1a36] py-20 px-6 md:px-12 lg:px-20">
      
      {/* Title */}
      <h2 className="text-center text-white text-4xl sm:text-5xl font-bold mb-14">
        Why Choose Our Platform?
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* Card 1 */}
        <div className="bg-[#142751] rounded-xl p-6 border border-white/20 shadow-lg hover:shadow-blue-500/40 transition">
          <h3 className="text-white text-2xl font-bold mb-4">Structured Learning</h3>
          <p className="text-gray-300 text-lg">
            Follow a clear path from basics to advanced topics with our carefully designed curriculum.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#142751] rounded-xl p-6 border border-white/20 shadow-lg hover:shadow-blue-500/40 transition">
          <h3 className="text-white text-2xl font-bold mb-4">Hands-on Practice</h3>
          <p className="text-gray-300 text-lg">
            Learn by doing with interactive examples and real-world coding challenges.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#142751] rounded-xl p-6 border border-white/20 shadow-lg hover:shadow-blue-500/40 transition">
          <h3 className="text-white text-2xl font-bold mb-4">Online Compiler</h3>
          <p className="text-gray-300 text-lg">
            Practice your development skills using HTML, CSS, and JavaScript compiler.
          </p>
        </div>

      </div>
    </div>
  );
}
