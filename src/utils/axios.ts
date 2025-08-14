import { Axios } from "axios"
import { logInfo } from "./logger.js"

// Constants for the v4 repository structure
const REPO_OWNER = "gustavogomez092"
const REPO_NAME = "zenblocks-mcp"
const REPO_BRANCH = "main"

// GitHub API for accessing repository structure and metadata
const githubApi = new Axios({
  baseURL: "https://api.github.com",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/vnd.github+json",
    "User-Agent": "Mozilla/5.0 (compatible; ZenBlocksMcpServer/1.0.0)",
    ...(process.env.GITHUB_PERSONAL_ACCESS_TOKEN && {
      Authorization: `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
    }),
  },
  timeout: 30000, // Increased from 15000 to 30000 (30 seconds)
  transformResponse: [
    (data) => {
      try {
        return JSON.parse(data)
      } catch {
        return data
      }
    },
  ],
})

// GitHub Raw for directly fetching file contents
const githubRaw = new Axios({
  baseURL: `https://raw.githubusercontent.com/${REPO_OWNER}/${REPO_NAME}/${REPO_BRANCH}`,
  headers: {
    "User-Agent": "Mozilla/5.0 (compatible; ZenBlocksMcpServer/1.0.0)",
  },
  timeout: 30000, // Increased from 15000 to 30000 (30 seconds)
  transformResponse: [(data) => data], // Return raw data
})

/**
 * Set or update GitHub API key for higher rate limits
 * @param apiKey GitHub Personal Access Token
 */
function setGitHubApiKey(apiKey: string): void {
  // Update the Authorization header for the GitHub API instance
  if (apiKey && apiKey.trim()) {
    ;(githubApi.defaults.headers as any)[
      "Authorization"
    ] = `Bearer ${apiKey.trim()}`
    logInfo("GitHub API key updated successfully")
    console.error("GitHub API key updated successfully")
  } else {
    // Remove authorization header if empty key provided
    delete (githubApi.defaults.headers as any)["Authorization"]
    console.error("GitHub API key removed - using unauthenticated requests")
    console.error(
      "For higher rate limits and reliability, provide a GitHub API token. See setup instructions: https://github.com/Jpisnice/shadcn-ui-mcp-server#readme"
    )
  }
}

/**
 * Get current GitHub API rate limit status
 * @returns Promise with rate limit information
 */
async function getGitHubRateLimit(): Promise<any> {
  try {
    const response = await githubApi.get("/rate_limit")
    return response.data
  } catch (error: any) {
    throw new Error(`Failed to get rate limit info: ${error.message}`)
  }
}

export const axios = {
  githubApi,
  githubRaw,
  setGitHubApiKey,
  getGitHubRateLimit,
}
