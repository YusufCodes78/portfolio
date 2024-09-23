import localFont from "next/font/local";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import { CustomCursor } from "@/components/effects/custom-cursor";
import { Navbar } from "@/components/navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Yusuf Rashid",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body> */}
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          >
        <Navbar/>
        <CustomCursor/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
