import Link from 'next/link';
import React from 'react';
import { Search } from 'lucide-react';


export default function SearchCreate() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 w-full">
                <label className="sr-only">Search</label>
                <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                        <Search size={18} />
                    </span>
                    <input
                        placeholder="Search notes..."
                        className="w-full pl-11 pr-4 py-3 rounded-full bg-white shadow-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-300"
                    />
                </div>
            </div>

            <div>
                    <a className="inline-flex items-center gap-3 bg-teal-600 text-white px-4 py-3 rounded-lg shadow-md">
                        <span className="text-lg font-semibold">+ New Note</span>
                    </a>
            </div>
        </div>
    );
}