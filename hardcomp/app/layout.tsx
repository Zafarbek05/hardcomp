import type { Metadata } from "next";
import "../styles/globals.css"

export const metadata: Metadata = {
  title: "Hardcomp",
  description: "Compare hardware in various disciplines",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
