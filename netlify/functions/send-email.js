const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
    const { name, email, message } = JSON.parse(event.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'darshannagpal3@gmail.com',
            pass: 'zhbkxwtultjsxwrl' // Replace with your App Password
        }
    });

    const mailOptions = {
        from: email,
        to: 'darshannagpal2879@gmail.com',
        subject: 'New Contact Request',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Email sent successfully' })
        };
    } catch (error) {
        console.error('Error sending email:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error sending email' })
        };
    }
};
