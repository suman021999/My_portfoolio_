import About from "../About/About";
import GitHubGraph from "../Github/GitHubCalendar";
import Projectcontext from "../projects/Projectcontext";
import Tech_stack from "../Tech_Stack/Tech_stack";

export default function GridBackground() {
  return (
    <div className="relative flex flex-col  items-start  w-full overflow-hidden    bg-gradient-to-b from-black via-gray-700 to-black">
      {/* Grid */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "120px 120px", // Adjust size of squares
        }}
      />

      
      <About/>
      <Projectcontext/>
      <Tech_stack/>
      <GitHubGraph/>
      
      
    </div>
  );
}




