// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Inbox {
    string public message;

    constructor(string memory newMessage)  {
        message = newMessage;
    }

    function setMessage(string memory modifyMessage) public {
        message = modifyMessage;
    }

}
