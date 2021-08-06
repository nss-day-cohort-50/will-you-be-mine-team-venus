import { getAvailableResources, getChosenGovernor, getColonies, getGovernors, getMineralAtFacility, getMinerals } from "./dataAccess.js";


const governorsArray = getGovernors()
const colonies = getColonies()
const availableResources = getAvailableResources()
const mineralsAtFacility = getMineralAtFacility()
const minerals = getMinerals()

// export const listAvailableResources = () => {
//     let html = `<ul>`

//     const foundColony = colonies.find(
//         (colony) => {
//             for (const governor of governorsArray) {
//                 return colony.id === governor.colonyId
//             }
//         }
//     )

//     const foundResources = availableResources.find(
//         (resource) => {
//             if (resource.colonyId === foundColony.id) {
//                 return resource
//             }
//         }
//     )

//     const foundFacilityMinerals = mineralsAtFacility.find(
//         (facilityMineral) => {
//             if (foundResources.mineralId === facilityMineral.id) {
//                 return facilityMineral
//             }
//         }
//     )

//     const mineralName = minerals.find(
//         (mineral) => {
//             if (foundFacilityMinerals.mineralId === mineral.id) {
//                 return mineral
//             }
//         }
//     )

//     html += `<li> ${mineralName.name} </li>`

//     html += `</ul>`
//     return html

// }
