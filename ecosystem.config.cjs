module.exports = {
  apps: [
    {
      name: "backend-example",
      script: "npm",
      args: "start",
      instances: 1,
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};
