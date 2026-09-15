"use client";

import { forwardRef, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { Loader2 } from "lucide-react";
import type { ChromeProps } from "../lib/content";

interface ContactFormProps {
  copy: ChromeProps["contact"]["copy"];
  emailjs: ChromeProps["contact"]["emailjs"];
  email: string;
  labelSize?: string;
  inputSize?: string;
  textareaRows?: number;
  buttonPadding?: string;
  buttonTextSize?: string;
}

const TOAST_OPTIONS = {
  position: "top-right" as const,
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark" as const,
};

const ContactForm = forwardRef<HTMLDivElement, ContactFormProps>(
  (
    {
      copy,
      emailjs: config,
      email,
      labelSize = "text-[14px]",
      inputSize = "text-[16px]",
      textareaRows = 4,
      buttonPadding = "px-10 py-3",
      buttonTextSize = "text-[14px]",
    },
    ref
  ) => {
    const formRef = useRef<HTMLFormElement | null>(null);
    const [isSending, setIsSending] = useState(false);
    const configured = Boolean(config.serviceId && config.templateId && config.publicKey);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!formRef.current || !configured) return;

      setIsSending(true);

      emailjs.sendForm(config.serviceId, config.templateId, formRef.current, config.publicKey).then(
        () => {
          formRef.current?.reset();
          setIsSending(false);
          toast.success(copy.successMessage || "Thank you! I'll get back to you soon!", TOAST_OPTIONS);
        },
        (error) => {
          console.error("EmailJS error:", error?.text || error);
          setIsSending(false);
          toast.error(copy.errorMessage || "Oops! Something went wrong. Please try again or contact me directly.", TOAST_OPTIONS);
        }
      );
    };

    const inputClass = `w-full bg-[#1a1a1a] rounded-[4px] px-4 py-3 text-white font-['Inter',sans-serif] ${inputSize} focus:outline-none focus:ring-2 focus:ring-[#d3e97a]`;
    const labelClass = `font-['Inter',sans-serif] text-[#c7c7c7] ${labelSize}`;

    return (
      <div ref={ref} className="space-y-6">
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="contact-name" className={labelClass}>{copy.nameLabel || "Name"}</label>
              <input id="contact-name" name="from_name" type="text" required className={inputClass} />
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-email" className={labelClass}>{copy.emailLabel || "Email"}</label>
              <input id="contact-email" name="from_email" type="email" required className={inputClass} />
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-message" className={labelClass}>{copy.messageLabel || "Message"}</label>
              <textarea id="contact-message" name="message" rows={textareaRows} required className={`${inputClass} resize-none`} />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSending || !configured}
            className={`bg-[#d3e97a] rounded-full ${buttonPadding} font-['Inter',sans-serif] font-bold ${buttonTextSize} text-neutral-950 uppercase hover:bg-[#c5db6c] transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2`}
          >
            {isSending ? copy.sendingLabel || "Submitting" : copy.submitLabel || "Submit"}
            {isSending && <Loader2 className="w-4 h-4" style={{ animation: "spin 1s linear infinite" }} />}
          </button>

          {!configured && (
            <p className="font-['Inter',sans-serif] text-[#c7c7c7] text-[13px]">
              The contact form is temporarily unavailable — email me at{" "}
              <a href={`mailto:${email}`} className="text-[#d3e97a] hover:text-white">{email}</a>.
            </p>
          )}
        </form>
      </div>
    );
  }
);

ContactForm.displayName = "ContactForm";

export default ContactForm;
