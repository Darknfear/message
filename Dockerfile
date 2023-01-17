# Common build
FROM node:16-alpine3.12 as common-build

WORKDIR /app

COPY . .

RUN npm i

EXPOSE 3000

# Development build
FROM common-build as development-build

RUN chmod +x /app/docker-entrypoint.sh

ENTRYPOINT ["docker-entrypoint.sh"]

ENV NODE_ENV development

CMD ["npm", "run", "start:dev"]

# Production build
FROM common-build as production-build

ENV NODE_ENV production

RUN npm run build

CMD ["npm", "run", "start"]
