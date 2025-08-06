export type Suggestion = {
    id: number;
    title: string;
    summary: string;
    doc_snippet: string;
    source: string;
};

export async function fetchSuggestions(): Promise<Suggestion[]> {
    const res = await fetch('http://localhost:8000/suggestions')
    return await res.json();
}

export async function approveSuggestion(id: number) {
    await fetch('http://localhost:8000/suggestions/${id}/approve', {
        method: 'POST',
    });
}