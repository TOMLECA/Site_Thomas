import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "../components/ClientLayout";
import { ThemeProvider } from "@/context/ThemeContext";
import PageTransition from "@/components/PageTransition";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TM FILMS - Vidéaste & Infographiste 3D",
  description: "L'image à l'ère du rétro-futur - Production vidéo et infographie 3D",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="dark">
      <body className={`${inter.className} text-beige min-h-screen bg-black`}>
        <ThemeProvider>
          <ClientLayout>
            <PageTransition>
              {children}
            </PageTransition>
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
