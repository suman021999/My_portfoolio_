import DotGrid from '@/components/DotGrid/DotGrid';


export default function Home() {
  return (
    <>
  
<div className=' w-full relative h-[400vh] '>
  <DotGrid
    dotSize={3}
    gap={10}
    baseColor="#3b3b3bc7"
    activeColor="#3b3b3bda"
    proximity={60}
    shockRadius={250}
    shockStrength={5}
    resistance={750}
    returnDuration={1.5}
  />
</div>

    </>
  );
}
