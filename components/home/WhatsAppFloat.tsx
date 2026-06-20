"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/data/site";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={`https://wa.me/${siteConfig.contact.phone.replace("+", "")}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-13 w-13 items-center justify-center rounded-full"
      style={{
        backgroundColor: "var(--reviva-green-dark)",
        boxShadow: "0 4px 18px rgba(30, 70, 28, 0.35)",
        height: "52px",
        width: "52px",
      }}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <FaWhatsapp size={24} color="white" />
    </motion.a>
  );
}
