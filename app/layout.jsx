import { Poppins, Montserrat, Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable:["--font-poppins"],
  subsets:["latin"],
  weight:["100",'200',"300","400","500","600","700","800","900"]
})
export const metadata = {
  title: "Mastercard Website",
  description: "Created by Dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <SmoothScroll>
        <Navbar />
        {children}
        <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
