import React, { useState } from "react";
import { useAuth } from "../../services/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Drawer from "../../components/Drawer";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to logout");
    }
  }

  return (
    <div>
      <Drawer />

    </div>
  );
}
