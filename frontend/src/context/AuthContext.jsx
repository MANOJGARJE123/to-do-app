import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  axios.defaults.baseURL = 'http://localhost:5000';

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        console.log('Frontend: Authorization header set with token:', token); // Debug log
        const storedUser = JSON.parse(localStorage.getItem('user'));
        setUser(storedUser);
      }
      setLoading(false);
    };
    loadUser();
  }, []);

  const login = async (email, password) => {
    const res = await axios.post('/api/users/login', { email, password });
    console.log('Login response data:', res.data);
    const { token, ...userData } = res.data;
    localStorage.setItem('token', token);
    console.log('Token stored in localStorage (login):', localStorage.getItem('token'));
    localStorage.setItem('user', JSON.stringify(userData));
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    console.log('Frontend: Authorization header set after login:', token); // Debug log
    setUser(userData);
  };

  const register = async (username, email, password) => {
    const res = await axios.post('/api/users/register', { username, email, password });
    console.log('Register response data:', res.data);
    const { token, ...userData } = res.data;
    localStorage.setItem('token', token);
    console.log('Token stored in localStorage (register):', localStorage.getItem('token'));
    localStorage.setItem('user', JSON.stringify(userData));
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    console.log('Frontend: Authorization header set after register:', token); // Debug log
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    delete axios.defaults.headers.common['Authorization'];
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
