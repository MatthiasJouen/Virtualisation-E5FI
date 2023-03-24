# Utilisez une image officielle de Node.js comme base
FROM node:latest as build

# Créez un répertoire de travail pour votre application
WORKDIR /app

# Copiez les fichiers package.json et package-lock.json dans le conteneur
COPY package*.json ./

# Installez les dépendances de votre application
RUN npm install

# Copiez les fichiers sources de votre application dans le conteneur
COPY . .

# Installez l'interface de ligne de commande Angular
RUN npm install -g @angular/cli

# Construisez l'application
RUN npm run build --prod

# Utilisez l'image officielle de Nginx comme base pour l'application
FROM nginx:latest

# Copiez les fichiers générés de l'application dans l'image Nginx
COPY --from=build /app/dist/VirtualisationE5FI /usr/share/nginx/html

# Exposez le port 80 pour accéder au serveur Nginx
EXPOSE 80

# Démarrez le serveur Nginx lorsque le conteneur est lancé
CMD ["nginx", "-g", "daemon off;"]