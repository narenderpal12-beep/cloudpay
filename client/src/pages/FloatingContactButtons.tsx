import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export default function FloatingContactButtons() {
  const whatsappNumber = "+919990227900"; // change to your WhatsApp number
  const phoneNumber = "+919990227900"; // change to your phone number

  return (
    <div className="fixed bottom-20 right-3 flex flex-col gap-3 z-50">
      {/* WhatsApp Button - always visible */}
      <motion.a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="ml-16 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* <MessageCircle size={24} /> */}
        <img
      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
      alt="WhatsApp"
      className="whatsapp_icon"
      style={{ width: 32, height: 32, }} // optional
    />
      </motion.a>

      {/* Call Button - visible only on mobile */}
      <motion.a
        href={`tel:${phoneNumber}`}
        className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 flex items-center justify-center block md:hidden"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Phone size={24} />
      </motion.a>
    </div>
  );
}
