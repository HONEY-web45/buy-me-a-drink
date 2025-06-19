// pages/refund-policy.js
export default function RefundPolicy() {
  return (
    <main className=" min-h-screen px-4 sm:px-6 lg:px-12 py-12">
      <div className="max-w-4xl text-center mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold  text-gray-400 mb-6 text-center">
          Refund & Cancellation Policy
        </h1>

        <p className="text-gray-400 mb-4">
          All payments made through <span className="font-semibold">Buy Me A Drink</span> are considered voluntary contributions and are non-refundable.
        </p>

        <p className="text-gray-400 mb-4">
          This platform operates as a digital tip jar. Since no physical goods or services are exchanged, we do not offer cancellations, returns, or refunds once a payment has been completed.
        </p>

        <p className="text-gray-400 mb-4">
          If a payment was made in error or you encounter an issue, you may reach out to us at{" "}
          <a href="mailto:nitik23212@example.com" className="text-blue-600 underline">
            nitik2643@gmail.com
          </a>{" "}
          and we’ll do our best to assist you.
        </p>

        <p className="mt-6 text-sm text-gray-400 ">
          Last updated:{" "}
          {new Date().toLocaleDateString("en-IN", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
    </main>
  );
}
