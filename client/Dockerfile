# build stage
FROM node:22-alpine AS build

# App directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project
COPY . .

# Build the React app
RUN npm run build


# production stage
FROM node:22-alpine

# App directory
WORKDIR /app

# Install serve to serve the static files
RUN npm install -g serve

# Copy built files from the build stage
COPY --from=build /app/dist ./dist

# Expose frontend port
EXPOSE 3000

# Start the server to serve the static files
CMD ["serve", "-s", "dist", "-l", "3000"]