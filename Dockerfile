# Definujte základný kontajnerový obraz na Node.js 20
FROM node:20

# Nastavte pracovný adresár v kontajnere
WORKDIR /app

# Kopírujte súbory package.json a package-lock.json (alebo yarn.lock) do rovnakého adresára
COPY package*.json ./

# Nainštalujte závislosti projektu
RUN npm install

# Kopírujte všetky ostatné súbory projektu do toho istého adresára
COPY . .

# Postavte aplikáciu
RUN npm run build

# Nainštalujte serve http server
RUN npm install -g serve

# Spustite server na porte 8080 bez použitia schránky
CMD serve -s dist -l ${PORT:-8080} --no-clipboard