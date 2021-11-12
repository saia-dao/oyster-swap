// import { AccountInfo, Connection, PublicKey } from '@solana/web3.js';

import { WalletAdapter } from '../wallet-adapters';

export interface WalletContextValues {
    wallet: WalletAdapter | undefined;
    connected: boolean;
    providerUrl: string;
    setProviderUrl: (newProviderUrl: string) => void;
    providerName: string;
    select: () => void;
}