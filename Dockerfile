FROM node:14-slim AS base

RUN npm i -g pnpm


FROM base AS build

WORKDIR /build

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . ./

RUN pnpm build


FROM base AS deps

WORKDIR /deps

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod


FROM gcr.io/distroless/nodejs:14

ENV NODE_ENV=production

WORKDIR /app

COPY --from=build /build/.next/ .next/
COPY --from=build /build/public/ public/
COPY --from=deps /deps/node_modules/ node_modules/

EXPOSE 3000

CMD ["node_modules/next/dist/bin/next", "start"]
