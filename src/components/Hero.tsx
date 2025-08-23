import SplitText from "@/components/ui/SplitText";
import { FlipWords } from "@/components/ui/FlipWords";

const Hero = () => {
  const words = [
    "responsive",
    "interactive",
    "modern",
    "user-friendly",
    "beautiful",
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="pointer-events-auto text-center px-4 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-center">
            <SplitText
              text="Hello, I'm Farzan Kalantari"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="words, chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              className="split-text"
            />
          </h1>
          <div className="mt-3 sm:mt-4 md:mt-5  text-neutral-300 italic text-base sm:text-lg md:text-xl leading-relaxed md:mx-4 sm:mx-6 mx-8">
            I’m a passionate Frontend Developer focused on creating websites
            with
            <FlipWords words={words} /> design.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
