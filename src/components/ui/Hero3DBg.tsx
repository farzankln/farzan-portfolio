"use client";

import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";
import { useEffect, useState } from "react";

export default function Hero3DBg() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative h-screen w-full">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        {/* نور محیطی */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[6, 6, 6]} intensity={1.1} />

        {/* کهکشان پس زمینه */}
        <Stars
          radius={50}
          depth={40}
          count={isMobile ? 6000 : 4500} // تعداد ستاره‌ها
          factor={isMobile ? 6 : 4} // فاصله و پراکندگی بزرگ‌تر روی موبایل
          saturation={0}
          fade
        />

        {/* چرخش خودکار */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          autoRotate
          autoRotateSpeed={0.6}
        />
      </Canvas>
    </div>
  );
}
