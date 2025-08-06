import os
import openai

openai.api_key = os.getenv("OPENAI_API_KEY")

def extract_kb_suggestion(message_text: str) -> dict:
    """Analyze message and return KB suggestion."""

    prompt = f"""
    A team member wrote the following message in Slack:
    
    "{message_text}"

    Please determine if this message contains information worth documenting in a team knowledge base. If yes, extract:

    1. A short topic/title for the entry
    2. A 1-sentence summary
    3. A suggested documentation snippet (markdown-formatted)

    Respond in JSON format with keys: `title`, `summary`, `doc_snipper`.
    If no documentation is needed, return: {{"title": null, "summary": null, "doc_snippet": null}}
    """

    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.3
    )

    content = response['choices'][0]['message']['content']

    try:
        return eval(content) if content.strip().startswith("{") else {}
    except Exception as e:
        print("Failed to parse OpenAI response:", content)
        return {}