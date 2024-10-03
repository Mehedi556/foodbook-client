import "@/src/styles/globals.css";
import { Metadata } from "next";
import clsx from "clsx";

import { Providers } from "../lib/Providers";

import { siteConfig } from "@/src/config/site";
import { fontSans } from "@/src/config/fonts";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="">
            <main className="">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
