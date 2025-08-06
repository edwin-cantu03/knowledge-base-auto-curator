# Knowledge Base Auto-Curator

## Description
A web application to review and manage AI-generated documentation suggestions. It features a Next.js frontend and a Python backend, designed for efficient knowledge base curation.

## Features
- Review AI-generated documentation suggestions
- Approve, reject, or edit suggestions
- Slack integration (if applicable)
- Modern UI with Next.js

## Getting Started

### Prerequisites
- Node.js & pnpm
- Python 3.11+
- Docker (optional, for containerized setup)

### Installation
1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd knowledge-base-auto-curator
   ```
2. Install frontend dependencies:
   ```bash
   cd apps/frontend
   pnpm install
   ```
3. Install backend dependencies:
   ```bash
   cd ../backend
   pip install -r requirements.txt
   ```

### Running the App
- **Frontend:**
  ```bash
  cd apps/frontend
  pnpm dev
  ```
- **Backend:**
  ```bash
  cd apps/backend
  python main.py
  ```
- **With Docker Compose:**
  ```bash
  docker-compose up --build
  ```

## Usage
- Access the frontend at `http://localhost:3000`
- API runs at `http://localhost:8000` (default)

## Folder Structure
- `apps/frontend/` – Next.js frontend
- `apps/backend/` – Python backend (FastAPI or similar)
- `infra/` – Infrastructure as code (if present)
- `packages/` – Shared packages (if present)

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License.