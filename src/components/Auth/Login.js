import React, { useRef, useState } from "react";
import { useAuth } from "components/Auth/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to sign in");
    }

    setLoading(false);
  }

  return (
    <>
      <h2 className="text-center mb-4">Log In</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div id="email">
          <p>Email</p>
          <input name="emailInput" type="email" ref={emailRef} required />
        </div>
        <div id="password">
          <p>Password</p>
          <input
            name="passwordInput"
            type="password"
            ref={passwordRef}
            required
          />
        </div>
        <button disabled={loading} className="w-100" type="submit">
          Log in
        </button>
      </form>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Create Account</Link>
      </div>
    </>
  );
}
