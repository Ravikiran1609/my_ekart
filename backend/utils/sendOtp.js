import axios from 'axios';

export const sendOtp = async (phone, otp) => {
  const apiKey = process.env.FAST2SMS_API_KEY;

  const data = {
    sender_id: "FSTSMS",
    language: "english",
    route: "qt",  // use 'qt' or 'otp' depending on template
    numbers: phone,
    message: "YOUR_TEMPLATE_ID",  // replace with your template ID
    variables: "{#BB#}",
    variables_values: otp,
  };

  try {
    const res = await axios.post(
      "https://www.fast2sms.com/dev/bulk",
      data,
      {
        headers: {
          authorization: apiKey,
          "Content-Type": "application/json"
        }
      }
    );
    return res.data;
  } catch (error) {
    console.error("Error sending OTP:", error.message);
  }
};

