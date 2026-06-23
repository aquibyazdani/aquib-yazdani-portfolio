"use client";

import Navbar from "./Navbar";
import Footer from "./Footer";
import ContactSection from "./ContactSection";

export default function Contact() {
  return (
    <div className="bg-neutral-950 min-h-screen">
      <Navbar />

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <ContactSection />
        </div>
      </div>

      <Footer />
    </div>
  );
}
