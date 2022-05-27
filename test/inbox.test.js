    const assert = require('assert')
const {provider} = require('ganache-cli')
const Web3 = require('web3')
const web3 = new Web3(provider());
const {abi, evm} = require('../compile')

let accounts;
let inbox;

beforeEach(async () => {
    // Get a list of all account
    accounts = await web3.eth.getAccounts();

    //Use one of those accounts to deploy the contracts
    inbox = await new web3.eth.Contract(abi)
        .deploy({data: evm.bytecode.object, arguments: ['Hi there']})
        .send({from: accounts[0], gas: '1000000'})
});
describe('Inbox', () => {
    it('should deploys a contract', () => {
        assert.ok(inbox.options.address)
    });
    it('should has an initial message',  async () => {
        const message = await inbox.methods.message().call()
        assert.equal(message,'Hi there')
    });
    it('should change the message',  async ()=> {
        const hash = await inbox.methods.setMessage('bye').send({from:accounts[0]})
        const message = await inbox.methods.message().call()
        console.assert(message,'bye')
    });
});