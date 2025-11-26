'use client';
import { useState } from 'react';
import Nav from '../../components/navbar';
import SearchCreate from '../../components/search';
import NoteCard from '../../components/note_card';
import NoteDetail from '../../components/note_detail';

export default function Page() {

    // gunakan nama variabel yang sama!
    const [showDetail, setShowDetail] = useState(false);

    return (
        <div className="min-h-screen bg-slate-50">
            <Nav userName="Dinda" />

            <main className="pt-6">
                <SearchCreate />
                <section className="max-w-6xl mx-auto px-4 py-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-medium text-slate-700">Your notes</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                        {/* CLICK NOTE → OPEN DETAIL */}
                        <NoteCard onClick={() => setShowDetail(true)} />

                        {/* NEW NOTE */}
                        <div className="rounded-xl p-6 min-h-[160px] w-64 flex items-center justify-center border-2 border-dashed border-slate-300">
                            <button className="text-slate-600">+ New Note</button>
                        </div>
                    </div>
                </section>
            </main>

            {/* SHOW MODAL */}
            {showDetail && (
                <NoteDetail onClose={() => setShowDetail(false)} />
            )}
        </div>
    );
}
