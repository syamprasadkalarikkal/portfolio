import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

const escapeHtml = (value = '') =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

const isValidEmail = (value = '') => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const cleanEnvValue = (value = '') => value.trim().replace(/^['"]|['"]$/g, '');

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const rateLimitStore = globalThis.__portfolioContactRateLimit ?? new Map();
globalThis.__portfolioContactRateLimit = rateLimitStore;

const getClientIp = (req) => {
  const forwardedFor = req.headers.get('x-forwarded-for');
  return forwardedFor?.split(',')[0]?.trim() || req.headers.get('x-real-ip') || 'unknown';
};

const checkRateLimit = (key) => {
  const now = Date.now();
  const current = rateLimitStore.get(key);

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true, retryAfter: RATE_LIMIT_WINDOW_MS };
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return { allowed: false, retryAfter: current.resetAt - now };
  }

  current.count += 1;
  return { allowed: true, retryAfter: current.resetAt - now };
};

const getMailErrorMessage = (error) => {
  const response = String(error?.response || error?.message || '').toLowerCase();

  if (response.includes('invalid login') || response.includes('username and password')) {
    return 'Email login failed. Regenerate the Gmail app password and update EMAIL_PASS.';
  }

  if (response.includes('less secure') || response.includes('application-specific password')) {
    return 'Gmail requires an app password for the contact form account.';
  }

  if (error?.code === 'EAUTH') {
    return 'Email authentication failed. Regenerate the Gmail app password and update EMAIL_PASS.';
  }

  if (error?.code === 'ECONNECTION' || error?.code === 'ETIMEDOUT') {
    return 'Email server connection failed. Please try again in a moment.';
  }

  return 'Failed to send message. Please email me directly from the contact card.';
};

const buildEmailHtml = ({ name, email, subject, message, services }) => {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');
  const safeServices = services.map((service) => escapeHtml(service));

  const serviceHtml = safeServices.length
    ? safeServices
        .map(
          (service) =>
            '<span style="display:inline-block;margin:0 8px 8px 0;padding:7px 11px;border-radius:999px;background:#ecfdf5;border:1px solid #a7f3d0;color:#047857;font-size:12px;font-weight:700;">' +
            service +
            '</span>'
        )
        .join('')
    : '<span style="color:#64748b;font-size:14px;">General inquiry</span>';

  return (
    '<div style="margin:0;padding:24px;background:#f6faf8;font-family:Arial,Helvetica,sans-serif;color:#0f172a;">' +
      '<div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #d9f2e6;border-radius:14px;overflow:hidden;box-shadow:0 10px 30px rgba(15,23,42,0.06);">' +
        '<div style="padding:24px 28px;background:#047857;color:#ffffff;">' +
          '<div style="font-size:12px;letter-spacing:1.8px;text-transform:uppercase;font-weight:700;opacity:0.86;">Portfolio Contact</div>' +
          '<h1 style="margin:8px 0 0;font-size:24px;line-height:1.3;font-weight:800;">New message from ' + safeName + '</h1>' +
        '</div>' +
        '<div style="padding:26px 28px;">' +
          '<table role="presentation" cellspacing="0" cellpadding="0" style="width:100%;border-collapse:collapse;margin-bottom:22px;">' +
            '<tr>' +
              '<td style="padding:12px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;">' +
                '<div style="font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#64748b;font-weight:700;margin-bottom:5px;">Name</div>' +
                '<div style="font-size:15px;font-weight:700;color:#0f172a;">' + safeName + '</div>' +
              '</td>' +
            '</tr>' +
            '<tr><td style="height:10px;"></td></tr>' +
            '<tr>' +
              '<td style="padding:12px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;">' +
                '<div style="font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#64748b;font-weight:700;margin-bottom:5px;">Email</div>' +
                '<a href="mailto:' + safeEmail + '" style="font-size:15px;font-weight:700;color:#047857;text-decoration:none;">' + safeEmail + '</a>' +
              '</td>' +
            '</tr>' +
            '<tr><td style="height:10px;"></td></tr>' +
            '<tr>' +
              '<td style="padding:12px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;">' +
                '<div style="font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#64748b;font-weight:700;margin-bottom:5px;">Subject</div>' +
                '<div style="font-size:15px;font-weight:700;color:#0f172a;">' + safeSubject + '</div>' +
              '</td>' +
            '</tr>' +
          '</table>' +
          '<div style="margin-bottom:22px;">' +
            '<div style="font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#64748b;font-weight:700;margin-bottom:10px;">Services Requested</div>' +
            '<div>' + serviceHtml + '</div>' +
          '</div>' +
          '<div>' +
            '<div style="font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#64748b;font-weight:700;margin-bottom:10px;">Message</div>' +
            '<div style="padding:18px 20px;background:#f8fafc;border-left:4px solid #10b981;border-radius:10px;color:#1e293b;font-size:15px;line-height:1.7;white-space:normal;">' + safeMessage + '</div>' +
          '</div>' +
        '</div>' +
        '<div style="padding:16px 28px;background:#f8fafc;border-top:1px solid #e2e8f0;color:#64748b;font-size:12px;line-height:1.5;">Reply directly to this email to contact ' + safeName + '.</div>' +
      '</div>' +
    '</div>'
  );
};

export async function POST(req) {
  try {
    const { name = '', email = '', subject = '', message = '', services = [] } = await req.json();
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedSubject = subject.trim();
    const trimmedMessage = message.trim();
    const selectedServices = Array.isArray(services)
      ? services.map((service) => String(service).trim()).filter(Boolean)
      : [];

    if (!trimmedName || !trimmedEmail || !trimmedSubject || !trimmedMessage) {
      return NextResponse.json(
        { message: 'All fields are required.' },
        { status: 400 }
      );
    }

    if (!isValidEmail(trimmedEmail)) {
      return NextResponse.json(
        { message: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const rateLimit = checkRateLimit(getClientIp(req));

    if (!rateLimit.allowed) {
      return NextResponse.json(
        { message: 'Too many messages. Please try again later.' },
        {
          status: 429,
          headers: { 'Retry-After': String(Math.ceil(rateLimit.retryAfter / 1000)) },
        }
      );
    }

    const emailUser = cleanEnvValue(process.env.EMAIL_USER || '');
    const emailPass = cleanEnvValue(process.env.EMAIL_PASS || '').replace(/\s/g, '');
    const contactEmail = cleanEnvValue(process.env.CONTACT_EMAIL || '') || emailUser;

    if (!emailUser || !emailPass || !contactEmail) {
      console.error('Missing EMAIL_USER, EMAIL_PASS, or CONTACT_EMAIL for contact form.');
      return NextResponse.json(
        { message: 'Email service is not configured yet.' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: emailUser,
        pass: emailPass,
      },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
    });

    await transporter.sendMail({
      from: { name: 'Portfolio Contact', address: emailUser },
      to: contactEmail,
      replyTo: { name: trimmedName, address: trimmedEmail },
      subject: 'Portfolio Contact: ' + trimmedSubject,
      text: [
        'New Message from Portfolio',
        '',
        'Name: ' + trimmedName,
        'Email: ' + trimmedEmail,
        'Subject: ' + trimmedSubject,
        'Services: ' + (selectedServices.length ? selectedServices.join(', ') : 'General inquiry'),
        '',
        'Message:',
        trimmedMessage,
      ].join('\n'),
      html: buildEmailHtml({
        name: trimmedName,
        email: trimmedEmail,
        subject: trimmedSubject,
        message: trimmedMessage,
        services: selectedServices,
      }),
    });

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: getMailErrorMessage(error) },
      { status: 500 }
    );
  }
}
