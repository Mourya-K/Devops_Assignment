# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy the current directory contents into the container
COPY . /app

# Install project dependencies
RUN npm install

# Expose port 80 to allow external access
EXPOSE 80

# Run the application
CMD ["node", "index.js"]
