FROM node:current-alpine
WORKDIR /app
COPY ./package.json ./
RUN apk add --no-cache make gcc g++ python 
RUN npm install 
RUN npm rebuild bcrypt --build-from-source 
RUN apk del make gcc g++ python 

COPY . .
EXPOSE 4000
CMD ["npm", "run","start"]
