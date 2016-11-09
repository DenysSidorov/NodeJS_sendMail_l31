var nodemailer = require('nodemailer');
 
// create reusable transporter object using the default SMTP transport 
//var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');
 var smtpTransport = nodemailer.createTransport("SMTP",{ service: "Gmail",
 auth: {user: "000scorpions000@gmail.com", pass: "13579086421aaa"}
});
 
 
// setup e-mail data with unicode symbols 
var mailOptions = {
    from: '"Mike Pups" <mile_pusp@brambler.ru>', // sender address 
    to: "000scorpions0000@gmail.com, 1qazxsw23edccde30@gmail.com", // list of receivers
    subject: 'Very nise message', // Subject line 
    text: 'You are winner', // plaintext body
    html: '<h1>WINNER</h1>' // html body 
};
 
// send mail with defined transport object 
smtpTransport.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }else {
    console.log('Message sent: ' + info.response);
    console.log('Message sent: ' + info.messages);
    console.log('Message sent: ' + info);
	}
	
	// shut down the connection pool, no more messages% %
smtpTransport.close();
});