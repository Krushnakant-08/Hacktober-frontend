import { Resend } from 'resend';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: 'Missing required fields' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.TO_EMAIL || 'parth.joshi23@pccoepune.org';
  const from = process.env.FROM_EMAIL || 'Hacktober <no-reply@yourdomain.com>';

  if (!apiKey) {
    return res.status(500).json({ ok: false, error: 'RESEND_API_KEY not configured' });
  }

  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from,
      to,
      reply_to: email,
      subject: `New contact form submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br/>${String(message).replace(/\n/g, '<br/>')}</p>`
    });

    if (result.error) {
      return res.status(500).json({ ok: false, error: result.error.message || 'Failed to send' });
    }

    return res.status(200).json({ ok: true, id: result.data?.id || null });
  } catch (err) {
    console.error('Resend send error:', err);
    return res.status(500).json({ ok: false, error: 'Failed to send email' });
  }
}
