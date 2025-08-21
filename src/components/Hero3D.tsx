"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import SplitText from "@/components/SplitText";

export default function Hero3D() {
  return (
    <div className="relative h-screen">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[6, 6, 6]} intensity={1.1} />
        <Stars
          radius={50}
          depth={40}
          count={4500}
          factor={4}
          saturation={0}
          fade
        />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.6}
        />
      </Canvas>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="pointer-events-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            <SplitText
              text="Hello, I'm Farzan Kalantari"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </h1>
          <pre className="mt-5 text-neutral-300 italic">
              Frontend Developer | Focused on crafting fast, responsive, and
              reliable web applications for the modern web.
          </pre>
          <a
            href="#projects"
            className="mt-6 inline-block rounded-xl bg-red-500 px-5 py-3 font-medium text-white hover:bg-red-600 transition"
          >
            See My Work
          </a>
        </div>
      </div>
    </div>
  );
}
