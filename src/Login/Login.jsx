import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const showtoastsuccess = () => {
    toast.success("Login Success", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const showtoastFail = () => {
    toast.error("Incorrect Email Or Password", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const showtoastError = () => {
    toast.warning("Some error occured", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  async function submit(e) {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/", {
        email,
        password,
      });
      if (res.data === "exist") {
        showtoastsuccess();
        setTimeout(() => {
          navigate("/dashboard", { state: { id: email } });
        }, 2000);
      } else if (res.data === "nonexist") {
        showtoastFail();
      }
    } catch (err) {
      console.log(err);
      alert("Wrong details");
    }
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "#F5F5F5",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "#FFFFFF",
          padding: "2rem",
          borderRadius: "1rem",
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
            Login 👟 And Ready to Enjoy ☁️😊
          </h1>
        </div>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            width: "20rem",
          }}
          onSubmit={submit}
        >
          <input
            type="email"
            placeholder="Email"
            style={{ padding: "1rem", borderRadius: "0.5rem", border: "none" }}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <input
            type="password"
            placeholder="Password"
            style={{ padding: "1rem", borderRadius: "0.5rem", border: "none" }}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <button
            type="submit"
            style={{
              background: "#2E8B57",
              color: "#FFFFFF",
              borderRadius: "0.5rem",
              padding: "1rem",
              border: "none",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>
        <div style={{ marginTop: "1rem", textAlign: "center" }}>
          <p>Or</p>
          <Link
            to="/signup"
            style={{ textDecoration: "none", color: "#2E8B57" }}
          >
            Create an account
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
