# Multi-stage build for Vue 3 + Vite frontend

# Build stage
FROM node:22-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install ALL dependencies (including devDependencies and optional deps for build)
# Use npm install instead of npm ci to handle optional dependencies properly
RUN npm install --legacy-peer-deps

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Runtime stage
FROM node:22-alpine

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install only production dependencies
RUN npm install --legacy-peer-deps --omit=dev --omit=optional

# Copy built app from builder stage
COPY --from=builder /app/dist ./dist

# Copy server script
COPY server.js ./

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "preview"]
