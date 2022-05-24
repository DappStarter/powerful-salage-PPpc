require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea knife sun tooth guard render remind history hockey arctic sun gasp'; 
let testAccounts = [
"0x64264f76f56a4ed3c9a949ed9bc0de578749971b36fadc0a05f3811b757cac30",
"0xc7b44d3e7f59791327fd80e3867ef456b5fe9ca6ac2a33ec178b21019d563e30",
"0xc68d1dc6e889480c882f4d35ca931baf641f4e5584b42003afbfb5be263ab0d7",
"0xbe863b4ffd88354397a9ed5a9b0d303ce356529e66ee25b4864739d0384e613b",
"0x0202ac9079ed8f20af744a9f362c351c3003cdbb764477eafb2c9d04a2f8608b",
"0xb688cddc5d555a1149f00fc2922be53e2250de47eb2e1151957c406177c41746",
"0x1740f11b549674743b027c7cfb4585c76531edf02726bd662e2fcf2cdabe16cd",
"0xbe8ee0bdeb80e597da33535c8faf1a4b973a6edc48ead36609b42dbc4dc9b12c",
"0x4ae3612344444efc3b78edf38eb3f07aca49ad5d55b509a606de14d5a5fa4649",
"0xdee63a344840bf269322d59ecf67f6b2232a7ea239f27b2bd7b5b7df5c50633d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

