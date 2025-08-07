import packageJson from "../../../package.json" assert { type: "json" };
const { version, name } = packageJson;

module.exports = {
  apps: [
    {
      name: `${name}-${version}`,
      script: "npm",
      args: "start",
      instances: 1,
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};
