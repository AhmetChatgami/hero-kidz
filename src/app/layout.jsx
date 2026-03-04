import { Geist, Geist_Mono, Poppins } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";

const poppins = Poppins({
  weight: ["100", "200", "400", "500", "600", "800"],
});

export const fontBangla = localFont({
  src: "./../fonts/mayaboti-normal.ttf"
})

 export const metadata = {
  metadataBase: new URL("https://hero-kidz-rosy.vercel.app"),

  title: {
    default: "HeroKidz | Modern Web Store",
    template: "%s | HeroKidz",
  },

  description:
    "Discover high-quality educational and learning products. Modern, affordable and crafted for smart learning.",

  keywords: [
    "Educational Products",
    "Learning Board",
    "Kids Learning",
    "Online Store",
    "Bangladesh Ecommerce",
  ],

  authors: [{ name: "Hero Kidz" }],
  creator: "Hero Kidz",
  publisher: "Hero Kidz",

  icons: {
    icon: "https://i.ibb.co/wrKffNC2/logo.png",
    shortcut: "https://i.ibb.co/wrKffNC2/logo.png",
    apple: "https://i.ibb.co/wrKffNC2/logo.png",
  },

  openGraph: {
    title: "Hero Kidz | Modern Web Store",
    description:
      "Discover high-quality educational and learning products for smart learners.",
    url: "https://yourdomain.com",
    siteName: "Hero Kidz",
    images: [
      {
        url: "https://i.ibb.co/FLRTntX8/homepage-preview.png",
        width: 1200,
        height: 630,
        alt: "Homepage Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Hero Kidz | Modern Web Store",
    description:
      "Discover high-quality educational and learning products.",
    images: ["https://i.ibb.co/FLRTntX8/homepage-preview.png"],
    creator: "@yourtwitterhandle",
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "ecommerce",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <header className="py-2 md:w-11/12 mx-auto">
          <Navbar></Navbar>
        </header>
        <main className="py-2 px-5 md:w-11/12 mx-auto min-h-[calc(100svh-297px)]">
          {children}
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
