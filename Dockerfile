FROM node:22-alpine AS build

WORKDIR /app

# --ignore-scripts: the postinstall hook runs `nuxt prepare`, which needs the
# source that hasn't been copied yet. `nuxt build` prepares on its own anyway.
COPY package.json package-lock.json ./
RUN npm ci --ignore-scripts

COPY . .
RUN npm run build

FROM node:22-alpine AS runtime

WORKDIR /app

# Coolify's container healthcheck shells out to curl/wget, neither of which
# ships in node:alpine.
RUN apk add --no-cache curl

ENV NODE_ENV=production
ENV NITRO_HOST=0.0.0.0
ENV NITRO_PORT=3000

# The node-server preset bundles its own dependencies, so no node_modules here.
COPY --from=build /app/.output ./.output

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
