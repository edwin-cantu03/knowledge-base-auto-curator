"use client";

import { useEffect, useState } from "react";
import { fetchSuggestions, approveSuggestion, Suggestion } from "../../lib/api";
import SuggestionCard from "../../components/SuggestionCard";

export default function SuggestiosPage() {
    const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

    useEffect(() => {
        fetchSuggestions().then(setSuggestions);
    }, []);

    const handleApprove = async (id: number) => {
        await approveSuggestion(id);
        setSuggestions(s => s.filter(sug => sug.id !== id));
    };

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Review Suggestions</h1>
            {suggestions.length === 0 ? (
                <p>No new suggestions. Check back later!</p>
            ) : (
                suggestions.map(s => (
                    <SuggestionCard key={s.id} suggestion={s} onApprove={handleApprove} />
                ))
            )}
        </div>
    );
}