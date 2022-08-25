FROM node:14
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install db-migrate-mysql
COPY . .
RUN git clone https://github.com/vishnubob/wait-for-it.git