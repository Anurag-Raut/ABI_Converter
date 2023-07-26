const  {ethers}  = require("ethers");
function json_to_ethers(jsonABI){

    const existingInterface = new ethers.Interface(jsonABI);

    const ethersABIFormatted = existingInterface.format(ethers.JsonFragment);
const ethersABIFormattedJson = existingInterface.formatJson(ethers.JsonFragment);

console.log("ethersABIFormatted:", ethersABIFormatted);
console.log("ethersABIFormattedJson:", ethersABIFormattedJson);
    
}


export {json_to_ethers}