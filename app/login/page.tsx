import Image from "next/image";
import Link from "next/link";

export default function Login() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center p-4">
            <div className="bg-white w-full max-w-5xl rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
                
                {/* Left Section */}
                <div className="p-10 flex flex-col justify-between bg-white">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                            Welcome to NotesApp!
                        </h2>
                    </div>

                    {/* Illustration */}
                    <div className="mt-10">
                        <Image
                            src="/ilustrasi-notes.jpg"
                            alt="Team Illustration"
                            width={500}
                            height={500}
                            className="w-full h-auto"
                        />
                    </div>
                </div>

                {/* Right Section */}
                <div className="p-10 flex flex-col justify-center bg-white">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                        Log in
                    </h2>
                    <p className="text-sm text-gray-500 mb-8">Enter your details</p>

                    <form className="flex flex-col gap-5">
                        <div>
                            <label className="text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                placeholder="Enter email"
                                className="mt-2 w-full bg-gray-100 rounded-full px-5 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                placeholder="Enter password"
                                className="mt-2 w-full bg-gray-100 rounded-full px-5 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                            />
                            <p className="text-right text-sm text-gray-500 mt-1 cursor-pointer hover:text-teal-600">
                                Forgot password?
                            </p>
                        </div>

                        <button
                            type="submit"
                            className="bg-teal-600 text-white py-2 rounded-full font-semibold hover:bg-teal-700 transition"
                        >
                            Login
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-600 mt-6">
                        Don’t have an account?{" "}
                        <Link href="/register">
                            <span className="text-teal-600 cursor-pointer">Register</span>
                        </Link>
                    </p>

                    <p className="text-xs text-gray-400 text-center mt-8">
                        ©2025 all rights reserved
                    </p>
                </div>

            </div>
        </div>
    );
}
