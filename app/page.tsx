import Image from "next/image";
import { StickyNote } from "lucide-react";
import Link from "next/link";
import useRouter from "next/navigation";

export default function Home() {
  return (
    //

    <div className="container mx-auto px-4 py-16 relative z-10">
      {/* Hero Section */}
      <div className="text center mb-16 pt-8">
        <div className="flex justify-center mb-6">
          <div className="h-20 w-20 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
            <StickyNote className="h-10 w-10 text-white" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gradient-primary mb-4">
          Welcome to my Notes App
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          This is a simple notes app built with Next.js and Tailwind CSS.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/register">
            <button
              type="submit"
              className="bg-teal-600 text-white py-2 rounded-full font-semibold hover:bg-teal-700 transition">
              Get Started
            </button>
          </Link>
          <Link href="/login">
          <button
              type="submit"
              className="bg-teal-600 text-white py-2 rounded-full font-semibold hover:bg-teal-700 transition">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
