import { database } from "./database.js"
import { governors } from "./governors.js"

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
export const setFacilityAmount = (facilityAmount) => {
    database.mineralAtFacility.amount = facilityAmount
}
export const setColonyAmount = (colonyAmount) => {
    database.mineralAtFacility.amount = colonyAmount
}

export const getTransientState = () => {
    return database.transientState
}