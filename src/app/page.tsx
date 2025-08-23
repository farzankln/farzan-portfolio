import Hero from "@/components/Hero";
import ProjectsGrid from "@/components/ProjectsGrid";
import ArticlesList from "@/components/ArticlesList";
import { projects, articles } from "@/lib/data";
import Footer from "@/components/Footer";
import { techData } from "@/components/icons/icons";
import TechnicalExpertise from "@/components/TechnicalExpertise";
import Hero3DBg from "@/components/ui/Hero3DBg";

export default function HomePage() {
  return (
    <div className="relative bg-black overflow-hidden">
      <div className="fixed inset-0 z-0 w-full h-full">
        <Hero3DBg />
      </div>

      <main className="relative z-10 min-h-screen">
        <Hero />

        <section className="mx-auto max-w-6xl px-4 py-10">
          <TechnicalExpertise techData={techData} />
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="text-3xl font-semibold mb-6 text-white">Projects</h2>
          <ProjectsGrid items={projects} />
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="text-3xl font-semibold mb-6 text-white">Articles</h2>
          <ArticlesList items={articles} />
        </section>
        <Footer />
      </main>
    </div>
  );
}
