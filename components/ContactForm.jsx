'use client';

import { useState } from 'react';
import MalayalamText from './MalayalamText';

export default function ContactForm() {
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const { topic, ...fields } = Object.fromEntries(new FormData(form));
    setSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...fields, services: topic ? [topic] : [] }),
      });
      const { message } = await response.json();
      if (!response.ok) {
        setStatus({ message: message || 'Could not send your message. Try again.', error: true });
        return;
      }
      form.reset();
      setStatus({ message: 'Message sent. Thank you for reaching out.' });
    } catch {
      setStatus({ message: 'Could not send your message. Try again or contact me by email.', error: true });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="kerala-contact-form" onSubmit={handleSubmit} aria-labelledby="contact-form-title">
      <MalayalamText as="h3" className="portfolio-kicker">ഒരു കുറിപ്പ് അയക്കാം</MalayalamText>
      <p id="contact-form-title" className="contact-form-title">Send a message</p>
      <div className="contact-fields">
        <label>Name <input name="name" autoComplete="name" required /></label>
        <label>Email <input name="email" type="email" autoComplete="email" required /></label>
        <label>Subject <input name="subject" required /></label>
        <label>
          Topic <span>(optional)</span>
          <select name="topic" defaultValue="">
            <option value="">Select a topic</option>
            <option>ERPNext development</option>
            <option>Saudi e-invoicing</option>
            <option>Web development</option>
            <option>Job or referral</option>
            <option>Other</option>
          </select>
        </label>
        <label className="contact-message">Message <textarea name="message" rows={5} required /></label>
      </div>
      <button type="submit" className="portfolio-button contact-submit" disabled={submitting}>
        {submitting ? 'Sending…' : 'Send message'}
      </button>
      {status && <p className="contact-feedback" role={status.error ? 'alert' : 'status'}>{status.message}</p>}
    </form>
  );
}
