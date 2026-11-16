import { motion } from "framer-motion";
import Navigation from "@/components/navigation";

export default function Privacy() {
  return (
    <div className="bg-background min-h-screen">
      <Navigation />

      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-50 opacity-60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h1
              className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Privacy Policy
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              At cloudpay, we value your privacy and are committed to protecting
              your personal information. This Privacy Policy explains how we
              collect, use, and safeguard your data when you use our services.
            </motion.p>
          </div>

          {/* Main Content */}
          <div className="space-y-16">
            {/* Section 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                1. Information We Collect
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We may collect personal and non-personal information, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                <li>Personal details such as your name, email, and phone number.</li>
                <li>
                  Organizational information like company name, employee data,
                  and HR records.
                </li>
                <li>
                  Technical data such as IP address, browser type, and usage
                  statistics.
                </li>
              </ul>
            </motion.div>

            {/* Section 2 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-600 leading-relaxed">
                cloudpay uses your data to provide, improve, and personalize our
                HR management services. Specifically, we may use your
                information to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                <li>Facilitate HR operations and employee management.</li>
                <li>Communicate updates, support, and promotional content.</li>
                <li>Ensure security, compliance, and system reliability.</li>
              </ul>
            </motion.div>

            {/* Section 3 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                3. Data Protection and Security
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We implement advanced encryption, secure storage, and access
                control measures to protect your data from unauthorized access,
                alteration, or loss. Our infrastructure ensures a 99.9% uptime
                and continuous monitoring.
              </p>
            </motion.div>

            {/* Section 4 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                4. Data Sharing and Third Parties
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We do not sell your personal information. However, we may share
                data with trusted service providers who help us operate our
                platform, under strict confidentiality agreements and data
                protection standards.
              </p>
            </motion.div>

            {/* Section 5 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                5. Your Rights
              </h2>
              <p className="text-gray-600 leading-relaxed">
                You have the right to access, correct, or delete your personal
                data. You can also request information about how your data is
                used or withdraw your consent at any time.
              </p>
            </motion.div>

            {/* Section 6 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                6. Updates to This Policy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                cloudpay may update this Privacy Policy periodically. Any changes
                will be communicated through our platform, and the updated
                version will always be available on this page.
              </p>
            </motion.div>

            {/* Section 7 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                7. Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about this Privacy Policy or how your
                data is handled, please contact us at:
              </p>
              <p className="text-gray-700 mt-4">
                <strong>Email:</strong> prabhat[at]cloudpay[dot]co[dot]in <br />
                <strong>Address:</strong> SCO-59, Huda Market, Sector 9
                Faridabad 121006
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
