import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JBird Bikes | Premium Electric Bikes & Expert Service",
  description: "Located on the Lafitte Greenway in New Orleans.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
