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
    <div className="flex flex-col items-center">
      <p className="text-4xl font-medium mb-4 ">Med Consultant</p>
      <form onSubmit={handleLogin} className="flex flex-col gap-y-4">
        <input
          className=" px-4 py-2 border outline-none border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className=" px-4 py-2 border outline-none border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && (
          <div className="text-red-500 bg-red-50 p-2 rounded-lg">{error}</div>
        )}

        <button type="submit" className="primary-btn" value="logIn">
          Login
        </button>
        <button
          type="submit"
          className="rounded-lg border border-transparent py-2 px-4 hx`over:border-indigo-700  font-medium bg-indigo-400 text-white transition-colors duration-200 focus:outline-none ring-2 ring-offset-0 ring-indigo-700"
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
