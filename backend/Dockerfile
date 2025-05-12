# Базовый образ
FROM node:18-alpine

# Рабочая директория
WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY package*.json .
#COPY package*.json ./
RUN npm ci

# Копируем Prisma и исходный код
COPY prisma ./prisma
COPY src ./src
COPY tsconfig.json ./
#COPY . .


# Генерируем Prisma Client
RUN npx prisma generate

# Компилируем TypeScript
RUN npm run build

# Запускаем приложение
CMD ["npm", "run", "start"]

# Порт
EXPOSE 3000