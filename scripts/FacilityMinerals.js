import { getFacilities, getMineralAtFacility, getMinerals, getTransientState } from "./dataAccess.js";

const minerals = getMinerals()
const transientState = getTransientState()
const facilityResources = getMineralAtFacility()
const facilities = getFacilities()

// document.addEventListener("changed",
//     (event) => {
//         if(event.target.name === `facility-button__${facility.id}`){

//             document.dispatchEvent(new CustomEvent("stateChanged"))
//         }
//     }
// )

export const renderFacilityMineralsList = () => {
    if (transientState.selectedFacility > 0) {
        let html = `<h3>Available Minerals:</h3>`
        html += `<ul class="facility-mineral-list">`

        const foundFacilityResources = facilityResources.filter(
            (resource) => {
                return resource.facilityId === transientState.selectedFacility
            }
        )

        for (const resource of foundFacilityResources) {
            for (const mineral of minerals) {
                if (resource.mineralId === mineral.id) {
                    html += `<li>${resource.amount} tons of ${mineral.name}</li>`
                }
            }
        }

        html += `</ul>`
        return html
    } else {
        return ''
    }
}

export const listFacilityMinerals = () => {
    let html = ''
    for (const facility of facilities) {
        html += `<section class="facility-minerals">`
        if (facility.id === transientState.selectedFacility) {
            html += `${renderFacilityMineralsList()}`
        }

        html += `</section>`
    }
    return html
}