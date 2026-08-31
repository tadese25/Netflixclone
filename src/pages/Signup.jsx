import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Insert signup API call here
    navigate('/login');
  };

  return (
    <div className="relative min-h-screen w-full bg-[#141414] md:bg-transparent">
      <div className="absolute inset-0 hidden min-h-screen w-full bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d4438f-d111-4ede-a0a2-0fd81308a38a/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg')] bg-cover bg-center bg-no-repeat md:block">
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-black via-black/40 to-black/80" />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-20">
        <div className="w-full max-w-md rounded-lg bg-black/80 p-8 md:p-14">
          <h1 className="mb-8 text-3xl font-extrabold text-white">Create Account</h1>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded bg-[#333] px-4 py-3.5 text-sm text-white focus:bg-[#454545] focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded bg-[#333] px-4 py-3.5 text-sm text-white focus:bg-[#454545] focus:outline-none"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full rounded bg-[#333] px-4 py-3.5 text-sm text-white focus:bg-[#454545] focus:outline-none"
            />

            <button
              type="submit"
              className="mt-4 rounded bg-red-600 py-3.5 font-bold text-white transition hover:bg-red-700"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-12 text-sm text-gray-400">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-white hover:underline">
              Sign in
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;