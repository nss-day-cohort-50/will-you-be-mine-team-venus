import { getFacilities, getTransientState, setFacility } from "./dataAccess.js"

const facilities = getFacilities()
const transientState = getTransientState()

document.addEventListener("click",
    (event) => {
        const itemClicked = event.target.name
        if (itemClicked.startsWith('facility-button')) {
            const [, facilityId] = itemClicked.split("__")
            for (const facility of facilities) {
                if (facility.id === parseInt(facilityId)) {
                    setFacility(parseInt(facilityId))
                    document.dispatchEvent(new CustomEvent("stateChanged"))
                }
            }
        }
    }
)

export const listFacilities = () => {
    if (transientState.chosenGovernor > 0) {
        let html = `<h2 class="select_facility">Select Facility</h2>`
        
        html += `<ul class="facility-button-list">`
        
        for (const facility of facilities) {
            if (facility.isActive === true) {
                html += `
                <li><button class="facility-button__${facility.id}" name="facility-button__${facility.id}">${facility.name}</button></li>`
            }
        }
        
        html += "</ul>"
        
        return html
    } else {
        return '<h2>Select Your Governor</h2>'
    }
}