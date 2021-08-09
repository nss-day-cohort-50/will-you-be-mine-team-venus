import { getFacilities, getMineralAtFacility, getMinerals, getTransientState, setChosenMineral } from "./dataAccess.js";

const minerals = getMinerals()
const transientState = getTransientState()
const facilityResources = getMineralAtFacility()
const facilities = getFacilities()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "mineral") {
            setChosenMineral(parseInt(event.target.value))
            console.log(transientState.chosenMinerals)
        }
    }
)

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
                    if (transientState.chosenMinerals === resource.id){
                        html += `<input type="radio" name="mineral" value="${resource.id}" checked>${resource.amount} tons of ${mineral.name}</input>`}
                    else{
                        html += `<input type="radio" name="mineral" value="${resource.id}">${resource.amount} tons of ${mineral.name}</input>`
                    }
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