import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'admin user',
    email: 'admin@email.com',
    password: bcrypt.hashSync('0000', 10),
    isAdmin: true,
  },
  {
    name: 'Clément Garcin',
    email: 'clementgarcin6@gmail.com',
    password: bcrypt.hashSync('00000', 10),
    isAdmin: false,
  },
  {
    name: 'random user',
    email: 'random@email.com',
    password: bcrypt.hashSync('000000', 10),
    isAdmin: false,
  },
];

export default users;
