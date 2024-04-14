import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import UserMenu from './UserMenu/UserMenu';
import Loader from './Loader';

const Contacts = React.lazy(() => import('../pages/Contacts/Contacts'));
const Register = React.lazy(() => import('../pages/Register/Register'));
const Login = React.lazy(() => import('../pages/Login/Login'));

const App = () => {
  const userEmail = 'mango@mail.com'; // Example user email
  
  const handleLogout = () => {
    // Implement logout functionality
  };

  return (
    <Router>
      <div>
        <Navigation>
        <UserMenu userEmail={userEmail} onLogout={handleLogout} />
        <Suspense fallback={<Loader />}> 
            <Routes>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/contacts" component={Contacts} />
          </Routes>
        </Suspense>
        </Navigation>
      </div>
    </Router>
  );
};

export default App;
