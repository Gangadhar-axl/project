"use client"
import { useState } from 'react';
import Link from 'next/link'; // Import Link from Next.js
import { useRouter } from 'next/router';

export default function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    // Redirect to login page after successful signup
    router.push('/login');
  };

  return (
    <div>
      <div className="w-full max-w-xl p-12 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Reset Password</h2>
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
            <div className="flex justify-center items-center">
              <button type="submit" className="inline-block px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 focus:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50">Reset Password</button>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-600">Back to <Link href="/login" className="text-indigo-600 hover:text-indigo-500">Login</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}
