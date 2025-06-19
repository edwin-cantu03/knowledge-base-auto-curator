FROM node:18

WORKDIR /app

COPY pnpm-workspace.yaml ./
COPY ../pnpm-lock.yaml ./
COPY package.json ./

COPY apps ./apps

RUN npm install -g pnpm

RUN pnpm install

WORKDIR /app/apps/frontend
CMD ["pnpm", "dev"]