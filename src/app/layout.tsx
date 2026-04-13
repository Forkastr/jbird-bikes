import React from "react";
import "./globals.css";

export const metadata = {
  title: "JBird Bikes",
  description: "Premium Electric Bikes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
