
# Оптимальный вариант - multi-stage сборка, она реализована в Dockerfile
# Простейший вариант - за одну стадуию описан в Dockerfie 
# (в нем в итоговый образ попадает исходный код и dev-зависимости)

FROM node:16-alpine as build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:16-alpine As production
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
# Копируем результат сборк из build-стадии
COPY --from=build /usr/src/app/dist ./dist
EXPOSE 3000
# Команда для запуска
CMD ["node", "dist/main"]



