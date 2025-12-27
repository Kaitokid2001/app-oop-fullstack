import type { Metadata } from "next";
import { Poppins  } from "next/font/google";

import StyledComponentsRegistry from "./lib/registry";
import Navbar from "./components/navbar/app.navbar";
import {GlobalStyle, Wrapper} from "./styles/reset";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Save Money ",
  description: "Save Money by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <StyledComponentsRegistry>
          <GlobalStyle/>
          <Wrapper>
            <Navbar/>
            {children}
          </Wrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
