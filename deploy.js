const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const {abi, evm} = require('./compile');
const mnemonic = 'depart lion echo document tattoo sign venture advance prefer remember claim coin';
const endpoint = 'wss://rinkeby.infura.io/ws/v3/9b886f0dd0804fbdb718dbe118966102';
const provider = new HDWalletProvider(mnemonic, endpoint);
const web3 = new Web3(provider);


const deploy = async () => {
    const accounts = await web3.eth.getAccounts()



    console.log('Attempting to deploy from account', accounts[0])

    const resultHash = await new web3.eth.Contract(abi)
        .deploy({data: evm.bytecode.object, arguments: ['Hi there!']})
        .send({gas: '1000000', from: accounts[0]})

    console.log('Contract deployed to', resultHash.options.address)
    provider.engine.stop()
};
deploy();