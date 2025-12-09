import Roadmap from "./roadmap"
import Roadmapcss from "./roadmapcss"
import Roadmapjs from "./roadmapjs"
import Roadmapques from "./roadmapques";

export default function Roadmapmain() {
  return (
    <div className="bg-black min-h-screen w-full p-4">
      <div className="max-w-5xl mx-auto space-y-10">
        <Roadmap />
        <Roadmapcss />
        <Roadmapjs />
        <Roadmapques />
      </div>
    </div>
  );
}
