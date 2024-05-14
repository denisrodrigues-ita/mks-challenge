import React from "react";
import { GlobalTheme, Providers } from "@/utils";
import { Footer, Header } from "@/components/organisms";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ddev - Soluções web.",
  description: "Teste prático para uma vaga de desenvolvedor front-end",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <Providers>
        <GlobalTheme>
          <body>
            <Header />
            {children}
            <Footer />
          </body>
        </GlobalTheme>
      </Providers>
    </html>
  );
}
