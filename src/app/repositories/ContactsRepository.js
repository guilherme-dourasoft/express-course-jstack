const { v4 } = require('uuid');

// mocks
let contacts = [
  {
    id: v4(),
    name: 'Guilherme',
    email: 'guilherme@email.com',
    phone: '123123213',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Izabel',
    email: 'izabel@email.com',
    phone: '1231312442',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise(resolve => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise(resolve => {
      resolve(contacts.find(contact => contact.id === id));
    });
  }

  delete(id) {
    return new Promise(resolve => {
      contacts = contacts.filter(contact => contact.id !== id);

      resolve();
    });
  }
}

// Singleton
module.exports = new ContactsRepository();
