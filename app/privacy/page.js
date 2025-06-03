import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-8 text-gray-400 sm:text-start text-center ">
      <h1 className="text-3xl font-bold mb-4 text-center">Privacy Policy</h1>
      <p className="text-center">Last Updated: June 3, 2025</p>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">1. Information We Collect</h2>
        <p>
          We collect personal information such as name, email, payment details,
          and profile data when users sign up. Additionally, we track website
          usage, device information, and interactions with the platform.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
        <p>
          Your data is used to provide and improve our services, facilitate
          transactions, enhance user experience, and ensure security.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">3. Sharing of Information</h2>
        <p>
          We do not sell user data. However, information may be shared with
          payment processors (Razorpay, Google Pay) and legal authorities if
          required.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">4. Data Security</h2>
        <p>
          We implement encryption, secure servers, and restricted access
          controls to protect your personal data.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">5. Your Rights & Choices</h2>
        <p>
          You can access, update, or delete personal data. Users may opt-out of
          marketing communications and request stored data copies.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">6. Changes to This Policy</h2>
        <p>
          We may update this policy periodically. Changes will be reflected on
          this page.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">7. Contact Us</h2>
        <p>
          For any privacy-related concerns, reach out to{" "}
          <strong>privacy@buymedrink.com</strong>.
        </p>
      </section>

     
    </div>
  );
};

export default PrivacyPolicy;
