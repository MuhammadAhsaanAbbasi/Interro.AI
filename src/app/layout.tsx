import "./globals.css";
import type { Metadata } from "next";
import { Assistant as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})


export const metadata: Metadata = {
  title: "InterroAI",
  description: "AI Mock Interviewer",
  icons: {
      icon: "https://myapplication-logos.s3.ap-south-1.amazonaws.com/InterroAI.svg",
  },
};

export default function MainRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
    appearance={{
      variables: {
        colorText: "#fff",
        colorPrimary: "#C2690E",
        colorBackground: "#C36727",
        colorInputBackground: "#71351F",
        colorInputText: "#fff",
      },
    }}
    >
      <html lang="en">
        <body
          className={cn(
            "font-sans antialiased",
            fontSans.variable
          )}
        >
          <main>
            {children}
          </main>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
