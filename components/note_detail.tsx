"use client";
import React from "react";
import { XIcon, PencilIcon, TrashIcon } from "lucide-react";

export default function NoteDetail({ onClose,}: {onClose: () => void;}) {
    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
            <div className="bg-yellow-200 rounded-2xl p-8 w-full max-w-2xl shadow-xl relative">

                <button onClick={onClose} className="absolute top-4 right-4 bg-white/40 px-3 py-1 rounded text-sm hover:bg-white/60 transition cursor-pointer">
                    <XIcon />
                </button>

                <div className="text-xs text-slate-600 mb-2">25 Oktober 2025</div>
                <h2 className="text-2xl font-semibold mb-4">Judul Note</h2>
                <p className="text-slate-700 text-base leading-relaxed mb-6">
                    Isi note nya disini. Ini adalah detail lengkap note..
                </p>

                <div className="flex items-center justify-between pt-4 text-sm text-slate-600">
                    <div>10:30 PM, Monday</div>

                    <div className="flex gap-3">
                        <button className="bg-white/40 px-4 py-1 rounded hover:bg-white/60 transition cursor-pointer">
                            <PencilIcon size={16} />
                        </button>
                        <button className="bg-white/40 px-4 py-1 rounded hover:bg-white/60 transition cursor-pointer">
                            <TrashIcon size={16} color="red" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
