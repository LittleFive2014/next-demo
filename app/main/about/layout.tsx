import type { Metadata } from "next";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid items-center justify-items-center w-72 h-72 bg-blue-300">
      <h2>about page Layout</h2>
      {children}
    </div>
  );
}
