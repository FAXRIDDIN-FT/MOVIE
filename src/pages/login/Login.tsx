import React from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

const Login = () => {
  return (
    <GoogleOAuthProvider clientId="1073262630710-gra22etq39lukf71k5sjoi0e8p83m1s3.apps.googleusercontent.com">
      <div className="min-h-screen bg-gradient-to-br flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Welcome Back
          </h2>

          <form className="space-y-5">
            <div>
              <label className="block text-gray-600 mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                placeholder="Fullname"
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                placeholder="••••••••"
              />
            </div>

            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="bg-red-500" />
                <span>Remember me</span>
              </label>
              <a href="#" className="text-blue-500 hover:underline">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 rounded-xl hover:opacity-90 transition duration-200"
            >
              Login
            </button>
          </form>

          <div className="flex justify-center mt-6">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </div>

          <p className="text-center text-sm text-gray-600 mt-6">
            Don’t have an account?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default React.memo(Login);
