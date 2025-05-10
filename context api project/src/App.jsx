import Navbar from "./Navbar";
import Profile from "./profile";
import { UserProvider } from "./UserContext";
export default function App() {
  return (
    <UserProvider>

      <div className="min-h-screen bg-gray-100 text-gray-800">
        <Navbar />
        <main className="p-6 max-w-3xl mx-auto">
          <Profile />
        </main>
      </div>
    </UserProvider>
  );
}
