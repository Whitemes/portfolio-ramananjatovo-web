import "@/app/globals.css";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
// Fonts
const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Johnny Ramananjatovo – Web3 Portfolio',
  description: 'Développeur SAP ABAP passionné par Web3, Blockchain et IA.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          geistSans.variable,
          geistMono.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>

          <main className="flex min-h-screen flex-col w-full relative z-10">
            {children}
          </main>

          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
