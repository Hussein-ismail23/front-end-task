import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import "./globals.css";
import { Footer, Header } from "@/ui";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "My Company",
  description: "Front end task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
          <main>
            {children}
          </main>
          <footer>
            <Footer />
          </footer>
        </AntdRegistry>
      </body>
    </html >
  );
}
