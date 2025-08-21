import Hero3D from "@/components/Hero3D";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="pt-10">
        <Hero3D />
      </section>
      <Footer />
    </main>
  );
}
