import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const greatVibes = localFont({
  src: "./fonts/GreatVibes-Regular.woff",
  variable: "--font-great-vibes",
  weight: "100 900",
});
const roboto = localFont({
  src: "./fonts/Roboto-Regular.woff",
  variable: "--font-roboto",
  weight: "100 900",
});


export const metadata = {
  title: "Harshitha weds Ajay",
  description: "Harshitha weds Ajay , 04-11-2024 Monday ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // If you are using custom fonts, uncomment the next line
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`${greatVibes.variable} ${roboto.variable}`}
      >
        <Navbar />  {/* Renders the Navbar component */}
        {children}
        <Footer />  {/* Renders the Footer component */}
      </body>
    </html>
  );
}
