var express= require("express");
var app= express();


var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sender@gmail.com',
    pass: '*****'
  }
});

var mailOptions = {
  from: 'sender@gmail.com',
  to: 'receiver@gmail.com',
  subject: 'Sending Email using Node.js',
  
  html:  '<p><b>Hello</b> Buddy</p>',
   
    attachments: [{
        filename: 'machine.jpg',

         content: new Buffer(
                    'machine.jpg',
                    'base64'
                )
                  
    }]

};
  
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
  transporter.close();
});
