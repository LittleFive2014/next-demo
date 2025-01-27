import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "react demo",
  description: "a react demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="text-[3.25rem]">
          <Link className="p-3" href="/">
            home
          </Link>
          <Link className="p-3" href="/main/help">
            help
          </Link>
          <Link className="p-3" href="/main/about">
            about
          </Link>
        </header>

        <main className="grid items-center justify-items-center w-full h-full bg-green-300">
          <h1>Root Layout</h1>
          {children}
        </main>
      </body>
    </html>
  );
}
