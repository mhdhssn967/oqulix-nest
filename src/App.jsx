import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import { auth } from '../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import EmployeeManagement from './pages/EmployeeManagement';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={user ? <HomePage /> : <Login />} />
         <Route path="/home/employeemanagement" element={<EmployeeManagement/>} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
