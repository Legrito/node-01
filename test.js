const contacts = require("./contacts");

console.log("My test");

const contactTest = {
  name: "Chaim Lewis",
  email: "dui.in@egetlacus.ca",
  phone: "(294) 840-6685",
};

(async () => {
  try {
    // const contactsAll = await contacts.listContacts();
    // console.log(contactsAll);
    const user = contacts.addContact(contactTest);
    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
})();
