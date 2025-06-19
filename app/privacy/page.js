import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-8 text-gray-300 sm:text-start text-center ">
      <h1 className="text-3xl font-bold mb-4 text-center">Privacy Policy</h1>
      <p className="text-center">Last Updated: June 3, 2025</p>

      <section className="mt-6">
        <h2 className="text-xl font-bold">1. Information We Collect</h2>
        <p className="text-lg">
          We collect personal information such as name, email, payment details,
          and profile data when users sign up. Additionally, we track website
          usage, device information, and interactions with the platform.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-bold">2. How We Use Your Information</h2>
        <p className="text-lg">
          Your data is used to provide and improve our services, facilitate
          transactions, enhance user experience, and ensure security.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-bold">3. Sharing of Information</h2>
        <p className="text-lg">
          We do not sell user data. However, information may be shared with
          payment processors (Razorpay, Google Pay) and legal authorities if
          required.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-bold">4. Data Security</h2>
        <p className="text-lg">
          We implement encryption, secure servers, and restricted access
          controls to protect your personal data.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-bold">5. Your Rights & Choices</h2>
        <p className="text-lg">
          You can access, update, or delete personal data. Users may opt-out of
          marketing communications and request stored data copies.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-bold">6. Changes to This Policy</h2>
        <p className="text-lg">
          We may update this policy periodically. Changes will be reflected on
          this page.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-bold">7. Contact Us</h2>
        <p className="text-lg">
          For any privacy-related concerns, reach out to{" "}
          <strong>nitik2643@gmail.com</strong>.
        </p>
      </section>

     
    </div>
  );
};

export default PrivacyPolicy;
