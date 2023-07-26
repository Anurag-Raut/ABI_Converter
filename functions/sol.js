const {compileSourceCode} =require('../services/sol-to-Json')
const {json_to_ethers}=require('../services/json-to-ethers')
const {json_to_viem}=require('../services/json-to-viem')
async function Sol(solidityCode){
    try{

        const ABI=await compileSourceCode(solidityCode);
        console.log(ABI[0].abi,'s');
        const {ethersABIFormatted,ethersABIFormattedJson}=json_to_ethers(ABI[0].abi);

        json_to_viem(ABI[0].abi);

        
        



    }
   catch(error){
        console.log(error);
   }



}


export {Sol};