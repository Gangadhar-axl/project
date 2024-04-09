"use client"
import { useState } from 'react';
import Link from 'next/link'; 
import { useRouter } from 'next/navigation';
export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/login', { // Updated API route path
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        router.push('/homepage'); // Redirect to home page after successful insertion
      } else {
        console.error('Failed to insert user details:', response.statusText);
      }
    } catch (error) {
      console.error('Error inserting user details:', error);
    }
  };

  return (
    <div>
      <div className="w-full max-w-xl p-12 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:border-indigo-500" 
              required 
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:border-indigo-500" 
              required 
            />
          </div>
          <div className="mb-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-600"><Link href="/forgotpassword" className="text-indigo-600 hover:text-indigo-500">Forgot Password?</Link></p>
              </div>
              <div>
                <button type="submit" className="inline-block px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 focus:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50">Login</button>
              </div>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-600">Don't have an account? <Link href="/signup" className="text-indigo-600 hover:text-indigo-500">Sign Up</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}

