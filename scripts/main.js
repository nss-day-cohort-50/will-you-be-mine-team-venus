
import { venusExport } from "./WillYouBeMine.js";


const mainContainer = document.querySelector("#container")
const availableResources = document.querySelector("#availableResources")

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