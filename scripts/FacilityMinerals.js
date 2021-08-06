import { getMineralAtFacility, getMinerals } from "./dataAccess.js";

const mineralAtFacility = getMineralAtFacility()
const minerals = getMinerals()

export const renderFacilityMineralsList = (facilityId) => {
    let html = `<ul>`

    if (facilityId === mineralAtFacility.facilityId) {
        const foundMineralArray = minerals.filter(
            (mineral) => {
                if (mineral.id === mineralAtFacility.mineralId) {
                    return `
                    <li>${mineralAtFacility.amount} tons of ${mineral.name}</li>
                    `
                }
            }
        )
    }

    html += `</ul>`
    return html
}

export const renderFacilityMineralsHTML = () => {
    const resourceContainer = document.querySelector('#listResources')
    resourceContainer.innerHTML = renderFacilityMineralsList()
}