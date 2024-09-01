import React from "react";
import { Inter } from "next/font/google";
// import ".././";
import SidebarLinks from "@/components/sidebar/sidebar-links";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-row">
          <div className=" bg-stone-100 w-28 sm:w-80 flex flex-col h-screen py-10 items-center">
            <SidebarLinks />
          </div>
          <div className="w-full ">{children}</div>
        </div>
      </body>
    </html>
  );
}
