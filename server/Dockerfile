# Base image
FROM node:22-alpine

# App directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project
COPY . .

# Expose backend port
EXPOSE 3000

# Start server
CMD ["npm", "start"]
