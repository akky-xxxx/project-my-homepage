FROM node:16.15.0-alpine
WORKDIR ./app
COPY . .

ENV NODE_ENV=production

RUN yarn && yarn build

CMD ["yarn", "start"]
