import type { Metadata } from "next";
import "../styles/globals.css";
import LoadingScreen from "@/components/ui/LoadingScreen";

export const metadata: Metadata = {
  title: "Farzan portfolio",
  description: "ّFrontend Developer",
  icons: { icon: "/account.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body className="bg-black text-neutral-100 antialiased">
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
