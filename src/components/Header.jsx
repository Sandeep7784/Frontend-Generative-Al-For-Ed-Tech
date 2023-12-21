import React from 'react'
import { Link } from "react-router-dom";
import logo from '../chatbot.png';

export default function Header() {
  return (
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between px-4 py-0 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Generative AI For Ed Tech</span>
              <img
                className="h-10 w-auto"
                src={logo}
                alt=""
              />
            </Link>
          </div>
          <div className="py-6">
                <Link
                to="/login"
                className="-mx-3 block rounded-lg px-4 py-2.5 text-xl font-bold leading-7 text-gray-900 hover:bg-gray-100">
                Sign in
                </Link>
           </div>
        </nav> 
      </header>
    )
}