import { addSP } from "./PnPjsConfig";
import "@pnp/sp/profiles";

export const addData = async (values: any) => {
  try {
    const sp = addSP();

    return await sp.web.lists
      .getByTitle("CrmTicketRequests")
      .items.add({
        Customer: values.customer,
        Subject: values.subject,
        Product: values.product,
        SupportType: values.supportType,
        Contact: values.contact,
      })
      .then((res) => console.log("data submitted"))
      .catch((err) => console.error(err));
  } catch (error) {
    console.error("Error adding answer:", error);
    throw error;
  }
};

export const getMail = async () => {
  try {
    const sp = addSP();

    const items = await sp.web.lists.getByTitle("CrmMail").items.getAll();
    return items;
  } catch (error) {
    console.error("Error getting mail_id:", error);
    throw error;
  }
};

export const getUserData = async () => {
  try {
    const sp = addSP();

    const details = await sp.profiles.myProperties();
    return details;
  } catch (error) {
    console.error("Error getting user info:", error);
    throw error;
  }
};
