import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  
  const { login, signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      if (isSignUp) {
        // If your AuthContext provides signup, invoke it here
        if (signup) {
          await signup(email, password, name);
        } else {
          await login(email, password); // Fallback login
        }
      } else {
        await login(email, password);
      }
      navigate('/');
    } catch (err) {
      setError(err.message || 'Failed to authenticate');
    }
  };

  return (
    <div className="relative h-screen w-screen bg-black bg-cover bg-center md:bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/f8472e38-e3f1-40a5-a35e-08028c36352a/65438108-470a-4712-b530-9b360773d328/US-en-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg')]">
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md space-y-6 rounded-lg bg-black/75 p-8 text-white md:p-12 shadow-2xl"
        >
          <h2 className="text-3xl font-bold">
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </h2>

          {error && (
            <div className="rounded bg-red-600/80 p-3 text-sm text-white">
              {error}
            </div>
          )}

          <div className="space-y-4">
            {isSignUp && (
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded bg-[#333] px-4 py-3 text-sm text-white placeholder-gray-400 focus:bg-[#454545] focus:outline-none"
                required
              />
            )}

            <input
              type="email"
              placeholder="Email or phone number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded bg-[#333] px-4 py-3 text-sm text-white placeholder-gray-400 focus:bg-[#454545] focus:outline-none"
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded bg-[#333] px-4 py-3 text-sm text-white placeholder-gray-400 focus:bg-[#454545] focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded bg-red-600 py-3 font-semibold transition hover:bg-red-700"
          >
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>

          <div className="flex items-center justify-between text-xs text-gray-400">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                defaultChecked
                className="accent-red-600 rounded"
              />
              <span>Remember me</span>
            </label>
            <a href="#" className="hover:underline">
              Need help?
            </a>
          </div>

          <div className="pt-4 text-sm text-gray-400">
            {isSignUp ? (
              <p>
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => setIsSignUp(false)}
                  className="font-medium text-white hover:underline"
                >
                  Sign in now.
                </button>
              </p>
            ) : (
              <p>
                New to Netflix?{' '}
                <button
                  type="button"
                  onClick={() => setIsSignUp(true)}
                  className="font-medium text-white hover:underline"
                >
                  Sign up now.
                </button>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;