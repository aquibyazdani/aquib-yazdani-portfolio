import { forwardRef, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { Loader2 } from "lucide-react";

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
          toast.success("Thank you! I'll get back to you soon!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        },
        (error) => {
          console.error("EmailJS error:", error.text || error);
          setIsSending(false);
          toast.error(
            "Oops! Something went wrong. Please try again or contact me directly.",
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            }
          );
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
            className={`bg-[#d3e97a] rounded-full ${buttonPadding} font-['Manrope',sans-serif] font-bold ${buttonTextSize} text-neutral-950 uppercase hover:bg-[#c5db6c] transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2`}
          >
            {isSending ? "Submitting" : "Submit"}
            {isSending && (
              <Loader2
                className="w-4 h-4"
                style={{ animation: "spin 1s linear infinite" }}
              />
            )}
          </button>
        </form>
      </div>
    );
  }
);

ContactForm.displayName = "ContactForm";

export default ContactForm;
