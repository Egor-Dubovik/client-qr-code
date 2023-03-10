import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { IAppContext } from 'common/interfaces/app.interface';
import ScanerStore from 'store/ScanerStore';
import ReturnsStore from 'store/ReturnsStore';
import UserStore from 'store/UserStore';
import ProfileStore from 'store/ProfileStore';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
export const Context = createContext<IAppContext | Record<string, never>>({});

root.render(
  <Context.Provider
    value={{
      scaner: new ScanerStore(),
      userReturn: new ReturnsStore(),
      user: new UserStore(),
      profile: new ProfileStore(),
    }}
  >
    <Router>
      <App />
    </Router>
  </Context.Provider>
);

reportWebVitals();
