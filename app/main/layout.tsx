import type { Metadata } from "next";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid items-center justify-items-center w-80 h-80 bg-red-300">
      <h2>main page Layout</h2>
      {children}
    </div>
  );
}
