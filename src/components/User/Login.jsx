import { useState } from "react";
import { alertError } from "../../lib/alert";
import { login } from "../../lib/api/user";
import { Link, useNavigate } from "react-router";
import { errorHandler } from "../../lib/api/errorHandler";
import { useLocalStorage } from "react-use";
import { Helmet } from 'react-helmet-async'

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [_, setToken] = useLocalStorage("token", "");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await login({
        username: username,
        password: password,
      });

      if (response.status === 200) {
        setToken(response.data.data?.token);

        await navigate({
          pathname: "/dashboard",
        });
      } else {
        await alertError(response.data?.errors || "Login failed");
      }
    } catch (error) {
      await errorHandler(error, alertError);
    }
  }

  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta
          name="description"
          content="Ini adalah halaman login contact management."
        />
      </Helmet>
      <div className="animate-fade-in bg-gray-800 bg-opacity-80 p-8 rounded-xl shadow-custom border border-gray-700 backdrop-blur-sm w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-gradient rounded-full mb-4">
            <i className="fas fa-user-plus text-3xl text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white">Contact Management</h1>
          <p className="text-gray-300 mt-2">Sign In with your account</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-300 text-sm font-medium mb-2"
            >
              Username
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="fas fa-user text-gray-500" />
              </div>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                placeholder="Choose a username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-300 text-sm font-medium mb-2"
            >
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="fas fa-lock text-gray-500" />
              </div>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                placeholder="Create a password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-gradient text-white py-3 px-4 rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 font-medium shadow-lg transform hover:-translate-y-0.5"
            >
              <i className="fas fa-user-plus mr-2" /> Login
            </button>
          </div>
          <div className="text-center text-sm text-gray-400">
            Don't have account?
            <Link
              to="/register"
              className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
