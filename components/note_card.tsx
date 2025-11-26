'use client';
import React from 'react';
import { PencilIcon } from 'lucide-react';
import { TrashIcon } from 'lucide-react';

export default function NoteCard({ onClick }: { onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="rounded-xl p-6 min-h-[160px] w-64 bg-yellow-200 shadow-sm flex flex-col justify-between"
    >
      <div>
        <div className="text-xs text-slate-600">25 Oktober 2025</div>
        <h3 className="font-semibold text-lg mt-2 mb-2">Judul Note</h3>
        <p className="text-sm text-slate-700">
          Isi note nya disini.
        </p>
      </div>
      <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
        <div>10:30 PM, Monday</div>
        <div className="flex gap-2">
          <button className="p-1 rounded bg-white/30 cursor-pointer"><PencilIcon size={16} /></button>
          <button className="p-1 rounded bg-white/30 cursor-pointer"> <TrashIcon size={16} color="red" /> </button>
        </div>
      </div>
    </div>
  );
}
