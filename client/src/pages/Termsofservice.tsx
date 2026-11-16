import { motion } from "framer-motion";
import Navigation from "@/components/navigation";

export default function Terms() {
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
              Terms of Service
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Welcome to cloudpay. These Terms of Service govern your use of our
              platform, products, and services. By accessing or using our
              platform, you agree to comply with and be bound by these Terms.
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
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                By using cloudpay’s services, you confirm that you have read,
                understood, and agree to these Terms. If you do not agree, you
                must discontinue using our services immediately.
              </p>
            </motion.div>

            {/* Section 2 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                2. Use of Services
              </h2>
              <p className="text-gray-600 leading-relaxed">
                You agree to use our platform only for lawful business purposes
                and in compliance with all applicable laws and regulations. You
                are responsible for maintaining the confidentiality of your
                account credentials and all activities under your account.
              </p>
            </motion.div>

            {/* Section 3 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                3. Account Responsibilities
              </h2>
              <p className="text-gray-600 leading-relaxed">
                When creating an account with cloudpay, you must provide accurate
                and complete information. You are responsible for safeguarding
                your password and notifying us immediately of any unauthorized
                access to your account.
              </p>
            </motion.div>

            {/* Section 4 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                4. Intellectual Property
              </h2>
              <p className="text-gray-600 leading-relaxed">
                All content, trademarks, and materials on the cloudpay platform
                are the exclusive property of cloudpay or its licensors. You may
                not reproduce, modify, or distribute any materials without prior
                written consent.
              </p>
            </motion.div>

            {/* Section 5 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                5. Subscription and Payment
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Certain cloudpay features may require paid subscriptions. You
                agree to provide accurate billing information and authorize us
                to charge your payment method for applicable fees. All payments
                are non-refundable except as required by law.
              </p>
            </motion.div>

            {/* Section 6 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                6. Limitation of Liability
              </h2>
              <p className="text-gray-600 leading-relaxed">
                cloudpay is not liable for any indirect, incidental, or
                consequential damages resulting from your use or inability to
                use the platform. Our total liability shall not exceed the
                amount paid by you for the services in the preceding 12 months.
              </p>
            </motion.div>

            {/* Section 7 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                7. Termination
              </h2>
              <p className="text-gray-600 leading-relaxed">
                cloudpay reserves the right to suspend or terminate your account
                if you violate these Terms or engage in any activity that may
                harm the integrity or reputation of our platform.
              </p>
            </motion.div>

            {/* Section 8 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                8. Governing Law
              </h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms are governed by and construed in accordance with the
                laws of India, without regard to its conflict of law principles.
                Any disputes shall be subject to the exclusive jurisdiction of
                the courts in Faridabad, Haryana.
              </p>
            </motion.div>

            {/* Section 9 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                9. Changes to Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                cloudpay may modify these Terms from time to time. Continued use
                of the platform after changes are posted constitutes your
                acceptance of the updated Terms.
              </p>
            </motion.div>

            {/* Section 10 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                10. Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed">
                For questions about these Terms of Service or to report a
                violation, please contact us at:
              </p>
              <p className="text-gray-700 mt-4">
                <strong>Email:</strong> prabhat[at]cloudpay[dot]co[dot]in <br />
                <strong>Address:</strong> SCO-59, Huda Market, Sector 9,
                Faridabad 121006
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
