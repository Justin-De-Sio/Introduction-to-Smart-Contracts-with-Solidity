pragma solidity ^0.4.7;

contract Inbox {
    string public message;

    function Inbox(string newMessage) public {
        message = newMessage;
    }

    function setMessage(string modifyMessage) public {
        message = modifyMessage;
    }

}
