import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sessionwrapper from "@/components/Sessionwrapper";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Buy me a Drink- Fund your projects with Drink",
  description: "This website is a crowdfunding platform for creators",
  icons: {
    icon: "/buy.png",
    
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Sessionwrapper>
        <div className="relative z-10" >
        <Navbar /> 

        </div>
        
        <div className="min-h-[80vh] bg-[#000000] bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]">

        {children}
      </div>
        <Footer/>
      </Sessionwrapper>
      </body>
    </html>
  );
}

