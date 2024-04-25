import React from "react";

const TermsAndConditions: React.FC = () => {
  return (
<div className="container mx-auto py-8 px-8 mt-20"> {/* Added px-8 for left and right padding */}
<h1 className="text-3xl font-bold mb-10 text-center text-blue-600">TERMS AND CONDITIONS</h1>

  <p className="mb-4">
    These Terms and Conditions govern your use of Trailique Infotech's website and services. By accessing or using our website or services, you agree to comply with these terms. If you do not agree with any part of these terms, please do not use our website or services.
  </p>
  <h2 className="text-2xl font-bold mb-4">• Intellectual Property</h2>
  <p className="mb-4">
    All content on our website including text, graphics, logos, images and software is the property of Trailique Infotech or its licensors and is protected by copyright laws. You may not reproduce, distribute, modify or exploit any content without our prior written consent.
  </p>
  <h2 className="text-2xl font-bold mb-4">• User Conduct</h2>
  <p className="mb-4">
    You agree to use our website and services for lawful purposes only and in a manner consistent with these terms. You must not engage in any activity that may disrupt or interfere with the functioning of our website or services.
  </p>
  <h2 className="text-2xl font-bold mb-4">• Privacy</h2>
  <p className="mb-4">
    Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use and safeguard your personal information when you use our website or services.
  </p>
  <h2 className="text-2xl font-bold mb-4">• Disclaimer of Warranties</h2>
  <p className="mb-4">
    Our website and services are provided on an "as is" and "as available" basis without any warranties, express or implied. We do not warrant that our website or services will be uninterrupted, error-free or secure.
  </p>
  <h2 className="text-2xl font-bold mb-4">• Limitation of Liability</h2>
  <p className="mb-4">
    Trailique Infotech shall not be liable for any indirect, incidental, special, consequential or punitive damages arising out of or related to your use of our website or services, even if we have been advised of the possibility of such damages.
  </p>
  <h2 className="text-2xl font-bold mb-4">• Governing Law</h2>
  <p className="mb-4">
    These terms shall be governed by and construed in accordance with the laws of India, Maharashtra without regard to its conflict of law provisions.
  </p>
  <h2 className="text-2xl font-bold mb-4">• Changes to Terms and Conditions</h2>
  <p className="mb-4">
    We reserve the right to update or modify these terms at any time without prior notice. By continuing to use our website or services after any changes, you agree to be bound by the updated terms.
  </p>
  <p className="mb-4">
    If you have any questions or concerns about these terms, please contact us at <a href="mailto:info@trailique.com" className="text-blue-500">info@trailique.com</a>.
  </p>
</div>

  );
};

export default TermsAndConditions;
