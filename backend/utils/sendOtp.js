import fast2sms from 'fast2sms';

export default async function sendOtp(mobile, otp) {
  await fast2sms.sendMessage({
    authorization: process.env.FAST2SMS_API_KEY,
    message: `Your OTP is ${otp}`,
    numbers: [mobile]
  });
}

