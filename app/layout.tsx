import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "Software Engineer turned Entrepreneur",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <header className="p-4 flex justify-end">
              <ModeToggle />
            </header>
            <main className="flex-grow container mx-auto px-4">
              {children}
            </main>
            <nav className="p-4">
              {/* We'll add navigation items here later */}
            </nav>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}