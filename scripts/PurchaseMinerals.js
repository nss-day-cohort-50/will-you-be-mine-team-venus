import { getAvailableResources, getColonies, getGovernors, getMineralAtFacility, getMinerals, getTransientState, setColonyAmount } from "./dataAccess.js";

const transientState = getTransientState()
const facilityMinerals = getMineralAtFacility()
const minerals = getMinerals()

const chosenMinerals = transientState.chosenMinerals
const governors = getGovernors()
const colonies = getColonies()
const availableResources = getAvailableResources()


const getGovernorColony = () => {
    const chosenGovernor = transientState.chosenGovernor
    const foundGovernor = governors.find(
        (governor) => {
            return governor.id === chosenGovernor
        }
    )
    const foundColony = colonies.find(
        (colony) => {
            return colony.id === foundGovernor.colonyId
        }
    )
    return foundColony
}

const subtractFromFacility = () => {
    for (const chosenMineral of chosenMinerals) {
        if (chosenMineral.facilityMineralId > 0) {
            const foundMineralAtFacility = facilityMinerals.find(
                (facilityMineral) => {
                    return facilityMineral.id === chosenMineral.facilityMineralId
                }
                )
                foundMineralAtFacility.amount -= 1
                console.log(facilityMinerals)
        }
    }
}

const addToColony = () => {
    const foundColony = getGovernorColony()
    const foundAvailableResources = availableResources.find(
        (resource) => {
            for (const mineral of minerals) {
                return resource.colonyId === foundColony.id && resource.mineralId === mineral.id
            }
        }
    )
    foundAvailableResources.amountPurchased += 1

    setColonyAmount(foundAvailableResources.amountPurchased)
    console.log(availableResources)
}

export const addCustomerOrder = () => {
    subtractFromFacility()
    addToColony()

    //Reset the temporary state for user choices
    transientState.chosenMinerals.forEach(
        (chosenMineral) => {
            chosenMineral.facilityMineralId = 0
        }
    )
    console.log(transientState)

    document.dispatchEvent(new CustomEvent("stateChanged"))
}