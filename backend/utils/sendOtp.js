import axios from 'axios';

export const sendOtp = async (phone, otp) => {
  const apiKey = process.env.FAST2SMS_API_KEY;

  const data = {
    sender_id: "FSTSMS",
    language: "english",
    route: "qt", // or 'otp' if that matches your template
    numbers: phone,
    message: "YOUR_TEMPLATE_ID", // replace with actual template ID
    variables: "{#BB#}",
    variables_values: otp
  };

  try {
    const res = await axios.post(
      'https://www.fast2sms.com/dev/bulk',
      data,
      {
        headers: {
          authorization: apiKey,
          'Content-Type': 'application/json'
        }
      }
    );
    return res.data;
  } catch (err) {
    console.error('OTP sending error:', err.message);
    throw err;
  }
};

