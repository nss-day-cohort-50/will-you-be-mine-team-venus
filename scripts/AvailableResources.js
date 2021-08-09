import { getAvailableResources, getColonies, getGovernors, getMinerals, getTransientState } from "./dataAccess.js"

const resources = getAvailableResources()
const transientState = getTransientState()
const colonies = getColonies()
const governors = getGovernors()
const minerals = getMinerals()

export const listAvailableResources = () => {
    if (transientState.chosenGovernor > 0) {
        let html = `<ul>`

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

        html += `</ul>`
        return html
    } else {
        return `<h2>Colony Resources</h2>`
    }
}