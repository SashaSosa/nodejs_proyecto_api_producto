import * as authService from '../services/auth.service.js';

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const token = await authService.loginUser({ email, password });

    if (!token) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Error al iniciar sesión' });
  }
};
