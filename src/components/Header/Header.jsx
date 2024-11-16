import React from "react";
import { Link, NavLink } from 'react-router-dom'
import logo from "../../assets/logo.png"
import { useSelector } from "react-redux";

export default function Header() {
    // const itemCount = useSelector((state) => state.cart.items.quantity)
    const itemCount = useSelector((state) => 
        state.cart.items.reduce((total, item) => total + item.quantity, 0)
    );
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-gray-900 border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src={logo}
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                        <div>
                            <h1 className="text-white text-xl font-semibold">Paradise Nursery</h1>
                            <p className="text-gray-300 text-sm">where green meets serenity</p>
                        </div>
                    </Link>
                    <div className="flex items-center lg:order-2 relative">
                        <Link
                            to="/cart"
                            className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-400 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Cart 🛒
                            {itemCount > 0 && (
                                <span className="absolute top-0 right-0 w-6 h-6 py-1 text-center text-xs text-white bg-red-600 rounded-full">
                                    {itemCount}
                                </span>
                            )}
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-green-500" : "text-gray-300"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-600 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/products"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-green-500" : "text-gray-300"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-600 lg:p-0`
                                    }
                                >
                                    Products
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}



