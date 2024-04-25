import OurTeam from "@/components/About/OurTeam";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Script from "next/script";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "This is About Page for Trailique",
  // other metadata
};

const About = () => {
  return (
    <>
      <div className="text-left p-0 mr-10 ">
        {/* Align content at center */}
        <Breadcrumb
          pageName="ABOUT US"
          description="Welcome to Trailique - where youth meets experience, passion meets expertise and innovation reshapes the IT landscape. With over 40 years of the collective experience and a dynamic team, we are committed to revolutionizing the tech industry. Founded by industry experts, Trailique specializes in providing services, expert consultation, custom app development and driving traffic and revenue. Our expert team thrives on collaboration and creativity to deliver tailored solutions for impactful results. Join us on this transformative journey now!"
        />
      </div>
    </>
  );
};

export default About;
