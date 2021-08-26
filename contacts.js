const fs = require("fs").promises;
const path = require("path");

const shortid = require("shortid");

const contactsPath = path.resolve("db", "./contacts.json");

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    console.table(contacts);
  } catch (error) {
    console.error(error.message);
  }
};

const getContactById = async (id) => {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    const userMatch = contacts.find(
      (contact) => contact.id.toString() === id.toString()
    );
    console.log(userMatch);
    if (!userMatch) {
      throw new Error(`Contact with id:${id} not found`);
    }
  } catch (error) {
    throw error;
  }
};

const removeContact = async (id) => {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    const contactIdx = contacts.findIndex(
      (contact) => contact.id.toString() === id.toString()
    );
    if (contactIdx === -1) {
      throw new Error(`Contact with id:${id} not found`);
    }
    const filteredContacts = contacts.filter(
      (contact) => contact.id.toString() !== id.toString()
    );
    console.log(filteredContacts);
  } catch (error) {
    console.error(error.message);
  }
};

const addContact = async (contact) => {
  try {
    const newContact = { id: shortid.generate(), ...contact };
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    const updatedContacts = [...contacts, newContact];
    console.log(updatedContacts);
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
