import { useCallback, useEffect, useRef, useState } from 'react';
import { useFormik } from 'formik';
import emailjs from '@emailjs/browser';
import { Bio } from '@/data/constants';
import { useMessages } from '@/i18n';
import { contactConfig, createContactSchema, initialContactValues } from '@/lib/contact';
import type { ContactValues } from '@/lib/contact';
import Captcha from '@/components/Captcha';

export default function Contact() {
  const { messages, locale } = useMessages();
  const form = useRef<HTMLFormElement>(null);
  const lastFocusedSubmission = useRef(0);
  const [token, setToken] = useState('');
  const [captchaReset, setCaptchaReset] = useState(0);
  const [status, setStatus] = useState<'sent' | 'error' | null>(null);
  const [captchaMissing, setCaptchaMissing] = useState(false);
  const [loadCaptcha, setLoadCaptcha] = useState(false);
  const onTokenChange = useCallback((value: string) => {
    setToken(value);
    if (value) setCaptchaMissing(false);
  }, []);
  const formik = useFormik<ContactValues>({
    initialValues: initialContactValues,
    validationSchema: createContactSchema(messages),
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: async (values, { resetForm }) => {
      setStatus(null);
      if (!contactConfig.siteKey || !token) {
        setCaptchaMissing(true);
        return;
      }
      try {
        // EmailJS verifies the CAPTCHA token using the secret configured in its dashboard.
        await emailjs.send(
          contactConfig.serviceId,
          contactConfig.templateId,
          {
            ...Object.fromEntries(
              Object.entries(values).map(([key, value]) => [key, value.trim()])
            ),
            'g-recaptcha-response': token
          },
          { publicKey: contactConfig.publicKey, limitRate: { throttle: 1000 } }
        );
        setStatus('sent');
        resetForm();
      } catch {
        setStatus('error');
      } finally {
        setToken('');
        setCaptchaReset((current) => current + 1);
      }
    }
  });

  useEffect(() => {
    if (!form.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setLoadCaptcha(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px' }
    );
    observer.observe(form.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!formik.isSubmitting && formik.submitCount > lastFocusedSubmission.current) {
      lastFocusedSubmission.current = formik.submitCount;
      if (Object.keys(formik.errors).length > 0) {
        form.current
          ?.querySelector<HTMLInputElement | HTMLTextAreaElement>('[aria-invalid="true"]')
          ?.focus();
      }
    }
  }, [formik.submitCount, formik.isSubmitting, formik.errors]);

  const fields = ['name', 'email', 'subject', 'message'] as const;
  const hasErrors = formik.submitCount > 0 && Object.keys(formik.errors).length > 0;
  return (
    <section id="contact" tabIndex={-1} aria-labelledby="contact-title">
      <h2 id="contact-title" className="text-3xl font-bold sm:text-4xl">
        {messages.contact}
      </h2>
      <p className="mt-3 text-base text-text-secondary sm:text-lg">{messages.contactIntro}</p>
      <div className="mt-5 text-text-secondary">
        <a
          className="inline-flex min-h-11 items-center break-all text-text-primary underline underline-offset-4 transition-colors hover:text-icons-hover"
          href={`mailto:${Bio.email}`}>
          {Bio.email}
        </a>
        <p className="mt-1 text-sm">{Bio.location}</p>
        <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {messages.languages.map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
      </div>
      <form
        ref={form}
        onSubmit={formik.handleSubmit}
        noValidate
        className="mt-8 max-w-3xl"
        aria-busy={formik.isSubmitting}>
        <p role="alert" className="mb-4 min-h-5 text-sm text-error">
          {hasErrors ? messages.formErrors : ''}
        </p>
        <div className="grid gap-x-5 gap-y-4 sm:grid-cols-2">
          {fields.map((field) => {
            const error = formik.touched[field] ? formik.errors[field] : undefined;
            const common = {
              id: field,
              name: field,
              value: formik.values[field],
              onChange: formik.handleChange,
              onBlur: formik.handleBlur,
              disabled: formik.isSubmitting,
              required: true,
              'aria-invalid': Boolean(error),
              'aria-describedby': error ? `${field}-error` : undefined,
              className: 'form-input'
            };
            return (
              <div
                key={field}
                className={field === 'subject' || field === 'message' ? 'sm:col-span-2' : ''}>
                <label htmlFor={field} className="mb-2 block text-sm font-medium">
                  {messages.fields[field]}
                </label>
                {field === 'message' ? (
                  <textarea {...common} rows={5} maxLength={5000} />
                ) : (
                  <input
                    {...common}
                    type={field === 'email' ? 'email' : 'text'}
                    autoComplete={
                      field === 'name' ? 'name' : field === 'email' ? 'email' : undefined
                    }
                    maxLength={field === 'name' ? 100 : field === 'email' ? 254 : 200}
                  />
                )}
                <p id={`${field}-error`} className="mt-1 min-h-5 text-sm text-error">
                  {error || ''}
                </p>
              </div>
            );
          })}
        </div>
        <div className="mt-5" role="group" aria-labelledby="captcha-label">
          <p id="captcha-label" className="mb-3 text-sm font-medium">
            {messages.captchaLabel}
          </p>
          {contactConfig.siteKey ? (
            <div className="min-h-[78px]">
              {loadCaptcha && (
                <Captcha
                  key={locale}
                  siteKey={contactConfig.siteKey}
                  onTokenChange={onTokenChange}
                  resetKey={captchaReset}
                />
              )}
            </div>
          ) : (
            <p className="text-sm text-text-secondary">{messages.captchaUnavailable}</p>
          )}
          {captchaMissing && (
            <p role="alert" className="mt-2 text-sm text-error">
              {contactConfig.siteKey ? messages.captchaRequired : messages.captchaUnavailable}
            </p>
          )}
        </div>
        <button type="submit" disabled={formik.isSubmitting} className="button-primary mt-6">
          {formik.isSubmitting ? messages.sending : messages.send}
        </button>
        <div aria-live="polite" aria-atomic="true" className="mt-4 min-h-6 text-sm">
          {status && (
            <p className={status === 'sent' ? 'text-emerald-300' : 'text-error'}>
              {status === 'sent' ? messages.sent : messages.sendError}
            </p>
          )}
        </div>
      </form>
    </section>
  );
}
