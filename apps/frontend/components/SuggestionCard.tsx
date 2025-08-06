import { Suggestion } from  "../lib/api";
import { useState } from "react";

type Props = {
    suggestion: Suggestion;
    onApprove: (id: number) => void;
};

export default function SuggestionCard({ suggestion, onApprove}: Props) {
    const [approved, setApproved] = useState(false);

    const handleApprove = () => {
        onApprove(suggestion.id);
        setApproved(true);
    };

    return(
        <div className="p-4 bg-white shadow rounded-xl mb-4 border">
            <h2 className="text-xl font-bold">{suggestion.title}</h2>
            <p className="text-sm text-gray-600 italic mb-2">{suggestion.summary}</p>
            <pre className="bg-gray-100 p-2 rounded text-sm whitespace-pre-wrap">{suggestion.doc_snippet}</pre>
            <button
                className="mt-3 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-gray-300"
                onClick={handleApprove}
                disabled={approved}
            >
                {approved ? "Approved" : "Approve"}
            </button>
        </div>
    )
}