import Hero3D from "@/components/Hero3D";
import { techLogos } from "@/components/icons";
import LogoLoop from "@/components/LogoLoop";
import AboutMe from "@/components/AboutMe";
import ProjectsGrid from "@/components/ProjectsGrid";
import ArticlesList from "@/components/ArticlesList";
import { projects, articles } from "@/lib/data";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="pt-10">
        <Hero3D />
      </section>
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-wrap gap-10">
          <AboutMe />
          <div className="overflow-hidden rounded-2xl bg-neutral-900 p-6 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Technology</h3>
            <div className="relative overflow-hidden">
              <LogoLoop
                logos={techLogos}
                speed={75}
                direction="left"
                logoHeight={48}
                gap={40}
                pauseOnHover
                scaleOnHover
                fadeOut
                fadeOutColor="#171717"
                ariaLabel="Technology partners"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>
        <ProjectsGrid items={projects} />
      </section>
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-3xl font-semibold mb-6">Articles</h2>
        <ArticlesList items={articles} />
      </section>
      <Footer />
    </main>
  );
}
