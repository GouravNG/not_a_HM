import type { Metadata } from "next"
import "./globals.css"
import Header from "../components/layout/header.component"
import { pop_normal } from "../utils/font"
import Footer from "../components/layout/footer.component"

export const metadata: Metadata = {
  title: "H&M | Online Fashion",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${pop_normal.className}`}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  )
}
