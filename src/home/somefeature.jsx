export default function Somefeature() {
  return (
    <div className="w-full bg-[#020617] relative py-20">
      {/* Purple Radial Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle 500px at 50% 100px, rgba(114, 55, 250, 0.4), transparent)`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
        
        {/* Card 1 */}
        <div>
          <p className="text-6xl font-bold text-[rgba(107,84,159,1)]">150+</p>
          <p className="text-xl text-white mt-2">Practice Questions</p>
        </div>

        {/* Card 2 */}
        <div>
          <p className="text-6xl font-bold text-[rgba(107,84,159,1)]">3</p>
          <p className="text-xl text-white mt-2">Core Technologies</p>
        </div>

        {/* Card 3 */}
        <div>
          <p className="text-6xl font-bold text-[rgba(107,84,159,1)]">100%</p>
          <p className="text-xl text-white mt-2">Free Forever</p>
        </div>

      </div>
    </div>
  );
}
