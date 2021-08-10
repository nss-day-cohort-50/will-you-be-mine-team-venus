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
            return foundMineralAtFacility.amount -= 1
        }
    }
}

const addToColony = () => {
    const foundColony = getGovernorColony()
    const foundMineral = facilityMinerals.find(
        (mineral) => {
            for (const chosenMineral of chosenMinerals) {
                return chosenMineral.facilityMineralId === mineral.id
            }
        }
    )
    const foundAvailableResource = availableResources.find(
        (resource) => {
            return resource.colonyId === foundColony.id && resource.mineralId === foundMineral.mineralId
        }
    )
    return foundAvailableResource.amountPurchased += 1

    // foundAvailableResources.amountPurchased += 1
    // setColonyAmount(foundAvailableResources.amountPurchased)  
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
    console.log(availableResources)
    document.dispatchEvent(new CustomEvent("stateChanged"))
}