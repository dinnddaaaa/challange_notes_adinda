import React from 'react';
import { LogOut } from 'lucide-react';
import Link from 'next/link';

export default function Nav({ userName = 'qonita' }: { userName?: string }) {
    return (
        <header className="w-full bg-white/80 backdrop-blur sticky top-0 z-20 shadow-sm">
            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold">N</div>
                    <div>
                        <h1 className="text-xl font-semibold">My Notes</h1>
                        <p className="text-sm text-slate-500">Welcome back, {userName}</p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 text-sm text-slate-700 bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-md">
                        <LogOut size={16} />
                        <Link href="/login">Logout</Link>
                    </button>
                </div>
            </div>
        </header>
    );
}