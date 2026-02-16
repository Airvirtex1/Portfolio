# Utiliser l'image officielle Node.js (version LTS)
FROM node:20-alpine

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Exposer le port sur lequel l'application écoute (ajustez selon votre app)
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["node", "index.js"]
