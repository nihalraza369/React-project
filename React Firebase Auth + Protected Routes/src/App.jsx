import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth } from "./firebase";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export default function App() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsub();
  }, []);

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, pass);
    } catch (err) {
      alert("Login failed: " + err.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <BrowserRouter>
      <div className="p-6 font-sans">
        <Routes>
          <Route
            path="/"
            element={
              user ? (
                <Navigate to="/dashboard" />
              ) : (
                <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
                  <h2 className="text-2xl mb-4 font-bold">🔐 Login</h2>
                  <input
                    type="email"
                    placeholder="Email"
                    className="mb-2 w-full px-3 py-2 border rounded"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="mb-4 w-full px-3 py-2 border rounded"
                    onChange={(e) => setPass(e.target.value)}
                  />
                  <button
                    onClick={login}
                    className="bg-blue-600 text-white px-4 py-2 rounded w-full"
                  >
                    Login
                  </button>
                </div>
              )
            }
          />

          <Route
            path="/dashboard"
            element={
              user ? (
                <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
                  <h1 className="text-2xl font-bold mb-4">📊 Welcome, {user.email}</h1>
                  <p className="mb-6">This is a protected dashboard.</p>
                  <button
                    onClick={logout}
                    className="bg-red-600 text-white px-4 py-2 rounded"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Navigate to="/" />
              )
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
