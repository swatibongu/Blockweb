const DwitterMainAbi= [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"content","type":"string"},{"indexed":false,"internalType":"string","name":"hashtag","type":"string"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"NewDweetAdd","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"userName","type":"string"},{"indexed":false,"internalType":"address","name":"pkey","type":"address"}],"name":"NewUserAdd","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"accountCheck","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"addressToId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"dweetCountAuthor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"dweetToAuthor","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"dweet_count","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"dweets","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"content","type":"string"},{"internalType":"address","name":"author","type":"address"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"upvotes","type":"uint256"},{"internalType":"uint256","name":"reports","type":"uint256"},{"internalType":"string","name":"hashtag","type":"string"},{"internalType":"bool","name":"deleted","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"idToUsername","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"reportsList","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"upvotesList","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"userNameCheck","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"userNameToId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"user_count","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"users","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"pkey","type":"address"},{"internalType":"string","name":"firstname","type":"string"},{"internalType":"string","name":"lastname","type":"string"},{"internalType":"string","name":"userName","type":"string"},{"internalType":"string","name":"bio","type":"string"},{"internalType":"uint256","name":"following","type":"uint256"},{"internalType":"uint256","name":"followers","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"string","name":"_firstName","type":"string"},{"internalType":"string","name":"_lastName","type":"string"},{"internalType":"string","name":"_userName","type":"string"},{"internalType":"string","name":"_bio","type":"string"}],"name":"registerNewUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_content","type":"string"},{"internalType":"string","name":"_hashtag","type":"string"}],"name":"addNewDweet","outputs":[],"stateMutability":"nonpayable","type":"function"}];

                const DwitterMainBytecode = "0x608060405260008055600060015534801561001957600080fd5b5061186a806100296000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c8063aee8406411610097578063c2a698bd11610066578063c2a698bd146102f4578063cb0e0d7d14610310578063d0c7008214610340578063e4d2c3cf1461035c576100f5565b8063aee8406414610246578063b2e36aba14610276578063ba1fc1f7146102a6578063bb805f69146102d6576100f5565b806339bdca1f116100d357806339bdca1f1461019857806356606513146101c85780637893d2e2146101f8578063902b4fa814610216576100f5565b806302799d79146100fa578063365b98b21461012a57806337dc190c14610161575b600080fd5b610114600480360381019061010f91906110fb565b61038c565b60405161012191906113c2565b60405180910390f35b610144600480360381019061013f91906112d0565b6103ac565b60405161015898979695949392919061148f565b60405180910390f35b61017b600480360381019061017691906112d0565b610644565b60405161018f989796959493929190611529565b60405180910390f35b6101b260048036038101906101ad91906112d0565b6107d9565b6040516101bf91906113dd565b60405180910390f35b6101e260048036038101906101dd9190611160565b610879565b6040516101ef9190611474565b60405180910390f35b6102006108a7565b60405161020d9190611474565b60405180910390f35b610230600480360381019061022b9190611160565b6108ad565b60405161023d91906113c2565b60405180910390f35b610260600480360381019061025b91906110fb565b6108e3565b60405161026d9190611474565b60405180910390f35b610290600480360381019061028b91906112d0565b6108fb565b60405161029d91906113a7565b60405180910390f35b6102c060048036038101906102bb9190611124565b61092e565b6040516102cd9190611474565b60405180910390f35b6102de61095f565b6040516102eb9190611474565b60405180910390f35b61030e600480360381019061030991906111a1565b610965565b005b61032a600480360381019061032591906110fb565b610c0d565b6040516103379190611474565b60405180910390f35b61035a6004803603810190610355919061120d565b610c25565b005b61037660048036038101906103719190611124565b610f95565b6040516103839190611474565b60405180910390f35b60086020528060005260406000206000915054906101000a900460ff1681565b600381815481106103bc57600080fd5b90600052602060002090600802016000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600201805461040b906116bc565b80601f0160208091040260200160405190810160405280929190818152602001828054610437906116bc565b80156104845780601f1061045957610100808354040283529160200191610484565b820191906000526020600020905b81548152906001019060200180831161046757829003601f168201915b505050505090806003018054610499906116bc565b80601f01602080910402602001604051908101604052809291908181526020018280546104c5906116bc565b80156105125780601f106104e757610100808354040283529160200191610512565b820191906000526020600020905b8154815290600101906020018083116104f557829003601f168201915b505050505090806004018054610527906116bc565b80601f0160208091040260200160405190810160405280929190818152602001828054610553906116bc565b80156105a05780601f10610575576101008083540402835291602001916105a0565b820191906000526020600020905b81548152906001019060200180831161058357829003601f168201915b5050505050908060050180546105b5906116bc565b80601f01602080910402602001604051908101604052809291908181526020018280546105e1906116bc565b801561062e5780601f106106035761010080835404028352916020019161062e565b820191906000526020600020905b81548152906001019060200180831161061157829003601f168201915b5050505050908060060154908060070154905088565b6002818154811061065457600080fd5b906000526020600020906008020160009150905080600001549080600101805461067d906116bc565b80601f01602080910402602001604051908101604052809291908181526020018280546106a9906116bc565b80156106f65780601f106106cb576101008083540402835291602001916106f6565b820191906000526020600020905b8154815290600101906020018083116106d957829003601f168201915b5050505050908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806003015490806004015490806005015490806006018054610743906116bc565b80601f016020809104026020016040519081016040528092919081815260200182805461076f906116bc565b80156107bc5780601f10610791576101008083540402835291602001916107bc565b820191906000526020600020905b81548152906001019060200180831161079f57829003601f168201915b5050505050908060070160009054906101000a900460ff16905088565b600a60205280600052604060002060009150905080546107f8906116bc565b80601f0160208091040260200160405190810160405280929190818152602001828054610824906116bc565b80156108715780601f1061084657610100808354040283529160200191610871565b820191906000526020600020905b81548152906001019060200180831161085457829003601f168201915b505050505081565b6005818051602081018201805184825260208301602085012081835280955050505050506000915090505481565b60005481565b6009818051602081018201805184825260208301602085012081835280955050505050506000915054906101000a900460ff1681565b60076020528060005260406000206000915090505481565b60066020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600c602052816000526040600020818154811061094a57600080fd5b90600052602060002001600091509150505481565b60015481565b60011515600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515146109c257600080fd5b600260405180610100016040528060005481526020018481526020013373ffffffffffffffffffffffffffffffffffffffff1681526020014281526020016000815260200160008152602001838152602001600015158152509080600181540180825580915050600190039060005260206000209060080201600090919091909150600082015181600001556020820151816001019080519060200190610a6a929190610fc6565b5060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550606082015181600301556080820151816004015560a0820151816005015560c0820151816006019080519060200190610aec929190610fc6565b5060e08201518160070160006101000a81548160ff021916908315150217905550505033600660008054815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190610bb29061171f565b9190505550600080815480929190610bc99061171f565b91905055507facab41ac617121bd4fd2bc199121ad1cad61a00e8688e0d655009a3aea3a86fe828242604051610c019392919061142f565b60405180910390a15050565b60046020528060005260406000206000915090505481565b60001515600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610c8257600080fd5b8160001515600982604051610c979190611390565b908152602001604051809103902060009054906101000a900460ff16151514610cbf57600080fd5b600360405180610100016040528060015481526020013373ffffffffffffffffffffffffffffffffffffffff16815260200187815260200186815260200185815260200184815260200160008152602001600081525090806001815401808255809150506001900390600052602060002090600802016000909190919091506000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002019080519060200190610dab929190610fc6565b506060820151816003019080519060200190610dc8929190610fc6565b506080820151816004019080519060200190610de5929190610fc6565b5060a0820151816005019080519060200190610e02929190610fc6565b5060c0820151816006015560e0820151816007015550506001600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506001600984604051610e839190611390565b908152602001604051809103902060006101000a81548160ff021916908315150217905550600154600584604051610ebb9190611390565b908152602001604051809103902081905550600154600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555082600a600060015481526020019081526020016000209080519060200190610f3c929190610fc6565b5060016000815480929190610f509061171f565b91905055507ff0a5e3218720ff98a346fdc2ed74b1bf7824dc56423d24ab218be30b09ae70b38333604051610f869291906113ff565b60405180910390a15050505050565b600b6020528160005260406000208181548110610fb157600080fd5b90600052602060002001600091509150505481565b828054610fd2906116bc565b90600052602060002090601f016020900481019282610ff4576000855561103b565b82601f1061100d57805160ff191683800117855561103b565b8280016001018555821561103b579182015b8281111561103a57825182559160200191906001019061101f565b5b509050611048919061104c565b5090565b5b8082111561106557600081600090555060010161104d565b5090565b600061107c611077846115da565b6115b5565b90508281526020810184848401111561109457600080fd5b61109f84828561167a565b509392505050565b6000813590506110b681611806565b92915050565b600082601f8301126110cd57600080fd5b81356110dd848260208601611069565b91505092915050565b6000813590506110f58161181d565b92915050565b60006020828403121561110d57600080fd5b600061111b848285016110a7565b91505092915050565b6000806040838503121561113757600080fd5b6000611145858286016110a7565b9250506020611156858286016110e6565b9150509250929050565b60006020828403121561117257600080fd5b600082013567ffffffffffffffff81111561118c57600080fd5b611198848285016110bc565b91505092915050565b600080604083850312156111b457600080fd5b600083013567ffffffffffffffff8111156111ce57600080fd5b6111da858286016110bc565b925050602083013567ffffffffffffffff8111156111f757600080fd5b611203858286016110bc565b9150509250929050565b6000806000806080858703121561122357600080fd5b600085013567ffffffffffffffff81111561123d57600080fd5b611249878288016110bc565b945050602085013567ffffffffffffffff81111561126657600080fd5b611272878288016110bc565b935050604085013567ffffffffffffffff81111561128f57600080fd5b61129b878288016110bc565b925050606085013567ffffffffffffffff8111156112b857600080fd5b6112c4878288016110bc565b91505092959194509250565b6000602082840312156112e257600080fd5b60006112f0848285016110e6565b91505092915050565b61130281611632565b82525050565b61131181611644565b82525050565b60006113228261160b565b61132c8185611616565b935061133c818560208601611689565b611345816117f5565b840191505092915050565b600061135b8261160b565b6113658185611627565b9350611375818560208601611689565b80840191505092915050565b61138a81611670565b82525050565b600061139c8284611350565b915081905092915050565b60006020820190506113bc60008301846112f9565b92915050565b60006020820190506113d76000830184611308565b92915050565b600060208201905081810360008301526113f78184611317565b905092915050565b600060408201905081810360008301526114198185611317565b905061142860208301846112f9565b9392505050565b600060608201905081810360008301526114498186611317565b9050818103602083015261145d8185611317565b905061146c6040830184611381565b949350505050565b60006020820190506114896000830184611381565b92915050565b6000610100820190506114a5600083018b611381565b6114b2602083018a6112f9565b81810360408301526114c48189611317565b905081810360608301526114d88188611317565b905081810360808301526114ec8187611317565b905081810360a08301526115008186611317565b905061150f60c0830185611381565b61151c60e0830184611381565b9998505050505050505050565b60006101008201905061153f600083018b611381565b8181036020830152611551818a611317565b905061156060408301896112f9565b61156d6060830188611381565b61157a6080830187611381565b61158760a0830186611381565b81810360c08301526115998185611317565b90506115a860e0830184611308565b9998505050505050505050565b60006115bf6115d0565b90506115cb82826116ee565b919050565b6000604051905090565b600067ffffffffffffffff8211156115f5576115f46117c6565b5b6115fe826117f5565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b600061163d82611650565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b838110156116a757808201518184015260208101905061168c565b838111156116b6576000848401525b50505050565b600060028204905060018216806116d457607f821691505b602082108114156116e8576116e7611797565b5b50919050565b6116f7826117f5565b810181811067ffffffffffffffff82111715611716576117156117c6565b5b80604052505050565b600061172a82611670565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561175d5761175c611768565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b61180f81611632565b811461181a57600080fd5b50565b61182681611670565b811461183157600080fd5b5056fea2646970667358221220f9f8c9af003887d4d0891de95a5c7c87c657728cb9dd19f4f606d09703b6392264736f6c63430008020033"

                const DwitterMainAddress = "0x59Fc88e6040A2553c3E5D9d070C9620dD20bcDdA"