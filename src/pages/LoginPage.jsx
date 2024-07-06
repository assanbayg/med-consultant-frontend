import { useState } from "react";
import useAuth from "../hooks/useAuth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logIn, signUp, error, authenticateWithGoogle } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    await logIn(email, password);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    await signUp(email, password);
  };

  const handleGoogleLogin = async () => {
    await authenticateWithGoogle();
  };

  return (
    <div className="flex flex-col">
      <p className="mb-4 text-4xl font-medium">Med Consultant</p>
      <form onSubmit={handleLogin} className="flex flex-col gap-y-4">
        <input
          className="rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-indigo-500 dark:focus:ring-indigo-500"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-indigo-500 dark:focus:ring-indigo-500"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && (
          <div className="rounded-lg bg-red-50 p-2 text-red-500">{error}</div>
        )}

        <button type="submit" className="primary-btn" value="logIn">
          Login
        </button>
        <button
          type="submit"
          className="hx`over:border-indigo-700 rounded-lg border border-transparent bg-indigo-400 px-4 py-2 font-medium text-white ring-2 ring-indigo-700 ring-offset-0 transition-colors duration-200 focus:outline-none"
          value="signUp"
          onClick={handleSignUp}
        >
          Sign Up
        </button>
      </form>
      <button className="primary-btn mt-3 w-full" onClick={handleGoogleLogin}>
        Login with Google
      </button>
    </div>
  );
}
