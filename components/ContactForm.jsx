'use client';

import { useState } from 'react';
import { FiSend, FiCheckCircle, FiAlertCircle, FiArrowRight, FiArrowLeft } from 'react-icons/fi';

const SERVICES = [
  'Web Development',
  'Mobile App Development',
  'Full Stack Application',
  'UI / UX Design',
];

const ContactForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [selectedServices, setSelectedServices] = useState([]);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const step1Valid = formData.name.trim() !== '' && formData.email.trim() !== '';

  const handleNext = () => {
    if (step1Valid) {
      setStatus({ type: '', message: '' });
      setStep(2);
    } else {
      setStatus({ type: 'error', message: 'Please enter your name and email to continue.' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.message.trim() === '') {
      setStatus({ type: 'error', message: 'Please write a message before sending.' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    const finalSubject =
      formData.subject.trim() ||
      (selectedServices.length ? `Inquiry: ${selectedServices.join(', ')}` : 'General Inquiry');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: finalSubject,
          message: formData.message,
          services: selectedServices,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus({ type: 'success', message: "Message sent! I'll get back to you shortly." });
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSelectedServices([]);
        setStep(2);
      } else {
        setStatus({ type: 'error', message: data.message || 'Send failed. Please try again.' });
      }
    } catch {
      setStatus({ type: 'error', message: 'Network error. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="card border border-emerald-100/60 bg-white/80 p-5 backdrop-blur-sm sm:p-7">

      {/* Terminal prompt header */}
      <div className="mb-4 flex items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-100 pb-2.5">
        <div className="flex items-center gap-2">
          <span className="text-emerald-600 font-bold">syam:~$</span>
          <span>./send_message.sh</span>
        </div>
        <span className="text-[10px] text-slate-350 select-none font-sans uppercase tracking-wide">
          Step {step} / 2
        </span>
      </div>

      {/* Progress bar */}
      <div className="mb-5 flex items-center gap-3">
        <div className="flex-1 h-1 rounded-full bg-emerald-100 overflow-hidden">
          <div
            className="h-1 rounded-full bg-emerald-500 transition-all duration-400 shadow-[0_0_6px_rgba(16,185,129,0.4)]"
            style={{ width: step === 1 ? '50%' : '100%' }}
          />
        </div>
        <span className="text-[10px] font-bold font-mono text-slate-400 whitespace-nowrap">
          {step === 1 ? '1 of 2' : '2 of 2'}
        </span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">

        {step === 1 ? (
          <div className="space-y-4 animate-fade-in">

            {/* Name + Email */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                { id: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com' },
              ].map(({ id, label, type, placeholder }) => (
                <div key={id}>
                  <label
                    htmlFor={id}
                    className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono"
                  >
                    {label}
                  </label>
                  <input
                    type={type}
                    id={id}
                    name={id}
                    value={formData[id]}
                    onChange={handleChange}
                    required
                    placeholder={placeholder}
                    className="input"
                  />
                </div>
              ))}
            </div>

            {/* Services */}
            <div>
              <p className="mb-2.5 text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono">
                Services Needed
              </p>
              <div className="space-y-2">
                {SERVICES.map((service) => {
                  const active = selectedServices.includes(service);
                  return (
                    <label
                      key={service}
                      className={`flex cursor-pointer select-none items-center gap-3 rounded-lg border px-3.5 py-2.5 text-sm font-medium transition-all duration-200 ${
                        active
                          ? 'border-emerald-300 bg-emerald-50 text-emerald-800'
                          : 'border-slate-200 bg-slate-50/60 text-slate-600 hover:border-emerald-200 hover:bg-emerald-50/30'
                      }`}
                    >
                      {/* Custom checkbox */}
                      <span
                        className={`flex h-4 w-4 flex-shrink-0 items-center justify-center rounded border-2 transition-all ${
                          active
                            ? 'border-emerald-500 bg-emerald-500'
                            : 'border-slate-300 bg-white'
                        }`}
                      >
                        {active && (
                          <svg className="h-2.5 w-2.5 text-white" viewBox="0 0 10 10" fill="none">
                            <path d="M1.5 5.5l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </span>
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={active}
                        onChange={() => toggleService(service)}
                      />
                      {service}
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Step 1 error */}
            {status.message && step === 1 && (
              <div className="flex items-center gap-2 rounded-lg border border-red-100 bg-red-50 p-3 text-xs text-red-600">
                <FiAlertCircle className="h-3.5 w-3.5 flex-shrink-0" />
                {status.message}
              </div>
            )}

            <button
              type="button"
              onClick={handleNext}
              className="btn btn-primary w-full font-mono"
            >
              Next
              <FiArrowRight className="h-4 w-4" />
            </button>
          </div>

        ) : (

          <div className="space-y-4 animate-fade-in">

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono">
                Subject <span className="text-slate-350 normal-case font-normal">(optional)</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project details or job query"
                className="input"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label htmlFor="message" className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about your project or opportunity..."
                className="textarea min-h-[150px]"
              />
            </div>

            {/* Status */}
            {status.message && (
              <div className={`flex items-start gap-2.5 rounded-lg border p-3 text-xs ${
                status.type === 'success'
                  ? 'border-emerald-100 bg-emerald-50 text-emerald-700'
                  : 'border-red-100 bg-red-50 text-red-600'
              }`}>
                {status.type === 'success'
                  ? <FiCheckCircle className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" />
                  : <FiAlertCircle className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" />}
                {status.message}
              </div>
            )}

            {/* Back + Send */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => { setStep(1); setStatus({ type: '', message: '' }); }}
                className="btn btn-secondary font-mono"
              >
                <FiArrowLeft className="h-4 w-4" />
                Back
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary font-mono disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend className="h-4 w-4" />
                    Send
                  </>
                )}
              </button>
            </div>
          </div>
        )}

      </form>
    </div>
  );
};

export default ContactForm;
