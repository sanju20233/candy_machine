 import { clusterApiUrl, Connection, Keypair, LAMPORTS_PER_SOL } from '@solana/web3.js';
 import { createMint, getOrCreateAssociatedTokenAccount, mintTo, transfer } from '@solana/spl-token';

import bs58 from 'bs58' ;


  
const fromWallet = Keypair.generate();
const toWallet = Keypair.generate() ;

console.log(bs58.encode(fromWallet.secretKey));
console.log(bs58.encode(toWallet.secretKey)) ;

(async () => {

    const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

    const fromAirdropSignature = await connection.requestAirdrop(fromWallet.publicKey, LAMPORTS_PER_SOL);
  
    await connection.confirmTransaction(fromAirdropSignature, { commitment: "confirmed" });


    const mint = await createMint(connection, fromWallet, fromWallet.publicKey, null, 9);
    console.log('mint address: ', mint.toBase58());
    const fromTokenAccount = await getOrCreateAssociatedTokenAccount(
        connection,
        fromWallet,
        mint,
        fromWallet.publicKey
)
    console.log('from token account address: ',fromTokenAccount.address.toString());

    let signature = await mintTo(
        connection,
        fromWallet,
        mint,
        fromTokenAccount.address,
        fromWallet.publicKey,
        100000000000,
        []
    );
    console.log('mint tx:', signature);

    const toTokenAccount = await getOrCreateAssociatedTokenAccount(connection, fromWallet, mint, toWallet.publicKey);
    console.log('to token account address: ', toTokenAccount.address.toString());

    signature = await transfer(
        connection,
        fromWallet,
        fromTokenAccount.address,
        toTokenAccount.address,
        fromWallet.publicKey,
        1000000000,
        []
    );
    console.log('transfer tx:', signature);
})();

