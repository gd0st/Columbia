FROM node:18.7.0
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build
RUN npm prune --production

# Ligher weight node
# Packages are built in the previous step, and copied into this image.
FROM node:18-bullseye-slim
LABEL Name="Columbia"
LABEL Version="v0.1.0"
WORKDIR /app
# Copied from node18 to 18-bullseye
COPY --from=0 /app/build build/
COPY --from=0 /app/node_modules node_modules/
COPY package*.json .
EXPOSE 3000
CMD ["node", "build"]