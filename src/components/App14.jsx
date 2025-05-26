import React, { useEffect, useState } from "react";

export default function App14() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  // Filter users based on search
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>App14</h1>
      <h2>useEffect hook to fetch api</h2>

      <input
        type="text"
        placeholder="Search name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "10px", padding: "5px", width: "200px" }}
      />

      <ol>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            {user.name}, {user.email}, {user.phone}
          </li>
        ))}
      </ol>
    </div>
  );
}