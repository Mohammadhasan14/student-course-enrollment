import React, { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await res.json();
        setUsers(data);
        setFilteredUsers(data); // initial data
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Filter logic
  useEffect(() => {
    const filtered = users.filter((user) => {
      console.log("user", user)
      return user.name.toLowerCase().includes(search.toLowerCase())
    }
    );
    setFilteredUsers(filtered);
  }, [search, users]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Search</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "8px", width: "250px" }}
      />

      {/* States */}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {/* List */}
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>

      {/* No result */}
      {!loading && filteredUsers.length === 0 && <p>No users found</p>}
    </div>
  );
};

export default App;