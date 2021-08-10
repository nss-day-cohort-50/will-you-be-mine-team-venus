import { database } from "./database.js"

export const getGovernors = () => {
    return database.governors.map(governor => ({ ...governor }))
}

export const getMinerals = () => {
    return database.minerals.map(mineral => ({ ...mineral }))
}

export const getFacilities = () => {
    return database.facilities.map(facility => ({ ...facility }))
}

export const getColonies = () => {
    return database.colonies.map(colony => ({ ...colony }))
}

export const getMineralAtFacility = () => {
    return database.mineralAtFacility.map(mineral => ({ ...mineral }))
}

export const getAvailableResources = () => {
    return database.availableResources.map(mineral => ({ ...mineral }))
}

export const setChosenMineral = (resourceId) => {
    const chosenMinerals = database.transientState.chosenMinerals;

    const foundTransientFacility = chosenMinerals.find(
        (mineral) => {
            return database.transientState.selectedFacility === mineral.facilityId
        }
    )

    foundTransientFacility.facilityMineralId = resourceId;

    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setGovernors = (id) => {
    database.transientState.chosenGovernor = id;
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
export const setFacility = (id) => {
    database.transientState.selectedFacility = id;
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const getTransientState = () => {
    return database.transientState
}

export const addCustomerOrder = () => {
    //Copy the current state of user choices
    const newOrder = { ...database.chosenMinerals }

    //Add a new primary key to the object
    const lastIndex = database.availableResources.length - 1
    newOrder.id = database.availableResources[lastIndex].id + 1

    //Add the new order object to custom orders state
    database.availableResources.push(newOrder)

    //Reset the temporary state for user choices
    database.chosenMinerals = {}

    document.dispatchEvent(new CustomEvent("stateChanged"))
}