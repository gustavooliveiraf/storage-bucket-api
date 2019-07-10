FROM node:10
WORKDIR /api
COPY ./package*.json ./
RUN npm install --only=production
COPY . .
ARG PORT=8001
ENV PORT $PORT
ENV NODE_ENV production
EXPOSE $PORT
CMD [ "npm", "start" ]
