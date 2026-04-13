import React from "react";
import "./globals.css";

export const metadata = {
  title: "JBird Bikes",
  description: "Premium Electric Bikes & Expert Service",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
