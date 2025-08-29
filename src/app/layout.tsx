import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BS",
  description: "Static dots background test",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/imgs/profile.svg" type="image/png" />
      </head>
      <body className="relative">
        {/* Background layer */}
        <div className="dots-bg"></div>

        {/* Foreground content */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
