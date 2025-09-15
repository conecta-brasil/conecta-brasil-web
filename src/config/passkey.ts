import { PasskeyKit, PasskeyServer, SACClient } from "passkey-kit";
import { Server } from "@stellar/stellar-sdk/minimal/rpc";
import { env } from "./env";

export const rpc = new Server(env.rpcUrl);

export const account = new PasskeyKit({
    rpcUrl: env.rpcUrl,
    networkPassphrase: env.networkPassphrase,
    walletWasmHash: env.walletWasmHash,
});

export const server = new PasskeyServer({
    rpcUrl: env.rpcUrl,
    launchtubeUrl: env.launchtubeUrl,
    launchtubeJwt: env.launchtubeJwt,
    mercuryProjectName: env.mercuryProjectName,
    mercuryUrl: env.mercuryUrl,
    mercuryJwt: env.mercuryJwt,
});

export const sac = new SACClient({
    rpcUrl: env.rpcUrl,
    networkPassphrase: env.networkPassphrase,
});

export const native = sac.getSACClient(env.nativeContractId)