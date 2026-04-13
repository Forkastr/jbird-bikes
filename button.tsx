import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
  title: "JBird Bikes | Premium Electric Bikes & Expert Service",
  description: "Your local eBike experts. Premium electric bikes starting at $450. Sales, service, and accessories. Origin eBikes authorized dealer. Free assembly, 1-year warranty.",
  keywords: "electric bikes, ebikes, bike shop, bike repair, Portland bikes, Origin eBikes, commuter bikes, folding bikes",
  openGraph: {
    title: "JBird Bikes | Premium Electric Bikes & Expert Service",
    description: "Quality electric bikes at unbeatable prices. Starting at $450 with free assembly and 1-year warranty.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
