import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto py-8 px-4 mt-20">
      <h1 className="text-3xl font-bold mb-10 text-center text-blue-600">PRIVACY POLICY</h1>
      <p className="mb-6">
        Trailique Infotech is committed to protecting the privacy and security of your personal information. This Privacy Policy outlines how we collect, use, disclose and safeguard your data when you visit our website or use our services.
      </p>
      <h2 className="text-2xl font-bold mb-4">• Data Sharing</h2>
      <ul className=" mb-4 ml-4">
        <li>
          We may share your personal information with trusted third-party service
          providers who assist us in delivering our services such as payment
          processors, hosting providers and marketing partners. We ensure that
          these third parties adhere to strict confidentiality and data security
          standards.
        </li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">• Data Security</h2>
      <ul className=" mb-4 ml-4">
        <li>
          We employ industry-standard security measures to protect your personal
          information from unauthorized access, disclosure, alteration or
          destruction. However, no method of transmission over the internet or
          electronic storage is 100% secure and we cannot guarantee absolute
          security.
        </li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">• Privacy Rights</h2>
      <ul className=" mb-4 ml-4">
        <li>
          You have the right to access, correct or delete your personal
          information held by us. You may also opt-out of receiving promotional
          communications from us at any time by following the unsubscribe
          instructions provided in the emails.
        </li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">• Updates to Privacy Policy</h2>
      <ul className=" mb-4 ml-4">
        <li>
          We may update this Privacy Policy periodically to reflect changes in our
          practices or legal requirements. We encourage you to review this page
          regularly for any updates. Your continued use of our website and
          services after any changes indicates your acceptance of the updated
          Privacy Policy.
        </li>
      </ul>
      <p className="mb-4">
        If you have any questions or concerns about our Privacy Policy, please
        contact us at <a href="mailto:info@trailique.com" className="text-blue-500">info@trailique.com</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
