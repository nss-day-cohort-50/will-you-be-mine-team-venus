import { listFacilities } from "./Facilities.js";
import { venusExport } from "./WillYouBeMine.js";

const mainContainer = document.querySelector("#container")

const mainRenderHTML = () => {
    mainContainer.innerHTML = venusExport()
}
mainRenderHTML()

const facilitiesContainer = document.querySelector("#facilitiesContainer")
const renderFacilities = () => {
    facilitiesContainer.innerHTML = listFacilities()
}

document.addEventListener("change",
    (event) => {
        if (event.target.name === "governorMenu") {
            renderFacilities()
        }
    }
)