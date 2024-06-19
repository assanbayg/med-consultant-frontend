import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleGoogleLogin = () => {
    // TODO: Integrate Google login logic later
    // actually intergrate login logic properly
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
        <button type="submit" className="primary-btn">
          Login
        </button>
      </form>
      <button className="primary-btn mt-3" onClick={handleGoogleLogin}>
        Login with Google
      </button>
    </div>
  );
}
