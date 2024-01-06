import React from 'react';
import { Link } from 'react-router-dom';
import { mdiEmailOutline, mdiKey } from '@mdi/js';
import logo from '../chatbot.png';

const LogIn = () => {
  return (
    <section className="bg-gray-50">
      <div className="flex flex-col bg-white items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-gray-100 rounded-3xl shadow-xl md:mt-0 sm:max-w-md xl:p-0 border border-gray-300">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <Link to="/" className="flex items-center justify-center mb-6 text-2xl font-semibold text-gray-900">
              <img className="w-8 h-8 mr-2" src={logo} alt="logo" />
              Generative AI For Ed Tech
          </Link>
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl font-montserrat">
            Welcome back!
              <p className="text-lg font-normal text-gray-500 font-montserrat">
              Sign in to explore the power of Generative AI .....
            </p>
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 font-montserrat">
                  Email 
                </label>
                <div className="flex">
                  <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-6 h-6">
                      <path d={mdiEmailOutline} />
                    </svg>
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    placeholder="johnsmith@example.com"
                    required
                  />
                </div>
              </div>
              <div className="mb-12">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 font-montserrat">
                Password
              </label>
                <div className="flex">
                  <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-6 h-6">
                      <path d={mdiKey} />
                    </svg>
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 font-montserrat"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold font-montserrat"
              >
                Sign in
              </button>
              <div className="w-full px-3 text-center font-montserrat">
                <p> New to our platform?{' '} <Link to="/signup" className="text-indigo-500 hover:underline font-montserrat"> Sign up here </Link> </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
