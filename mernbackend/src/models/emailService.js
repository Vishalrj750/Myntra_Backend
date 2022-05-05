
const nodemailer = require('nodemailer')

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "d6e9910e90e136",
      pass: "a1e60fd36ee1fe"
    }
  });



  module.exports = transport;

// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   service: 'g',
//   auth: {
//     user: '21gsuma@gmail.com',
//     pass: 'Sunarnit@214'
//   }
// });

// var mailOptions = {
//   from: '21gsuma@gmail.com',
//   to: 'gsumanarendranithin@gmail.com',
//   subject: 'Sending Email using Node.js',
//   text: `Hi SumA thank you for your nice Node.js tutorials.
//           I will donate 50$ for this course. Please send me payment options.`
//   // html: '<h1>Hi Smartherd</h1><p>Your Messsage</p>'        
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });