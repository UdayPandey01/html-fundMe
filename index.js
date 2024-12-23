import {ethers} from "./ethers-5.6.esm.min.js"

const connectButton = document.getElementById("connectButton")
const fundButton = document.getElementById("fundButton")

connectButton.onclick = connect
fundButton.onclick = fund

console.log(ethers)

const connect = async () => {
    if(typeof window.ethereum !== "undefined"){
        await window.ethereum.request({method : "eth_requestAccounts"})
        document.getElementById("connectButton").innerHTML = "conncted"
    }else{
        document.getElementById("connectButton").innerHTML = "Please install meta mask"
    }
}

const fund = async(ethAmount) => {
    console.log(`Funding with ${ethAmount}...`)
    if(typeof window.ethereum !== "undefined"){
        //provider / connection to blockchain
        //signer / wallet / someone with gas
        //contract that we are interacting with
        // ABI , address
        
    }
}