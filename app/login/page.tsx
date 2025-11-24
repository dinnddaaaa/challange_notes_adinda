import Image from "next/image";
import Link from "next/link";

export default function Login() {
    return (
        <div className="min-h-screen bg-teal-600 flex items-center justify-center p-2">

            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/bg-notes.png')" }}
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="bg-white px-10 py-8 flex flex-col items-center rounded-xl border border-gray-200 w-full max-w-md relative z-10">

                <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-6">
                    Sign in to <span className="text-teal-600">Notes App</span>
                </h2>

                <form className="flex flex-col gap-4 w-full">
                    <input
                        type="email"
                        placeholder="Enter email"
                        className="text-base w-full bg-[#F3F3F3] rounded-full px-5 py-3 
                                placeholder-[#848484] focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />

                    <div className="w-full">
                        <input
                            type="password"
                            placeholder="Enter password"
                            className="text-base w-full bg-[#F3F3F3] rounded-full px-5 py-3 
                                    placeholder-[#848484] focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                        <p className="text-right text-sm text-gray-500 mt-1 cursor-pointer hover:text-teal-600">
                            Forgot password?
                        </p>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-teal-600 text-white py-3 rounded-full font-semibold 
                                   hover:bg-teal-700 transition"
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

                <p className="text-xs text-gray-400 text-center mt-5">
                    ©2025 all rights reserved
                </p>
            </div>
        </div>
    );
}
