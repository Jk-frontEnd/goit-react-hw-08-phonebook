import React, { useState } from "react";

const UserMenu = ({ userEmail, onLogout }) => {
  const [users, setUsers] = useState([]);

  return (
    <div>
      <h2>Users list</h2>
      {users.length ? (
        <ul>
          {users.map((user, id) => (
            <li key={id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <p>no users to display</p>
      )}
    </div>
  );
};

export default UserMenu;
