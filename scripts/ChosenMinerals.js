import { getFacilities, getMineralAtFacility, getMinerals, getTransientState } from "./dataAccess.js";

const transientState = getTransientState()
const facilityMinerals = getMineralAtFacility()
const minerals = getMinerals()
const facilities = getFacilities()
const chosenMinerals = transientState.chosenMinerals


export const chosenMineralsList = () => {
    let html = `<h2>Chosen Minerals</h2><ul>`

    for (const chosenMineral of chosenMinerals) {
        if (chosenMineral.facilityMineralId > 0) {
            const foundFacility = facilities.find(
                (facility) => {
                    return facility.id === chosenMineral.facilityId
                }
            )
            const foundFacilityMineral = facilityMinerals.find(
                (facilityMineral) => {
                    return facilityMineral.id === chosenMineral.facilityMineralId
                }
            )
            const foundMineral = minerals.find(
                (mineral) => {
                    return mineral.id === foundFacilityMineral.mineralId
                }
            )
            html += `<li>You have chosen ${foundMineral.name} from ${foundFacility.name} facility.</li>`
        }

    }

    html += `</ul>`
    return html
}