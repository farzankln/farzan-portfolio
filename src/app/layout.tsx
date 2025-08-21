import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Farzan — Portfolio",
  description:
    "Software Engineer Portfolio built with Next.js, TypeScript, and React Three Fiber.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body className="bg-neutral-950 text-neutral-100 antialiased">
        {children}
      </body>
    </html>
  );
}
