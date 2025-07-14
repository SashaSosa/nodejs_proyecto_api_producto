import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const users = [
  {
    email: 'admin@admin.com',
    password: '1234',
  },
];

export const loginUser = async ({ email, password }) => {
  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    return null;
  }

  const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  return token;
};
