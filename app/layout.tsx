import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { ConfigProvider } from "antd";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#1E3E72",
          borderRadius: 4,
        },
        components: {
          Button: {
            // borderRadius: 4,
          },
        },
      }}
    >
      <html lang="en">
        <body suppressHydrationWarning={true} className={inter.className}>
          {children}
        </body>
      </html>
    </ConfigProvider>
  );
}

export const metadata: Metadata = {
  title: "Resume App",
  description: "Generated by Resume app",
};
