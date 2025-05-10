import { useUser } from "./UserContext";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Profile() {
  const { user, login } = useUser();
  const [input, setInput] = useState("");

  if (user.isLoggedIn) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-8 text-center"
      >
        <h2 className="text-2xl font-semibold text-green-600">
          Welcome back, {user.name} ✅
        </h2>
        <p className="mt-4">Enjoy your shopping experience!</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mt-10 text-center"
    >
      <h2 className="text-xl font-semibold mb-4">Login to continue</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your name"
        className="px-4 py-2 rounded border border-gray-400 mb-4 w-1/2"
      />
      <br />
      <button
        onClick={() => login(input)}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Login
      </button>
    </motion.div>
  );
}
