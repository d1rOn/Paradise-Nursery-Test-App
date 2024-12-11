# Dockerfile

# Use node alpine as it's a small node image
FROM node:21-alpine

# Create the directory on the node image
# where our Next.js front will live
RUN mkdir -p /front

WORKDIR /front

COPY ./front /front
COPY ./front/package*.json /front

RUN npm ci --legacy-peer-deps

# Ensure port 3000 is accessible to our system
EXPOSE 3000

# Run yarn dev, as we would via the command line
CMD npm run build && npm run start
