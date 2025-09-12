FROM oven/bun:debian AS builder

WORKDIR /app

RUN apt-get update \
  && apt-get install -y --no-install-recommends curl wget ca-certificates \
  && rm -rf /var/lib/apt/lists/*

COPY package*.json ./

RUN bun install
RUN bun install sharp

COPY . .

ENV NODE_ENV=production

EXPOSE 3000

RUN bun run build

CMD ["bun", "run", "start"]