import OurTeam from "@/components/About/OurTeam";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Script from "next/script";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "This is About Page for Trailique",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <div>
        {/* Text content wrapped in a div with textAlign: "center" style */}
        <Breadcrumb
          pageName="ABOUT US"
          description="Welcome to Trailique - where youth meets experience, passion meets expertise, and innovation reshapes the IT landscape. With over 40 years of collective experience and a team of skilled full-stack developers, we are committed to revolutionizing the tech industry.

Founded by industry experts, Trailique specializes in providing various services and solutions, expert consultation, custom app development and boosting your traffic as well as revenue. Our dynamic team thrives on collaboration and creativity to deliver tailored solutions that drive impactful results.

At Trailique, we are more than just a service provider - we are your dedicated partner in success. Join us on this exciting journey as we transform your vision into reality through efficient and robust technology.

Let's embark on this transformative journey together. Welcome to Trailique - where innovation knows no bounds."
        />
      </div>
      <OurTeam />
    </>
  );
};

export default AboutPage;
