"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import type { Locale } from "@/lib/i18n/types";

interface ContactFormProps {
  locale: Locale;
}

interface FormState {
  name: string;
  email: string;
  service_required: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  service_required: "",
  message: "",
};

const copy = {
  en: {
    nameLabel: "Name *",
    namePlaceholder: "Your name",
    emailLabel: "Email *",
    emailPlaceholder: "your@email.com",
    serviceLabel: "Service Required",
    servicePlaceholder: "Select a service...",
    services: [
      "Leak Detection",
      "Leak Repair",
      "General Plumbing",
      "Boiler Services",
      "Pool Leak Detection",
      "Pool Plumbing",
      "Maintenance",
      "Other",
    ],
    messageLabel: "Message *",
    messagePlaceholder: "Tell us about your plumbing issue...",
    submit: "Send Message",
    submitting: "Sending...",
    successTitle: "Message Sent!",
    successBody:
      "Thank you for contacting Pipebusters Lanzarote. We'll get back to you as soon as possible.",
    sendAnother: "Send Another Message",
    errorBody:
      "Failed to send message. Please try again or email us directly.",
  },
  es: {
    nameLabel: "Nombre *",
    namePlaceholder: "Tu nombre",
    emailLabel: "Email *",
    emailPlaceholder: "tu@email.com",
    serviceLabel: "Servicio Requerido",
    servicePlaceholder: "Selecciona un servicio...",
    services: [
      "Detección de Fugas",
      "Reparación de Fugas",
      "Fontanería General",
      "Servicios de Caldera",
      "Detección de Fugas en Piscina",
      "Fontanería de Piscina",
      "Mantenimiento",
      "Otro",
    ],
    messageLabel: "Mensaje *",
    messagePlaceholder: "Cuéntanos tu problema de fontanería...",
    submit: "Enviar Mensaje",
    submitting: "Enviando...",
    successTitle: "¡Mensaje Enviado!",
    successBody:
      "Gracias por contactar con Pipebusters Lanzarote. Te responderemos lo antes posible.",
    sendAnother: "Enviar Otro Mensaje",
    errorBody:
      "Error al enviar el mensaje. Por favor, inténtalo de nuevo o escríbenos directamente.",
  },
} as const;

const inputClass =
  "w-full bg-charcoal-light border border-border px-4 py-3 text-foreground rounded focus:border-electric-blue focus:outline-none focus:ring-1 focus:ring-electric-blue/30 transition-colors placeholder:text-muted-foreground";

const labelClass = "block text-sm font-medium text-foreground mb-1.5";

export function ContactForm({ locale }: ContactFormProps) {
  const t = copy[locale];
  const [formData, setFormData] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, locale }),
      });

      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
      }

      setSubmitted(true);
      setFormData(initialState);
    } catch (err) {
      console.error("Contact form error:", err);
      setError(t.errorBody);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-10">
        <CheckCircle className="w-14 h-14 text-electric-blue mx-auto mb-4" />
        <h3 className="text-xl font-bold text-foreground mb-3">
          {t.successTitle}
        </h3>
        <p className="text-muted-foreground mb-6">{t.successBody}</p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="bg-action-red text-white px-6 py-2.5 rounded font-semibold hover:bg-action-red-hover transition-colors"
        >
          {t.sendAnother}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className={labelClass}>
          {t.nameLabel}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className={inputClass}
          placeholder={t.namePlaceholder}
        />
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          {t.emailLabel}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className={inputClass}
          placeholder={t.emailPlaceholder}
        />
      </div>

      <div>
        <label htmlFor="service_required" className={labelClass}>
          {t.serviceLabel}
        </label>
        <select
          id="service_required"
          name="service_required"
          value={formData.service_required}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">{t.servicePlaceholder}</option>
          {t.services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          {t.messageLabel}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
          placeholder={t.messagePlaceholder}
        />
      </div>

      {error && (
        <div
          role="alert"
          className="border border-destructive/50 bg-destructive/10 text-foreground/90 px-4 py-3 text-sm rounded"
        >
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-action-red text-white py-3 px-6 rounded font-semibold hover:bg-action-red-hover transition-colors disabled:opacity-60 disabled:cursor-not-allowed glow-red"
      >
        {isSubmitting ? t.submitting : t.submit}
      </button>
    </form>
  );
}
