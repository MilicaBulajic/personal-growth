import React, { useRef, useState } from "react";
import { useAuth } from "services/AuthContext";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox foe further instructions.");
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
  }

  return (
    <>
      <h2 className="text-center mb-4">Password reset</h2>
      {error && <p>{error}</p>}
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div id="email">
          <p>Email</p>
          <input name="emailInput" type="email" inputRef={emailRef} required />
        </div>
        <button disabled={loading} className="w-100" type="submit">
          Reset password
        </button>
      </form>
      <div className="w-100 text-center mt-2">
        <Link to="/login">Login</Link>
      </div>
    </>
  );
}
