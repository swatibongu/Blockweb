const localPath = './build/contracts';

const fs = require("fs");   //fs-file system (navigate)
const path = require("path");     // path- open & read files

const readline = require("prompt-sync")();

const NetworkId = readline("Network ID:-");
console.log(NetworkId)   //same as printing output on terminal and stores the output which we have given. 

fs.readdir(localPath,(err,files)=>{

const artifactsDir = __dirname + '/artifacts';
    if(!fs.existsSync(artifactsDir)){
        fs.mkdirSync(artifactsDir);
    }
   
    files.forEach(
        (file) => {

            const filePath = path.resolve(__dirname,`${localPath}/${file}`);
            const fileContent = JSON.parse(fs.readFileSync(filePath));
            
           try{
            const contractName = fileContent.contractName;
            const abi = fileContent.abi;
            const bytecode = fileContent.bytecode;
            const address = fileContent.networks[NetworkId].address;

            fs.writeFile(
                `${artifactsDir}/${contractName}Abi.js`,
                `const ${contractName}Abi= ${JSON.stringify(abi)};\n
                const ${contractName}Bytecode = "${bytecode}"\n
                const ${contractName}Address = "${address}"`,

                (err)=>err?console.warn("Error",err):-1
            );
            }catch(error){console.warn(`Invalid Network Id - ${NetworkId}.`)}   
        })
    });
        