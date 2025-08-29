import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My App",
  description: "Static dots background test",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        {/* Background layer */}
        <div className="dots-bg"></div>

        {/* Foreground content */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
