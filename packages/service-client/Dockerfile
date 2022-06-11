FROM node:16.15.1-alpine
WORKDIR ./app
COPY ../../. .

RUN yarn --frozen-lockfile \
    && rm -rf /usr/local/share/.cache \
    && rm -rf /root/.npm

WORKDIR ./packages/service-client

ARG NEXT_PUBLIC_SG_SERVER
ENV NODE_ENV=production
ENV NEXT_PUBLIC_SG_SERVER ${NEXT_PUBLIC_SG_SERVER}

RUN yarn build

CMD ["yarn", "start"]
