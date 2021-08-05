import { getAvailableResources, getColonies, getGovernors, getMineralAtFacility, getMinerals } from "./dataAccess.js";
import { governors } from "./governors.js";

const governorsArray = getGovernors()
const colonies = getColonies()
const availableResources = getAvailableResources()
const mineralsAtFacility = getMineralAtFacility()
const minerals = getMinerals()

export const listAvailableResources = () => {
    let html = `<ul>`
    for (const governor of governorsArray) {
        for (const colony of colonies) {
            if (governor.colonyId === colony.id) {
                for (const resource of availableResources)
                    if (resource.colonyId === colony.id) {
                        for (const mineralAtFacility of mineralsAtFacility)
                            if (resource.mineralId === mineralAtFacility.mineralId) {
                                for (const mineral of minerals) {
                                    if (mineralAtFacility.mineralId === mineral.id) {
                                        html += `
                                            <li>
                                            ${mineral.name}: ${mineralAtFacility.amount}
                                            </li>
                                        `
                                    }
                                }
                            }
                    }
            }
        }
    }

    html += `</ul>`
    return html
}