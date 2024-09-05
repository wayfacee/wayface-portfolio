import type { Metadata } from "next";
import { Sora } from "next/font/google";
import './styles/global.scss';

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Next App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sora.className}>{children}</body>
    </html>
  );
}