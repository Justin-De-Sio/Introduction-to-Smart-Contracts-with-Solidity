const assert = require('assert')
const ganache = require('ganache-cli')
const Web3 = require('web3')
const web3 = new Web3(ganache.provider());
let accounts;
beforeEach(async () => {
    // Get a list of all account
     accounts = await web3.eth.getAccounts()

    //Use one of those accounts to deploy the contracts

});
describe('Inbox', function () {
    it('should deploys a contract', function () {
        console.log(accounts)
    });
});