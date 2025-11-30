import os
import openai

openai.api_key = os.getenv("OPENAI_API_KEY")

def extract_kb_suggestion(message_text: str) -> dict:
    """Analyze message and return KB suggestion."""

    prompt = f"""
    Message:
    "{message_text}"

    If this message contains useful team documentation, extract:
    - title
    - summary
    - doc_snippet(markdown)

    Otherwise, return nulls.

    Respond in JSON format with keys: title, summary, doc_snippet.
    """

    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.3
    )

    content = response['choices'][0]['message']['content']

    try:
        return eval(content) if content.strip().startswith("{") else {}
    except Exception as e:
        print("Failed to parse OpenAI response:", content)
        return {}