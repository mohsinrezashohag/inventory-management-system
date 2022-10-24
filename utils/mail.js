// sent confirmation mail with google
const nodemailer = require('nodemailer')
const { google } = require('googleapis')
const dotenv = require('dotenv').config();

const oAuth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
);

oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

module.exports.sendMailWithGmail = async (data) => {

    const accessToken = await oAuth2Client.getAccessToken()

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAUTH2',
            user: process.env.SENDER_MAIL,
            clientId: process.env.CLIENT_ID,
            refreshToken: process.env.REFRESH_TOKEN,
            clientSecret: process.env.CLIENT_SECRET,
            accessToken: accessToken
        }
    });
    const mailData = {
        from: process.env.SENDER_MAIL,
        to: data.to,
        subject: "Verify Email Inventory Management System",
        text: "Please verify your account",
        html: "<b>Inventory Management System</b>",
    }
    let info = await transporter.sendMail(mailData)
    console.log('mail send : ', info)


}