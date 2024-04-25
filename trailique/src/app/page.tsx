import AboutSectionOne from "@/components/About/AboutSectionTwo";
import AboutSectionTwo from "@/components/About/AboutSectionOne";
import Blog from "@/components/Career";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
//import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
//import Video from "@/components/Video";
import { Metadata } from "next";
//import GoogleAnalytics from "@bradgarropy/next-google-analytics"
import Script from "next/script";
import OurTeam from "@/components/About/OurTeam";
import About from "@/components/About/About";

//import ValueStatement from "@/components/About/ValueStatement";
import AboutCard from "./try/page";
export const metadata: Metadata = {
  title: "Home",
  description: "Begin Right. Build Right.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      {/* <SliderControlsInside/>   */}
      <Hero />
      <About />
      {/* <Features />
      <Video /> */}
      <AboutCard />

      {/* <AboutSectionTwo />
      <AboutSectionOne />
      <ValueStatement /> */}
      <Testimonials />

      <OurTeam />
      <Brands />

      {/* <Contact /> */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-6ZB1SSZHDM"
      ></Script>

      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-6ZB1SSZHDM');
    `}
      </Script>

      

      {/* <GoogleAnalytics measurementId="G-6ZB1SSZHDM"/>*/}
    </>
  );
}
