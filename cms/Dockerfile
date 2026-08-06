FROM node:22-slim AS build

# sharp resolves prebuilt binaries on glibc; the toolchain is only here for
# better-sqlite3 (a dev dependency used for local development).
RUN apt-get update && apt-get install -y --no-install-recommends \
      build-essential python3 \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# Drop dev dependencies (typescript, better-sqlite3) from the shipped tree.
RUN npm prune --omit=dev

FROM node:22-slim AS runtime

# curl for Coolify's container healthcheck.
RUN apt-get update && apt-get install -y --no-install-recommends curl \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=1337

COPY --from=build /app ./

EXPOSE 1337

CMD ["npm", "run", "start"]
