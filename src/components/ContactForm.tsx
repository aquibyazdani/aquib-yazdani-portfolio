import { forwardRef, useRef, useState } from "react";
import emailjs from "emailjs-com";

interface ContactFormProps {
  labelSize?: string;
  inputSize?: string;
  textareaRows?: number;
  buttonPadding?: string;
  buttonTextSize?: string;
}

const SERVICE_ID = "service_veddnmx";
const TEMPLATE_ID = "template_74daohb";
const USER_ID = "YaMenwRBpbdGB9Q9r";

const ContactForm = forwardRef<HTMLDivElement, ContactFormProps>(
  (
    {
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

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!formRef.current) return;

      setIsSending(true);

      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, USER_ID).then(
        (result) => {
          // keep behavior minimal: log & reset form
          console.log("EmailJS success:", result.text);
          formRef.current?.reset();
          setIsSending(false);
        },
        (error) => {
          console.error("EmailJS error:", error.text || error);
          setIsSending(false);
        }
      );
    };

    return (
      <div ref={ref} className="space-y-6">
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <label
                className={`font-['Manrope',sans-serif] text-[#c7c7c7] ${labelSize}`}
              >
                Name
              </label>
              <input
                name="from_name"
                type="text"
                required
                className={`w-full bg-[#1a1a1a] rounded-[4px] px-4 py-3 text-white font-['Manrope',sans-serif] ${inputSize} focus:outline-none focus:ring-2 focus:ring-[#d3e97a]`}
              />
            </div>

            <div className="space-y-2">
              <label
                className={`font-['Manrope',sans-serif] text-[#c7c7c7] ${labelSize}`}
              >
                Email
              </label>
              <input
                name="from_email"
                type="email"
                required
                className={`w-full bg-[#1a1a1a] rounded-[4px] px-4 py-3 text-white font-['Manrope',sans-serif] ${inputSize} focus:outline-none focus:ring-2 focus:ring-[#d3e97a]`}
              />
            </div>

            <div className="space-y-2">
              <label
                className={`font-['Manrope',sans-serif] text-[#c7c7c7] ${labelSize}`}
              >
                Message
              </label>
              <textarea
                name="message"
                rows={textareaRows}
                required
                className={`w-full bg-[#1a1a1a] rounded-[4px] px-4 py-3 text-white font-['Manrope',sans-serif] ${inputSize} focus:outline-none focus:ring-2 focus:ring-[#d3e97a] resize-none`}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSending}
            className={`bg-[#d3e97a] rounded-full ${buttonPadding} font-['Manrope',sans-serif] font-bold ${buttonTextSize} text-neutral-950 uppercase hover:bg-[#c5db6c] transition-colors`}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
);

ContactForm.displayName = "ContactForm";

export default ContactForm;
