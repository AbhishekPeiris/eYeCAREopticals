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
                margin: 0;
                padding: 0;
                background-color: #f8f9fa;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
            }
            .header {
                padding: 20px;
                text-align: center;
                background-color: #f8f9fa;
            }
            .header h1 {
                color: #333;
                margin-bottom: 10px;
            }
            .thnkword {
                background-color: #ff4500;
                color: #fff;
                padding: 5px;
                border-radius: 5px;
                display: inline-block;
                margin-bottom: 10px;
            }
            .content {
                padding: 20px;
                background-color: #fff;
                border-radius: 5px;
                box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
            }
            .details {
                margin-bottom: 20px;
            }
            .details h2 {
                margin-bottom: 5px;
                color: #333;
            }
            .details p {
                margin: 0;
                color: #666;
            }
            .footer {
                padding: 20px;
                text-align: center;
                background-color: #f8f9fa;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>eyeCAREoptical Reservation</h1>
                <p class="thnkword">Thanks for your reservation!</p>
            </div>
            <div class="content">
                <div class="details">
                    <h2>Customer Details:</h2>
                    <p><strong>Name:</strong> ${object.cusname}</p>
                    <p><strong>Contact:</strong> ${object.contact}</p>
                    <p><strong>Address:</strong> ${object.address}</p>
                    <p><strong>Email:</strong> ${object.email}{{email}}</p>
                </div>
                <div class="details">
                    <h2>Reservation Details:</h2>
                    <img src=${object.imageurlcolor} alt="Item" width="200" /><br/>
                    <p><strong>Model:</strong> ${object.model}</p>
                    <p><strong>Type:</strong> ${object.type}</p>
                    <p><strong>Brand:</strong> ${object.brand}</p>
                    <p><strong>Gender:</strong> ${object.gender}</p>
                    <p><strong>Frame Size:</strong> ${object.framesize}</p>
                    <p><strong>Price:</strong> ${object.price}</p>
                </div>
            </div>
            <div class="footer">
                <p>For any inquiries, please contact us at <a href="eyecareopticals2024@gmail.com">eyecareopticals2024@gmail.com</a>.</p>
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