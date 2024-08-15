"use client";

import { Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/header/Header";
import Footer from "@/components/shared/footer/Footer";
import styled, { ThemeProvider } from "styled-components";
import Theme from "@/theme/defaultTheme";

const jost = Jost({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={Theme}>
      <html lang="en">
        <body className={jost.className}>
          <Header />
          <WapperStyled>{children}</WapperStyled>
          <Footer />
        </body>
      </html>
    </ThemeProvider>
  );
}

const WapperStyled = styled.main`
  /* moblie first */
  /* border: 2px solid red; */

  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;
