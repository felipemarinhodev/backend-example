module.exports = {
  apps: [
    {
      name: "backend-example",
      script: "npm start",
      instances: 1,
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};
