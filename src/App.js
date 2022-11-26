import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { UserContext } from '../src/Context/UserContext';
import { NavMenu } from './components/NavMenu/NavMenu';
import './shared.css';

export default function App() {
  const profile = {
    name: '',
    email: '',
    role: ''
  }
  const [user, setUser] = useState(profile);
  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        <NavMenu />
        <Routes>
          {AppRoutes.map((route, index) => {
            const { element, ...rest } = route;
            return <Route key={index} {...rest} element={element} />;
          })}
        </Routes>
      </UserContext.Provider>
    </div>
  );
}


