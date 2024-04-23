export async function sendMail(toEmail, toName, replyToEmail, replyToName, subject, htmlContent, axiosInstance) {
    try {
      const data = {
        sender: {
          email: replyToEmail,
          name: replyToName,
        },
        to: [
          {
            email: toEmail,
            name: toName,
          },
        ],
        cc: [
          {
            email: process.env.ccEmail,
            name: process.env.ccName,
          },
        ],
        htmlContent,
        subject,
      };
  
      const response = await axiosInstance.post(
        process.env.brevoEmailApiEndpoint,
        data,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'api-key': process.env.brevoKey,
          },
        }
      );
  
      return response; // Return the axios response for further processing if needed
    } catch (error) {
      console.error('Error sending email:', error);
      throw error; // Re-throw the error to handle it in the calling component
    }
  }

export default sendMail; // Only export the sendMail function