import nodemailer from 'nodemailer';

const host = process.env.SMTP_HOST || '';
const port = parseInt(process.env.SMTP_PORT || '587', 10);
const user = process.env.SMTP_USER || '';
const pass = process.env.SMTP_PASS || '';
const from = process.env.SMTP_FROM || 'MetaEndure Labs <security@metaendurelabs.com>';

export async function sendOtpEmail(to: string, otp: string): Promise<{ success: boolean; preview?: boolean; error?: string }> {
  // If SMTP is configured, send the real email
  if (host && user && pass) {
    try {
      const transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: { user, pass }
      });

      await transporter.sendMail({
        from,
        to,
        subject: 'Your MetaEndure Security OTP Code',
        html: `
          <div style="font-family: Arial, sans-serif; background: #070d09; color: #ffffff; padding: 30px; border-radius: 16px; max-width: 500px; margin: auto;">
            <div style="text-align: center; margin-bottom: 20px;">
              <h2 style="color: #76C043; margin: 0; font-size: 24px; text-transform: uppercase;">METAENDURE LABS</h2>
              <p style="color: #888888; font-size: 12px; margin-top: 5px;">COMMAND CENTER VERIFICATION</p>
            </div>
            <p style="font-size: 14px; color: #cccccc; line-height: 1.5;">
              A request was made to reset the password for your MetaEndure account. Enter the verification code below to authorize this change:
            </p>
            <div style="background: rgba(118, 192, 67, 0.15); border: 1px solid rgba(118, 192, 67, 0.4); border-radius: 12px; text-align: center; padding: 20px; margin: 25px 0;">
              <span style="font-size: 32px; font-weight: 900; letter-spacing: 8px; color: #76C043; font-family: monospace;">
                ${otp}
              </span>
            </div>
            <p style="font-size: 12px; color: #777777; margin: 0;">
              This code will expire in 10 minutes. If you did not initiate this request, you can safely ignore this email.
            </p>
          </div>
        `
      });

      return { success: true };
    } catch (err: any) {
      console.error('SMTP send error:', err);
      return { success: false, error: err.message };
    }
  }

  // Development mode: Output clearly in server console & return preview flag
  console.log('====================================================');
  console.log(`[DEV SECURITY OTP] Code for ${to}: >>> ${otp} <<<`);
  console.log('====================================================');
  return { success: true, preview: true };
}
