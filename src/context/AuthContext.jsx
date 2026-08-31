import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkPersistedAuth = () => {
      setLoading(true);
      const savedUser = JSON.parse(localStorage.getItem('netflix_user'));
      if (savedUser) {
        setUser(savedUser);
      }
      setLoading(false);
    };

    checkPersistedAuth();
  }, []);

  const login = async (email, password) => {
    console.log(`Login requested for: ${email}`);
    await new Promise((r) => setTimeout(r, 1000));

    const mockUser = {
      email,
      name: email.split('@')[0],
      profile_img: '[https://cdn-icons-png.flaticon.com/512/3135/3135715.png](https://cdn-icons-png.flaticon.com/512/3135/3135715.png)',
    };

    setUser(mockUser);
    localStorage.setItem('netflix_user', JSON.stringify(mockUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('netflix_user');
  };

  const value = { user, loading, login, logout };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};