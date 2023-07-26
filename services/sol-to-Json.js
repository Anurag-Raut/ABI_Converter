const {compile}=require('../src/sol/compiler')
const compileSourceCode = async(input) => {

    try{
      const output= await compile(input);
      
    //   console.log(output)
      return output;
    }
    catch(error){
      console.error(error);
    }
   
      
  };

export {compileSourceCode}