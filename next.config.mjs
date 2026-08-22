/** @type {import('next').NextConfig} */
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === "true";
const basePath = isGitHubPagesBuild ? "/Portfolio" : "";

const nextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
