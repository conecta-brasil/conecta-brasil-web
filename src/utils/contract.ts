import { env } from "@/config/env";
import { native, rpc, server } from "@/config/passkey";
import { Keypair } from "@stellar/stellar-sdk";
import { basicNodeSigner } from "@stellar/stellar-sdk/minimal/contract";

type FundContractParams = {
    contractId: string;
}

export const fundContract = async ({contractId}: FundContractParams) => {
    // create a new account
    const now = new Date();

    now.setMinutes(0, 0, 0);

    const nowData = new TextEncoder().encode(now.getTime().toString());
    const hashBuffer = await crypto.subtle.digest('SHA-256', nowData);
    const keypair = Keypair.fromRawEd25519Seed(Buffer.from(hashBuffer))
    const publicKey = keypair.publicKey()

    try {
        await rpc.getAccount(publicKey)
    } catch (e) {
        await rpc.requestAirdrop(publicKey)
    }

    // funding the contract

    const fundPubkey = keypair.publicKey();
    const fundSigner = basicNodeSigner(keypair, env.networkPassphrase)

    const { built, ...transfer } = await native.transfer({
        to: contractId,
        from: fundPubkey,
        amount: BigInt(9999 * 10_000_000),
    });

    await transfer.signAuthEntries({
        address: fundPubkey,
        signAuthEntry: fundSigner.signAuthEntry,
    });

    if (!built) {
        return;
    }

    const res = await server.send(built!);
}