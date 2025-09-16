const button = (text, link) => `<a href="${link}" target="_blank" style="border: solid 1px #3498db; border-radius: 5px; box-sizing: border-box; cursor: pointer; display: inline-block; font-size: 14px; font-weight: bold; margin: 0; padding: 12px 25px; text-decoration: none; text-transform: capitalize; background-color: #3498db; border-color: #3498db; color: #ffffff;">${text}</a><br/><br/>`;
const emaiLogo = (imgURL) => `<img src=${imgURL} width={250} alt="email-logo" style="margin:10px; width:150px;"}></img>`
const paragraph = (text) => `<p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">${text}</p>`;

const contactUsEmailTemplate = (userName,email,mobile,message) => {
    const body = `
        ${emaiLogo('https://res.cloudinary.com/dznncrjxh/image/upload/v1713252865/edge_gplw0s.png')}
        ${`<p style="font-family: sans-serif; font-size: 20px; font-weight: 900; margin: 0; margin-bottom: 15px;">USER INFO</p>`}
        ${`<ul>
           <li style="font-family: sans-serif; list-style:none; text-align:left; font-size: 11px; font-weight: normal; margin: 0; margin-bottom: 15px;"> User Name :- ${userName}</li>
           <li style="font-family: sans-serif; list-style:none; text-align:left; font-size: 11px; font-weight: normal; margin: 0; margin-bottom: 15px;"> Email :- ${email}</li>
           <li style="font-family: sans-serif; list-style:none; text-align:left; font-size: 11px; font-weight: normal; margin: 0; margin-bottom: 15px;"> Mobile Number :- ${mobile}</li>
           <li style="font-family: sans-serif; list-style:none; text-align:left; font-size: 11px; font-weight: normal; margin: 0; margin-bottom: 15px;"> Message :- ${message}</li>
        </ul>`}
        ${`<p style="font-family: sans-serif; font-size: 11px; font-weight: normal; margin: 0; margin-bottom: 15px;">Powered by edge connect solutions</p>`}
      
    `;

    return `
        <!doctype html>
        <html>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <title>Email Verification</title>
            <style>
                /* Add your styles here */
            </style>
        </head>
        <body style="background-color: #f6f6f6; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
            <span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">
                This is preheader text. Some clients will show this text as a preview.
            </span>
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f6f6f6; width: 100%;" width="100%" bgcolor="#f6f6f6">
                <tr style="text-align:center">
                    <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>
                    <td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; max-width: 580px; padding: 10px; width: 580px; margin: 0 auto;" width="580" valign="top">
                        <div class="content" style="box-sizing: border-box; display: block; margin: 0 auto; max-width: 580px; padding: 10px;">
                            <table role="presentation" class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background: #ffffff; border-radius: 3px; width: 100%;" width="100%">
                                <tr>
                                    <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;" valign="top">
                                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                                            <tr>
                                                <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">
                                                    ${body}
                                                    <br/><br/>
                                                    <br/><br/>
                                                    ${paragraph(`EDGE CONNECT SOLUTIONS`)}
                                                    ${paragraph(`H-112 NOIDA SEC-63 201301`)}
                                                    ${`<p style="font-family: sans-serif; font-size: 11px; font-weight: normal; margin: 0; color:blue;">Info@edgeconnectsolutions.com</p>`}
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            <div class="footer" style="clear: both; margin-top: 10px; text-align: center; width: 100%;">
                                <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                                    <tr>
                                        <td class="content-block" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; color: #999999; font-size: 12px; text-align: center;" valign="top" align="center">
                                            <span class="apple-link" style="color: #999999; font-size: 12px; text-align: center;">
                                                Company Inc, 3 Abbey Road, San Francisco CA 94102
                                            </span>
                                            <br/>
                                            Don't like these emails? <a href="#" style="text-decoration: underline; color: #999999; font-size: 12px; text-align: center;">Unsubscribe</a>.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="content-block powered-by" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; color: #999999; font-size: 12px; text-align: center;" valign="top" align="center">
                                            Powered by <a href="https://www.edgeconnectsolutions.com/" style="color: #999999; font-size: 12px; text-align: center; text-decoration: none;">edgeconnectsolutions.com/</a>.
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </td>
                    <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>
                </tr>
            </table>
        </body>
        </html>
    `;
};

module.exports = { contactUsEmailTemplate, button, paragraph };
