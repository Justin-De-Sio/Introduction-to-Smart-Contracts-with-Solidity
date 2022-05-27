const HDWalletProvider = require('@truffle/hdwallet-provider')
const Web3 = require('web3')
const {interface, bytecode} = require('./compile')
const mnemonic = 'candy maple cake sugar pudding cream honey rich smooth crumble sweet treat'
const endpoint = 'https://rinkeby.infura.io/v3/9b886f0dd0804fbdb718dbe118966102'
const provider = new HDWalletProvider(mnemonic,endpoint)
const web3 = new  Web3(provider)

