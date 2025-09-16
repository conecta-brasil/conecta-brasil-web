import { z } from "zod";

const envSchema = z.object({
  walletWasmHash: z.string().min(1, "Wallet WASM hash is required"),
  nativeContractId: z.string().min(1, "Native contract ID is required"),
  networkPassphrase: z.string().min(1, "Network passphrase is required"),
  rpcUrl: z.url("RPC URL must be a valid URL"),
  launchtubeUrl: z.url("Launchtube URL must be a valid URL"),
  launchtubeJwt: z.string().min(1, "Launchtube JWT is required"),
  mercuryProjectName: z.string().min(1, "Mercury project name is required"),
  mercuryUrl: z.url("Mercury URL must be a valid URL"),
  mercuryJwt: z.string().min(1, "Mercury JWT is required"),
  horizonUrl: z.url("Horizon URL must be a valid URL"),
  apiUrl: z.url("API URL must be a valid URL"),
});

const config = {
  walletWasmHash: process.env.NEXT_PUBLIC_WALLET_WASM_HASH,
  nativeContractId: process.env.NEXT_PUBLIC_NATIVE_CONTRACT_ID,
  networkPassphrase: process.env.NEXT_PUBLIC_NETWORK_PASSPHRASE,
  rpcUrl: process.env.NEXT_PUBLIC_RPC_URL,
  launchtubeUrl: process.env.NEXT_PUBLIC_LAUNCHTUBE_URL,
  launchtubeJwt: process.env.NEXT_PUBLIC_LAUNCHTUBE_JWT,
  mercuryProjectName: process.env.NEXT_PUBLIC_MERCURY_PROJECT_NAME,
  mercuryUrl: process.env.NEXT_PUBLIC_MERCURY_URL,
  mercuryJwt: process.env.NEXT_PUBLIC_MERCURY_JWT,
  horizonUrl: process.env.NEXT_PUBLIC_HORIZON_URL,
  apiUrl: process.env.NEXT_PUBLIC_API_URL,
};

export const env = envSchema.parse(config);