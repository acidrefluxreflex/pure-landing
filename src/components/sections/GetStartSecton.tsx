
import React from "react";


export default function GetStartSection() {
    return (
        <div className="py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">Welcome to Our Landing Page</h2>
                <p className="text-gray-600 text-lg mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:ring focus:ring-blue-300">
                    Learn More
                </button>
            </div>
        </div>
    );
}