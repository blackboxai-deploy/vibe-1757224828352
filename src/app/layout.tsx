import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/navigation/navigation";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "EcoLearn - Gamified Environmental Education Platform",
  description: "Engaging environmental education platform for Indian schools and colleges with gamification, real-world challenges, and community features.",
  keywords: "environmental education, climate change, sustainability, gamification, India, schools, colleges",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 font-inter antialiased">
        <Navigation />
        <main className="relative">
          {children}
        </main>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}