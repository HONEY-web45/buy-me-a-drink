import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sessionwrapper from "@/components/Sessionwrapper";
import Leniss from "@/components/Lenis";
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
        className="bg-black"
        >
          <Leniss>
          <Sessionwrapper>
        <div className="relative z-10" >
        <Navbar /> 

        </div>
        
        <div className="min-h-[80vh]  ">
 <video
  autoPlay
  loop
  muted
  playsInline
  className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
>
  <source src="b1.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
        {children}
      </div>
        <Footer/>
      </Sessionwrapper>
      </Leniss>
      </body>
    </html>
  );
}

