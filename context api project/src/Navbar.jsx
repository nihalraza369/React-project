import { useUser } from "./UserContext";
import { motion } from "framer-motion";

export default function Navbar() {
  const { user, logout } = useUser();

  return (
    <motion.nav
      className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-xl font-bold">🛍️ Nihal's Shop</h1>
      {user.isLoggedIn && (
        <button
          onClick={logout}
          className="bg-white text-blue-600 px-4 py-1 rounded hover:bg-gray-200"
        >
          Logout
        </button>
      )}
    </motion.nav>
  );
}