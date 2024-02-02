import "@pnp/sp/lists";
import { IEmailProperties } from "@pnp/sp/presets/all";
import { SPFI } from "@pnp/sp";
import { addSP } from "../service/PnPjsConfig";
import "@pnp/sp/sputilities";

export async function Requestmail(
  values: any,
  senderMail: string,
  userName: string,
  userMail: string
) {
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

    <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
    

    <p>Please create a case for the below mentioned details:</p>
      
    <table style="border-collapse: collapse;">
    <tr style="margin-bottom: 10px">
      <td><strong>Requester Name:</strong></td>
      <td>${userName}<td>
    </tr>
    <tr style="margin-bottom: 10px">
      <td><strong>Requester Mail:</strong></td>
      <td>${userMail}<td>
    </tr>
    <tr style="margin-bottom: 10px">
      <td>Customer Name:</td>
      <td>${values.customer}</td>
    </tr>
    <tr style="margin-bottom: 10px">
      <td>Subject Name:</td>
      <td>${values.subject}</td>
    </tr>
    <tr style="margin-bottom: 10px">
      <td>Product type:</td>
      <td>${values.product}</td>
    </tr>
    <tr style="margin-bottom: 10px">
      <td>Support Type:</td>
      <td>${values.supportType}</td>
    </tr>
    <tr style="margin-bottom: 10px">
      <td>Contact number:</td>
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

// async function ReplyMail(userName: string, userEmail: string) {
//   try {
//     const emailProps: IEmailProperties = {
//       To: [userEmail],
//       CC: [],
//       BCC: [],
//       Subject: "Request for CRM Ticket!",
//       Body: `
//         <html>

//     <head>
//       <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
//     </head>

//     <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">

//     <p>Dear ${userName},</p>
//     </br>
//     <p>Your Ticket is created successfully</p>

//     </body>

//     </html>
//       `,
//     };
//     const sp: SPFI = await addSP();
//     await sp.utility.sendEmail(emailProps);

//     console.log("Email sent successfully");
//   } catch (error) {
//     console.error("Error sending email:", error);
//     throw error; // Rethrow the error if needed for further handling
//   }
// }
