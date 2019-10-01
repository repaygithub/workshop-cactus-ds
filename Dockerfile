FROM node:lts-jessie

WORKDIR /app

ADD package.json .
ADD yarn.lock .

RUN yarn install --frozen-lockfile

EXPOSE 9222

CMD ["yarn", "start"]