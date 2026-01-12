import { RequestHandler } from "express";
import nodemailer from "nodemailer";
import { SubscribeRequest, SubscribeResponse } from "@shared/api";

export const handleSubscribe: RequestHandler = async (req, res) => {
  try {
    const { email }: SubscribeRequest = req.body;

    // Validate email
    if (!email || !email.includes("@")) {
      const response: SubscribeResponse = {
        success: false,
        message: "Please provide a valid email address",
      };
      return res.status(400).json(response);
    }

    // Get SMTP configuration from environment variables
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587;
    const smtpUser = process.env.SMTP_USER;
    // Remove quotes if present (common .env mistake)
    const smtpPassword = process.env.SMTP_PASSWORD?.replace(/^["']|["']$/g, '');
    const ownerEmail = process.env.OWNER_EMAIL || smtpUser; // Owner email for notifications
    const siteName = process.env.SITE_NAME || "SPANISHLINGO STUDIOS";

    console.log("smtpHost", smtpHost);
    console.log("smtpUser", smtpUser);
    console.log("smtpPassword", smtpPassword ? "***" : "undefined");
    console.log("ownerEmail", ownerEmail);
    console.log("siteName", siteName);

    // Validate SMTP configuration
    if (!smtpHost || !smtpUser || !smtpPassword) {
      console.error("SMTP configuration is missing");
      const response: SubscribeResponse = {
        success: false,
        message: "Email service is not configured. Please contact the administrator.",
      };
      return res.status(500).json(response);
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
      // Additional options for better compatibility
      tls: {
        rejectUnauthorized: false, // Allow self-signed certificates
      },
    });

    // Verify transporter configuration
    console.log(`Attempting to connect to ${smtpHost}:${smtpPort} as ${smtpUser}`);
    await transporter.verify();
    console.log("✓ SMTP connection verified successfully");

    // Email to subscriber (confirmation) - Brand styled
    const subscriberMailOptions = {
      from: `"${siteName}" <${smtpUser}>`,
      to: email,
      subject: `Welcome to ${siteName}!`,
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to ${siteName}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #000000; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #000000;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <!-- Main Container -->
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; margin: 0 auto; background-color: #000000;">
          
          <!-- Header with Brand Name -->
          <tr>
            <td style="padding: 40px 0 30px 0; text-align: center; border-bottom: 2px solid #D63D32;">
              <h1 style="margin: 0; font-size: 32px; font-weight: 700; letter-spacing: 4px; color: #FFFFFF; text-transform: uppercase; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                SPANISHLINGO
              </h1>
              <h2 style="margin: 10px 0 0 0; font-size: 48px; font-weight: 700; letter-spacing: 6px; color: #D63D32; text-transform: uppercase; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                STUDIOS
              </h2>
            </td>
          </tr>

          <!-- Welcome Message -->
          <tr>
            <td style="padding: 50px 40px 30px 40px; text-align: center;">
              <h3 style="margin: 0 0 30px 0; font-size: 28px; font-weight: 700; color: #D63D32; text-transform: uppercase; letter-spacing: 2px;">
                WELCOME TO THE FAMILY
              </h3>
              <p style="margin: 0 0 25px 0; font-size: 18px; line-height: 1.8; color: #FFFFFF; text-transform: uppercase; letter-spacing: 1px;">
                Thank you for subscribing to ${siteName}!
              </p>
              <p style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.8; color: #CCCCCC;">
                We're thrilled to have you join our global music fusion community. You'll now be the first to know about our latest releases, exclusive events, and behind-the-scenes content.
              </p>
            </td>
          </tr>

          <!-- Red Accent Line -->
          <tr>
            <td style="padding: 0 40px;">
              <div style="height: 3px; background-color: #D63D32; width: 100px; margin: 0 auto;"></div>
            </td>
          </tr>

          <!-- Tagline Section -->
          <tr>
            <td style="padding: 40px 40px 30px 40px; text-align: center;">
              <p style="margin: 0 0 15px 0; font-size: 16px; line-height: 1.8; color: #FFFFFF; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 600;">
                A RICH MIX OF SPANISH × PUNJABI MUSIC FUSION
              </p>
              <p style="margin: 0; font-size: 14px; line-height: 1.8; color: #999999; font-style: italic;">
                Where Punjabi beats meet Spanish rhythm.<br>
                Creando pistas que hablan un solo idioma: la música.
              </p>
            </td>
          </tr>

          <!-- What to Expect Section -->
          <tr>
            <td style="padding: 30px 40px; background-color: #0A0A0A; border-left: 4px solid #D63D32;">
              <p style="margin: 0 0 20px 0; font-size: 14px; font-weight: 700; color: #D63D32; text-transform: uppercase; letter-spacing: 1px;">
                WHAT TO EXPECT
              </p>
              <ul style="margin: 0; padding-left: 20px; color: #CCCCCC; font-size: 15px; line-height: 2;">
                <li style="margin-bottom: 10px;">Latest music releases and exclusive drops</li>
                <li style="margin-bottom: 10px;">Upcoming events and concert announcements</li>
                <li style="margin-bottom: 10px;">Behind-the-scenes content and artist features</li>
                <li style="margin-bottom: 0;">Special offers and early access opportunities</li>
              </ul>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 50px 40px 40px 40px; text-align: center; border-top: 1px solid #1A1A1A;">
              <p style="margin: 0 0 10px 0; font-size: 12px; color: #666666; text-transform: uppercase; letter-spacing: 1px;">
                © ${new Date().getFullYear()} ${siteName}
              </p>
              <p style="margin: 0; font-size: 11px; color: #444444;">
                CRAFTED WITH RHYTHM & PASSION
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
      text: `Welcome to ${siteName}!\n\nThank you for subscribing! We're thrilled to have you join our global music fusion community. You'll now be the first to know about our latest releases, exclusive events, and behind-the-scenes content.\n\nA RICH MIX OF SPANISH × PUNJABI MUSIC FUSION\nWhere Punjabi beats meet Spanish rhythm.\n\n© ${new Date().getFullYear()} ${siteName}. All rights reserved.`,
    };

    // Email to owner (notification) - Brand styled
    const ownerMailOptions = {
      from: `"${siteName}" <${smtpUser}>`,
      to: ownerEmail,
      subject: `🎵 New Newsletter Subscription: ${email}`,
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Subscription - ${siteName}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #F5F5F5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #F5F5F5;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <!-- Main Container -->
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; margin: 0 auto; background-color: #FFFFFF; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          
          <!-- Header -->
          <tr>
            <td style="padding: 40px 40px 30px 40px; text-align: center; background-color: #000000; border-radius: 8px 8px 0 0;">
              <h1 style="margin: 0; font-size: 28px; font-weight: 700; letter-spacing: 3px; color: #FFFFFF; text-transform: uppercase; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                SPANISHLINGO
              </h1>
              <h2 style="margin: 8px 0 0 0; font-size: 36px; font-weight: 700; letter-spacing: 4px; color: #D63D32; text-transform: uppercase; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                STUDIOS
              </h2>
            </td>
          </tr>

          <!-- Notification Content -->
          <tr>
            <td style="padding: 40px 40px 30px 40px;">
              <h3 style="margin: 0 0 25px 0; font-size: 24px; font-weight: 700; color: #000000; text-transform: uppercase; letter-spacing: 1.5px;">
                🎵 NEW SUBSCRIPTION
              </h3>
              <p style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.6; color: #333333;">
                Someone just subscribed to your newsletter!
              </p>
            </td>
          </tr>

          <!-- Subscriber Details Box -->
          <tr>
            <td style="padding: 0 40px 30px 40px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #000000; border-left: 4px solid #D63D32; border-radius: 4px;">
                <tr>
                  <td style="padding: 25px 30px;">
                    <p style="margin: 0 0 12px 0; font-size: 12px; font-weight: 700; color: #D63D32; text-transform: uppercase; letter-spacing: 1px;">
                      SUBSCRIBER EMAIL
                    </p>
                    <p style="margin: 0; font-size: 18px; font-weight: 600; color: #FFFFFF; word-break: break-all;">
                      ${email}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Subscription Details -->
          <tr>
            <td style="padding: 0 40px 40px 40px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td style="padding: 15px 0; border-bottom: 1px solid #E5E5E5;">
                    <p style="margin: 0; font-size: 13px; font-weight: 700; color: #666666; text-transform: uppercase; letter-spacing: 0.5px;">
                      SUBSCRIPTION DATE
                    </p>
                    <p style="margin: 5px 0 0 0; font-size: 15px; color: #000000;">
                      ${new Date().toLocaleString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 15px 0 0 0;">
                    <p style="margin: 0; font-size: 13px; font-weight: 700; color: #666666; text-transform: uppercase; letter-spacing: 0.5px;">
                      TOTAL SUBSCRIBERS
                    </p>
                    <p style="margin: 5px 0 0 0; font-size: 15px; color: #000000;">
                      Growing community! 🎉
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 30px 40px; background-color: #F9F9F9; border-radius: 0 0 8px 8px; border-top: 1px solid #E5E5E5;">
              <p style="margin: 0; font-size: 12px; color: #666666; text-align: center; text-transform: uppercase; letter-spacing: 0.5px;">
                ${siteName} • Newsletter Management
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
      text: `New Newsletter Subscription - ${siteName}\n\nSubscriber Email: ${email}\nSubscription Date: ${new Date().toLocaleString()}\n\n---\n${siteName} Newsletter Management`,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(subscriberMailOptions),
      transporter.sendMail(ownerMailOptions),
    ]);

    const response: SubscribeResponse = {
      success: true,
      message: "Thank you for subscribing! Please check your email for confirmation.",
    };

    res.json(response);
  } catch (error) {
    // Log full error for debugging (server-side only)
    console.error("Subscription error:", error);
    
    // Determine user-friendly error message
    let errorMessage = "Failed to process subscription. Please try again later.";
    
    if (error instanceof Error) {
      const errorStr = error.message.toLowerCase();
      
      // Check for authentication errors
      if (errorStr.includes("invalid login") || 
          errorStr.includes("authentication failed") ||
          errorStr.includes("badcredentials") ||
          errorStr.includes("username and password not accepted")) {
        errorMessage = "Email service authentication failed. Please check SMTP credentials.";
        console.error("SMTP Authentication Error - Check your SMTP_USER and SMTP_PASSWORD in .env");
      } else if (errorStr.includes("connection") || errorStr.includes("timeout")) {
        errorMessage = "Could not connect to email server. Please check SMTP settings.";
        console.error("SMTP Connection Error - Check your SMTP_HOST and SMTP_PORT in .env");
      } else if (errorStr.includes("enotfound") || errorStr.includes("dns")) {
        errorMessage = "Email server not found. Please check SMTP host configuration.";
        console.error("SMTP Host Error - Check your SMTP_HOST in .env");
      }
    }
    
    const response: SubscribeResponse = {
      success: false,
      message: errorMessage,
    };
    res.status(500).json(response);
  }
};
