"use client";

import { useState, type FormEvent } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { Loader2 } from "lucide-react";
import { site } from "../config/site";
import type { ContactForm as ContactFormData, FormField } from "../lib/content";

type Props = {
  form: ContactFormData | null;
  email: string;
};

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

type Values = Record<string, string | boolean>;

function initialValues(fields: FormField[]): Values {
  return Object.fromEntries(fields.map((f) => [f.name, f.type === "checkbox" ? false : ""]));
}

/** Mirrors the API's required/format rules so nothing is sent for an obviously invalid form. */
function validate(fields: FormField[], values: Values): Record<string, string> {
  const issues: Record<string, string> = {};
  for (const f of fields) {
    const v = values[f.name];
    if (f.type === "checkbox") {
      if (f.required && !v) issues[f.name] = `${f.label} is required`;
      continue;
    }
    const text = typeof v === "string" ? v.trim() : "";
    if (!text) {
      if (f.required) issues[f.name] = `${f.label} is required`;
      continue;
    }
    if (f.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)) issues[f.name] = `${f.label} must be a valid email address`;
    if (f.type === "url" && !/^https?:\/\/\S+$/i.test(text)) issues[f.name] = `${f.label} must be a link starting with http:// or https://`;
  }
  return issues;
}

const inputClass =
  "w-full bg-[#1a1a1a] rounded-[4px] px-4 py-3 text-white font-['Inter',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#d3e97a]";
const labelClass = "font-['Inter',sans-serif] text-[#c7c7c7] text-[15px]";

/**
 * Renders the CMS-defined contact form. Submissions go to the API inbox
 * and/or EmailJS depending on how the form is configured in the admin.
 */
export default function ContactForm({ form, email }: Props) {
  const [values, setValues] = useState<Values>(() => initialValues(form?.fields ?? []));
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  if (!form) {
    return (
      <p className="font-['Inter',sans-serif] text-[#c7c7c7] text-[15px] leading-[1.6]">
        {site.contact.fallbackText}{" "}
        <a href={`mailto:${email}`} className="text-[#d3e97a] hover:text-white">
          {email}
        </a>
        .
      </p>
    );
  }

  const set = (name: string, value: string | boolean) => {
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors(({ [name]: _removed, ...rest }) => rest);
  };

  const succeed = () => {
    setValues(initialValues(form.fields));
    toast.success(form.successMessage || "Thanks! Your message has been sent.", TOAST_OPTIONS);
  };
  const fail = (reason: unknown) => {
    console.error("Contact form error:", reason);
    toast.error(form.errorMessage || "Something went wrong. Please try again.", TOAST_OPTIONS);
  };

  // Order matters: validate, then save to the inbox (the API is the source
  // of truth for validation), and only then relay by email. Nothing is
  // emailed for an invalid submission, and a saved message still counts as
  // delivered if the email relay fails.
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const clientIssues = validate(form.fields, values);
    if (Object.keys(clientIssues).length) {
      setErrors(clientIssues);
      return;
    }

    setSending(true);
    setErrors({});
    try {
      if (form.storeSubmissions) {
        const res = await fetch(form.submitUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...values, _gotcha: honeypot }),
        });
        if (!res.ok) {
          const body = await res.json().catch(() => ({}));
          if (res.status === 400 && Array.isArray(body.issues)) {
            setErrors(Object.fromEntries(body.issues.map((i: { path: string; message: string }) => [i.path, i.message])));
          }
          throw new Error(body.error ?? `Request failed (${res.status})`);
        }
      }

      if (form.emailjs.enabled) {
        // EmailJS template variables use the field keys as names.
        const templateParams = Object.fromEntries(Object.entries(values).map(([k, v]) => [k, typeof v === "boolean" ? (v ? "Yes" : "No") : v]));
        try {
          await emailjs.send(form.emailjs.serviceId, form.emailjs.templateId, templateParams, form.emailjs.publicKey);
        } catch (err) {
          if (!form.storeSubmissions) throw err;
          console.error("Email relay failed; submission was saved:", err);
        }
      }

      succeed();
    } catch (err) {
      fail(err);
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {form.fields.map((field) => (
          <div key={field.name} className={`space-y-2 ${field.width === "half" ? "" : "sm:col-span-2"}`}>
            <Field field={field} value={values[field.name]} error={errors[field.name]} onChange={(v) => set(field.name, v)} />
          </div>
        ))}
      </div>

      {/* Honeypot — hidden from people, filled in by bots. */}
      <div className="absolute -left-[9999px] top-0 h-0 w-0 overflow-hidden" aria-hidden="true">
        <label>
          Leave this field empty
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
        </label>
      </div>

      <button
        type="submit"
        disabled={sending}
        className="bg-[#d3e97a] rounded-full px-10 py-3 font-['Inter',sans-serif] font-bold text-[14px] text-neutral-950 uppercase hover:bg-[#c5db6c] transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {sending ? site.contact.sendingLabel : form.submitLabel || "Send message"}
        {sending && <Loader2 className="w-4 h-4" style={{ animation: "spin 1s linear infinite" }} />}
      </button>
    </form>
  );
}

function Field({ field, value, error, onChange }: { field: FormField; value: string | boolean | undefined; error?: string; onChange: (v: string | boolean) => void }) {
  const id = `contact-${field.name}`;
  const errorId = `${id}-error`;
  const common = {
    id,
    name: field.name,
    required: field.required,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errorId : undefined,
  };
  const errorText = error && (
    <p id={errorId} className="font-['Inter',sans-serif] text-[#ff8a80] text-[13px]">
      {error}
    </p>
  );

  if (field.type === "checkbox") {
    return (
      <>
        <label htmlFor={id} className="flex items-start gap-3 cursor-pointer">
          <input {...common} type="checkbox" className="mt-1 size-4 accent-[#d3e97a]" checked={Boolean(value)} onChange={(e) => onChange(e.target.checked)} />
          <span className={labelClass}>
            {field.label}
            {field.required && <span className="text-[#d3e97a]"> *</span>}
          </span>
        </label>
        {errorText}
      </>
    );
  }

  const label = (
    <label htmlFor={id} className={labelClass}>
      {field.label}
      {field.required && <span className="text-[#d3e97a]"> *</span>}
    </label>
  );

  if (field.type === "textarea") {
    return (
      <>
        {label}
        <textarea {...common} rows={5} placeholder={field.placeholder || undefined} className={`${inputClass} resize-none`} value={String(value ?? "")} onChange={(e) => onChange(e.target.value)} />
        {errorText}
      </>
    );
  }

  if (field.type === "select") {
    return (
      <>
        {label}
        <select {...common} className={inputClass} value={String(value ?? "")} onChange={(e) => onChange(e.target.value)}>
          <option value="">{field.placeholder || "Select…"}</option>
          {field.options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        {errorText}
      </>
    );
  }

  return (
    <>
      {label}
      <input
        {...common}
        type={field.type}
        placeholder={field.placeholder || undefined}
        autoComplete={field.type === "email" ? "email" : field.type === "tel" ? "tel" : field.type === "url" ? "url" : undefined}
        className={inputClass}
        value={String(value ?? "")}
        onChange={(e) => onChange(e.target.value)}
      />
      {errorText}
    </>
  );
}
