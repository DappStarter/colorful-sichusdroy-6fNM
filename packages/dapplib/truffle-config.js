require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi bridge tooth guard render remind honey gloom dry fresh silver'; 
let testAccounts = [
"0xebc87de876dc3e75f415025e86752da0724af7b7a991ea6c0c8ec15a18f29c5c",
"0x39798b8410dc23a7b0ee1ecbcbf0f6c0afad7b7e11f9693c0329e46de71638a4",
"0x5e10f1da643e62ed72fab71fbbc9ff18fec863313db76d24333856e1e5ef77dd",
"0xdc820d2758dc5b1f8e9faacb4777461a06aa0231cfe2edfecc4c55cdfa984216",
"0x4295aabb510241dd64ffceff27c1b3cbac9d03e2cfe53a11fbe146af03550bd8",
"0xde0217f87c18b22936f542197681b9c32a1791cc18c9a373b2fa1c537929d482",
"0x0540e0ae909465a3c39aa99232737437482a03b1e95d90bc88029b3bca4b6cf9",
"0xc46408d8bf699a3297383f872c7e73f65227c8b484e399cee6163da1b4a0de3e",
"0x369bdb3e356324fcc5aa01bbb33639ddd44edbac1134a78cc844ece4fe96ec40",
"0x32f1924ad4765fddf22a81c92fc0604461cb5a3f200f6ae551e96b24020a1ffd"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


