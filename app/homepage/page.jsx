"use client"
import { useRouter } from 'next/navigation';
export default function Home() {
  const router = useRouter();
  // Function to handle logout
  const handleLogout = () => {
    // Perform any necessary cleanup or logout actions
    // For example, clear user session, reset state, etc.
    // Redirect to the login page
    router.push('/login');
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-md mt-4">
        Logout
      </button>
    </main>
  );
}