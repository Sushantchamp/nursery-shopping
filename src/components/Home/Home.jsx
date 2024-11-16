import React from "react";
import { Link } from "react-router-dom";
import nurseryImage from "../../assets/nursery.jpg"; 

export default function Home() {
    return (
        <>
            <div className="relative w-full h-screen bg-gray-700">
                {/* Background Overlay */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
                    style={{ backgroundImage: `url(${nurseryImage})` }}
                ></div>

                <aside className="relative flex items-center justify-center h-full text-white">
                    <div className="relative z-10 max-w-screen-xl px-12 sm:px-24 mx-auto">
                        {/* Flex Container for Equal Spacing */}
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
                            {/* Paragraph Description */}
                            <div className="text-left sm:w-1/2">
                                <p className="text-lg sm:text-xl">
                                    Welcome to Paradise Nursery, your ultimate destination for nurturing nature's wonders. We provide a wide range of plants, trees, and flowers to transform your garden into a vibrant paradise. At Paradise Nursery, we believe in the power of greenery to bring peace, beauty, and serenity to your life. Explore our selection and join us in fostering a greener planet.
                                </p>
                            </div>

                            {/* Heading and Button */}
                            <div className="text-center sm:text-right space-y-8 sm:w-1/2">
                                <h1 className="text-3xl font-bold sm:text-1xl">
                                    Welcome to <br /> Paradise Nursery
                                </h1>
                                    <span className="hidden sm:block text-1xl">Where Green Meets Serenity</span>
                                <Link
                                    className="inline-flex text-white items-center px-6 py-3 font-medium bg-green-500 rounded-lg hover:opacity-85"
                                    to="/products"
                                >
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </>
    );
}
