import { getFacilities, getMineralAtFacility, getMinerals, getTransientState, setChosenMineral } from "./dataAccess.js";
import { database } from "./database.js";
import { setBackground } from "./Facilities.js";

const minerals = getMinerals()
const transientState = getTransientState()
const facilityResources = getMineralAtFacility()
const facilities = getFacilities()


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "mineral") {
            setChosenMineral(parseInt(event.target.value))
            setBackground()
        }
    }
)

export const renderFacilityMineralsList = () => {

    const chosenMinerals = database.transientState.chosenMinerals;

    if (transientState.selectedFacility > 0) {
        let html = `<h3 class="available-minerals">Available Minerals:</h3>`
        html += `<ul class="facility-mineral-list">`


        const foundFacilityResources = facilityResources.filter(
            (resource) => {
                return resource.facilityId === transientState.selectedFacility
            }
        )

        for (const facilityMineral of foundFacilityResources) {

            const mineral = minerals.find(
                (mineral) => {
                    return mineral.id === facilityMineral.mineralId
                }
            )

            const foundChosenMineral = chosenMinerals.find(
                (mineralObject) => {
                    return mineralObject.facilityId === facilityMineral.facilityId
                }
            )

            if (foundChosenMineral.facilityId === facilityMineral.facilityId && foundChosenMineral.facilityMineralId === facilityMineral.id) {
                html += `<li><input type="radio" name="mineral" value="${facilityMineral.id}" checked>${facilityMineral.amount} tons of ${mineral.name}</input></li>`
            } else {
                html += `<li><input type="radio" name="mineral" value="${facilityMineral.id}">${facilityMineral.amount} tons of ${mineral.name}</input></li>`
            }

        }
        html += `</ul>`
        return html
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

export const renderSections = () => {
    let html = ''
    html += `<section class="mineral-list">`
    if (transientState.selectedFacility === 1) {
        html += renderFacilityMineralsList()
    }
    html += `</section>`

    html += `<section class="mineral-list">`
    if (transientState.selectedFacility === 2) {
        html += renderFacilityMineralsList()
    }
    html += `</section>`

    html += `<section class="mineral-list">`
    if (transientState.selectedFacility === 3) {
        html += renderFacilityMineralsList()
    }
    html += `</section>`

    html += `<section class="mineral-list">`
    if (transientState.selectedFacility === 4) {
        html += renderFacilityMineralsList()
    }
    html += `</section>`

    return html
}