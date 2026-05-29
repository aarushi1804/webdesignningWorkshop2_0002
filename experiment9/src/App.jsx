import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || password === "") {
      setMessage("All fields are required");
      return;
    }

    setUsers([...users, { name, email }]);
    setMessage("Registration Successful!");

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Register</button>
        </form>

        {message && <p className="msg">{message}</p>}

        <div className="users">
          <h3>Registered Users</h3>
          <ul>
            {users.slice(0, 5).map((u, i) => (
              <li key={i}>
                {u.name} - {u.email}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;