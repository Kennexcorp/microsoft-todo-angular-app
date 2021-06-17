FROM node:14-alpine

RUN mkdir -p /todo-ui

WORKDIR /todo-ui

COPY package*.json /todo-ui/

RUN npm install -g @angular/cli && npm install

COPY . /todo-ui/

EXPOSE 4200

CMD ["npm", "start"]

