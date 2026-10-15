import * as yup from 'yup';
import type { Messages } from '@/i18n/messages';

export type ContactValues = { name: string; email: string; subject: string; message: string };
export const initialContactValues: ContactValues = {
  name: '',
  email: '',
  subject: '',
  message: ''
};
export const contactConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_5dvhbjd',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_nm4l82i',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'lkrFFPph0bI0oKQRR',
  siteKey:
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
    (process.env.NODE_ENV === 'development' ? '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI' : '')
};
export function createContactSchema(
  messages: Pick<Messages, 'required' | 'invalidEmail' | 'tooLong'>
) {
  return yup.object({
    name: yup.string().trim().max(100, messages.tooLong).required(messages.required),
    email: yup
      .string()
      .trim()
      .email(messages.invalidEmail)
      .max(254, messages.tooLong)
      .required(messages.required),
    subject: yup.string().trim().max(200, messages.tooLong).required(messages.required),
    message: yup.string().trim().max(5000, messages.tooLong).required(messages.required)
  });
}
