// pages/terms.js
export default function Terms() {
  return (
    <div className="px-4 flex flex-col items-center py-10  text-gray-200">
      <h1 className="text-3xl font-bold text-center mb-6">Terms & Conditions</h1>
      <p className="mb-4">
        Welcome to Buy Me A Drink. By using this platform, you agree to the following terms:
      </p>

      <ul className="list-disc pl-5 space-y-3  ">
        <li>
          This platform enables supporters to send voluntary monetary contributions to creators.
        </li>
        <li>
          No physical goods or services are sold or promised in exchange for payments.
        </li>
        <li>
          All contributions are final and non-refundable unless required by law.
        </li>
        <li>
          Users must not misuse the platform for illegal, abusive, or fraudulent purposes.
        </li>
        <li>
          The site owner reserves the right to suspend or remove access at their discretion.
        </li>
      </ul>

      <p className="mt-6 text-sm text-gray-400">
        Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
      </p>
    </div>
  );
}
