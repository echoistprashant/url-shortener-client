import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { login as loginUser } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");

    try {
      const data = await loginUser({
        email,
        password,
      });

      login(data.access_token);

      navigate("/");
    } catch (err) {
  console.log(err);

  if (err.response) {
    console.log("Response:", err.response);
    setError(err.response.data.detail);
  } else if (err.request) {
    console.log("Request:", err.request);
    setError("No response received from the server.");
  } else {
    console.log("Error:", err.message);
    setError(err.message);
  }
};
};


  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>

        <br />

        {error && (
          <p style={{ color: "red" }}>
            {error}
          </p>
        )}

        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;