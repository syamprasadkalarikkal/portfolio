'use client';

import { useState } from 'react';
import { FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setStatus({ type: 'success', message: "Message sent! I'll get back to you soon." });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.message || 'Failed to send. Please try again.' });
      }
    } catch {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fields = [
    { id: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe' },
    { id: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
    { id: 'subject', label: 'Subject', type: 'text', placeholder: 'Job Opportunity / Project Inquiry' },
  ];

  return (
    <div className="card p-6 sm:p-8 h-full">
      <h3 className="text-xl font-extrabold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
        Send a Message
      </h3>
      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Name + Email Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {fields.slice(0, 2).map(({ id, label, type, placeholder }) => (
            <div key={id}>
              <label htmlFor={id} className="block text-xs font-semibold text-emerald-300/55 uppercase tracking-wide mb-2">
                {label}
              </label>
              <input
                type={type}
                id={id}
                name={id}
                value={formData[id]}
                onChange={handleChange}
                required
                className="input"
                placeholder={placeholder}
              />
            </div>
          ))}
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-xs font-semibold text-emerald-300/55 uppercase tracking-wide mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="input"
            placeholder="Job Opportunity / Project Inquiry"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-emerald-300/55 uppercase tracking-wide mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="textarea"
            placeholder="Tell me about your project or opportunity..."
          />
        </div>

        {/* Status */}
        {status.message && (
          <div className={`flex items-start gap-3 p-4 rounded-xl text-sm ${
            status.type === 'success'
              ? 'bg-green-50 dark:bg-green-900/15 border border-green-200 dark:border-green-800/50 text-green-700 dark:text-green-400'
              : 'bg-red-50 dark:bg-red-900/15 border border-red-200 dark:border-red-800/50 text-red-700 dark:text-red-400'
          }`}>
            {status.type === 'success'
              ? <FiCheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
              : <FiAlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />}
            <p>{status.message}</p>
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn btn-primary py-3 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <FiSend className="w-4 h-4" />
              Send Message
            </>
          )}
        </button>

      </form>
    </div>
  );
};

export default ContactForm;
