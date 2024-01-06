const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

/** @type {import('next').NextConfig} */
const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        db_username: "hendra",
        db_password: "5ekkXEmmiV3ABvYU",
        db_clustername: "cluster0",
        db_name: "myblog-dev",
      },
    };
  }

  return {
    reactStrictMode: true,
    env: {
      db_username: "hendra",
      db_password: "5ekkXEmmiV3ABvYU",
      db_clustername: "cluster0",
      db_name: "myblog",
    },
  };
};

module.exports = nextConfig;
