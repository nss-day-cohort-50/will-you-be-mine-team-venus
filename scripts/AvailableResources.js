import { getAvailableResources, getColonies, getGovernors, getMinerals, getTransientState } from "./dataAccess.js"

const resources = getAvailableResources()
const transientState = getTransientState()
const colonies = getColonies()
const governors = getGovernors()
const minerals = getMinerals ()

export const listAvailableResources = () => {
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

    const foundMinerals = minerals.filter(
        (mineral) => {
            return foundAvailableResources.mineralId === mineral.id
        }
    )
    

    for (const foundMineral of foundMinerals) {
        html += `<li>${foundMineral.name}</li>`
    }



    html += `</ul>`
    return html
}