import { getMineralAtFacility, getMinerals, getTransientState } from "./dataAccess.js";

const minerals = getMinerals()
const transientState = getTransientState()
const facilityResources = getMineralAtFacility()

export const renderFacilityMineralsList = () => {
    if (transientState.selectedFacility > 0) {
        let html = `<h3>Available Minerals:</h3>`
        html += `<ul>`

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



// for (const facility of facilities) {
//     if (facility.id === transientState.selectedFacility) {
//         const foundMineralArray = minerals.filter(
//             (mineral) => {
//                 if (mineral.id === mineralAtFacility.mineralId) {
//                     return `
//                     <li>${mineralAtFacility.amount} tons of ${foundMineralArray.name}</li>
//                     `
//                 }
//             }
//         )
//     }
// }