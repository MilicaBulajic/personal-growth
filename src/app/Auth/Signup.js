import React, { useRef, useState } from "react";
import { useAuth } from "services/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <>
      <h2 className="text-center mb-4">Sign Up</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div id="email">
          <p>Email</p>
          <input name="emailInput" type="email" inputRef={emailRef} required />
        </div>
        <div id="password">
          <p>Password</p>
          <input
            name="passwordInput"
            type="password"
            inputRef={passwordRef}
            required
          />
        </div>
        <div id="password-confirm">
          <p>Password Confirmation</p>
          <input
            name="passwordInput"
            type="password"
            inputRef={passwordConfirmRef}
            required
          />
        </div>
        <button disabled={loading} className="w-100" type="submit">
          Sign Up
        </button>
      </form>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  );
}
