const nodemailer = require('nodemailer');

const sendOrderConfirmationEmail = async (req, res) => {
    const { email, name } = req.body;

    try {
        // Configure the email transporter
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, 
                pass: process.env.EMAIL_PASS, 
            },
        });

        // Define the email options
        let mailOptions = {
            from: '"GearFlow" <gearflow2024@gmail.com>',
            to: email,
            subject: 'Order Confirmation - GearFlow',
            text: `Hello ${name},\n\nThank you for placing an order with GearFlow! A sales assistant will reach out to confirm your order details shortly.\n\nBest regards,\nGearFlow Team`,
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        // Send success response
        res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);

        // Send error response
        res.status(500).json({ success: false, message: 'Failed to send email.' });
    }
};

module.exports = { sendOrderConfirmationEmail };
