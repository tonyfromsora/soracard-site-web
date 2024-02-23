import { google } from 'googleapis'
import nodemailer from 'nodemailer'

const {
  gmailClientId,
  gmailClientSecret,
  gmailRefreshToken,
  gmailRedirectUrl,
  gmailUser,
  recaptchaSecretKey,
} = useRuntimeConfig()
const oAuth2Client = new google.auth.OAuth2(gmailClientId, gmailClientSecret, gmailRedirectUrl)
oAuth2Client.setCredentials({ refresh_token: gmailRefreshToken })

export default defineEventHandler(async (event) => {
  // Ensure environment have required config
  if (
    !(
      gmailClientId &&
      gmailClientSecret &&
      gmailRefreshToken &&
      gmailRedirectUrl &&
      gmailUser &&
      recaptchaSecretKey
    )
  ) {
    return {
      error: true,
      statusMessage: 'Server configuration error. Please try again later.',
    }
  }

  const { name, email, message, token } = await readBody(event)

  // Ensure request contains required fields
  if (!(name && email && message)) {
    return {
      error: true,
      statusMessage: 'Please fill in all fields',
    }
  }

  // Ensure email is valid
  if (
    !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email,
    )
  ) {
    return {
      error: true,
      statusMessage: 'Wrong email, please double check it',
    }
  }

  // Ensure request contain reCAPTCHA token
  if (!token) {
    return {
      error: true,
      statusMessage: 'reCAPTCHA token missing',
    }
  }

  // Validate reCAPTCHA token
  let recaptchaResponse: { success: boolean }
  try {
    recaptchaResponse = await $fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecretKey}&response=${token}`,
      {
        method: 'POST',
      },
    )
  } catch (error) {
    console.error(error)
    return {
      error: true,
      statusMessage: 'reCAPTCHA validation error',
    }
  }

  if (!recaptchaResponse?.success) {
    console.error(recaptchaResponse)
    return {
      error: true,
      statusMessage: 'reCAPTCHA validation error',
    }
  }

  // Send emails
  try {
    const accessToken = await oAuth2Client.getAccessToken()
    const transport = nodemailer.createTransport({
      // @ts-ignore
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: gmailUser,
        clientId: gmailClientId,
        clientSecret: gmailClientSecret,
        refreshToken: gmailRefreshToken,
        accessToken: accessToken,
      },
    })

    const result = await Promise.all([
      transport.sendMail({
        from: `SORA Card website <${gmailUser}>`,
        to: gmailUser,
        subject: 'New message from SORA Card contact form',
        text: `New message was received from the SORA Card landing page contact form.

Name: ${name}
Email: ${email}
Message: ${message}`,
      }),
      transport.sendMail({
        from: `SORA Card website <${gmailUser}>`,
        to: email,
        subject: 'SORA Card received your message',
        text: `Hello ${name},

Thank you for messaging SORA Card. Your message has been received, we will respond soon.`,
      }),
    ])

    console.log(result)
    return {
      error: false,
      statusMessage: 'Your message has been sent. Thank you!',
    }
  } catch (error) {
    console.error(error)
    return {
      error: true,
      statusMessage: 'Something went wrong. Please try again later.',
    }
  }
})
