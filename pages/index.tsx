import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Sol } from '../functions/sol'
import { useState } from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [input,setInput]=useState('');
  const [abi,setAbi]=useState()
  



 

  return (
    <main
      className={`flex min-h-screen  items-center justify-around p-24 ${inter.className}`}
    >
    
     <div>
     <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
      <textarea onChange={(e)=>{setInput(e.target.value)}} id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
     </div>

     <div>
     <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
<select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Choose a country</option>
  <option value="Solidity">Solidity</option>
  <option value="Ethers.js">Ethers.js</option>
  <option value="viem">viem</option>
  <option value="JSON">JSON</option>
  <option value="JSON(minified)">JSON(minified)</option>
</select>


     </div>

     <button onClick={()=>Sol(input)}>Compile</button>
    
    </main>
  )
}
