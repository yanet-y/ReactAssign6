import React, { useState } from 'react';

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Abebe', age: 30 },
    { id: 2, name: 'Samuel', age: 25 },
    { id: 3, name: 'Elham', age: 25 },
  ]);

  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleEditClick = (userId) => {
    setSelectedUserId(userId);
  };

  const handleNameChange = (event) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === selectedUserId ? { ...user, name: event.target.value } : user
      )
    );
  };

  const handleAgeChange = (event) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === selectedUserId ? { ...user, age: parseInt(event.target.value) } : user
      )
    );
  };

  const handleCancelEdit = () => {
    setSelectedUserId(null);
  };

  return (
    <div className="infolist">
      <h1>Personal Information</h1>
      <div className="card">
        <ol>
          {users.map((user) => (
            <li key={user.id}>
              <span>
                Id: {user.id}, Name: {user.name}, Age: {user.age}
              </span>
              <button onClick={() => handleEditClick(user.id)}>Edit</button>
            </li>
          ))}
        </ol>
        {selectedUserId !== null && (
          <div>
            <label htmlFor="id">Id</label>
            <input
              type="number"
              readOnly
              value={users.find((u) => u.id === selectedUserId)?.id || ''}
            />
            <input
              type="text"
              placeholder="Edit Name"
              onChange={handleNameChange}
              value={users.find((u) => u.id === selectedUserId)?.name || ''}
            />
            <input
              type="number"
              placeholder="Edit Age"
              onChange={handleAgeChange}
              value={users.find((u) => u.id === selectedUserId)?.age || ''}
            />
            <button onClick={handleCancelEdit}>Cancel</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
