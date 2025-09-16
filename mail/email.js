const nodemailer = require("nodemailer");
const {template} = require("./mail.template");

const sendGeneralMail = (mailOptions) => {
    try {
        console.log("mailOptions",mailOptions.to,mailOptions.from)
        console.log("env",process.env.EMAIL,process.env.PASS)
        mailOptions.from = mailOptions.from || 'narendraotusone@gmail.com';
        mailOptions.html = mailOptions.html ? mailOptions.html : template(mailOptions.body)
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: process.env.EMAIL,
              pass: process.env.PASS,
            },
          });

        return new Promise((resolve, reject) => {
            try {
                if (!mailOptions.to) {
                    resolve('Email address is required');
                }     
                else {
                    transporter.sendMail({
                        to: mailOptions.to,
                        from: mailOptions.from,
                        subject: mailOptions.subject,
                        html: mailOptions.html
                    }, (error, info) => {
                        if (error) {
                            console.error(error);
                            resolve(error.message);
                        }
                        else {
                            console.info('Email sent: ' + info);
                            resolve(true);
                        }
                    });
                }
            }
            catch (e) {
                console.error(e);
                reject(e);
            }
        });
    }
    catch (e) {
        console.error(e);
    }
}

module.exports = { sendGeneralMail };