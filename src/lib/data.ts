export const projects = [
  {
    id: "p1",
    title: "CodeRiddle",
    description:
      "A multi-tenant web application where **Creators** design sequential riddle sets for **Solvers** to solve. Solvers unlock a final prize by correctly answering every riddle.",
    image: "/images/CodeRiddle.png",
    href: "https://code-riddle.vercel.app/",
    tags: ["Next.js", "TypeScript", "Tailwind", "Supabase", "Prisma"],
  },
  {
    id: "p2",
    title: "Sorting Visualizer",
    description:
      "Understanding algorithms becomes intuitive when you can see them in action. This Sorting Visualizer transforms abstract code into interactive, color-coded animations—making it effortless to grasp how sorting algorithms work step by step.",
    image: "/images/SortingVisualizer.png",
    href: "https://sorting-visualizer-smoky-omega.vercel.app/",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: "p3",
    title: "Authentication App",
    description:
      "This is a simple authentication app built with Next.js and NextAuth.js, allowing users to sign up and log in using Google, GitHub, or email/password authentication. The app uses MongoDB to store user credentials.",
    image: "/images/AuthenticationApp.png",
    href: "https://next-js-authentication-app-zeta.vercel.app/",
    tags: ["Next.js", "NextAuth.js", "MongoDB", "bcrypt"],
  },
  {
    id: "p4",
    title: "ChefMate",
    description: "A recipe management app to browse and save favorite recipes.",
    image: "/images/preChefMate.png",
    href: "https://chef-mate-weld.vercel.app/",
    tags: ["Next.js", "Zustand", "MongoDB", "NextAuth.js"],
  },
  {
    id: "p5",
    title: "Movie Nest",
    description:
      "Movie Nest is a web application that allows users to Browse trending & newly released movies Search for movies by title View detailed movie information, including posters and trailers Watch official trailers directly from YouTube",
    image: "/images/MovieNest.png",
    href: "https://movie-nest-delta.vercel.app/",
    tags: ["React.js", "TypeScript", "Tailwind", "YouTube Embeds"],
  },
  {
    id: "p6",
    title: "Promptopia",
    description:
      "Promptopia is a web application that allows users to explore, create, and share AI prompts. It provides a platform for people to create custom prompts for different AI models and share them with a community of users.",
    image: "/images/Promptopia.png",
    href: "https://promptopia-app-five.vercel.app/",
    tags: ["Next.js", "JWT", "MongoDB", "Node.js", "Express.js"],
  },
  {
    id: "p7",
    title: "Random Quote Generator",
    description:
      "This is a simple Random Quote Generator built with React and Tailwind CSS. It fetches random quotes from an API and allows users to save their favorite quotes.",
    image: "/images/RandomQuoteGenerator.png",
    href: "https://random-quote-dun.vercel.app/",
    tags: ["React", "Tailwind", "Axios", "LocalStorage"],
  },
  {
    id: "p8",
    title: "QR Code Generator",
    description:
      "This project is a modern and responsive QR Code Generator built using React. Users can enter a URL, generate a QR code, and download it in different formats.",
    image: "/images/QRCodeGenerator.png",
    href: "https://qr-code-app-liard.vercel.app/",
    tags: ["React.js", "HTML to image", "Tailwind", "React QR code"],
  },

  {
    id: "p9",
    title: "Algorithm Calculator",
    description:
      "This project is a web-based application that simulates various CPU scheduling algorithms. It provides an interactive interface for users to input process details and view calculated results, including execution order and average times.",
    image: "/images/AlgorithmCalculator.png",
    href: "https://algorithm-calculator-uni-project.vercel.app/",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer motion"],
  },
  {
    id: "p10",
    title: "Lexical Analyzer",
    description:
      "A web-based lexical analyzer built with Next.js and React. Paste source code and instantly view classified tokens with line/column positions.",
    image: "/images/LexicalAnalyzer.png",
    href: "https://lexical-analyzer-uni-project.vercel.app/",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
];

export const articles = [
  {
    id: "a1",
    title:
      "Rendering Patterns in Next.js: CSR, SSR, SSG, ISR, RSC, PPR, and DPR",
    date: "Oct 09, 2025",
    excerpt:
      "This paper surveys Next.js rendering strategies—CSR, SSR, SSG, ISR, React Server Components (RSC), and Partial Pre-Rendering/Dynamic Parallel Rendering (PPR/DPR). We define each mode, discuss trade-offs (performance, SEO, complexity), show minimal code, and provide practical selection guidance. (Primary sources: Next.js Docs.)",
    href: "https://dev.to/farzankln/rendering-patterns-in-nextjs-csr-ssr-ssg-isr-rsc-ppr-and-dpr-3244",
  },
];
