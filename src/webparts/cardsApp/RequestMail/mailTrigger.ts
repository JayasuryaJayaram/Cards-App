import "@pnp/sp/lists";
import { IEmailProperties } from "@pnp/sp/presets/all";
import { SPFI } from "@pnp/sp";
import { addSP } from "../service/PnPjsConfig";
import "@pnp/sp/sputilities";

export async function Approvalmail(values: any, senderMail: string) {
  try {
    const emailProps: IEmailProperties = {
      To: [senderMail],
      CC: [],
      BCC: [],
      Subject: "Request for CRM Ticket!",
      Body: `
        <html>

    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    </head>

    <body>
    

    <p>Please create a case for the below mentioned details:</p>
      
    <table style="border-collapse: collapse;">
    
    <tr>
      <td><strong>Customer Name:</strong></td>
      <td>${values.customer}</td>
    </tr>
    <tr>
      <td><strong>Subject Name:</strong></td>
      <td>${values.subject}</td>
    </tr>
    <tr>
      <td><strong>Product type:</strong></td>
      <td>${values.product}</td>
    </tr>
    <tr>
      <td><strong>Support Type:</strong></td>
      <td>${values.supportType}</td>
    </tr>
    <tr>
      <td><strong>Contact number:</strong></td>
      <td>${values.contact}</td>
    </tr>
  </table>
  
    </body>

    </html>
      `,
    };
    const sp: SPFI = await addSP();
    await sp.utility.sendEmail(emailProps);

    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    throw error; // Rethrow the error if needed for further handling
  }
}
