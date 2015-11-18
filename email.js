var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport();

var mailOptions = {
    from: 'HeadBangers ✔ <HeadBangers@github.com>', // sender address
    to: 'rpsingh2@ncsu.edu, kutsav@ncsu.edu, rarora4@ncsu.edu', // list of receivers
    subject: 'File Upload Successful', // Subject line
    text: 'Feature is on - Email Sent ', // plaintext body
    html: '<b>Feature is on - Email Sent </b>' // html body
};

transporter.sendMail({
	from: HeadBangers@github.com
    to: 'rpsingh2@ncsu.edu, kutsav@ncsu.edu, rarora4@ncsu.edu',
    subject: 'Email Success',
    text: 'Email Sent'
});