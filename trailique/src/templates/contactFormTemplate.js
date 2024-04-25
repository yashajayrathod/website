export const contactFormTemplate = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New Contact Form Message Received</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                margin: 0;
                padding: 0;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                border: 1px solid #ccc;
                border-radius: 5px;
                background-color: #f9f9f9;
            }
            h1 {
                font-size: 24px;
                margin-bottom: 20px;
            }
            .details {
                margin-top: 20px;
            }
            .details-item {
                margin-bottom: 10px;
            }
            .details-item strong {
                font-weight: bold;
            }
            .footer {
                margin-top: 20px;
                font-size: 14px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>New Contact Form Message Received</h1>
            <div class="details">
                <div class="details-item"><strong>Full Name:</strong> {{ fullname }}</div>
                <div class="details-item"><strong>Email Address:</strong> {{ email }}</div>
                <div class="details-item"><strong>Phone Number:</strong> {{ phone }}</div>
                <div class="details-item"><strong>Company Name :</strong> {{ companyname }}</div>
                <div class="details-item"><strong>Company Size :</strong> {{ companysize }}</div>
                <div class="details-item"><strong>Role :</strong> {{ role }}</div>
                <div class="details-item"><strong>Category :</strong> {{ category }}</div>
                <div class="details-item"><strong>Sub Category:</strong> {{ subcategory }}</div>
                <div class="details-item"><strong>Message:</strong> {{ message }}</div>
            </div>
            <div class="footer">
                <p>Please review this submission and take any necessary actions.</p>
                <p>
                    Best regards,<br />
                    Trailique Team
                </p>
            </div>
        </div>
    </body>
</html>`;
