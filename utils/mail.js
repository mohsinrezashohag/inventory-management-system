// sent confirmation mail with google
const nodemailer = require('nodemailer')
const google = require('googleapis')

const auth2Clients = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
)

oAuth2Client.setCredentials({ refreshToken: process.env.REFRESH_TOKEN });

module.exports.sendMailWithGmail = async (data) => {

    const accessToken = await oAuth2Client.getAccessToken();

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



}