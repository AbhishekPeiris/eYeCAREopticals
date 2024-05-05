const router = require('express').Router();
const EmailService = require("../services/EmailService");

function reservationEmail(object) {
    return `
        <html>
        <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
              }
              .header {
                background-color: #f8f9fa;
                padding: 20px;
                text-align: center;
              }
              .content {
                padding: 20px;
              }
              .footer {
                background-color: #f8f9fa;
                padding: 20px;
                text-align: center;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>Password Reset OTP</h2>
              </div>
              <div class="content">
                <p>Your OTP for password reset is: <strong>${object.cusname}</strong></p>
                <p>This OTP will${object.gender} expire in 10 minutes.</p>
              </div>
              <div class="footer">
                <p>If you didn't request this password reset, you can safely ignore this email.</p>
              </div>
            </div>
          </body>
        </html>
      `;
}

router.post('/summery', async (req, res) => {
    const { email, object } = req.body;

    if (!email) {
        return res.status(400).json({ message: "Email is required" });
    }
    const emailContent = reservationEmail(object);
    const subject = "eyeCAREoptical Reservation";

    try {
        await EmailService.sendEmail({ email }, emailContent, subject);
        return res.status(200).json({ message: "reservation email sent successfully" });
    } catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ message: "Error sending reservation email" });
    }

})


module.exports = router;