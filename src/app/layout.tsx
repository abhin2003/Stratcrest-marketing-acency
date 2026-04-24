import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stratcrest Marketing and Consulting | Illuminate Your Brand",
  description: "Stratcrest helps businesses grow through strategic branding, digital presence, and performance-focused solutions. Accelerate your growth today.",
  keywords: ["marketing agency", "branding", "digital marketing", "consulting", "lead generation", "sales training"],
  openGraph: {
    title: "Stratcrest Marketing and Consulting",
    description: "Illuminate Your Brand. Accelerate Your Growth.",
    images: ["/assets/stratcrest.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
