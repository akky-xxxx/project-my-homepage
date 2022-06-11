FROM node:16.15.1-alpine
WORKDIR ./app
COPY ../../. .

RUN yarn --frozen-lockfile \
    && rm -rf /usr/local/share/.cache \
    && rm -rf /root/.npm

WORKDIR ./packages/service-sg-server

ENV NODE_ENV=production

CMD ["yarn", "start"]
