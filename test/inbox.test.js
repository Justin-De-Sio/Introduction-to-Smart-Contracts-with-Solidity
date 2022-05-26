const assert = require('assert')
const ganache = require('ganache-cli')
const Web3 = require('web3')
const web3 = new Web3(ganache.provider());
beforeEach(() => {
    // Get a list of all account
    web3.eth.getAccounts()
        .then(fetchedAccounts => {
            console.log(fetchedAccounts)
        })
    //Use one of those accounts to deploy the contracts

});
describe('Inbox', function () {
    it('should deploys a contract', function () {

    });
});