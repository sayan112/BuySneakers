import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/signup", {
        email,
        password,
      });
      if (res.data === "exist") {
        alert("User already exists.");
      } else if (res.data === "nonexist") {
        navigate("/dashboard", { state: { id: email } });
      }
    } catch (err) {
      console.log(err);
      alert("Something went wrong.");
    }
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#F9FAFB",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "2rem",
          borderRadius: "1rem",
          backgroundColor: "#FFFFFF",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
            Signup 👟 And Ready to Enjoy ☁️😊
          </h1>
        </div>
        <form onSubmit={submit}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              width: "20rem",
            }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              style={{
                padding: "1rem",
                borderRadius: "0.5rem",
                border: "1px solid #D1D5DB",
              }}
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              style={{
                padding: "1rem",
                borderRadius: "0.5rem",
                border: "1px solid #D1D5DB",
              }}
              required
            />
            <button
              type="submit"
              style={{
                padding: "1rem",
                borderRadius: "0.5rem",
                backgroundColor: "#2563EB",
                color: "#FFFFFF",
                fontWeight: "bold",
                border: "none",
                cursor: "pointer",
              }}
            >
              Signup
            </button>
          </div>
        </form>
        <div style={{ marginTop: "2rem" }}>
          <p style={{ textAlign: "center" }}>
            Already have an account?{" "}
            <Link to="/" style={{ color: "#2563EB" }}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
