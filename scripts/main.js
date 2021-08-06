
import { venusExport } from "./WillYouBeMine.js";


const mainContainer = document.querySelector("#container")

const mainRenderHTML = () => {
    mainContainer.innerHTML = venusExport()
    
}
mainRenderHTML()

document.addEventListener("stateChanged", 
(event) => {
    mainRenderHTML()
  
    
    console.log("State changed.")
}
)