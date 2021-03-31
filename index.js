// step 1

const NameRegistryJson = require('./build/contracts/NameRegistry.json');
const NameRegistryAbi = NameRegistryJson.abi;

const Web3 = require('web3');

const web3 = new Web3("http://127.0.0.1:7545");


// Step 2
let defaultAccount;

web3.eth.getAccounts()
    .then(
        accounts => defaultAccount=accounts[0]
        );
// Step 3
const NameRegistryAddress = "0x3a1Be91f97007227941317EC921fbBDBF42EABc3"

const NameRegistryContract = new web3.eth.Contract(NameRegistryAbi, NameRegistryAddress);

// // step 4
// let users;

NameRegistryContract
.methods.addUser("Mihir").send({
    from: "0xF435dE2407156D48284432Af8a66520836C88D44",
    gas: "3000000",
    gasPrice: "1000000"
})
.then(console.log);

NameRegistryContract
.methods
.getUserByaddress("0xF435dE2407156D48284432Af8a66520836C88D44")
.call()
.then(console.log);

NameRegistryContract
.methods.getMyDetails().call().then(console.log);