import { useScramble } from "use-scramble";

export function useScrambledTitle(text) {
    const { ref, replay } = useScramble({ 
      text: text,
      speed: 1,
      overdrive: false,
      scramble: 10
    });
  
    return <h1 className='scrambled' ref={ref} onClick={replay}></h1>
}