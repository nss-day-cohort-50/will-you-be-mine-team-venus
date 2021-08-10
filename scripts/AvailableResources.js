import { getAvailableResources, getColonies, getGovernors, getMinerals, getTransientState } from "./dataAccess.js"

const resources = getAvailableResources()
const transientState = getTransientState()
const colonies = getColonies()
const governors = getGovernors()
const minerals = getMinerals()

export const listAvailableResources = () => {
    const resources = getAvailableResources()
    const transientState = getTransientState()
    const colonies = getColonies()
    const governors = getGovernors()
    const minerals = getMinerals()

    if (transientState.chosenGovernor > 0) {
        const foundGovernor = governors.find(
            (governor) => {
                return transientState.chosenGovernor === governor.id
            }
        )

        const foundColony = colonies.find(
            (colony) => {
                return foundGovernor.colonyId === colony.id
            }
        )

        let html = `<section class="colony-minerals"><h2>${foundColony.name}</h2>`
        html += `<ul class="colony-mineral-list">`

        const foundAvailableResources = resources.filter(
            (resource) => {
                return foundColony.id === resource.colonyId
            }
        )

        for (const resource of foundAvailableResources) {
            for (const mineral of minerals) {
                if (mineral.id === resource.mineralId) {

                    html += `<li>${resource.amountPurchased} tons of ${mineral.name}</li>`
                }
            }
        }

        html += `</ul></section>`
        return html
    } else {
        return `<h2>Colony Resources</h2>`
    }
}