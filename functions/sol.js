const {compileSourceCode} =require('../services/sol-to-Json')
const {json_to_ethers}=require('../services/json-to-ethers')
async function Sol(solidityCode){
    try{

        const JsonABI=await compileSourceCode(solidityCode);
        console.log(JsonABI[0].abi,'s');
        json_to_ethers(JsonABI[0].abi)



    }
   catch(error){
        console.log(error);
   }



}


export {Sol};