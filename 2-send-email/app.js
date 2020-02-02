const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'email',
        pass: 'pass'
    }
});

const mailOptions = {
    from: 'email',
    to: 'email',
    subject: 'Hello there [test email]',
    text: 'Hello, if you can read this message it works'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Email sent: " + info.response);
    }
});