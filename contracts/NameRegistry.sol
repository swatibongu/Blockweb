pragma solidity ^0.8.0;

contract NameRegistry {
    
    // state variables
    struct Person{
        uint user_id;
        address user_address;
        string user_name;
    }
    uint public user_counter;
    uint[] public user_ids;
    mapping(uint=>Person) public id_to_person;
    mapping(address=>uint) public address_to_user_id;
    event NewUser(address user_address,string user_name);
    
    // Function declarations
    
    function addUser(string memory _name) public {
        user_counter++;
        Person memory new_person = Person(user_counter, msg.sender, _name);
        user_ids.push(user_counter);
        id_to_person[user_counter] = new_person;
        address_to_user_id[msg.sender] = user_counter;
        emit NewUser(msg.sender,_name);
    }
    
    function getUserById(uint _id) public view returns(Person memory person) {
        return id_to_person[_id];
    }
    
    function getUserByaddress(address _user) public view returns(Person memory person) {
        return id_to_person[address_to_user_id[_user]];
    }
    
    function getMyDetails() public view returns(Person memory person) {
        return id_to_person[address_to_user_id[msg.sender]];
    }
    
}