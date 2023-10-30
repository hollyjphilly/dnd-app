FROM node:19

WORKDIR /ui

COPY package.json .

RUN npm install --force

COPY . .

EXPOSE 19006

ENTRYPOINT ["npm", "run"]
CMD ["web"]
